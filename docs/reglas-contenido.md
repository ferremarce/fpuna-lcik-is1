# Reglas de Contenido y Diseño

Reglas para generar contenido de slides, notas del docente y artefactos visuales.

> **Flujo de trabajo:** `PPTX → guia-slides.md → HTML → PDF`. La fuente de verdad del contenido es `guia-slides.md`, NO el PPTX directamente. El agente que genera el HTML lee SOLO la guía. Ver `docs/patron-presentaciones.md` sección 7 para el flujo completo.

---

## 1. Identidad institucional

| Campo | Valor |
|-------|-------|
| **Carrera** | Licenciatura en Ciencias Informáticas (LCiK) |
| **Docente** | Prof. Lic. Guillermo Jacobo González Rodas Mst. PMP |
| **Email** | ggonzalez@pol.una.py |
| **Institución** | Facultad Politécnica — Universidad Nacional de Asunción (FP-UNA) |
| **Logo** | `assets/fpuna_logo_institucional.svg` (copiar a cada clase) |
| **Foto docente** | `assets/foto-docente.png` (solo clase-1) |

**Nunca exponer**: contraseñas del aula virtual, credenciales, datos personales reales de estudiantes.

---

## 2. Estructura de slides

### 2.1 Título

- **Title Case**: mayúscula inicial en cada palabra, excepto artículos/preposiciones cortas (`a, al, con, de, del, en, la, las, lo, los, o, por, que, sin, un, una, y`) que van en minúscula salvo sean primera/última palabra.
- **Mantener** acronimos y términos técnicos como están: `RUP, XP, SCRUM, ASD, CU, MAs, Include, Extend, Software`.
- **Nunca** renderizar títulos en ALL CAPS.
- **Ejemplo correcto**: "¿Qué es la Ingeniería de Software?" ✅
- **Ejemplo incorrecto**: "¿QUÉ ES LA INGENIERÍA DE SOFTWARE?" ❌

### 2.2 Eyebrow

Formato: `"NN · Label"`

- `NN`: número de slide con cero a la izquierda (`01`, `02`, ..., `25`)
- `Label`: categoría corta (`Apertura`, `Contexto`, `Organización`, `Definición`, `Cierre`)

### 2.3 Body

- Contenido HTML construido con los componentes visuales (ver sección 3)
- **Una sola columna** (clase-1 canonical): todo en `body`, sin campo `visual`
- **Inline styles**: solo excepciones para layout que el CSS no cubre (ej: `style="gap: 2.25rem;"` en `.card-grid`)

### 2.4 Notas (note)

Formato obligatorio con estas secciones:

```html
<strong>Desarrollo:</strong> [Qué presentar y por qué]
<br><br>
<strong>Ejemplos:</strong> Global Exchange (conductor): [ejemplo con el caso conductor]. Segundo contexto industrial: [ejemplo en otro dominio].
<br><br>
<strong>Reflexión docente:</strong> [Insight clave]
<br><br>
<strong>Pregunta desafío:</strong> [Pregunta para estudiantes]
<br><br>
<strong>Respuestas posibles:</strong> 1. [respuesta]. 2. [respuesta]. 3. [respuesta].
<br><br>
<strong>Advertencia:</strong> [Caveat o limitación]
```

Las notas NO son contenido visible en el deck; sirven para orientar la explicación.

---

## 3. Componentes visuales — Catálogo completo

### 3.1 `.card` — Tarjeta genérica

```html
<div class="card">
  <h3>Título de la card</h3>
  <p>Contenido descriptivo.</p>
</div>
```

**Cuándo usar**: para agrupar información temática, definiciones, conceptos.

### 3.2 `.card--hero` — Card de apertura/cierre

```html
<div class="card card--hero">
  <p class="lede">INGENIERÍA DE SOFTWARE I</p>
  <h2 style="color:var(--fpuna-blue); margin-bottom:.5rem;">TÍTULO DE LA UNIDAD</h2>
  <p>Prof. Lic. Guillermo Jacobo González Rodas Mst. PMP</p>
</div>
```

