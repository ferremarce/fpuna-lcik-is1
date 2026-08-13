# Guía de regeneración de la Clase 1

Guía docente para regenerar la presentación a partir de `sesiones-clase/clase-1/IS1-UNIDAD_I.pptx`. Conserva los **25 slides**, su orden y su numeración de origen. La futura presentación deberá usar esta guía como especificación de contenido, no como sustituto del diseño visual.

## Lectura rápida

- **Fuente:** `sesiones-clase/clase-1/IS1-UNIDAD_I.pptx`.
- **Total verificado:** 25 slides en `ppt/presentation.xml`, dentro de `p:sldIdLst`.
- **Notas del orador:** no hay archivos `ppt/notesSlides/`; el paquete solo contiene un notes master, sin notas asociadas a slides.
- **Contenido visual embebido:** solo el slide 19 contiene una imagen (`ppt/media/image5.png`), con una curva ascendente de `Costos` frente a `Eficiencia`.
- **Dato sensible:** el slide 5 contiene una contraseña del aula virtual. Se registra aquí la existencia del campo, pero no se reproduce su valor.

## Criterio de transcripción

Cada slide se describe en tres capas para facilitar la revisión:

1. **Texto visible:** transcripción del contenido textual del PPTX. Se conservan formulaciones, mayúsculas y erratas relevantes del original; no se agregan definiciones externas.
2. **Elementos visuales:** objetos gráficos, imágenes y composición identificable desde el paquete OOXML.
3. **Explicación docente:** orientación para presentar el slide y conectar sus elementos. Es una propuesta didáctica basada únicamente en el contenido del slide.

## Inventario slide por slide

### Slide 1. Presentación de la materia

**Texto visible**

- `Ingeniería de Software I`
- `PRESENTACIÓN DE LA MATERIA`
- `Prof. Lic. Guillermo Jacobo González Rodas Mst. PMP`

**Elementos visuales**

- Slide de apertura con un título principal en dos líneas, subtítulo y nombre del docente.
- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** **Ingeniería de Software I:** esta asignatura estudia cómo producir y sostener software, no solamente cómo programarlo; por ejemplo, en un sistema de turnos hospitalarios, primero hay que organizar decisiones, roles y controles antes de escribir código. **PRESENTACIÓN DE LA MATERIA:** este título abre el curso y sirve para ubicar la unidad y el contexto de trabajo que se desarrollará durante todo el semestre; por ejemplo, en un proyecto de facturación electrónica, la presentación define qué problemas de negocio se van a abordar. **Prof. Lic. Guillermo Jacobo González Rodas Mst. PMP:** el docente que dicta la materia presenta su trayectoria para dar contexto a la cursada; por ejemplo, en un sistema de biblioteca, conocer quién coordina ayuda a entender qué perspectivas y criterios orientarán el trabajo.
- **Reflexión docente:**
 - La profesión exige ampliar la mirada: una solución técnicamente interesante puede fallar si no responde al contexto de uso.
- **Pregunta desafío:** ¿qué diferencia esperan encontrar entre programar y ejercer Ingeniería de Software?
- **Respuestas posibles:**
 1. Programar implementa una solución; la Ingeniería de Software organiza todo su ciclo de vida.
 2. La Ingeniería de Software incorpora requisitos, calidad, coordinación, riesgos y mantenimiento.
 3. Una persona puede programar correctamente y aun así no resolver el problema completo del sistema.
- **Advertencia:** esta apertura contextualiza; todavía no define conceptos técnicos.

### Slide 2. Sobre el docente

**Texto visible**

- `Sobre el Docente`
- `Prof. Lic. Guillermo Jacobo González Rodas Mst. PMP`
- `Paraguayo, Profesional, egresado de la carrera de Licenciatura en Análisis de Sistemas Informáticos de la Facultad Politécnica de la Universidad Nacional de Asunción. Ha realizado un Máster en Ingeniería del Software por la Universidad Politécnica de Catalunya, Barcelona - España. Tiene la certificación de PMP (Project Management Professional) del PMI (Project Management Institute).`
- `Es Consultor de TICs, especializado en Gestión de Proyectos e Implementación de sistemas de información empresariales (ERP). Es docente universitario en el Departamento de Informática, en el Departamento de Gestión y Director de la Unidad de Gestión de Proyectos de Investigación de la Facultad Politécnica de la Universidad Nacional de Asunción.`
- `E-mail: ggonzalez@pol.una.py`

**Elementos visuales**

- Título y un cuadro de texto con la presentación profesional.
- Fotografía del docente.
- No contiene notas del orador.

**Explicación docente**

- **Desarrollo:** **Sobre el Docente:** el slide presenta la trayectoria profesional de quien dicta la materia, combinando Ingeniería de Software, gestión de proyectos y consultoría; por ejemplo, en una plataforma educativa, una persona puede relevar necesidades de docentes y estudiantes, y otra organizar la entrega con el equipo. **Paraguayo, egresado de la Licenciatura en Análisis de Sistemas Informáticos de la Facultad Politécnica:** la formación académica local aporta la base de análisis de sistemas; por ejemplo, en un sistema de comercio electrónico, saber modelar requisitos evita construir funciones que nadie usa. **Máster en Ingeniería del Software y certificación PMP del PMI:** estos estudios y la certificación de gestión de proyectos aportan herramientas para dirigir el trabajo; por ejemplo, en un proyecto de logística, coordinar alcance, plazos y riesgos evita que la entrega se retrase. **Consultor de TICs especializado en ERP y docente universitario:** la experiencia en implementación de sistemas empresariales y la docencia muestran perspectivas distintas sobre un mismo trabajo; por ejemplo, en un banco, implementar un sistema empresarial exige alinear procesos de negocio y software. **E-mail: ggonzalez@pol.una.py:** el contacto institucional permite consultar dudas del curso; por ejemplo, en cualquier materia, saber a quién escribir y por qué canal forma parte de la organización del trabajo.
- **Reflexión docente:**
 - La colaboración entre roles reduce puntos ciegos, aunque también exige acordar vocabulario y responsabilidades.
- **Pregunta desafío:** ¿qué decisiones tomaría un analista funcional que no tomaría un programador?
- **Respuestas posibles:**
 1. Aclarar necesidades y reglas del negocio con las personas involucradas.
 2. Analizar alternativas de alcance y priorizar requisitos antes de implementarlos.
 3. Un programador puede aportar viabilidad técnica, pero no debería asumir automáticamente la decisión del negocio.
- **Advertencia:** presento la trayectoria como contexto docente, no como contenido evaluable.

### Slide 3. Sobre la asignatura

**Texto visible**

- `Sobre La Asignatura`
- `Turno/Sección: Tarde-Q`
- `Horas cátedras semanales:`
- `Clases teóricas: 36`
- `Clases prácticas: 54`

**Elementos visuales**

- Título y cuadro de texto con turno, sección y distribución de horas.
- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** **Sobre La Asignatura:** el slide resume los datos organizativos de la cursada; por ejemplo, en un sistema de reservas, conocer el horario y la carga ayuda a planificar el trabajo. **Turno/Sección: Tarde-Q:** identifica en qué turno y sección se dicta la materia; por ejemplo, en una institución educativa, la sección define el grupo, el docente y el calendario de entregas. **Horas cátedras semanales:** la carga total de la materia se reparte entre teoría y práctica; por ejemplo, en un hospital, la jornada del personal se reparte entre formación y atención. **Clases teóricas: 36:** las horas de teoría ayudan a construir conceptos; por ejemplo, en una clase teórica se puede analizar cómo se modelan los requisitos de un sistema de turnos. **Clases prácticas: 54:** las horas de práctica permiten aplicar y revisar lo aprendido; por ejemplo, en logística, una actividad práctica puede representar el flujo de un pedido y detectar dónde falta información.
- **Reflexión docente:**
 - El aprendizaje se vuelve visible cuando una idea puede convertirse en una decisión o artefacto revisable.
