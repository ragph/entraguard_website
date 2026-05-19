// One-off: converts public/images/*.png to optimized .webp alongside the originals.
// Run with: node scripts/convert-images.mjs
import { readdir, stat } from 'node:fs/promises'
import { join, extname } from 'node:path'
import sharp from 'sharp'

const dir = new URL('../public/images/', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1')

const files = (await readdir(dir)).filter((f) => extname(f).toLowerCase() === '.png')

let beforeTotal = 0
let afterTotal = 0

for (const file of files) {
  const src = join(dir, file)
  const dest = src.replace(/\.png$/i, '.webp')
  const before = (await stat(src)).size

  await sharp(src).webp({ quality: 82, effort: 6 }).toFile(dest)

  const after = (await stat(dest)).size
  beforeTotal += before
  afterTotal += after
  const pct = (((before - after) / before) * 100).toFixed(0)
  console.log(
    `${file.padEnd(26)} ${(before / 1024).toFixed(0).padStart(5)} KB -> ${(after / 1024).toFixed(0).padStart(5)} KB  (-${pct}%)`
  )
}

console.log(
  `\nTOTAL: ${(beforeTotal / 1024).toFixed(0)} KB -> ${(afterTotal / 1024).toFixed(0)} KB ` +
    `(-${(((beforeTotal - afterTotal) / beforeTotal) * 100).toFixed(0)}%)`
)
