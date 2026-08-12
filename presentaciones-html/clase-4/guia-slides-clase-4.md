# Guía de regeneración de la Clase 4

Guía docente para regenerar la presentación a partir de `sesiones-clase/clase-4/IS1-UNIDAD_IV.pptx`. Conserva los **22 slides**, su orden y su numeración de origen. La futura presentación deberá usar esta guía como especificación de contenido, no como sustituto del diseño visual.

**Archivo:** `guia-slides-clase-4.md`
**Ubicación:** `presentaciones-html/clase-4/`

## Lectura rápida

- **Fuente:** `sesiones-clase/clase-4/IS1-UNIDAD_IV.pptx`.
- **Total verificado:** 22 slides en `ppt/presentation.xml`, dentro de `p:sldIdLst`.
- **Notas del orador:** no hay archivos `ppt/notesSlides/`; el paquete solo contiene un notes master, sin notas asociadas a slides.
- **Contenido visual embebido:** 13 slides contienen imágenes (slides 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17 y 18). Incluye 2 archivos `.wmf` (slide 9) que no son convertibles; se usó una representación conceptual en SVG.
- **Dato sensible:** no se encontraron contraseñas ni datos sensibles en el PPTX.

## Criterio de transcripción

Cada slide se describe en tres capas para facilitar la revisión:

1. **Texto visible:** transcripción del contenido textual del PPTX. Se conservan formulaciones, mayúsculas y erratas relevantes del original; no se agregan definiciones externas.
2. **Elementos visuales:** objetos gráficos, imágenes y composición identificable desde el paquete OOXML.
3. **Explicación docente:** orientación para presentar el slide y conectar sus elementos. Es una propuesta didáctica basada únicamente en el contenido del slide.

## Reglas de diseño

- **Logo institucional:** `assets/fpuna_logo_institucional.svg` (mismo archivo copiado desde `clase-1/assets/`)
- **Imágenes del PPTX:** Si existe una imagen en el PPTX, se usa esa misma imagen en el HTML
- **Componentes:** Se usan los componentes CSS del patrón clase-1 (cards, sequence-card, table-like, etc.)
- **Nombre del profesor:** "Prof. Lic. Guillermo Jacobo González Rodas Mst. PMP" (incluso si el PPTX muestra otro)
- **Referencias bibliográficas:** Usar siempre referencias a la bibliografía base donde sea aplicable

### Estructura HTML Obligatoria

Cada presentación HTML debe incluir:

1. **Header (topbar):** Logo institucional, nombre de la materia, nombre de la carrera
2. **Panel de Índice:** Lista navegable de todos los slides con título y número
3. **Panel de Notas Docentes:** Notas del orador para cada slide (campo `note` del slide)
4. **Controles de Presentación:** Botones anterior/siguiente, barra de progreso, contador de slides
5. **Soporte de Impresión:** Modo print con encabezado y paginación

## Inventario slide por slide

### Slide 1. Unidad IV – Casos de Uso y Especificación de Casos de Uso

**Texto visible**

- `Ingeniería de Software I`
- `UNIDAD IV – CASOS DE USO Y ESPECIFICACIÓN DE CASOS DE USO`
- `Prof. Ing. Julia Talavera`

**Elementos visuales**

- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** Apertura de la Unidad IV: se presenta el tema de los casos de uso y su especificación, fundamentales para describir la interacción de los usuarios con el sistema.
- **Ejemplos:** **Global Exchange (conductor):** usaremos casos de uso para describir cómo un operador registra una operación de cambio o cómo un cliente consulta una cotización. **Segundo contexto industrial:** en un sistema de turnos hospitalarios, cómo un paciente solicita un turno o un médico consulta la agenda.
- **Reflexión docente:** los casos de uso conectan los requisitos con el diseño: describen el QUÉ del sistema desde la perspectiva del usuario.
- **Pregunta desafío:** ¿por qué es útil describir la interacción del usuario con el sistema?
- **Respuestas posibles:**
 1. Porque define qué debe hacer el sistema.
 2. Porque facilita la comunicación con el cliente.
 3. Porque es base para pruebas y validación.
- **Advertencia:** los casos de uso describen comportamiento, no implementación.

### Slide 2. Objetivos

**Texto visible**

