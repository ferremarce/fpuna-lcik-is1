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

- `INGENIERÍA DE SOFTWARE I`
- `Presentación de la Materia`
- `Prof. Lic. Guillermo Jacobo González Rodas Mst. PMP`

**Elementos visuales**

- Slide de apertura con un título principal en dos líneas, subtítulo y nombre del docente.
- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:**
 - Quiero presentar **Ingeniería de Software I** como una asignatura que estudia cómo producir y sostener software, no solamente cómo programarlo.
 - Usemos esta apertura para ubicar la **unidad** y el **contexto** de trabajo que vamos a desarrollar durante el curso.
- **Ejemplos:** **Global Exchange (conductor):** tomemos el curso como el mapa para construir un sistema de cambio de divisas, desde entender el problema hasta mantenerlo. **Segundo contexto industrial:** en un sistema de turnos hospitalarios, también necesitaremos organizar decisiones, roles y controles antes de escribir código.
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

- **Desarrollo:**
 - Fíjense en cómo la **trayectoria** combina Ingeniería de Software, **gestión de proyectos** y **consultoría TICs**; son perspectivas distintas sobre un mismo trabajo.
 - El objetivo es entender el contexto docente y reconocer que un proyecto necesita responsabilidades complementarias.
- **Ejemplos:** **Global Exchange (conductor):** para construir el sistema de cambio de divisas, la gestión de proyectos puede coordinar alcance, plazos y riesgos, mientras la consultoría aporta experiencia en implementación de sistemas empresariales. **Segundo contexto industrial:** en una plataforma educativa, una persona puede relevar necesidades de docentes y estudiantes, y otra organizar la entrega con el equipo.
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

- **Desarrollo:**
 - Veamos la **sección** y la distribución entre **horas teóricas** y **horas prácticas**: la teoría ayuda a construir conceptos y la práctica permite aplicarlos y revisarlos.
 - La carga indicada organiza la cursada; no reemplaza la responsabilidad de preparar, producir y justificar el trabajo.
- **Ejemplos:** **Global Exchange (conductor):** podemos usar una clase teórica para analizar requisitos del cambio de divisas y una práctica para modelar una operación concreta. **Segundo contexto industrial:** en logística, una actividad práctica podría representar el flujo de un pedido y detectar dónde falta información.
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

- **Desarrollo:**
 - Les propongo combinar **exposición**, **práctica**, trabajo en **equipo**, **defensa**, **foro** y **tutoría** como partes de un mismo proceso de aprendizaje.
 - La participación activa implica producir, recibir preguntas y revisar decisiones, no solo escuchar una explicación.
- **Ejemplos:** **Global Exchange (conductor):** un equipo puede presentar el flujo de una operación de cambio, defender sus supuestos en un foro y ajustar el modelo con tutoría. **Segundo contexto industrial:** en banca, un grupo podría justificar el flujo de una transferencia y responder qué controles aplicaría antes de liberarla.
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

- **Desarrollo:**
 - Fíjense en la **plataforma**, el nombre corto y el enlace del **aula virtual**; son datos para encontrar el espacio de trabajo y organizar el **acceso**.
 - La **seguridad** exige tratar cualquier credencial por un canal seguro, separado de la documentación pública y versionada.
- **Ejemplos:** **Global Exchange (conductor):** el aula puede centralizar el caso de cambio de divisas, sus entregas y las discusiones de equipo; el enlace identifica el espacio, pero la credencial no se comparte públicamente. **Segundo contexto industrial:** en un SaaS, una URL de administración puede documentarse, pero sus secretos deben gestionarse fuera del repositorio.
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

- **Desarrollo:**
 - Observen el recorrido: la **Unidad I** introduce la disciplina; luego estudiaremos **procesos**, **requerimientos** y **diseño**.
 - La secuencia va de comprender el problema y organizar el trabajo a decidir cómo construir una solución.
- **Ejemplos:** **Global Exchange (conductor):** primero entendemos el sistema de cambio de divisas, después acordamos qué debe hacer y recién entonces diseñamos su solución. **Segundo contexto industrial:** en salud, conviene relevar necesidades de pacientes y profesionales antes de diseñar un sistema de historias clínicas.
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

