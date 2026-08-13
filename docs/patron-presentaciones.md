# Patrón de Presentaciones HTML

Guía técnica completa para crear decks de presentación que repliquen el patrón de clase-1.

---

## 1. Resumen

Cada deck es un directorio autocontenido dentro de `presentaciones-html/clase-N/` con esta estructura:

```
clase-N/
  index.html          ← HTML del deck (50 líneas, siempre igual salvo N)
  styles.css          ← CSS completo (copiado de clase-1 como base)
  app.js              ← Datos de slides + lógica de navegación + impresión
  assets/             ← Imágenes, logos, fotos
    fpuna_logo_institucional.svg
    foto-docente.png  (solo clase-1)
    ...               ← imágenes propias de la clase
  guia-slides-clase-X.md      ← Guía docente (fuente de verdad del contenido)
```

Los 3 archivos (`index.html`, `styles.css`, `app.js`) son independientes entre clases. No hay archivos compartidos en runtime.

---

## 2. index.html — Plantilla exacta

### Plantilla (cambiar solo 3 valores)

```html
<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="Clase N: [descripción corta del tema]">
  <title>Ingeniería del Software I | Clase N</title>
  <link rel="stylesheet" href="styles.css">
  <script defer src="app.js"></script>
</head>
<body>
  <a class="skip-link" href="#main-content">Saltar al contenido</a>
  <header class="topbar">
    <a class="brand" href="#slide-1" aria-label="Ir al inicio">
      <img class="brand-logo" src="assets/fpuna_logo_institucional.svg" alt="Logo FP-UNA">
      <div class="brand-text">
        <span class="brand-title">Ingeniería del Software I</span>
        <span class="brand-subtitle">FP-UNA / Licenciatura en Ciencias Informáticas (LCiK)</span>
      </div>
    </a>
    <div class="top-actions">
      <a class="quiet-button" href="../index.html">Índice General</a>
      <button id="index-toggle" class="quiet-button" type="button" aria-expanded="false" aria-controls="index-panel">Índice</button>
      <button id="notes-toggle" class="quiet-button" type="button" aria-expanded="false" aria-controls="notes-panel">Notas docentes</button>
      <button id="fullscreen" class="quiet-button" type="button" aria-label="Activar pantalla completa">Pantalla completa</button>
    </div>
  </header>

  <main id="main-content" tabindex="-1">
    <section id="stage" aria-live="polite" aria-atomic="true"></section>
  </main>

  <aside id="index-panel" class="side-panel" aria-hidden="true" aria-label="Índice de diapositivas">
    <div class="panel-heading"><h2>Índice</h2><button class="close-panel" data-close="index-panel" aria-label="Cerrar índice">×</button></div>
    <nav id="slide-index"></nav>
  </aside>
  <aside id="notes-panel" class="side-panel notes-panel" aria-hidden="true" aria-label="Notas docentes">
    <div class="panel-heading"><h2>Notas docentes</h2><button class="close-panel" data-close="notes-panel" aria-label="Cerrar notas docentes">×</button></div>
    <p class="notes-help">Estas notas no forman parte de la exposición. Sirven para orientar la explicación y las conexiones entre slides.</p>
    <div id="speaker-notes"></div>
  </aside>

  <footer class="controls" aria-label="Controles de presentación">
    <button id="previous" type="button" aria-label="Diapositiva anterior">← <span>Anterior</span></button>
    <div class="progress-wrap"><div id="progress" class="progress" role="progressbar" aria-label="Progreso de la presentación" aria-valuemin="1" aria-valuenow="1"></div></div>
    <span id="counter" class="counter">01 / NN</span>
    <button id="next" type="button" aria-label="Diapositiva siguiente"><span>Siguiente</span> →</button>
  </footer>
</body>
</html>
```

### Valores a cambiar por clase

| Campo | Dónde | Ejemplo |
|-------|-------|---------|
| `content` del meta description | `<meta>` | `"Clase 4: Casos de Uso y Especificación de Casos de Uso"` |
| `<title>` | `<head>` | `"Ingeniería del Software I \| Clase 4"` |
| `aria-valuenow` y counter | `<footer>` | `"01 / 22"` (total de slides) |

**Nunca cambiar**: el topbar, la estructura de paneles, los botones de navegación, los aria-labels, ni las rutas a `styles.css`/`app.js`.

---

## 3. styles.css — Guía completa

Copiar `presentaciones-html/clase-1/styles.css` como base (787 líneas). Si el deck usa imágenes (`<img class="figure-img">`), copiar también la regla `.figure-img` desde clase-2, clase-3 o clase-4:

