#!/usr/bin/env python3
"""Copy user-guide images into the standard per-page folder and update doc refs.

Standard:
  static/img/user-guide/<section>/<page>/
where <section> and <page> are slugified from the doc path under user-guide/.
"""

from __future__ import annotations

import argparse
import os
import re
import shutil
from pathlib import Path
from typing import Iterable, Optional


def slugify(value: str) -> str:
    value = value.strip().lower()
    value = re.sub(r"[^a-z0-9]+", "-", value)
    return value.strip("-")


def iter_image_refs(markdown: str) -> Iterable[str]:
    # Match Markdown image syntax: ![alt](/img/user-guide/.../file.png)
    pattern = re.compile(r"!\[[^\]]*\]\((/img/user-guide/[^\)]+)\)")
    for match in pattern.finditer(markdown):
        yield match.group(1)


def compute_standard_dir(doc_path: Path, repo_root: Path) -> Optional[Path]:
    rel = doc_path.relative_to(repo_root / "user-guide")
    parts = rel.parts
    if len(parts) < 2:
        return None

    section = slugify(parts[0])
    page = slugify(Path(parts[-1]).stem)
    return repo_root / "static" / "img" / "user-guide" / section / page


def update_markdown_refs(markdown: str, old_to_new: dict[str, str]) -> str:
    for old, new in old_to_new.items():
        markdown = markdown.replace(old, new)
    return markdown


def find_existing_image_by_name(repo_root: Path, filename: str) -> Optional[Path]:
    matches = list((repo_root / "static" / "img" / "user-guide").rglob(filename))
    if len(matches) == 1:
        return matches[0]
    return None


def standardize(doc_path: Path, repo_root: Path, dry_run: bool) -> None:
    standard_dir = compute_standard_dir(doc_path, repo_root)
    if standard_dir is None:
        print(f"skipping (no section folder): {doc_path}")
        return
    standard_dir.mkdir(parents=True, exist_ok=True)

    markdown = doc_path.read_text(encoding="utf-8")
    old_to_new: dict[str, str] = {}

    for ref in iter_image_refs(markdown):
        # Only move user-guide images referenced by this doc
        if not ref.startswith("/img/user-guide/"):
            continue
        src = repo_root / "static" / ref.lstrip("/")
        if not src.exists():
            fallback = find_existing_image_by_name(repo_root, src.name)
            if fallback is None:
                print(f"missing source for {ref} in {doc_path}")
                continue
            src = fallback

        dest = standard_dir / src.name
        new_ref = f"/img/user-guide/{standard_dir.relative_to(repo_root / 'static' / 'img' / 'user-guide').as_posix()}/{src.name}"

        if src.resolve() == dest.resolve():
            continue

        old_to_new[ref] = new_ref

        if dest.exists():
            continue

        if dry_run:
            print(f"DRY RUN: would copy {src} -> {dest}")
        else:
            dest.parent.mkdir(parents=True, exist_ok=True)
            shutil.copy2(str(src), str(dest))
            print(f"copied {src} -> {dest}")

    if old_to_new:
        updated = update_markdown_refs(markdown, old_to_new)
        if dry_run:
            print(f"DRY RUN: would update refs in {doc_path}")
        else:
            doc_path.write_text(updated, encoding="utf-8")
            print(f"updated refs in {doc_path}")
    else:
        print("no image refs to update")


def iter_doc_paths(target: Path) -> Iterable[Path]:
    if target.is_dir():
        yield from target.rglob("*.md")
        yield from target.rglob("*.mdx")
    else:
        yield target


def main() -> None:
    parser = argparse.ArgumentParser(
        description="Move user-guide images into the standard per-page folder and update doc refs."
    )
    parser.add_argument(
        "target",
        help="Path to a user-guide doc file or directory (e.g., user-guide/03-Extending your Pioreactor/ or a specific .md/.mdx file)",
    )
    parser.add_argument(
        "--repo-root",
        default=os.getcwd(),
        help="Repository root (default: cwd)",
    )
    parser.add_argument("--dry-run", action="store_true", help="Print actions without changing files")
    args = parser.parse_args()

    target = Path(args.target).resolve()
    repo_root = Path(args.repo_root).resolve()

    if not target.exists():
        raise SystemExit(f"Target not found: {target}")

    docs_root = repo_root / "user-guide"
    for doc_path in iter_doc_paths(target):
        if docs_root not in doc_path.parents:
            continue
        standardize(doc_path, repo_root, args.dry_run)


if __name__ == "__main__":
    main()
