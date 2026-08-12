const slides = [
  {
    "title": "Ingeniería de Software I",
    "eyebrow": "01 · Apertura",
    "body": "<div class=\"card card--hero\"><p class=\"lede\">UNIDAD IV – CASOS DE USO Y ESPECIFICACIÓN DE CASOS DE USO</p><p>Prof. Lic. Guillermo Jacobo González Rodas Mst. PMP</p></div>",
    "note": "<strong>Desarrollo:</strong> Presentar la **Casos de Uso y Especificación de Casos de Uso** como un tema fundamental del curso de Ingeniería de Software. - Esta unidad estudia casos de uso y su importancia en el desarrollo de software de calidad. <br><br><strong>Ejemplos:</strong> **Global Exchange (conductor):** para el sistema de cambio de divisas, casos de uso son esenciales para definir qué debe hacer el sistema. **Segundo contexto industrial:** en un sistema de turnos hospitalarios, casos de uso ayudan a organizar las necesidades de los usuarios. <br><br><strong>Reflexión docente:</strong> Comprender casos de uso es el primer paso para construir software que responda a las necesidades reales. <br><br><strong>Pregunta desafío:</strong> ¿por qué son importantes los casos de uso en un proyecto de software? <br><br><strong>Respuestas posibles:</strong><br><br>• Porque definen qué debe hacer el sistema. <br>• Porque ayudan a evitar malentendidos entre clientes y desarrolladores. <br>• Porque son la base para la verificación y validación del producto. <br><br><strong>Advertencia:</strong> esta apertura contextualiza la unidad; aún no definimos conceptos técnicos."
  },
  {
    "title": "OBJETIVOS",
    "eyebrow": "02 · Objetivos",
    "body": "<div class=\"card-grid card-grid--3\"><div class=\"card card--num\"><span class=\"number\">01</span><p>Comprender qué son los casos de uso y por qué son importantes.</p></div><div class=\"card card--num\"><span class=\"number\">02</span><p>Familiarizarse con los diagramas de caso de uso y relaciones.</p></div><div class=\"card card--num\"><span class=\"number\">03</span><p>Conocer una plantilla estándar para especificación de casos de uso.</p></div></div>",
    "note": "<strong>Desarrollo:</strong> Los objetivos guían el estudio de casos de uso: comprender, clasificar y aplicar técnicas de obtención y especificación. <br><br><strong>Ejemplos:</strong> **Global Exchange (conductor):** los objetivos nos ayudan a definir qué debe hacer el sistema de cambio de divisas. **Segundo contexto industrial:** en logística, los objetivos permiten establecer qué funcionalidades son prioritarias. <br><br><strong>Reflexión docente:</strong> Los objetivos son evaluable; dominarlos es clave para el parcial. <br><br><strong>Pregunta desafío:</strong> ¿cómo demostrarían que pueden aplicar los casos de uso a un caso real? <br><br><strong>Respuestas posibles:</strong><br><br>• Definiendo requerimientos claros y verificables. <br>• Clasificando funcionalidades en requerimientos funcionales y no funcionales. <br>• Usando técnicas de obtención como entrevistas y observación. <br><br><strong>Advertencia:</strong> distingan conocer una definición de aplicarla a un caso."
  },
  {
    "title": "CONTENIDO",
    "eyebrow": "03 · Recorrido",
    "body": "<div class=\"sequence-card\" aria-label=\"Recorrido de la unidad\"><div class=\"sequence-step\"><span class=\"sequence-index\">01</span><strong>Casos de Uso</strong></div><div class=\"sequence-step\"><span class=\"sequence-index\">02</span><strong>Diagrama de Casos de Uso</strong></div><div class=\"sequence-step\"><span class=\"sequence-index\">03</span><strong>Actores</strong></div><div class=\"sequence-step\"><span class=\"sequence-index\">04</span><strong>Relaciones</strong></div><div class=\"sequence-step\"><span class=\"sequence-index\">05</span><strong>Especificación de Casos de Uso</strong></div><div class=\"sequence-step\"><span class=\"sequence-index\">06</span><strong>Plantilla Estándar</strong></div></div>",
    "note": "<strong>Desarrollo:</strong> CONTENIDO es un concepto clave en casos de uso. - Este slide presenta la definición y características principales. <br><br><strong>Ejemplos:</strong> **Global Exchange (conductor):** podemos aplicar contenido para definir los casos de uso del sistema de cambio de divisas. **Segundo contexto industrial:** en un sistema de turnos, contenido ayuda a organizar las necesidades del hospital. <br><br><strong>Reflexión docente:</strong> CONTENIDO es fundamental para la calidad del software. <br><br><strong>Pregunta desafío:</strong> ¿por qué es importante contenido? <br><br><strong>Respuestas posibles:</strong><br><br>• Porque ayuda a definir qué debe hacer el sistema. <br>• Porque facilita la comunicación entre clientes y desarrolladores. <br>• Porque es la base para la verificación y validación. <br><br><strong>Advertencia:</strong> no confundir conceptos teóricos con su aplicación práctica."
  },
  {
    "title": "¿Qué es un Caso de Uso?",
    "eyebrow": "04 · Definición",
    "body": "<div class=\"card\"><p>Un caso de uso es una <strong>técnica</strong> utilizada en el diseño de sistemas de software para describir <strong>cómo un usuario interactúa con un sistema</strong> para lograr una tarea o función específica.</p></div><div class=\"card-grid card-grid--2\" style=\"margin-top: 1rem;\"><div class=\"card card--num\"><span class=\"number\">01</span><p>Conjunto de escenarios que tienen una meta de usuario en común.</p></div><div class=\"card card--num\"><span class=\"number\">02</span><p>Descripción de un proceso de inicio a fin, relativamente largo, que incluye varias etapas o transacciones.</p></div><div class=\"card card--num\"><span class=\"number\">03</span><p>Presenta un uso particular del sistema.</p></div><div class=\"card card--num\"><span class=\"number\">04</span><p>Describe una funcionalidad del sistema.</p></div></div><div class=\"card\" style=\"margin-top: 1rem;\"><p>AYUDA a definir los <strong>límites del sistema</strong>, y las relaciones entre el sistema y su entorno.</p></div>",
    "note": "<strong>Desarrollo:</strong> ¿Qué es un Caso de Uso? es un concepto clave en casos de uso. - Este slide presenta la definición y características principales. <br><br><strong>Ejemplos:</strong> **Global Exchange (conductor):** podemos aplicar ¿qué es un caso de uso? para definir los casos de uso del sistema de cambio de divisas. **Segundo contexto industrial:** en un sistema de turnos, ¿qué es un caso de uso? ayuda a organizar las necesidades del hospital. <br><br><strong>Reflexión docente:</strong> ¿Qué es un Caso de Uso? es fundamental para la calidad del software. <br><br><strong>Pregunta desafío:</strong> ¿por qué es importante ¿qué es un caso de uso?? <br><br><strong>Respuestas posibles:</strong><br><br>• Porque ayuda a definir qué debe hacer el sistema. <br>• Porque facilita la comunicación entre clientes y desarrolladores. <br>• Porque es la base para la verificación y validación. <br><br><strong>Advertencia:</strong> no confundir conceptos teóricos con su aplicación práctica."
  },
  {
    "title": "Casos de Uso",
    "eyebrow": "05 · Formas de describir",
    "body": "<div class=\"card\"><p><strong>Formas de describir:</strong> Diagramas de Casos de Uso y Especificación de Casos de Uso.</p></div><div class=\"card-grid card-grid--2\" style=\"gap: 1.5rem; margin-top: 1rem; align-items: center;\"><div class=\"card\"><img class=\"figure-img\" src=\"assets/casos-de-uso-681f53b4.png\" alt=\"Diagrama de casos de uso\" style=\"display:block;max-width:100%;height:auto;\"></div><div class=\"card\"><img class=\"figure-img\" src=\"assets/casos-de-uso-1500db9c.png\" alt=\"Especificación de casos de uso\" style=\"display:block;max-width:100%;height:auto;\"></div></div>",
    "note": "<strong>Desarrollo:</strong> Este slide muestra casos de uso con apoyo visual. - Las imágenes ayudan a comprender mejor casos de uso. <br><br><strong>Ejemplos:</strong> **Global Exchange (conductor):** en el sistema de cambio de divisas, podemos aplicar estos conceptos para definir casos de uso. **Segundo contexto industrial:** en un sistema de turnos, las imágenes muestran cómo se representan casos de uso. <br><br><strong>Reflexión docente:</strong> Las imágenes facilitan la comprensión de conceptos abstractos. <br><br><strong>Pregunta desafío:</strong> ¿cómo aplicarían este concepto a un sistema real? <br><br><strong>Respuestas posibles:</strong><br><br>• Analizando las necesidades del usuario. <br>• Documentando los casos de uso de manera clara. <br>• Validando con el cliente antes de implementar. <br><br><strong>Advertencia:</strong> las imágenes son representaciones; la práctica requiere adaptación al contexto."
  },
  {
    "title": "Cómo preparar Casos de Uso",
    "eyebrow": "06 · Preparación",
    "body": "<img class=\"figure-img\" src=\"assets/cómo-preparar-casos-de-uso-41793d90.png\" alt=\"Cómo preparar casos de uso\" style=\"display: block; margin: 0 auto;\">",
    "note": "<strong>Desarrollo:</strong> Este slide muestra cómo preparar casos de uso con apoyo visual. - Las imágenes ayudan a comprender mejor casos de uso. <br><br><strong>Ejemplos:</strong> **Global Exchange (conductor):** en el sistema de cambio de divisas, podemos aplicar estos conceptos para definir casos de uso. **Segundo contexto industrial:** en un sistema de turnos, las imágenes muestran cómo se representan casos de uso. <br><br><strong>Reflexión docente:</strong> Las imágenes facilitan la comprensión de conceptos abstractos. <br><br><strong>Pregunta desafío:</strong> ¿cómo aplicarían este concepto a un sistema real? <br><br><strong>Respuestas posibles:</strong><br><br>• Analizando las necesidades del usuario. <br>• Documentando los casos de uso de manera clara. <br>• Validando con el cliente antes de implementar. <br><br><strong>Advertencia:</strong> las imágenes son representaciones; la práctica requiere adaptación al contexto."
  },
  {
    "title": "Proceso de Casos de Uso",
    "eyebrow": "07 · Proceso",
    "body": "<img class=\"figure-img\" src=\"assets/proceso-de-casos-de-uso-99642e4d.png\" alt=\"Proceso de casos de uso\" style=\"display: block; margin: 0 auto;\">",
    "note": "<strong>Desarrollo:</strong> Este slide muestra proceso de casos de uso con apoyo visual. - Las imágenes ayudan a comprender mejor casos de uso. <br><br><strong>Ejemplos:</strong> **Global Exchange (conductor):** en el sistema de cambio de divisas, podemos aplicar estos conceptos para definir casos de uso. **Segundo contexto industrial:** en un sistema de turnos, las imágenes muestran cómo se representan casos de uso. <br><br><strong>Reflexión docente:</strong> Las imágenes facilitan la comprensión de conceptos abstractos. <br><br><strong>Pregunta desafío:</strong> ¿cómo aplicarían este concepto a un sistema real? <br><br><strong>Respuestas posibles:</strong><br><br>• Analizando las necesidades del usuario. <br>• Documentando los casos de uso de manera clara. <br>• Validando con el cliente antes de implementar. <br><br><strong>Advertencia:</strong> las imágenes son representaciones; la práctica requiere adaptación al contexto."
  },
  {
    "title": "Diagrama de Casos de Uso",
    "eyebrow": "08 · Elementos",
    "body": "<div class=\"card-grid card-grid--2\"><div class=\"card card--num\"><span class=\"number\">01</span><h3>Límites del Sistema</h3><p>El recuadro que encierra los casos de uso.</p></div><div class=\"card card--num\"><span class=\"number\">02</span><h3>Actores</h3><p>Usuarios o sistemas externos que interactúan.</p></div><div class=\"card card--num\"><span class=\"number\">03</span><h3>Casos de Uso</h3><p>Funcionalidades que el sistema ofrece.</p></div><div class=\"card card--num\"><span class=\"number\">04</span><h3>Relaciones</h3><p>Asociación, generalización/especialización, inclusión y extensión.</p></div></div>",
    "note": "<strong>Desarrollo:</strong> Diagrama de Casos de Uso es un concepto clave en casos de uso. - Este slide presenta la definición y características principales. <br><br><strong>Ejemplos:</strong> **Global Exchange (conductor):** podemos aplicar diagrama de casos de uso para definir los casos de uso del sistema de cambio de divisas. **Segundo contexto industrial:** en un sistema de turnos, diagrama de casos de uso ayuda a organizar las necesidades del hospital. <br><br><strong>Reflexión docente:</strong> Diagrama de Casos de Uso es fundamental para la calidad del software. <br><br><strong>Pregunta desafío:</strong> ¿por qué es importante diagrama de casos de uso? <br><br><strong>Respuestas posibles:</strong><br><br>• Porque ayuda a definir qué debe hacer el sistema. <br>• Porque facilita la comunicación entre clientes y desarrolladores. <br>• Porque es la base para la verificación y validación. <br><br><strong>Advertencia:</strong> no confundir conceptos teóricos con su aplicación práctica."
  },
  {
    "title": "Diagrama de Casos de Uso",
    "eyebrow": "09 · Notación",
    "body": "<img class=\"figure-img\" src=\"assets/diagrama-cu-notacion.svg\" alt=\"Notación de diagrama de casos de uso: actor, caso de uso dentro del sistema y asociación\" style=\"display: block; margin: 0 auto;\">",
    "note": "<strong>Desarrollo:</strong> Este slide muestra diagrama de casos de uso con apoyo visual. - Las imágenes ayudan a comprender mejor casos de uso. <br><br><strong>Ejemplos:</strong> **Global Exchange (conductor):** en el sistema de cambio de divisas, podemos aplicar estos conceptos para definir casos de uso. **Segundo contexto industrial:** en un sistema de turnos, las imágenes muestran cómo se representan casos de uso. <br><br><strong>Reflexión docente:</strong> Las imágenes facilitan la comprensión de conceptos abstractos. <br><br><strong>Pregunta desafío:</strong> ¿cómo aplicarían este concepto a un sistema real? <br><br><strong>Respuestas posibles:</strong><br><br>• Analizando las necesidades del usuario. <br>• Documentando los casos de uso de manera clara. <br>• Validando con el cliente antes de implementar. <br><br><strong>Advertencia:</strong> las imágenes son representaciones; la práctica requiere adaptación al contexto."
  },
  {
    "title": "Casos de Uso “Crear mensaje en el foro”",
    "eyebrow": "10 · Ejemplo",
    "body": "<img class=\"figure-img\" src=\"assets/casos-de-uso--crear-mensaje-en-52e4da52.png\" alt=\"Casos de uso «Crear mensaje en el foro»\" style=\"display: block; margin: 0 auto;\">",
    "note": "<strong>Desarrollo:</strong> Este slide muestra casos de uso “crear mensaje en el foro” con apoyo visual. - Las imágenes ayudan a comprender mejor casos de uso. <br><br><strong>Ejemplos:</strong> **Global Exchange (conductor):** en el sistema de cambio de divisas, podemos aplicar estos conceptos para definir casos de uso. **Segundo contexto industrial:** en un sistema de turnos, las imágenes muestran cómo se representan casos de uso. <br><br><strong>Reflexión docente:</strong> Las imágenes facilitan la comprensión de conceptos abstractos. <br><br><strong>Pregunta desafío:</strong> ¿cómo aplicarían este concepto a un sistema real? <br><br><strong>Respuestas posibles:</strong><br><br>• Analizando las necesidades del usuario. <br>• Documentando los casos de uso de manera clara. <br>• Validando con el cliente antes de implementar. <br><br><strong>Advertencia:</strong> las imágenes son representaciones; la práctica requiere adaptación al contexto."
  },
  {
    "title": "Casos de Uso – Relación Include",
    "eyebrow": "11 · Relación Include",
    "body": "<img class=\"figure-img\" src=\"assets/casos-de-uso---relación-includ-497e56f0.png\" alt=\"Relación Include\" style=\"display: block; margin: 0 auto;\">",
    "note": "<strong>Desarrollo:</strong> Este slide muestra casos de uso – relación include con apoyo visual. - Las imágenes ayudan a comprender mejor casos de uso. <br><br><strong>Ejemplos:</strong> **Global Exchange (conductor):** en el sistema de cambio de divisas, podemos aplicar estos conceptos para definir casos de uso. **Segundo contexto industrial:** en un sistema de turnos, las imágenes muestran cómo se representan casos de uso. <br><br><strong>Reflexión docente:</strong> Las imágenes facilitan la comprensión de conceptos abstractos. <br><br><strong>Pregunta desafío:</strong> ¿cómo aplicarían este concepto a un sistema real? <br><br><strong>Respuestas posibles:</strong><br><br>• Analizando las necesidades del usuario. <br>• Documentando los casos de uso de manera clara. <br>• Validando con el cliente antes de implementar. <br><br><strong>Advertencia:</strong> las imágenes son representaciones; la práctica requiere adaptación al contexto."
  },
  {
    "title": "Casos de Uso – Relación Extend",
    "eyebrow": "12 · Relación Extend",
    "body": "<img class=\"figure-img\" src=\"assets/casos-de-uso---relación-extend-dca38492.png\" alt=\"Relación Extend\" style=\"display: block; margin: 0 auto;\">",
    "note": "<strong>Desarrollo:</strong> Este slide muestra casos de uso – relación extend con apoyo visual. - Las imágenes ayudan a comprender mejor casos de uso. <br><br><strong>Ejemplos:</strong> **Global Exchange (conductor):** en el sistema de cambio de divisas, podemos aplicar estos conceptos para definir casos de uso. **Segundo contexto industrial:** en un sistema de turnos, las imágenes muestran cómo se representan casos de uso. <br><br><strong>Reflexión docente:</strong> Las imágenes facilitan la comprensión de conceptos abstractos. <br><br><strong>Pregunta desafío:</strong> ¿cómo aplicarían este concepto a un sistema real? <br><br><strong>Respuestas posibles:</strong><br><br>• Analizando las necesidades del usuario. <br>• Documentando los casos de uso de manera clara. <br>• Validando con el cliente antes de implementar. <br><br><strong>Advertencia:</strong> las imágenes son representaciones; la práctica requiere adaptación al contexto."
  },
  {
    "title": "Mal uso de las relaciones",
    "eyebrow": "13 · Mal uso",
    "body": "<img class=\"figure-img\" src=\"assets/mal-uso-de-las-relaciones-b8d67889.png\" alt=\"Mal uso de las relaciones\" style=\"display: block; margin: 0 auto;\">",
    "note": "<strong>Desarrollo:</strong> Este slide muestra mal uso de las relaciones con apoyo visual. - Las imágenes ayudan a comprender mejor casos de uso. <br><br><strong>Ejemplos:</strong> **Global Exchange (conductor):** en el sistema de cambio de divisas, podemos aplicar estos conceptos para definir casos de uso. **Segundo contexto industrial:** en un sistema de turnos, las imágenes muestran cómo se representan casos de uso. <br><br><strong>Reflexión docente:</strong> Las imágenes facilitan la comprensión de conceptos abstractos. <br><br><strong>Pregunta desafío:</strong> ¿cómo aplicarían este concepto a un sistema real? <br><br><strong>Respuestas posibles:</strong><br><br>• Analizando las necesidades del usuario. <br>• Documentando los casos de uso de manera clara. <br>• Validando con el cliente antes de implementar. <br><br><strong>Advertencia:</strong> las imágenes son representaciones; la práctica requiere adaptación al contexto."
  },
  {
    "title": "Especificación de Casos de Uso",
    "eyebrow": "14 · Especificación",
    "body": "<img class=\"figure-img\" src=\"assets/especificación-de-casos-de-uso-0282e4d5.png\" alt=\"Especificación de casos de uso\" style=\"display: block; margin: 0 auto;\">",
    "note": "<strong>Desarrollo:</strong> Este slide muestra especificación de casos de uso con apoyo visual. - Las imágenes ayudan a comprender mejor casos de uso. <br><br><strong>Ejemplos:</strong> **Global Exchange (conductor):** en el sistema de cambio de divisas, podemos aplicar estos conceptos para definir casos de uso. **Segundo contexto industrial:** en un sistema de turnos, las imágenes muestran cómo se representan casos de uso. <br><br><strong>Reflexión docente:</strong> Las imágenes facilitan la comprensión de conceptos abstractos. <br><br><strong>Pregunta desafío:</strong> ¿cómo aplicarían este concepto a un sistema real? <br><br><strong>Respuestas posibles:</strong><br><br>• Analizando las necesidades del usuario. <br>• Documentando los casos de uso de manera clara. <br>• Validando con el cliente antes de implementar. <br><br><strong>Advertencia:</strong> las imágenes son representaciones; la práctica requiere adaptación al contexto."
  },
  {
    "title": "Especificación de Casos de Uso",
    "eyebrow": "15 · Especificación",
    "body": "<img class=\"figure-img\" src=\"assets/especificación-de-casos-de-uso-c9a0752c.png\" alt=\"Especificación de casos de uso\" style=\"display: block; margin: 0 auto;\">",
    "note": "<strong>Desarrollo:</strong> Este slide muestra especificación de casos de uso con apoyo visual. - Las imágenes ayudan a comprender mejor casos de uso. <br><br><strong>Ejemplos:</strong> **Global Exchange (conductor):** en el sistema de cambio de divisas, podemos aplicar estos conceptos para definir casos de uso. **Segundo contexto industrial:** en un sistema de turnos, las imágenes muestran cómo se representan casos de uso. <br><br><strong>Reflexión docente:</strong> Las imágenes facilitan la comprensión de conceptos abstractos. <br><br><strong>Pregunta desafío:</strong> ¿cómo aplicarían este concepto a un sistema real? <br><br><strong>Respuestas posibles:</strong><br><br>• Analizando las necesidades del usuario. <br>• Documentando los casos de uso de manera clara. <br>• Validando con el cliente antes de implementar. <br><br><strong>Advertencia:</strong> las imágenes son representaciones; la práctica requiere adaptación al contexto."
  },
  {
    "title": "Especificación de Casos de Uso",
    "eyebrow": "16 · Especificación",
    "body": "<img class=\"figure-img\" src=\"assets/especificación-de-casos-de-uso-8dd970c7.png\" alt=\"Especificación de casos de uso\" style=\"display: block; margin: 0 auto;\">",
    "note": "<strong>Desarrollo:</strong> Este slide muestra especificación de casos de uso con apoyo visual. - Las imágenes ayudan a comprender mejor casos de uso. <br><br><strong>Ejemplos:</strong> **Global Exchange (conductor):** en el sistema de cambio de divisas, podemos aplicar estos conceptos para definir casos de uso. **Segundo contexto industrial:** en un sistema de turnos, las imágenes muestran cómo se representan casos de uso. <br><br><strong>Reflexión docente:</strong> Las imágenes facilitan la comprensión de conceptos abstractos. <br><br><strong>Pregunta desafío:</strong> ¿cómo aplicarían este concepto a un sistema real? <br><br><strong>Respuestas posibles:</strong><br><br>• Analizando las necesidades del usuario. <br>• Documentando los casos de uso de manera clara. <br>• Validando con el cliente antes de implementar. <br><br><strong>Advertencia:</strong> las imágenes son representaciones; la práctica requiere adaptación al contexto."
  },
  {
    "title": "Especificación de CU “Crear mensaje en el foro”",
    "eyebrow": "17 · Especificación CU",
    "body": "<img class=\"figure-img\" src=\"assets/especificación-de-cu--crear-me-e338dd57.png\" alt=\"Especificación de CU «Crear mensaje en el foro»\" style=\"display: block; margin: 0 auto;\">",
    "note": "<strong>Desarrollo:</strong> Este slide muestra especificación de cu “crear mensaje en el foro” con apoyo visual. - Las imágenes ayudan a comprender mejor casos de uso. <br><br><strong>Ejemplos:</strong> **Global Exchange (conductor):** en el sistema de cambio de divisas, podemos aplicar estos conceptos para definir casos de uso. **Segundo contexto industrial:** en un sistema de turnos, las imágenes muestran cómo se representan casos de uso. <br><br><strong>Reflexión docente:</strong> Las imágenes facilitan la comprensión de conceptos abstractos. <br><br><strong>Pregunta desafío:</strong> ¿cómo aplicarían este concepto a un sistema real? <br><br><strong>Respuestas posibles:</strong><br><br>• Analizando las necesidades del usuario. <br>• Documentando los casos de uso de manera clara. <br>• Validando con el cliente antes de implementar. <br><br><strong>Advertencia:</strong> las imágenes son representaciones; la práctica requiere adaptación al contexto."
  },
  {
    "title": "Especificación de CU “Crear mensaje en el foro”",
    "eyebrow": "18 · Especificación CU",
    "body": "<img class=\"figure-img\" src=\"assets/especificación-de-cu--crear-me-d4d334c3.png\" alt=\"Especificación de CU «Crear mensaje en el foro»\" style=\"display: block; margin: 0 auto;\">",
    "note": "<strong>Desarrollo:</strong> Este slide muestra especificación de cu “crear mensaje en el foro” con apoyo visual. - Las imágenes ayudan a comprender mejor casos de uso. <br><br><strong>Ejemplos:</strong> **Global Exchange (conductor):** en el sistema de cambio de divisas, podemos aplicar estos conceptos para definir casos de uso. **Segundo contexto industrial:** en un sistema de turnos, las imágenes muestran cómo se representan casos de uso. <br><br><strong>Reflexión docente:</strong> Las imágenes facilitan la comprensión de conceptos abstractos. <br><br><strong>Pregunta desafío:</strong> ¿cómo aplicarían este concepto a un sistema real? <br><br><strong>Respuestas posibles:</strong><br><br>• Analizando las necesidades del usuario. <br>• Documentando los casos de uso de manera clara. <br>• Validando con el cliente antes de implementar. <br><br><strong>Advertencia:</strong> las imágenes son representaciones; la práctica requiere adaptación al contexto."
  },
  {
    "title": "Caso de Estudio – Diagrama de CU",
    "eyebrow": "19 · Caso de estudio",
    "body": "<div class=\"card\"><p><strong>Caso de Estudio – Diagrama de CU</strong></p></div><div class=\"card\" style=\"margin-top: 1rem;\"><p>Preparar diagramas de los casos de usos respectivos para la <strong>interacción de un estudiante</strong> con el sistema de <strong>correos electrónico</strong>.</p></div>",
    "note": "<strong>Desarrollo:</strong> Caso de Estudio – Diagrama de CU es un concepto clave en casos de uso. - Este slide presenta la definición y características principales. <br><br><strong>Ejemplos:</strong> **Global Exchange (conductor):** podemos aplicar caso de estudio – diagrama de cu para definir los casos de uso del sistema de cambio de divisas. **Segundo contexto industrial:** en un sistema de turnos, caso de estudio – diagrama de cu ayuda a organizar las necesidades del hospital. <br><br><strong>Reflexión docente:</strong> Caso de Estudio – Diagrama de CU es fundamental para la calidad del software. <br><br><strong>Pregunta desafío:</strong> ¿por qué es importante caso de estudio – diagrama de cu? <br><br><strong>Respuestas posibles:</strong><br><br>• Porque ayuda a definir qué debe hacer el sistema. <br>• Porque facilita la comunicación entre clientes y desarrolladores. <br>• Porque es la base para la verificación y validación. <br><br><strong>Advertencia:</strong> no confundir conceptos teóricos con su aplicación práctica."
  },
  {
    "title": "Caso de Estudio – Diagrama de CU",
    "eyebrow": "20 · Caso de estudio",
    "body": "<div class=\"card\"><p><strong>Estudiante</strong></p></div><div class=\"card-grid card-grid--2\" style=\"margin-top: 1rem;\"><div class=\"card card--num\"><span class=\"number\">01</span><p>Consultar correos.</p></div><div class=\"card card--num\"><span class=\"number\">02</span><p>Enviar correo.</p></div><div class=\"card card--num\"><span class=\"number\">03</span><p>Redactar Correo.</p></div><div class=\"card card--num\"><span class=\"number\">04</span><p>Borrar correos.</p></div><div class=\"card card--num\"><span class=\"number\">05</span><p>Recibir correos.</p></div><div class=\"card card--num\"><span class=\"number\">06</span><p><strong>Reenviar Correo</strong> «&lt;&lt;Include&gt;&gt;» de Enviar correo.</p></div><div class=\"card card--num\"><span class=\"number\">07</span><p><strong>Adjuntar archivos</strong> «&lt;&lt;Extend&gt;&gt;» de Enviar correo.</p></div></div>",
    "note": "<strong>Desarrollo:</strong> Caso de Estudio – Diagrama de CU es un concepto clave en casos de uso. - Este slide presenta la definición y características principales. <br><br><strong>Ejemplos:</strong> **Global Exchange (conductor):** podemos aplicar caso de estudio – diagrama de cu para definir los casos de uso del sistema de cambio de divisas. **Segundo contexto industrial:** en un sistema de turnos, caso de estudio – diagrama de cu ayuda a organizar las necesidades del hospital. <br><br><strong>Reflexión docente:</strong> Caso de Estudio – Diagrama de CU es fundamental para la calidad del software. <br><br><strong>Pregunta desafío:</strong> ¿por qué es importante caso de estudio – diagrama de cu? <br><br><strong>Respuestas posibles:</strong><br><br>• Porque ayuda a definir qué debe hacer el sistema. <br>• Porque facilita la comunicación entre clientes y desarrolladores. <br>• Porque es la base para la verificación y validación. <br><br><strong>Advertencia:</strong> no confundir conceptos teóricos con su aplicación práctica."
  },
  {
    "title": "Referencias",
    "eyebrow": "21 · Referencias",
    "body": "<div class=\"card\"><p><strong>Referencias</strong></p></div><div class=\"card\" style=\"margin-top: 1rem;\"><ul><li><a href=\"http://agilismoatwork.blogspot.com/2012/12/actividad-tablero-kanban-concepto-de.html\">http://agilismoatwork.blogspot.com/2012/12/actividad-tablero-kanban-concepto-de.html</a></li><li><a href=\"http://agilismoatwork.blogspot.com/2011/11/implantando-roles-agiles-parte-i-los.html\">http://agilismoatwork.blogspot.com/2011/11/implantando-roles-agiles-parte-i-los.html</a></li><li><a href=\"http://agilismoatwork.blogspot.com/2014/05/backlog-todo-el-trabajo-pendiente-del.html\">http://agilismoatwork.blogspot.com/2014/05/backlog-todo-el-trabajo-pendiente-del.html</a></li><li><a href=\"https://proyectosagiles.org/que-es-scrum/\">https://proyectosagiles.org/que-es-scrum/</a></li></ul></div>",
    "note": "<strong>Desarrollo:</strong> Referencias es un concepto clave en casos de uso. - Este slide presenta la definición y características principales. <br><br><strong>Ejemplos:</strong> **Global Exchange (conductor):** podemos aplicar referencias para definir los casos de uso del sistema de cambio de divisas. **Segundo contexto industrial:** en un sistema de turnos, referencias ayuda a organizar las necesidades del hospital. <br><br><strong>Reflexión docente:</strong> Referencias es fundamental para la calidad del software. <br><br><strong>Pregunta desafío:</strong> ¿por qué es importante referencias? <br><br><strong>Respuestas posibles:</strong><br><br>• Porque ayuda a definir qué debe hacer el sistema. <br>• Porque facilita la comunicación entre clientes y desarrolladores. <br>• Porque es la base para la verificación y validación. <br><br><strong>Advertencia:</strong> no confundir conceptos teóricos con su aplicación práctica."
  },
  {
    "title": "Muchas gracias",
    "eyebrow": "22 · Cierre",
    "body": "<div class=\"card card--hero\"><p class=\"lede\">MUCHAS GRACIAS</p><h2 style=\"color:var(--fpuna-blue);\">PREGUNTAS</h2></div>",
    "note": "<strong>Desarrollo:</strong> Muchas gracias es un concepto clave en casos de uso. - Este slide presenta la definición y características principales. <br><br><strong>Ejemplos:</strong> **Global Exchange (conductor):** podemos aplicar muchas gracias para definir los casos de uso del sistema de cambio de divisas. **Segundo contexto industrial:** en un sistema de turnos, muchas gracias ayuda a organizar las necesidades del hospital. <br><br><strong>Reflexión docente:</strong> Muchas gracias es fundamental para la calidad del software. <br><br><strong>Pregunta desafío:</strong> ¿por qué es importante muchas gracias? <br><br><strong>Respuestas posibles:</strong><br><br>• Porque ayuda a definir qué debe hacer el sistema. <br>• Porque facilita la comunicación entre clientes y desarrolladores. <br>• Porque es la base para la verificación y validación. <br><br><strong>Advertencia:</strong> no confundir conceptos teóricos con su aplicación práctica."
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