```css
.figure-img {
  max-width: 100%;
  height: auto;
  border: 1px solid var(--line);
  border-radius: .4rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
}
```

El CSS se organiza en estas secciones:

### 3.1 Variables CSS (`:root`)

```css
:root {
  --fpuna-blue: #2c4a8a;         /* Azul institucional */
  --fpuna-blue-dark: #1e3468;    /* Azul oscuro (degradados) */
  --fpuna-blue-light: #3d6ab5;   /* Azul claro */
  --bg: #ffffff;                 /* Fondo principal */
  --bg-soft: #f8f9fa;            /* Fondo sutil (paneles, cards) */
  --ink: #1a1a1a;                /* Texto principal */
  --ink-soft: #4a4a4a;           /* Texto secundario */
  --muted: #6c757d;              /* Texto atenuado */
  --line: #dee2e6;               /* Bordes, separadores */
  --accent: #2c4a8a;             /* Acento (= fpuna-blue) */
  --accent-soft: rgba(44, 74, 138, 0.1);  /* Fondo acento suave */
  --display: 'Segoe UI', system-ui, -apple-system, sans-serif;
  --body: 'Segoe UI', system-ui, -apple-system, sans-serif;
  --mono: 'Consolas', 'Monaco', monospace;
}
```

### 3.2 Reset y base (líneas 21-23)

```css
* { box-sizing: border-box; margin: 0; padding: 0; }
html, body { min-height: 100%; }
body { min-height: 100vh; background: var(--bg); }
```

### 3.3 Componentes visuales — Catálogo completo

#### `.skip-link`
Enlace de accesibilidad, oculto hasta que recibe foco.

#### `.topbar` / `.brand` / `.brand-logo` / `.brand-text` / `.brand-title` / `.brand-subtitle`
Header sticky con logo, título de materia y carrera.

#### `.top-actions` / `.quiet-button`
Botones del header (Índice, Notas, Pantalla completa).

#### `.slide`
Grid de una columna con áreas `"header"` y `"content"`. Borde azul a la izquierda (`::before`). Animación `enter`.

**Layout del slide (clase-1):**
```css
.slide {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas: "header" "content";
  gap: clamp(1rem, 2vw, 1.5rem);
  align-content: start;
  align-items: start;
  min-height: 70vh;
  padding: 2rem clamp(2rem, 5vw, 5rem);
}
.slide .slide-header { grid-area: header; }
.slide .slide-header h1 { max-width: none; }
.slide .content { grid-area: content; }
```

#### `.eyebrow`
Kicker uppercase sobre el título: `01 · Apertura`.

#### Tipografía
- `h1`: `clamp(1.6rem, 3.2vw, 2.8rem)`, bold, azul
- `h2`: `clamp(1.5rem, 2.5vw, 2.5rem)`, bold, azul
- `h3`: `1.1rem`, normal, ink
- `.lede`: texto destacado para portadas, `clamp(1.1rem, 1.5vw, 1.3rem)`
- `.content`: `clamp(1rem, 1.2vw, 1.15rem)`, line-height 1.6

#### `.card`
Tarjeta con borde superior azul, fondo `--bg-soft`, sombra sutil, hover con borde azul.

#### `.card--hero`
Tarjeta de apertura/cierre: padding grande, borde azul grueso, fondo `--accent-soft`, centrada.

#### `.card--blog`
Tarjeta con avatar + título + texto (para perfil docente, bibliografía).

#### `.card--num`
Card conteniendo `<span class="number">` + texto/h3/p.

#### `.number`
Número grande azul: `2.5rem`, bold.

#### `.cards`
Grid auto-fit: `repeat(auto-fit, minmax(200px, 1fr))`.

#### `.card-grid` / `.card-grid--2` / `.card-grid--3` / `.card-grid--4`
Grid con columnas fijas (2, 3 o 4).

#### `.badge`
Pill azul: `border-radius: 999px`, fondo azul, texto blanco, 0.75rem.

#### `.avatar`
Foto redonda: `92px`, `border-radius: 50%`, borde azul 3px.

#### `.ficha` / `.ficha-row`
Key-value pairs: label azul a la izquierda, valor a la derecha.

#### `.quote`
Cita con borde azul izquierdo, fondo `--accent-soft`, comilla decorativa `::before`.

#### `.reference`
Referencia bibliográfica: borde azul izquierdo, fondo sutil, italic, emoji 📚.

#### `.chart`
SVG charts: `.axis` (azul), `.curve` (azul, 4px), `.guide` (guía punteada).

#### `.table-like` / `.row`
Tabla CSS grid: 3 columnas, hover con borde azul.

