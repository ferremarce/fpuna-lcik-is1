const slides = [
  {
    "title": "Ingeniería de Software I",
    "eyebrow": "01 · Apertura",
    "body": "<div class=\"card card--hero\"><p class=\"lede\">UNIDAD IV – CASOS DE USO Y ESPECIFICACIÓN DE CASOS DE USO</p><p>Prof. Lic. Guillermo Jacobo González Rodas Mst. PMP</p></div>",
    "note": "<strong>Desarrollo:</strong> **Ingeniería de Software I:** identifica la asignatura en la que se desarrolla el contenido, el contexto formativo en el que se abordan técnicas para construir software de calidad; por ejemplo, en un sistema de turnos hospitalarios, esta materia aporta las herramientas para describir formalmente los requisitos. **UNIDAD IV – CASOS DE USO Y ESPECIFICACIÓN DE CASOS DE USO:** presenta el núcleo temático de la clase, que se centra en cómo describir la interacción de los usuarios con el sistema; por ejemplo, en un hospital, definir cómo un paciente solicita un turno o cómo un médico consulta la agenda. **Prof. Ing. Julia Talavera:** identifica al docente a cargo, dato administrativo que sitúa la autoría de la presentación y orienta al estudiante sobre a quién recurrir ante dudas del material. La apertura de la unidad anticipa que los casos de uso conectan los requisitos con el diseño, describiendo el qué del sistema desde la perspectiva del usuario, y aclara que estos describen comportamiento y no implementación. <br><br><strong>Reflexión docente:</strong> Comprender casos de uso es el primer paso para construir software que responda a las necesidades reales. <br><br><strong>Pregunta desafío:</strong> ¿por qué son importantes los casos de uso en un proyecto de software? <br><br><strong>Respuestas posibles:</strong><br><br>• Porque definen qué debe hacer el sistema. <br>• Porque ayudan a evitar malentendidos entre clientes y desarrolladores. <br>• Porque son la base para la verificación y validación del producto. <br><br><strong>Advertencia:</strong> esta apertura contextualiza la unidad; aún no definimos conceptos técnicos."
  },
  {
    "title": "OBJETIVOS",
    "eyebrow": "02 · Objetivos",
    "body": "<div class=\"card-grid card-grid--3\"><div class=\"card card--num\"><span class=\"number\">01</span><p>Comprender qué son los casos de uso y por qué son importantes.</p></div><div class=\"card card--num\"><span class=\"number\">02</span><p>Familiarizarse con los diagramas de caso de uso y relaciones.</p></div><div class=\"card card--num\"><span class=\"number\">03</span><p>Conocer una plantilla estándar para especificación de casos de uso.</p></div></div>",
    "note": "<strong>Desarrollo:</strong> **OBJETIVOS:** anuncia que el slide presenta las metas de aprendizaje de la unidad, es decir, qué se espera que el estudiante logre al finalizar; por ejemplo, en un sistema de inventario, el objetivo sería poder describir las operaciones del almacén. **Comprender qué son los casos de uso y por qué son importantes:** implica entender el concepto y su utilidad; por ejemplo, saber que «Registrar entrada de mercadería» es un caso de uso que define una tarea del encargado de inventario. **Familiarizarse con los diagramas de caso de uso y relaciones:** busca que el estudiante pueda dibujar e interpretar actores, casos y vínculos como inclusión y extensión; por ejemplo, representar que «Registrar entrada» se asocia con el actor «Encargado». **Conocer una plantilla estándar para especificación de casos de uso:** apunta a manejar un formato uniforme que detalle actores, precondiciones, flujos y postcondiciones; por ejemplo, redactar la especificación de «Registrar entrada de mercadería». Los objetivos estructuran la unidad en tres momentos: definir, diagramar y especificar. <br><br><strong>Reflexión docente:</strong> Los objetivos son evaluable; dominarlos es clave para el parcial. <br><br><strong>Pregunta desafío:</strong> ¿cómo demostrarían que pueden aplicar los casos de uso a un caso real? <br><br><strong>Respuestas posibles:</strong><br><br>• Definiendo requerimientos claros y verificables. <br>• Clasificando funcionalidades en requerimientos funcionales y no funcionales. <br>• Usando técnicas de obtención como entrevistas y observación. <br><br><strong>Advertencia:</strong> distingan conocer una definición de aplicarla a un caso."
  },
  {
    "title": "CONTENIDO",
    "eyebrow": "03 · Recorrido",
    "body": "<div class=\"sequence-card\" aria-label=\"Recorrido de la unidad\"><div class=\"sequence-step\"><span class=\"sequence-index\">01</span><strong>Casos de Uso</strong></div><div class=\"sequence-step\"><span class=\"sequence-index\">02</span><strong>Diagrama de Casos de Uso</strong></div><div class=\"sequence-step\"><span class=\"sequence-index\">03</span><strong>Actores</strong></div><div class=\"sequence-step\"><span class=\"sequence-index\">04</span><strong>Relaciones</strong></div><div class=\"sequence-step\"><span class=\"sequence-index\">05</span><strong>Especificación de Casos de Uso</strong></div><div class=\"sequence-step\"><span class=\"sequence-index\">06</span><strong>Plantilla Estándar</strong></div></div>",
    "note": "<strong>Desarrollo:</strong> **CONTENIDO:** introduce el mapa temático de la unidad, ordenando los temas que se desarrollarán a continuación. **Casos de Uso:** primer concepto, la técnica para describir la interacción usuario-sistema; por ejemplo, en un foro académico, «Publicar mensaje». **Diagrama de Casos de Uso:** la representación gráfica de actores y casos; por ejemplo, dibujar al estudiante conectado a «Publicar mensaje». **Actores:** los usuarios o sistemas externos que interactúan con el sistema y se ubican fuera de sus límites; por ejemplo, el estudiante en el foro. **Relaciones:** los vínculos entre actores y casos, y entre casos entre sí; por ejemplo, la inclusión o la extensión entre funcionalidades del foro. **Especificación de Casos de Uso:** el detalle textual de cada caso con su flujo principal y alternativo; por ejemplo, los pasos para publicar un mensaje. **Plantilla Estándar:** el formato uniforme que estructura la especificación; por ejemplo, campos fijos como actor, precondiciones y postcondiciones. La unidad sigue una progresión que va del concepto al diagrama y de allí a la especificación, y el recorrido se profundiza en los slides siguientes. <br><br><strong>Reflexión docente:</strong> CONTENIDO es fundamental para la calidad del software. <br><br><strong>Pregunta desafío:</strong> ¿por qué es importante contenido? <br><br><strong>Respuestas posibles:</strong><br><br>• Porque ayuda a definir qué debe hacer el sistema. <br>• Porque facilita la comunicación entre clientes y desarrolladores. <br>• Porque es la base para la verificación y validación. <br><br><strong>Advertencia:</strong> no confundir conceptos teóricos con su aplicación práctica."
  },
  {
    "title": "¿Qué es un Caso de Uso?",
    "eyebrow": "04 · Definición",
    "body": "<div class=\"card\"><p>Un caso de uso es una <strong>técnica</strong> utilizada en el diseño de sistemas de software para describir <strong>cómo un usuario interactúa con un sistema</strong> para lograr una tarea o función específica.</p></div><div class=\"card-grid card-grid--2\" style=\"margin-top: 1rem;\"><div class=\"card card--num\"><span class=\"number\">01</span><p>Conjunto de escenarios que tienen una meta de usuario en común.</p></div><div class=\"card card--num\"><span class=\"number\">02</span><p>Descripción de un proceso de inicio a fin, relativamente largo, que incluye varias etapas o transacciones.</p></div><div class=\"card card--num\"><span class=\"number\">03</span><p>Presenta un uso particular del sistema.</p></div><div class=\"card card--num\"><span class=\"number\">04</span><p>Describe una funcionalidad del sistema.</p></div></div><div class=\"card\" style=\"margin-top: 1rem;\"><p>AYUDA a definir los <strong>límites del sistema</strong>, y las relaciones entre el sistema y su entorno.</p></div>",
    "note": "<strong>Desarrollo:</strong> **¿Qué es un Caso de Uso?:** plantea la pregunta que guía el slide y abre la definición del concepto. **Un caso de uso es una técnica utilizada en el diseño de sistemas de software para describir cómo un usuario interactúa con un sistema para lograr una tarea o función específica:** esta definición señala que el caso de uso narra la interacción completa; por ejemplo, en un banco, «Abrir cuenta» describe los pasos que sigue el cliente con el sistema. **Conjunto de escenarios que tienen una meta de usuario en común:** un caso puede reunir varias variantes que comparten el mismo objetivo; por ejemplo, abrir una cuenta personal o conjunta. **Descripción de un proceso de inicio a fin, relativamente largo, que incluye varias etapas o transacciones:** el caso recorre todo el proceso; por ejemplo, desde que el cliente se identifica hasta que recibe la confirmación de apertura. **Presenta un uso particular del sistema:** cada caso muestra una forma específica de usarlo; por ejemplo, consultar el saldo. **Describe a una funcionalidad del sistema:** expresa qué hace el sistema para el usuario; por ejemplo, validar los datos de la cuenta. **AYUDA a definir los límites del sistema, y las relaciones entre el sistema y su entorno:** delimita qué queda dentro y qué fuera; por ejemplo, el cajero está fuera y el proceso de apertura, dentro. <br><br><strong>Reflexión docente:</strong> ¿Qué es un Caso de Uso? es fundamental para la calidad del software. <br><br><strong>Pregunta desafío:</strong> ¿por qué es importante ¿qué es un caso de uso?? <br><br><strong>Respuestas posibles:</strong><br><br>• Porque ayuda a definir qué debe hacer el sistema. <br>• Porque facilita la comunicación entre clientes y desarrolladores. <br>• Porque es la base para la verificación y validación. <br><br><strong>Advertencia:</strong> no confundir conceptos teóricos con su aplicación práctica."
  },
  {
    "title": "Casos de Uso",
    "eyebrow": "05 · Formas de describir",
    "body": "<div class=\"card\"><p><strong>Formas de describir:</strong> Diagramas de Casos de Uso y Especificación de Casos de Uso.</p></div><div class=\"card\" style=\"margin-top: 1rem;\"><img class=\"figure-img\" src=\"assets/casos-de-uso-681f53b4.png\" alt=\"Diagrama de casos de uso\" style=\"display:block;max-width:100%;height:auto;\"></div><div class=\"card\" style=\"margin-top: 1rem;\"><img class=\"figure-img\" src=\"assets/casos-de-uso-1500db9c.png\" alt=\"Especificación de casos de uso\" style=\"display:block;max-width:100%;height:auto;\"></div>",
    "note": "<strong>Desarrollo:</strong> **Casos de Uso:** título del tema que se está desarrollando y que sirve de marco para el slide. **Formas de describir:** introduce la idea central de que los casos de uso pueden representarse de dos maneras complementarias; por ejemplo, en un sistema de turnos hospitalarios, la descripción del caso «Solicitar turno». **Diagramas de Casos de Uso:** la primera forma, una vista general y gráfica que muestra actores, casos y relaciones; la primera imagen del slide ilustra este diagrama, por ejemplo, con el paciente conectado al caso «Solicitar turno» mediante una línea de asociación. **Especificación de Casos de Uso:** la segunda forma, el detalle textual del flujo paso a paso; la segunda imagen muestra ese formato, por ejemplo, con precondiciones, flujo principal y alternativo del mismo caso. El diagrama da la visión panorámica y la especificación entrega el detalle, por lo que ambas son complementarias: conviene empezar con el diagrama para acordar el alcance y luego especificar el detalle. <br><br><strong>Reflexión docente:</strong> Las imágenes facilitan la comprensión de conceptos abstractos. <br><br><strong>Pregunta desafío:</strong> ¿cómo aplicarían este concepto a un sistema real? <br><br><strong>Respuestas posibles:</strong><br><br>• Analizando las necesidades del usuario. <br>• Documentando los casos de uso de manera clara. <br>• Validando con el cliente antes de implementar. <br><br><strong>Advertencia:</strong> las imágenes son representaciones; la práctica requiere adaptación al contexto."
  },
  {
    "title": "Cómo preparar Casos de Uso",
    "eyebrow": "06 · Preparación",
    "body": "<img class=\"figure-img\" src=\"assets/cómo-preparar-casos-de-uso-41793d90.png\" alt=\"Cómo preparar casos de uso\" style=\"display: block; margin: 0 auto;\">",
    "note": "<strong>Desarrollo:</strong> **Cómo preparar Casos de Uso:** el título plantea el proceso previo a escribir los casos, y la imagen de apoyo resume visualmente los pasos para prepararlos. Preparar un caso de uso requiere, en primer lugar, identificar los actores que intervienen y sus metas; por ejemplo, en un hospital, reconocer a pacientes, médicos y administrativos, y aclarar qué busca lograr cada uno, como pedir un turno o revisar la agenda. En segundo lugar, hay que definir el flujo principal, es decir, la secuencia normal de pasos que ocurre cuando todo sale bien; por ejemplo, el paciente elige la fecha y el sistema confirma el turno. En tercer lugar, conviene establecer las alternativas y excepciones, es decir, qué sucede cuando algo varía, como que la fecha esté ocupada y el sistema ofrezca otra opción. La imagen condensa este proceso de preparación y sirve como guía visual para recordar que antes de redactar un caso de uso se deben identificar actores y metas, definir el flujo principal y plantear las alternativas. <br><br><strong>Reflexión docente:</strong> Las imágenes facilitan la comprensión de conceptos abstractos. <br><br><strong>Pregunta desafío:</strong> ¿cómo aplicarían este concepto a un sistema real? <br><br><strong>Respuestas posibles:</strong><br><br>• Analizando las necesidades del usuario. <br>• Documentando los casos de uso de manera clara. <br>• Validando con el cliente antes de implementar. <br><br><strong>Advertencia:</strong> las imágenes son representaciones; la práctica requiere adaptación al contexto."
  },
  {
    "title": "Proceso de Casos de Uso",
    "eyebrow": "07 · Proceso",
    "body": "<img class=\"figure-img\" src=\"assets/proceso-de-casos-de-uso-99642e4d.png\" alt=\"Proceso de casos de uso\" style=\"display: block; margin: 0 auto;\">",
    "note": "<strong>Desarrollo:</strong> **Proceso de Casos de Uso:** el título anuncia que el slide presenta las etapas ordenadas para construir los casos de uso, y la imagen de apoyo ilustra dicho proceso. El proceso guía la construcción ordenada de los casos de uso desde cero; por ejemplo, en un sistema de inventario, empezar por reconocer quiénes usan el almacén. La primera etapa consiste en identificar actores y metas, como el encargado que registra entradas y salidas. La segunda etapa es describir los flujos, es decir, narrar paso a paso cada interacción, como la secuencia para registrar una entrada de mercadería. La tercera etapa es especificar y validar: completar la plantilla con precondiciones, flujos alternativos y postcondiciones, y confirmar con los interesados que la descripción es correcta; por ejemplo, revisar con el encargado que el flujo coincida con la realidad del depósito. La imagen muestra el proceso de forma sintética, y sus etapas se detallan en los slides siguientes. <br><br><strong>Reflexión docente:</strong> Las imágenes facilitan la comprensión de conceptos abstractos. <br><br><strong>Pregunta desafío:</strong> ¿cómo aplicarían este concepto a un sistema real? <br><br><strong>Respuestas posibles:</strong><br><br>• Analizando las necesidades del usuario. <br>• Documentando los casos de uso de manera clara. <br>• Validando con el cliente antes de implementar. <br><br><strong>Advertencia:</strong> las imágenes son representaciones; la práctica requiere adaptación al contexto."
  },
  {
    "title": "Diagrama de Casos de Uso",
    "eyebrow": "08 · Elementos",
    "body": "<div class=\"card-grid card-grid--2\"><div class=\"card card--num\"><span class=\"number\">01</span><h3>Límites del Sistema</h3><p>El recuadro que encierra los casos de uso.</p></div><div class=\"card card--num\"><span class=\"number\">02</span><h3>Actores</h3><p>Usuarios o sistemas externos que interactúan.</p></div><div class=\"card card--num\"><span class=\"number\">03</span><h3>Casos de Uso</h3><p>Funcionalidades que el sistema ofrece.</p></div><div class=\"card card--num\"><span class=\"number\">04</span><h3>Relaciones</h3><p>Asociación, generalización/especialización, inclusión y extensión.</p></div></div>",
    "note": "<strong>Desarrollo:</strong> **Diagrama de Casos de Uso:** es la representación gráfica que organiza actores, casos y relaciones, y sirve de marco para todo el slide. **Límites del Sistema:** el rectángulo que delimita qué queda dentro del sistema y qué fuera; por ejemplo, en un sistema de inventario, el proceso de registrar entradas está dentro y el proveedor queda fuera. **Actores:** los usuarios o sistemas externos que interactúan con el sistema; por ejemplo, el actor «Encargado» que registra entradas. **Casos de Uso:** las funcionalidades que el sistema ofrece a los actores; por ejemplo, «Registrar entrada». **Relaciones:** los vínculos entre actores y casos, y entre casos entre sí. **Asociación:** la línea que conecta un actor con el caso que ejecuta; por ejemplo, el «Encargado» asociado a «Registrar entrada». **Generalización/especialización:** vincula un elemento general con variantes específicas; por ejemplo, un caso genérico «Gestionar stock» con las variantes «Registrar entrada» y «Registrar salida». **Inclusión:** un caso incorpora el comportamiento común de otro; por ejemplo, «Registrar entrada» incluye «Validar usuario». **Extensión:** agrega comportamiento opcional bajo condiciones; por ejemplo, «Registrar entrada» se extiende con «Notificar proveedor» cuando el stock es bajo. <br><br><strong>Reflexión docente:</strong> Diagrama de Casos de Uso es fundamental para la calidad del software. <br><br><strong>Pregunta desafío:</strong> ¿por qué es importante diagrama de casos de uso? <br><br><strong>Respuestas posibles:</strong><br><br>• Porque ayuda a definir qué debe hacer el sistema. <br>• Porque facilita la comunicación entre clientes y desarrolladores. <br>• Porque es la base para la verificación y validación. <br><br><strong>Advertencia:</strong> no confundir conceptos teóricos con su aplicación práctica."
  },
  {
    "title": "Diagrama de Casos de Uso",
    "eyebrow": "09 · Notación",
    "body": "<img class=\"figure-img\" src=\"assets/diagrama-cu-notacion.svg\" alt=\"Notación de diagrama de casos de uso: actor, caso de uso dentro del sistema y asociación\" style=\"display: block; margin: 0 auto;\">",
    "note": "<strong>Desarrollo:</strong> **Diagrama de Casos de Uso:** el título indica que el slide se ocupa del lenguaje visual del diagrama; la imagen es una representación conceptual en SVG de la notación básica, ya que el original era un archivo WMF. **actor:** se representa con la figura de palo, un muñeco de líneas, y designa a quien interactúa con el sistema desde fuera; por ejemplo, en un sistema de inventario, el «Encargado» es un actor y se dibuja fuera del límite del sistema. **caso de uso:** se representa con una elipse con su nombre adentro y describe una funcionalidad del sistema; por ejemplo, «Registrar entrada» se dibuja como una elipse dentro del rectángulo del sistema. **asociacion:** se representa con una línea continua que conecta al actor con el caso de uso que ejecuta; por ejemplo, la línea que une al «Encargado» con «Registrar entrada». Esta notación es el idioma visual del diagrama de casos de uso: la figura de palo identifica a los actores, la elipse a los casos y la línea expresa la asociación entre ambos. <br><br><strong>Reflexión docente:</strong> Las imágenes facilitan la comprensión de conceptos abstractos. <br><br><strong>Pregunta desafío:</strong> ¿cómo aplicarían este concepto a un sistema real? <br><br><strong>Respuestas posibles:</strong><br><br>• Analizando las necesidades del usuario. <br>• Documentando los casos de uso de manera clara. <br>• Validando con el cliente antes de implementar. <br><br><strong>Advertencia:</strong> las imágenes son representaciones; la práctica requiere adaptación al contexto."
  },
  {
    "title": "Casos de Uso “Crear mensaje en el foro”",
    "eyebrow": "10 · Ejemplo",
    "body": "<img class=\"figure-img\" src=\"assets/casos-de-uso--crear-mensaje-en-52e4da52.png\" alt=\"Casos de uso «Crear mensaje en el foro»\" style=\"display: block; margin: 0 auto;\">",
    "note": "<strong>Desarrollo:</strong> **Casos de Uso “Crear mensaje en el foro”:** el slide presenta un ejemplo concreto de caso de uso con su diagrama, ilustrado en la imagen. El caso describe la interacción de un participante con el sistema de foro para publicar un mensaje nuevo; por ejemplo, un estudiante que desea plantear una duda en el foro académico. El diagrama muestra al actor conectado al caso: el estudiante, representado con la figura de palo, se asocia mediante una línea al caso «Crear mensaje en el foro», dibujado como una elipse dentro de los límites del sistema. También participan otros actores, como el propio sistema, que almacena y muestra el mensaje, u otros usuarios que podrían responder. El ejemplo es análogo a cualquier caso de registro de contenido: en un sistema de mensajería, el caso equivalente sería «Publicar mensaje», y en un sistema de turnos, «Solicitar turno». La imagen ilustra el diagrama completo del caso y sirve para ver cómo se aplica la notación a una funcionalidad concreta. <br><br><strong>Reflexión docente:</strong> Las imágenes facilitan la comprensión de conceptos abstractos. <br><br><strong>Pregunta desafío:</strong> ¿cómo aplicarían este concepto a un sistema real? <br><br><strong>Respuestas posibles:</strong><br><br>• Analizando las necesidades del usuario. <br>• Documentando los casos de uso de manera clara. <br>• Validando con el cliente antes de implementar. <br><br><strong>Advertencia:</strong> las imágenes son representaciones; la práctica requiere adaptación al contexto."
  },
  {
    "title": "Casos de Uso – Relación Include",
    "eyebrow": "11 · Relación Include",
    "body": "<img class=\"figure-img\" src=\"assets/casos-de-uso---relación-includ-497e56f0.png\" alt=\"Relación Include\" style=\"display: block; margin: 0 auto;\">",
    "note": "<strong>Desarrollo:</strong> **Casos de Uso – Relación Include:** el título presenta la relación de inclusión entre casos de uso, y la imagen del slide ilustra cómo se representa en el diagrama. La relación «include» indica que un caso de uso incluye el comportamiento común de otro: el caso base incorpora, de forma obligatoria, el comportamiento del caso incluido; por ejemplo, «Realizar pedido» incluye «Validar pago», porque todo pedido debe pasar por la validación del pago. La flecha de include es una línea discontinua con el estereotipo ««include»» sobre ella y la punta apuntando desde el caso base hacia el caso incluido; por ejemplo, la flecha va de «Realizar pedido» hacia «Validar pago». Conviene usar include cuando hay comportamiento compartido entre varios casos, para evitar la duplicación; por ejemplo, si varios casos requieren autenticación, todos incluyen «Validar usuario». También se usa cuando un caso siempre utiliza a otro en su flujo. La imagen resume este patrón: el caso base incorpora el comportamiento del incluido en cada ocasión. <br><br><strong>Reflexión docente:</strong> Las imágenes facilitan la comprensión de conceptos abstractos. <br><br><strong>Pregunta desafío:</strong> ¿cómo aplicarían este concepto a un sistema real? <br><br><strong>Respuestas posibles:</strong><br><br>• Analizando las necesidades del usuario. <br>• Documentando los casos de uso de manera clara. <br>• Validando con el cliente antes de implementar. <br><br><strong>Advertencia:</strong> las imágenes son representaciones; la práctica requiere adaptación al contexto."
  },
  {
    "title": "Casos de Uso – Relación Extend",
    "eyebrow": "12 · Relación Extend",
    "body": "<img class=\"figure-img\" src=\"assets/casos-de-uso---relación-extend-dca38492.png\" alt=\"Relación Extend\" style=\"display: block; margin: 0 auto;\">",
    "note": "<strong>Desarrollo:</strong> **Casos de Uso – Relación Extend:** el título presenta la relación de extensión entre casos de uso, y la imagen del slide ilustra su representación. La relación «extend» agrega comportamiento opcional al caso base, que solo se ejecuta cuando se cumple una condición específica; por ejemplo, «Realizar pedido» se extiende con «Adjuntar archivos» cuando el cliente desea incluir documentación. La flecha de extend es discontinua, lleva el estereotipo ««extend»» y apunta desde el caso que agrega el comportamiento hacia el caso base que se extiende; por ejemplo, la flecha va de «Adjuntar archivos» hacia «Realizar pedido». A diferencia de include, que es obligatorio y comparte comportamiento, extend es opcional y se activa bajo condiciones; por ejemplo, en un sistema de turnos, «Solicitar turno» se extiende con «Cancelar turno» solo si el paciente decide cancelarlo. La imagen muestra este patrón: el caso base permanece completo sin la extensión, y la extensión se suma únicamente cuando la condición la dispara. <br><br><strong>Reflexión docente:</strong> Las imágenes facilitan la comprensión de conceptos abstractos. <br><br><strong>Pregunta desafío:</strong> ¿cómo aplicarían este concepto a un sistema real? <br><br><strong>Respuestas posibles:</strong><br><br>• Analizando las necesidades del usuario. <br>• Documentando los casos de uso de manera clara. <br>• Validando con el cliente antes de implementar. <br><br><strong>Advertencia:</strong> las imágenes son representaciones; la práctica requiere adaptación al contexto."
  },
  {
    "title": "Mal uso de las relaciones",
    "eyebrow": "13 · Mal uso",
    "body": "<img class=\"figure-img\" src=\"assets/mal-uso-de-las-relaciones-b8d67889.png\" alt=\"Mal uso de las relaciones\" style=\"display: block; margin: 0 auto;\">",
    "note": "<strong>Desarrollo:</strong> **Mal uso de las relaciones:** el título advierte sobre errores frecuentes al aplicar relaciones entre casos de uso, y la imagen del slide muestra ejemplos de esos errores. Un uso incorrecto genera modelos confusos y difíciles de mantener; por ejemplo, usar extend para comportamiento obligatorio, como si «Consultar catálogo» se extendiera con «Ver precios», cuando ver los precios es parte esencial de consultar. Otro error es incluir casos sin comportamiento común, empleando include solo porque dos casos se parecen, lo que duplica esfuerzo sin aportar claridad; por ejemplo, forzar una inclusión entre «Registrar cliente» y «Registrar proveedor» cuando no comparten pasos. También se abusa al sobrecargar el diagrama con relaciones innecesarias que lo hacen ilegible, por ejemplo, conectando cada caso con todos los demás. La imagen ilustra estos anti-patrones para reconocerlos y evitarlos: conviene preguntarse si el comportamiento realmente se comparte (include), si es realmente opcional (extend) o si la relación añade valor a la comprensión del modelo. <br><br><strong>Reflexión docente:</strong> Las imágenes facilitan la comprensión de conceptos abstractos. <br><br><strong>Pregunta desafío:</strong> ¿cómo aplicarían este concepto a un sistema real? <br><br><strong>Respuestas posibles:</strong><br><br>• Analizando las necesidades del usuario. <br>• Documentando los casos de uso de manera clara. <br>• Validando con el cliente antes de implementar. <br><br><strong>Advertencia:</strong> las imágenes son representaciones; la práctica requiere adaptación al contexto."
  },
  {
    "title": "Especificación de Casos de Uso",
    "eyebrow": "14 · Especificación",
    "body": "<img class=\"figure-img\" src=\"assets/especificación-de-casos-de-uso-0282e4d5.png\" alt=\"Especificación de casos de uso\" style=\"display: block; margin: 0 auto;\">",
    "note": "<strong>Desarrollo:</strong> **Especificación de Casos de Uso:** el título presenta la forma textual de detallar cada caso de uso, y la imagen del slide muestra el formato de especificación. La especificación complementa al diagrama con el detalle escrito: mientras el diagrama ofrece una vista general, la especificación describe el caso paso a paso; por ejemplo, en un sistema de turnos hospitalarios, especificar el caso «Solicitar turno». El formato típico incluye campos como el actor que participa, las precondiciones que deben cumplirse antes de comenzar, el flujo principal con la secuencia normal de pasos entre el actor y el sistema, los flujos alternativos para las variantes y excepciones, y las postcondiciones que describen el estado al finalizar; por ejemplo, para «Solicitar turno», el actor es el paciente, la precondición es estar registrado y la postcondición es tener el turno confirmado. La imagen del slide muestra esta estructura de especificación y sirve de guía para redactar la de cualquier caso concreto de otros dominios, como registrar una entrada de mercadería o abrir una cuenta bancaria. <br><br><strong>Reflexión docente:</strong> Las imágenes facilitan la comprensión de conceptos abstractos. <br><br><strong>Pregunta desafío:</strong> ¿cómo aplicarían este concepto a un sistema real? <br><br><strong>Respuestas posibles:</strong><br><br>• Analizando las necesidades del usuario. <br>• Documentando los casos de uso de manera clara. <br>• Validando con el cliente antes de implementar. <br><br><strong>Advertencia:</strong> las imágenes son representaciones; la práctica requiere adaptación al contexto."
  },
  {
    "title": "Especificación de Casos de Uso",
    "eyebrow": "15 · Especificación",
    "body": "<img class=\"figure-img\" src=\"assets/especificación-de-casos-de-uso-c9a0752c.png\" alt=\"Especificación de casos de uso\" style=\"display: block; margin: 0 auto;\">",
    "note": "<strong>Desarrollo:</strong> **Especificación de Casos de Uso:** el título continúa presentando la especificación como detalle textual del caso, y la imagen del slide complementa el formato visto anteriormente. Esta vista profundiza en el contenido de cada campo de la plantilla; por ejemplo, en un sistema de inventario, la especificación de «Registrar entrada de mercadería». En el flujo principal se documenta la secuencia normal de pasos: las acciones del actor y las respuestas del sistema; por ejemplo, el encargado ingresa el producto, el sistema valida el código, el encargado confirma la cantidad y el sistema actualiza el stock. Las precondiciones describen lo que debe existir antes, como estar autenticado, y las postcondiciones el estado resultante, como el stock incrementado. El flujo alternativo cubre las variantes, por ejemplo, que el código del producto no exista y el sistema ofrezca crearlo. La imagen complementa el formato de especificación mostrando cómo se completa cada campo, y sirve para detallar cualquier caso de otros dominios, como la solicitud de un turno o la publicación de un mensaje en un foro, asegurando que la secuencia quede clara para quien implementa o prueba. <br><br><strong>Reflexión docente:</strong> Las imágenes facilitan la comprensión de conceptos abstractos. <br><br><strong>Pregunta desafío:</strong> ¿cómo aplicarían este concepto a un sistema real? <br><br><strong>Respuestas posibles:</strong><br><br>• Analizando las necesidades del usuario. <br>• Documentando los casos de uso de manera clara. <br>• Validando con el cliente antes de implementar. <br><br><strong>Advertencia:</strong> las imágenes son representaciones; la práctica requiere adaptación al contexto."
  },
  {
    "title": "Especificación de Casos de Uso",
    "eyebrow": "16 · Especificación",
    "body": "<img class=\"figure-img\" src=\"assets/especificación-de-casos-de-uso-8dd970c7.png\" alt=\"Especificación de casos de uso\" style=\"display: block; margin: 0 auto;\">",
    "note": "<strong>Desarrollo:</strong> **Especificación de Casos de Uso:** el título presenta la continuación de la serie de especificación, y la imagen del slide completa el formato mostrado. La especificación es iterativa: se redacta, se revisa y se ajusta, y suele validarse junto con el cliente o los interesados; por ejemplo, en un sistema de mensajería, revisar con los usuarios la especificación de «Enviar mensaje». La validación puede hacerse repasando los pasos con el cliente para confirmar que coinciden con la realidad del negocio, mediante pruebas que verifiquen que el sistema cumple lo especificado, o con trazabilidad que conecte cada caso con sus requisitos; por ejemplo, rastrear de qué requerimiento proviene «Enviar mensaje» y qué casos lo usan. La imagen completa la serie de especificación mostrando ejemplos adicionales del mismo formato, lo que permite comparar cómo se documentan distintos casos. La especificación no es un producto terminado a la primera: se va refinando en cada iteración y se confirma con los interesados, garantizando que el detalle textual sea la base confiable para el diseño, la implementación y las pruebas. <br><br><strong>Reflexión docente:</strong> Las imágenes facilitan la comprensión de conceptos abstractos. <br><br><strong>Pregunta desafío:</strong> ¿cómo aplicarían este concepto a un sistema real? <br><br><strong>Respuestas posibles:</strong><br><br>• Analizando las necesidades del usuario. <br>• Documentando los casos de uso de manera clara. <br>• Validando con el cliente antes de implementar. <br><br><strong>Advertencia:</strong> las imágenes son representaciones; la práctica requiere adaptación al contexto."
  },
  {
    "title": "Especificación de CU “Crear mensaje en el foro”",
    "eyebrow": "17 · Especificación CU",
    "body": "<img class=\"figure-img\" src=\"assets/especificación-de-cu--crear-me-e338dd57.png\" alt=\"Especificación de CU «Crear mensaje en el foro»\" style=\"display: block; margin: 0 auto;\">",
    "note": "<strong>Desarrollo:</strong> **Especificación de CU “Crear mensaje en el foro”:** el slide presenta la aplicación de la plantilla estándar a un caso concreto, ilustrada en la imagen, que muestra la especificación completa del caso. En la especificación se registran el actor principal, el estudiante que desea publicar un mensaje en el foro académico, y las precondiciones, como estar autenticado en el sistema. El flujo principal detalla la secuencia normal: el estudiante redacta el mensaje, el sistema valida el contenido, el estudiante confirma la publicación y el sistema almacena y muestra el mensaje. El flujo alternativo cubre las variantes, por ejemplo, que el mensaje esté vacío y el sistema solicite completarlo, o que el título supere la longitud permitida. Las postcondiciones describen el estado final, como el mensaje publicado y visible para el resto de participantes. La imagen muestra la especificación completa con todos estos elementos de la plantilla, y el ejemplo es análogo a especificar cualquier caso de creación de contenido, como publicar una entrada en un blog o registrar una nueva mercadería en el inventario. <br><br><strong>Reflexión docente:</strong> Las imágenes facilitan la comprensión de conceptos abstractos. <br><br><strong>Pregunta desafío:</strong> ¿cómo aplicarían este concepto a un sistema real? <br><br><strong>Respuestas posibles:</strong><br><br>• Analizando las necesidades del usuario. <br>• Documentando los casos de uso de manera clara. <br>• Validando con el cliente antes de implementar. <br><br><strong>Advertencia:</strong> las imágenes son representaciones; la práctica requiere adaptación al contexto."
  },
  {
    "title": "Especificación de CU “Crear mensaje en el foro”",
    "eyebrow": "18 · Especificación CU",
    "body": "<img class=\"figure-img\" src=\"assets/especificación-de-cu--crear-me-d4d334c3.png\" alt=\"Especificación de CU «Crear mensaje en el foro»\" style=\"display: block; margin: 0 auto;\">",
    "note": "<strong>Desarrollo:</strong> **Especificación de CU “Crear mensaje en el foro”:** el título presenta el detalle de la especificación del caso, y la imagen completa la especificación mostrada, profundizando en el flujo paso a paso. El detalle del flujo facilita la implementación y las pruebas, porque cada acción del actor y cada respuesta del sistema quedan claras; por ejemplo, para «Crear mensaje en el foro», se detalla que el estudiante abre el formulario, escribe el asunto y el cuerpo, presiona publicar y el sistema confirma. El flujo alternativo es útil porque cubre las variantes del comportamiento normal y define las excepciones; por ejemplo, que el mensaje se guarde como borrador si la conexión falla, o que el sistema rechace un mensaje duplicado. Conocer las alternativas guía al desarrollador sobre cómo debe responder el sistema en cada caso y permite diseñar pruebas que ejerciten esas rutas; por ejemplo, probar qué ocurre cuando el usuario cancela la publicación. La imagen completa la especificación del caso mostrando ese nivel de detalle, y el patrón se replica en cualquier dominio, como detallar el registro de un turno o el envío de un correo. <br><br><strong>Reflexión docente:</strong> Las imágenes facilitan la comprensión de conceptos abstractos. <br><br><strong>Pregunta desafío:</strong> ¿cómo aplicarían este concepto a un sistema real? <br><br><strong>Respuestas posibles:</strong><br><br>• Analizando las necesidades del usuario. <br>• Documentando los casos de uso de manera clara. <br>• Validando con el cliente antes de implementar. <br><br><strong>Advertencia:</strong> las imágenes son representaciones; la práctica requiere adaptación al contexto."
  },
  {
    "title": "Caso de Estudio – Diagrama de CU",
    "eyebrow": "19 · Caso de estudio",
    "body": "<div class=\"card\"><p><strong>Caso de Estudio – Diagrama de CU</strong></p></div><div class=\"card\" style=\"margin-top: 1rem;\"><p>Preparar diagramas de los casos de usos respectivos para la <strong>interacción de un estudiante</strong> con el sistema de <strong>correos electrónico</strong>.</p></div>",
    "note": "<strong>Desarrollo:</strong> **Caso de Estudio – Diagrama de CU:** el título anuncia la actividad integradora en la que se aplican los conceptos de la unidad a un sistema concreto. **Preparar Diagramas de los casos de usos respectivos para la interacción de un estudiante con el sistema de correos electrónico:** el enunciado pide elaborar los diagramas de casos de uso que describan la interacción del estudiante con el sistema de correo; por ejemplo, identificar qué tareas realiza el estudiante, como consultar correos, enviar un correo, borrar mensajes o recibir nuevos mensajes. Para preparar los diagramas conviene identificar primero los actores y sus metas, luego dibujar los casos dentro de los límites del sistema y conectar cada actor con las funcionalidades que ejecuta; por ejemplo, el estudiante se asocia con «Enviar correo». El caso de estudio integra todos los conceptos de la unidad: actores, casos de uso, límites y relaciones, y es análogo a modelar cualquier dominio, como un sistema de turnos o un foro académico. La solución se presenta en el slide siguiente. <br><br><strong>Reflexión docente:</strong> Caso de Estudio – Diagrama de CU es fundamental para la calidad del software. <br><br><strong>Pregunta desafío:</strong> ¿por qué es importante caso de estudio – diagrama de cu? <br><br><strong>Respuestas posibles:</strong><br><br>• Porque ayuda a definir qué debe hacer el sistema. <br>• Porque facilita la comunicación entre clientes y desarrolladores. <br>• Porque es la base para la verificación y validación. <br><br><strong>Advertencia:</strong> no confundir conceptos teóricos con su aplicación práctica."
  },
  {
    "title": "Caso de Estudio – Diagrama de CU",
    "eyebrow": "20 · Caso de estudio",
    "body": "<div class=\"card\"><p><strong>Estudiante</strong></p></div><div class=\"card-grid card-grid--2\" style=\"margin-top: 1rem;\"><div class=\"card card--num\"><span class=\"number\">01</span><p>Consultar correos.</p></div><div class=\"card card--num\"><span class=\"number\">02</span><p>Enviar correo.</p></div><div class=\"card card--num\"><span class=\"number\">03</span><p>Redactar Correo.</p></div><div class=\"card card--num\"><span class=\"number\">04</span><p>Borrar correos.</p></div><div class=\"card card--num\"><span class=\"number\">05</span><p>Recibir correos.</p></div><div class=\"card card--num\"><span class=\"number\">06</span><p><strong>Reenviar Correo</strong> «&lt;&lt;Include&gt;&gt;» de Enviar correo.</p></div><div class=\"card card--num\"><span class=\"number\">07</span><p><strong>Adjuntar archivos</strong> «&lt;&lt;Extend&gt;&gt;» de Enviar correo.</p></div></div>",
    "note": "<strong>Desarrollo:</strong> **Caso de Estudio – Diagrama de CU:** el título presenta la solución del caso de estudio como un diagrama completo. **Consultar correos:** el caso que permite al estudiante revisar los mensajes recibidos. **Enviar correo:** el caso que permite redactar y despachar un correo a un destinatario. **Redactar Correo:** la funcionalidad de componer el contenido del mensaje antes de enviarlo. **Borrar correos:** el caso que permite eliminar mensajes, por ejemplo, los que ya no son necesarios. **Recibir correos:** el caso por el cual el sistema incorpora nuevos mensajes a la bandeja del estudiante. **Estudiante:** el actor principal que interactúa con el sistema de correo y se asocia a los casos de uso. **«Include» Reenviar Correo:** la relación de inclusión indica que «Reenviar correo» incluye el comportamiento de «Enviar correo», porque reenviar comparte la lógica de despacho; por ejemplo, la flecha va del caso reenviar al caso enviar. **«Extend» Adjuntar archivos:** la relación de extensión agrega la opción de adjuntar archivos a «Enviar correo» solo cuando el estudiante decide hacerlo. El diagrama ejemplifica el uso correcto de include y extend. <br><br><strong>Reflexión docente:</strong> Caso de Estudio – Diagrama de CU es fundamental para la calidad del software. <br><br><strong>Pregunta desafío:</strong> ¿por qué es importante caso de estudio – diagrama de cu? <br><br><strong>Respuestas posibles:</strong><br><br>• Porque ayuda a definir qué debe hacer el sistema. <br>• Porque facilita la comunicación entre clientes y desarrolladores. <br>• Porque es la base para la verificación y validación. <br><br><strong>Advertencia:</strong> no confundir conceptos teóricos con su aplicación práctica."
  },
  {
    "title": "Muchas gracias",
    "eyebrow": "21 · Cierre",
    "body": "<div class=\"card card--hero\"><p class=\"lede\">MUCHAS GRACIAS</p><h2 style=\"color:var(--fpuna-blue);\">PREGUNTAS</h2></div>",
    "note": "<strong>Desarrollo:</strong> **Muchas gracias:** el slide cierra la unidad, agradece la atención de los estudiantes y abre a la vez el espacio de preguntas. Es un momento de repaso y cierre: se puede hacer un recorrido rápido de cómo describimos y especificamos los casos de uso, desde el concepto, pasando por el diagrama con actores y relaciones, hasta la plantilla estándar de especificación; por ejemplo, recordar cómo se modeló el sistema de correo del estudiante en el caso de estudio. También conviene invitar a reflexionar sobre qué concepto resultó más útil, como el diagrama de casos de uso, la especificación con plantilla o las relaciones include y extend, y responder las dudas que hayan quedado. La unidad sienta las bases para el diseño detallado y la implementación, por lo que el cierre no introduce contenidos nuevos, sino que consolida lo aprendido. La aplicación es general: cualquier proyecto, como un sistema de turnos hospitalarios, de inventario o un foro académico, se beneficia de estos conceptos. <br><br><strong>Reflexión docente:</strong> Muchas gracias es fundamental para la calidad del software. <br><br><strong>Pregunta desafío:</strong> ¿por qué es importante muchas gracias? <br><br><strong>Respuestas posibles:</strong><br><br>• Porque ayuda a definir qué debe hacer el sistema. <br>• Porque facilita la comunicación entre clientes y desarrolladores. <br>• Porque es la base para la verificación y validación. <br><br><strong>Advertencia:</strong> no confundir conceptos teóricos con su aplicación práctica."
  }
];

