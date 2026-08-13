# Guía de regeneración de la Clase 4

Guía docente para regenerar la presentación a partir de `sesiones-clase/clase-4/IS1-UNIDAD_IV.pptx`. Conserva los **22 slides**, su orden y su numeración de origen. La futura presentación deberá usar esta guía como especificación de contenido, no como sustituto del diseño visual.

**Archivo:** `guia-slides-clase-4.md`
**Ubicación:** `presentaciones-html/clase-4/casos_de_uso/`

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

- **Desarrollo:** **Ingeniería de Software I:** identifica la asignatura en la que se desarrolla el contenido, el contexto formativo en el que se abordan técnicas para construir software de calidad; por ejemplo, en un sistema de turnos hospitalarios, esta materia aporta las herramientas para describir formalmente los requisitos. **UNIDAD IV – CASOS DE USO Y ESPECIFICACIÓN DE CASOS DE USO:** presenta el núcleo temático de la clase, que se centra en cómo describir la interacción de los usuarios con el sistema; por ejemplo, en un hospital, definir cómo un paciente solicita un turno o cómo un médico consulta la agenda. **Prof. Ing. Julia Talavera:** identifica al docente a cargo, dato administrativo que sitúa la autoría de la presentación y orienta al estudiante sobre a quién recurrir ante dudas del material. La apertura de la unidad anticipa que los casos de uso conectan los requisitos con el diseño, describiendo el qué del sistema desde la perspectiva del usuario, y aclara que estos describen comportamiento y no implementación.
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

- **Desarrollo:** **OBJETIVOS:** anuncia que el slide presenta las metas de aprendizaje de la unidad, es decir, qué se espera que el estudiante logre al finalizar; por ejemplo, en un sistema de inventario, el objetivo sería poder describir las operaciones del almacén. **Comprender qué son los casos de uso y por qué son importantes:** implica entender el concepto y su utilidad; por ejemplo, saber que «Registrar entrada de mercadería» es un caso de uso que define una tarea del encargado de inventario. **Familiarizarse con los diagramas de caso de uso y relaciones:** busca que el estudiante pueda dibujar e interpretar actores, casos y vínculos como inclusión y extensión; por ejemplo, representar que «Registrar entrada» se asocia con el actor «Encargado». **Conocer una plantilla estándar para especificación de casos de uso:** apunta a manejar un formato uniforme que detalle actores, precondiciones, flujos y postcondiciones; por ejemplo, redactar la especificación de «Registrar entrada de mercadería». Los objetivos estructuran la unidad en tres momentos: definir, diagramar y especificar.
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

- **Desarrollo:** **CONTENIDO:** introduce el mapa temático de la unidad, ordenando los temas que se desarrollarán a continuación. **Casos de Uso:** primer concepto, la técnica para describir la interacción usuario-sistema; por ejemplo, en un foro académico, «Publicar mensaje». **Diagrama de Casos de Uso:** la representación gráfica de actores y casos; por ejemplo, dibujar al estudiante conectado a «Publicar mensaje». **Actores:** los usuarios o sistemas externos que interactúan con el sistema y se ubican fuera de sus límites; por ejemplo, el estudiante en el foro. **Relaciones:** los vínculos entre actores y casos, y entre casos entre sí; por ejemplo, la inclusión o la extensión entre funcionalidades del foro. **Especificación de Casos de Uso:** el detalle textual de cada caso con su flujo principal y alternativo; por ejemplo, los pasos para publicar un mensaje. **Plantilla Estándar:** el formato uniforme que estructura la especificación; por ejemplo, campos fijos como actor, precondiciones y postcondiciones. La unidad sigue una progresión que va del concepto al diagrama y de allí a la especificación, y el recorrido se profundiza en los slides siguientes.
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