- **Pregunta desafío:** ¿qué actividad práctica demostraría que una idea fue comprendida?
- **Respuestas posibles:**
 1. Aplicar el concepto a un caso y explicar por qué la decisión es adecuada.
 2. Elaborar un modelo, prueba o documento que otra persona pueda revisar.
 3. Comparar una alternativa correcta con otra y justificar el trade-off.
- **Advertencia:** no confundan la distribución horaria con una garantía de dedicación total.

### Slide 4. Metodología

**Texto visible**

- `Metodología`
- `Las clases teóricas se desarrollarán en clases magistrales a cargo del docente y trabajo práctico a ser realizado por los estudiantes`
- `Los estudiantes realizarán los trabajos prácticos en grupos y serán supervisados por los docentes`
- `Presentación y defensa de trabajos prácticos relacionados con el área en cuestión`
- `En la plataforma virtual se realizarán foros de discusión`
- `Tutorías a distancia: individuales y/o grupales`

**Elementos visuales**

- Lista textual de cinco aspectos metodológicos.
- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** **Metodología:** el slide describe cómo se desarrollará el aprendizaje, combinando exposición, práctica, equipo, defensa, foro y tutoría; por ejemplo, en un curso de análisis de datos, esta combinación permite que una idea se convierta en un artefacto revisable. **Clases magistrales a cargo del docente y trabajo práctico de los estudiantes:** la teoría la expone el docente y los estudiantes producen el trabajo práctico; por ejemplo, en banca, un grupo podría justificar el flujo de una transferencia y responder qué controles aplicaría antes de liberarla. **Trabajos prácticos en grupos supervisados por los docentes:** los estudiantes trabajan en equipo y los docentes los acompañan; por ejemplo, en un proyecto de comercio electrónico, el grupo reparte tareas y revisa las decisiones de cada integrante. **Presentación y defensa de trabajos prácticos:** los equipos presentan y defienden su trabajo; por ejemplo, en logística, defender un modelo de rutas hace visible el razonamiento detrás de cada decisión. **Foros de discusión en la plataforma virtual:** el foro permite debatir y revisar ideas de forma asincrónica; por ejemplo, en una biblioteca digital, los foros ayudan a consensuar criterios entre usuarios y responsables. **Tutorías a distancia individuales o grupales:** las tutorías resuelven dudas y ajustan el trabajo; por ejemplo, en una universidad, una tutoría puede aclarar un requisito ambiguo antes de codificar.
- **Reflexión docente:**
 - Defender una solución hace visible el razonamiento y puede revelar supuestos que una entrega aislada no muestra.
- **Pregunta desafío:** ¿qué evidencia mostraría que un grupo colaboró realmente?
- **Respuestas posibles:**
 1. Un producto integrado, con decisiones y aportes trazables de sus integrantes.
 2. La capacidad de explicar y defender el trabajo como equipo, no solo repartir diapositivas.
 3. Cambios incorporados a partir de revisiones, foros o tutorías.
- **Advertencia:** participar no equivale solo a asistir; requiere producir y justificar decisiones.

### Slide 5. Aula virtual

**Texto visible**

- `Aula Virtual`
- `Plataforma: Educa`
- `Nombre corto del aula virtual: ingsof1-av 2024`
- `Link de acceso al aula virtual: https://grado.pol.una.py/course/view.php?id=6508`
- `Contraseña: [dato sensible presente en el PPTX original; omitido en esta guía]`

**Elementos visuales**

- Lista textual con plataforma, nombre corto, enlace y contraseña.
- El enlace aparece además como hipervínculo OOXML.
- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** **Aula Virtual:** el slide indica dónde funciona el espacio de trabajo en línea del curso; por ejemplo, en una organización, el aula virtual centraliza anuncios, materiales y entregas. **Plataforma: Educa:** es la plataforma que aloja el aula; por ejemplo, en una empresa, la plataforma de gestión define dónde se guardan los documentos y cómo se accede a ellos. **Nombre corto del aula virtual: ingsof1-av 2024:** identifica el aula para buscarla y reconocerla sin ambigüedad; por ejemplo, en un sistema de biblioteca, el código de una colección permite ubicarla fácilmente. **Link de acceso al aula virtual:** el enlace dirige al espacio concreto de trabajo; por ejemplo, en un servicio web, una URL de administración puede documentarse para que el equipo llegue al panel correcto. **Contraseña:** el aula exige una credencial que en el material original se registra como dato sensible y no se publica; por ejemplo, en un servicio gestionado, los secretos de acceso deben manejarse por un canal seguro y fuera del repositorio, porque una exposición accidental convierte un recurso académico en un incidente de seguridad.
- **Reflexión docente:**
 - Una exposición accidental de credenciales convierte un recurso académico en un incidente de seguridad; la prevención forma parte de la práctica profesional.
- **Pregunta desafío:** ¿qué harían si una contraseña aparece en un repositorio?
- **Respuestas posibles:**
 1. Avisar al responsable y revocar o cambiar la credencial de inmediato.
 2. Retirar el secreto del historial y revisar quién pudo acceder.
 3. Registrar el incidente y evitar volver a publicar el valor en documentación o capturas.
- **Advertencia:** nunca expongan credenciales en notas, repositorios ni capturas públicas.

### Slide 6. Sobre el contenido

**Texto visible**

- `Sobre el Contenido`
- `Unidad I: Introducción a la Ingeniería de Software`
- `Unidad II: Modelos de Proceso del Software`
- `Unidad III: Ingeniería de Requerimientos`
- `Unidad IV: Diseño del Software`

**Elementos visuales**

- Lista textual de las cuatro unidades.
- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** **Sobre el Contenido:** el slide presenta el recorrido del curso como un mapa de cuatro unidades; por ejemplo, en un proyecto de historias clínicas, conviene relevar necesidades antes de diseñar. **Unidad I: Introducción a la Ingeniería de Software:** introduce la disciplina y su vocabulario básico; por ejemplo, en salud, entender qué es el software permite hablar de productos y procesos con precisión. **Unidad II: Modelos de Proceso del Software:** estudia cómo organizar el trabajo de desarrollo; por ejemplo, en un banco, elegir un modelo de proceso ayuda a controlar plazos y riesgos de una migración. **Unidad III: Ingeniería de Requerimientos:** se ocupa de acordar qué debe hacer el sistema; por ejemplo, en comercio electrónico, los requerimientos expresan qué problema resuelve el catálogo o el proceso de compra. **Unidad IV: Diseño del Software:** decide cómo construir la solución; por ejemplo, en logística, el diseño define la arquitectura del seguimiento de paquetes. La secuencia va de comprender el problema y organizar el trabajo a decidir cómo construir la solución, porque saltar etapas puede producir modelos elegantes para un problema mal entendido.
- **Reflexión docente:**
 - Saltar etapas puede producir modelos elegantes para un problema mal entendido; el orden ayuda a reducir retrabajo.
- **Pregunta desafío:** ¿por qué conviene estudiar requerimientos antes del diseño?
- **Respuestas posibles:**
 1. Porque los requerimientos expresan qué problema debe resolver el sistema.
 2. Porque el diseño debe responder a restricciones y necesidades ya comprendidas.
 3. Porque diseñar antes puede fijar una solución que luego contradiga al usuario o al negocio.
- **Advertencia:** el mapa anticipa temas; no reemplaza el desarrollo de cada unidad.

### Slide 7. Sobre las evaluaciones

**Texto visible**

- `Sobre las Evaluaciones`
- `Parciales`
- `Examen escrito 30%`
- `Trabajo práctico 70%`
- `Final`
- `Examen escrito (Caso práctico) 100%`

**Elementos visuales**

