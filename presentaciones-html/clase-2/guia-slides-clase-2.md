# Guía de regeneración de la Clase 2

Guía docente para regenerar la presentación a partir de `sesiones-clase/clase-2/IS1-UNIDAD_II.pptx`. Conserva los **47 slides**, su orden y su numeración de origen. La futura presentación deberá usar esta guía como especificación de contenido, no como sustituto del diseño visual.

**Archivo:** `guia-slides-clase-2.md`
**Ubicación:** `presentaciones-html/clase-2/`

## Lectura rápida

- **Fuente:** `sesiones-clase/clase-2/IS1-UNIDAD_II.pptx`.
- **Total verificado:** 47 slides en `ppt/presentation.xml`, dentro de `p:sldIdLst`.
- **Notas del orador:** no hay archivos `ppt/notesSlides/`; el paquete solo contiene un notes master, sin notas asociadas a slides.
- **Contenido visual embebido:** 4 slides contienen imágenes (slides 17, 30, 33, 41).
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

### Funcionalidades JavaScript Obligatorias

- **Navegación por teclado:** ← → para slides, Home/End para inicio/fin
- **Navegación por hash:** `#slide-N` para ir a un slide específico
- **Panel de índice:** Toggle con botón o tecla `I`
- **Panel de notas:** Toggle con botón o tecla `N`
- **Pantalla completa:** Botón o tecla `F`
- **Modo impresión:** beforeprint/afterprint para generar PDF
- **Barra de progreso:** Actualización visual del avance
- **Contador:** Formato `NN / NN` con slide actual y total

### Referencias bibliográficas del curso

| Autor | Obra | Editorial | Año |
|-------|------|-----------|-----|
| Sommerville, I. | Ingeniería de Software, 7ª ed. | Addison Wesley | 2005 |
| Pressman, R. | Ingeniería del Software: Un enfoque práctico, 7ª ed. | McGraw-Hill | 2010 |
| Jacobson, I., Booch, G., Rumbaugh, J. | The Unified Software Development Process | Addison-Wesley | 1999 |
| Highsmith, J. | Adaptive Software Development | Addison-Wesley | 2000 |
| Beck, K. | Extreme Programming Explained | Addison-Wesley | 1999 |
| Schwaber, K., Sutherland, J. | The Scrum Guide | Scrum.org | 2020 |
| Beck, K. et al. | Manifesto for Agile Software Development | agilemanifesto.org | 2001 |

---

## Inventario slide por slide

### Slide 1. Portada

**Texto visible**

- `UNIDAD II – MODELOS DE DESARROLLO DE SOFTWARE Y DESARROLLO RÁPIDO DEL SOFTWARE`
- `Prof. Ing. Julia Talavera`

**Elementos visuales**

- Slide de apertura con título principal, subtítulo y nombre del docente.
- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** **UNIDAD II – Modelos de Desarrollo de Software y Desarrollo Rápido del Software:** el título anuncia el foco de la clase: comprender cómo se organiza y se ejecuta el desarrollo de software, comparando los modelos tradicionales, los métodos ágiles y su impacto en la calidad y los plazos; por ejemplo, en un sistema de logística, la elección de un proceso determina si se entrega funcionalidad incremental o se espera a tener todo listo antes de desplegar. **Prof. Lic. Guillermo Jacobo González Rodas Mst. PMP:** la portada identifica al docente responsable de la cátedra, quien guiará el recorrido teórico y práctico de la unidad, de modo que el estudiante sepa a quién recurrir para resolver dudas; por ejemplo, en un curso donde los equipos deben justificar qué modelo de proceso aplicarán a su proyecto integrador, este dato permite ubicar rápidamente el canal de consulta académica.
- **Reflexión docente:** La unidad conecta teoría y práctica: comprender los modelos ayuda a justificar por qué un equipo trabaja de cierta manera.
- **Pregunta desafío:** ¿por qué no basta con «programar y entregar»?
- **Respuestas posibles:**
 1. Porque el software requiere planificación, diseño, verificación y mantenimiento.
 2. Porque los plazos, costos y calidad dependen de cómo se organice el trabajo.
 3. Porque sin proceso, los errores se descubren tarde y el retrabajo es costoso.
- **Advertencia:** esta apertura contextualiza la unidad; aún no definimos modelos técnicos.

### Slide 2. Objetivos

**Texto visible**

- `OBJETIVOS`
- `Entender las diferencias entre los métodos tradicionales de desarrollo y los métodos ágiles.`
- `Conocer principios, prácticas y limitaciones de los métodos ágiles.`
- `Entender como un enfoque de desarrollo de software iterativo e incremental conduce a una entrega más rápida.`

**Elementos visuales**

- Título y lista de tres objetivos.
- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** **OBJETIVOS:** la diapositiva presenta las metas de aprendizaje de la unidad, que orientan qué se espera del estudiante al finalizar. **Entender las diferencias entre los métodos tradicionales de desarrollo y los métodos ágiles:** se busca que el alumno distinga enfoques predictivos de enfoques adaptativos; por ejemplo, en un proyecto regulatorio puede exigirse documentación extensa (cascada), mientras que un prototipo de innovación en comercio electrónico se beneficia de iteraciones cortas (ágil). **Conocer principios, prácticas y limitaciones de los métodos ágiles:** además de saber qué son, hay que conocer sus reglas de juego y sus fronteras; por ejemplo, en un sistema de turnos hospitalarios conviene saber hasta dónde llega la agilidad antes de comprometer el desarrollo. **Entender cómo un enfoque de desarrollo de software iterativo e incremental conduce a una entrega más rápida:** la repetición de ciclos cortos permite mostrar resultados temprano y ajustar el rumbo; por ejemplo, en un ERP se puede liberar primero el módulo de inventario y luego el de compras, entregando valor sin esperar a tener todo el sistema terminado.
- **Reflexión docente:** No existe un modelo «perfecto»; la elección depende del problema, el equipo y las restricciones.
- **Pregunta desafío:** ¿qué factores determinan la elección de un modelo de proceso?
- **Respuestas posibles:**
 1. La claridad de los requisitos al inicio.
 2. La estabilidad del equipo y la tecnología.
 3. Los plazos, costos y riesgos del proyecto.
- **Advertencia:** los objetivos son evaluable; dominarlos es clave para el parcial.

### Slide 3. Contenido

**Texto visible**

- `CONTENIDO`
- `Introducción`
- `Características`
- `Manifiesto ágil`
- `Principales metodologías ágiles`
- `Adaptive Software Development (ASD)`
- `Scrum`
- `XP`

**Elementos visuales**

- Lista textual de siete temas.
- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** **CONTENIDO:** el slide funciona como mapa de ruta de la unidad, anticipando los temas que se desarrollarán. **Introducción:** se sitúa el contexto general; por ejemplo, en un sistema bancario, presentar primero el problema del retraso en las entregas. **Características:** se describen los rasgos de los modelos de proceso, como la predictibilidad o la flexibilidad; por ejemplo, en logística, distinguir un proceso planificado de uno adaptativo. **Manifiesto ágil:** se presenta el documento fundacional de los métodos ágiles, con sus valores y principios, por ejemplo, preferir software funcionando sobre documentación exhaustiva. **Principales metodologías ágiles:** se enumeran los marcos de trabajo más difundidos. **Adaptive Software Development (ASD):** filosofía centrada en equilibrar creatividad y estructura. **Scrum:** marco de gestión con sprints, roles y actividades definidos. **XP:** metodología que lleva las buenas prácticas de código al extremo. Este índice permite al estudiante ubicarse dentro del recorrido, por ejemplo, en un curso donde cada tema se profundiza después de su presentación inicial.
- **Reflexión docente:** El contenido muestra que no hay una respuesta única; la profesionalidad está en elegir y justificar el enfoque adecuado.
- **Pregunta desafío:** ¿por qué es importante conocer ambos enfoques?
- **Respuestas posibles:**
 1. Porque en la práctica real se combinan elementos de ambos.
 2. Porque el cliente puede pedir un enfoque específico.
 3. Porque comprender las limitaciones de uno ayuda a valorar las fortalezas del otro.
- **Advertencia:** el mapa anticipa temas; no reemplaza el desarrollo de cada sección.

### Slide 4. Ingeniería de Software

**Texto visible**

- `Ingeniería de Software`
- `A pesar haber transcurrido casi 40 años, la calidad del software, las metodologías y la madurez de los entornos de desarrollo siguen siendo temas de discusión y estudio.`
- `Objetivos`
- `Maximizar calidad`
- `Maximizar productividad`
- `Minimizar riesgos`

**Elementos visuales**

- Título, párrafo introductorio y tres objetivos.
- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** **Ingeniería de Software:** la diapositiva introduce la disciplina que da marco a toda la unidad. **A pesar de haber transcurrido casi 40 años, la calidad del software, las metodologías y la madurez de los entornos de desarrollo siguen siendo temas de discusión y estudio:** la idea central es que no hay recetas cerradas; por ejemplo, en un sistema bancario, un error de calidad puede costar millones y un retraso puede perder el mercado, lo que muestra que los problemas históricos persisten. **Objetivos:** la ingeniería persigue metas concretas. **Maximizar calidad:** producir software confiable y mantenible; por ejemplo, en un sistema de salud, que el historial clínico esté siempre disponible y correcto. **Maximizar productividad:** lograr más funcionalidad con el mismo esfuerzo; por ejemplo, en comercio electrónico, reutilizar componentes para acelerar el lanzamiento. **Minimizar riesgos:** reducir la probabilidad de fallos o retrasos; por ejemplo, en un proyecto de infraestructura, identificar temprano los riesgos técnicos. La tensión entre estos tres objetivos es inevitable y la profesión consiste en gestionar esos trade-offs en lugar de eliminarlos.
- **Reflexión docente:** La tensión entre Q, C y T es inevitable; la profesión está en gestionar trade-offs, no en eliminarlos.
- **Pregunta desafío:** ¿qué pasaría si ignoramos uno de los tres factores?
- **Respuestas posibles:**
 1. Ignorar calidad → software con errores que cuesta más mantener.
 2. Ignorar costos → proyecto que quiebra o no se completa.
 3. Ignorar plazos → oportunidad perdida o cliente insatisfecho.
- **Advertencia:** los factores Q, C, T están interconectados; no se pueden optimizar todos simultáneamente.

### Slide 5. Dificultades en Producción de Software

**Texto visible**

- `Dificultades en Producción de Software`
- `Esencia`
- `complejidad`
- `conformidad`
- `necesidad de cambios`
- `invisibilidad`

**Elementos visuales**

- Título y lista de cuatro elementos de la esencia del software.
- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** **Dificultades en Producción de Software:** la diapositiva presenta las razones estructurales por las que producir software es intrínsecamente difícil, tomadas de la reflexión de Fred Brooks. **Esencia:** se refiere a las propiedades inherentes del software que no se pueden eliminar. **Complejidad:** la lógica de un sistema real tiene miles de reglas que interactúan; por ejemplo, en un ERP, un cambio en una regla de negocio puede romper otra funcionalidad. **Conformidad:** el software debe ajustarse a regulaciones y estándares externos; por ejemplo, un sistema bancario debe cumplir normativas de auditoría que no puede decidir por sí mismo. **Necesidad de cambios:** los requisitos evolucionan con el negocio; por ejemplo, en logística, aparecen nuevas rutas o impuestos que obligan a retrabajo constante. **Invisibilidad:** la lógica del software no se puede ver ni tocar, lo que genera malentendidos entre el equipo y el cliente; por ejemplo, en un hospital, es difícil que el personal sanitario visualice cómo se procesa una derivación internamente. Entender estas esencias explica por qué no existen soluciones mágicas y por qué la ingeniería es necesaria.
- **Reflexión docente:** Entender la esencia ayuda a por qué no existen soluciones mágicas; la ingeniería es necesaria porque el software es inherentemente difícil.
- **Pregunta desafío:** ¿cuál de las cuatro esencias genera más problemas en un proyecto real?
- **Respuestas posibles:**
 1. Complejidad → errores difíciles de encontrar.
 2. Cambios → retrabajo constante.
 3. Invisibilidad → malentendidos entre equipo y cliente.
