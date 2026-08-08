# Repository instructions

This repository contains teaching materials for **Ingeniería de Software I (IS1-LCIK)**. The main maintained outputs are the static HTML presentations under `presentaciones-html/` and their slide-by-slide Markdown guides.

## High-signal workflow

- Treat `planificacion-clase/matriz-alineacion-materiales.md` and `planificacion-clase/Enunciado - Global Exchange - IS1 LCIk.md` as the main pedagogical and project-context references. Keep unconfirmed requirements marked `Por validar`.
- The slide guides are the content specifications: `presentaciones-html/clase-1/guia-slides.md` has 25 slides and `presentaciones-html/clase-2/guia-slides.md` has 48 slides. Do not silently change slide order or count.
- Global Exchange is the course-wide conductor example. Do not use real people, accounts, credentials, documents, or transactions in examples or generated materials.
- The HTML decks are intentionally independent: each class owns its own `app.js` and `styles.css`. Do not introduce shared runtime files unless explicitly requested.
- Source PPTX/PDF materials are binary/reference inputs. A direct file read will fail for PPTX; inspect OOXML contents by extracting the ZIP package when source verification is needed.

## Institutional identity

- **Carrera:** Licenciatura en Ciencias Informáticas (LCiK)
- **Docente:** Prof. Lic. Guillermo Jacobo González Rodas Mst. PMP
- **Email docente:** ggonzalez@pol.una.py
- **Institución:** Facultad Politécnica - Universidad Nacional de Asunción (FP-UNA)
- **Logo institucional:** `planificacion-clase/fpuna_logo_institucional.svg` (copied to each class `assets/` folder)
- **Foto docente:** `planificacion-clase/foto-docente.png` (copied to class 1 `assets/` folder)

## Design system

- **Primary color:** `--fpuna-blue: #2c4a8a` (institutional blue)
- **Background:** White (`#ffffff`) with soft gray panels (`#f8f9fa`)
- **Typography:** Segoe UI / system-ui for display and body; Consolas/Monaco for mono
- **Header:** Sticky topbar with institutional blue background, logo, course title, and career name
- **Visual components:** Cards, quotes, tables, process steps, sequence cards, and charts all use institutional blue accents with hover effects

## Canonical deck pattern (clase-1 is the reference)

`presentaciones-html/clase-1/` is the canonical pattern for every new or restyled deck. New classes must replicate it rather than inventing a different system:

- **`styles.css`:** Copy from clase-1 as the base; CSS variables are defined in `:root` (`--fpuna-blue`, `--ink`, `--line`, `--bg-soft`, etc.). Keep the institutional classes listed under "Visual components" below.
- **Slide data in `app.js`:** Each slide is an object with exactly these fields:
  - `title` — the slide heading (`<h1>`)
  - `eyebrow` — the `NN · Label` kicker rendered above the title (e.g., `'15 · Tradicional'`)
  - `body` — left-column content as an HTML string (`<p>`, `<ul>`, `<div class="card">`, `<p class="lede">`, `<p class="reference">`)
  - `visual` — right-column visual as an HTML string (`.visual-title` header plus one or more institutional components, e.g. `<div class="quote">`, `.cards/.card`, `.table-like/.row`, `.process`, `.sequence-card`, `.chart`, or `<img class="figure-img">`)
  - `note` — complete speaker notes (see "Speaker notes format" below)
- **Images:** Local images go in the class `assets/` folder and are referenced with a relative path (`assets/...`). Deck figures use `<img class="figure-img">`; the class provides styling for `.figure-img` (max-width 100%, auto height, border, radius, shadow).
- **Inline styles are an exception:** Slides may use minimal inline styles only for layout details the shared CSS does not cover (e.g., the round teacher photo in slide 2). Prefer the institutional classes otherwise.
- When restyling an existing deck, keep the slide title/eyebrow order and count from its `guia-slides.md`, keep the `note` content, and migrate `body`/`visual` markup to the institutional classes rather than changing content.

## Presentation structure

- Each class directory is self-contained: `index.html`, `app.js`, `styles.css`, `guia-slides.md`, and `assets/` folder.
- `app.js` owns slide data, visual markup, notes, navigation, keyboard shortcuts, hash navigation, index, progress, and fullscreen behavior.
- The class 2 deck supports printing all slides with `?print=all`; its PDF export is 16:9 (297mm × 167mm landscape) and must contain 48 pages. Print CSS uses fixed page height and explicit page breaks—check slides 15–17 when changing print styles.
- Do not expose the aula virtual password from the original class 1 material in Markdown, HTML, JavaScript, CSS, PDFs, screenshots, or commits.

## Slide content rules

- **Slides 1-12:** Administrative and course organization content (no bibliographic references required).
- **Slides 13+:** Academic content must include bibliographic references using `<p class="reference">` styled as blockquotes with left border, subtle background, italic font, and book emoji prefix.
- **References format:** `Author. Title, Edition. Publisher, Year.` (e.g., `Sommerville, I. Ingeniería de Software, 7ª ed. Addison Wesley, 2005.`)
- **Never invent references:** Only use references from the course bibliography or verified web sources.

## Speaker notes format

All slides must have complete speaker notes in the `note` field using this structure:

```
<strong>Desarrollo:</strong> [Explanation of what to present and why]
<br><br>
<strong>Ejemplos:</strong> Global Exchange (conductor): [example]. Segundo contexto industrial: [example].
<br><br>
<strong>Reflexión docente:</strong> [Key insight or reflection]
<br><br>
<strong>Pregunta desafío:</strong> [Challenge question for students]
<br><br>
<strong>Respuestas posibles:</strong> 1. [answer]. 2. [answer]. 3. [answer].
<br><br>
<strong>Advertencia:</strong> [Warning or caveat]
```

## Visual components

All visual components use consistent institutional styling:

- **`.card`:** White background, blue top border, hover effect with blue border and shadow
- **`.number`:** Large blue numbers (2.5rem) for statistics and counts
- **`.quote`:** Blue left border, subtle blue background, rounded corners, large quotation mark
- **`.reference`:** Blue left border, subtle background, italic font, book emoji prefix (📚)
- **`.table-like` / `.row`:** Grid-based tables with hover effects, blue accents for labels and values
- **`.process`:** Numbered steps with circular blue badges, vertical connectors, hover effects
- **`.sequence-card` / `.sequence-step`:** Numbered sequence with circular badges, connectors, single-line titles and descriptions
- **`.chart`:** SVG charts with blue axes and curves
- **`.figure-img`:** Deck figure images (max-width 100%, auto height, border, radius, shadow)

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
- Copy institutional assets (logo, photos) to each class `assets/` folder rather than referencing from `planificacion-clase/` to keep decks self-contained.
