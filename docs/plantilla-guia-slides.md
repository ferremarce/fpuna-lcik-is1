# Plantilla: Generación de Guía de Slides desde PPTX

## Propósito

Esta plantilla define el formato estándar para generar guías de slides a partir de archivos PPTX. Cada guía documenta el contenido extraído del PPTX y sirve como especificación para regenerar la presentación HTML.

## Convención de Nombres

- **Guía generada:** `guia-slides-clase-X.md` (donde X es el número de clase)
- **Ubicación:** `presentaciones-html/clase-X/guia-slides-clase-X.md`
- **Ejemplo:** `presentaciones-html/clase-2/guia-slides-clase-2.md`

## Estructura de la Guía

### 1. Metadata

```markdown
# Guía de regeneración de la Clase N

Guía docente para regenerar la presentación a partir de `sesiones-clase/clase-N/ARCHIVO.pptx`. Conserva los **X slides**, su orden y su numeración de origen. La futura presentación deberá usar esta guía como especificación de contenido, no como sustituto del diseño visual.

**Archivo:** `guia-slides-clase-N.md`
**Ubicación:** `presentaciones-html/clase-N/`

## Lectura rápida

- **Fuente:** `sesiones-clase/clase-N/ARCHIVO.pptX`.
- **Total verificado:** X slides en `ppt/presentation.xml`, dentro de `p:sldIdLst`.
- **Notas del orador:** [indicar si hay archivos `ppt/notesSlides/` o no].
- **Contenido visual embebido:** [listar slides con imágenes y su contenido].
- **Dato sensible:** [indicar si hay contraseñas o datos sensibles; registrar existencia pero NO reproducir valor].
```

### 2. Criterio de Transcripción

```markdown
## Criterio de transcripción

Cada slide se describe en tres capas para facilitar la revisión:

1. **Texto visible:** transcripción del contenido textual del PPTX. Se conservan formulaciones, mayúsculas y erratas relevantes del original; no se agregan definiciones externas.
2. **Elementos visuales:** objetos gráficos, imágenes y composición identificable desde el paquete OOXML.
3. **Explicación docente:** orientación para presentar el slide y conectar sus elementos. Es una propuesta didáctica basada únicamente en el contenido del slide.
```

### 3. Inventario Slide por Slide

**REGLA CRÍTICA:** Todo el texto visible de cada slide del PPTX DEBE transcribirse COMPLETAMENTE en la sección "Texto visible" de la guía. Este texto es la fuente para generar el `body` del HTML.

Para cada slide, usar este formato exacto:

```markdown
### Slide N. Título del Slide

**Texto visible**

- `Todo el texto literal del PPTX, sin truncar`
- `Cada línea o párrafo separado`
- `Incluyendo definiciones completas`
- `Y cualquier texto adicional`

**Elementos visuales**

- [Descripción de la composición visual]
- [Indicar si contiene imágenes y cuáles]
- [Indicar si contiene notas del orador]

**Explicación docente**

- **Desarrollo:**
  - [Explicación del concepto presentado]
  - [Conexión con otros temas]
- **Ejemplos:** **Global Exchange (conductor):** [ejemplo usando el caso conductor del curso]. **Segundo contexto industrial:** [ejemplo en otro contexto].
- **Reflexión docente:**
  - [Reflexión profesional o académica]
- **Pregunta desafío:** [pregunta para los estudiantes]
- **Respuestas posibles:**
  1. [Respuesta 1]
  2. [Respuesta 2]
  3. [Respuesta 3]
- **Advertencia:** [advertencia o caveat importante]
```

**Reglas de transcripción:**
1. Transcribir TODO el texto del PPTX, sin truncar ni omitir
2. Cada línea o párrafo va como un elemento separado con `- `
3. Mantener el texto exacto del original (no parafrasear)
4. El "Texto visible" es la fuente para generar el `body` del HTML

### 4. Referencias Bibliográficas

Cuando el slide contenga definiciones, conceptos teóricos o modelos, agregar referencia bibliográfica:

