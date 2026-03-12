import { readFileSync, writeFileSync, readdirSync } from 'fs'
import { resolve, join, extname, dirname } from 'path'
import { fileURLToPath } from 'url'
import { optimize } from 'svgo'

const __dirname = dirname(fileURLToPath(import.meta.url))
const iconsDir = resolve(__dirname, '../src/icons')

const svgoConfig = {
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          // Keep viewBox so icons scale correctly
          removeViewBox: false,
        },
      },
    },
    // Remove fixed width/height; CSS controls icon sizing.
    'removeDimensions',
    {
      name: 'removeAttrs',
      params: {
        attrs: '(path|circle|ellipse|polygon|polyline|rect|g):fill',
      },
    },
  ],
}

const files = readdirSync(iconsDir).filter(f => extname(f) === '.svg')

if (files.length === 0) {
  console.log('No SVG files found in src/icons/')
  process.exit(0)
}

for (const file of files) {
  const filePath = join(iconsDir, file)
  const input = readFileSync(filePath, 'utf-8')
  const { data } = optimize(input, { path: filePath, ...svgoConfig })
  writeFileSync(filePath, data, 'utf-8')
  console.log(`✓ optimized ${file}`)
}
