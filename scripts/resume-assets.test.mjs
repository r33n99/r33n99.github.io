import assert from 'node:assert/strict'
import { mkdtempSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { basename, join } from 'node:path'
import test from 'node:test'
import { prepareResumeAssets } from './resume-assets.mjs'

test('updated resumes get distinct download URLs and filenames automatically', () => {
  const projectRoot = mkdtempSync(join(tmpdir(), 'portfolio-resumes-'))
  try {
    mkdirSync(join(projectRoot, 'public', 'cv'), { recursive: true })
    const russian = readFileSync(new URL('../public/cv/cv-ru.pdf', import.meta.url))
    const english = readFileSync(new URL('../public/cv/cv-en.pdf', import.meta.url))
    writeFileSync(join(projectRoot, 'public', 'cv', 'cv-ru.pdf'), russian)
    writeFileSync(join(projectRoot, 'public', 'cv', 'cv-en.pdf'), english)

    const initial = prepareResumeAssets(projectRoot)
    assert.deepEqual(prepareResumeAssets(projectRoot).files, initial.files)
    assert.deepEqual(readFileSync(join(initial.directory, basename(initial.files.ru))), russian)
    assert.deepEqual(readFileSync(join(initial.directory, basename(initial.files.en))), english)

    const updatedPdf = Buffer.concat([russian, Buffer.from('\n% updated resume\n')])
    writeFileSync(join(projectRoot, 'public', 'cv', 'cv-ru.pdf'), updatedPdf)
    const updated = prepareResumeAssets(projectRoot)
    assert.notEqual(updated.files.ru, initial.files.ru)
    assert.notEqual(basename(updated.files.ru), basename(initial.files.ru))
    assert.equal(updated.files.en, initial.files.en)
    assert.deepEqual(readFileSync(join(updated.directory, basename(updated.files.ru))), updatedPdf)
  } finally {
    // projectRoot is the exact isolated directory returned by mkdtempSync above.
    rmSync(projectRoot, { recursive: true, force: true })
  }
})
