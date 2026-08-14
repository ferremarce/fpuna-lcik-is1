# Repository instructions

This repository contains teaching materials for **Ingeniería de Software I (IS1-LCIK)**. The main maintained outputs are the static HTML presentations under `presentaciones-html/` and their slide-by-slide Markdown guides.

## High-signal workflow

- Treat `planificacion-clase/matriz-alineacion-materiales.md` and `planificacion-clase/Enunciado - Global Exchange - IS1 LCIk.md` as the main pedagogical and project-context references. Keep unconfirmed requirements marked `Por validar`.
- The slide guides are the content specifications: `presentaciones-html/clase-1/guia-slides-clase-1.md` has 25 slides (canonical pattern), `presentaciones-html/unidad-1/T0-presentacion/guia-slides-unidad-1-t0-presentacion.md` has 9, `presentaciones-html/unidad-1/T1-introduccion-ingenieria-software/guia-slides-unidad-1-t1-introduccion-ingenieria-software.md` has 16, `presentaciones-html/unidad-1/T2-modelo-proceso-metodologias-agiles/guia-slides-unidad-1-t2-modelo-proceso-metodologias-agiles.md` has 47, `presentaciones-html/unidad-2/T3-a-requerimientos-software/guia-slides-unidad-2-t3-a-requerimientos-software.md` has 39, `presentaciones-html/unidad-5/T4-uml-casos-uso/uml/guia-slides-unidad-5-t4-a-uml.md` has 16 (UML complement), `presentaciones-html/unidad-5/T4-uml-casos-uso/casos_de_uso/guia-slides-unidad-5-t4-t5-casos-de-uso.md` has 21, and `presentaciones-html/unidad-6/T6-diagramas-de-clase/guia-slides-unidad-6-t6-diagramas-de-clase.md` has 20. Do not silently change slide order or count.
- Global Exchange is the course-wide project described in the Enunciado. Do not use it as a "conductor" example in slide notes or guides (see "Speaker notes format"); do not use real people, accounts, credentials, documents, or transactions in examples or generated materials.
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
- **Visual components:** Cards, quotes, tables, sequence flows, and charts all use institutional blue accents with hover effects

## Canonical deck pattern (clase-1 is the reference)

`presentaciones-html/clase-1/` is the canonical pattern for every new or restyled deck. New classes must replicate it rather than inventing a different system:

- **`styles.css`:** Copy from clase-1 as the base; CSS variables are defined in `:root` (`--fpuna-blue`, `--ink`, `--line`, `--bg-soft`, etc.). Keep the institutional classes listed under "Visual components" below.
- **Slide data in `app.js`:** Each slide is an object with exactly these fields:
  - `title` — the slide heading (`<h1>`)
  - `eyebrow` — the `NN · Label` kicker rendered above the title (e.g., `'15 · Tradicional'`)
  - `body` — single-column content as an HTML string built from the pattern's institutional components (`<div class="card">`, `.card--num`, `.card--hero`, `.card--blog`, `.card-grid--2/3/4`, `.sequence-card`, `.table-like`, `.ficha`, `.quote`, `<p class="lede">`, `<p class="reference">`)
  - `note` — complete speaker notes (see "Speaker notes format" below)
  - No `visual` field: **do not reintroduce** the `.visual` column or the `visual` data field. All content lives in `body`.
- **Single-column slide layout (full-width header):** The shared `slideMarkup` renders every slide as `<header class="slide-header">` (eyebrow + `<h1 id="slide-title">`) spanning the full deck width, followed by `<div class="content">${slide.body}</div>`. The base `.slide` grid uses `grid-template-areas: "header" "content"` (one column) with `align-content: start; align-items: start;`, and `.slide .slide-header h1 { max-width: none; }` so titles use the full page width. On mobile (≤760px) the areas keep the same single-column order: header → content. Do not reintroduce the previous two-column layout or per-slide layout flags.
- **Images:** Local images go in the class `assets/` folder and are referenced with a relative path (`assets/...`). Deck figures use `<img class="figure-img">` or the pattern's `<img class="avatar">` (round, blue border); the class provides the styling.
- **Inline styles are an exception:** Slides may use minimal inline styles only for layout details the shared CSS does not cover (e.g., `style="gap: 2.25rem;"` on a `.card-grid`, or the round teacher photo in slide 2). Prefer the institutional classes otherwise.
- When restyling an existing deck, keep the slide title/eyebrow order and count from its `guia-slides-unidad-N-tX-tema.md` guide, keep the `note` content, and migrate `body` markup to the pattern's institutional components rather than changing content.

## Presentation structure