- `OBJETIVOS`
- `Comprender qué son los casos de uso y por qué son importantes`
- `Familiarizarse con los diagramas de caso de uso y relaciones`
- `Conocer una plantilla estándar para especificación de casos de uso`

**Elementos visuales**

- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** Se presentan los objetivos: comprender qué son los casos de uso, familiarizarse con los diagramas y relaciones, y conocer una plantilla estándar de especificación.
- **Ejemplos:** **Global Exchange (conductor):** al finalizar sabremos dibujar el diagrama del sistema de cambio de divisas y especificar el caso «Registrar operación». **Segundo contexto industrial:** en un sistema de inventario, especificar «Registrar entrada de mercadería».
- **Reflexión docente:** los objetivos estructuran la unidad: definir, diagramar y especificar.
- **Pregunta desafío:** ¿qué diferencia hay entre el diagrama y la especificación de un caso de uso?
- **Respuestas posibles:**
 1. El diagrama muestra la relación; la especificación detalla el flujo.
 2. Uno es visual y el otro textual.
 3. Se complementan.
- **Advertencia:** los objetivos son de aprendizaje; no describen aún contenido técnico.

### Slide 3. Contenido

**Texto visible**

- `CONTENIDO`
- `Casos de Uso`
- `Diagrama de Casos de Uso`
- `Actores`
- `Relaciones`
- `Especificación de Casos de Uso`
- `Plantilla Estándar`

**Elementos visuales**

- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** Se presenta el mapa de la unidad: casos de uso, diagrama, actores, relaciones, especificación y plantilla estándar.
- **Ejemplos:** **Global Exchange (conductor):** el recorrido va desde el concepto de caso de uso hasta la especificación con plantilla estándar. **Segundo contexto industrial:** igual para cualquier dominio.
- **Reflexión docente:** la unidad sigue una progresión: concepto → diagrama → especificación.
- **Pregunta desafío:** ¿qué lugar ocupan los actores en el diagrama de casos de uso?
- **Respuestas posibles:**
 1. Son los usuarios o sistemas externos que interactúan.
 2. Están fuera del sistema.
 3. Se conectan a los casos de uso.
- **Advertencia:** el recorrido se profundiza en los slides siguientes.

### Slide 4. ¿Qué es un Caso de Uso?

**Texto visible**

- `¿Qué es un Caso de Uso?`
- `Un caso de uso es una técnica utilizada en el diseño de sistemas de software para describir cómo un usuario interactúa con un sistema para lograr una tarea o función específica.`
- `Conjunto de escenarios que tienen una meta de usuario en común`
- `Descripción de un proceso de inicio a fin, relativamente largo, que incluye varias etapas o transacciones`
- `Presenta un uso particular del sistema`
- `Describe a una funcionalidad del sistema`
- `AYUDA a definir los límites del sistema, y las relaciones entre el sistema y su entorno`

**Elementos visuales**

- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** Se define qué es un caso de uso: técnica para describir cómo un usuario interactúa con el sistema para lograr una tarea; conjunto de escenarios con una meta común, proceso de inicio a fin, uso particular y funcionalidad del sistema; ayuda a definir los límites del sistema.
- **Ejemplos:** **Global Exchange (conductor):** el caso «Registrar venta de divisas» describe cómo el operador ingresa la transacción, valida la tasa y confirma. **Segundo contexto industrial:** en un banco, «Abrir cuenta» es un caso de uso.
- **Reflexión docente:** los casos de uso ayudan a definir los límites del sistema y sus relaciones con el entorno.
- **Pregunta desafío:** ¿un caso de uso es una función o un escenario?
- **Respuestas posibles:**
 1. Es una secuencia de pasos con una meta.
 2. Puede incluir varios escenarios.
 3. Representa un uso particular del sistema.
- **Advertencia:** no confundir caso de uso con función del sistema; el caso describe la interacción completa.

### Slide 5. Casos de Uso: Formas de Describir

**Texto visible**

- `Casos de Uso`
- `Formas de describir:`
- `Diagramas de Casos de Uso.`
- `Especificación de Casos de Uso.`

**Elementos visuales**

- Imagen: `ppt/media/image6.png — Diagrama de casos de uso`.
- Imagen: `ppt/media/image5.png — Especificación de casos de uso`.

**Explicación docente**