#### `.sequence-card` / `.sequence-step` / `.sequence-index`
Secuencia numerada: pasos conectados con línea vertical, badges circulares azules.

#### `.process`
Proceso con CSS counter: números circulares azules, conectores verticales.

**Nota:** `.process` es el componente legacy. El patrón actual usa `.sequence-card`.

#### `.chart` (SVG charts)
Estilos para gráficos SVG inline.

### 3.4 Controles y paneles

#### `.controls`
Footer fijo: Previous, progress bar, counter, Next.

#### `.progress-wrap` / `.progress`
Barra de progreso: fondo `--bg-soft`,-fill azul.

#### `.counter`
Counter `01 / 25`: tabular-nums.

#### `.side-panel` / `.panel-heading` / `.close-panel`
Paneles laterales deslizantes (índice y notas).

#### `.index-item`
Items del índice: botones con hover y estado active.

#### `.note` / `.notes-help`
Estilos de notas del docente.

### 3.5 Print CSS (`@media print`)

```css
@page { size: 297mm 167mm; margin: 0; }

@media print {
  /* Ocultar controles */
  .topbar, .top-actions, .controls, .side-panel, .skip-link { display: none !important; }

  /* Cada slide es una página */
  .print-slide {
    width: 100%;
    height: 167mm;
    min-height: 167mm;
    max-height: 167mm;
    overflow: hidden;
    page-break-after: always;
    break-after: page;
  }

  /* Header institucional + paginador en cada página */
  .print-header { /* ... */ }
}
```

### 3.6 Responsive

- **≤760px**: brand-subtitle oculto, cards a 1 columna, controls sin texto de botones
- **≤430px**: process padding ajustado
- **prefers-reduced-motion**: animaciones a 0.01ms

---

## 4. app.js — Lógica y datos

### 4.1 Estructura de datos de slides

**Formato de clase-1 (JSON con comillas dobles):**
```javascript
const slides = [
  {
    "title": "Presentación de la Materia",
    "eyebrow": "01 · Apertura",
    "body": "<div class=\"card card--hero\">...</div>",
    "note": "<strong>Desarrollo:</strong> ..."
  },
  // ... más slides
];
```

**Campos exactos (clase-1):**

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `title` | string | Título del slide (se renderiza como `<h1>`) |
| `eyebrow` | string | Kicker: `"NN · Label"` (ej: `"01 · Apertura"`) |
| `body` | string (HTML) | Contenido principal del slide |
| `note` | string (HTML) | Notas completas del docente |

**NO hay campo `visual` en ninguna clase.** Todo el contenido va en `body`.

**Formato de clase-2 (shorthand JS con template literals):**
```javascript
const slides = [
  { title: 'Ingeniería de Software I', eyebrow: '01 · Apertura', body: `<div>...</div>`, note: '...' },
];
```

**Formato de clase-2, clase-3 y clase-4 (shorthand JS):**
```javascript
const slides = [
  { title: 'Ingeniería de Software I', eyebrow: '01 · Apertura', body: `<div>...</div>`, note: '...' },
];
```

### 4.2 Función slideMarkup

**Clase-1 (canonical):**
```javascript
function slideMarkup(slide, position) {
  return `<article class="slide slide-${position + 1}" aria-labelledby="slide-title">
    <header class="slide-header">
      <p class="eyebrow">${slide.eyebrow}</p>
      <h1 id="slide-title">${slide.title}</h1>
    </header>
    <div class="content">${slide.body}</div>
  </article>`;
}
```

**Clase-2 (diferente — usa `<div>` en vez de `<header>`, agrega slide-number):**
```javascript
function slideMarkup(slide, position) {
  return `<article class="slide slide-${position + 1}" aria-labelledby="slide-title">
    <div>
      <p class="eyebrow">${slide.eyebrow}</p>
      <h1 id="slide-title">${slide.title}</h1>
      <div class="content">${slide.body}</div>
    </div>
    <span class="slide-number">${String(position + 1).padStart(2, '0')}</span>
  </article>`;
}
```

**Clase-2, clase-3 y clase-4 (usa `<div>` en vez de `<header>`):**
```javascript
function slideMarkup(slide, position) {
  return `<article class="slide slide-${position + 1}" aria-labelledby="slide-title">
    <div>
      <p class="eyebrow">${slide.eyebrow}</p>
      <h1 id="slide-title">${slide.title}</h1>
      <div class="content">${slide.body}</div>
    </div>
  </article>`;
}
```

### 4.3 Funciones de navegación

