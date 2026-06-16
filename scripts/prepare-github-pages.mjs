import { copyFile, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join } from 'node:path';

const dist = join(process.cwd(), 'dist');
const indexHtml = join(dist, 'index.html');

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