- **Advertencia:** estas no son excusas; son razones para aplicar ingeniería.

### Slide 6. Proceso de Software

**Texto visible**

- `Proceso de Software`
- `"Conjunto relacionado de actividades y tareas implicadas en el desarrollo y evolución de un sistema software" [Sommerville]`

**Elementos visuales**

- Definición textual con atribución a Sommerville.
- No contiene imágenes ni notas del orador.

<p class="reference">Sommerville, I. Ingeniería de Software, 7ª ed. Addison Wesley, 2005.</p>

**Explicación docente**

- **Desarrollo:** **Proceso de Software:** la diapositiva define el concepto central que organiza toda la producción de software. **«Conjunto relacionado de actividades y tareas implicadas en el desarrollo y evolución de un sistema software» [Sommerville]:** esta definición enfatiza que el proceso no es una lista suelta de pasos, sino un conjunto de actividades conectadas entre sí que van desde la captura de requisitos hasta el mantenimiento; por ejemplo, en un hospital, el proceso define cómo se convierten los requerimientos de privacidad en un sistema de historias clínicas, pasando por análisis, diseño, implementación y prueba. La palabra clave es «relacionado»: cada actividad produce insumos para la siguiente y los resultados retroalimentan el conjunto; por ejemplo, en un proyecto de logística, el proceso determina cómo se pasa de la idea de optimizar rutas a un sistema funcionando. Un proceso sin contexto puede convertirse en burocracia, mientras que un proceso aplicado con criterio se transforma en una herramienta de gestión.
- **Reflexión docente:** Un proceso sin contexto puede ser burocracia; un proceso con contexto es una herramienta de gestión.
- **Pregunta desafío:** ¿qué pasaría si no hubiera proceso alguno?
- **Respuestas posibles:**
 1. Caos: cada persona trabaja a su manera.
 2. Duplicación de esfuerzos y conflictos.
 3. Difícil de medir, corregir o mejorar.
- **Advertencia:** el proceso no es fin en sí mismo; sirve para producir software de calidad.

### Slide 7. Modelos de Procesos de Software

**Texto visible**

- `Modelos de Procesos de Software`
- `Modelos Tradicionales (MTs):`
- `Modelo en Cascada.`
- `Modelo de Prototipación.`
- `Modelo de Desarrollo en Fases.`
- `Modelo en Espiral.`
- `RUP`
- `Métodos Ágiles (MAs):`
- `Adaptive Software Development (ASD)`
- `Scrum`
- `XP`

**Elementos visuales**

- Lista jerárquica organizada en dos categorías: tradicionales y ágiles.
- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** **Modelos de Procesos de Software:** la diapositiva clasifica los procesos en dos grandes familias. **Modelos Tradicionales (MTs):** enfoques más planificados y documentados, donde el avance se controla por fases; por ejemplo, en un sistema de facturación que debe cumplir normativas fiscales. **Modelo en Cascada:** las fases se ejecutan en secuencia estricta. **Modelo de Prototipación:** se construyen versiones rápidas para validar ideas. **Modelo de Desarrollo en Fases:** el sistema se entrega por partes. **Modelo en Espiral:** combina iteraciones con análisis de riesgo. **RUP:** un framework iterativo orientado a la arquitectura. **Métodos Ágiles (MAs):** enfoques más flexibles e iterativos, orientados a la adaptación; por ejemplo, en una startup, iterar funcionalidades cortas con retroalimentación continua. **Adaptive Software Development (ASD):** filosofía de equilibrio entre creatividad y estructura. **Scrum:** marco de gestión con sprints. **XP:** prácticas de código llevadas al extremo. No son opuestos, sino herramientas para contextos distintos: las partes estables pueden usar modelos tradicionales y las partes nuevas, métodos ágiles.
- **Reflexión docente:** No son opuestos; son herramientas distintas para contextos distintos.
- **Pregunta desafío:** ¿cuándo elegiría tradicional vs. ágil?
- **Respuestas posibles:**
 1. Tradicional: requisitos claros, regulaciones estrictas.
 2. Ágil: requisitos cambiantes, equipo pequeño, innovación.
 3. Combinación: partes estables con tradicional, partes nuevas con ágil.
- **Advertencia:** la clasificación es útil pero no absoluta; existen híbridos.

### Slide 8. Modelo en Cascada

**Texto visible**

- `Modelo en Cascada`
- `Es el más antiguo.`
- `Debe completarse un estado antes de comenzar el siguiente.`
- `Es útil para que el desarrollador visualice lo que va a hacer.`
- `Su principal problema es que no refleja la realidad.`

**Elementos visuales**

- Título y lista de características del modelo en cascada.
- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** **Modelo en Cascada:** es el punto de partida de los modelos de proceso. **Es el más antiguo:** surge de trasladar al software las fases de la ingeniería tradicional; por ejemplo, en un proyecto de infraestructura, primero se planifica la obra y luego se construye. **Debe completarse un estado antes de comenzar el siguiente:** las fases son secuenciales, de modo que no se puede programar sin haber terminado el diseño; por ejemplo, en un sistema de control aéreo, la documentación extensa de cada fase es necesaria antes de avanzar. **Es útil para que el desarrollador visualice lo que va a hacer:** el orden lógico da una visión clara del camino completo desde el inicio; por ejemplo, en un proyecto de migración de datos, saber exactamente qué entregar en cada etapa. **Su principal problema es que no refleja la realidad:** los requisitos cambian durante el desarrollo y los errores se descubren tarde; por ejemplo, en un sistema bancario, si falta un requisito detectado recién en las pruebas, hay que retroceder con un alto costo.
- **Reflexión docente:** La cascada es buena para entender la secuencia lógica, pero peligrosa si se aplica rígidamente.
- **Pregunta desafío:** ¿por qué la cascada no refleja la realidad?
- **Respuestas posibles:**
 1. Porque los requisitos cambian durante el desarrollo.
 2. Porque los errores se descubren tarde.
 3. Porque el cliente no puede ver progreso hasta el final.
- **Advertencia:** la cascada no es «mala»; es inadecuada para proyectos con alta incertidumbre.

### Slide 9. Modelo en Cascada (En la práctica)

**Texto visible**

- `Modelo en Cascada`
- `En la práctica…`
- `ANÁLISIS DE REQUERIMIENTOS`
- `DISEÑO DEL SISTEMA`
- `DISEÑO DE PROGRAMAS`
- `CODIFICACIÓN`
- `TESTING UNITARIO E INTEGRADO`
- `TESTING DEL SISTEMA`
- `TESTING DE ACEPTACIÓN`
- `OPERACIÓN Y MANTENCIÓN`

**Elementos visuales**

- Lista secuencial de ocho fases del modelo en cascada.
- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** **Modelo en Cascada:** la diapositiva muestra cómo se materializa el modelo en la práctica cotidiana. **En la práctica…:** el diagrama ordena las etapas reales del trabajo. **Análisis de requerimientos:** se recogen y documentan las necesidades; por ejemplo, en un sistema de turnos, definir todos los casos de atención. **Diseño del sistema:** se define la arquitectura general; por ejemplo, en un ERP, cómo se comunican los módulos. **Diseño de programas:** se detalla cada componente, por ejemplo, la estructura interna del módulo de inventario. **Codificación:** se escribe el código, por ejemplo, implementar las pantallas de un sistema de facturación. **Testing unitario e integrado:** se prueban las partes y su integración; por ejemplo, verificar que el módulo de pagos hable con el de pedidos. **Testing del sistema:** se valida el conjunto completo. **Testing de aceptación:** el cliente confirma que cumple lo pedido. **Operación y mantención:** el sistema se despliega y evoluciona. Aunque el diagrama parece lineal, en la práctica las fases se superponen y los errores obligan a retroceder a etapas anteriores.
- **Reflexión docente:** El diagrama es ideal; la realidad es cíclica. Los errores retroalimentan fases anteriores.
- **Pregunta desafío:** ¿qué pasa si se detecta un error de requisitos en la fase de testing?
- **Respuestas posibles:**
 1. Se debe retroceder a análisis, lo que genera retrabajo.
 2. El costo del cambio aumenta con cada fase.
 3. La cascada pura no maneja bien esta retroalimentación.
- **Advertencia:** el diagrama es una simplificación; la realidad es más compleja.

### Slide 10. Modelo de Prototipación

**Texto visible**

- `Modelo de Prototipación`
- `Permite la construcción rápida del sistema (o parte de éste).`
- `Usuario y desarrollador tienen una visión común.`
- `Se reduce el riesgo y la incertidumbre del desarrollo.`

**Elementos visuales**

- Título y tres ventajas del modelo de prototipación.
- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** **Modelo de Prototipación:** la diapositiva presenta un modelo pensado para reducir la incertidumbre del desarrollo. **Permite la construcción rápida del sistema (o parte de éste):** se construyen versiones reducidas y rápidas para validar ideas antes de invertir en el desarrollo completo; por ejemplo, en un sistema de turnos hospitalarios, prototipar primero la pantalla de asignación automática. **Usuario y desarrollador tienen una visión común:** el prototipo hace tangible lo que el cliente imagina, evitando malentendidos; por ejemplo, en comercio electrónico, mostrar un boceto interactivo del carrito de compras para que el usuario lo corrija antes de programarlo. **Se reduce el riesgo y la incertidumbre del desarrollo:** al recibir retroalimentación temprana se detectan errores de requisitos cuando aún son baratos de corregir; por ejemplo, en un sistema bancario, validar el flujo de una solicitud de crédito antes de implementarlo completo. El prototipo es una herramienta de aprendizaje, no el producto final, y debe ser descartable.
- **Reflexión docente:** El prototipo no es el producto final; es una herramienta de aprendizaje.
- **Pregunta desafío:** ¿cuándo el prototipo puede ser contraproducente?
- **Respuestas posibles:**
 1. Cuando el cliente lo confunde con el producto final.
 2. Cuando se invierte demasiado tiempo en el prototipo.
 3. Cuando no se valida con usuarios reales.
- **Advertencia:** el prototipo debe ser descartable; no convertirlo en el producto sin diseñar.

### Slide 11. Modelo de Prototipación (Flujo)

**Texto visible**

- `Modelo de Prototipación`
- `REQUERIMIENTOS DEL PROTOTIPO`
- `DISEÑO DEL PROTOTIPO`
- `SISTEMA PROTOTIPO`
- `TESTING`
- `REVISIÓN`
- `REQUERIMIENTOS DEL SISTEMA`
- `SISTEMA ENTREGADO`

**Elementos visuales**

- Diagrama de flujo del proceso de prototipación con iteraciones.
- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** **Modelo de Prototipación:** la diapositiva presenta el flujo cíclico del proceso de prototipación. **Requerimientos del prototipo:** se definen qué aspectos validar primero; por ejemplo, en un sistema de turnos, qué filtros necesita el usuario. **Diseño del prototipo:** se bosqueja la interfaz o el comportamiento; por ejemplo, en comercio electrónico, el flujo de compra simplificado. **Sistema prototipo:** se construye la versión rápida y funcional. **Testing:** el usuario prueba el prototipo y descubre problemas; por ejemplo, en un sistema bancario, notar que falta el historial de operaciones. **Revisión:** se analizan los resultados y se decide qué cambiar. **Requerimientos del sistema:** con la retroalimentación, se refinan los requisitos definitivos, por ejemplo, agregar los filtros solicitados en la revisión. **Sistema entregado:** finalmente se construye el producto completo sobre la base de requisitos ya validados. Cada ciclo de este bucle reduce la incertidumbre, y el número de iteraciones debe tener un límite definido para evitar el crecimiento descontrolado del alcance.
- **Reflexión docente:** La iteración es clave; cada ciclo reduce la incertidumbre.
- **Pregunta desafío:** ¿cuántas iteraciones son razonables?
- **Respuestas posibles:**
 1. Las necesarias para clarificar requisitos, pero sin caer en perfeccionismo.
 2. Depende de la complejidad y del tiempo disponible.
 3. Siempre con un límite definido para evitar «scope creep».
- **Advertencia:** el prototipo no reemplaza el diseño; lo prepara.

### Slide 12. Modelo de Desarrollo en Fases

**Texto visible**