- Dos bloques textuales: parciales y final.
- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** **Sobre las Evaluaciones:** el slide describe cómo se evalúa la materia, combinando conocimiento y aplicación; por ejemplo, en un sistema de reservas, evaluar solo definiciones no demuestra si se puede diseñar una solución. **Parciales:** durante la cursada hay exámenes parciales que combinan dos componentes; por ejemplo, en educación, un parcial suele repartirse entre teoría y práctica. **Examen escrito 30%:** el examen escrito aporta el 30% de la nota de los parciales; por ejemplo, en una universidad, un examen puede pedir justificar una decisión de diseño frente a un requisito. **Trabajo práctico 70%:** el trabajo práctico aporta el 70%, el peso mayor de la evaluación; por ejemplo, en transporte, un caso de asignación de viajes puede exigir explicar requisitos, riesgos y decisiones de diseño. **Final:** al cierre hay un examen final; por ejemplo, en un proyecto de facturación, el final evalúa el caso completo. **Examen escrito (Caso práctico) 100%:** el final es un examen escrito sobre un caso práctico que vale el 100%; por ejemplo, en un banco, resolver un caso de conciliación obliga a conectar conceptos, decisiones y justificaciones, no solo a repetir definiciones.
- **Reflexión docente:**
 - La evaluación combina conocimiento y aplicación; prepararse solo para memorizar deja sin demostrar una parte central del trabajo profesional.
- **Pregunta desafío:** ¿cómo justificarían una decisión de diseño frente a un requisito?
- **Respuestas posibles:**
 1. Vinculando la decisión con el requisito y con la necesidad que lo origina.
 2. Explicando alternativas descartadas, riesgos y consecuencias.
 3. Mostrando evidencia, como un modelo, prueba o criterio de aceptación.
- **Advertencia:** conserven exactamente los porcentajes del material.

### Slide 8. Trabajos prácticos

**Texto visible**

- `Trabajos Prácticos`
- `Formar equipos hasta 4 integrantes`
- `Caso Práctico o Proyecto`
- `Requerimientos (H1), Casos de Uso (H2), Especificación de Casos de Uso (H3)`
- `Diagrama de Clases (H4), Diagrama de Secuencia (H5), Diagrama de Estados (H6), Diagrama de Actividades (H7), Diagrama de Despliegue (H8)`
- `H - Hito`

**Elementos visuales**

- Lista jerárquica de conformación de equipos, modalidad de trabajo y ocho hitos.
- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** **Trabajos Prácticos:** el slide describe cómo se construye el caso práctico o proyecto de la materia; por ejemplo, en un proyecto de logística, se puede pasar de requisitos de despacho a casos de uso y diagramas del seguimiento de paquetes. **Formar equipos hasta 4 integrantes:** los estudiantes trabajan en equipos reducidos; por ejemplo, en un desarrollo de software real, un equipo pequeño facilita coordinar aportes y responsabilidades. **Caso Práctico o Proyecto:** la modalidad de trabajo es construir un caso o proyecto completo; por ejemplo, en comercio electrónico, el proyecto puede ir de los requisitos del carrito hasta su despliegue. **Requerimientos (H1), Casos de Uso (H2), Especificación de Casos de Uso (H3):** los primeros hitos capturan qué debe hacer el sistema y cómo se usará; por ejemplo, en un hospital, H1 aclara los requisitos de turnos y H2 describe las interacciones del paciente con el sistema. **Diagrama de Clases (H4), Secuencia (H5), Estados (H6), Actividades (H7), Despliegue (H8):** los siguientes hitos modelan la estructura y el comportamiento de la solución; por ejemplo, en banca, el diagrama de secuencia describe cómo se procesa una transferencia paso a paso. **H - Hito:** la H significa hito, un punto de control para revisar una parte del trabajo antes de avanzar; por ejemplo, en un proyecto de facturación, cada hito evita descubrir al final que las decisiones iniciales estaban mal orientadas.
- **Reflexión docente:**
 - Trabajar incrementalmente reduce el riesgo de descubrir al final que todas las decisiones iniciales estaban mal orientadas, aunque cada hito requiere revisión real.
- **Pregunta desafío:** ¿qué riesgo aparece si se salta el hito de requerimientos?
- **Respuestas posibles:**
 1. Diseñar o codificar funciones que no resuelven la necesidad real.
 2. Generar inconsistencias entre casos de uso y diagramas posteriores.
 3. Aumentar el retrabajo porque los errores se descubren tarde.
- **Advertencia:** un hito es un punto de control, no solo una fecha de entrega.

### Slide 9. Bibliografía de referencia

**Texto visible**

- `Bibliografía de Referencia`
- `SOMMERVILLE, Ian. Ingeniería de Software 6 y 7º Edición. Addison Wesley. 2002-2005`
- `PRESSMAN, Roger 5º y 6º,7º Edición. Ingeniería del Software. Un enfoque práctico. McGraw-Hill. 2002-2005-2010`
- `McCONNELL, Steve. Desarrollo y gestión de proyectos informáticos. McGraw-Hill. 1997`
- `PIATTINI, Mario. Calidad de Sistemas Informáticos. Alfaomega - Ra-Ma. 2007`

**Elementos visuales**

- Lista textual de cuatro referencias bibliográficas.
- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** **Bibliografía de Referencia:** el slide reúne las fuentes para ampliar conceptos y contrastar explicaciones; por ejemplo, para un sistema gubernamental legado, distintas fuentes ayudan a comparar mantenibilidad, riesgos y gestión del proyecto. **SOMMERVILLE, Ian. Ingeniería de Software, 6 y 7º Edición. Addison Wesley, 2002-2005:** es la referencia clásica sobre el ciclo de vida del software; por ejemplo, en un curso, sirve para verificar una definición de proceso. **PRESSMAN, Roger 5º y 6º, 7º Edición. Ingeniería del Software. Un enfoque práctico. McGraw-Hill, 2002-2005-2010:** ofrece una visión práctica de métodos y prácticas de desarrollo; por ejemplo, en un proyecto de comercio electrónico, ayuda a fundamentar decisiones de diseño. **McCONNELL, Steve. Desarrollo y gestión de proyectos informáticos. McGraw-Hill, 1997:** se centra en la gestión y estimación de proyectos; por ejemplo, en logística, ayuda a planificar plazos y recursos de un sistema de despacho. **PIATTINI, Mario. Calidad de Sistemas Informáticos. Alfaomega-Ra-Ma, 2007:** aborda la calidad de los sistemas; por ejemplo, en banca, sirve para definir criterios de confiabilidad y trazabilidad. Respetemos la edición, editorial y año del material: una actualización bibliográfica debe identificarse como tal.
- **Reflexión docente:**
 - Consultar fuentes no significa acumular citas: significa verificar conceptos y reconocer el alcance de cada afirmación.
- **Pregunta desafío:** ¿qué afirmación del slide buscarían verificar en una fuente?
- **Respuestas posibles:**
 1. Una definición de Ingeniería de Software o de proceso.
 2. Una comparación entre productos genéricos y hechos a medida.
 3. Una recomendación cuya aplicabilidad dependa del contexto.
- **Advertencia:** no presenten una edición o año actualizado como si perteneciera al material original.

### Slide 10. Separador de la Unidad I

**Texto visible**

- `INGENIERÍA DE SOFTWARE I`
- `Prof. Lic. Guillermo Jacobo González Rodas Mst. PMP`

**Elementos visuales**