```javascript
// Variables globales
const stage = document.querySelector('#stage');
const indexPanel = document.querySelector('#index-panel');
const notesPanel = document.querySelector('#notes-panel');
const index = document.querySelector('#slide-index');
const notes = document.querySelector('#speaker-notes');
const printAll = new URLSearchParams(location.search).get('print') === 'all';
let current = 0;

// Render un slide
function render() {
  const slide = slides[current];
  stage.innerHTML = slideMarkup(slide, current);
  // Actualizar counter, progress, notes, index highlight
  history.replaceState(null, '', `#slide-${current + 1}`);
}

// Ir a posición
function goTo(position) {
  current = Math.max(0, Math.min(slides.length - 1, position));
  render();
  document.querySelector('#main-content').focus({ preventScroll: true });
}

// Toggle paneles
function toggle(panel, force) {
  const open = typeof force === 'boolean' ? force : !panel.classList.contains('open');
  panel.classList.toggle('open', open);
  panel.setAttribute('aria-hidden', String(!open));
  // Actualizar aria-expanded del botón control
}
```

### 4.4 Impresión (`?print=all`)

**Clase-1 (soporte completo de PDF):**
```javascript
function renderAllForPrint() {
  const total = slides.length;
  stage.innerHTML = slides.map((slide, position) => {
    const pageNum = String(position + 1).padStart(2, '0');
    const totalNum = String(total).padStart(2, '0');
    const header = `<div class="print-header">...</div>`;
    return `<div class="print-slide">${header}${slideMarkup(slide, position)}</div>`;
  }).join('');
  fitSlidesForPrint();
}

function fitSlidesForPrint() {
  // Mide cada slide y lo escala si desborda 167mm
  // Usa un clon en un probe off-screen para medir altura natural
  // Aplica transform: scale() si scale < 1
}
```

**Clase-2, 3, 4 (impresión simplificada):**
```javascript
function renderAllForPrint() {
  stage.innerHTML = slides.map((slide, position) => slideMarkup(slide, position)).join('');
}
```

### 4.5 Eventos y atajos de teclado

| Tecla | Acción |
|-------|--------|
| `→` / `PageDown` / `Space` | Siguiente slide |
| `←` / `PageUp` | Slide anterior |
| `Home` | Primera slide |
| `End` | Última slide |
| `Escape` | Cerrar paneles |
| `N` | Toggle notas |
| `I` | Toggle índice |

### 4.6 Hash navigation

```javascript
window.addEventListener('hashchange', () => {
  const match = location.hash.match(/slide-(\d+)/);
  if (match) goTo(Number(match[1]) - 1);
});
const initial = location.hash.match(/slide-(\d+)/);
if (initial) current = Number(initial[1]) - 1;
if (printAll) renderAllForPrint(); else render();
```

---

## 5. Exportación a PDF

> **Usar Chrome headless, NO WeasyPrint.** WeasyPrint 69 rechaza `clamp()` en `font-size` (warning "Invalid math function") y descarta la declaración → el título (h1 con `clamp()`) queda pequeño frente al eyebrow. Además WeasyPrint no respeta `transform: scale()` ni `overflow: hidden` para paginar: los slides que exceden 167mm se fragmentan en páginas extra (60+ en vez de 25/47). Chrome respeta `clamp()`, `transform: scale()` y `overflow: hidden`.

### 5.1 Pipeline de impresión

El PDF se genera desde un HTML de impresión temporal que carga `styles.css` + `app.js` de la clase y ejecuta `renderAllForPrint()`. El HTML DEBE incluir un `<base href>` que apunte a la carpeta de la clase para que las rutas relativas `assets/...` (logo y figuras) se resuelvan; sin esto el PDF sale sin imágenes.

```html
<!-- /tmp/opencode/clase-N-print.html -->
<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<title>Clase N - Print</title>
<base href="file:///RUTA/ABS/AL/presentaciones-html/clase-N/">
<link rel="stylesheet" href="styles.css">
<style>.print-header-title, .print-header-subtitle { white-space: nowrap; }</style>
</head>
<body>
<main id="stage"></main>
<script src="app.js"></script>
<script>renderAllForPrint();</script>
</body>
</html>
```

```bash
google-chrome --headless=new --disable-gpu --no-sandbox \
  --print-to-pdf=presentaciones-html/clase-N/clase-N.pdf \
  --no-pdf-header-footer \
  --virtual-time-budget=8000 \
  "file:///tmp/opencode/clase-N-print.html"