- `Modelo de Desarrollo en Fases`
- `Hoy, el mercado no acepta grandes retardos.`
- `Una forma de reducirlos es desarrollar en fases.`
- `El sistema se diseña de manera que pueda ser entregado por partes.`
- `Así, el usuario tiene algo de funcionalidad, mientras se desarrolla el resto.`
- `Hay dos sistemas funcionando en paralelo: El de Producción. Usado por el cliente. El Nuevo. Siendo desarrollado.`

**Elementos visuales**

- Título y texto explicativo sobre el modelo de desarrollo en fases.
- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** **Modelo de Desarrollo en Fases:** la diapositiva propone una alternativa para acortar los tiempos de entrega. **Hoy, el mercado no acepta grandes retardos:** esperar meses por el producto completo ya no es viable; por ejemplo, en comercio electrónico, un competidor lanza una función y la demanda es inmediata. **Una forma de reducirlos es desarrollar en fases:** en lugar de entregar todo al final, se divide el trabajo. **El sistema se diseña de manera que pueda ser entregado por partes:** la arquitectura se prepara para recibir incrementos; por ejemplo, en un ERP, el módulo de inventario primero, luego compras y después contabilidad. **Así, el usuario tiene algo de funcionalidad, mientras se desarrolla el resto:** el cliente empieza a usar valor real temprano y da retroalimentación; por ejemplo, en un sistema de turnos, primero visualización y después asignación automática. **Hay dos sistemas funcionando en paralelo: El de Producción, usado por el cliente, y El Nuevo, siendo desarrollado:** mientras el sistema anterior sigue operando, el nuevo crece hasta reemplazarlo; por ejemplo, en un hospital, el sistema viejo de citas sigue activo mientras se construye el moderno.
- **Reflexión docente:** Las fases permiten aprender y ajustar, pero requieren una arquitectura que soporte incrementos.
- **Pregunta desafío:** ¿qué riesgo tiene entregar en fases?
- **Respuestas posibles:**
 1. Si la arquitectura no está bien diseñada, los incrementos pueden ser incompatibles.
 2. El cliente puede presionar por funcionalidades no planificadas.
 3. La integración entre fases puede ser costosa.
- **Advertencia:** las fases no son «prototipos»; cada una debe ser una entrega estable.

### Slide 13. Modelo de Desarrollo en Fases (Ejemplo)

**Texto visible**

- `Modelo de Desarrollo en Fases`
- `* Este valor es aproximado`

**Elementos visuales**

- Tabla o diagrama con ejemplo de avance por fases.
- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** **Modelo de Desarrollo en Fases:** la diapositiva ilustra con un ejemplo cómo el avance no es lineal. **\* Este valor es aproximado:** la aclaración advierte que los porcentajes son orientativos y dependen del proyecto; por ejemplo, en un sistema de facturación, el valor de cada fase varía según la complejidad de las reglas fiscales. El diagrama muestra que la fase 2 ya entrega un porcentaje alto del sistema: por ejemplo, en un sistema de turnos hospitalarios, la fase 1 visualiza los turnos, la fase 2 incorpora la asignación automática (que representa la mayor parte del valor, alrededor del 60%) y la fase 3 agrega optimización y reportes. El avance acumulativo permite priorizar lo más valioso primero, decidiendo qué funcionalidad entra en cada fase por valor al usuario, por dependencias técnicas o por riesgo. Como los incrementos se acumulan, el usuario ya dispone de funcionalidad real cuando el proyecto apenas está a mitad de camino, y cada fase debe ser una entrega estable y no un prototipo descartable.
- **Reflexión docente:** El avance acumulativo permite priorizar lo más valioso primero.
- **Pregunta desafío:** ¿cómo decidir qué funcionalidad va en cada fase?
- **Respuestas posibles:**
 1. Por valor al usuario: lo más crítico primero.
 2. Por dependencias técnicas: lo que otros módulos necesitan.
 3. Por riesgo: lo más incierto se prueba temprano.
- **Advertencia:** los porcentajes son orientativos; dependen del proyecto.

### Slide 14. Modelo en Espiral

**Texto visible**

- `Modelo en Espiral`
- `Se combinan las actividades de desarrollo con Análisis de Riesgo.`
- `El modelo es de tipo iterativo: Planificación, Análisis de Riesgo, Ingeniería, Evaluación, Planificación`
- `En cada iteración, se evalúan las diferentes alternativas y se elige una.`
- `Los gestores del proyecto intentan eliminar o minimizar los riesgos en cada iteración.`

**Elementos visuales**

- Título y descripción del modelo espiral con sus fases.
- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** **Modelo en Espiral:** la diapositiva presenta un modelo que integra el desarrollo con la gestión de riesgos. **Se combinan las actividades de desarrollo con Análisis de Riesgo:** cada vuelta de la espiral une construcción y evaluación de peligros; por ejemplo, en un sistema de salud, cada iteración agrega un módulo (pacientes, turnos, facturación) y evalúa los riesgos de privacidad de los datos. **El modelo es de tipo iterativo: Planificación, Análisis de Riesgo, Ingeniería, Evaluación, Planificación:** el ciclo se repite y en cada vuelta se planea, se analizan riesgos, se desarrolla y se evalúa el resultado. **En cada iteración, se evalúan las diferentes alternativas y se elige una:** el equipo compara opciones técnicas y decide; por ejemplo, en un sistema bancario, elegir entre construir un módulo propio o integrar uno de terceros. **Los gestores del proyecto intentan eliminar o minimizar los riesgos en cada iteración:** el objetivo es reducir la incertidumbre progresivamente; por ejemplo, en logística, validar la integración con transportistas antes de escalar la solución. Es un modelo poderoso pero complejo.
- **Reflexión docente:** El espiral es poderoso pero complejo; requiere experiencia en gestión de riesgos.
- **Pregunta desafío:** ¿qué tipo de proyecto se beneficia más del espiral?
- **Respuestas posibles:**
 1. Proyectos grandes y complejos con riesgos significativos.
 2. Proyectos donde los requisitos no están claros.
 3. Proyectos donde la calidad es crítica y los errores son costosos.
- **Advertencia:** el espiral no es para todos; su complejidad puede ser excesiva para proyectos pequeños.

### Slide 15. Modelo en Espiral (Visualización)

**Texto visible**

- `Modelo en Espiral`

**Elementos visuales**

- Diagrama visual del modelo espiral (imagen: `assets/modelo-espiral.png`).
- No contiene notas del orador.

**Explicación docente**

- **Desarrollo:** **Modelo en Espiral:** la diapositiva es esencialmente visual, por lo que el docente debe guiar la lectura del diagrama. El diagrama muestra una espiral que parte del centro y crece hacia afuera: cada vuelta representa una iteración del desarrollo, y en el recorrido de cada giro se ven los cuatro cuadrantes del modelo. En el cuadrante de planificación se definen los objetivos y las restricciones de esa vuelta; en el de análisis de riesgo se identifican los peligros y se evalúan las alternativas; en el de ingeniería se construye el producto o el prototipo de esa iteración; y en el de evaluación el cliente revisa el resultado y decide cómo seguir. Con cada giro el radio aumenta, lo que simboliza un producto más completo y maduro, mientras los puntos de revisión entre cuadrantes permiten corregir el rumbo. Por ejemplo, en un proyecto de infraestructura, cada vuelta agrega una capacidad del sistema y reduce la incertidumbre acumulada, de modo que el riesgo guía la priorización en cada iteración.
- **Reflexión docente:** La espiral visualiza el concepto de iteración con riesgo.
- **Pregunta desafío:** ¿cómo se relaciona el riesgo con la planificación?
- **Respuestas posibles:**
 1. A mayor riesgo, más iteraciones iniciales.
 2. El análisis de riesgo guía la priorización.
 3. Cada iteración reduce la incertidumbre.
- **Advertencia:** el diagrama es una representación conceptual; la práctica varía según el proyecto.

### Slide 16. RUP – Rational Unified Process

**Texto visible**

- `RUP – Rational Unified Process`
- `Corresponde a un framework que puede ser usado para describir procesos de desarrollo específicos`
- `Cada ciclo de vida del software abarca 4 fases en el siguiente orden: concepción/planificación, elaboración, construcción y transición`
- `La esencia de RUP es la iteración, y cada iteración resulta en un incremento del sistema.`

**Elementos visuales**

- Título y descripción del framework RUP.
- No contiene imágenes ni notas del orador.

<p class="reference">Jacobson, I., Booch, G., Rumbaugh, J. The Unified Software Development Process. Addison-Wesley, 1999.</p>

**Explicación docente**

- **Desarrollo:** **RUP – Rational Unified Process:** la diapositiva presenta un marco de proceso iterativo e incremental, orientado a la arquitectura y controlado por riesgos. **Corresponde a un framework que puede ser usado para describir procesos de desarrollo específicos:** RUP no prescribe un proceso único, sino que se adapta a cada proyecto; por ejemplo, en un sistema bancario, permite planificar iteraciones con análisis de riesgo regulatorio. **Cada ciclo de vida del software abarca 4 fases en el siguiente orden: concepción/planificación, elaboración, construcción y transición:** en la concepción se define el alcance, en la elaboración se diseña la arquitectura, en la construcción se implementa la mayor parte y en la transición se despliega; por ejemplo, en un ERP, primero se delimita el alcance, luego se diseña la base y después se construyen los módulos. **La esencia de RUP es la iteración, y cada iteración resulta en un incremento del sistema:** cada fase se recorre en ciclos que entregan una parte funcional; por ejemplo, en logística, liberar primero el seguimiento de envíos y luego la planificación de rutas. Es un marco adaptable, no un proceso rígido.
- **Reflexión docente:** RUP no es un proceso rígido; es un marco adaptable.
- **Pregunta desafío:** ¿cuándo usar RUP vs. Scrum?
- **Respuestas posibles:**
 1. RUP para proyectos grandes con requisitos semi-estables.
 2. Scrum para equipos pequeños con requisitos cambiantes.
 3. Ambos pueden complementarse en organizaciones maduras.
- **Advertencia:** RUP requiere madurez organizacional para implementarse correctamente.

### Slide 17. RUP (Diagrama)

**Texto visible**

- `RUP – Rational Unified Process`

**Elementos visuales**

- Diagrama de proceso RUP (imagen extraída del PPTX: `rup-proceso.png`).
- No contiene notas del orador.

**Explicación docente**

- **Desarrollo:** **RUP – Rational Unified Process:** la diapositiva presenta el diagrama del proceso, y el docente debe guiar su lectura. El diagrama clásico de RUP está organizado en dos ejes: en el horizontal se ubican las cuatro fases del ciclo de vida —concepción o planificación, elaboración, construcción y transición— y en el vertical se disponen las disciplinas o flujos de trabajo, como modelado de negocio, requisitos, análisis y diseño, implementación, prueba y despliegue. La altura de cada fase sobre las disciplinas indica su énfasis: por ejemplo, en la elaboración dominan el análisis y el diseño, mientras que en la construcción crece la implementación y la prueba. Lo central es que las disciplinas son transversales: atraviesan todas las fases y se ejecutan en mayor o menor medida en cada iteración; por ejemplo, en un sistema de salud, la gestión de requisitos acompaña desde la concepción hasta la transición. El diagrama es una simplificación, pero comunica que cada iteración atraviesa todas las disciplinas y produce un incremento del sistema.
- **Reflexión docente:** RUP integra todas las disciplinas de desarrollo en cada fase.
- **Pregunta desafío:** ¿qué disciplinas son transversales en RUP?
- **Respuestas posibles:**
 1. Gestión de requisitos y diseño.
 2. Implementación y prueba.
 3. Despliegue y gestión de configuración.
- **Advertencia:** el diagrama es una simplificación; RUP es más complejo en la práctica.

### Slide 18. Problemas de los Modelos Tradicionales

**Texto visible**

- `Problemas de los Modelos Tradicionales`
- `Incumplimiento de los plazos de entrega.`
- `Reducción de las funcionalidades previstas inicialmente.`
- `Difícil adaptación a los cambios.`
- `Excesiva documentación.`

**Elementos visuales**