- **Desarrollo:** Slide con imágenes: se muestran las dos formas de describir los casos de uso: diagramas y especificación.
- **Ejemplos:** **Global Exchange (conductor):** el diagrama del sistema de divisas y la especificación del caso «Registrar operación». **Segundo contexto industrial:** en un sistema de turnos, diagrama y especificación del caso «Solicitar turno».
- **Reflexión docente:** las dos formas son complementarias: el diagrama da la vista general; la especificación, el detalle.
- **Pregunta desafío:** ¿cuál de las dos formas usarían primero?
- **Respuestas posibles:**
 1. El diagrama, para acordar el alcance.
 2. La especificación, para detallar.
 3. Ambas en paralelo.
- **Advertencia:** las imágenes ilustran ambas representaciones.

### Slide 6. Cómo Preparar Casos de Uso

**Texto visible**

- `Cómo preparar Casos de Uso`

**Elementos visuales**

- Imagen: `ppt/media/image7.png — Cómo preparar casos de uso`.

**Explicación docente**

- **Desarrollo:** Slide visual: cómo preparar casos de uso, con imagen de apoyo.
- **Ejemplos:** **Global Exchange (conductor):** identificar los actores y las metas de las operaciones de cambio. **Segundo contexto industrial:** en un hospital, identificar pacientes, médicos y sus metas.
- **Reflexión docente:** preparar casos de uso requiere identificar actores, metas y flujos.
- **Pregunta desafío:** ¿qué se necesita antes de escribir un caso de uso?
- **Respuestas posibles:**
 1. Identificar actores y metas.
 2. Definir el flujo principal.
 3. Establecer las alternativas.
- **Advertencia:** la imagen resume el proceso de preparación.

### Slide 7. Proceso de Casos de Uso

**Texto visible**

- `Proceso de Casos de Uso`

**Elementos visuales**

- Imagen: `ppt/media/image8.png — Proceso de casos de uso`.

**Explicación docente**

- **Desarrollo:** Slide visual: proceso de casos de uso, con imagen de apoyo.
- **Ejemplos:** **Global Exchange (conductor):** el proceso para construir los casos de uso del sistema de divisas. **Segundo contexto industrial:** igual.
- **Reflexión docente:** el proceso guía la construcción ordenada de los casos de uso.
- **Pregunta desafío:** ¿qué etapas componen el proceso de casos de uso?
- **Respuestas posibles:**
 1. Identificar actores y metas.
 2. Describir flujos.
 3. Especificar y validar.
- **Advertencia:** la imagen muestra el proceso; se detalla en los siguientes slides.

### Slide 8. Diagrama de Casos de Uso: Elementos

**Texto visible**

- `Diagrama de Casos de Uso`
- `Límites del Sistema`
- `Actores`
- `Casos de Uso`
- `Relaciones`
- `Asociación`
- `Generalización/especialización`
- `Inclusión`
- `Extensión`

**Elementos visuales**

- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** Se presentan los elementos del diagrama de casos de uso: límites del sistema, actores, casos de uso y las relaciones (asociación, generalización/especialización, inclusión y extensión).
- **Ejemplos:** **Global Exchange (conductor):** el actor «Operador» se asocia al caso «Registrar operación»; «Consultar cotización» incluye «Validar usuario». **Segundo contexto industrial:** en un sistema de inventario, el actor «Encargado» se asocia a «Registrar entrada».
- **Reflexión docente:** el diagrama muestra actores, casos de uso y sus relaciones dentro de los límites del sistema.
- **Pregunta desafío:** ¿qué representa la relación de inclusión (include)?
- **Respuestas posibles:**
 1. Que un caso siempre incluye a otro.
 2. Que el caso base incluye el comportamiento del incluido.
 3. Se usa para comportamiento común.
- **Advertencia:** las relaciones se profundizan en los slides 11 y 12.

### Slide 9. Diagrama de Casos de Uso: Notación

**Texto visible**

- `Diagrama de Casos de Uso`
- `actor`
- `caso de uso`
- `asociacion`

**Elementos visuales**

- Imagen: `ppt/media/image9.wmf — Notación: actor, caso de uso y asociación`.

**Explicación docente**