// ─── Renderizado ──────────────────────────────────────────────
const stage = document.getElementById('stage');
const counter = document.getElementById('counter');
const previousBtn = document.getElementById('previous');
const nextBtn = document.getElementById('next');
const notes = document.getElementById('speaker-notes');
const indexNav = document.getElementById('slide-index');
let current = 0;

function slideMarkup(slide, index) {
 return `<div class="slide" data-slide="${index}">
 <header class="slide-header">
 <span class="eyebrow">${slide.eyebrow}</span>
 <h1 id="slide-title">${slide.title}</h1>
 </header>
 <div class="content">${slide.body}</div>
 </div>`;
}

function buildIndex() {
 indexNav.innerHTML = slides.map((slide, i) => {
 return `<button class="index-item" data-slide="${i}" aria-label="Ir a slide ${i + 1}: ${slide.title}">
 <span class="index-num">${String(i + 1).padStart(2, '0')}</span>
 <span class="index-title">${slide.title}</span>
 </button>`;
 }).join('');
 indexNav.addEventListener('click', (e) => {
 const btn = e.target.closest('.index-item');
 if (btn) {
 goTo(parseInt(btn.dataset.slide, 10));
 togglePanel('index-panel', false);
 }
 });
}

function goTo(index) {
 if (index < 0 || index >= slides.length) return;
 current = index;
 const slide = slides[current];
 stage.innerHTML = slideMarkup(slide, current);
 counter.textContent = `${String(current + 1).padStart(2, '0')} / ${String(slides.length).padStart(2, '0')}`;
 previousBtn.disabled = current === 0;
 nextBtn.disabled = current === slides.length - 1;
 const progress = document.querySelector('#progress');
 progress.style.width = `${((current + 1) / slides.length) * 100}%`;
 progress.setAttribute('aria-valuenow', current + 1);
 notes.innerHTML = `<div class="note"><strong>Slide ${current + 1}: ${slide.title}</strong><p>${slide.note}</p></div>`;
 document.querySelectorAll('.index-item').forEach((button, i) => button.classList.toggle('active', i === current));
 history.replaceState(null, '', `#slide-${current + 1}`);
}