- Título y lista de cuatro problemas.
- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** **Problemas de los Modelos Tradicionales:** la diapositiva resume las fallas que motivaron el surgimiento de los métodos ágiles. **Incumplimiento de los plazos de entrega:** el plan se atrasa porque los requisitos cambian o las fases se alargan; por ejemplo, en un proyecto gubernamental, la documentación extensa puede retrasar la entrega. **Reducción de las funcionalidades previstas inicialmente:** ante la presión por cerrar, se recorta alcance y el sistema no resuelve la necesidad; por ejemplo, en un sistema de facturación, se elimina el módulo de reportes para cumplir la fecha. **Difícil adaptación a los cambios:** el proceso secuencial no absorbe modificaciones sin retrabajo; por ejemplo, en comercio electrónico, si cambian las reglas de descuento, todo el flujo debe rehacerse. **Excesiva documentación:** se produce burocracia que nadie lee; por ejemplo, en un proyecto de infraestructura, informes interminables que consumen tiempo sin aportar valor. No todos los proyectos sufren todos estos problemas, pero cuando aparecen erosionan la confianza del cliente y dejan el producto obsoleto.
- **Reflexión docente:** Estos problemas motivaron el surgimiento de los métodos ágiles.
- **Pregunta desafío:** ¿cuál de estos problemas es más grave?
- **Respuestas posibles:**
 1. Incumplimiento de plazos → pierde credibilidad.
 2. Reducción de funcionalidades → no resuelve la necesidad.
 3. Difícil adaptación → el producto queda obsoleto.
 4. Excesiva documentación → burocracia sin valor.
- **Advertencia:** no todos los proyectos sufren todos estos problemas; depende del contexto.

### Slide 19. Métodos Ágiles (Origen)

**Texto visible**

- `Métodos Ágiles (MAs)`
- `En febrero de 2001, tras una reunión celebrada en Utah-EEUU, nace el término "Ágil", aplicado al desarrollo de software.`
- `En esta reunión participaron un grupo de 17 expertos de la industria del software, incluyendo algunos de los creadores o impulsores de metodologías de software.`
- `Su objetivo fue establecer un manifiesto que reflejara los valores de los métodos ágiles.`

**Elementos visuales**

- Título y texto sobre el origen del manifiesto ágil.
- No contiene imágenes ni notas del orador.

<p class="reference">Beck, K. et al. Manifesto for Agile Software Development. agilemanifesto.org, 2001.</p>

**Explicación docente**

- **Desarrollo:** **Métodos Ágiles (MAs):** la diapositiva cuenta el origen histórico de estos enfoques. **En febrero de 2001, tras una reunión celebrada en Utah-EEUU, nace el término «Ágil», aplicado al desarrollo de software:** en esa reunión se acuñó la palabra que nombra a toda una familia de metodologías; por ejemplo, en un equipo de desarrollo de aplicaciones móviles, decir «somos ágiles» implica adoptar esos valores y prácticas. **En esta reunión participaron un grupo de 17 expertos de la industria del software, incluyendo algunos de los creadores o impulsores de metodologías de software:** participaron figuras como Beck, Schwaber y Sutherland, creadores de XP y Scrum, lo que da autoridad al documento; por ejemplo, en una empresa de desarrollo, esa experiencia acumulada respalda el cambio de enfoque. **Su objetivo fue establecer un manifiesto que reflejara los valores de los métodos ágiles:** el resultado fue un texto corto con valores y principios compartidos; por ejemplo, en un sistema de turnos, la agilidad permite ajustar prioridades según la demanda. El manifiesto es un conjunto de valores, no una metodología específica.
- **Reflexión docente:** El ágil no es una moda; es una respuesta a problemas reales.
- **Pregunta desafío:** ¿por qué 17 expertos sintieron la necesidad de crear un manifiesto?
- **Respuestas posibles:**
 1. Porque los modelos tradicionales no resolvían todos los problemas.
 2. Porque la industria necesitaba un enfoque más flexible.
 3. Porque la colaboración y la adaptabilidad eran valores olvidados.
- **Advertencia:** el manifiesto es un conjunto de valores, no una metodología específica.

### Slide 20. Métodos Ágiles (Definición)

**Texto visible**

- `Métodos Ágiles`
- `Las Metodologías Ágiles (MAs) son un conjunto de estrategias de desarrollo que promueven prácticas adaptativas, en lugar de predictivas, como las sugeridas por las Metodologías Tradicionales (MTs) de Desarrollo de Software.`
- `Dicho de otra manera, promueven la adaptabilidad a los cambios por sobre el seguimiento estricto de un plan.`

**Elementos visuales**

- Título y definición de metodologías ágiles.
- No contiene imágenes ni notas del orador.

<p class="reference">Pressman, R. Ingeniería del Software: Un enfoque práctico, 7ª ed. McGraw-Hill, 2010. Cap. 2.</p>

**Explicación docente**

- **Desarrollo:** **Métodos Ágiles:** la diapositiva define formalmente el concepto. **Las Metodologías Ágiles (MAs) son un conjunto de estrategias de desarrollo que promueven prácticas adaptativas, en lugar de predictivas, como las sugeridas por las Metodologías Tradicionales (MTs) de Desarrollo de Software:** mientras los modelos tradicionales intentan predecir todo el trabajo por adelantado, los ágiles ajustan el rumbo con evidencia; por ejemplo, en un sistema de comercio electrónico, los cambios en precios o productos se incorporan iteración a iteración. **Dicho de otra manera, promueven la adaptabilidad a los cambios por sobre el seguimiento estricto de un plan:** el plan deja de ser un contrato rígido y pasa a ser una hipótesis que se revisa; por ejemplo, en un sistema de turnos hospitalarios, si aumenta la demanda de citas, el equipo reorganiza las prioridades del siguiente ciclo sin rehacer todo el plan. Es importante aclarar que la agilidad no elimina la planificación: la transforma en un proceso continuo y exige disciplina, roles y herramientas definidos, no improvisación.
- **Reflexión docente:** La agilidad no es falta de proceso; es proceso adaptable.
- **Pregunta desafío:** ¿qué diferencia hay entre «adaptarse al cambio» y «no tener plan»?
- **Respuestas posibles:**
 1. Adaptarse implica un marco de trabajo; la falta de plan es caos.
 2. Los MAs tienen roles, actividades y herramientas definidas.
 3. La agilidad requiere disciplina, no improvisación.
- **Advertencia:** la agilidad no elimina la necesidad de planificación; la transforma.

### Slide 21. Manifiesto Ágil

**Texto visible**

- `Métodos Ágiles`
- `Según el manifiesto ágil se valora:`

**Elementos visuales**

- Título e introducción a los valores del manifiesto ágil.
- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** **Métodos Ágiles:** la diapositiva abre el bloque dedicado al Manifiesto Ágil. **Según el manifiesto ágil se valora:** esta frase introduce los cuatro valores que guían a todos los métodos ágiles y que se desarrollan uno por uno en las siguientes diapositivas. El manifiesto declara que se valora a los individuos y sus interacciones por sobre el proceso y las herramientas; el software funcionando por sobre la documentación exhaustiva; la colaboración con el cliente por sobre la negociación de un contrato; y la respuesta al cambio por sobre el seguimiento estricto de un plan. Estos valores no son absolutos ni eliminan la documentación o la planificación: son preferencias que se aplican cuando hay un trade-off; por ejemplo, en un sistema de logística, elegir reunirse con el usuario para aclarar el alcance antes que escribir cien páginas de requisitos, o entregar una funcionalidad que funciona antes que documentar todo el diseño por adelantado. Los valores ayudan a decidir dónde invertir el esfuerzo del equipo.
- **Reflexión docente:** Los valores no son absolutos; son preferencias cuando hay trade-offs.
- **Pregunta desafío:** ¿qué valor les parece más importante y por qué?
- **Respuestas posibles:**
 1. Individuos e interacciones, porque las personas hacen el software.
 2. Software funcionando, porque es la medida de progreso.
 3. Colaboración con el cliente, porque asegura que resolvamos el problema correcto.
 4. Respuesta al cambio, porque el mercado evoluciona.
- **Advertencia:** los valores no eliminan la necesidad de documentación o planificación; los priorizan.

### Slide 22. Individuos e Interacciones

**Texto visible**

- `Métodos Ágiles`
- `Al individuo y las interacciones del equipo de desarrollo sobre el proceso y las herramientas.`
- `La gente es el principal factor de éxito de un proyecto software. Es más importante construir un buen equipo que construir el entorno. Muchas veces se comete el error de construir primero el entorno y esperar que luego se integre el equipo.`

**Elementos visuales**

- Título y texto sobre el valor de individuos e interacciones.
- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** **Métodos Ágiles:** la diapositiva desarrolla el primer valor del manifiesto. **Al individuo y las interacciones del equipo de desarrollo sobre el proceso y las herramientas:** las personas y su comunicación valen más que el proceso formal o las herramientas; por ejemplo, en un sistema de salud, la comunicación entre desarrolladores y médicos es clave para entender las necesidades reales de atención. **La gente es el principal factor de éxito de un proyecto software. Es más importante construir un buen equipo que construir el entorno. Muchas veces se comete el error de construir primero el entorno y esperar que luego se integre el equipo:** el texto advierte que invertir primero en infraestructura y después esperar que el equipo se acople es un error frecuente; por ejemplo, en comercio electrónico, un equipo que se comunica bien detecta errores de requisitos antes que cualquier herramienta de gestión de proyectos. Las herramientas apoyan, pero las personas deciden: un equipo sin comunicación duplica esfuerzos y produce soluciones técnicamente correctas que no resuelven el problema real. Este valor no excluye las herramientas, sino que las subordina a la colaboración.
- **Reflexión docente:** Las herramientas apoyan; las personas deciden.
- **Pregunta desafío:** ¿qué pasa si un equipo tiene las mejores herramientas pero no se comunica?
- **Respuestas posibles:**
 1. Se producen soluciones técnicamente correctas pero que no resuelven el problema.
 2. Se duplica esfuerzo porque no hay coordinación.
 3. Se pierden oportunidades de mejora que solo la colaboración revela.
- **Advertencia:** individuos e interacciones no excluyen herramientas; las complementan.

### Slide 23. Software Funcionando

**Texto visible**

- `Métodos Ágiles`
- `Desarrollar software que funciona más que conseguir una buena documentación.`
- `La regla a seguir es no producir documentos a menos que sean necesarios de forma inmediata para tomar una decisión importante. Estos documentos deben ser breves y centrarse en lo fundamental.`

**Elementos visuales**

- Título y texto sobre el valor de software funcionando.
- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** **Métodos Ágiles:** la diapositiva desarrolla el segundo valor del manifiesto. **Desarrollar software que funciona más que conseguir una buena documentación:** el software operativo es la medida real del progreso; por ejemplo, en un sistema de turnos, un prototipo funcionando comunica más que cincuenta páginas de especificación. **La regla a seguir es no producir documentos a menos que sean necesarios de forma inmediata para tomar una decisión importante. Estos documentos deben ser breves y centrarse en lo fundamental:** la documentación no se elimina, pero se justifica solo cuando ayuda a decidir; por ejemplo, en un sistema bancario, un documento breve de arquitectura es necesario, mientras que un informe extenso que nadie lee es burocracia. La documentación excesiva puede convertirse en un fin en sí misma y desviar el esfuerzo del producto; por ejemplo, en un proyecto de logística, preferir un incremento funcional que valide una ruta antes que un manual completo. El equilibrio es clave: no documentar nada es tan peligroso como documentar todo.
- **Reflexión docente:** La documentación excesiva puede convertirse en burocracia que nadie lee.
- **Pregunta desafío:** ¿qué documentación es realmente necesaria?
- **Respuestas posibles:**
 1. La que ayuda a tomar decisiones importantes.
 2. La que facilita la mantención y evolución del sistema.
 3. La que permite a nuevos miembros del equipo entender el sistema.
- **Advertencia:** no documentar nada es tan peligroso como documentar todo; el equilibrio es clave.

### Slide 24. Colaboración con el Cliente

**Texto visible**