```markdown
**Elementos visuales**

- Definición de [Autor].
- [Contenido conceptual]

<p class="reference">Autor, A. Título de la Obra, Edición. Editorial, Año.</p>
```

**Bibliografía base del curso:**

| Autor | Obra | Editorial | Año |
|-------|------|-----------|-----|
| Sommerville, I. | Ingeniería de Software, 7ª ed. | Addison Wesley | 2005 |
| Pressman, R. | Ingeniería del Software: Un enfoque práctico, 7ª ed. | McGraw-Hill | 2010 |
| McConnell, Steve | Desarrollo y gestión de proyectos informáticos | McGraw-Hill | 1997 |
| Piattini, Mario | Calidad de Sistemas Informáticos | Alfaomega - Ra-Ma | 2007 |

### 5. Checklist de Regeneración

```markdown
## Checklist de regeneración

- [ ] Archivo nombrado como `guia-slides-clase-N.md`
- [ ] Mantener exactamente X slides y el orden 1–X.
- [ ] Conservar títulos, listas, definiciones, porcentajes, referencias y citas del inventario.
- [ ] Distinguir visualmente títulos, texto de contenido, jerarquías y bloques de citas.
- [ ] [Slide específico]: recrear imagen sin inventar valores ni etiquetas.
- [ ] Mantener enlaces como hipervínculos si el formato lo permite.
- [ ] No publicar datos sensibles en HTML, CSS, JavaScript, Markdown versionado ni capturas públicas.
- [ ] No agregar notas del orador si la fuente no contiene notas por slide.
- [ ] Revisar en una exportación o render final que no se corte texto.
```

### 6. Verificación de Fuente

```markdown
## Verificación de fuente

La guía se construyó leyendo el paquete OOXML del PPTX: `ppt/presentation.xml`, `ppt/_rels/presentation.xml.rels`, `ppt/slides/slide1.xml` a `ppt/slides/slideN.xml`, sus relaciones y `ppt/media/`. [Indicar si se encontraron o no `ppt/notesSlides/`].

## Exportación a PDF

### Herramienta
- Usar **WeasyPrint** para generar PDF desde HTML
- Instalar si no está disponible: `pip3 install weasyprint`

### Proceso de generación

1. **Crear archivo HTML temporal** en `/tmp/clase-X-print.html` con:
   - HTML autocontenido (sin dependencias externas)
   - Todas las diapositivas pre-renderizadas (sin JavaScript)
   - Rutas absolutas `file:///` para imágenes y logo

2. **Estructura del HTML de impresión:**
   ```html
   <!DOCTYPE html>
   <html lang="es">
   <head>
     <style>
       @page { size: landscape; margin: 0; }
       .print-slide { 
         page-break-after: always; 
         width: 297mm; 
         height: 167mm; 
         overflow: hidden;
       }
       .print-header { /* Header con logo */ }
       .figure-img { max-width: 100%; max-height: 400px; object-fit: contain; }
     </style>
   </head>
   <body>
     <div class="print-slide">
       <div class="print-header">
         <img src="file:///ruta/absoluta/fpuna_logo_institucional.svg">
         <div class="print-header-text">
           <span class="print-header-title">Ingeniería del Software I</span>
           <span class="print-header-subtitle">FP-UNA / Licenciatura en Ciencias Informáticas (LCiK)</span>
         </div>
         <span class="print-header-page">01 / 47</span>
       </div>
       <div class="slide">...</div>
     </div>
   </body>
   </html>
   ```

3. **Generar PDF con Python:**
   ```python
   import weasyprint
   html = weasyprint.HTML(filename='/tmp/clase-X-print.html')
   html.write_pdf('presentaciones-html/clase-X/clase-X.pdf')
   ```

### Reglas críticas

1. **Rutas absolutas para imágenes:**
   - Logo: `src="file:///home/jmferreira/Documents/FPUNA/CLASES-AER/IS1-LCIK/presentaciones-html/clase-X/assets/fpuna_logo_institucional.svg"`
   - Imágenes: `src="file:///home/jmferreira/Documents/FPUNA/CLASES-AER/IS1-LCIK/presentaciones-html/clase-X/assets/nombre-imagen.png"`
   - **NUNCA** usar rutas relativas en el HTML de impresión

