import { createHash } from 'node:crypto'
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

// A changed PDF gets a new URL and filename, including in Android's download history.
export function prepareResumeAssets(projectRoot) {
  const directory = join(projectRoot, '.cache', 'resume-assets')
  mkdirSync(directory, { recursive: true })
  const files = { ru: '', en: '' }

  for (const language of ['ru', 'en']) {
    const pdf = readFileSync(join(projectRoot, 'public', 'cv', `cv-${language}.pdf`))
    const version = createHash('sha256').update(pdf).digest('hex').slice(0, 16)
    const filename = `Rinat-Razhapov-CV-${language}-${version}.pdf`
    writeFileSync(join(directory, filename), pdf)
    files[language] = `/cv/${filename}`
  }

  return { directory, files }
}
