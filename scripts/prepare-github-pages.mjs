import { copyFile, cp, rm, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const dist = join(root, 'dist');
const docs = join(root, 'docs');
const indexHtml = join(dist, 'index.html');
const appHtml = join(dist, 'app.html');

if (existsSync(appHtml)) {
  await copyFile(appHtml, indexHtml);
}

if (!existsSync(indexHtml)) {
  throw new Error('dist/index.html is missing. Run vite build before preparing GitHub Pages files.');
}

const routeFiles = [
  'about.html',
  'interior.html',
  'construction.html',
  'gallery.html',
  'contact.html',
  'cpanel.html',
  '404.html'
];

await Promise.all(routeFiles.map((routeFile) => copyFile(indexHtml, join(dist, routeFile))));
await writeFile(join(dist, '.nojekyll'), '');

await rm(docs, { recursive: true, force: true });
await cp(dist, docs, { recursive: true, force: true });
