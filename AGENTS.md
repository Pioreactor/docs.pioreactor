# docs.pioreactor contribution notes

## Important locations
- **Documentation content** lives in three main Docusaurus doc folders at the repo root:
  - `user-guide/` for end-user operations and walkthroughs.
  - `developer-guide/` for development and extension topics.
  - `experiments/` for experiment showcases and ideas.
  Each directory is organized with category `_category_.json` files and MDX content that Docusaurus ingests directly.
- **Site configuration** is centralized in `docusaurus.config.js`, `sidebars.js`, and supporting assets in `src/` (React components and custom CSS).
- **Static assets** are stored under `static/`:
  - `static/img/` contains hero art, logos, and almost all screenshots, organized by the doc area they serve.
  - `static/vid/` houses mp4/gif assets that can be linked directly from documentation.
  - Files placed under `static/` are copied verbatim to the built site, so maintain clean filenames and avoid private data.
- **Automation and build scripts** rely on the standard Docusaurus npm scripts defined in `package.json` (e.g., `npm run start`, `npm run build`).

## Screenshot guidelines
- Screenshots are committed as PNGs and grouped in sub-folders under `static/img/` (for example `static/img/user-guide/`).
- Existing screenshots are usually high-resolution captures taken from the Pioreactor UI; the common sizes range from ~1400×750 up to ~3200×1650 to keep interface text legible on Retina displays.
- When adding new screenshots:
  - Capture the full relevant UI panel without cropping away context, and prefer light-theme UI unless the article explicitly targets dark-theme behavior.
  - Export as PNG to preserve crisp text and UI accents. JPEGs are discouraged unless file size becomes an issue for photos.
  - Resize or compress only if the asset exceeds several megabytes; `pngquant` works well and keeps transparency intact.
  - Place the file in the matching doc-area subfolder and reference it with a relative path such as `/img/user-guide/<filename>.png`.
  - Large assets should be reviewed to ensure no dimensions explode to placeholder values (for example, some legacy `custom_*` assets show `167772160×671088640` metadata and should be replaced if touched).

## Tech stack
- The documentation site is built with **Docusaurus 3** on top of **React 18** and MDX content. Styling extends the classic Docusaurus theme via custom CSS in `src/css/`.
- JavaScript tooling is managed with **Node.js** and npm. Install dependencies with `npm install` (Node 18+ recommended) and run the local preview with `npm run start`.
- Search is powered by the `@easyops-cn/docusaurus-search-local` plugin; diagrams and math rendering use `remark-math`/`rehype-katex`.

## Other helpful notes
- Follow Docusaurus front-matter conventions (`id`, `title`, `sidebar_label`, `description`) so pages appear in the correct sidebar.
- Use MDX for interactive examples—React components live in `src/components/` and can be imported into docs when needed.
- When reusing or adding React components from `src/components/`, prefer existing shared widgets (callouts, tabs, step-by-step helpers) before creating new ones, keep props well-documented in the component file, and ensure styles stay co-located in `src/css/custom.css` or the component's module CSS.
- For contributor workflow: create descriptive branch names, run `npm run build` locally if you modify configuration or dependencies, and ensure linting/formatting stays consistent with Prettier defaults.
- Deployment is handled by GitHub Actions, but manual deploys use `USE_SSH=true GIT_USER=<github-username> npm run deploy` as documented in `README.md`.
- When embedding videos, copy them to `static/vid/` and reference them via HTML `<video>` tags in MDX rather than external hosts (keeps docs offline-friendly).