- Separador de unidad con título principal, nombre de la unidad y docente.
- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** **INGENIERÍA DE SOFTWARE I:** este separador marca el paso de la organización del curso a la Unidad I, donde se construirá el vocabulario para hablar de productos, procesos, costos, retos y responsabilidad profesional; por ejemplo, un sistema de transporte permite estudiar problemas similares de requisitos, operación, mantenimiento y evolución, y en un banco ayuda a analizar cómo una disciplina organiza decisiones más allá del código. **Prof. Lic. Guillermo Jacobo González Rodas Mst. PMP:** la presencia del docente en el separador recuerda quién conduce la unidad y qué perspectiva aporta al dictado; por ejemplo, en un proyecto de facturación, saber quién coordina ayuda a orientar las consultas y las decisiones del equipo. Este cambio de registro importa: comprender el curso ayuda a participar, pero comprender la disciplina permite tomar mejores decisiones profesionales, como decidir qué producir primero o cómo equilibrar las necesidades del negocio con las restricciones técnicas.
- **Reflexión docente:**
 - Este cambio de registro importa: comprender el curso ayuda a participar, pero comprender la disciplina permite tomar mejores decisiones profesionales.
- **Pregunta desafío:** ¿qué problema profesional esperan que la unidad ayude a comprender?
- **Respuestas posibles:**
 1. Cómo producir software confiable y mantenible.
 2. Cómo organizar un proceso para reducir errores y retrabajo.
 3. Cómo equilibrar necesidades del negocio, restricciones técnicas y responsabilidad.
- **Advertencia:** no adelanten conclusiones antes de presentar los conceptos.

### Slide 11. Objetivos

**Texto visible**

- `OBJETIVOS`
- `Definir la Ingeniería de Software y explicar su importancia`
- `Discutir los conceptos de Producto de Software y Proceso de Software`
- `Introducir la noción de responsabilidad profesional de un ingeniero de software.`

**Elementos visuales**

- Título y lista de tres objetivos.
- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** **OBJETIVOS:** los objetivos del slide funcionan como criterios de aceptación de la unidad; por ejemplo, en un proyecto de una plataforma educativa, saber qué se debe lograr evita entregar funciones que nadie usa. **Definir la Ingeniería de Software y explicar su importancia:** al cierre, deberemos definir la disciplina con palabras propias y justificar por qué importa; por ejemplo, en un sistema de biblioteca, explicar qué es la Ingeniería de Software ayuda a distinguirla de simplemente programar. **Discutir los conceptos de Producto de Software y Proceso de Software:** distinguir producto de proceso permite razonar sobre un caso; por ejemplo, en una plataforma de evaluaciones, el producto es el sistema y el proceso, la forma de construirlo y mantenerlo. **Introducir la noción de responsabilidad profesional de un ingeniero de software:** la unidad introduce los deberes profesionales de quien construye software; por ejemplo, en un hospital, un sistema que maneja datos de pacientes exige pensar en privacidad y en las consecuencias de los fallos. Un objetivo se demuestra con evidencia: repetir una frase no alcanza si no podemos usarla para razonar sobre un caso.
- **Reflexión docente:**
 - Un objetivo se demuestra con evidencia: repetir una frase no alcanza si no podemos usarla para razonar sobre un caso.
- **Pregunta desafío:** ¿cómo demostrarían que pueden definir y no solo repetir un término?
- **Respuestas posibles:**
 1. Explicándolo con palabras propias y distinguiéndolo de conceptos cercanos.
 2. Aplicándolo a un caso y justificando qué elementos lo muestran.
 3. Comparando ejemplos y contraejemplos.
- **Advertencia:** distingan conocer una definición de aplicarla a un caso.

### Slide 12. Contenido

**Texto visible**

- `CONTENIDO`
- `La Ingeniería de Software`
- `Productos Software`
- `Costos del Software`
- `Proceso de Software`
- `Retos de la Ingeniería de Software`

**Elementos visuales**

- Lista textual de cinco temas.
- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** **CONTENIDO:** el slide presenta el mapa de temas de la unidad; por ejemplo, en un sistema de comercio electrónico, mantenimiento, volumen de usuarios y entregas pueden modificar tanto el proceso como el costo. **La Ingeniería de Software:** se estudia la disciplina como punto de partida; por ejemplo, en un banco, entender la disciplina permite conectar decisiones con sus consecuencias. **Productos Software:** se analizan los productos como resultado del trabajo; por ejemplo, en una biblioteca digital, el producto incluye programas y documentación asociada. **Costos del Software:** se estudia cuánto cuesta producir y mantener software; por ejemplo, en logística, un sistema difícil de cambiar encarece cada modificación futura. **Proceso de Software:** se analiza cómo se organizan las actividades de desarrollo; por ejemplo, en facturación, un proceso con controles puede requerir más esfuerzo inicial y reducir retrabajo. **Retos de la Ingeniería de Software:** se cierra con los desafíos profesionales; por ejemplo, en salud, integrar plataformas distintas y entregar a tiempo condiciona cada decisión. El orden organiza la conversación, pero los temas están conectados: el proceso influye en costos y los retos condicionan las decisiones.
- **Reflexión docente:**
 - Pensar cada tema de forma aislada oculta trade-offs; la ingeniería consiste en conectar decisiones con sus consecuencias.
- **Pregunta desafío:** ¿cómo se relacionan costo y proceso?
- **Respuestas posibles:**
 1. Un proceso con controles puede requerir más esfuerzo inicial y reducir retrabajo.
 2. Un proceso poco claro puede abaratar el inicio, pero aumentar fallos y mantenimiento.
 3. El contexto determina qué inversión produce una mejora razonable.
- **Advertencia:** el orden organiza la explicación, pero los temas están conectados.

### Slide 13. ¿Qué es la Ingeniería de Software?

**Texto visible**

- `¿Qué es la Ingeniería de Software?`
- `La ingeniería del software es una disciplina que comprende todos los aspectos de la producción del software desde las etapas iniciales de la especificación del sistema hasta el mantenimiento de éste después de que se utiliza. (Definición de Ian Somerville)`
- `La Ingeniería de Software es una disciplina de la Ingeniería que concierne a todos los aspectos de la producción de software`
- `Establecimiento y uso de principios con caracteres de ingeniería apropiados para obtener, software confiable, que opere eficaz y eficientemente en máquinas reales`
- `Establecimiento y uso de métodos, herramientas y procedimientos, orientados a obtener software económico que sea fiable y funcione de manera eficiente`

**Elementos visuales**

- Título y dos bloques de texto: definición atribuida a Ian Somerville y formulaciones complementarias.
- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** **¿Qué es la Ingeniería de Software?:** el slide plantea la pregunta central de la unidad y ofrece una definición amplia con formulaciones complementarias; por ejemplo, una aplicación de turnos médicos necesita las mismas actividades para operar confiablemente y adaptarse a nuevas necesidades. **Definición de Ian Sommerville:** la ingeniería del software es una disciplina que comprende todos los aspectos de la producción del software, desde las etapas iniciales de la especificación del sistema hasta el mantenimiento después de que se utiliza; por ejemplo, en una plataforma educativa, hay que especificar reglas, producir la solución, verificarla y mantenerla. **Disciplina de la Ingeniería que concierne a la producción de software:** la segunda formulación destaca que es una disciplina de la ingeniería aplicada a todos los aspectos de la producción; por ejemplo, en comercio electrónico, la producción no termina al lanzar la tienda, continúa con su operación y sus ajustes. **Establecimiento y uso de principios de ingeniería apropiados:** se busca obtener software confiable que opere eficaz y eficientemente en máquinas reales; por ejemplo, en un sistema de control industrial, los principios evitan fallos costosos. **Establecimiento y uso de métodos, herramientas y procedimientos:** se orienta a obtener software económico, fiable y eficiente; por ejemplo, en banca, usar métodos probados reduce el costo de los errores.
- **Reflexión docente:**
 - La mirada profesional distribuye la prevención a lo largo del ciclo; esperar al final para descubrir fallos suele limitar las alternativas.