- `Métodos Ágiles`
- `La colaboración con el cliente más que la negociación de un contrato.`
- `Se propone que exista una interacción constante entre el cliente y el equipo de desarrollo. Esta colaboración entre ambos será la que marque la marcha del proyecto y asegure su éxito.`

**Elementos visuales**

- Título y texto sobre la colaboración con el cliente.
- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** **Métodos Ágiles:** la diapositiva desarrolla el tercer valor del manifiesto. **La colaboración con el cliente más que la negociación de un contrato:** el cliente deja de ser un demandante distante y pasa a ser un socio del proyecto; por ejemplo, en un sistema de turnos hospitalarios, los médicos y administradores participan en cada ciclo para priorizar funcionalidades. **Se propone que exista una interacción constante entre el cliente y el equipo de desarrollo. Esta colaboración entre ambos será la que marque la marcha del proyecto y asegure su éxito:** el texto subraya que el contacto continuo guía las decisiones y evita construir algo que nadie quiere usar; por ejemplo, en comercio electrónico, el responsable de ventas valida cada incremento y corrige el rumbo antes de que el error se profundice. Un contrato sin colaboración puede entregar un producto técnicamente correcto pero inútil para el negocio; por ejemplo, en logística, un sistema que cumple el pliego pero no se adapta a cómo operan realmente los transportistas. La colaboración exige compromiso de ambas partes, y si el cliente no puede participar, se designa un representante.
- **Reflexión docente:** Un contrato sin colaboración puede entregar algo que nadie quiere usar.
- **Pregunta desafío:** ¿qué pasa si el cliente no puede participar activamente?
- **Respuestas posibles:**
 1. Se asigna un representante o proxy del cliente.
 2. Se incrementa la frecuencia de revisión con el cliente disponible.
 3. Se documentan supuestos y se validan temprano.
- **Advertencia:** la colaboración requiere compromiso de ambas partes.

### Slide 25. Respuesta al Cambio

**Texto visible**

- `Métodos Ágiles`
- `Responder a los cambios más que seguir estrictamente un plan.`
- `La habilidad de responder a los cambios que puedan surgir a lo largo del proyecto (cambios en los requisitos, en la tecnología, en el equipo, etc.) determina también el éxito o fracaso del mismo.`
- `Por lo tanto, la planificación no debe ser rígida, sino que debe permitir la adaptación.`

**Elementos visuales**

- Título y texto sobre la respuesta al cambio.
- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** **Métodos Ágiles:** la diapositiva desarrolla el cuarto valor del manifiesto. **Responder a los cambios más que seguir estrictamente un plan:** la adaptación se valora por encima del cumplimiento literal del plan; por ejemplo, en un sistema de comercio electrónico, los cambios en precios o productos se incorporan sin esperar al siguiente lanzamiento. **La habilidad de responder a los cambios que puedan surgir a lo largo del proyecto (cambios en los requisitos, en la tecnología, en el equipo, etc.) determina también el éxito o fracaso del mismo:** el texto vincula directamente la capacidad de adaptación con el resultado del proyecto; por ejemplo, en un sistema bancario, si cambia la regulación financiera, el equipo debe ajustar el desarrollo sin rehacer todo el plan. **Por lo tanto, la planificación no debe ser rígida, sino que debe permitir la adaptación:** se planifica en iteraciones cortas con objetivos claros y un catálogo de trabajo priorizado que se ajusta en cada ciclo. La respuesta al cambio no es improvisación: es adaptación dentro de un marco disciplinado.
- **Reflexión docente:** El plan es una guía, no una camisa de fuerza.
- **Pregunta desafío:** ¿cómo planificar sin ser rígido?
- **Respuestas posibles:**
 1. Planificar en iteraciones cortas con objetivos claros.
 2. Mantener un backlog priorizado que se ajuste con cada iteración.
 3. Aceptar que el plan inicial es una aproximación que se refinará.
- **Advertencia:** la respuesta al cambio no es improvisación; es adaptación dentro de un marco.

### Slide 26. Agilidad vs. Proceso

**Texto visible**

- `Agilidad vs. Proceso`
- `En los últimos años distintos trabajos han investigado la relación entre modelos de procesos y métodos ágiles, observando lo siguiente`
- `El CMM/CMMI del SEI y XP pueden complementarse (enfocando aspectos de gestión vs. técnicos)`
- `Métodos ágiles coinciden con la esencia del mejoramiento de procesos bajo un enfoque de equipo`
- `Scrum y CMM/CMMI son compatibles`
- `El punto de equilibrio entre ambos enfoques permite maximizar beneficios`

**Elementos visuales**

- Título y texto sobre la relación entre agilidad y proceso.
- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** **Agilidad vs. Proceso:** la diapositiva muestra que agilidad y proceso no son enemigos, sino fuerzas complementarias. **En los últimos años distintos trabajos han investigado la relación entre modelos de procesos y métodos ágiles, observando lo siguiente:** la investigación ha encontrado evidencia de convivencia entre ambos mundos. **El CMM/CMMI del SEI y XP pueden complementarse (enfocando aspectos de gestión vs. técnicos):** CMMI se enfoca en la madurez organizacional y XP en las prácticas técnicas del código; por ejemplo, una empresa certificada en CMMI puede adoptar XP en sus equipos sin cambiar todo el marco. **Métodos ágiles coinciden con la esencia del mejoramiento de procesos bajo un enfoque de equipo:** ambos buscan mejorar continuamente, solo que desde el equipo y la iteración; por ejemplo, en un equipo de desarrollo, la retrospectiva cumple un rol similar a la medición de procesos. **Scrum y CMM/CMMI son compatibles:** Scrum aporta estructura de gestión dentro de un marco de madurez. **El punto de equilibrio entre ambos enfoques permite maximizar beneficios:** el balance se busca evaluando el contexto, experimentando y ajustando; por ejemplo, en una organización madura, combinar certificaciones de proceso con prácticas ágiles.
- **Reflexión docente:** El equilibrio es contextual; no hay fórmula universal.
- **Pregunta desafío:** ¿cómo encontrar el equilibrio adecuado?
- **Respuestas posibles:**
 1. Evaluar el contexto: madurez del equipo, complejidad del proyecto, regulaciones.
 2. Experimentar con prácticas ágiles en un entorno controlado.
 3. Medir resultados y ajustar gradualmente.
- **Advertencia:** no se puede copiar un enfoque de otra organización sin adaptarlo al contexto propio.

### Slide 27. Interrogantes

**Texto visible**

- `Interrogantes`
- `¿Resuelven los métodos ágiles todos los problemas?`
- `¿Son aplicables a todo tipo de desarrollo?`
- `¿Cuánta agilidad? ¿Cuánto proceso?`
- `Desafío: encontrar un punto de equilibrio, un balance adecuado`
- `Desarrollos potenciales`
- `Modelos ágiles balanceados para migración a la práctica industrial`
- `Mecanismos y herramientas para la integración de procesos`

**Elementos visuales**

- Título y lista de interrogantes sobre métodos ágiles.
- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** **Interrogantes:** la diapositiva invita a cuestionar la validez universal de los métodos ágiles. **¿Resuelven los métodos ágiles todos los problemas?:** la respuesta es no; por ejemplo, en un sistema de aviación, la agilidad está limitada por regulaciones estrictas. **¿Son aplicables a todo tipo de desarrollo?:** no todos los dominios toleran la adaptación constante; por ejemplo, un sistema de control de tránsito aéreo exige documentación y certificaciones que el ágil puro no contempla. **¿Cuánta agilidad? ¿Cuánto proceso?:** la pregunta central es dosificar ambos; por ejemplo, en un sistema bancario, mantener agilidad en el desarrollo y proceso en la gestión de riesgos. **Desafío: encontrar un punto de equilibrio, un balance adecuado:** la meta profesional es calibrar el enfoque según el contexto. **Desarrollos potenciales:** se enumeran líneas de trabajo futuras. **Modelos ágiles balanceados para migración a la práctica industrial:** adaptar la agilidad a entornos corporativos. **Mecanismos y herramientas para la integración de procesos:** construir puentes entre ambos mundos. No hay una respuesta única; depende del contexto de cada proyecto.
- **Reflexión docente:** La profesionalidad está en elegir el enfoque adecuado, no en defender uno por defecto.
- **Pregunta desafío:** ¿cuándo NO usar métodos ágiles?
- **Respuestas posibles:**
 1. Cuando los requisitos son estables y las regulaciones exigen documentación extensa.
 2. Cuando el equipo no tiene experiencia o compromiso con la agilidad.
 3. Cuando el proyecto requiere certificaciones o auditorías específicas.
- **Advertencia:** no hay respuesta única; depende del contexto.

### Slide 28. Metodologías Ágiles (Lista)

**Texto visible**

- `Metodologías Ágiles`
- `Adaptive Software Development (ASD)`
- `Programación Extrema (XP)`
- `SCRUM`

**Elementos visuales**

- Lista de tres metodologías ágiles principales.
- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** **Metodologías Ágiles:** la diapositiva presenta las tres metodologías ágiles más difundidas. **Adaptive Software Development (ASD):** es más una filosofía que un proceso detallado, centrada en equilibrar creatividad y estructura; por ejemplo, en un laboratorio de innovación, guía la cultura del equipo. **Programación Extrema (XP):** se enfoca en las prácticas técnicas del código, como la programación en parejas y el testing continuo; por ejemplo, en un equipo de desarrollo web, permite entregar funcionalidad de calidad rápidamente. **SCRUM:** se centra en la gestión del trabajo en equipo, con sprints, roles y actividades definidos; por ejemplo, en un equipo de desarrollo empresarial, planificar y ejecutar en ciclos de dos semanas. Cada una aporta algo distinto: ASD aporta la filosofía, XP las prácticas de código y Scrum la gestión. Se pueden combinar según la etapa del proyecto; por ejemplo, en una startup, usar Scrum para organizar el trabajo, XP para escribir código y ASD para mantener la mentalidad innovadora, aunque no deben mezclarse sin entender cada metodología.
- **Reflexión docente:** Cada metodología aporta algo distinto; se pueden combinar.
- **Pregunta desafío:** ¿qué diferencia hay entre las tres?
- **Respuestas posibles:**
 1. ASD es más filosofía que proceso detallado.
 2. XP se centra en prácticas técnicas de desarrollo.
 3. Scrum se centra en gestión de trabajo en equipo.
- **Advertencia:** no se deben mezclar sin entender cada metodología.

### Slide 29. ASD

**Texto visible**

- `Adaptive Software Development (ASD)`
- `Desarrollado por J. Highsmith en el año 2000.`
- `La idea fundamental del ASD es: "Balancearse en el borde del Caos"`
- `Dicho de otra manera, buscar un equilibrio entre crear un ambiente que favorezca la creatividad e innovación, y administrar lo que se está haciendo.`

**Elementos visuales**

- Título, autor, año y filosofía del ASD.
- No contiene imágenes ni notas del orador.

<p class="reference">Highsmith, J. Adaptive Software Development: A Collaborative Approach to Managing Complex Systems. Addison-Wesley, 2000.</p>

**Explicación docente**

- **Desarrollo:** **Adaptive Software Development (ASD):** la diapositiva presenta la filosofía de esta metodología ágil. **Desarrollado por J. Highsmith en el año 2000:** la atribución sitúa el origen del enfoque en la obra de James Highsmith. **La idea fundamental del ASD es: «Balancearse en el borde del Caos»:** la metáfora propone vivir en el límite donde hay suficiente estructura para no perderse y suficiente libertad para innovar; por ejemplo, en un equipo de innovación, permitir experimentar sin perder el foco en el producto. **Dicho de otra manera, buscar un equilibrio entre crear un ambiente que favorezca la creatividad e innovación, y administrar lo que se está haciendo:** la metodología reconoce que el desarrollo de software es complejo e impredecible y que conviene aceptar la incertidumbre; por ejemplo, en un sistema de comercio electrónico, dar libertad al equipo para proponer soluciones nuevas en la interfaz mientras se mantienen reglas de negocio claras. El caos controlado puede ser productivo cuando hay objetivos claros; por ejemplo, en logística, fomentar ideas para optimizar rutas dentro de restricciones operativas definidas.
- **Reflexión docente:** El caos controlado puede ser productivo cuando hay objetivos claros.
- **Pregunta desafío:** ¿qué significa "borde del caos" en la práctica?
- **Respuestas posibles:**
 1. Tener suficiente estructura para no perder el rumbo.
 2. Tener suficiente libertad para innovar.
 3. Encontrar el punto donde la creatividad se convierte en productividad.
