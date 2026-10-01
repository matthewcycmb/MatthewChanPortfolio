import sharp from 'sharp';
import { copyFile, mkdir, readFile } from 'node:fs/promises';

await mkdir('public/images', { recursive: true });
await mkdir('app/fonts', { recursive: true });
// Source paths are private. The already-prepared assets are all a fresh clone needs.
const tasks = JSON.parse(await readFile('private/asset-transforms.json', 'utf8'));
for (const [name, input, crop, width] of tasks) {
  let pipeline = sharp(input);
  if (crop) pipeline = pipeline.extract(crop);
  await pipeline.resize({ width, withoutEnlargement: true }).webp({ quality: name.startsWith('roblox') ? 94 : 85 }).toFile(`public/images/${name}`);
}
await copyFile('node_modules/@fontsource-variable/manrope/files/manrope-latin-wght-normal.woff2', 'app/fonts/manrope-latin.woff2');
await copyFile('node_modules/@fontsource-variable/manrope/LICENSE', 'app/fonts/LICENSE.txt');
console.log(`Prepared ${tasks.length} images and the local font. Originals unchanged.`);
