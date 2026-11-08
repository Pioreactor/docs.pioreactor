import fs from 'fs';
import path from 'path';

// Mark changed headings without wrapping or indenting their section content.
// Entries are {heading, occurrence} so duplicate headings stay distinct.
const DATA_PATH = path.resolve('src/data/updated-sections.json');
const CLASS_NAME = 'doc-heading--updated';

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

    const seen = new Map();
    for (const node of tree.children) {
      if (node.type !== 'heading' || node.depth < 2) continue;
      const text = normalize(plainText(node));
      const occurrence = (seen.get(text) ?? 0) + 1;
      seen.set(text, occurrence);
      if (!wanted.has(`${text}#${occurrence}`)) continue;
      node.data ??= {};
      node.data.hProperties ??= {};
      const classes = node.data.hProperties.className ?? [];
      node.data.hProperties.className = [
        ...(Array.isArray(classes) ? classes : classes.split(' ')),
        CLASS_NAME,
      ];
    }
  };
}