- **Desarrollo:** Slide de notación: se muestra la notación básica del diagrama (actor, caso de uso y asociación).
- **Ejemplos:** **Global Exchange (conductor):** el actor se representa con una figura de palo; el caso de uso con una elipse; la asociación con una línea. **Segundo contexto industrial:** igual.
- **Reflexión docente:** la notación es el lenguaje visual del diagrama de casos de uso.
- **Pregunta desafío:** ¿cómo se representa un actor en el diagrama?
- **Respuestas posibles:**
 1. Con una figura de palo.
 2. Fuera de los límites del sistema.
 3. Conectado a los casos de uso.
- **Advertencia:** la imagen original era WMF; se usa una representación conceptual en SVG.

### Slide 10. Casos de Uso «Crear mensaje en el foro»

**Texto visible**

- `Casos de Uso “Crear mensaje en el foro”`

**Elementos visuales**

- Imagen: `ppt/media/image10.png — Casos de uso «Crear mensaje en el foro»`.

**Explicación docente**

- **Desarrollo:** Slide visual: ejemplo de caso de uso «Crear mensaje en el foro».
- **Ejemplos:** **Global Exchange (conductor):** análogo al caso «Registrar operación» con su diagrama. **Segundo contexto industrial:** en un foro académico, el caso «Publicar mensaje».
- **Reflexión docente:** el ejemplo ilustra un caso de uso concreto con su diagrama.
- **Pregunta desafío:** ¿qué actores participan en «Crear mensaje en el foro»?
- **Respuestas posibles:**
 1. El estudiante.
 2. El sistema de foro.
 3. Otros usuarios.
- **Advertencia:** la imagen muestra el diagrama del caso.

### Slide 11. Casos de Uso – Relación Include

**Texto visible**

- `Casos de Uso – Relación Include`

**Elementos visuales**

- Imagen: `ppt/media/image11.png — Relación Include`.

**Explicación docente**

- **Desarrollo:** Slide visual: relación Include entre casos de uso.
- **Ejemplos:** **Global Exchange (conductor):** «Registrar operación» incluye «Validar usuario» (comportamiento común). **Segundo contexto industrial:** «Realizar pedido» incluye «Validar pago».
- **Reflexión docente:** la relación Include indica que un caso de uso incorpora el comportamiento de otro.
- **Pregunta desafío:** ¿cuándo conviene usar Include?
- **Respuestas posibles:**
 1. Cuando hay comportamiento común.
 2. Cuando un caso siempre usa otro.
 3. Para evitar duplicación.
- **Advertencia:** la flecha de include apunta del caso base al incluido.

### Slide 12. Casos de Uso – Relación Extend

**Texto visible**

- `Casos de Uso – Relación Extend`

**Elementos visuales**

- Imagen: `ppt/media/image12.png — Relación Extend`.

**Explicación docente**

- **Desarrollo:** Slide visual: relación Extend entre casos de uso.
- **Ejemplos:** **Global Exchange (conductor):** «Registrar operación» se extiende con «Aplicar recargo» en ciertas condiciones. **Segundo contexto industrial:** «Realizar pedido» se extiende con «Adjuntar archivos».
- **Reflexión docente:** la relación Extend agrega comportamiento opcional en condiciones específicas.
- **Pregunta desafío:** ¿qué diferencia hay entre Include y Extend?
- **Respuestas posibles:**
 1. Include es obligatorio; Extend es opcional.
 2. Extend se ejecuta en condiciones.
 3. Include comparte comportamiento.
- **Advertencia:** la flecha de extend apunta del caso extendido al caso base.

### Slide 13. Mal Uso de las Relaciones

**Texto visible**

- `Mal uso de las relaciones`

**Elementos visuales**

- Imagen: `ppt/media/image13.png — Mal uso de las relaciones`.

**Explicación docente**

- **Desarrollo:** Slide visual: mal uso de las relaciones, mostrando errores comunes.
- **Ejemplos:** **Global Exchange (conductor):** usar Include/Extend sin criterio puede complicar el modelo. **Segundo contexto industrial:** igual.
- **Reflexión docente:** el mal uso de las relaciones genera modelos confusos.
- **Pregunta desafío:** ¿qué errores comunes se cometen con las relaciones?
- **Respuestas posibles:**
 1. Usar Extend para comportamiento obligatorio.
 2. Incluir casos sin comportamiento común.
 3. Sobrecargar el diagrama.
- **Advertencia:** la imagen ilustra ejemplos de mal uso.

### Slide 14. Especificación de Casos de Uso

**Texto visible**