- **Desarrollo:**
 - Revisemos la composición: en los **parciales**, el **examen escrito** representa 30% y el **trabajo práctico** 70%; el **final** es un examen escrito sobre un **caso práctico**, 100%.
 - Un caso permite conectar conceptos, decisiones y justificaciones, no solo repetir definiciones.
- **Ejemplos:** **Global Exchange (conductor):** pueden justificar el diseño de una operación de cambio frente a un requisito de trazabilidad y luego analizar sus consecuencias en un caso escrito. **Segundo contexto industrial:** en transporte, un caso de asignación de viajes puede exigir explicar requisitos, riesgos y decisiones de diseño.
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

- **Desarrollo:**
 - Veamos la progresión del **caso práctico o proyecto**: un **equipo** de hasta cuatro integrantes construye evidencia mediante **requerimientos**, **casos de uso**, especificaciones y diagramas.
 - La `H` significa **Hito**: cada punto de control permite revisar una parte del trabajo antes de avanzar.
- **Ejemplos:** **Global Exchange (conductor):** H1 puede aclarar requerimientos de tasas y fondos; los hitos siguientes pueden modelar casos de uso, clases, secuencias, estados, actividades y despliegue. **Segundo contexto industrial:** en logística, un proyecto puede pasar de requisitos de despacho a casos de uso y diagramas del seguimiento de paquetes.
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

- **Desarrollo:**
 - Usemos esta **bibliografía** como conjunto de **fuentes de referencia** para ampliar conceptos y contrastar explicaciones.
 - Respetemos la **edición**, editorial y año que aparecen en el material; una actualización bibliográfica debe identificarse como tal.
- **Ejemplos:** **Global Exchange (conductor):** podemos buscar en las referencias criterios para discutir el proceso de un sistema de cambio de divisas, sin atribuir al material una explicación que no contiene. **Segundo contexto industrial:** para un sistema gubernamental legado, distintas fuentes pueden ayudar a comparar mantenibilidad, riesgos y gestión del proyecto.
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
- `UNIDAD I – INTRODUCCIÓN A LA INGENIERÍA DE SOFTWARE`
- `Prof. Lic. Guillermo Jacobo González Rodas Mst. PMP`

**Elementos visuales**

- Separador de unidad con título principal, nombre de la unidad y docente.
- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:**
 - Ahora pasemos de la organización del curso a la **Unidad I: Introducción a la Ingeniería de Software**.
 - En esta unidad vamos a construir el vocabulario para hablar de productos, procesos, costos, retos y **responsabilidad profesional**.
- **Ejemplos:** **Global Exchange (conductor):** usemos el sistema de cambio de divisas como caso para observar cómo una disciplina organiza decisiones más allá del código. **Segundo contexto industrial:** un sistema de transporte permite estudiar problemas similares de requisitos, operación, mantenimiento y evolución.
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

- **Desarrollo:**
 - Tomemos los **objetivos** como criterios de aceptación: debemos poder **definir** Ingeniería de Software, discutir **producto** y **proceso**, e introducir la **responsabilidad profesional**.
 - Al cierre, volvamos a ellos para comprobar si podemos explicar y aplicar cada idea.
- **Ejemplos:** **Global Exchange (conductor):** definamos producto y proceso a partir del sistema de cambio de divisas y discutamos qué responsabilidades aparecen al manejar fondos y auditoría. **Segundo contexto industrial:** en educación, una plataforma de evaluaciones exige pensar en confiabilidad, privacidad y consecuencias para sus usuarios.
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

- **Desarrollo:**
 - Observen el mapa: iremos de la **disciplina** a los **productos**, **costos**, **procesos** y **retos** de la Ingeniería de Software.
 - La secuencia organiza la conversación, pero los temas se conectan: el proceso influye en costos y los retos condicionan las decisiones.
- **Ejemplos:** **Global Exchange (conductor):** relacionemos el producto de cambio de divisas con su costo de desarrollo, el proceso de construcción y los retos de integrarlo con servicios externos. **Segundo contexto industrial:** en una solución de comercio, mantenimiento, volumen de usuarios y entregas pueden modificar tanto el proceso como el costo.
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