- Each deck directory is self-contained: `index.html`, `app.js`, `styles.css`, `guia-slides-unidad-N-tX-tema.md`, and `assets/` folder. Unit decks live under `presentaciones-html/unidad-N/TX-tema/` (e.g. `unidad-2/T3-a-requerimientos-software/`); `clase-1/` keeps its `clase-1` names as the canonical pattern reference.
- **Artifact naming:** guides use `guia-slides-unidad-N-tX-tema.md`, PDFs `unidad-N-tX-tema.pdf`, and PPTX `unidad-N-tX-tema.pptx` (matching the deck slug; e.g. `unidad-2-t3-a-requerimientos-software.pdf`). Only `clase-1` keeps `clase-1` names.
- `app.js` owns slide data, markup, notes, navigation, keyboard shortcuts, hash navigation, index, progress, and fullscreen behavior.
- **Catalog rule:** Every time a presentation, PDF, PPTX, or slide guide is generated or modified for a class, update `presentaciones-html/index.html` so that class card links to all artifacts that exist: `Ver presentación`, `PDF · NN páginas`, `PPTX` (only if the file exists), and `Guía de slides`. Keep `class-meta` accurate (slide count, "guía docente incluida" once the guide exists, PDF page count).
- The class 2 deck supports printing all slides with `?print=all`; its PDF export is 16:9 (297mm × 167mm landscape) and must contain 47 pages. Print CSS uses fixed page height and explicit page breaks—check slides 15–17 when changing print styles.
- **PDF generation:** Use Google Chrome headless (`--headless=new --print-to-pdf --no-pdf-header-footer`) over a temp HTML that loads the deck `styles.css` + `app.js`, executes `renderAllForPrint()`, and includes `<base href="file://.../presentaciones-html/unidad-N/TX-tema/">` so relative `assets/...` (logo, figures) resolve. Do **not** use WeasyPrint: it rejects `clamp()` in `font-size` (title shrinks below eyebrow) and does not respect `transform: scale()` / `overflow: hidden` for pagination (slides fragment into extra pages). Full recipe in `docs/patron-presentaciones.md` §5.
- Do not expose the aula virtual password from the original class 1 material in Markdown, HTML, JavaScript, CSS, PDFs, screenshots, or commits.

## Slide content rules

- **Slide titles use Title Case:** Capitalize every word except short function words (articles, prepositions, conjunctions: `a, al, ante, bajo, con, contra, de, del, desde, durante, e, el, en, entre, hacia, hasta, la, las, lo, los, mediante, ni, o, para, por, que, según, sin, so, sobre, tras, un, una, unas, unos, u, y, es`) which stay lowercase unless they are the first or last word of the title. Keep acronyms and technical terms as-is (`RUP, XP, SCRUM, ASD, CU, MAs, Boehm, Include, Extend, Software`) and Roman numerals (`I, II, III, ...`). Do not render titles in ALL CAPS; normalize them to Title Case.
- **Slides 1-12:** Administrative and course organization content (no bibliographic references required).
- **Slides 13+:** Academic content must include bibliographic references using `<p class="reference">` styled as blockquotes with left border, subtle background, italic font, and book emoji prefix.
- **References format:** `Author. Title, Edition. Publisher, Year.` (e.g., `Sommerville, I. Ingeniería de Software, 7ª ed. Addison Wesley, 2005.`)
- **Never invent references:** Only use references from the course bibliography or verified web sources.
- **Texto visible del PPTX:** Todo el texto de cada slide del PPTX debe transcribirse COMPLETAMENTE en la guía (`guia-slides-unidad-N-tX-tema.md`) en la sección "Texto visible". Este texto es la fuente para generar el `body` del HTML.

## Speaker notes format