- **Desarrollo:** **¿Qué es un Caso de Uso?:** plantea la pregunta que guía el slide y abre la definición del concepto. **Un caso de uso es una técnica utilizada en el diseño de sistemas de software para describir cómo un usuario interactúa con un sistema para lograr una tarea o función específica:** esta definición señala que el caso de uso narra la interacción completa; por ejemplo, en un banco, «Abrir cuenta» describe los pasos que sigue el cliente con el sistema. **Conjunto de escenarios que tienen una meta de usuario en común:** un caso puede reunir varias variantes que comparten el mismo objetivo; por ejemplo, abrir una cuenta personal o conjunta. **Descripción de un proceso de inicio a fin, relativamente largo, que incluye varias etapas o transacciones:** el caso recorre todo el proceso; por ejemplo, desde que el cliente se identifica hasta que recibe la confirmación de apertura. **Presenta un uso particular del sistema:** cada caso muestra una forma específica de usarlo; por ejemplo, consultar el saldo. **Describe a una funcionalidad del sistema:** expresa qué hace el sistema para el usuario; por ejemplo, validar los datos de la cuenta. **AYUDA a definir los límites del sistema, y las relaciones entre el sistema y su entorno:** delimita qué queda dentro y qué fuera; por ejemplo, el cajero está fuera y el proceso de apertura, dentro.
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

- **Desarrollo:** **Casos de Uso:** título del tema que se está desarrollando y que sirve de marco para el slide. **Formas de describir:** introduce la idea central de que los casos de uso pueden representarse de dos maneras complementarias; por ejemplo, en un sistema de turnos hospitalarios, la descripción del caso «Solicitar turno». **Diagramas de Casos de Uso:** la primera forma, una vista general y gráfica que muestra actores, casos y relaciones; la primera imagen del slide ilustra este diagrama, por ejemplo, con el paciente conectado al caso «Solicitar turno» mediante una línea de asociación. **Especificación de Casos de Uso:** la segunda forma, el detalle textual del flujo paso a paso; la segunda imagen muestra ese formato, por ejemplo, con precondiciones, flujo principal y alternativo del mismo caso. El diagrama da la visión panorámica y la especificación entrega el detalle, por lo que ambas son complementarias: conviene empezar con el diagrama para acordar el alcance y luego especificar el detalle.
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

- **Desarrollo:** **Cómo preparar Casos de Uso:** el título plantea el proceso previo a escribir los casos, y la imagen de apoyo resume visualmente los pasos para prepararlos. Preparar un caso de uso requiere, en primer lugar, identificar los actores que intervienen y sus metas; por ejemplo, en un hospital, reconocer a pacientes, médicos y administrativos, y aclarar qué busca lograr cada uno, como pedir un turno o revisar la agenda. En segundo lugar, hay que definir el flujo principal, es decir, la secuencia normal de pasos que ocurre cuando todo sale bien; por ejemplo, el paciente elige la fecha y el sistema confirma el turno. En tercer lugar, conviene establecer las alternativas y excepciones, es decir, qué sucede cuando algo varía, como que la fecha esté ocupada y el sistema ofrezca otra opción. La imagen condensa este proceso de preparación y sirve como guía visual para recordar que antes de redactar un caso de uso se deben identificar actores y metas, definir el flujo principal y plantear las alternativas.
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

- **Desarrollo:** **Proceso de Casos de Uso:** el título anuncia que el slide presenta las etapas ordenadas para construir los casos de uso, y la imagen de apoyo ilustra dicho proceso. El proceso guía la construcción ordenada de los casos de uso desde cero; por ejemplo, en un sistema de inventario, empezar por reconocer quiénes usan el almacén. La primera etapa consiste en identificar actores y metas, como el encargado que registra entradas y salidas. La segunda etapa es describir los flujos, es decir, narrar paso a paso cada interacción, como la secuencia para registrar una entrada de mercadería. La tercera etapa es especificar y validar: completar la plantilla con precondiciones, flujos alternativos y postcondiciones, y confirmar con los interesados que la descripción es correcta; por ejemplo, revisar con el encargado que el flujo coincida con la realidad del depósito. La imagen muestra el proceso de forma sintética, y sus etapas se detallan en los slides siguientes.
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

