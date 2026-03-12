import { copyFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const src = join(process.cwd(), 'tokens.json')
const dest = join(__dirname, '../tokens.json')

if (src === dest) {
	console.log('tokens.json already points to current project file; no sync needed')
} else {
	copyFileSync(src, dest)
	console.log(`✓ tokens.json synced from ${src}`)
}
