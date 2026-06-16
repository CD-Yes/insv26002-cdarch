import { cp, mkdir, copyFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const dist = join(root, 'dist');
const directories = ['css', 'vendor', 'js', 'img', 'master', '.well-known'];
const files = ['ads.txt', 'favicon.ico'];

await mkdir(dist, { recursive: true });

for (const directory of directories) {
  const from = join(root, directory);
  if (!existsSync(from)) continue;

  await cp(from, join(dist, directory), {
    recursive: true,
    force: true,
    filter: (source) => !source.toLowerCase().endsWith('.php')
  });
}

const uploadSource = join(root, 'admin', 'content', 'upload');
const uploadTarget = join(dist, 'admin', 'content', 'upload');
if (existsSync(uploadSource)) {
  await cp(uploadSource, uploadTarget, {
    recursive: true,
    force: true,
    filter: (source) => !source.toLowerCase().endsWith('.php')
  });
}

for (const file of files) {
  const from = join(root, file);
  if (existsSync(from)) {
    await copyFile(from, join(dist, file));
  }
}