- **Pregunta desafío:** ¿en qué etapa se puede prevenir un fallo costoso?
- **Respuestas posibles:**
 1. Desde la especificación, aclarando necesidades y restricciones.
 2. Durante diseño y desarrollo, revisando decisiones antes de hacerlas más costosas de cambiar.
 3. En validación, detectando evidencia insuficiente antes de la operación.
- **Advertencia:** Ingeniería de Software no es únicamente escribir código.

### Slide 14. ¿Qué es el Software?

**Texto visible**

- `¿Qué es el Software?`
- `Sommerville:`
- `“Programas de cómputo y su documentación asociada”`
- `Pressman:`
- `“Elemento del sistema de información que es lógico, con características considerablemente distintas a las del hardware”`

**Elementos visuales**

- Dos definiciones textuales diferenciadas por autor.
- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** **¿Qué es el Software?:** el slide contrasta dos definiciones de software para mostrar miradas complementarias; por ejemplo, en un sistema legado de gobierno, entender qué es el software ayuda a decidir qué documentar antes de modificarlo. **Sommerville:** define el software como programas de cómputo y su documentación asociada; por ejemplo, además del programa de una biblioteca, se documentan reglas, operación y errores. **Programas de cómputo y su documentación asociada:** la documentación sostiene el uso, la operación y el mantenimiento del producto; por ejemplo, un sistema legado puede seguir funcionando, pero sin documentación su mantenimiento depende de conocimiento difícil de transferir. **Pressman:** define el software como un elemento del sistema de información que es lógico; por ejemplo, una aplicación de reservas es lógica, no se desgasta como una máquina física. **Elemento lógico con características distintas a las del hardware:** el software no se fabrica ni se desgasta de la misma forma, pero igual afecta la operación física; por ejemplo, en un hospital, el software controla equipos aunque sea intangible.
- **Reflexión docente:**
 - Tratar la documentación como un accesorio aumenta la dependencia de personas y el riesgo de operar o cambiar el sistema sin comprenderlo.
- **Pregunta desafío:** ¿qué documento asociarían a un sistema real?
- **Respuestas posibles:**
 1. Manual de usuario o procedimiento operativo.
 2. Especificación de requisitos, diseño o interfaz de integración.
 3. Instrucciones de despliegue, mantenimiento y recuperación ante fallos.
- **Advertencia:** lógico no significa intangible o irrelevante para la operación física.

### Slide 15. Productos de Software

**Texto visible**

- `Productos de Software`
- `Productos genéricos: Productos que son producidos por una organización para ser comercializados.`
- `Productos hechos a medida: Sistemas que son desarrollados bajo pedido a un desarrollador específico.`
- `La mayor parte del gasto del software se realiza en productos genéricos, pero existe un mayor esfuerzo en el desarrollo de los sistemas hechos a medida.`

**Elementos visuales**

- Lista textual con dos categorías y una comparación final.
- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** **Productos de Software:** el slide clasifica los productos según su origen y compara gasto y esfuerzo; por ejemplo, un hospital puede comprar un producto estándar o encargar un sistema adaptado a sus circuitos y regulaciones. **Productos genéricos:** son producidos por una organización para ser comercializados a varias organizaciones; por ejemplo, una aplicación de facturación genérica puede servir a varias empresas mediante configuración. **Productos hechos a medida:** son sistemas desarrollados bajo pedido para un cliente específico; por ejemplo, un sistema de logística diseñado para una empresa integra reglas y sistemas particulares de esa empresa. **La mayor parte del gasto del software se realiza en productos genéricos, pero existe un mayor esfuerzo en el desarrollo de los sistemas hechos a medida:** el slide distingue gasto de esfuerzo, una comparación del material que no debe tomarse como ley universal; por ejemplo, en banca, comprar un producto estándar reduce el gasto inicial, pero integrarlo a la operación exige esfuerzo considerable.
- **Reflexión docente:**
 - Pasar de un cliente a muchos amplía la necesidad de configurar, documentar y sostener variaciones; la reutilización trae oportunidades y restricciones.
- **Pregunta desafío:** ¿qué decisión cambia al pasar de un cliente a muchos?
- **Respuestas posibles:**
 1. Qué requisitos se consideran parte del producto común y cuáles serán configurables.
 2. Cómo se priorizan cambios que afectan a varios clientes.
 3. Qué estrategia de soporte, documentación y evolución se necesita.
- **Advertencia:** no conviertan la comparación del slide en una regla para todos los mercados.

### Slide 16. Características de Productos Software

**Texto visible**

- `Características de Productos Software`
- `Mantenibles` — `El software debe evolucionar y seguir cumpliendo con sus especificaciones.`
- `Confiabilidad` — `El software no debe causar daños físicos o económicos en el caso de fallos.`
- `Eficiencia` — `El software no debe desperdiciar los recursos del sistema.`
- `Utilización adecuada` — `El software debe contar con una interfaz de usuario y documentación adecuada.`

**Elementos visuales**

- Lista de cuatro características, cada una acompañada por su explicación.
- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** **Características de Productos Software:** el slide presenta los atributos que debe observar un producto de software, no como etiquetas decorativas sino como condiciones que verificar; por ejemplo, en un sistema de salud, confiabilidad y utilización adecuada son especialmente visibles en alertas, permisos y documentación para el personal. **Mantenibles:** el software debe evolucionar y seguir cumpliendo con sus especificaciones; por ejemplo, una aplicación de facturación debe adaptarse a nuevos impuestos sin rehacerla. **Confiabilidad:** el software no debe causar daños físicos o económicos en caso de fallos; por ejemplo, en un hospital, un sistema de dosificación no puede fallar sin consecuencias. **Eficiencia:** el software no debe desperdiciar los recursos del sistema; por ejemplo, en un sistema de cómputo distribuido, un algoritmo ineficiente encarece la infraestructura. **Utilización adecuada:** el software debe contar con interfaz de usuario y documentación adecuada; por ejemplo, en una biblioteca, una interfaz confusa y sin manual genera errores de uso. Cada atributo expresa una condición que observar, y mejorar uno puede exigir costos o compromisos en otros.
- **Reflexión docente:**
 - Mejorar un atributo puede exigir costos o compromisos en otros; la prioridad debe justificarse por el contexto y el impacto.
- **Pregunta desafío:** ¿qué atributo priorizarían en un sistema crítico y por qué?
- **Respuestas posibles:**
 1. Confiabilidad, si un fallo puede causar daño económico o físico.
 2. Mantenibilidad, si el entorno cambia y el sistema deberá evolucionar durante años.
 3. Eficiencia, si los recursos son limitados y afectan la operación.
 4. Utilización adecuada, si errores de comprensión pueden comprometer el servicio.
- **Advertencia:** mejorar un atributo puede exigir costos o compromisos en otros.

### Slide 17. Importancia de las características

**Texto visible**

- `Importancia de las Características`
- `La importancia relativa de las características depende en el tipo de producto y en el ambiente en el que será utilizado.`
- `En algunos casos, algunos atributos pueden predominar. En sistemas de seguridad críticos de tiempo real, los atributos clave pueden ser la confiabilidad y la eficiencia.`
- `Los costos tienden a crecer exponencialmente si son requeridos altos niveles de alguna característica.`

**Elementos visuales**