```

**Parámetros:**
- `--no-pdf-header-footer`: evita que Chrome agregue su propio header/footer (el paginador `NN / NN` viene del `.print-header` del HTML)
- `--virtual-time-budget=8000`: tiempo para que renderice el JS y aplique `fitSlidesForPrint()`
- `<base href>`: OBLIGATORIO; resuelve los `assets/...` relativos contra la carpeta de la clase
- `renderAllForPrint()`: genera los `.print-slide` con `.print-header` + `slideMarkup` por slide

### 5.2 Proporciones eyebrow/título en print

El h1 del título usa `font-size: clamp(1.6rem, 3.2vw, 2.8rem)`. En `@media print` fijar valores concretos para mantener las proporciones del HTML (eyebrow ~2.7x más chico que el título). El eyebrow es un `<span>` inline → forzar `display: block` para que el `margin-bottom` aplique:

```css
@media print {
  .print-slide .slide-header .eyebrow {
    display: block;
    margin: 0 0 1rem;
    font: 600 .8rem var(--display);
    letter-spacing: .1em;
    text-transform: uppercase;
  }
  .print-slide .slide-header h1 {
    font-size: 2.2rem;
    line-height: 1.15;
    letter-spacing: -.02em;
    margin-bottom: .8rem;
  }
}
```

### 5.3 Verificación

```bash
# Verificar cantidad de páginas (una por slide)
pdfinfo presentaciones-html/clase-N/clase-N.pdf | grep '^Pages:'

# Verificar texto en páginas específicas (ej: 15-17)
pdftotext -f 15 -l 17 -layout presentaciones-html/clase-N/clase-N.pdf -

# Verificar que el logo y las figuras quedaron embebidos
pdfimages -list presentaciones-html/clase-N/clase-N.pdf | wc -l
```

### 5.4 Por qué funciona el layout

1. `@page { size: 297mm 167mm; margin: 0; }` fija el tamaño de hoja
2. Cada `.print-slide` tiene `height: 167mm` y `page-break-after: always`
3. `fitSlidesForPrint()` aplica `transform: scale()` inline a los slides que desbordan (Chrome lo respeta; WeasyPrint no)
4. El header institucional (`.print-header`) se agrega en cada página
5. Chrome headless renderiza con CSS de impresión activo

### 5.5 Troubleshooting

- **PDF con 1 página**: falta `renderAllForPrint()` o el `?print=all`
- **Slides vacías**: `--virtual-time-budget` muy bajo, subir a 10000
- **Texto cortado**: ajustar `fitSlidesForPrint()` o reducir contenido
- **Sin headers**: verificar que `.print-header` esté en el HTML generado
- **Sin imágenes ni logo**: falta el `<base href>` en el HTML de impresión
- **Título más chico que el eyebrow**: se regeneró con WeasyPrint (no soporta `clamp()` en font-size); usar Chrome
- **Más páginas que slides**: se regeneró con WeasyPrint (no respeta `transform: scale()` ni `overflow: hidden`); usar Chrome
- **Paginador duplicado**: falta `--no-pdf-header-footer`

---

## 6. Checklist de verificación

### Antes de cada cambio

```bash
# Verificar JS válido
node --check presentaciones-html/clase-N/app.js

# Verificar diff limpio
git diff --check
```

### Después de cambiar styles.css o app.js

```bash
node --check presentaciones-html/clase-N/app.js
```

### Después de cambiar PDF o print CSS

```bash
# Regenerar PDF (ver sección 5.1)
# Verificar
pdfinfo presentaciones-html/clase-N/clase-N.pdf | grep '^Pages:'
pdftotext -f 15 -l 17 -layout presentaciones-html/clase-N/clase-N.pdf -
```

### Para todas las clases

```bash
node --check presentaciones-html/clase-1/app.js
node --check presentaciones-html/clase-2/app.js
node --check presentaciones-html/clase-3/app.js
node --check presentaciones-html/clase-4/casos_de_uso/app.js
node --check presentaciones-html/clase-4/uml/app.js
git diff --check
```

### Actualizar el catálogo general

**Siempre** después de crear o modificar una clase, actualizar `presentaciones-html/index.html` (ver sección 9).

---

## 7. Flujo de trabajo: PPTX → guia-slides-clase-X.md → HTML → PDF

El flujo correcto para generar una clase es de **4 pasos**:

```
sesiones-clase/clase-N/archivo.pptx
        ↓  PASO 1: Extraer contenido
        ↓  PASO 2: Crear guia-slides-clase-X.md
presentaciones-html/clase-N/guia-slides-clase-X.md
        ↓  PASO 3: Generar HTML (app.js + styles.css + index.html)
presentaciones-html/clase-N/
        ↓  PASO 4: Exportar PDF
