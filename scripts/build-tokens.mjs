import { readFileSync, writeFileSync, mkdirSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')

const tokens = JSON.parse(readFileSync(resolve(root, 'tokens.json'), 'utf-8'))
const { light, dark } = tokens.theme
const { typography } = tokens

function themeToVars(theme) {
  return Object.entries(theme)
    .map(([key, value]) => `  --color-${key}: ${value};`)
    .join('\n')
}

function typographyToVars(type) {
  if (!type) return ''

  const vars = [`  --font-family: ${type.fontFamily};`]
  const scaleNames = []

  for (const [name, scale] of Object.entries(type)) {
    if (name === 'fontFamily') continue
    scaleNames.push(name)
    vars.push(`  --type-${name}-size: ${scale.fontSize};`)
    vars.push(`  --type-${name}-line-height: ${scale.lineHeight};`)
  }

  for (const name of scaleNames) {
    vars.push(
      `  --type-${name}: var(--type-${name}-size)/var(--type-${name}-line-height) var(--font-family);`
    )
  }

  return vars.join('\n')
}

const lightThemeVars = themeToVars(light)
const darkThemeVars = Object.entries(dark)
  .map(([k, v]) => `    --color-${k}: ${v};`)
  .join('\n')

const css = `/* Generated from tokens.json — do not edit manually */

:root {
${lightThemeVars}
${typographyToVars(typography)}
}

@media (prefers-color-scheme: dark) {
  :root {
${darkThemeVars}
  }
}

:root[data-theme='light'] {
${lightThemeVars}
}

:root[data-theme='dark'] {
${darkThemeVars}
}
`

const outDir = resolve(root, 'src/styles')
mkdirSync(outDir, { recursive: true })
writeFileSync(resolve(outDir, 'tokens.css'), css, 'utf-8')
console.log('✓ src/styles/tokens.css generated')