- **Desarrollo:** **Diagrama de Casos de Uso:** es la representación gráfica que organiza actores, casos y relaciones, y sirve de marco para todo el slide. **Límites del Sistema:** el rectángulo que delimita qué queda dentro del sistema y qué fuera; por ejemplo, en un sistema de inventario, el proceso de registrar entradas está dentro y el proveedor queda fuera. **Actores:** los usuarios o sistemas externos que interactúan con el sistema; por ejemplo, el actor «Encargado» que registra entradas. **Casos de Uso:** las funcionalidades que el sistema ofrece a los actores; por ejemplo, «Registrar entrada». **Relaciones:** los vínculos entre actores y casos, y entre casos entre sí. **Asociación:** la línea que conecta un actor con el caso que ejecuta; por ejemplo, el «Encargado» asociado a «Registrar entrada». **Generalización/especialización:** vincula un elemento general con variantes específicas; por ejemplo, un caso genérico «Gestionar stock» con las variantes «Registrar entrada» y «Registrar salida». **Inclusión:** un caso incorpora el comportamiento común de otro; por ejemplo, «Registrar entrada» incluye «Validar usuario». **Extensión:** agrega comportamiento opcional bajo condiciones; por ejemplo, «Registrar entrada» se extiende con «Notificar proveedor» cuando el stock es bajo.
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

- **Desarrollo:** **Diagrama de Casos de Uso:** el título indica que el slide se ocupa del lenguaje visual del diagrama; la imagen es una representación conceptual en SVG de la notación básica, ya que el original era un archivo WMF. **actor:** se representa con la figura de palo, un muñeco de líneas, y designa a quien interactúa con el sistema desde fuera; por ejemplo, en un sistema de inventario, el «Encargado» es un actor y se dibuja fuera del límite del sistema. **caso de uso:** se representa con una elipse con su nombre adentro y describe una funcionalidad del sistema; por ejemplo, «Registrar entrada» se dibuja como una elipse dentro del rectángulo del sistema. **asociacion:** se representa con una línea continua que conecta al actor con el caso de uso que ejecuta; por ejemplo, la línea que une al «Encargado» con «Registrar entrada». Esta notación es el idioma visual del diagrama de casos de uso: la figura de palo identifica a los actores, la elipse a los casos y la línea expresa la asociación entre ambos.
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

- **Desarrollo:** **Casos de Uso “Crear mensaje en el foro”:** el slide presenta un ejemplo concreto de caso de uso con su diagrama, ilustrado en la imagen. El caso describe la interacción de un participante con el sistema de foro para publicar un mensaje nuevo; por ejemplo, un estudiante que desea plantear una duda en el foro académico. El diagrama muestra al actor conectado al caso: el estudiante, representado con la figura de palo, se asocia mediante una línea al caso «Crear mensaje en el foro», dibujado como una elipse dentro de los límites del sistema. También participan otros actores, como el propio sistema, que almacena y muestra el mensaje, u otros usuarios que podrían responder. El ejemplo es análogo a cualquier caso de registro de contenido: en un sistema de mensajería, el caso equivalente sería «Publicar mensaje», y en un sistema de turnos, «Solicitar turno». La imagen ilustra el diagrama completo del caso y sirve para ver cómo se aplica la notación a una funcionalidad concreta.
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

- **Desarrollo:** **Casos de Uso – Relación Include:** el título presenta la relación de inclusión entre casos de uso, y la imagen del slide ilustra cómo se representa en el diagrama. La relación «include» indica que un caso de uso incluye el comportamiento común de otro: el caso base incorpora, de forma obligatoria, el comportamiento del caso incluido; por ejemplo, «Realizar pedido» incluye «Validar pago», porque todo pedido debe pasar por la validación del pago. La flecha de include es una línea discontinua con el estereotipo ««include»» sobre ella y la punta apuntando desde el caso base hacia el caso incluido; por ejemplo, la flecha va de «Realizar pedido» hacia «Validar pago». Conviene usar include cuando hay comportamiento compartido entre varios casos, para evitar la duplicación; por ejemplo, si varios casos requieren autenticación, todos incluyen «Validar usuario». También se usa cuando un caso siempre utiliza a otro en su flujo. La imagen resume este patrón: el caso base incorpora el comportamiento del incluido en cada ocasión.
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