- **Desarrollo:**
 - Veamos la **Ingeniería de Software** como una disciplina que abarca la **especificación**, la **producción** y el **mantenimiento**.
 - Comparen las formulaciones del slide: unas enfatizan alcance y ciclo de vida; otras, **principios**, **métodos**, **herramientas**, **confiabilidad**, **eficiencia** y costo.
- **Ejemplos:** **Global Exchange (conductor):** para el sistema de cambio de divisas debemos especificar reglas, producir una solución, verificar operaciones y mantenerla cuando cambien las tasas o integraciones. **Segundo contexto industrial:** una aplicación de turnos médicos necesita esas mismas actividades para operar confiablemente y adaptarse a nuevas necesidades.
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

- **Desarrollo:**
 - Distingamos **productos genéricos**, producidos para comercializarse a varias organizaciones, de productos **hechos a medida**, desarrollados bajo pedido.
 - El slide señala una diferencia entre **gasto** y **esfuerzo**: debemos conservarla como comparación del material, no como una ley universal.
- **Ejemplos:** **Global Exchange (conductor):** una plataforma genérica de cambio puede servir a varias empresas, mientras una solución hecha a medida puede integrar reglas y sistemas particulares de una entidad financiera. **Segundo contexto industrial:** un hospital puede comprar un producto estándar o encargar un sistema adaptado a sus circuitos y regulaciones.
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

- **Desarrollo:**
 - Recorramos las características: **mantenibilidad** permite evolucionar, **confiabilidad** evita daños ante fallos, **eficiencia** cuida los recursos y **utilización adecuada** reúne interfaz y documentación apropiadas.
 - No las tratemos como etiquetas decorativas: cada una expresa una condición que debemos observar en el producto.
- **Ejemplos:** **Global Exchange (conductor):** el sistema debe adaptarse a nuevas tasas, manejar fallos sin afectar fondos, responder sin desperdiciar recursos y orientar correctamente a quien realiza una operación. **Segundo contexto industrial:** en un sistema de salud, confiabilidad y utilización adecuada pueden ser especialmente visibles en alertas, permisos y documentación para el personal.
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

- **Desarrollo:**
 - La importancia relativa de una característica depende del **tipo de producto** y del **ambiente** donde se usa.
 - En sistemas de **seguridad crítica** y **tiempo real**, el slide destaca confiabilidad y eficiencia; también advierte que exigir niveles altos puede elevar los **costos**.
- **Ejemplos:** **Global Exchange (conductor):** una operación financiera puede priorizar confiabilidad y trazabilidad, mientras una consulta pública de tasas puede tolerar otra combinación de atributos. **Segundo contexto industrial:** un sistema de control médico puede priorizar confiabilidad de forma distinta que una aplicación de entretenimiento.
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

- **Desarrollo:**
 - Clasifiquemos los productos por **estructura**, por **función** y por **plataforma de cómputo**; son tres ejes distintos.
 - Destaquemos términos como **orientado a objetos**, **componentes**, **web**, **embebido**, **distribuido** y **tiempo real** sin confundirlos entre sí.
- **Ejemplos:** **Global Exchange (conductor):** el sistema puede ser distribuido por su plataforma, orientado a componentes por su estructura y un sistema de usuario o web por su función. **Segundo contexto industrial:** una aplicación móvil de logística puede combinar una interfaz de usuario, bases de datos, servicios distribuidos y funciones de ubicación.
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

- **Desarrollo:**
 - Leamos las afirmaciones sobre **costos**: pueden dominar el costo del sistema, el **mantenimiento** puede superar al desarrollo y la Ingeniería de Software busca un desarrollo efectivo en costos.
 - El gráfico relaciona visualmente **costos** y **eficiencia**, pero no aporta valores ni una fórmula.
- **Ejemplos:** **Global Exchange (conductor):** una arquitectura difícil de cambiar puede volver costoso adaptar tasas, fondos o integraciones, aunque la primera versión haya sido rápida. **Segundo contexto industrial:** un sistema legado de transporte puede requerir más mantenimiento que desarrollo cuando cada cambio rompe integraciones antiguas.
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

