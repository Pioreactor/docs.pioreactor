import fs from 'fs';
import path from 'path';

// Wraps each section (a heading below the title, running to the next heading of any
// level) listed in src/data/updated-sections.json (written nightly by
// .github/scripts/mark_recent_docs.py) so it can be styled as recently changed.
// Entries are {heading, occurrence} so duplicate heading text is disambiguated.
// Consecutive changed sections share one wrapper so the accent bar is continuous.
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
    const entries = updated[path.relative(process.cwd(), file.path)];
    if (!entries) return;
    const wanted = new Set(
      entries.map(({ heading, occurrence }) => `${normalize(heading)}#${occurrence}`),
    );

    const children = [];
    const seen = new Map();
    let section = null;
    for (const node of tree.children) {
      if (node.type === 'heading') {
        let isUpdated = false;
        if (node.depth >= 2) {
          const text = normalize(plainText(node));
          const occurrence = (seen.get(text) ?? 0) + 1;
          seen.set(text, occurrence);
          isUpdated = wanted.has(`${text}#${occurrence}`);
        }
        if (!isUpdated) {
          section = null;
        } else if (!section) {
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