presentaciones-html/clase-N/clase-N.pdf
```

**Regla clave:** `guia-slides-clase-X.md` es la **fuente de verdad del contenido** entre el PPTX y el HTML. El agente que genera el HTML lee SOLO la guía, no el PPTX directamente. Esto permite revisar, corregir y validar el contenido antes de generar el deck.

### 7.1 Ubicación de fuentes

```
sesiones-clase/
  clase-1/IS1-UNIDAD_I.pptx
  clase-2/IS1-UNIDAD_II.pptx
  clase-3/IS1-UNIDAD_III (1).pptx
  clase-4/IS1-UNIDAD_IV.pptx
```

### 7.2 PASO 1–2: PPTX → guia-slides-clase-X.md

Leer el PPTX fuente y crear `guia-slides-clase-X.md` siguiendo la estructura exacta de clase-1 como plantilla. La guía es un documento Markdown autocontenido que documenta cada slide en 3 capas.

**Estructura obligatoria de `guia-slides-clase-X.md`:**

```markdown
# Guía de regeneración de la Clase N

Guía docente para regenerar la presentación a partir de
`sesiones-clase/clase-N/archivo.pptx`. Conserva los **N slides**,
su orden y su numeración de origen.

## Lectura rápida

- **Fuente:** `sesiones-clase/clase-N/archivo.pptx`.
- **Total verificado:** N slides en `ppt/presentation.xml`, dentro de `p:sldIdLst`.
- **Notas del orador:** [si hay notas en ppt/notesSlides/ o no].
- **Contenido visual embebido:** [imágenes u objetos gráficos relevantes].
- **Dato sensible:** [contraseñas, credenciales — registrar existencia, no valor].

## Criterio de transcripción

Cada slide se describe en tres capas para facilitar la revisión:

1. **Texto visible:** transcripción del contenido textual del PPTX. Se conservan
   formulaciones, mayúsculas y erratas relevantes del original; no se agregan
   definiciones externas.
2. **Elementos visuales:** objetos gráficos, imágenes y composición identificable
   desde el paquete OOXML.
3. **Explicación docente:** orientación para presentar el slide y conectar sus
   elementos. Es una propuesta didáctica basada únicamente en el contenido del slide.

## Inventario slide por slide

### Slide 1. Título del slide

**Texto visible**

- `Primer texto del slide`
- `Segundo texto del slide`

**Elementos visuales**

- Descripción de la composición visual del slide.

**Explicación docente**

- **Desarrollo:**
  - [Explicación de qué presentar y por qué].
- **Ejemplos:** **Global Exchange (conductor):** [ejemplo]. **Segundo contexto industrial:** [ejemplo].
- **Reflexión docente:**
  - [Reflexión clave].
- **Pregunta desafío:** [pregunta para los estudiantes].
- **Respuestas posibles:**
  1. [Respuesta 1].
  2. [Respuesta 2].
  3. [Respuesta 3].
- **Advertencia:** [advertencia o caveat].

### Slide 2. Siguiente slide
[...repetir para cada slide...]
```

**Reglas para crear la guía:**

1. **Conservar el total de slides del PPTX** — no agregar ni quitar slides.
2. **Conservar el orden original** del PPTX.
3. **Transcribir TODO el texto visible del PPTX** — sin truncar, sin parafrasear, sin corregir erratas del original (anotarlas como nota). El "Texto visible" es la fuente para generar el `body` del HTML.
4. **Las notas del docente** se documentan en la sección "Explicación docente" de cada slide. Si el PPTX no tiene notas, crearlas siguiendo el formato de 6 secciones (Desarrollo/Ejemplos/Reflexión/Pregunta/Respuestas/Advertencia).
5. **Registrar datos sensibles** (contraseñas) como existentes pero **nunca reproducir su valor**.
6. **Si el PPTX contiene imágenes**, extraerlas y guardarlas en `presentaciones-html/clase-N/assets/`. Documentarlas en la guía con su nombre original y ruta. El HTML debe usar esas mismas imágenes (ver 7.3).
7. **El título de cada slide** en la guía usa el formato: `### Slide N. Título del slide`

### 7.3 PASO 3: guia-slides-clase-X.md → HTML

Leer la guía y generar el deck HTML (`app.js`, `styles.css`, `index.html`). La fuente de contenido es SOLO la guía — no se lee el PPTX directamente.

**Mapeo guía → app.js:**