function renderAllForPrint() {
 const total = slides.length;
 stage.innerHTML = slides.map((slide, position) => {
 const pageNum = String(position + 1).padStart(2, '0');
 const totalNum = String(total).padStart(2, '0');
 const header = `<div class="print-header"><div class="print-header-left"><img class="print-header-logo" src="assets/fpuna_logo_institucional.svg" alt="Logo FP-UNA"><div class="print-header-text"><span class="print-header-title">Ingeniería del Software I</span><span class="print-header-subtitle">FP-UNA / Licenciatura en Ciencias Informáticas (LCiK)</span></div></div><span class="print-header-page">${pageNum} / ${totalNum}</span></div>`;
 return `<div class="print-slide">${header}${slideMarkup(slide, position)}</div>`;
 }).join('');
 fitSlidesForPrint();
}

function fitSlidesForPrint() {
 const PAGE_W = 1123;
 const PAGE_H = 631;
 const HEADER_H = 56;
 const PADDING_SIDE = 56, PADDING_TOP = 10, PADDING_BOTTOM = 32;
 const probe = document.createElement('div');
 probe.style.cssText = `position:absolute;visibility:hidden;width:${PAGE_W - PADDING_SIDE * 2}px;`;
 document.body.appendChild(probe);
 document.querySelectorAll('.print-slide').forEach(slide => {
 const inner = slide.querySelector('.slide');
 if (!inner) return;
 probe.innerHTML = '';
 probe.appendChild(inner.cloneNode(true));
 const fullH = probe.scrollHeight;
 const availH = PAGE_H - HEADER_H - PADDING_TOP - PADDING_BOTTOM;
 if (fullH > availH) {
 const scale = availH / fullH;
 inner.style.transform = `scale(${scale})`;
 inner.style.transformOrigin = 'top left';
 inner.style.width = `${(PAGE_W - PADDING_SIDE * 2) / scale}px`;
 }
 });
 document.body.removeChild(probe);
}