2. **Header y sub-header en líneas separadas:**
   ```css
   .print-header-title { 
     font-weight: bold; 
     white-space: nowrap;  /* Evita salto de línea */
   }
   .print-header-subtitle { 
     font-size: 8px; 
     opacity: 0.9; 
     white-space: nowrap;  /* Evita salto de línea */
   }
   ```

3. **Dimensiones de página:**
   - Tamaño: `@page { size: landscape; margin: 0; }`
   - Slide: `width: 297mm; height: 167mm;` (proporción 16:9)
   - Header fijo en la parte superior

4. **Imágenes:**
   - Clase CSS: `.figure-img { max-width: 100%; max-height: 400px; object-fit: contain; }`
   - Centradas: `display: block; margin: 0 auto;`
   - Sin wrapper card en el PDF

5. **Contenido:**
   - Pre-renderizar todas las diapositivas en HTML estático
   - NO usar JavaScript en el HTML de impresión
   - Incluir todas las 47 diapositivas (o el número total de la clase)

### Verificación del PDF

```bash
# Verificar número de páginas
pdfinfo presentaciones-html/clase-X/clase-X.pdf | grep Pages

# Verificar tamaño
ls -lh presentaciones-html/clase-X/clase-X.pdf

# Verificar contenido (opcional)
pdftotext -f 1 -l 1 presentaciones-html/clase-X/clase-X.pdf -
```

### Actualización en index.html

Después de generar el PDF, actualizar el enlace en `presentaciones-html/index.html`:
```html
<a class="chip" href="clase-X/clase-X.pdf">PDF · N páginas</a>
```
```

## Reglas de Transcripción

### Texto Visible
- Transcribir EXACTAMENTE el texto del PPTX
- Conservar mayúsculas, minúsculas y puntuación original
- Preservar erratas relevantes (marcar con nota si es necesario)
- NO agregar definiciones externas
- NO corregir ortografía

### Elementos Visuales
- Describir la composición general (título, listas, tablas, etc.)
- Identificar imágenes y su contenido
- Indicar presencia de notas del orador
- Documentar hipervínculos OOXML

### Explicación Docente
- **Desarrollo:** Explicar el concepto y su conexión con otros temas
- **Ejemplos:** Usar Global Exchange como caso conductor y un segundo contexto industrial
- **Reflexión:** Aportar perspectiva profesional o académica
- **Pregunta desafío:** Formular pregunta que invite al análisis
- **Respuestas posibles:** Proponer 3-4 respuestas orientativas
- **Advertencia:** Señalar caveats o limitaciones importantes

## Reglas de Contenido

### Datos Sensibles
- Registrar EXISTENCIA del dato sensible
- NO reproducir valor (contraseñas, credenciales, etc.)
- Marcar como `[dato sensible presente en el PPTX original; omitido en esta guía]`

### Imágenes
- Documentar existencia de imágenes embebidas
- Describir contenido de la imagen
- Referenciar archivo original (`ppt/media/imageN.png`)
- En HTML: usar la misma imagen del PPTX (regla del usuario)
- **Importante:** Si el slide tiene un grupo de formas OOXML (no imagen), documentar esta limitación y usar un SVG conceptual o representación alternativa en el HTML

### Referencias Bibliográficas
- Agregar cuando el slide contenga:
  - Definiciones de autores
  - Conceptos teóricos fundamentales
  - Modelos o procesos
  - Metodologías
- Formato: `<p class="reference">Autor. Título, Edición. Editorial, Año.</p>`

## Reglas de Diseño para HTML

### Logo Institucional
- Siempre usar: `assets/fpuna_logo_institucional.svg`
- Copiar desde `clase-1/assets/` a cada clase

### Nombre del Profesor
- Siempre: "Prof. Lic. Guillermo Jacobo González Rodas Mst. PMP"
- Aunque el PPTX muestre otro nombre

### Imágenes del PPTX
- Si existe imagen en el PPTX, usar esa misma imagen en el HTML
- Guardar en `assets/` con nombre descriptivo
- Referenciar con ruta relativa `assets/nombre-imagen.png`

### Estructura HTML Obligatoria

Cada presentación HTML debe incluir:

1. **Header (topbar):** Logo institucional, nombre de la materia, nombre de la carrera
2. **Panel de Índice:** Lista navegable de todos los slides con título y número
3. **Panel de Notas Docentes:** Notas del orador para cada slide (campo `note` del slide)
4. **Controles de Presentación:** Botones anterior/siguiente, barra de progreso, contador de slides
5. **Soporte de Impresión:** Modo print con encabezado y paginación

### Funcionalidades JavaScript Obligatorias

- **Navegación por teclado:** ← → para slides, Home/End para inicio/fin
- **Navegación por hash:** `#slide-N` para ir a un slide específico
- **Panel de índice:** Toggle con botón o tecla `I`
- **Panel de notas:** Toggle con botón o tecla `N`
- **Pantalla completa:** Botón o tecla `F`
- **Modo impresión:** beforeprint/afterprint para generar PDF
- **Barra de progreso:** Actualización visual del avance
- **Contador:** Formato `NN / NN` con slide actual y total