| Capa de la guía | Campo de app.js | Regla |
|-----------------|-----------------|-------|
| Título del slide (`### Slide N. Título`) | `title` | Texto exacto, Title Case |
| Numeración del slide | `eyebrow` | Formato: `NN · Etiqueta` (ej: `01 · Apertura`) |
| **Texto visible** | `body` | HTML con componentes institucionales (ver 7.4) |
| **Explicación docente** | `note` | Formato HTML: Desarrollo/Ejemplos/Reflexión/Pregunta/Respuestas/Advertencia |

**Reglas de mapeo del body (desde "Texto visible"):**

1. **Párrafos simples** → `<p>texto</p>`
2. **Listas con viñetas** → `<ul><li>item</li></ul>`
3. **Títulos dentro del body** → `<h3>Título</h3>`
4. **Texto destacado/lede** → `<p class="lede">TEXTO</p>`
5. **Citas** → `<div class="quote">cita</div>`
6. **Referencias bibliográficas** → `<p class="reference">autor. título...</p>`
7. **Cards con información** → `<div class="card"><h3>Título</h3><p>texto</p></div>`
8. **Enumeraciones** → `<div class="card card--num"><span class="number">01</span><h3>Título</h3><p>texto</p></div>`
9. **Secuencias/flujo** → `<div class="sequence-card"><div class="sequence-step"><span class="sequence-index">01</span><strong>Título</strong><small>descripción</small></div></div>`
10. **Tablas/campos** → `<div class="ficha"><div class="ficha-row"><strong>Etiqueta</strong><span>Valor</span></div></div>`
11. **Imágenes locales** → `<img class="figure-img" src="assets/imagen.png" alt="descripción">`
12. **Gráficos SVG** → `<svg class="chart" viewBox="0 0 W H">...</svg>`

**Ejemplo de mapeo:**

Guía dice:
```markdown
**Texto visible**
- `Mantenibles`
- `El software debe evolucionar y seguir cumpliendo con sus especificaciones.`
- `Confiabilidad`
- `El software no debe causar daños físicos o económicos en el caso de fallos.`
```

HTML resultante:
```html
<div class="card-grid card-grid--2">
  <div class="card"><h3>Mantenibles</h3><p>El software debe evolucionar y seguir cumpliendo con sus especificaciones.</p></div>
  <div class="card"><h3>Confiabilidad</h3><p>El software no debe causar daños físicos o económicos en el caso de fallos.</p></div>
</div>
```

### 7.4 Construcción del app.js

Crear el array `slides` en `app.js` usando template literals (backticks):

```javascript
const slides = [
  {
    title: "Título del Slide",
    eyebrow: "01 · Etiqueta",
    body: `<div class="card-grid card-grid--2">
  <div class="card"><h3>Título</h3><p>texto</p></div>
</div>`,
    note: `<strong>Desarrollo:</strong> Explicación...<br><br><strong>Ejemplos:</strong> ...`
  },
  // ... más slides
];
```

**Importante:** Si el patrón usa template literals (backticks), el body NO necesita escapar comillas dobles ni `\n`.

### 7.5 Verificación del contenido

Antes de generar el PDF, verificar contra la guía:

1. **Conteo de slides:** ¿la guía tiene N slides? ¿el app.js tiene N objetos?
2. **Títulos:** ¿coinciden con los de la guía? ¿Respetan Title Case?
3. **Texto del body:** ¿es EXACTAMENTE el "Texto visible" de la guía (no inventado, no parafraseado)?
4. **Notas:** ¿tienen el formato correcto (6 secciones) y coinciden con la "Explicación docente" de la guía?
5. **Referencias:** ¿slides 13+ tienen `<p class="reference">` con fuentes del curso?

### 7.6 PASO 4: Generación del PDF

Una vez creado el deck y verificado:

```bash
# 1. Verificar sintaxis
node --check presentaciones-html/clase-N/app.js

# 2. Regenerar PDF
google-chrome --headless --disable-gpu --no-sandbox \
  --no-pdf-header-footer \
  --window-size=1123,631 \
  --virtual-time-budget=10000 \
  --print-to-pdf="presentaciones-html/clase-N/clase-N.pdf" \
  "file:///home/jmferreira/Documents/FPUNA/CLASES-AER/IS1-LCIK/presentaciones-html/clase-N/index.html?print=all"

# 3. Verificar
pdfinfo presentaciones-html/clase-N/clase-N.pdf | grep '^Pages:'
pdftotext -f 1 -l 1 -raw presentaciones-html/clase-N/clase-N.pdf - | head -5
```

### 7.7 Actualizar el catálogo

Después de generar el PDF, actualizar `presentaciones-html/index.html` (ver sección 9).

---

## 8. Diferencias entre clases (referencia rápida)