**Cuándo usar**: slides de apertura de unidad, cierres, bloques de transición.

### 3.3 `.card--blog` — Card con avatar

```html
<article class="card card--blog">
  <header style="display:flex; gap:1.2rem; align-items:center; margin-bottom:.8rem;">
    <img class="avatar" src="assets/foto-docente.png" alt="Foto del docente">
    <div>
      <h3>Nombre del docente</h3>
      <span class="badge">email@pol.una.py</span>
    </div>
  </header>
  <p>Biografía o descripción.</p>
</article>
```

**Cuándo usar**: perfil docente, bibliografía.

### 3.4 `.card--num` — Card con número

```html
<div class="card card--num">
  <span class="number">01</span>
  <p>Descripción del punto.</p>
</div>
```

**Cuándo usar**: enumeraciones, estadísticas, pasos numerados.

El número puede ser `01`, `02`, ... o `I`, `II`, `III`, ... (romanos para unidades).

### 3.5 `.card-grid` — Grid de cards

```html
<div class="card-grid card-grid--3">
  <div class="card card--num"><span class="number">01</span><p>Primero</p></div>
  <div class="card card--num"><span class="number">02</span><p>Segundo</p></div>
  <div class="card card--num"><span class="number">03</span><p>Tercero</p></div>
</div>
```

**Variantes**: `.card-grid--2`, `.card-grid--3`, `.card-grid--4`

### 3.6 `.badge` — Pill label

```html
<span class="badge">H1–H3</span>
```

**Cuándo usar**: etiquetas de categoría, emails, rangos de hitos.

### 3.7 `.ficha` / `.ficha-row` — Key-value pairs

```html
<div class="ficha">
  <div class="ficha-row"><strong>Plataforma</strong><span>Educa</span></div>
  <div class="ficha-row"><strong>Link</strong><a href="https://...">https://...</a></div>
</div>
```

**Cuándo usar**: datos institucionales, configuraciones, parámetros.

### 3.8 `.quote` — Cita destacada

```html
<div class="quote">Texto de la cita o definición importante.</div>
```

**Cuándo usar**: definiciones, frases de impacto, cites de autores.

### 3.9 `.reference` — Referencia bibliográfica

```html
<p class="reference">Sommerville, I. Ingeniería de Software, 7ª ed. Addison Wesley, 2005.</p>
```

**Cuándo usar**: slides 13+ (contenido académico). Nunca en slides 1-12.

### 3.10 `.table-like` / `.row` — Tabla CSS grid

```html
<div class="table-like">
  <div class="row"><strong>Etiqueta</strong><span>Valor</span><b>30%</b></div>
  <div class="row"><strong>Otra</strong><span>Dato</span><b>70%</b></div>
</div>
```

**Cuándo usar**: comparaciones, distribuciones porcentuales, clasificaciones.

### 3.11 `.sequence-card` / `.sequence-step` / `.sequence-index` — Secuencia

```html
<div class="sequence-card" aria-label="Secuencia temática">
  <div class="sequence-step">
    <span class="sequence-index">01</span>
    <strong>Título del paso</strong>
    <small>Descripción breve</small>
  </div>
  <div class="sequence-step">
    <span class="sequence-index">02</span>
    <strong>Segundo paso</strong>
    <small>Otra descripción</small>
  </div>
</div>
```

**Cuándo usar**: mapas de unidad, procesos, flujos secuenciales. Es el componente preferido sobre `.process`.

### 3.12 `.lede` — Texto destacado

```html
<p class="lede">Texto introductorio o de impacto.</p>
```

**Cuándo usar**: portadas, aperturas, frases de síntesis.

### 3.13 `.chart` — Gráficos SVG

```html
<svg class="chart" viewBox="0 0 420 280" role="img" aria-label="Descripción">
  <line class="guide" x1="58" y1="56" x2="58" y2="232"></line>
  <line class="axis" x1="58" y1="232" x2="390" y2="232"></line>
  <path class="curve" d="M72 219 C170 218..."></path>
  <text x="12" y="50">Etiqueta</text>
</svg>
```