- **Advertencia:** ASD es más una filosofía que un conjunto de prácticas definidas.

### Slide 30. ASD (Diagrama)

**Texto visible**

- `Proceso del ASD`

**Elementos visuales**

- Diagrama de proceso ASD (imagen extraída del PPTX: `asd-proceso.png`).
- No contiene notas del orador.

**Explicación docente**

- **Desarrollo:** **Proceso del ASD:** la diapositiva es esencialmente visual y presenta el ciclo de vida de la metodología. El diagrama muestra el ciclo de tres fases del ASD: Especulación, Colaboración y Aprendizaje, representadas como una secuencia circular que se repite. En la Especulación, el equipo define hipótesis sobre qué construir y qué se espera lograr; por ejemplo, en un proyecto de logística, conjeturar qué módulos de seguimiento serán más valiosos. En la Colaboración, desarrolladores, usuarios y stakeholders trabajan juntos de forma intensa y simultánea; por ejemplo, en un sistema de salud, médicos y programadores construyendo en conjunto. En el Aprendizaje, el equipo reflexiona sobre lo entregado y corrige el rumbo; por ejemplo, en comercio electrónico, analizar los resultados de una iteración para ajustar las prioridades. El ciclo es continuo: cada vuelta convierte el aprendizaje en nueva especulación. El diagrama comunica que ASD es más una filosofía que un proceso detallado, y que sus prácticas deben complementarse con otras metodologías.
- **Reflexión docente:** ASD es más una filosofía que un proceso detallado; sus prácticas deben complementarse con otras metodologías.
- **Pregunta desafío:** ¿cómo se aplicaría ASD en un proyecto real?
- **Respuestas posibles:**
 1. Specular sobre qué construir, colaborar en equipo, aprender de cada iteración.
 2. Mantener flexibilidad para cambiar de dirección según la evidencia.
 3. Complementar con prácticas técnicas de XP o gestión de Scrum.
- **Advertencia:** ASD no especifica prácticas concretas; necesita complementación.

### Slide 31. Uso actual del ASD

**Texto visible**

- `Uso actual del ASD`
- `Casi no es utilizado porque no se especifican en detalle las pautas (prácticas de desarrollo y gestión) que deben seguirse para su uso.`
- `ASD puede ser utilizado, pero debe complementarse con otra metodología mejor definida.`
- `Sin embargo, ASD provee conceptos sobre la filosofía misma de las MAs, con ideas importantes sobre cómo enfocar el desarrollo.`

**Elementos visuales**

- Título y texto sobre el uso actual del ASD.
- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** **Uso actual del ASD:** la diapositiva analiza por qué esta metodología tiene poca adopción. **Casi no es utilizado porque no se especifican en detalle las pautas (prácticas de desarrollo y gestión) que deben seguirse para su uso:** al no detallar cómo hacer las cosas, cada equipo no sabe exactamente qué pasos seguir; por ejemplo, en una empresa de desarrollo, preferir un marco con actividades definidas. **ASD puede ser utilizado, pero debe complementarse con otra metodología mejor definida:** la filosofía gana cuerpo cuando se combina; por ejemplo, usar la mentalidad ASD para guiar la cultura mientras Scrum organiza el trabajo y XP define las prácticas de código. **Sin embargo, ASD provee conceptos sobre la filosofía misma de las MAs, con ideas importantes sobre cómo enfocar el desarrollo:** aunque no se use solo, aporta el espíritu de adaptación continua y la aceptación de la incertidumbre; por ejemplo, en una empresa innovadora, sus conceptos orientan cómo enfrentar proyectos cambiantes. ASD es un complemento valioso, no un reemplazo de otras metodologías.
- **Reflexión docente:** ASD aporta ideas valiosas, pero no es suficiente solo.
- **Pregunta desafío:** ¿qué aporta ASD que otras metodologías no tienen?
- **Respuestas posibles:**
 1. La filosofía de equilibrar creatividad y estructura.
 2. El enfoque en adaptación continua.
 3. La aceptación de la incertidumbre como parte del desarrollo.
- **Advertencia:** ASD es un complemento, no un reemplazo de otras metodologías.

### Slide 32. XP (Introducción)

**Texto visible**

- `Programación Extrema (XP)`
- `Desarrollado por K. Beck en 1999.`
- `Probablemente es la metodología ágil más conocida y utilizada en la actualidad.`
- `XP es un conjunto de prácticas ya conocidas, pero combinadas de manera innovadora para lograr una nueva metodología.`
- `Se la conoce como "Extrema" por el hecho de llevar cada una de sus prácticas al extremo de su recomendación.`

**Elementos visuales**

- Título, autor, año y descripción de XP.
- No contiene imágenes ni notas del orador.

<p class="reference">Beck, K. Extreme Programming Explained: Embrace Change. Addison-Wesley, 1999.</p>

**Explicación docente**

- **Desarrollo:** **Programación Extrema (XP):** la diapositiva introduce la metodología ágil más difundida. **Desarrollado por K. Beck en 1999:** se atribuye el origen a Kent Beck. **Probablemente es la metodología ágil más conocida y utilizada en la actualidad:** su popularidad se explica por la claridad de sus prácticas; por ejemplo, en un equipo de desarrollo web, XP permite entregar funcionalidad de calidad rápidamente. **XP es un conjunto de prácticas ya conocidas, pero combinadas de manera innovadora para lograr una nueva metodología:** no inventa técnicas nuevas, sino que reúne testing, revisión y diseño simple en un sistema coherente; por ejemplo, en un sistema bancario, combinar pruebas continuas con integración frecuente para reducir errores. **Se la conoce como «Extrema» por el hecho de llevar cada una de sus prácticas al extremo de su recomendación:** si las revisiones son buenas, XP las hace permanentes; si las pruebas son útiles, las hace continuas; por ejemplo, en un sistema de control de calidad, llevar la automatización al máximo. El nombre refleja la intensidad con la que se aplican las buenas prácticas.
- **Reflexión docente:** XP es pragmático: combina prácticas conocidas de forma efectiva.
- **Pregunta desafío:** ¿por qué se llama "Extrema"?
- **Respuestas posibles:**
 1. Porque lleva cada práctica al extremo de su recomendación.
 2. Porque combina múltiples prácticas de forma intensiva.
 3. Porque busca la máxima calidad posible en cada aspecto.
- **Advertencia:** XP requiere disciplina y compromiso del equipo.

### Slide 33. XP (Diagrama)

**Texto visible**

- `Programación Extrema (XP)`

**Elementos visuales**

- Diagrama de proceso XP (imagen extraída del PPTX: `xp-proceso.png`).
- No contiene notas del orador.

**Explicación docente**

- **Desarrollo:** **Programación Extrema (XP):** la diapositiva es esencialmente visual y presenta las prácticas fundamentales de la metodología y sus relaciones. El diagrama muestra un conjunto de prácticas dispuestas alrededor de un núcleo central, conectadas entre sí para comunicar que en XP ninguna práctica funciona aislada. Entre las prácticas que se observan están la programación en parejas, el testing continuo, la integración continua, la refactorización, el diseño simple, la propiedad colectiva del código, el estándar de código y el juego de planificación. Por ejemplo, en un equipo de desarrollo móvil, las parejas revisan el código en tiempo real, las pruebas automatizadas corren con cada cambio y la integración continua detecta conflictos temprano. El diagrama comunica que todas las prácticas se refuerzan mutuamente: la integración continua exige testing continuo, y la refactorización se apoya en el diseño simple. Es una simplificación, ya que XP tiene muchas más prácticas, pero refleja el centro de su filosofía: calidad de código y colaboración del equipo.
- **Reflexión docente:** XP se centra en la calidad del código y la colaboración del equipo.
- **Pregunta desafío:** ¿cuáles son las prácticas más importantes de XP?
- **Respuestas posibles:**
 1. Programación en parejas y testing continuo.
 2. Integración continua y refactorización.
 3. Diseño simple y propiedad colectiva del código.
- **Advertencia:** el diagrama es una simplificación; XP tiene muchas más prácticas.

### Slide 34. Prácticas de XP (1)

**Texto visible**

- `Prácticas de Programación Extrema`

**Elementos visuales**

- Lista de prácticas de XP (primera parte).
- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** **Prácticas de Programación Extrema:** la diapositiva presenta la primera parte de las prácticas concretas que definen XP. **Programación en parejas:** dos desarrolladores trabajan juntos en la misma tarea, uno escribe y el otro revisa, detectando errores al instante; por ejemplo, en un sistema de facturación, la lógica de impuestos se revisa en tiempo real. **Diseño simple:** se implementa solo lo necesario para hoy, evitando sobreingeniería; por ejemplo, en un sistema de turnos, empezar con la funcionalidad mínima y agregar después. **Refactorización:** se mejora continuamente el código sin cambiar su comportamiento, manteniéndolo limpio y mantenible; por ejemplo, en comercio electrónico, simplificar un carrito que creció con parches. **Testing continuo:** las pruebas automatizadas corren con cada cambio y detectan errores temprano; por ejemplo, en un sistema bancario, validar las reglas de negocio cada vez que se modifica el código. Estas prácticas son aplicables incluso fuera de XP y requieren compromiso y disciplina del equipo para sostenerse en el tiempo.
- **Reflexión docente:** Las prácticas de XP son aplicables incluso fuera de XP.
- **Pregunta desafío:** ¿qué práctica les parece más beneficiosa?
- **Respuestas posibles:**
 1. Testing continuo, porque detecta errores temprano.
 2. Programación en parejas, porque mejora la calidad del código.
 3. Refactorización, porque mantiene el código limpio y mantenible.
- **Advertencia:** las prácticas requieren compromiso y disciplina.

### Slide 35. Prácticas de XP (2)

**Texto visible**

- `Prácticas de Programación Extrema`

**Elementos visuales**

- Lista de prácticas de XP (segunda parte).
- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** **Prácticas de Programación Extrema:** la diapositiva presenta la segunda parte de las prácticas de XP. **Integración continua:** los cambios de todos los desarrolladores se combinan varias veces al día y el sistema se prueba de inmediato, detectando conflictos temprano; por ejemplo, en un equipo distribuido de logística, cada cambio de un módulo se integra y valida al instante. **Propiedad colectiva del código:** cualquier desarrollador puede modificar cualquier parte del sistema, lo que reduce las dependencias de personas clave; por ejemplo, en un hospital, si el encargado del módulo de citas se ausenta, otro puede continuar. **Código estándar:** todos escriben siguiendo las mismas convenciones, facilitando la lectura compartida; por ejemplo, en comercio electrónico, un formato uniforme hace comprensible todo el repositorio. **Sistema metafórico:** el equipo acuerda una metáfora común para nombrar y estructurar el sistema, alineando el lenguaje; por ejemplo, en un sistema de reservas, describir el flujo como un mostrador de atención. La propiedad colectiva exige confianza y responsabilidad compartida.
- **Reflexión docente:** La propiedad colectiva reduce puntos ciegos y dependencias individuales.
- **Pregunta desafío:** ¿qué pasa si nadie quiere compartir la propiedad del código?
- **Respuestas posibles:**
 1. Se crea dependencia de personas clave.
 2. Se dificulta la mantención y evolución del sistema.
 3. Se pierden oportunidades de mejora por conocimiento disperso.
- **Advertencia:** la propiedad colectiva requiere confianza y responsabilidad compartida.

### Slide 36. Uso actual de XP

**Texto visible**

- `Uso actual de XP`
- `El 38% del mercado "ágil" utiliza XP. Esto es gracias a que tiene bien definidas sus prácticas a lo largo de todo el proceso de desarrollo.`
- `En la Agile Alliance se puede apreciar en el grupo de usuarios de MAs que existe una amplia mayoría de usuarios de XP.`

**Elementos visuales**

