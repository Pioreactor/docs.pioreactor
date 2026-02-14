#!/usr/bin/env python3
"""Find image files in static/ that are not referenced in the repository."""

from __future__ import annotations

import argparse
import os
import re
from pathlib import Path
from typing import Iterable


IMAGE_SUFFIXES: set[str] = {
    ".avif",
    ".bmp",
    ".gif",
    ".ico",
    ".jpeg",
    ".jpg",
    ".png",
    ".svg",
    ".tif",
    ".tiff",
    ".webp",
}

TEXT_SUFFIXES: set[str] = {
    ".css",
    ".html",
    ".js",
    ".json",
    ".jsx",
    ".md",
    ".mdx",
    ".scss",
    ".ts",
    ".tsx",
    ".yaml",
    ".yml",
}

EXCLUDED_DIRS: set[str] = {
    ".codex",
    ".docusaurus",
    ".git",
    ".tickets",
    "build",
    "node_modules",
    "static",
}

DEFAULT_REFERENCE_SOURCES: tuple[str, ...] = (
    "user-guide",
    "developer-guide",
    "experiments",
    "src",
    "docusaurus.config.js",
    "sidebars.js",
)

IMAGE_TOKEN_RE = re.compile(
    r"""(?P<quote>['"`])(?P<path>[^'"`\n]+?\.(?:avif|bmp|gif|ico|jpe?g|png|svg|tiff?|webp))(?P=quote)""",
    re.IGNORECASE,
)
IMG_WEB_PATH_RE = re.compile(
    r"""/img/[^\s"'`)\]>]+?\.(?:avif|bmp|gif|ico|jpe?g|png|svg|tiff?|webp)""",
    re.IGNORECASE,
)
STATIC_PATH_RE = re.compile(
    r"""(?:@site/)?/?static/img/[^\s"'`)\]>]+?\.(?:avif|bmp|gif|ico|jpe?g|png|svg|tiff?|webp)""",
    re.IGNORECASE,
)


def strip_url_suffix(path: str) -> str:
    return path.split("?", 1)[0].split("#", 1)[0]


def normalize_reference_to_static_path(reference: str) -> Path | None:
    cleaned = strip_url_suffix(reference.strip())
    lowered = cleaned.lower()

    if lowered.startswith("/img/"):
        return Path("img") / cleaned[len("/img/") :]
    if lowered.startswith("img/"):
        return Path("img") / cleaned[len("img/") :]
    if lowered.startswith("@site/static/"):
        return Path(cleaned[len("@site/static/") :])
    if lowered.startswith("/static/"):
        return Path(cleaned[len("/static/") :])
    if lowered.startswith("static/"):
        return Path(cleaned[len("static/") :])
    if lowered.startswith(("http://", "https://", "data:", "mailto:", "#", "/")):
        return None

    # Dynamic React requires like /static/img/${imageUrl} often pass "misc/foo.svg".
    if "/" in cleaned and Path(cleaned).suffix.lower() in IMAGE_SUFFIXES:
        return Path("img") / cleaned

    return None


def extract_reference_tokens(text: str) -> set[str]:
    tokens: set[str] = set()
    tokens.update(match.group(0) for match in IMG_WEB_PATH_RE.finditer(text))
    tokens.update(match.group(0) for match in STATIC_PATH_RE.finditer(text))
    tokens.update(match.group("path") for match in IMAGE_TOKEN_RE.finditer(text))
    return {strip_url_suffix(token) for token in tokens}


def iter_repo_text_files(repo_root: Path, sources: Iterable[str]) -> Iterable[Path]:
    for source in sources:
        source_path = (repo_root / source).resolve()
        if not source_path.exists():
            continue

        if source_path.is_file():
            if source_path.suffix.lower() in TEXT_SUFFIXES:
                yield source_path
            continue

        for root, dirs, files in os.walk(source_path):
            dirs[:] = [name for name in dirs if name not in EXCLUDED_DIRS and not name.startswith(".")]
            root_path = Path(root)

            for filename in files:
                if filename.startswith("."):
                    continue
                file_path = root_path / filename
                if file_path.suffix.lower() in TEXT_SUFFIXES:
                    yield file_path


def iter_static_images(static_dir: Path) -> Iterable[Path]:
    for path in static_dir.rglob("*"):
        if not path.is_file():
            continue
        if path.name.startswith("."):
            continue
        if path.suffix.lower() not in IMAGE_SUFFIXES:
            continue
        yield path


def find_used_static_images(
    repo_root: Path, static_dir: Path, sources: Iterable[str]
) -> tuple[set[Path], set[str]]:
    used: set[Path] = set()
    missing_refs: set[str] = set()

    for source_file in iter_repo_text_files(repo_root, sources):
        text = source_file.read_text(encoding="utf-8", errors="ignore")

        for token in extract_reference_tokens(text):
            static_relative = normalize_reference_to_static_path(token)
            if static_relative is None:
                continue

            target = (static_dir / static_relative).resolve()
            if target.exists():
                used.add(target)
            elif static_relative.parts and static_relative.parts[0] == "img":
                missing_refs.add(token)

    return used, missing_refs


def main() -> None:
    parser = argparse.ArgumentParser(description="Find images under static/ that are not referenced.")
    parser.add_argument("--repo-root", default=os.getcwd(), help="Repository root (default: cwd)")
    parser.add_argument(
        "--static-dir",
        default="static",
        help="Path to static directory, relative to --repo-root if not absolute (default: static)",
    )
    parser.add_argument(
        "--show-missing-refs",
        action="store_true",
        help="Also print image references that point to missing files in static/",
    )
    parser.add_argument(
        "--fail-on-unused",
        action="store_true",
        help="Exit with code 1 when unused images are found.",
    )
    parser.add_argument(
        "--source",
        action="append",
        default=[],
        help=(
            "Additional source path to scan for references. "
            "Can be provided multiple times and is relative to --repo-root when not absolute."
        ),
    )
    args = parser.parse_args()

    repo_root = Path(args.repo_root).resolve()
    static_dir = Path(args.static_dir)
    if not static_dir.is_absolute():
        static_dir = (repo_root / static_dir).resolve()

    if not static_dir.exists():
        raise SystemExit(f"static directory not found: {static_dir}")

    all_images = {path.resolve() for path in iter_static_images(static_dir)}
    sources = list(DEFAULT_REFERENCE_SOURCES)
    sources.extend(args.source)
    used_images, missing_refs = find_used_static_images(repo_root, static_dir, sources)
    unused_images = sorted(path for path in all_images if path not in used_images)

    print(f"Scanned {len(all_images)} image files under {static_dir}")
    print(f"Referenced images: {len(used_images)}")
    print(f"Unused images: {len(unused_images)}")
    print("")

    for path in unused_images:
        print(path.relative_to(repo_root).as_posix())

    if args.show_missing_refs and missing_refs:
        print("")
        print(f"Missing image references ({len(missing_refs)}):")
        for ref in sorted(missing_refs):
            print(ref)

    if args.fail_on_unused and unused_images:
        raise SystemExit(1)


if __name__ == "__main__":
    main()
