#!/usr/bin/env python3

import datetime
import difflib
import json
import os
import re
import pathlib
import subprocess
from collections import Counter, defaultdict
from typing import Any, List, Optional, Tuple

WINDOW_DAYS = int(os.getenv("WINDOW_DAYS", "30"))
SIGNIFICANT_LINE_THRESHOLD = int(os.getenv("SIGNIFICANT_LINE_THRESHOLD", "20"))
PROSE_WORD_THRESHOLD = int(os.getenv("PROSE_WORD_THRESHOLD", "10"))
CLASS_NAME = "sidebar-item--updated"
TARGET_DIRS = ("user-guide", "developer-guide")
TARGET_EXTS = {".md", ".mdx"}
EXCLUDED_PATH_PREFIXES = ("user-guide/01-getting-started/01-assembly_guides/",)
UPDATED_SECTIONS_PATH = pathlib.Path("src/data/updated-sections.json")

FENCE_RE = re.compile(r"^\s*(```|~~~)")
SECTION_HEADING_RE = re.compile(r"^#{2,6}\s+(.+?)\s*#*\s*$")
LIST_NUMBER_RE = re.compile(r"^\s*\d+[.)]\s+")
TOKEN_RE = re.compile(r"`[^`]*`|\S+")


def run_git(args: List[str]) -> str:
    result = subprocess.run(
        ["git", *args],
        check=True,
        capture_output=True,
        text=True,
    )
    return result.stdout


def list_tracked_docs() -> List[str]:
    output = run_git(["ls-files", *TARGET_DIRS])
    paths = []
    for line in output.splitlines():
        path = line.strip()
        if path.startswith(EXCLUDED_PATH_PREFIXES):
            continue
        if pathlib.Path(path).suffix in TARGET_EXTS:
            paths.append(path)
    return paths


def since_date(days: int) -> str:
    return (datetime.datetime.utcnow() - datetime.timedelta(days=days)).strftime(
        "%Y-%m-%d"
    )


def files_created_since(since: str, doc_set: set[str]) -> set[str]:
    output = run_git(
        [
            "log",
            "--since",
            since,
            "--diff-filter=A",
            "--name-only",
            "--pretty=format:",
            "--",
            *TARGET_DIRS,
        ]
    )
    return {line.strip() for line in output.splitlines() if line.strip() in doc_set}


def change_counts_since(since: str, doc_set: set[str]) -> dict[str, int]:
    output = run_git(
        [
            "log",
            "--since",
            since,
            "--pretty=format:",
            "--numstat",
            "--",
            *TARGET_DIRS,
        ]
    )
    counts: defaultdict[str, int] = defaultdict(int)
    for line in output.splitlines():
        parts = line.split("\t")
        if len(parts) != 3:
            continue
        added, removed, path = parts
        path = path.strip()
        if path not in doc_set:
            continue
        if added == "-" or removed == "-":
            counts[path] = max(counts[path], SIGNIFICANT_LINE_THRESHOLD)
            continue
        try:
            counts[path] += int(added) + int(removed)
        except ValueError:
            continue
    return counts


def revision_before(since: str) -> Optional[str]:
    rev = run_git(["rev-list", "-1", f"--before={since}", "HEAD"]).strip()
    return rev or None


def exists_at(rev: str, path: str) -> bool:
    result = subprocess.run(
        ["git", "cat-file", "-e", f"{rev}:{path}"], capture_output=True
    )
    return result.returncode == 0


def heading_text(raw: str) -> str:
    text = re.sub(r"\s*\{#[^}]*\}$", "", raw)
    text = re.sub(r"!?\[([^\]]*)\]\([^)]*\)", r"\1", text)
    return re.sub(r"<[^>]+>", "", text).strip()


def normalize(text: str) -> str:
    return "".join(c for c in text.lower() if c.isalnum())


def section_for_each_line(lines: List[str]) -> List[Optional[Tuple[str, int]]]:
    # sections[i] is the nearest heading of level 2 or deeper that line i+1 falls under, if any,
    # as (text, occurrence); occurrence counts earlier headings with the same
    # normalized text, starting at 1, so duplicate headings stay distinct.
    sections: List[Optional[Tuple[str, int]]] = []
    seen: defaultdict[str, int] = defaultdict(int)
    current = None
    in_fence = False
    for line in lines:
        if FENCE_RE.match(line):
            in_fence = not in_fence
        elif not in_fence:
            match = SECTION_HEADING_RE.match(line)
            if match:
                text = heading_text(match.group(1))
                seen[normalize(text)] += 1
                current = (text, seen[normalize(text)])
        sections.append(current)
    return sections