**Cuándo usar**: relaciones cualitativas, tendencias, esquemas. No para datos numéricos precisos.

### 3.14 `.process` — Proceso numerado (legacy)

```html
<div class="process">
  <span>Paso uno</span>
  <span>Paso dos</span>
  <span>Paso tres</span>
</div>
```

**Nota**: Usar `.sequence-card` en su lugar. `.process` es el componente legacy.

### 3.15 `.figure-img` — Imágenes de deck

```html
<img class="figure-img" src="assets/imagen.png" alt="Descripción" aria-label="Descripción larga">
```

**Cuándo usar**: diagramas, capturas, ilustraciones del material fuente.

**Nota**: esta clase NO existe en `styles.css` de clase-1 (que no usa imágenes). Si el deck usa imágenes, agregar la regla CSS desde clase-2/3/4 (ver `patron-presentaciones.md` sección 3.1).

### 3.16 `.avatar` — Foto redonda

```html
<img class="avatar" src="assets/foto-docente.png" alt="Foto del docente">
```

**Cuándo usar**: perfil docente.

---

## 4. Reglas de contenido

### 4.1 Slides 1-12: Contenido administrativo

- No requieren referencias bibliográficas
- Contenido: presentación, docente, asignatura, metodología, aula virtual, evaluaciones, bibliografía general, hitos, objetivos, contenido de la unidad

### 4.2 Slides 13+: Contenido académico

- **Requieren** referencias bibliográficas con `<p class="reference">`
- Formato: `Autor. Título, Edición. Editorial, Año.`
- Ejemplo: `Sommerville, I. Ingeniería de Software, 7ª ed. Addison Wesley, 2005.`

### 4.3 Referencias permitidas

Usar **solo** las referencias del material del curso:

- Sommerville, I. Ingeniería de Software, 7ª ed. Addison Wesley, 2005.
- Pressman, R. Ingeniería del Software: Un enfoque práctico, 7ª ed. McGraw-Hill, 2010.
- McConnell, Steve. Desarrollo y gestión de proyectos informáticos. McGraw-Hill, 1997.
- Piattini, Mario. Calidad de Sistemas Informáticos. Alfaomega - Ra-Ma, 2007.
- SWEBOK Guide. IEEE Computer Society.
- IEEE Std 830-1998.
- Larman, C. UML y Patrones, 2ª ed. Pearson, 2003.

**Nunca inventar** referencias. Si no se tiene la referencia exacta, omitir la cita.

---

## 5. Notas del docente — Formato exacto

### Estructura obligatoria

```html
<strong>Desarrollo:</strong> Explicación de QUÉ presentar y POR QUÉ es importante este slide en el recorrido de la clase. Conectar con el slide anterior y el siguiente.
<br><br>
<strong>Ejemplos:</strong> Global Exchange (conductor): [ejemplo aplicado al caso conductor del curso — sistema de cambio de divisas]. Segundo contexto industrial: [ejemplo en otro dominio — salud, banca, logística, etc.].
<br><br>
<strong>Reflexión docente:</strong> Insight o reflexión profesional que el docente quiere transmitir.
<br><br>
<strong>Pregunta desafío:</strong> Pregunta abierta para reflexión o discusión en clase.
<br><br>
<strong>Respuestas posibles:</strong> 1. Primera respuesta esperada. 2. Segunda respuesta. 3. Tercera respuesta.
<br><br>
<strong>Advertencia:</strong> Caveat, limitación, error común, o lo que NO hay que hacer.
```

### Reglas para las notas

1. **Global Exchange siempre aparece primero** como caso conductor
2. **Segundo contexto industrial** siempre en otro dominio (salud, banca, logística, gobierno, educación)
3. **Las preguntas desafío** deben tener al menos 3 respuestas posibles
4. **Las advertencias** previenen errores comunes de comprensión
5. Las notas **NO** se exponen en el deck; son para el docente

---

## 6. Lo que NO hacer