### Implementación de Paneles (Importante)

La función de toggle de paneles DEBE:
1. Usar `panel.classList.toggle('open', isOpen)` para agregar/quitar la clase `open`
2. Usar `panel.setAttribute('aria-hidden', String(!isOpen))` para accesibilidad
3. Actualizar `aria-expanded` en el botón toggle
4. Hacer focus en el primer elemento interactivo del panel al abrir

```javascript
function togglePanel(id, force) {
  const panel = document.getElementById(id);
  const isOpen = force !== undefined ? force : !panel.classList.contains('open');
  panel.classList.toggle('open', isOpen);
  panel.setAttribute('aria-hidden', String(!isOpen));
  const toggleBtn = document.getElementById(id.replace('-panel', '-toggle'));
  if (toggleBtn) toggleBtn.setAttribute('aria-expanded', String(isOpen));
  if (isOpen) panel.querySelector('button, [href]')?.focus();
}
```

El CSS debe tener:
```css
.side-panel { transform: translateX(105%); }
.side-panel.open { transform: translateX(0); }
```

### Notas Docentes (OBLIGATORIO)

Las notas docentes del HTML (campo `note` en app.js) DEBEN contener la **Explicación docente completa** de la guía `guia-slides-clase-X.md`.

**Regla:** Siempre extraer las explicaciones de la guía y copiarlas al campo `note` de cada slide en app.js.

**Proceso:**
1. Leer la guía `guia-slides-clase-X.md`
2. Para cada slide, extraer la sección "Explicación docente"
3. Convertir de markdown a HTML:
   - `- **Desarrollo:**` → `<strong>Desarrollo:</strong>`
   - `- **Ejemplos:**` → `<br><br><strong>Ejemplos:</strong>`
   - `- **Reflexión docente:**` → `<br><br><strong>Reflexión docente:</strong>`
   - `- **Pregunta desafío:**` → `<br><br><strong>Pregunta desafío:</strong>`
   - `- **Respuestas posibles:**` → `<br><br><strong>Respuestas posibles:</strong><br>`
   - `  1. ` → `<br>• `
   - `- **Advertencia:**` → `<br><br><strong>Advertencia:</strong>`
4. Reemplazar el campo `note` en app.js con la nota HTML generada

**Formato de nota:**
```javascript
"note": "<strong>Desarrollo:</strong> [contenido]<br><br><strong>Ejemplos:</strong> [contenido]<br><br><strong>Reflexión docente:</strong> [contenido]<br><br><strong>Pregunta desafío:</strong> [contenido]<br><br><strong>Respuestas posibles:</strong><br>• [respuesta 1]<br>• [respuesta 2]<br><br><strong>Advertencia:</strong> [contenido]"
```

## Ejemplo de Slide Completo