- **Desarrollo:** **Casos de Uso – Relación Extend:** el título presenta la relación de extensión entre casos de uso, y la imagen del slide ilustra su representación. La relación «extend» agrega comportamiento opcional al caso base, que solo se ejecuta cuando se cumple una condición específica; por ejemplo, «Realizar pedido» se extiende con «Adjuntar archivos» cuando el cliente desea incluir documentación. La flecha de extend es discontinua, lleva el estereotipo ««extend»» y apunta desde el caso que agrega el comportamiento hacia el caso base que se extiende; por ejemplo, la flecha va de «Adjuntar archivos» hacia «Realizar pedido». A diferencia de include, que es obligatorio y comparte comportamiento, extend es opcional y se activa bajo condiciones; por ejemplo, en un sistema de turnos, «Solicitar turno» se extiende con «Cancelar turno» solo si el paciente decide cancelarlo. La imagen muestra este patrón: el caso base permanece completo sin la extensión, y la extensión se suma únicamente cuando la condición la dispara.
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

- **Desarrollo:** **Mal uso de las relaciones:** el título advierte sobre errores frecuentes al aplicar relaciones entre casos de uso, y la imagen del slide muestra ejemplos de esos errores. Un uso incorrecto genera modelos confusos y difíciles de mantener; por ejemplo, usar extend para comportamiento obligatorio, como si «Consultar catálogo» se extendiera con «Ver precios», cuando ver los precios es parte esencial de consultar. Otro error es incluir casos sin comportamiento común, empleando include solo porque dos casos se parecen, lo que duplica esfuerzo sin aportar claridad; por ejemplo, forzar una inclusión entre «Registrar cliente» y «Registrar proveedor» cuando no comparten pasos. También se abusa al sobrecargar el diagrama con relaciones innecesarias que lo hacen ilegible, por ejemplo, conectando cada caso con todos los demás. La imagen ilustra estos anti-patrones para reconocerlos y evitarlos: conviene preguntarse si el comportamiento realmente se comparte (include), si es realmente opcional (extend) o si la relación añade valor a la comprensión del modelo.
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

- **Desarrollo:** **Especificación de Casos de Uso:** el título presenta la forma textual de detallar cada caso de uso, y la imagen del slide muestra el formato de especificación. La especificación complementa al diagrama con el detalle escrito: mientras el diagrama ofrece una vista general, la especificación describe el caso paso a paso; por ejemplo, en un sistema de turnos hospitalarios, especificar el caso «Solicitar turno». El formato típico incluye campos como el actor que participa, las precondiciones que deben cumplirse antes de comenzar, el flujo principal con la secuencia normal de pasos entre el actor y el sistema, los flujos alternativos para las variantes y excepciones, y las postcondiciones que describen el estado al finalizar; por ejemplo, para «Solicitar turno», el actor es el paciente, la precondición es estar registrado y la postcondición es tener el turno confirmado. La imagen del slide muestra esta estructura de especificación y sirve de guía para redactar la de cualquier caso concreto de otros dominios, como registrar una entrada de mercadería o abrir una cuenta bancaria.
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

- **Desarrollo:** **Especificación de Casos de Uso:** el título continúa presentando la especificación como detalle textual del caso, y la imagen del slide complementa el formato visto anteriormente. Esta vista profundiza en el contenido de cada campo de la plantilla; por ejemplo, en un sistema de inventario, la especificación de «Registrar entrada de mercadería». En el flujo principal se documenta la secuencia normal de pasos: las acciones del actor y las respuestas del sistema; por ejemplo, el encargado ingresa el producto, el sistema valida el código, el encargado confirma la cantidad y el sistema actualiza el stock. Las precondiciones describen lo que debe existir antes, como estar autenticado, y las postcondiciones el estado resultante, como el stock incrementado. El flujo alternativo cubre las variantes, por ejemplo, que el código del producto no exista y el sistema ofrezca crearlo. La imagen complementa el formato de especificación mostrando cómo se completa cada campo, y sirve para detallar cualquier caso de otros dominios, como la solicitud de un turno o la publicación de un mensaje en un foro, asegurando que la secuencia quede clara para quien implementa o prueba.
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

