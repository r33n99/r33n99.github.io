# Portfolio

Двуязычное портфолио Рината Ражапова, Middle Fullstack Developer, на Nuxt 4 SSG.

## Команды

```bash
npm run dev
npm run generate
npm run preview
```

Статический билд генерируется в `.output/public`.

## Резюме

Сайт берёт обе версии из `public/cv/`. Имена файлов для скачивания зависят от
содержимого PDF и обновляются при сборке.

Для изменения текста используйте `scripts/build-resumes.py`. Скрипту нужны
ReportLab и два начертания шрифта TrueType с латиницей и кириллицей.

```bash
python scripts/build-resumes.py /path/to/arial.ttf /path/to/arialbd.ttf
node --test scripts/resume-assets.test.mjs
```