### 6.1 Seguridad
- **Nunca** exponer contraseñas del aula virtual en HTML, JS, CSS, notas, PDFs o commits
- **Nunca** usar datos personales reales de estudiantes

### 6.2 Contenido
- **Nunca** inventar referencias bibliográficas
- **Nunca** cambiar el orden de slides definido en la guía (`guia-slides-clase-X.md`)
- **Siempre** transcribir TODO el texto del PPTX al "Texto visible" de la guía, sin truncar
- **El "Texto visible"** es la fuente para generar el `body` del HTML
- **Siempre** usar las imágenes originales del PPTX en el HTML — extraerlas del PPTX a `assets/` y referenciarlas con `<img class="figure-img" src="assets/nombre.png">`
- **Nunca** usar personas reales en ejemplos (usar Global Exchange o dominios ficticios)
- **Nunca** usar cuentas, documentos o transacciones reales

### 6.3 Diseño
- **Nunca** reintroducir el campo `visual` en clase-1 (el patrón canonical no lo tiene)
- **Nunca** cambiar la estructura HTML de `index.html` (topbar, paneles, controles)
- **Nunca** agregar Google Fonts u otras dependencias externas (el CSS usa system fonts)
- **Nunca** introducir archivos compartidos entre clases (cada deck es autocontenido)
- **Nunca** modificar `styles.css` de clase-1 sin verificar que el print CSS siga funcionando

### 6.4 Código
- **Nunca** exponer la lógica de `fitSlidesForPrint` con valores hardcoded incorrectos
- **Nunca** cambiar la funcionalidad de navegación (flechas, hash, teclado)
- **Nunca** agregar campos a los slides que la función `slideMarkup` no renderice

### 6.5 Impresión
- **Nunca** generar un PDF sin `?print=all`
- **Nunca** cambiar `@page { size: 297mm 167mm }` (es el formato 16:9 landscape)
- **Nunca** olvidar verificar la cantidad de páginas con `pdfinfo` después de cambios al print CSS

---

## 7. Global Exchange — Caso conductor

Global Exchange es el sistema de cambio de divisas usado como hilo conductor en todas las clases. Elementos del caso:

- **Operaciones**: consultar tasas, simular, comprar, vender divisas
- **Actores**: clientes, operadores, roles, gerentes
- **Datos**: tasas variables, fondos, pagos, comprobantes
- **Controles**: auditoría, integraciones externas, seguridad
- **Contexto**: sistema financiero, transacciones, regulaciones

En los ejemplos de las notas, siempre empezar por "Global Exchange (conductor):" y luego dar un "Segundo contexto industrial:" en otro dominio.

---

## 8. Catálogo general — `presentaciones-html/index.html`

**Siempre** después de crear o modificar una clase, actualizar el catálogo `presentaciones-html/index.html`. Este archivo lista todas las clases con sus enlaces a presentación, PDF y guía.

**Qué actualizar al crear/modificar una clase:**

1. Agregar o editar el bloque `<article class="class-card" id="clase-N">` con: badge, unidad, título, cantidad de slides, resumen de contenido, y 3 enlaces (presentación, PDF, guía).
2. Agregar `<a href="#clase-N">Clase N</a>` en el `<nav class="nav-links">` del topbar.
3. Verificar que la nota inferior (`guide-note`) sigue siendo correcta.

**Plantilla del bloque:**

```html
<article class="class-card" id="clase-N">
  <p class="class-kicker"><span class="class-badge">Clase N</span> Unidad X · Tema</p>
  <h2>Título de la clase</h2>
  <p class="class-meta">NN diapositivas · guía docente incluida · exportación PDF (NN páginas)</p>
  <p class="class-desc"><strong>Contenido:</strong> resumen del contenido.</p>
  <div class="class-actions">
    <a class="chip" href="clase-N/index.html">Ver presentación</a>
    <a class="chip" href="clase-N/clase-N.pdf">PDF · NN páginas</a>
    <a class="chip" href="clase-N/guia-slides.md">Guía de slides</a>
  </div>
</article>
```

**Detalle completo:** ver `docs/patron-presentaciones.md` sección 9.