- `Especificación de Casos de Uso`

**Elementos visuales**

- Imagen: `ppt/media/image14.png — Especificación de casos de uso`.

**Explicación docente**

- **Desarrollo:** Slide visual: especificación de casos de uso.
- **Ejemplos:** **Global Exchange (conductor):** la especificación detalla el flujo del caso «Registrar operación». **Segundo contexto industrial:** en un sistema de turnos, detallar el caso «Solicitar turno».
- **Reflexión docente:** la especificación complementa al diagrama con el detalle textual.
- **Pregunta desafío:** ¿qué contiene una especificación de caso de uso?
- **Respuestas posibles:**
 1. Actor, precondiciones, flujo principal y alternativo.
 2. Postcondiciones.
 3. Excepciones.
- **Advertencia:** la imagen muestra el formato de especificación.

### Slide 15. Especificación de Casos de Uso

**Texto visible**

- `Especificación de Casos de Uso`

**Elementos visuales**

- Imagen: `ppt/media/image15.png — Especificación de casos de uso`.

**Explicación docente**

- **Desarrollo:** Slide visual: especificación de casos de uso (continuación).
- **Ejemplos:** **Global Exchange (conductor):** se profundiza en la especificación con más detalle. **Segundo contexto industrial:** igual.
- **Reflexión docente:** la especificación se detalla en varias vistas.
- **Pregunta desafío:** ¿qué se documenta en el flujo principal?
- **Respuestas posibles:**
 1. Los pasos del actor y del sistema.
 2. La secuencia normal.
 3. Las respuestas del sistema.
- **Advertencia:** la imagen complementa el formato de especificación.

### Slide 16. Especificación de Casos de Uso

**Texto visible**

- `Especificación de Casos de Uso`

**Elementos visuales**

- Imagen: `ppt/media/image16.png — Especificación de casos de uso`.

**Explicación docente**

- **Desarrollo:** Slide visual: especificación de casos de uso (continuación).
- **Ejemplos:** **Global Exchange (conductor):** más ejemplos de especificación. **Segundo contexto industrial:** igual.
- **Reflexión docente:** la especificación es iterativa y se revisa con el cliente.
- **Pregunta desafío:** ¿cómo se validan las especificaciones?
- **Respuestas posibles:**
 1. Revisando con el cliente.
 2. Con pruebas.
 3. Con trazabilidad.
- **Advertencia:** la imagen completa la serie de especificación.

### Slide 17. Especificación de CU «Crear mensaje en el foro»

**Texto visible**

- `Especificación de CU “Crear mensaje en el foro”`

**Elementos visuales**

- Imagen: `ppt/media/image17.png — Especificación de CU «Crear mensaje en el foro»`.

**Explicación docente**

- **Desarrollo:** Slide visual: especificación del caso «Crear mensaje en el foro».
- **Ejemplos:** **Global Exchange (conductor):** se especifica en detalle el caso análogo «Registrar operación». **Segundo contexto industrial:** especificar «Publicar mensaje».
- **Reflexión docente:** el ejemplo aplica la plantilla estándar al caso concreto.
- **Pregunta desafío:** ¿qué elementos de la plantilla se usan en este caso?
- **Respuestas posibles:**
 1. Actor y precondiciones.
 2. Flujo principal y alternativo.
 3. Postcondiciones.
- **Advertencia:** la imagen muestra la especificación completa.

### Slide 18. Especificación de CU «Crear mensaje en el foro»

**Texto visible**

- `Especificación de CU “Crear mensaje en el foro”`

**Elementos visuales**

- Imagen: `ppt/media/image18.png — Especificación de CU «Crear mensaje en el foro»`.

**Explicación docente**

- **Desarrollo:** Slide visual: especificación del caso «Crear mensaje en el foro» (detalle).
- **Ejemplos:** **Global Exchange (conductor):** se detalla el flujo paso a paso. **Segundo contexto industrial:** igual.
- **Reflexión docente:** el detalle paso a paso facilita la implementación y las pruebas.
- **Pregunta desafío:** ¿por qué es útil el flujo alternativo?
- **Respuestas posibles:**
 1. Porque cubre variantes.
 2. Porque define excepciones.
 3. Porque guía al desarrollador.
- **Advertencia:** la imagen completa la especificación del caso.

### Slide 19. Caso de Estudio – Diagrama de CU