- Tres bloques textuales argumentativos.
- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** **Importancia de las Características:** el slide explica que los atributos no tienen un valor absoluto, sino relativo al contexto; por ejemplo, un sistema de control médico puede priorizar confiabilidad de forma distinta que una aplicación de entretenimiento. **La importancia relativa de las características depende del tipo de producto y del ambiente:** las prioridades cambian según dónde y para qué se usa el sistema; por ejemplo, en un banco, una operación financiera puede priorizar confiabilidad y trazabilidad, mientras una consulta pública de tasas tolera otra combinación de atributos. **En sistemas de seguridad críticos de tiempo real, los atributos clave pueden ser la confiabilidad y la eficiencia:** cuando un fallo puede ser peligroso y el tiempo es decisivo, estos atributos predominan; por ejemplo, en un sistema de control de tráfico, la confiabilidad es prioridad absoluta. **Los costos tienden a crecer exponencialmente si se requieren altos niveles de alguna característica:** exigir niveles muy altos encarece el desarrollo; por ejemplo, en un sistema de vigilancia industrial, alcanzar disponibilidad casi total multiplica la inversión. El slide expresa una tendencia cualitativa; no aporta una fórmula de costos.
- **Reflexión docente:**
 - No existe una prioridad profesional fuera de contexto: sacrificar un atributo puede ser razonable en un caso y peligroso en otro.
- **Pregunta desafío:** ¿qué atributo sacrificarían menos en cada caso?
- **Respuestas posibles:**
 1. En control médico, confiabilidad, porque el impacto de un fallo puede ser crítico.
 2. En una aplicación de entretenimiento, quizá eficiencia o disponibilidad según el uso, sin ignorar seguridad.
 3. En una operación financiera, confiabilidad y trazabilidad antes que una mejora superficial de velocidad.
- **Advertencia:** el slide expresa una tendencia cualitativa; no aporta una fórmula de costos.

### Slide 18. Clasificación de Productos Software

**Texto visible**

- `Clasificación de Productos Software`
- `Por su estructura:`
 - `Funcionales.`
 - `Orientados a objetos.`
 - `Orientados a listas.`
 - `Orientados a componentes.`
- `Por su función:`
 - `Programas o Sistemas de Usuario`
 - `Herramientas de Software.`
 - `Librerías.`
 - `Sistemas de uso genérico: Compiladores, S.O’s, Procesadores de Texto, etc.`
 - `Bases de Datos.`
 - `Sistemas basados en Web.`
- `Por su plataforma de cómputo:`
 - `Sistemas embebidos o empotrados.`
 - `Sistemas de cómputo distribuído`
 - `Sistemas de tiempo real.`
 - `Sistemas basados en Chips.`
 - `Sistemas de cómputo ubicuos.`

**Elementos visuales**

- Lista jerárquica organizada en tres criterios: estructura, función y plataforma de cómputo.
- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** **Clasificación de Productos Software:** el slide organiza los productos según tres ejes distintos: estructura, función y plataforma de cómputo; por ejemplo, una aplicación móvil de logística puede combinar una interfaz de usuario, bases de datos, servicios distribuidos y funciones de ubicación. **Por su estructura:** clasifica según la organización interna del software; por ejemplo, un sistema puede ser funcional, orientado a objetos, orientado a listas u orientado a componentes. **Funcionales, orientados a objetos, orientados a listas, orientados a componentes:** cada estilo define cómo se estructuran módulos y datos; por ejemplo, en un banco, el software suele estructurarse por componentes para reutilizar funciones. **Por su función:** clasifica según el papel que cumple el software; por ejemplo, en un hospital, conviven sistemas de usuario, herramientas y bases de datos. **Programas de usuario, herramientas, librerías, sistemas de uso genérico, bases de datos y sistemas basados en Web:** los sistemas de uso genérico incluyen compiladores, sistemas operativos y procesadores de texto; por ejemplo, en comercio electrónico, una tienda web combina una aplicación de usuario con una base de datos. **Por su plataforma de cómputo:** clasifica según el tipo de hardware donde corre el software; por ejemplo, un sistema de riego agrícola puede correr sobre un sistema embebido. **Sistemas embebidos, distribuidos, de tiempo real, basados en chips y ubicuos:** cada plataforma impone restricciones distintas; por ejemplo, un sistema de tiempo real responde dentro de plazos estrictos, mientras uno ubicuo acompaña al usuario en distintos dispositivos. No mezclemos criterios como si fueran categorías excluyentes.
- **Reflexión docente:**
 - Clasificar con varios ejes ayuda a describir mejor un sistema; forzar una sola etiqueta oculta decisiones técnicas importantes.
- **Pregunta desafío:** ¿qué clasificaciones aplicarían a una aplicación móvil?
- **Respuestas posibles:**
 1. Por función, como programa de usuario o sistema basado en web si expone servicios web.
 2. Por plataforma, como sistema distribuido o ubicuo según su arquitectura y uso.
 3. Por estructura, según use objetos, componentes u otra organización indicada por el material.
- **Advertencia:** no mezclen criterios como si fueran categorías excluyentes.

### Slide 19. Costos del Software

**Texto visible**

- `Costos del Software`
- `Los costos del software a menudo dominan al costo del sistema`
- `Cuesta más mantener el software que desarrollarlo`
- `La Ingeniería de Software concierne a un desarrollo efectivo en cuanto a costos del software`

**Elementos visuales**

- Texto a la izquierda.
- Imagen embebida `ppt/media/image5.png`: gráfico cartesiano con eje vertical `Costos`, eje horizontal `Eficiencia` y una curva ascendente que se eleva con rapidez hacia la derecha.
- No contiene notas del orador.

**Explicación docente**

- **Desarrollo:** **Costos del Software:** el slide presenta afirmaciones sobre los costos y las acompaña con un gráfico que relaciona costos y eficiencia; por ejemplo, un sistema legado de transporte puede requerir más mantenimiento que desarrollo cuando cada cambio rompe integraciones antiguas. **Los costos del software a menudo dominan al costo del sistema:** el software suele ser la parte más cara de un sistema completo; por ejemplo, en un sistema de facturación, el hardware se amortiza, pero el software exige inversión continua. **Cuesta más mantener el software que desarrollarlo:** el mantenimiento puede superar el costo del desarrollo inicial; por ejemplo, una arquitectura difícil de cambiar vuelve costoso adaptar un sistema de reservas a nuevas reglas. **La Ingeniería de Software concierne a un desarrollo efectivo en cuanto a costos:** la disciplina busca que el desarrollo sea efectivo en costos; por ejemplo, en un banco, aclarar requisitos temprano reduce el retrabajo. **Gráfico de Costos frente a Eficiencia:** la curva ascendente del gráfico muestra cómo los costos se elevan con rapidez hacia la derecha a medida que se exige más eficiencia; por ejemplo, en comercio electrónico, exigir niveles muy altos de respuesta encarece la infraestructura. El gráfico expresa una relación cualitativa; no permite inferir valores ni una fórmula.
- **Reflexión docente:**
 - La eficiencia profesional incluye pensar el costo futuro; ahorrar hoy sin cuidar mantenibilidad puede trasladar el problema a toda la vida del sistema.
- **Pregunta desafío:** ¿qué decisión temprana reduciría el costo futuro?
- **Respuestas posibles:**
 1. Aclarar requisitos y restricciones antes de comprometer una solución.
 2. Diseñar puntos de cambio y registrar decisiones para facilitar mantenimiento.
 3. Validar temprano las integraciones o riesgos que podrían generar retrabajo.
- **Advertencia:** el gráfico expresa una relación cualitativa; no permite inferir valores ni una fórmula.

### Slide 20. Proceso de Software

**Texto visible**

- `Proceso de Software`
- `Conjunto estructurado de actividades requeridas para desarrollar un sistema de software.`
- `Especificación – que debe hacer el software y cuáles son sus especificaciones de desarrollo.`
- `Desarrollo – producción del sistema de software.`
- `Validación – verificar que el software hace lo que el cliente pide.`
- `Evolución – cambiar/adaptar el software a las demandas.`
- `Las actividades varían dependiendo de la organización y del tipo de sistema a desarrollarse.`
- `Debe estar explícitamente modelado si va a ser bien administrado`

**Elementos visuales**

