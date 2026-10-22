#!/usr/bin/env python3

import datetime
import difflib
import json
import os
import re
import pathlib
import subprocess
from collections import defaultdict
from typing import Any, List, Optional, Tuple

WINDOW_DAYS = int(os.getenv("WINDOW_DAYS", "30"))
SIGNIFICANT_LINE_THRESHOLD = int(os.getenv("SIGNIFICANT_LINE_THRESHOLD", "20"))
CLASS_NAME = "sidebar-item--updated"
TARGET_DIRS = ("user-guide", "developer-guide")
TARGET_EXTS = {".md", ".mdx"}
EXCLUDED_PATH_PREFIXES = ("user-guide/01-getting-started/01-assembly_guides/",)
UPDATED_SECTIONS_PATH = pathlib.Path("src/data/updated-sections.json")

FENCE_RE = re.compile(r"^\s*(```|~~~)")
SECTION_HEADING_RE = re.compile(r"^#{2,6}\s+(.+?)\s*#*\s*$")
LIST_NUMBER_RE = re.compile(r"^\s*\d+[.)]\s+")


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


def changed_sections(base: str, path: str) -> List[dict[str, Any]]:
    old_lines = run_git(["show", f"{base}:{path}"]).splitlines()
    lines = pathlib.Path(path).read_text(encoding="utf-8").splitlines()
    sections = section_for_each_line(lines)

    old_cmp = [comparable(line) for line in old_lines]
    new_cmp = [comparable(line) for line in lines]
    matcher = difflib.SequenceMatcher(None, old_cmp, new_cmp, autojunk=False)

    changed: List[Tuple[str, int]] = []
    for tag, i1, i2, j1, j2 in matcher.get_opcodes():
        if tag == "equal":
            continue
        if not any(old_cmp[i1:i2]) and not any(new_cmp[j1:j2]):
            continue
        if j2 > j1:
            touched = sections[j1:j2]
        else:
            touched = [sections[j1 - 1]] if 0 < j1 <= len(sections) else []
        for section in touched:
            if section and section not in changed:
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