**Texto visible**

- `Caso de Estudio – Diagrama de CU`
- `Preparar Diagramas de los casos de usos respectivos para la interacción de un estudiante con el sistema de correos electrónico`

**Elementos visuales**

- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** Se presenta el caso de estudio: preparar diagramas de casos de uso para la interacción de un estudiante con el sistema de correos electrónicos.
- **Ejemplos:** **Global Exchange (conductor):** el caso de estudio aplica los conceptos a un sistema concreto. **Segundo contexto industrial:** en un sistema de correo, el estudiante interactúa con consultar, enviar y borrar correos.
- **Reflexión docente:** el caso de estudio integra todos los conceptos de la unidad.
- **Pregunta desafío:** ¿qué casos de uso identificarían para el estudiante?
- **Respuestas posibles:**
 1. Consultar correos.
 2. Enviar correo.
 3. Borrar correos.
- **Advertencia:** el caso de estudio se resuelve en el slide siguiente.

### Slide 20. Caso de Estudio – Diagrama de CU

**Texto visible**

- `Caso de Estudio – Diagrama de CU`
- `Consultar correos`
- `Enviar correo`
- `Redactar Correo`
- `Borrar correos`
- `Recibir correos`
- `Estudiante`
- `«Include» Reenviar Correo`
- `«Extend» Adjuntar archivos`

**Elementos visuales**

- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** Se presenta el diagrama del caso de estudio: el actor Estudiante con los casos Consultar correos, Enviar correo, Redactar Correo, Borrar correos, Recibir correos, y las relaciones «Include» (Reenviar Correo) y «Extend» (Adjuntar archivos).
- **Ejemplos:** **Global Exchange (conductor):** el diagrama muestra las relaciones entre los casos del sistema de correos. **Segundo contexto industrial:** en un sistema de mensajería, los mismos patrones.
- **Reflexión docente:** el diagrama integra actores, casos de uso y relaciones.
- **Pregunta desafío:** ¿qué relación conecta Reenviar Correo con Enviar correo?
- **Respuestas posibles:**
 1. «Include»: reenviar incluye el comportamiento de enviar.
 2. «Extend»: adjuntar archivos extiende enviar.
 3. Asociación con el actor.
- **Advertencia:** el diagrama ejemplifica el uso correcto de Include y Extend.

### Slide 21. Referencias

**Texto visible**

- `Referencias`
- `http://agilismoatwork.blogspot.com/2012/12/actividad-tablero-kanban-concepto-de.html`
- `http://agilismoatwork.blogspot.com/2011/11/implantando-roles-agiles-parte-i-los.html`
- `http://agilismoatwork.blogspot.com/2014/05/backlog-todo-el-trabajo-pendiente-del.html`
- `https://proyectosagiles.org/que-es-scrum/`

**Elementos visuales**

- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** Se comparten referencias web sobre metodologías ágiles y gestión de proyectos (kanban, roles ágiles, backlog y Scrum).
- **Ejemplos:** **Global Exchange (conductor):** las referencias amplían el contexto de gestión ágil. **Segundo contexto industrial:** consultar para profundizar.
- **Reflexión docente:** las referencias complementan la teoría con recursos externos.
- **Pregunta desafío:** ¿para qué les servirían estas referencias?
- **Respuestas posibles:**
 1. Para ampliar el tema de Scrum.
 2. Para ver conceptos de kanban.
 3. Para profundizar en roles ágiles.
- **Advertencia:** las referencias son externas; verificar su vigencia.

### Slide 22. Muchas Gracias

**Texto visible**

- `Muchas gracias`

**Elementos visuales**

- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** Cierre de la unidad: se agradece y se abre el espacio de preguntas.
- **Ejemplos:** **Global Exchange (conductor):** repaso rápido de cómo describimos y especificamos los casos de uso del sistema de cambio de divisas. **Segundo contexto industrial:** aplicación a cualquier proyecto.
- **Reflexión docente:** la unidad sienta las bases para el diseño detallado y la implementación.
- **Pregunta desafío:** ¿qué concepto de la unidad les resultó más útil?
- **Respuestas posibles:**
 1. El diagrama de casos de uso.
 2. La especificación con plantilla.
 3. Las relaciones Include/Extend.
- **Advertencia:** cierre de la unidad; no se introducen contenidos nuevos.