- Definición seguida por cuatro actividades y dos observaciones finales.
- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** **Proceso de Software:** el slide define el proceso y enumera sus actividades centrales; por ejemplo, un sistema de turnos puede adaptar su proceso según la criticidad, la privacidad y la cantidad de integraciones. **Conjunto estructurado de actividades requeridas para desarrollar un sistema de software:** el proceso organiza las actividades necesarias para producir el sistema; por ejemplo, en facturación, especificar, desarrollar, validar y evolucionar forman el ciclo. **Especificación:** establece qué debe hacer el software y cuáles son sus especificaciones de desarrollo; por ejemplo, en un hospital, la especificación fija requisitos, restricciones y criterios de aceptación. **Desarrollo:** es la producción del sistema de software; por ejemplo, en comercio electrónico, el desarrollo incluye diseño, código y decisiones de construcción. **Validación:** verifica que el software hace lo que el cliente pide; por ejemplo, en logística, las pruebas confirman que el seguimiento de paquetes cumple lo pedido. **Evolución:** cambia o adapta el software a las demandas; por ejemplo, en banca, las nuevas regulaciones obligan a evolucionar el sistema. **Las actividades varían dependiendo de la organización y del tipo de sistema:** no existe una receta única; por ejemplo, una biblioteca pequeña y un banco estructuran su proceso de forma distinta. **Debe estar explícitamente modelado si va a ser bien administrado:** modelar el proceso mejora la visibilidad sin volverlo rígido; por ejemplo, en un proyecto de software, un proceso modelado permite detectar cuellos de botella.
- **Reflexión docente:**
 - Modelar el proceso mejora la visibilidad, pero no debe convertir el trabajo en una secuencia rígida incapaz de responder a evidencia nueva.
- **Pregunta desafío:** ¿qué evidencia ubicarían en cada actividad?
- **Respuestas posibles:**
 1. Especificación: requisitos, restricciones y criterios de aceptación.
 2. Desarrollo: diseño, código y decisiones de construcción.
 3. Validación: pruebas, revisiones y evidencia de que se cumple lo pedido.
 4. Evolución: cambios priorizados, incidentes y nuevas necesidades.
- **Advertencia:** modelar el proceso no significa volverlo rígido.

### Slide 21. Proceso Genérico

**Texto visible**

- `Proceso Genérico`
- `Especificación - establecer los requerimientos y restricciones del sistema.`
- `Diseño - Producir un modelo del sistema.`
- `Codificación - construir el sistema.`
- `Prueba - verificar que el sistema cumpla con las especificaciones requeridas.`
- `Instalación - entregar el sistema al usuario y asegurar su operacionalidad.`
- `Mantenimiento - reparar fallos en el sistema cundo sea descubiertos`

**Elementos visuales**

- Lista textual de seis actividades del proceso genérico.
- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** **Proceso Genérico:** el slide presenta las seis actividades básicas de un proceso de desarrollo, cada una con un propósito distinto; por ejemplo, en comercio electrónico, probar el proceso de compra antes de instalarlo evita que una ambigüedad de requerimientos llegue a producción. **Especificación:** establecer los requerimientos y restricciones del sistema; por ejemplo, en un hospital, acordar qué datos de pacientes se registran antes de construir. **Diseño:** producir un modelo del sistema; por ejemplo, en logística, el diseño define la arquitectura del seguimiento de paquetes. **Codificación:** construir el sistema; por ejemplo, en banca, implementar el módulo de transferencias según el diseño acordado. **Prueba:** verificar que el sistema cumpla con las especificaciones requeridas; por ejemplo, en facturación, probar que los cálculos de impuestos sean correctos. **Instalación:** entregar el sistema al usuario y asegurar su operacionalidad; por ejemplo, en una biblioteca, instalar el sistema de préstamos y capacitar al personal. **Mantenimiento:** reparar fallos en el sistema cuando sean descubiertos; por ejemplo, en comercio electrónico, corregir errores del carrito de compras cuando aparecen. La secuencia ordena el trabajo, pero el trabajo real puede requerir retrocesos con nueva evidencia.
- **Reflexión docente:**
 - La secuencia ordena el trabajo, pero no elimina la incertidumbre; el riesgo crece cuando se confunde avanzar con comprender.
- **Pregunta desafío:** ¿qué error aparece si se codifica antes de acordar el requerimiento?
- **Respuestas posibles:**
 1. Construir una solución técnicamente válida para una necesidad equivocada.
 2. Aumentar cambios, discusiones y retrabajo cuando el requerimiento se aclare.
 3. Dificultar la prueba porque no existe un criterio acordado contra el cual comparar.
- **Advertencia:** la secuencia ayuda a organizar, pero el trabajo real puede requerir retrocesos.

### Slide 22. Características del Proceso

**Texto visible**

- `Características del Proceso`
- `Entendible` — `Se encuentra el proceso bien definido y es entendible ?`
- `Visible` — `El proceso es visible al exterior ?`
- `Soportable` — `Puede el proceso ser soportado por herramientas CASE ?`
- `Aceptable` — `El proceso es aceptado por aquellos involucrados en el ?`
- `Confiable` — `Errores del proceso son descubiertos antes de que se conviertan en errores del producto ?`
- `Robusto` — `Puede continuar el proceso a pesar de problemas inesperados ?`
- `Mantenible` — `Puede el proceso evolucionar para cumplir con los objetivos organizacionales ?`
- `Rapidez` — `Qué tan rápido puede producirse el sistema ?`

**Elementos visuales**

- Lista de ocho características, cada una formulada como una pregunta de evaluación.
- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** **Características del Proceso:** el slide presenta ocho características formuladas como preguntas de evaluación; por ejemplo, en logística, un proceso puede ser rápido pero frágil si no hace visibles excepciones, dependencias o pruebas de entregas. **Entendible:** ¿está el proceso bien definido y es entendible?; por ejemplo, en una biblioteca, un proceso claro permite que cualquier integrante sepa qué hacer. **Visible:** ¿el proceso es visible al exterior?; por ejemplo, en un banco, mostrar el estado de una migración permite detectar demoras. **Soportable:** ¿puede el proceso ser soportado por herramientas CASE?; por ejemplo, en un proyecto de software, usar herramientas de modelado facilita el seguimiento. **Aceptable:** ¿el proceso es aceptado por quienes están involucrados?; por ejemplo, en un hospital, un proceso de turnos rechazado por el personal no funciona. **Confiable:** ¿se descubren los errores del proceso antes de que se conviertan en errores del producto?; por ejemplo, en comercio electrónico, las revisiones tempranas evitan fallos en producción. **Robusto:** ¿puede continuar el proceso a pesar de problemas inesperados?; por ejemplo, en logística, un proceso robusto sigue operando si un transporte falla. **Mantenible:** ¿puede el proceso evolucionar para cumplir con los objetivos organizacionales?; por ejemplo, en facturación, el proceso debe adaptarse a nuevas leyes. **Rapidez:** ¿qué tan rápido puede producirse el sistema?; por ejemplo, en una startup, la rapidez es atractiva, pero un proceso que produce errores velozmente no es profesionalmente eficaz.
- **Reflexión docente:**
 - La rapidez es atractiva, pero un proceso que produce velozmente errores o retrabajo no es profesionalmente eficaz.
- **Pregunta desafío:** ¿qué indicador revelaría primero un proceso frágil?
- **Respuestas posibles:**
 1. Requisitos que cambian sin trazabilidad ni aceptación clara.
 2. Errores del proceso que se descubren recién durante la operación.
 3. Bloqueos ante problemas inesperados o dependencia de una sola persona.
 4. Entregas rápidas acompañadas de defectos y retrabajo frecuentes.
- **Advertencia:** rapidez aislada no equivale a calidad.

### Slide 23. Problemas en el Proceso

**Texto visible**