- **Desarrollo:**
 - Definamos el **proceso de software** como un conjunto estructurado de actividades: **especificación**, **desarrollo**, **validación** y **evolución**.
 - Las actividades varían según la organización y el sistema; modelarlas explícitamente ayuda a administrarlas sin asumir que existe una receta única.
- **Ejemplos:** **Global Exchange (conductor):** especificamos reglas de cambio, desarrollamos la solución, validamos cálculos y evolucionamos el sistema cuando cambian tasas o servicios externos. **Segundo contexto industrial:** un sistema de turnos puede adaptar su proceso según la criticidad, privacidad y cantidad de integraciones.
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

- **Desarrollo:**
 - Recorramos el **proceso genérico**: establecer **requerimientos**, producir el **diseño**, realizar la **codificación**, ejecutar la **prueba**, completar la **instalación** y sostener el **mantenimiento**.
 - Cada actividad tiene un propósito distinto, aunque en la práctica podamos volver atrás con nueva evidencia.
- **Ejemplos:** **Global Exchange (conductor):** acordamos cómo se calcula una operación, modelamos la solución, codificamos, probamos fondos y pagos, instalamos y luego corregimos fallos. **Segundo contexto industrial:** en comercio electrónico, probar el checkout antes de instalarlo evita que una ambigüedad de requerimientos llegue a producción.
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

- **Desarrollo:**
 - Usemos estas preguntas como una lista de comprobación de **entendibilidad**, **visibilidad**, soporte, aceptación, **confiabilidad**, **robustez**, **mantenibilidad** y **rapidez**.
 - Cada característica observa un aspecto diferente del proceso; juntas permiten detectar debilidades antes de atribuirlas solo al producto.
- **Ejemplos:** **Global Exchange (conductor):** revisemos si el proceso hace visibles las decisiones sobre tasas, acepta a los roles involucrados, resiste fallos de pago y puede evolucionar con nuevas reglas. **Segundo contexto industrial:** en logística, un proceso puede ser rápido pero frágil si no hace visibles excepciones, dependencias o pruebas de entregas.
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

- **Desarrollo:**
 - Analicemos los problemas habituales: **especificaciones incompletas o anómalas**, poca distinción entre **especificación**, **diseño** y **codificación**, **prueba tardía** y dificultad para reemplazar software durante el **mantenimiento**.
 - La palabra “normalmente” importa: el slide describe riesgos frecuentes, no resultados inevitables.
- **Ejemplos:** **Global Exchange (conductor):** si no aclaramos una regla de conversión y recién probamos al final, podemos descubrir tarde que el sistema afecta saldos o auditoría. **Segundo contexto industrial:** en un sistema legado gubernamental, una pieza antigua puede no poder reemplazarse sin interrumpir servicios esenciales.
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

- **Desarrollo:**
 - Cerremos con cuatro retos: mantener **sistemas legados**, enfrentar la **heterogeneidad**, entregar a tiempo y responder a la demanda de **formalidad** en el proceso.
 - Estos retos combinan restricciones técnicas, organizacionales y profesionales; no se resuelven solo agregando código.
- **Ejemplos:** **Global Exchange (conductor):** integrar tasas, pagos y auditoría puede mezclar plataformas y servicios heterogéneos mientras el negocio exige una entrega puntual. **Segundo contexto industrial:** un sistema de transporte legado puede tener que convivir con una aplicación móvil nueva sin detener la operación.
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

- **Desarrollo:**
 - Cerremos retomando **eficiencia**, **seguridad**, **mantenibilidad** y **responsabilidad profesional**: la ingeniería busca que el software funcione hoy y siga siendo confiable mañana.
 - La cita usa la arquitectura como analogía para recordar que las decisiones estructurales afectan estabilidad, cambios y formas de uso.
- **Ejemplos:** **Global Exchange (conductor):** las personas querrán seguir usando el sistema si las operaciones son claras, seguras, eficientes y sostenibles ante cambios de tasas o integraciones. **Segundo contexto industrial:** en una plataforma educativa, mantener confianza requiere cuidar disponibilidad, datos y facilidad de evolución.
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
