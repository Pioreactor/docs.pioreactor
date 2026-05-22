.PHONY: help install dev build serve clear deploy unused-static-images standardize-user-guide-images publication-asset-zips

help:
	@printf "Available targets:\n"
	@printf "  make install  Install npm dependencies\n"
	@printf "  make dev      Start the Docusaurus development server\n"
	@printf "  make build    Build the static site\n"
	@printf "  make serve    Serve the built site locally\n"
	@printf "  make clear    Clear Docusaurus caches\n"
	@printf "  make deploy   Deploy with Docusaurus\n"
	@printf "  make unused-static-images                         List images under static/ that are not referenced\n"
	@printf "  make standardize-user-guide-images TARGET=<path>  Copy user-guide images to standard per-page folders and update refs\n"
	@printf "  make publication-asset-zips                       Rebuild publication asset zip files under static/media-assets\n"

install:
	npm install

dev:
	npm run start -- --port 8001

build:
	npm run build

serve:
	npm run serve

clear:
	npm run clear

deploy:
	npm run deploy

unused-static-images:
	python3 scripts/find_unused_static_images.py

standardize-user-guide-images:
	@test -n "$(TARGET)" || (printf "Usage: make standardize-user-guide-images TARGET=<user-guide doc or directory>\n" >&2; exit 1)
	python3 scripts/standardize_user_guide_images.py "$(TARGET)"

publication-asset-zips:
	scripts/build_publication_asset_zips.sh