| Aspecto | Clase-1 (canonical) | Clase-2 | Clase-3 | Clase-4 |
|---------|-------------------|---------|---------|---------|
| Slide data | JSON `"key"` | JS shorthand | JS shorthand | JS shorthand |
| Campo visual | NO | NO | NO | NO |
| slideMarkup usa `<header>` | SÍ | NO (usa `<div>`) | NO (usa `<div>`) | NO (usa `<div>`) |
| slide-number inline | NO | NO | NO | NO |
| Print CSS completa | SÍ | NO | NO | NO |
| fitSlidesForPrint | SÍ | NO | NO | NO |
| print-header por página | SÍ | NO | NO | NO |
| Total slides | 25 | 47 | 39 | 22 |

**Regla: siempre replicar clase-1.** Las diferencias en otras clases son variantes históricas que no se deben propagar.

---

## 9. Actualizar el catálogo general (`presentaciones-html/index.html`)

**Cada vez que se genera o modifica una presentación, un PDF, un PPTX o una guía** de una clase, actualizar el archivo `presentaciones-html/index.html`. Este archivo es el índice de navegación del curso: lista todas las clases con sus enlaces a presentación, PDF, PPTX y guía.

**Regla clave:** si la clase tiene el artefacto, el índice debe tener su enlace. Los cuatro enlaces (`Ver presentación`, `PDF`, `PPTX`, `Guía de slides`) se incluyen siempre que el archivo correspondiente exista en `presentaciones-html/clase-N/`. Si un artefacto no existe aún (p. ej. no se generó el PPTX), el enlace se omite hasta que exista.

### 9.1 Estructura del catálogo

El archivo es HTML autocontenido, sin dependencias externas. Cada clase se representa como un bloque `<article class="class-card">`:

```html
<article class="class-card" id="clase-N">
  <p class="class-kicker"><span class="class-badge">Clase N</span> Unidad X · Tema</p>
  <h2>Título de la clase</h2>
  <p class="class-meta">NN diapositivas · guía docente incluida · exportación PDF (NN páginas)</p>
  <p class="class-desc">
    <strong>Contenido:</strong> resumen del contenido de la clase.
  </p>
  <div class="class-actions">
    <a class="chip" href="clase-N/index.html">Ver presentación</a>
    <a class="chip" href="clase-N/clase-N.pdf">PDF · NN páginas</a>
    <a class="chip" href="clase-N/clase-N.pptx">PPTX</a>
    <a class="chip" href="clase-N/guia-slides-clase-X.md">Guía de slides</a>
  </div>
</article>
```

### 9.2 Campos a actualizar por clase

| Campo | Descripción | Ejemplo |
|-------|-------------|---------|
| `id` | Identificador del anchor | `clase-5` |
| Badge | Número de clase | `Clase 5` |
| Unidad | Unidad temática | `Unidad V · Tema` |
| `<h2>` | Título descriptivo | `Ingeniería de Requisitos` |
| `class-meta` | Cantidad de slides y páginas del PDF | `35 diapositivas · guía docente incluida · exportación PDF (35 páginas)` |
| `class-desc` | Resumen del contenido (2-3 oraciones) | Qué temas cubre la clase |
| Enlace presentación | Ruta relativa al `index.html` de la clase | `clase-5/index.html` |
| Enlace PDF | Ruta relativa al PDF generado | `clase-5/clase-5.pdf` |
| Enlace PPTX | Ruta relativa al PPTX generado (solo si existe) | `clase-5/clase-5.pptx` |
| Enlace guía | Ruta relativa a la guía de slides | `clase-5/guia-slides-clase-X.md` |

### 9.3 También actualizar

- **Nav links** en el topbar: agregar `<a href="#clase-N">Clase N</a>` en la sección `<nav class="nav-links">`.
- **Nota inferior** (`guide-note`): si se agrega una clase, verificar que la nota sigue siendo correcta.
- **Título de la página**: si hay más de 4 clases, considerar actualizar el `<title>`.
- **`class-meta`**: actualizar a "guía docente incluida" cuando la guía se genere (no "pendiente").

### 9.4 Flujo completo al crear una clase nueva

1. Crear `presentaciones-html/clase-N/` con `index.html`, `styles.css`, `app.js`, `assets/`, `guia-slides-clase-X.md`
2. Generar el PDF con Chrome headless
3. Generar el PPTX si corresponde
4. Verificar con `node --check` y `pdfinfo`
5. **Actualizar `presentaciones-html/index.html`** con el nuevo bloque de clase (4 enlaces: presentación, PDF, PPTX si existe, guía)
6. Hacer `git diff` para revisar los cambios
