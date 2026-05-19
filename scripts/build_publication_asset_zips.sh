#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "${SCRIPT_DIR}/.." && pwd)"
MEDIA_DIR="${REPO_ROOT}/static/media-assets"
ASSET_DIR="${MEDIA_DIR}/pioreactor-publication-assets"

if ! command -v zip >/dev/null 2>&1; then
  echo "zip is required but was not found." >&2
  exit 1
fi

if [[ ! -d "${ASSET_DIR}" ]]; then
  echo "Asset directory not found: ${ASSET_DIR}" >&2
  exit 1
fi

cd "${MEDIA_DIR}"

zip_family() {
  local folder="$1"
  local output="$2"

  if [[ ! -d "pioreactor-publication-assets/${folder}" ]]; then
    echo "Skipping missing family: ${folder}" >&2
    return 0
  fi

  zip -qr -FS "${output}" "pioreactor-publication-assets/${folder}" -x '*/.DS_Store'
  echo "Wrote ${MEDIA_DIR}/${output}"
}

zip_family "logos" "pioreactor-publication-assets-logos.zip"
zip_family "product-photos" "pioreactor-publication-assets-product-photos.zip"
zip_family "screenshots" "pioreactor-publication-assets-screenshots.zip"
zip_family "diagrams" "pioreactor-publication-assets-diagrams.zip"
zip_family "icon_svgs" "pioreactor-publication-assets-icon-svgs.zip"

zip -qr -FS "pioreactor-publication-assets.zip" "pioreactor-publication-assets" -x '*/.DS_Store'
echo "Wrote ${MEDIA_DIR}/pioreactor-publication-assets.zip"
