.PHONY: help install dev build serve clear deploy

help:
	@printf "Available targets:\n"
	@printf "  make install  Install npm dependencies\n"
	@printf "  make dev      Start the Docusaurus development server\n"
	@printf "  make build    Build the static site\n"
	@printf "  make serve    Serve the built site locally\n"
	@printf "  make clear    Clear Docusaurus caches\n"
	@printf "  make deploy   Deploy with Docusaurus\n"

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