def comparable(line: str) -> str:
    # List renumbering and whitespace don't count as changes.
    return re.sub(r"\s+", "", LIST_NUMBER_RE.sub("", line))


def fenced_lines(lines: List[str]) -> List[bool]:
    fenced: List[bool] = []
    in_fence = False
    for line in lines:
        is_fence = bool(FENCE_RE.match(line))
        fenced.append(in_fence or is_fence)
        if is_fence:
            in_fence = not in_fence
    return fenced


def tokens(line: str, fenced: bool) -> List[Tuple[str, bool]]:
    # (token, is_code); an inline `code` span is one token
    return [
        (token, fenced or token.startswith("`"))
        for token in TOKEN_RE.findall(LIST_NUMBER_RE.sub("", line))
    ]


def changed_sections(base: str, path: str) -> List[dict[str, Any]]:
    # A section counts as changed when any code in it changed (commands, config keys,
    # code blocks) or at least PROSE_WORD_THRESHOLD words of prose did, so a typo or
    # email fix doesn't. Lines that only moved, and text from sections that no longer
    # exist, don't count against the sections around them.
    old_lines = run_git(["show", f"{base}:{path}"]).splitlines()
    new_lines = pathlib.Path(path).read_text(encoding="utf-8").splitlines()
    old_sections = section_for_each_line(old_lines)
    new_sections = section_for_each_line(new_lines)
    old_fenced = fenced_lines(old_lines)
    new_fenced = fenced_lines(new_lines)
    existing = set(new_sections)

    old_cmp = [comparable(line) for line in old_lines]
    new_cmp = [comparable(line) for line in new_lines]
    matcher = difflib.SequenceMatcher(None, old_cmp, new_cmp, autojunk=False)
    opcodes = [op for op in matcher.get_opcodes() if op[0] != "equal"]
    removed = {old_cmp[i] for _, i1, i2, _, _ in opcodes for i in range(i1, i2)}
    added = {new_cmp[j] for _, _, _, j1, j2 in opcodes for j in range(j1, j2)}
    moved = removed & added

    prose_words: Counter[Tuple[str, int]] = Counter()
    code_changed: set[Tuple[str, int]] = set()
    for _, i1, i2, j1, j2 in opcodes:
        old_tokens = [
            (token, is_code, old_sections[i])
            for i in range(i1, i2)
            if old_cmp[i] not in moved
            for token, is_code in tokens(old_lines[i], old_fenced[i])
        ]
        new_tokens = [
            (token, is_code, new_sections[j])
            for j in range(j1, j2)
            if new_cmp[j] not in moved
            for token, is_code in tokens(new_lines[j], new_fenced[j])
        ]
        word_matcher = difflib.SequenceMatcher(
            None,
            [token for token, _, _ in old_tokens],
            [token for token, _, _ in new_tokens],
            autojunk=False,
        )
        for tag, a1, a2, b1, b2 in word_matcher.get_opcodes():
            if tag == "equal":
                continue
            for _, is_code, section in old_tokens[a1:a2] + new_tokens[b1:b2]:
                if section is None or section not in existing:
                    continue
                if is_code:
                    code_changed.add(section)
                else:
                    prose_words[section] += 1

    changed: List[Tuple[str, int]] = []
    for section in new_sections:
        if section is None or section in changed:
            continue
        if section in code_changed or prose_words[section] >= PROSE_WORD_THRESHOLD:
            changed.append(section)
    return [{"heading": text, "occurrence": n} for text, n in changed]


def write_updated_sections(updated_sections: dict[str, List[dict[str, Any]]]) -> bool:
    text = json.dumps(updated_sections, indent=2, sort_keys=True) + "\n"
    if UPDATED_SECTIONS_PATH.exists() and UPDATED_SECTIONS_PATH.read_text(
        encoding="utf-8"
    ) == text:
        return False
    UPDATED_SECTIONS_PATH.parent.mkdir(parents=True, exist_ok=True)
    UPDATED_SECTIONS_PATH.write_text(text, encoding="utf-8")
    return True


def split_front_matter(
    text: str,
) -> Tuple[Optional[List[str]], List[str]]:
    lines = text.splitlines()
    if lines and lines[0].strip() == "---":
        for idx in range(1, len(lines)):
            if lines[idx].strip() == "---":
                return lines[1:idx], lines[idx + 1 :]
    return None, lines