function togglePanel(id, force) {
 const panel = document.getElementById(id);
 const isOpen = force !== undefined ? force : !panel.classList.contains('open');
 panel.classList.toggle('open', isOpen);
 panel.setAttribute('aria-hidden', String(!isOpen));
 const toggleBtn = document.getElementById(id.replace('-panel', '-toggle'));
 if (toggleBtn) toggleBtn.setAttribute('aria-expanded', String(isOpen));
 if (isOpen) panel.querySelector('button, [href]')?.focus();
}

previousBtn.addEventListener('click', () => goTo(current - 1));
nextBtn.addEventListener('click', () => goTo(current + 1));
document.getElementById('index-toggle').addEventListener('click', () => togglePanel('index-panel'));
document.getElementById('notes-toggle').addEventListener('click', () => togglePanel('notes-panel'));
document.querySelectorAll('.close-panel').forEach(btn => {
 btn.addEventListener('click', () => togglePanel(btn.dataset.close, false));
});

document.addEventListener('keydown', (e) => {
 if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') { e.preventDefault(); goTo(current - 1); }
 if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') { e.preventDefault(); goTo(current + 1); }
 if (e.key === 'Home') { e.preventDefault(); goTo(0); }
 if (e.key === 'End') { e.preventDefault(); goTo(slides.length - 1); }
 if (e.key === 'f' || e.key === 'F') {
 if (!document.fullscreenElement) document.documentElement.requestFullscreen();
 else document.exitFullscreen();
 }
 if (e.key === 'i' || e.key === 'I') togglePanel('index-panel');
 if (e.key === 'n' || e.key === 'N') togglePanel('notes-panel');
 if (e.key === 'Escape') {
 togglePanel('index-panel', false);
 togglePanel('notes-panel', false);
 }
});

document.getElementById('fullscreen').addEventListener('click', () => {
 if (!document.fullscreenElement) document.documentElement.requestFullscreen();
 else document.exitFullscreen();
});

const hashMatch = location.hash.match(/#slide-(\d+)/);
const startSlide = hashMatch ? parseInt(hashMatch[1], 10) - 1 : 0;

window.addEventListener('beforeprint', () => { renderAllForPrint(); });
window.addEventListener('afterprint', () => { stage.innerHTML = ''; goTo(current); });

buildIndex();
goTo(Math.min(startSlide, slides.length - 1));
