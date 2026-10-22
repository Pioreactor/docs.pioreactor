import fs from 'fs';
import path from 'path';

// Wraps each "## " section listed in src/data/updated-sections.json (written
// nightly by .github/scripts/mark_recent_docs.py) so it can be styled as recently changed.
const DATA_PATH = path.resolve('src/data/updated-sections.json');
const CLASS_NAME = 'doc-section--updated';

const normalize = (text) => text.toLowerCase().replace(/[^\p{L}\p{N}]/gu, '');

function plainText(node) {
  if (typeof node.value === 'string') return node.value;
  return (node.children ?? []).map(plainText).join('');
}

export default function updatedSections() {
  const updated = fs.existsSync(DATA_PATH)
    ? JSON.parse(fs.readFileSync(DATA_PATH, 'utf-8'))
    : {};

  return (tree, file) => {
    const headings = updated[path.relative(process.cwd(), file.path)];
    if (!headings) return;
    const wanted = new Set(headings.map(normalize));

    const children = [];
    let section = null;
    for (const node of tree.children) {
      if (node.type === 'heading' && node.depth <= 2) {
        section = null;
        if (node.depth === 2 && wanted.has(normalize(plainText(node)))) {
          section = {
            type: 'updatedSection',
            data: { hName: 'div', hProperties: { className: [CLASS_NAME] } },
            children: [],
          };
          children.push(section);
        }
      }
      (section ? section.children : children).push(node);
    }
    tree.children = children;
  };
}