```markdown
### Slide 14. ¿Qué es el Software?

**Texto visible**

- `¿Qué es el Software?`
- `Sommerville:`
- `"Programas de cómputo y su documentación asociada"`
- `Pressman:`
- `"Elemento del sistema de información que es lógico, con características considerablemente distintas a las del hardware"`

**Elementos visuales**

- Dos definiciones textuales diferenciadas por autor.
- No contiene imágenes ni notas del orador.

<p class="reference">Sommerville, I. Ingeniería de Software, 7ª ed. Addison Wesley, 2005.</p>
<p class="reference">Pressman, R. Ingeniería del Software: Un enfoque práctico, 7ª ed. McGraw-Hill, 2010.</p>

**Explicación docente**

- **Desarrollo:**
  - Contrastemos las definiciones: el **software** incluye **programas** y **documentación asociada**, y es un **elemento lógico** distinto del **hardware**.
  - La documentación sostiene el uso, la operación y el mantenimiento; por eso forma parte del producto considerado en el slide.
- **Ejemplos:** **Global Exchange (conductor):** además del programa de cambio de divisas, necesitamos documentar reglas, operación, errores e integración con pagos. **Segundo contexto industrial:** un sistema legado de gobierno puede seguir funcionando, pero sin documentación su mantenimiento depende de conocimiento difícil de transferir.
- **Reflexión docente:**
  - Tratar la documentación como un accesorio aumenta la dependencia de personas y el riesgo de operar o cambiar el sistema sin comprenderlo.
- **Pregunta desafío:** ¿qué documento asociarían a un sistema real?
- **Respuestas posibles:**
  1. Manual de usuario o procedimiento operativo.
  2. Especificación de requisitos, diseño o interfaz de integración.
  3. Instrucciones de despliegue, mantenimiento y recuperación ante fallos.
- **Advertencia:** lógico no significa intangible o irrelevante para la operación física.
```

## Proceso de Generación

**IMPORTANTE:** Siempre generar la guía `guia-slides-clase-X.md` para cada clase. Es un paso OBLIGATORIO del proceso.

1. **Extraer contenido del PPTX** usando python-pptx
2. **Identificar slides con imágenes** y documentarlas
3. **Detectar datos sensibles** y marcar su existencia
4. **Transcribir texto visible** de cada slide
5. **Describir elementos visuales** de cada slide
6. **Generar explicación docente** siguiendo el formato
7. **Agregar referencias bibliográficas** donde sea aplicable
8. **Crear guía `guia-slides-clase-X.md`** (OBLIGATORIO)
9. **Crear HTML** (index.html, app.js, styles.css)
10. **Generar PDF** con WeasyPrint
11. **Actualizar index.html** principal con enlaces
12. **Documentar verificación de fuente**

### Checklist de generación por clase

- [ ] Archivo `guia-slides-clase-X.md` creado
- [ ] Archivo `index.html` creado
- [ ] Archivo `app.js` creado con N slides
- [ ] Archivo `styles.css` copiado de clase-1
- [ ] Archivo `clase-X.pdf` generado
- [ ] Logo institucional en `assets/`
- [ ] Nombre del profesor correcto
- [ ] Imágenes del PPTX extraídas a `assets/`
- [ ] Enlaces en index.html principal actualizados

## Generación de Notas Docentes en HTML

Las notas docentes del HTML (campo `note` en app.js) deben contener la **Explicación docente completa** de la guía, formateada en HTML:

### Formato de Notas

```javascript
"note": "<strong>Desarrollo:</strong> [contenido del desarrollo]<br><br><strong>Ejemplos:</strong> [contenido de ejemplos]<br><br><strong>Reflexión docente:</strong> [contenido de reflexión]<br><br><strong>Pregunta desafío:</strong> [pregunta]<br><br><strong>Respuestas posibles:</strong><br>• [respuesta 1]<br>• [respuesta 2]<br>• [respuesta 3]<br><br><strong>Advertencia:</strong> [advertencia]"
```

### Reglas de Formato

- Usar `<strong>` para etiquetas (Desarrollo, Ejemplos, etc.)
- Usar `<br><br>` para separar secciones
- Usar `<br>` para separar respuestas
- Usar `•` para viñetas de respuestas
- Mantener el contenido textual completo de la guía
- NO resumir ni acortar las explicaciones