- `Problemas en el Proceso`
- `Normalmente…`
- `Las especificaciones son incompletas o anómalas.`
- `No existe una distinción precisa entre la especificación, el diseño y la codificación.`
- `Solo hasta que el sistema se ha producido se puede probar.`
- `El software no siempre se puede remplazar durante el mantenimiento`

**Elementos visuales**

- Encabezado introductorio y lista de cuatro problemas.
- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** **Problemas en el Proceso:** el slide describe riesgos habituales del desarrollo, no resultados inevitables; por ejemplo, si en un sistema de facturación no se aclara una regla de cálculo y se prueba recién al final, se puede descubrir tarde un error que afecta los montos. **Normalmente:** la palabra indica que estos son problemas frecuentes; por ejemplo, en un proyecto de comercio electrónico, los retrasos suelen originarse en requisitos mal comprendidos. **Las especificaciones son incompletas o anómalas:** los requisitos suelen quedar ambiguos o con contradicciones; por ejemplo, en un hospital, dos áreas pueden pedir lo mismo de formas distintas. **No existe una distinción precisa entre la especificación, el diseño y la codificación:** las etapas se mezclan sin controles claros; por ejemplo, en una biblioteca, codificar sin separar el modelo de diseño produce inconsistencias. **Solo hasta que el sistema se ha producido se puede probar:** la prueba tardía concentra los errores al final; por ejemplo, en logística, probar todo el sistema de despacho al final encarece las correcciones. **El software no siempre se puede reemplazar durante el mantenimiento:** algunas piezas antiguas no pueden sustituirse sin romper el resto; por ejemplo, en un sistema gubernamental legado, una pieza antigua no puede reemplazarse sin interrumpir servicios esenciales. La prevención temprana conserva más opciones y reduce el impacto de corregir.
- **Reflexión docente:**
 - La prevención temprana no elimina todos los problemas, pero conserva más opciones y reduce el impacto de corregirlos.
- **Pregunta desafío:** ¿qué revisión temprana habría reducido el impacto?
- **Respuestas posibles:**
 1. Revisar requisitos con usuarios y responsables del negocio.
 2. Separar y revisar el modelo de diseño antes de codificar.
 3. Probar riesgos e integraciones antes de completar todo el sistema.
- **Advertencia:** estos son problemas habituales, no afirmaciones inevitables.

### Slide 24. Retos de los Ingenieros de Software

**Texto visible**

- `Retos de los Ingenieros de Software`
- `Mantener y tratar con sistemas legados; sistemas antiguos que deben ser mantenidos y mejorados`
- `Heterogeneidad: Sistemas que incluyen distintas plataformas de software y hardware`
- `Entrega: Existe una presión incremental por una entrega a tiempo de los productos de software`
- `Formalidad: Existe una gran demanda de que exista formalidad en el proceso de desarrollo de software`

**Elementos visuales**

- Lista de cuatro retos, con una explicación breve para cada uno.
- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** **Retos de los Ingenieros de Software:** el slide cierra la unidad con cuatro retos que combinan restricciones técnicas, organizacionales y profesionales; por ejemplo, un sistema de transporte legado puede tener que convivir con una aplicación móvil nueva sin detener la operación. **Mantener y tratar con sistemas legados:** sistemas antiguos que deben mantenerse y mejorarse; por ejemplo, en banca, el sistema central de cuentas sigue operando mientras se agregan servicios nuevos. **Heterogeneidad:** sistemas que incluyen distintas plataformas de software y hardware; por ejemplo, en comercio electrónico, la tienda web se integra con pasarelas de pago, bases de datos y servicios externos. **Entrega:** existe una presión incremental por una entrega a tiempo de los productos de software; por ejemplo, en logística, lanzar el seguimiento de paquetes antes de una temporada alta obliga a cumplir plazos. **Formalidad:** existe una gran demanda de formalidad en el proceso de desarrollo de software; por ejemplo, en salud, documentar cada cambio es obligatorio para poder auditar. Estos retos no se resuelven solo agregando código; la presión por entregar no elimina la responsabilidad de hacer visibles los riesgos y los límites.
- **Reflexión docente:**
 - La presión por entregar puede empujar atajos, pero no elimina la responsabilidad de hacer visibles riesgos y límites.
- **Pregunta desafío:** ¿qué riesgo investigarían primero?
- **Respuestas posibles:**
 1. Dependencias del sistema legado que podrían romperse con el cambio.
 2. Incompatibilidades entre plataformas, datos o integraciones.
 3. Un requisito crítico que no pueda validarse dentro del plazo.
 4. La ausencia de evidencia y formalidad para justificar la entrega.
- **Advertencia:** la presión por entregar no elimina la responsabilidad profesional.

### Slide 25. Cierre

**Texto visible**

- `Muchas gracias`
- `“Pues al igual que un arquitecto es esencial para construir una casa que no se venga abajo, un ingeniero del software es esencial para construir software eficiente, seguro y mantenible (que es el que la gente querrá usar).”`

**Elementos visuales**

- Título de cierre y un rectángulo destacado con la cita.
- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** **Muchas gracias:** el cierre agradece y retoma los temas centrales de la clase; por ejemplo, en una plataforma educativa, mantener confianza requiere cuidar disponibilidad, datos y facilidad de evolución. **“Pues al igual que un arquitecto es esencial para construir una casa que no se venga abajo, un ingeniero del software es esencial para construir software eficiente, seguro y mantenible (que es el que la gente querrá usar).”:** la cita usa la arquitectura como analogía para recordar que las decisiones estructurales afectan la estabilidad, la evolución y la forma de uso del software; por ejemplo, un sistema de reservas bien diseñado es claro, seguro y fácil de mantener, y por eso la gente sigue usándolo. La ingeniería busca que el software funcione hoy y siga siendo confiable mañana; la calidad profesional se mide también por el impacto en quienes dependen del sistema, no solo por si el código compila o la entrega llega a tiempo.
- **Reflexión docente:**
 - La calidad profesional se mide también por el impacto en quienes dependen del sistema, no solo por si el código compila o la entrega llega a tiempo.
- **Pregunta desafío:** ¿qué decisión de ingeniería hace que las personas quieran seguir usando el sistema?
- **Respuestas posibles:**
 1. Diseñar una experiencia comprensible y adecuada al contexto de uso.
 2. Proteger datos y operaciones mediante controles proporcionales al riesgo.
 3. Invertir en mantenibilidad para corregir y evolucionar sin degradar el servicio.
 4. Validar con evidencia que el sistema cumple lo que las personas necesitan.
- **Advertencia:** la analogía orienta la comprensión, pero no equipara literalmente ambas profesiones.

## Checklist de regeneración

- [ ] Mantener exactamente 25 slides y el orden 1–25.
- [ ] Conservar títulos, listas, definiciones, porcentajes, referencias y citas del inventario.
- [ ] Distinguir visualmente títulos, texto de contenido, jerarquías y bloques de citas.
- [ ] Recrear en el slide 19 la imagen de costos y eficiencia sin inventar valores ni etiquetas.
- [ ] Mantener el enlace del aula virtual como hipervínculo si el nuevo formato lo permite.
- [ ] No publicar la contraseña del slide 5 en HTML, CSS, JavaScript, Markdown versionado ni capturas públicas.
- [ ] No agregar notas del orador: la fuente no contiene notas por slide.
- [ ] Revisar en una exportación o render final que no se corte texto, especialmente en slides 8, 9, 13, 18, 20, 21 y 22.

## Verificación de fuente

La guía se construyó leyendo el paquete OOXML del PPTX: `ppt/presentation.xml`, `ppt/_rels/presentation.xml.rels`, `ppt/slides/slide1.xml` a `ppt/slides/slide25.xml`, sus relaciones y `ppt/media/image5.png`. La revisión del paquete no encontró `ppt/notesSlides/`, por lo que no hay notas de orador adicionales que incorporar.