- **Desarrollo:** **Especificación de Casos de Uso:** el título presenta la continuación de la serie de especificación, y la imagen del slide completa el formato mostrado. La especificación es iterativa: se redacta, se revisa y se ajusta, y suele validarse junto con el cliente o los interesados; por ejemplo, en un sistema de mensajería, revisar con los usuarios la especificación de «Enviar mensaje». La validación puede hacerse repasando los pasos con el cliente para confirmar que coinciden con la realidad del negocio, mediante pruebas que verifiquen que el sistema cumple lo especificado, o con trazabilidad que conecte cada caso con sus requisitos; por ejemplo, rastrear de qué requerimiento proviene «Enviar mensaje» y qué casos lo usan. La imagen completa la serie de especificación mostrando ejemplos adicionales del mismo formato, lo que permite comparar cómo se documentan distintos casos. La especificación no es un producto terminado a la primera: se va refinando en cada iteración y se confirma con los interesados, garantizando que el detalle textual sea la base confiable para el diseño, la implementación y las pruebas.
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

- **Desarrollo:** **Especificación de CU “Crear mensaje en el foro”:** el slide presenta la aplicación de la plantilla estándar a un caso concreto, ilustrada en la imagen, que muestra la especificación completa del caso. En la especificación se registran el actor principal, el estudiante que desea publicar un mensaje en el foro académico, y las precondiciones, como estar autenticado en el sistema. El flujo principal detalla la secuencia normal: el estudiante redacta el mensaje, el sistema valida el contenido, el estudiante confirma la publicación y el sistema almacena y muestra el mensaje. El flujo alternativo cubre las variantes, por ejemplo, que el mensaje esté vacío y el sistema solicite completarlo, o que el título supere la longitud permitida. Las postcondiciones describen el estado final, como el mensaje publicado y visible para el resto de participantes. La imagen muestra la especificación completa con todos estos elementos de la plantilla, y el ejemplo es análogo a especificar cualquier caso de creación de contenido, como publicar una entrada en un blog o registrar una nueva mercadería en el inventario.
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

- **Desarrollo:** **Especificación de CU “Crear mensaje en el foro”:** el título presenta el detalle de la especificación del caso, y la imagen completa la especificación mostrada, profundizando en el flujo paso a paso. El detalle del flujo facilita la implementación y las pruebas, porque cada acción del actor y cada respuesta del sistema quedan claras; por ejemplo, para «Crear mensaje en el foro», se detalla que el estudiante abre el formulario, escribe el asunto y el cuerpo, presiona publicar y el sistema confirma. El flujo alternativo es útil porque cubre las variantes del comportamiento normal y define las excepciones; por ejemplo, que el mensaje se guarde como borrador si la conexión falla, o que el sistema rechace un mensaje duplicado. Conocer las alternativas guía al desarrollador sobre cómo debe responder el sistema en cada caso y permite diseñar pruebas que ejerciten esas rutas; por ejemplo, probar qué ocurre cuando el usuario cancela la publicación. La imagen completa la especificación del caso mostrando ese nivel de detalle, y el patrón se replica en cualquier dominio, como detallar el registro de un turno o el envío de un correo.
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

- **Desarrollo:** **Caso de Estudio – Diagrama de CU:** el título anuncia la actividad integradora en la que se aplican los conceptos de la unidad a un sistema concreto. **Preparar Diagramas de los casos de usos respectivos para la interacción de un estudiante con el sistema de correos electrónico:** el enunciado pide elaborar los diagramas de casos de uso que describan la interacción del estudiante con el sistema de correo; por ejemplo, identificar qué tareas realiza el estudiante, como consultar correos, enviar un correo, borrar mensajes o recibir nuevos mensajes. Para preparar los diagramas conviene identificar primero los actores y sus metas, luego dibujar los casos dentro de los límites del sistema y conectar cada actor con las funcionalidades que ejecuta; por ejemplo, el estudiante se asocia con «Enviar correo». El caso de estudio integra todos los conceptos de la unidad: actores, casos de uso, límites y relaciones, y es análogo a modelar cualquier dominio, como un sistema de turnos o un foro académico. La solución se presenta en el slide siguiente.
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

