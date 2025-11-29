#!/usr/bin/env python3

import datetime
import os
import pathlib
import subprocess
from collections import defaultdict
from typing import List, Optional, Tuple

WINDOW_DAYS = int(os.getenv("WINDOW_DAYS", "30"))
SIGNIFICANT_LINE_THRESHOLD = int(os.getenv("SIGNIFICANT_LINE_THRESHOLD", "20"))
CLASS_NAME = "sidebar-item--updated"
TARGET_DIRS = ("user-guide", "developer-guide")
TARGET_EXTS = {".md", ".mdx"}
EXCLUDED_PATH_PREFIXES = ("user-guide/01-getting-started/01-assembly_guides/",)


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