- Título y estadísticas de uso de XP.
- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** **Uso actual de XP:** la diapositiva presenta datos que explican la popularidad de la metodología. **El 38% del mercado «ágil» utiliza XP. Esto es gracias a que tiene bien definidas sus prácticas a lo largo de todo el proceso de desarrollo:** el dato cuantifica la adopción y la vincula con la claridad de sus prácticas; por ejemplo, en una consultora de desarrollo, XP es el estándar por la previsibilidad de sus resultados. **En la Agile Alliance se puede apreciar en el grupo de usuarios de MAs que existe una amplia mayoría de usuarios de XP:** la comunidad profesional de la Agile Alliance confirma el liderazgo de XP entre los equipos ágiles; por ejemplo, en conferencias y foros, la mayoría de los equipos que reportan sus prácticas mencionan el testing continuo y la programación en parejas. La popularidad se debe al pragmatismo y a resultados medibles en calidad y productividad. Sin embargo, la popularidad no garantiza que sea la mejor opción para todos los contextos; por ejemplo, en un proyecto pequeño con requisitos muy estables, tal vez baste un enfoque más liviano.
- **Reflexión docente:** La popularidad de XP se debe a su pragmatismo y resultados medibles.
- **Pregunta desafío:** ¿por qué XP es más popular que otras metodologías ágiles?
- **Respuestas posibles:**
 1. Porque tiene prácticas concretas y bien definidas.
 2. Porque produce resultados medibles en calidad y productividad.
 3. Porque es fácil de aprender y aplicar en equipos pequeños.
- **Advertencia:** la popularidad no garantiza que sea la mejor opción para todos los contextos.

### Slide 37. SCRUM (Introducción)

**Texto visible**

- `SCRUM`
- `La metodología SCRUM es la más utilizada por los equipos que apuestan por las metodologías ágiles`
- `Scrum es una manera de trabajar en equipo donde el resultado se produce de forma incremental, este resultado es un entregable`
- `Se establecen periodos cortos de trabajo en los que se sigue un mismo patrón`

**Elementos visuales**

- Título y descripción de Scrum.
- No contiene imágenes ni notas del orador.

<p class="reference">Schwaber, K., Sutherland, J. The Scrum Guide. Scrum.org, 2020.</p>

**Explicación docente**

- **Desarrollo:** **SCRUM:** la diapositiva introduce el marco de gestión ágil más usado. **La metodología SCRUM es la más utilizada por los equipos que apuestan por las metodologías ágiles:** su éxito se debe a que es simple de entender y a que produce resultados visibles; por ejemplo, en un equipo de desarrollo empresarial, planificar y ejecutar en ciclos de dos semanas. **Scrum es una manera de trabajar en equipo donde el resultado se produce de forma incremental, este resultado es un entregable:** cada ciclo produce una parte funcional del producto lista para usar; por ejemplo, en comercio electrónico, al terminar un sprint se libera la nueva pantalla de pagos. **Se establecen periodos cortos de trabajo en los que se sigue un mismo patrón:** los sprints repiten la misma secuencia de planificación, ejecución, revisión y mejora, creando ritmo y previsibilidad; por ejemplo, en logística, cada dos semanas el equipo entrega una mejora del seguimiento de envíos. Scrum no define cómo programar, sino cómo organizar el trabajo, y exige el compromiso de todos los roles.
- **Reflexión docente:** Scrum no define cómo programar, sino cómo organizar el trabajo.
- **Pregunta desafío:** ¿por qué Scrum es tan popular?
- **Respuestas posibles:**
 1. Porque es simple de entender y aplicar.
 2. Porque produce resultados visibles en cada sprint.
 3. Porque crea ritmo y previsibilidad en el equipo.
- **Advertencia:** Scrum requiere compromiso de todos los roles para funcionar.

### Slide 38. SCRUM (Actividades)

**Texto visible**

- `SCRUM - ACTIVIDADES`
- `Sprint`
- `Sprint planing`
- `Daily`
- `Sprint Review`
- `Sprint Retrospective`

**Elementos visuales**

- Lista de cinco actividades de Scrum.
- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** **SCRUM – Actividades:** la diapositiva presenta las cinco actividades que estructuran el marco. **Sprint:** es la iteración de trabajo de duración fija, de dos a cuatro semanas, al final de la cual hay un entregable; por ejemplo, en un sistema de facturación, cada sprint agrega un grupo de funcionalidades. **Sprint planning:** al inicio del ciclo se define qué se construirá y cómo; por ejemplo, en comercio electrónico, seleccionar las historias del catálogo para el próximo sprint. **Daily:** reunión breve diaria donde el equipo se sincroniza y reporta avances y bloqueos; por ejemplo, en logística, quince minutos para coordinar el trabajo del día. **Sprint Review:** al final del ciclo se presenta el resultado al cliente y se valida con él; por ejemplo, en un hospital, mostrar a los médicos el módulo de citas terminado. **Sprint Retrospective:** el equipo reflexiona sobre el proceso y define mejoras; por ejemplo, en un equipo de desarrollo, decidir automatizar una tarea que costó horas. Todas crean ritmo y visibilidad; omitir alguna debilita el marco.
- **Reflexión docente:** Las actividades de Scrum crean ritmo y visibilidad del progreso.
- **Pregunta desafío:** ¿qué actividad es más importante y por qué?
- **Respuestas posibles:**
 1. Sprint Planning, porque define qué se va a construir.
 2. Daily, porque mantiene al equipo sincronizado.
 3. Sprint Review, porque valida con el cliente.
 4. Retrospective, porque mejora el proceso continuamente.
- **Advertencia:** todas las actividades son importantes; omitir una debilita el marco.

### Slide 39. SCRUM (Herramientas)

**Texto visible**

- `SCRUM - HERRAMIENTAS`
- `Product Backlog`
- `Sprint Backlog`
- `Burn Down`

**Elementos visuales**

- Lista de tres herramientas de Scrum.
- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** **SCRUM – Herramientas:** la diapositiva presenta las tres herramientas que hacen visible el trabajo. **Product Backlog:** es la lista priorizada de todo lo que el producto podría incluir, ordenada por valor para el negocio; por ejemplo, en comercio electrónico, las funcionalidades del sitio ordenadas por impacto en ventas. **Sprint Backlog:** es la selección de tareas del Product Backlog que el equipo se compromete a completar en el sprint actual; por ejemplo, en logística, las tareas concretas para incorporar el seguimiento de envíos en dos semanas. **Burn Down:** es el gráfico que muestra el avance diario del sprint, comparando trabajo pendiente con tiempo restante; por ejemplo, en un sistema de facturación, ver cómo decrece la curva de tareas pendientes cada día. Estas herramientas hacen visibles el progreso y las prioridades. Si el Product Backlog no está priorizado, el equipo trabaja en lo que parece urgente en lugar de lo más valioso; por ejemplo, en un hospital, se pierde tiempo en funciones de bajo impacto mientras lo crítico espera. Sin disciplina, las herramientas no funcionan.
- **Reflexión docente:** Las herramientas de Scrum hacen visible el progreso y las prioridades.
- **Pregunta desafío:** ¿qué pasa si el Product Backlog no está priorizado?
- **Respuestas posibles:**
 1. El equipo trabaja en lo que parece urgente, no en lo más valioso.
 2. Se pierde tiempo en funcionalidades de bajo impacto.
 3. El cliente pierde confianza en el equipo.
- **Advertencia:** las herramientas sin disciplina no funcionan.

### Slide 40. SCRUM (Roles)

**Texto visible**

- `SCRUM - ROLES`
- `Product Owner`
- `Scrum Master`
- `Team (equipo de desarrollo)`

**Elementos visuales**

- Lista de tres roles de Scrum.
- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** **SCRUM – Roles:** la diapositiva presenta los tres roles que definen las responsabilidades del marco. **Product Owner:** es quien representa al negocio, prioriza el Product Backlog y define qué se construye; por ejemplo, en un sistema de facturación, decide si el próximo sprint incluye reportes o la integración con el banco. **Scrum Master:** es quien facilita las actividades, protege al equipo y remueve obstáculos; por ejemplo, en logística, gestiona con otras áreas el acceso a datos que bloquea al equipo. **Team (equipo de desarrollo):** es el grupo autoorganizado que construye el producto y decide cómo hacerlo; por ejemplo, en comercio electrónico, los desarrolladores y diseñadores acuerdan la mejor forma de implementar el carrito. Los roles crean claridad y responsabilidad y evitan conflictos de autoridad. Si el Product Owner no está disponible, el equipo pierde dirección y puede producir algo que nadie necesita; por ejemplo, en un hospital, sin quien priorice, se construyen funciones que los médicos no usan. Los tres roles son esenciales y no se pueden omitir.
- **Reflexión docente:** Los roles de Scrum crean claridad y responsabilidad.
- **Pregunta desafío:** ¿qué pasa si el Product Owner no está disponible?
- **Respuestas posibles:**
 1. El equipo pierde dirección y prioridades.
 2. Se toman decisiones sin contexto del negocio.
 3. El sprint puede producir algo que nadie necesita.
- **Advertencia:** todos los roles son esenciales; no se pueden omitir.

### Slide 41. SCRUM (Diagrama)

**Texto visible**

- (Sin título visible en el slide)

**Elementos visuales**

- Diagrama de proceso Scrum (imagen extraída del PPTX: `comparacion-procesos.png`).
- No contiene notas del orador.

**Explicación docente**

- **Desarrollo:** La diapositiva es esencialmente visual y presenta el ciclo completo de Scrum integrando roles, actividades y herramientas en un único diagrama. El diagrama muestra cómo fluye el trabajo: el Product Owner mantiene priorizado el Product Backlog; en la planificación del sprint, el equipo selecciona del Product Backlog las tareas que pasan al Sprint Backlog; durante el sprint se realizan las reuniones diarias que mantienen al equipo sincronizado; al final, en la revisión del sprint se muestra el entregable al cliente; y en la retrospectiva se mejora el proceso. El gráfico Burn Down acompaña el avance diario del sprint y el Scrum Master facilita todas las actividades y remueve los obstáculos. Por ejemplo, en un sistema de salud, el Product Owner prioriza los módulos de citas, el equipo toma el trabajo en la planificación, el Daily mantiene el ritmo y el Burn Down muestra el avance hacia la meta. El diagrama es una simplificación, pero comunica que Scrum es un marco completo que integra sus tres pilares.
- **Reflexión docente:** Scrum es un marco completo para gestión ágil que integra roles, actividades y herramientas.
- **Pregunta desafío:** ¿cómo se integran los roles, actividades y herramientas en Scrum?
- **Respuestas posibles:**
 1. El Product Owner llena el Product Backlog.
 2. El Team selecciona trabajo del Sprint Backlog en el Planning.
 3. El Scrum Master facilita las actividades y remueve obstáculos.
 4. El Burn Down muestra el avance del Sprint.
- **Advertencia:** el diagrama es una simplificación; Scrum tiene más matices en la práctica.

### Slide 42. Uso actual de SCRUM

**Texto visible**

- `Uso actual de SCRUM`
- `Después de XP, Scrum es uno de los enfoques ágiles más utilizados, pero aún lejos de XP.`
- `A nivel de investigación, se están realizando esfuerzos para integrar XP y Scrum, argumentando que Scrum provee un marco de gestión del proyecto sobre las prácticas bien definidas de XP.`

**Elementos visuales**

- Título y texto sobre el uso actual de Scrum.
- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** **Uso actual de SCRUM:** la diapositiva analiza la adopción de Scrum y su relación con XP. **Después de XP, Scrum es uno de los enfoques ágiles más utilizados, pero aún lejos de XP:** los datos de adopción ubican a Scrum en segundo lugar, todavía por debajo de XP; por ejemplo, en una consultora de desarrollo, muchos equipos eligen Scrum para la gestión pero adoptan prácticas de XP para el código. **A nivel de investigación, se están realizando esfuerzos para integrar XP y Scrum, argumentando que Scrum provee un marco de gestión del proyecto sobre las prácticas bien definidas de XP:** la combinación busca unir lo mejor de ambos; por ejemplo, en una empresa de software, usar Scrum para los sprints y XP para la programación en parejas y el testing continuo. Juntos cubren más aspectos del desarrollo: Scrum aporta gestión y XP aporta prácticas técnicas. La integración es un área activa de investigación y práctica, y produce mejores resultados que cada uno por separado, aunque combinar metodologías requiere entender cada una en profundidad.
- **Reflexión docente:** La integración de Scrum y XP es un área activa de investigación y práctica.
- **Pregunta desafío:** ¿por qué se buscan combinar Scrum y XP?
- **Respuestas posibles:**
 1. Scrum aporta gestión; XP aporta prácticas técnicas.
 2. Juntos cubren más aspectos del desarrollo de software.
 3. La combinación produce resultados mejores que cada uno por separado.