- **Desarrollo:** **Caso de Estudio – Diagrama de CU:** el título presenta la solución del caso de estudio como un diagrama completo. **Consultar correos:** el caso que permite al estudiante revisar los mensajes recibidos. **Enviar correo:** el caso que permite redactar y despachar un correo a un destinatario. **Redactar Correo:** la funcionalidad de componer el contenido del mensaje antes de enviarlo. **Borrar correos:** el caso que permite eliminar mensajes, por ejemplo, los que ya no son necesarios. **Recibir correos:** el caso por el cual el sistema incorpora nuevos mensajes a la bandeja del estudiante. **Estudiante:** el actor principal que interactúa con el sistema de correo y se asocia a los casos de uso. **«Include» Reenviar Correo:** la relación de inclusión indica que «Reenviar correo» incluye el comportamiento de «Enviar correo», porque reenviar comparte la lógica de despacho; por ejemplo, la flecha va del caso reenviar al caso enviar. **«Extend» Adjuntar archivos:** la relación de extensión agrega la opción de adjuntar archivos a «Enviar correo» solo cuando el estudiante decide hacerlo. El diagrama ejemplifica el uso correcto de include y extend.
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

- **Desarrollo:** **Referencias:** el título indica que el slide comparte recursos externos para ampliar el contenido; las cuatro direcciones web listadas complementan la teoría con material de consulta. La primera referencia trata el concepto de tablero kanban y su actividad; por ejemplo, sirve para entender cómo se organiza visualmente el trabajo pendiente. La segunda aborda la implantación de roles ágiles, especialmente los roles en equipos Scrum; por ejemplo, conocer qué hace el dueño del producto o el facilitador. La tercera explica el backlog como todo el trabajo pendiente del proyecto; por ejemplo, cómo se priorizan los ítems en una lista única. La cuarta define qué es Scrum desde un sitio especializado en proyectos ágiles; por ejemplo, sus eventos, artefactos y pilares. Estas referencias son útiles para ampliar el tema de Scrum, revisar conceptos de kanban y profundizar en los roles ágiles; conviene consultarlas para enriquecer la comprensión práctica de la gestión de proyectos. Como son fuentes externas, se recomienda verificar su vigencia.
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

- **Desarrollo:** **Muchas gracias:** el slide cierra la unidad, agradece la atención de los estudiantes y abre a la vez el espacio de preguntas. Es un momento de repaso y cierre: se puede hacer un recorrido rápido de cómo describimos y especificamos los casos de uso, desde el concepto, pasando por el diagrama con actores y relaciones, hasta la plantilla estándar de especificación; por ejemplo, recordar cómo se modeló el sistema de correo del estudiante en el caso de estudio. También conviene invitar a reflexionar sobre qué concepto resultó más útil, como el diagrama de casos de uso, la especificación con plantilla o las relaciones include y extend, y responder las dudas que hayan quedado. La unidad sienta las bases para el diseño detallado y la implementación, por lo que el cierre no introduce contenidos nuevos, sino que consolida lo aprendido. La aplicación es general: cualquier proyecto, como un sistema de turnos hospitalarios, de inventario o un foro académico, se beneficia de estos conceptos.
- **Reflexión docente:** la unidad sienta las bases para el diseño detallado y la implementación.
- **Pregunta desafío:** ¿qué concepto de la unidad les resultó más útil?
- **Respuestas posibles:**
 1. El diagrama de casos de uso.
 2. La especificación con plantilla.
 3. Las relaciones Include/Extend.
- **Advertencia:** cierre de la unidad; no se introducen contenidos nuevos.