def find_sidebar_line(front_lines: List[str]) -> Tuple[Optional[int], Optional[str]]:
    for idx, line in enumerate(front_lines):
        if line.lstrip().startswith("sidebar_class_name:"):
            return idx, line
    return None, None


def parse_sidebar_value(line: str) -> str:
    value = line.split(":", 1)[1].strip()
    if value.startswith(("'", '"')) and value.endswith(("'", '"')):
        return value[1:-1]
    return value


def format_sidebar_line(original_line: str, value: str) -> str:
    prefix = original_line.split("sidebar_class_name:")[0]
    return f"{prefix}sidebar_class_name: {value}"


def apply_sidebar_flag(
    front_lines: Optional[List[str]],
    body_lines: List[str],
    should_have_flag: bool,
) -> Tuple[Optional[List[str]], List[str], bool]:
    if front_lines is None:
        if not should_have_flag:
            return None, body_lines, False
        new_body = list(body_lines)
        if new_body and new_body[0].strip():
            new_body.insert(0, "")
        return [f"sidebar_class_name: {CLASS_NAME}"], new_body, True

    front = list(front_lines)
    sidebar_idx, sidebar_line = find_sidebar_line(front)
    changed = False

    if should_have_flag:
        if sidebar_idx is None:
            front.append(f"sidebar_class_name: {CLASS_NAME}")
            changed = True
        else:
            current_value = parse_sidebar_value(sidebar_line)
            tokens = current_value.split()
            if CLASS_NAME not in tokens:
                tokens.append(CLASS_NAME)
                updated_value = " ".join(tokens)
                front[sidebar_idx] = format_sidebar_line(sidebar_line, updated_value)
                changed = True
    else:
        if sidebar_idx is None:
            return front, body_lines, False
        current_value = parse_sidebar_value(sidebar_line)
        tokens = [token for token in current_value.split() if token != CLASS_NAME]
        if tokens:
            updated_value = " ".join(tokens)
            if updated_value != current_value:
                front[sidebar_idx] = format_sidebar_line(sidebar_line, updated_value)
                changed = True
        else:
            del front[sidebar_idx]
            while front and not front[-1].strip():
                front.pop()
            if not any(line.strip() for line in front):
                front = None
            changed = True

    return front, body_lines, changed


def assemble(
    front_lines: Optional[List[str]], body_lines: List[str], end_with_newline: bool
) -> str:
    parts: List[str] = []
    if front_lines is not None:
        parts.append("---")
        parts.extend(front_lines)
        parts.append("---")
    parts.extend(body_lines)
    text = "\n".join(parts)
    if end_with_newline and not text.endswith("\n"):
        text += "\n"
    return text


def update_file(path: pathlib.Path, should_have_flag: bool) -> bool:
    original_text = path.read_text(encoding="utf-8")
    keep_trailing_newline = original_text.endswith("\n")
    front_lines, body_lines = split_front_matter(original_text)
    new_front, new_body, changed = apply_sidebar_flag(
        front_lines, body_lines, should_have_flag
    )
    if not changed:
        return False
    new_text = assemble(new_front, new_body, keep_trailing_newline)
    path.write_text(new_text, encoding="utf-8")
    return True


def main() -> None:
    docs = list_tracked_docs()
    doc_set = set(docs)
    since = since_date(WINDOW_DAYS)

    created_recently = files_created_since(since, doc_set)
    change_counts = change_counts_since(since, doc_set)
    significant_changes = {
        path for path, total in change_counts.items() if total >= SIGNIFICANT_LINE_THRESHOLD
    }

    to_mark = created_recently | significant_changes

    changed_files = []
    for path_str in sorted(doc_set):
        path = pathlib.Path(path_str)
        should_have_flag = path_str in to_mark
        if update_file(path, should_have_flag):
            changed_files.append(path_str)

    # New pages are entirely new, so only highlight sections of edited pages.
    base = revision_before(since)
    updated_sections: dict[str, List[dict[str, Any]]] = {}
    if base:
        for path_str in sorted(significant_changes - created_recently):
            if not exists_at(base, path_str):
                continue
            sections = changed_sections(base, path_str)
            if sections:
                updated_sections[path_str] = sections
    if write_updated_sections(updated_sections):
        changed_files.append(str(UPDATED_SECTIONS_PATH))

    print(f"Window start: {since}")
    print(f"New files in window: {len(created_recently)}")
    print(f"Files with significant changes: {len(significant_changes)}")
    if changed_files:
        print("Updated sidebar_class_name in:")
        for path in changed_files:
            print(f" - {path}")
    else:
        print("No files required updates.")


if __name__ == "__main__":
    main()
