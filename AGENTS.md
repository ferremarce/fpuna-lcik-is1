# Repository instructions

This repository contains teaching materials for **Ingeniería de Software I (IS1-LCIK)**. The main maintained outputs are the static HTML presentations under `presentaciones-html/` and their slide-by-slide Markdown guides.

## High-signal workflow

- Treat `planificacion-clase/matriz-alineacion-materiales.md` and `planificacion-clase/Enunciado - Global Exchange - IS1 LCIk.md` as the main pedagogical and project-context references. Keep unconfirmed requirements marked `Por validar`.
- The slide guides are the content specifications: `presentaciones-html/clase-1/guia-slides.md` has 25 slides and `presentaciones-html/clase-2/guia-slides.md` has 48 slides. Do not silently change slide order or count.
- Global Exchange is the course-wide conductor example. Do not use real people, accounts, credentials, documents, or transactions in examples or generated materials.
- The HTML decks are intentionally independent: each class owns its own `app.js` and `styles.css`. Do not introduce shared runtime files unless explicitly requested.
- Source PPTX/PDF materials are binary/reference inputs. A direct file read will fail for PPTX; inspect OOXML contents by extracting the ZIP package when source verification is needed.

## Presentation structure

- Each class directory is self-contained: `index.html`, `app.js`, `styles.css`, and `guia-slides.md`.
- `app.js` owns slide data, visual markup, notes, navigation, keyboard shortcuts, hash navigation, index, progress, and fullscreen behavior.
- The class 2 deck supports printing all slides with `?print=all`; its PDF export is A4 landscape and must contain 48 pages. Print CSS uses fixed page height and explicit page breaks—check slides 15–17 when changing print styles.
- Do not expose the aula virtual password from the original class 1 material in Markdown, HTML, JavaScript, CSS, PDFs, screenshots, or commits.

## Focused verification

Run these checks after editing a deck:

```bash
node --check presentaciones-html/clase-1/app.js
node --check presentaciones-html/clase-2/app.js
git diff --check
```

For class 2 PDF changes, also verify:

```bash
pdfinfo presentaciones-html/clase-2/clase-2.pdf | grep '^Pages:'
pdftotext -f 15 -l 17 -layout presentaciones-html/clase-2/clase-2.pdf -
```

The PDF must report 48 pages, and pages 15–17 must contain visible text and diagrams for Espiral, Boehm, and RUP. Preserve normal HTML navigation and the `01 / 48` counter after print changes.

## Change boundaries

- Keep visible slide content aligned with the source guide and PPTX. Put teaching explanations, examples, reflections, questions, and answers in the notes/guide rather than silently changing slide content.
- Stage only requested presentation artifacts. Avoid accidentally adding source PPTX/PDF files, LibreOffice lockfiles, or generated `.atl` skill-registry changes unless explicitly requested.
- There is no root application build, test suite, or package script; the presentations are browser-run static files. Use the focused checks above and browser/PDF rendering when visual behavior changes.