- **Advertencia:** combinar metodologías requiere entender cada una por separado.

### Slide 43. Ventajas de las MAs

**Texto visible**

- `Ventajas de las MAs`
- `Iteraciones en ciclos cortos que permiten correcciones y verificaciones más rápidamente.`
- `Límites de tiempo para cada ciclo de dos a ocho semanas.`
- `Adaptable al surgimiento de nuevos riesgos.`
- `Orientación hacia las personas.`
- `Estilo de trabajo en equipo.`

**Elementos visuales**

- Título y lista de cinco ventajas de las MAs.
- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** **Ventajas de las MAs:** la diapositiva resume las fortalezas de los métodos ágiles. **Iteraciones en ciclos cortos que permiten correcciones y verificaciones más rápidamente:** al entregar seguido, los errores se detectan y corrigen temprano; por ejemplo, en comercio electrónico, cada ciclo valida una funcionalidad con usuarios reales. **Límites de tiempo para cada ciclo de dos a ocho semanas:** la duración fija crea ritmo y presión sana; por ejemplo, en un sistema de turnos, cada quincena se libera una mejora concreta. **Adaptable al surgimiento de nuevos riesgos:** el marco absorbe imprevistos sin descarrilar el proyecto; por ejemplo, en logística, si cambia una regulación de transporte, el equipo reordena las prioridades en el siguiente ciclo. **Orientación hacia las personas:** el software lo hacen personas y el valor humano se antepone a los procesos; por ejemplo, en un hospital, la comunicación entre desarrolladores y médicos es la clave del éxito. **Estilo de trabajo en equipo:** la colaboración es el motor; por ejemplo, en un equipo de desarrollo, el trabajo conjunto y autoorganizado mejora la calidad. Estas ventajas exigen disciplina y compromiso para hacerse realidad.
- **Reflexión docente:** Las ventajas son reales, pero requieren disciplina y compromiso.
- **Pregunta desafío:** ¿cuál es la ventaja más importante?
- **Respuestas posibles:**
 1. Iteraciones cortas, porque permiten aprender rápido.
 2. Adaptabilidad, porque el mercado cambia constantemente.
 3. Orientación a personas, porque el software lo hacen las personas.
- **Advertencia:** las ventajas no se obtienen automáticamente; requieren práctica.

### Slide 44. Desventajas de las MAs

**Texto visible**

- `Desventajas de las MAs`
- `Su filosofía de poder adaptarse al cambio en vez de seguir estrictamente un plan, puede llevar al caos en el proceso de desarrollo.`
- `Difícil de mantener el interés de los clientes que participan en el proceso de desarrollo.`
- `Definir las prioridades de los cambios pueden ser difíciles de establecer cuando los cambios son muchos y se superponen.`
- `No es adecuado para proyectos con requisitos muy estables o con restricciones de documentación.`

**Elementos visuales**

- Título y lista de cuatro desventajas de las MAs.
- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** **Desventajas de las MAs:** la diapositiva presenta el lado oscuro de los métodos ágiles. **Su filosofía de poder adaptarse al cambio en vez de seguir estrictamente un plan, puede llevar al caos en el proceso de desarrollo:** sin un marco firme, la flexibilidad se vuelve desorden; por ejemplo, en una startup, cambiar de rumbo en cada reunión impide terminar nada. **Difícil de mantener el interés de los clientes que participan en el proceso de desarrollo:** la colaboración continua exige tiempo que el cliente muchas veces no puede dar; por ejemplo, en un proyecto gubernamental, los funcionarios tienen agendas saturadas. **Definir las prioridades de los cambios pueden ser difíciles de establecer cuando los cambios son muchos y se superponen:** cuando todo es urgente, nada lo es; por ejemplo, en comercio electrónico, peticiones simultáneas de descuentos, envíos y pagos compiten por el mismo sprint. **No es adecuado para proyectos con requisitos muy estables o con restricciones de documentación:** en dominios regulados el proceso ágil puro es ineficiente; por ejemplo, en aviación, las certificaciones exigen documentación extensa. Conocer estas limitaciones indica cuándo usar los métodos ágiles con precaución.
- **Reflexión docente:** Los MAs no son para todos los contextos; conocer sus limitaciones es clave.
- **Pregunta desafío:** ¿cómo mitigar estas desventajas?
- **Respuestas posibles:**
 1. Establecer un marco claro de trabajo (como Scrum) para evitar el caos.
 2. Comprometer al cliente con reuniones regulares y revisiones.
 3. Usar herramientas de priorización como el Product Backlog.
 4. Combinar con prácticas documentales cuando sea necesario.
- **Advertencia:** las desventajas no invalidan los MAs; indican cuándo usarlos con precaución.

### Slide 45. Métodos Ágiles (Síntesis)

**Texto visible**

- `Métodos Ágiles`

**Elementos visuales**

- Slide de síntesis o cierre del bloque de métodos ágiles.
- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** **Métodos Ágiles:** la diapositiva cierra el bloque dedicado a los métodos ágiles y sintetiza lo aprendido. Los métodos ágiles son una respuesta válida pero no universal a las limitaciones de los modelos tradicionales: ofrecen iteraciones cortas, adaptabilidad y trabajo en equipo, pero no resuelven todos los problemas ni son aplicables a todo tipo de desarrollo. La profesionalidad está en elegir el enfoque adecuado para cada situación, analizando el contexto: la claridad de los requisitos, la estabilidad del equipo y la tecnología, los plazos, los costos y las regulaciones. Por ejemplo, en una empresa madura, se combina lo tradicional para la arquitectura estable y lo ágil para las funcionalidades nuevas; en un sistema bancario, se mantiene proceso para el cumplimiento normativo y agilidad para la interfaz de usuario. No hay una respuesta única: se decide experimentando con ambos enfoques, midiendo resultados y aprendiendo de la experiencia de proyectos anteriores.
- **Reflexión docente:** La profesionalidad está en elegir el enfoque adecuado para cada situación.
- **Pregunta desafío:** ¿cómo decidir qué enfoque usar?
- **Respuestas posibles:**
 1. Analizar el contexto: requisitos, equipo, regulaciones, plazos.
 2. Experimentar con ambos enfoques y medir resultados.
 3. Consultar con expertos y aprender de la experiencia.
- **Advertencia:** no hay respuesta única; depende del proyecto y la organización.

### Slide 46. Conclusiones

**Texto visible**

- `Conclusiones`
- `Las ventajas de las MAs proveen un marco de trabajo aplicable a entornos de desarrollo de software que no tienen definidos sus procesos (o lo tienen vagamente), en el área de desarrollo mismo como en el área de aseguramiento de la calidad del producto.`
- `Como las MAs se ajustan a sistemas de pequeño y mediano tamaño, pueden ser una buena alternativa para organizaciones que recién inician procesos de desarrollo de software.`

**Elementos visuales**

- Título y texto de conclusiones.
- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** **Conclusiones:** la diapositiva cierra la unidad resumiendo los aportes de los métodos ágiles. **Las ventajas de las MAs proveen un marco de trabajo aplicable a entornos de desarrollo de software que no tienen definidos sus procesos (o lo tienen vagamente), en el área de desarrollo mismo como en el área de aseguramiento de la calidad del producto:** los métodos ágiles sirven de punto de partida ordenado cuando no existe un proceso formal; por ejemplo, en una pequeña empresa de desarrollo que recién comienza, adoptar Scrum da estructura tanto a la construcción como a la verificación de calidad. **Como las MAs se ajustan a sistemas de pequeño y mediano tamaño, pueden ser una buena alternativa para organizaciones que recién inician procesos de desarrollo de software:** por su flexibilidad y rapidez, encajan en equipos chicos y productos medianos; por ejemplo, una startup puede beneficiarse de la agilidad para lanzar rápido. No hay respuestas absolutas: la profesionalidad está en adaptar el enfoque al contexto, por ejemplo, en un hospital, elegir ágil para el módulo de citas y tradicional para la integración con sistemas legados.
- **Reflexión docente:** La unidad muestra que no hay respuestas absolutas; la profesionalidad está en adaptar el enfoque al contexto.
- **Pregunta desafío:** ¿qué llevarían de esta unidad a su práctica profesional?
- **Respuestas posibles:**
 1. Conocer ambos enfoques para elegir el adecuado.
 2. Entender que la agilidad requiere disciplina.
 3. Valorar la colaboración y la adaptabilidad.
- **Advertencia:** las conclusiones son generales; cada proyecto requiere análisis específico.

### Slide 47. Cierre

**Texto visible**

- `PREGUNTAS`

**Elementos visuales**

- Slide de cierre simple.
- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** **PREGUNTAS:** la diapositiva cierra la clase y abre el espacio para el diálogo con los estudiantes. El docente aprovecha este momento para verificar qué conceptos se comprendieron y cuáles necesitan refuerzo, invitando a preguntar sobre los temas tratados: cuándo conviene usar un modelo de proceso u otro, cómo implementar Scrum o XP en la práctica o cómo equilibrar la agilidad con el proceso. Por ejemplo, en un curso donde los equipos desarrollan proyectos integradores, las preguntas ayudan a que cada grupo justifique qué enfoque aplicará a su sistema de logística, de facturación o de gestión de turnos. Las dudas de los estudiantes son oportunidades de aprendizaje, no interrupciones, y permiten al docente detectar las zonas débiles de la unidad antes del parcial. Se anima a plantear las preguntas con confianza, ya que esta apertura es el espacio natural para cerrar el círculo entre la teoría expuesta y la aplicación práctica que vendrá.
- **Reflexión docente:** Las preguntas revelan qué conceptos necesitan refuerzo.
- **Pregunta desafío:** ¿qué duda les queda después de esta clase?
- **Respuestas posibles:**
 1. ¿Cuándo usar un modelo u otro?
 2. ¿Cómo implementar Scrum o XP en la práctica?
 3. ¿Cómo equilibrar agilidad y proceso?
- **Advertencia:** las preguntas son oportunidades de aprendizaje; no las dejen pasar.

---

## Checklist de regeneración

- [ ] Archivo nombrado como `guia-slides-clase-2.md`
- [ ] Mantener exactamente 47 slides y el orden 1–47.
- [ ] Conservar títulos, listas, definiciones, porcentajes, referencias y citas del inventario.
- [ ] Distinguir visualmente títulos, texto de contenido, jerarquías y bloques de citas.
- [ ] Slides 15, 17, 30, 33, 41: usar imágenes del PPTX o assets (`modelo-espiral.png`, `rup-proceso.png`, `asd-proceso.png`, `xp-proceso.png`, `comparacion-procesos.png`).
- [ ] Slide 1: nombre del profesor "Prof. Lic. Guillermo Jacobo González Rodas Mst. PMP" (no "Prof. Ing. Julia Talavera").
- [ ] Slides 6, 16, 19, 20, 29, 32, 37: incluir referencias bibliográficas.
- [ ] Logo institucional: `assets/fpuna_logo_institucional.svg`.
- [ ] No publicar datos sensibles en HTML, CSS, JavaScript, Markdown versionado ni capturas públicas.
- [ ] No agregar notas del orador si la fuente no contiene notas por slide.
- [ ] Revisar en una exportación o render final que no se corte texto.

## Verificación de fuente

La guía se construyó leyendo el paquete OOXML del PPTX: `ppt/presentation.xml`, `ppt/_rels/presentation.xml.rels`, `ppt/slides/slide1.xml` a `ppt/slides/slide47.xml`, sus relaciones y `ppt/media/`. La revisión del paquete no encontró `ppt/notesSlides/`, por lo que no hay notas de orador adicionales que incorporar.