All slides must have complete speaker notes in the `note` field (and their mirror in the guide's "Explicación docente" → `Desarrollo`). The **Desarrollo** section explains **each item** of the slide's visible content, item by item, with examples inline. **Desarrollo and Ejemplos are unified** — there is no separate examples block. Do **not** use Global Exchange or a "conductor" example in notes or guides.

```
<strong>Desarrollo:</strong> **Item 1:** explanation with example. **Item 2:** explanation with example. ... (single paragraph)
<br><br>
<strong>Reflexión docente:</strong> [Key insight or reflection]
<br><br>
<strong>Pregunta desafío:</strong> [Challenge question for students]
<br><br>
<strong>Respuestas posibles:</strong> 1. [answer]. 2. [answer]. 3. [answer].
<br><br>
<strong>Advertencia:</strong> [Warning or caveat]
```

- Each visible item of the slide is labeled in bold (`**<Ítem>:**`) and followed by its explanation and a concrete example ("Por ejemplo, ..."), covering every item from "Texto visible" in order.
- Examples use generic domains (facturación, biblioteca, hospital, logística, comercio electrónico, banco, turnos, ERP, etc.). Global Exchange must not appear in the `note` fields or in the guide's "Explicación docente".
- Keep the guide's "Explicación docente" `Desarrollo` and the `note` field in sync when editing either.

## Visual components

All visual components use consistent institutional styling:

- **`.card`:** White background, blue top border, hover effect with blue border and shadow
- **`.card-grid` / `.card-grid--2` / `--3` / `--4`:** Grid containers for card compositions (2/3/4 columns; `.card-grid` as base)
- **`.number`:** Large blue numbers (2.5rem) for statistics and counts
- **`.card--num`:** Card wrapping a `<span class="number">` plus text/`<h3>`/`<p>` for numbered enumerations
- **`.card--hero`:** Centered cover/opening card (large padding, thick blue border, soft background) paired with `.lede` and an `<h2>`/`<p>`; used for opening slides and block covers
- **`.card--blog`:** Avatar + title + text card (e.g., bibliography, teacher profile)
- **`.badge`:** Blue pill label with white text (e.g., `H1–H3`, email)
- **`.avatar`:** Round photo with blue border (e.g., teacher photo)
- **`.ficha` / `.ficha-row`:** Key/value field rows (blue label on the left, value on the right)
- **`.quote`:** Blue left border, subtle blue background, rounded corners, large quotation mark
- **`.reference`:** Blue left border, subtle background, italic font, book emoji prefix (📚)
- **`.table-like` / `.row`:** Grid-based tables with hover effects, blue accents for labels and values
- **`.sequence-card` / `.sequence-step` / `.sequence-index`:** Numbered sequence with circular badges, connectors, single-line titles and descriptions (index rendered via `<span class="sequence-index">`). This is the pattern's flow component; do not reintroduce the legacy `.process` steps component.
- **`.lede`:** Highlighted lead text (soft color, larger size) for covers and closings
- **`.chart`:** SVG charts with blue axes and curves
- **`.figure-img`:** Deck figure images (max-width 100%, auto height, border, radius, shadow)

## Focused verification

Run these checks after editing a deck:

```bash
node --check presentaciones-html/clase-1/app.js
node --check presentaciones-html/unidad-1/T0-presentacion/app.js
node --check presentaciones-html/unidad-1/T1-introduccion-ingenieria-software/app.js
node --check presentaciones-html/unidad-1/T2-modelo-proceso-metodologias-agiles/app.js
node --check presentaciones-html/unidad-2/T3-a-requerimientos-software/app.js
node --check presentaciones-html/unidad-5/T4-uml-casos-uso/uml/app.js
node --check presentaciones-html/unidad-5/T4-uml-casos-uso/casos_de_uso/app.js
node --check presentaciones-html/unidad-6/T6-diagramas-de-clase/app.js
git diff --check
```

For class 2 PDF changes, also verify:

```bash
pdfinfo presentaciones-html/unidad-1/T2-modelo-proceso-metodologias-agiles/unidad-1-t2-modelo-proceso-metodologias-agiles.pdf | grep '^Pages:'
pdftotext -f 15 -l 17 -layout presentaciones-html/unidad-1/T2-modelo-proceso-metodologias-agiles/unidad-1-t2-modelo-proceso-metodologias-agiles.pdf -
```

The PDF must report 47 pages, and pages 15–17 must contain visible text and diagrams for Espiral, Boehm, and RUP. Preserve normal HTML navigation and the `01 / 47` counter after print changes.

## Change boundaries

- Keep visible slide content aligned with the source guide and PPTX. Put teaching explanations, examples, reflections, questions, and answers in the notes/guide rather than silently changing slide content.
- Stage only requested presentation artifacts. Avoid accidentally adding source PPTX/PDF files, LibreOffice lockfiles, or generated `.atl` skill-registry changes unless explicitly requested.
- There is no root application build, test suite, or package script; the presentations are browser-run static files. Use the focused checks above and browser/PDF rendering when visual behavior changes.
- Copy institutional assets (logo, photos) to each class `assets/` folder rather than referencing from `planificacion-clase/` to keep decks self-contained.

## Documentación de diseño (para agentes sin memoria persistente)

Para que cualquier agente nuevo, sin acceso a memoria persistente, tenga el mismo contexto de diseño de los decks:

- `docs/rediseno-presentaciones.md` — patrón de rediseño aplicable a CUALQUIER clase (`presentaciones-html/clase-N/` o `presentaciones-html/unidad-N/TX-tema/`): estructura de una sola columna, componentes CSS y decisiones de diseño. Clase-1 es el ejemplo de referencia (los 25 bodies; fuente de verdad: `presentaciones-html/clase-1/app.js`).
- `docs/reglas-presentaciones.md` — reglas de estructura, componentes visuales, contenidos, identidad institucional y verificación para editar los decks.
