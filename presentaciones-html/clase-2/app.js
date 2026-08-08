const slides = [
  {
    "title": "Ingeniería de Software I",
    "eyebrow": "01 · Apertura",
    "body": "<div class=\"card card--hero\"><p class=\"lede\">INGENIERÍA DE SOFTWARE I</p><h2 style=\"color:var(--fpuna-blue); margin-bottom:.5rem;\">UNIDAD II – MODELOS DE DESARROLLO DE SOFTWARE Y DESARROLLO RÁPIDO DEL SOFTWARE</h2><p>Prof. Lic. Guillermo Jacobo González Rodas Mst. PMP</p></div>",
    "note": "- **Desarrollo:** Presentar la Unidad II como el estudio de cómo se organiza y ejecuta el desarrollo de software: modelos tradicionales, métodos ágiles y su impacto en la calidad y los plazos. <br><br><strong>Ejemplos:</strong> **Global Exchange (conductor):** un sistema de cambio de divisas necesita un proceso claro; el modelo elegido afecta cuándo y cómo se entrega valor. **Segundo contexto industrial:** en logística, la elección de un proceso determina si se entrega funcionalidad incremental o se espera a tener todo listo. <br><br><strong>Reflexión docente:</strong> La unidad conecta teoría y práctica: comprender los modelos ayuda a justificar por qué un equipo trabaja de cierta manera. <br><br><strong>Pregunta desafío:</strong> ¿por qué no basta con «programar y entregar»? <br><br><strong>Respuestas posibles:</strong><br><br><br>• Porque el software requiere planificación, diseño, verificación y mantenimiento. <br><br>• Porque los plazos, costos y calidad dependen de cómo se organice el trabajo. <br><br>• Porque sin proceso, los errores se descubren tarde y el retrabajo es costoso. <br><br><strong>Advertencia:</strong> esta apertura contextualiza la unidad; aún no definimos modelos técnicos."
  },
  {
    "title": "Objetivos",
    "eyebrow": "02 · Objetivos",
    "body": "<div class=\"card-grid card-grid--2\"><div class=\"card card--num\"><span class=\"number\">01</span><p>Entender diferencias entre métodos tradicionales y ágiles.</p></div><div class=\"card card--num\"><span class=\"number\">02</span><p>Conocer principios, prácticas y limitaciones de los MAs.</p></div><div class=\"card card--num\"><span class=\"number\">03</span><p>Entender cómo un enfoque impacta en la calidad.</p></div><div class=\"card card--num\"><span class=\"number\">04</span><p>Analizar condiciones bajo las cuales los MAs son efectivos.</p></div></div>",
    "note": "- **Desarrollo:** Los objetivos guían la unidad: comprender diferencias entre enfoques, conocer prácticas ágiles, evaluar su impacto en calidad y reconocer cuándo son efectivos. <br><br><strong>Ejemplos:</strong> **Global Exchange (conductor):** ¿debemos usar cascada o ágil para construir el módulo de cambio de divisas? La respuesta depende del contexto. **Segundo contexto industrial:** un proyecto regulatorio puede exigir documentación extensa (cascada), mientras un prototipo de innovación puede beneficiarse de iteraciones cortas (ágil). <br><br><strong>Reflexión docente:</strong> No existe un modelo «perfecto»; la elección depende del problema, el equipo y las restricciones. <br><br><strong>Pregunta desafío:</strong> ¿qué factores determinan la elección de un modelo de proceso? <br><br><strong>Respuestas posibles:</strong><br><br><br>• La claridad de los requisitos al inicio. <br><br>• La estabilidad del equipo y la tecnología. <br><br>• Los plazos, costos y riesgos del proyecto. <br><br><strong>Advertencia:</strong> los objetivos son evaluable; dominarlos es clave para el parcial."
  },
  {
    "title": "Contenido",
    "eyebrow": "03 · Recorrido",
    "body": "<div class=\"card-grid card-grid--2\" style=\"gap: 2.25rem;\"><div class=\"card\"><span class=\"badge\">Modelos Tradicionales</span><ul><li>Cascada</li><li>Prototipación</li><li>Fases</li><li>Espiral</li><li>RUP</li></ul></div><div class=\"card\"><span class=\"badge\">Métodos Ágiles</span><ul><li>Manifiesto Ágil</li><li>ASD</li><li>Scrum</li><li>XP</li></ul></div></div>",
    "note": "- **Desarrollo:** La unidad se divide en dos bloques: modelos tradicionales (cascada, prototipación, fases, espiral, RUP) y métodos ágiles (ASD, Scrum, XP). <br><br><strong>Ejemplos:</strong> **Global Exchange (conductor):** podemos empezar con cascada para definir la arquitectura y usar ágil para iterar funcionalidades. **Segundo contexto industrial:** en un sistema de turnos, el modelo tradicional puede funcionar para la infraestructura, pero ágil para la interfaz de usuario. <br><br><strong>Reflexión docente:</strong> El contenido muestra que no hay una respuesta única; la profesionalidad está en elegir y justificar el enfoque adecuado. <br><br><strong>Pregunta desafío:</strong> ¿por qué es importante conocer ambos enfoques? <br><br><strong>Respuestas posibles:</strong><br><br><br>• Porque en la práctica real se combinan elementos de ambos. <br><br>• Porque el cliente puede pedir un enfoque específico. <br><br>• Porque comprender las limitaciones de uno ayuda a valorar las fortalezas del otro. <br><br><strong>Advertencia:</strong> el mapa anticipa temas; no reemplaza el desarrollo de cada sección."
  },
  {
    "title": "Ingeniería de Software",
    "eyebrow": "04 · Contexto",
    "body": "<div class=\"card\"><p>La calidad, metodologías y madurez de entornos siguen siendo temas de discusión.</p></div><div class=\"card-grid card-grid--3\" style=\"margin-top: 1.5rem;\"><div class=\"card card--num\"><span class=\"number\">Q</span><p>Calidad</p></div><div class=\"card card--num\"><span class=\"number\">C</span><p>Costos</p></div><div class=\"card card--num\"><span class=\"number\">T</span><p>Plazos</p></div></div>",
    "note": "- **Desarrollo:** La Ingeniería de Software busca equilibrar calidad, costos y plazos. Después de casi 40 años, estos siguen siendo desafíos abiertos. <br><br><strong>Ejemplos:</strong> **Global Exchange (conductor):** un sistema de cambio de divisas debe ser preciso (calidad), accesible (costos) y rápido de entregar (plazos). **Segundo contexto industrial:** en un sistema bancario, un error de calidad puede costar millones; un retraso puede perder el mercado. <br><br><strong>Reflexión docente:</strong> La tensión entre Q, C y T es inevitable; la profesión está en gestionar trade-offs, no en eliminarlos. <br><br><strong>Pregunta desafío:</strong> ¿qué pasaría si ignoramos uno de los tres factores? <br><br><strong>Respuestas posibles:</strong><br><br><br>• Ignorar calidad → software con errores que cuesta más mantener. <br><br>• Ignorar costos → proyecto que quiebra o no se completa. <br><br>• Ignorar plazos → oportunidad perdida o cliente insatisfecho. <br><br><strong>Advertencia:</strong> los factores Q, C, T están interconectados; no se pueden optimizar todos simultáneamente."
  },
  {
    "title": "Dificultades en Producción de Software",
    "eyebrow": "05 · Esencia",
    "body": "<div class=\"card\"><p><strong>Esencia:</strong> complejidad, conformidad, invisibilidad y cambios.</p></div><div class=\"card-grid card-grid--2\" style=\"margin-top: 1.5rem;\"><div class=\"card card--num\"><span class=\"number\">01</span><h3>Complejidad</h3><p>Estructuras lógicas inherentemente complejas.</p></div><div class=\"card card--num\"><span class=\"number\">02</span><h3>Conformidad</h3><p>Adaptarse a reglas y estándares.</p></div><div class=\"card card--num\"><span class=\"number\">03</span><h3>Invisibilidad</h3><p>Estructuras no visibles.</p></div><div class=\"card card--num\"><span class=\"number\">04</span><h3>Cambios</h3><p>Requisitos cambian constantemente.</p></div></div>",
    "note": "- **Desarrollo:** Fred Brooks identificó la esencia del software: complejidad, conformidad, invisibilidad y variabilidad. Estas hacen que la producción sea intrínsecamente difícil. <br><br><strong>Ejemplos:</strong> **Global Exchange (conductor):** un sistema de cambio de divisas tiene complejidad lógica (tasas, redondeo), conformidad (regulaciones), invisibilidad (lógica oculta) y cambios (nuevas monedas, regulaciones). **Segundo contexto industrial:** un ERP tiene miles de reglas de negocio que interactúan; un cambio puede romper otra funcionalidad. <br><br><strong>Reflexión docente:</strong> Entender la esencia ayuda a por qué no existen soluciones mágicas; la ingeniería es necesaria porque el software es inherentemente difícil. <br><br><strong>Pregunta desafío:</strong> ¿cuál de las cuatro esencias genera más problemas en un proyecto real? <br><br><strong>Respuestas posibles:</strong><br><br><br>• Complejidad → errores difíciles de encontrar. <br><br>• Cambios → retrabajo constante. <br><br>• Invisibilidad → malentendidos entre equipo y cliente. <br><br><strong>Advertencia:</strong> estas no son excusas; son razones para aplicar ingeniería."
  },
  {
    "title": "Proceso de Software",
    "eyebrow": "06 · Definición",
    "body": "<div class=\"quote\"><p>«Conjunto relacionado de actividades y tareas implicadas en el desarrollo y evolución de un sistema software»</p><footer>— Sommerville</footer></div><p class=\"reference\">Sommerville, I. Ingeniería de Software, 7ª ed. Addison Wesley, 2005.</p><div class=\"card-grid card-grid--2\" style=\"margin-top: 1.5rem;\"><div class=\"card\"><p><strong>¿Por qué?</strong> Organizar trabajo, reducir riesgos.</p></div><div class=\"card\"><p><strong>¿Qué define?</strong> Actividades, métodos, herramientas.</p></div></div>",
    "note": "- **Desarrollo:** Un proceso de software organiza actividades, métodos y herramientas. Sommerville lo define como el conjunto de actividades implicadas en desarrollo y evolución. <br><br><strong>Ejemplos:</strong> **Global Exchange (conductor):** el proceso define cómo pasamos de la idea de cambiar divisas a un sistema funcionando. **Segundo contexto industrial:** en un hospital, el proceso define cómo se pasan requerimientos de privacidad a un sistema de historias clínicas. <br><br><strong>Reflexión docente:</strong> Un proceso sin contexto puede ser burocracia; un proceso con contexto es una herramienta de gestión. <br><br><strong>Pregunta desafío:</strong> ¿qué pasaría si no hubiera proceso alguno? <br><br><strong>Respuestas posibles:</strong><br><br><br>• Caos: cada persona trabaja a su manera. <br><br>• Duplicación de esfuerzos y conflictos. <br><br>• Difícil de medir, corregir o mejorar. <br><br><strong>Advertencia:</strong> el proceso no es fin en sí mismo; sirve para producir software de calidad."
  },
  {
    "title": "Modelos de Procesos de Software",
    "eyebrow": "07 · Clasificación",
    "body": "<div class=\"card-grid card-grid--2\" style=\"gap: 2.25rem;\"><div class=\"card\"><span class=\"badge\">Tradicionales</span><ul><li>Cascada</li><li>Prototipación</li><li>Fases</li><li>Espiral</li><li>RUP</li></ul></div><div class=\"card\"><span class=\"badge\">Ágiles</span><ul><li>ASD</li><li>Scrum</li><li>XP</li></ul></div></div>",
    "note": "- **Desarrollo:** Los procesos se clasifican en tradicionales y ágiles. Los tradicionales son más planificados y documentados; los ágiles son más flexibles e iterativos. <br><br><strong>Ejemplos:</strong> **Global Exchange (conductor):** podemos usar cascada para la arquitectura base y ágil para funcionalidades nuevas. **Segundo contexto industrial:** un sistema de facturación puede usar cascada para cumplir normativas y ágil para la interfaz. <br><br><strong>Reflexión docente:</strong> No son opuestos; son herramientas distintas para contextos distintos. <br><br><strong>Pregunta desafío:</strong> ¿cuándo elegiría tradicional vs. ágil? <br><br><strong>Respuestas posibles:</strong><br><br><br>• Tradicional: requisitos claros, regulaciones estrictas. <br><br>• Ágil: requisitos cambiantes, equipo pequeño, innovación. <br><br>• Combinación: partes estables con tradicional, partes nuevas con ágil. <br><br><strong>Advertencia:</strong> la clasificación es útil pero no absoluta; existen híbridos."
  },
  {
    "title": "Modelo en Cascada",
    "eyebrow": "08 · Tradicional",
    "body": "<div class=\"card\"><p>El más antiguo: debe completarse un estado antes de comenzar el siguiente.</p></div><div class=\"card-grid card-grid--2\" style=\"margin-top: 1.5rem;\"><div class=\"card\"><p><strong>Características:</strong></p><ul><li>Secuencial y documentado.</li><li>Útil para visualizar el proceso.</li></ul></div><div class=\"card\"><p><strong>Problema:</strong></p><ul><li>No refleja la realidad.</li><li>Errores se detectan tarde.</li></ul></div></div>",
    "note": "- **Desarrollo:** El modelo en cascada es secuencial: cada fase debe completarse antes de la siguiente. Es claro pero rígido. <br><br><strong>Ejemplos:</strong> **Global Exchange (conductor):** podríamos definir todos los requisitos de cambio de divisas, luego diseñar, luego codificar. Pero si falta un requisito, el error se detecta tarde. **Segundo contexto industrial:** en un sistema de control aéreo, la documentación extensa puede ser necesaria, pero la cascada pura es riesgosa. <br><br><strong>Reflexión docente:</strong> La cascada es buena para entender la secuencia lógica, pero peligrosa si se aplica rígidamente. <br><br><strong>Pregunta desafío:</strong> ¿por qué la cascada no refleja la realidad? <br><br><strong>Respuestas posibles:</strong><br><br><br>• Porque los requisitos cambian durante el desarrollo. <br><br>• Porque los errores se descubren tarde. <br><br>• Porque el cliente no puede ver progreso hasta el final. <br><br><strong>Advertencia:</strong> la cascada no es «mala»; es inadecuada para proyectos con alta incertidumbre."
  },
  {
    "title": "Modelo en Cascada",
    "eyebrow": "09 · En la práctica",
    "body": "<div class=\"sequence-card\" aria-label=\"Fases del cascada\"><div class=\"sequence-step\"><span class=\"sequence-index\">01</span><strong>Análisis</strong></div><div class=\"sequence-step\"><span class=\"sequence-index\">02</span><strong>Diseño Sistema</strong></div><div class=\"sequence-step\"><span class=\"sequence-index\">03</span><strong>Diseño Programas</strong></div><div class=\"sequence-step\"><span class=\"sequence-index\">04</span><strong>Codificación</strong></div><div class=\"sequence-step\"><span class=\"sequence-index\">05</span><strong>Testing</strong></div><div class=\"sequence-step\"><span class=\"sequence-index\">06</span><strong>Aceptación</strong></div><div class=\"sequence-step\"><span class=\"sequence-index\">07</span><strong>Mantención</strong></div></div>",
    "note": "- **Desarrollo:** Este diagrama muestra las fases en secuencia: desde requerimientos hasta mantenimiento. En la práctica, estas fases se superponen y los errores se retroalimentan. <br><br><strong>Ejemplos:</strong> **Global Exchange (conductor):** primero definimos reglas de cambio, diseñamos la arquitectura, codificamos y probamos. Pero si en testing descubrimos un error de requisitos, debemos retroceder. **Segundo contexto industrial:** en un sistema de turnos, el testing de aceptación puede revelar que los requisitos no cubren todos los casos. <br><br><strong>Reflexión docente:</strong> El diagrama es ideal; la realidad es cíclica. Los errores retroalimentan fases anteriores. <br><br><strong>Pregunta desafío:</strong> ¿qué pasa si se detecta un error de requisitos en la fase de testing? <br><br><strong>Respuestas posibles:</strong><br><br><br>• Se debe retroceder a análisis, lo que genera retrabajo. <br><br>• El costo del cambio aumenta con cada fase. <br><br>• La cascada pura no maneja bien esta retroalimentación. <br><br><strong>Advertencia:</strong> el diagrama es una simplificación; la realidad es más compleja."
  },
  {
    "title": "Modelo de Prototipación",
    "eyebrow": "10 · Prototipo",
    "body": "<div class=\"card-grid card-grid--2\"><div class=\"card\"><p><strong>Ventajas:</strong></p><ul><li>Construcción rápida.</li><li>Visión común usuario-desarrollador.</li><li>Reduce riesgo.</li></ul></div><div class=\"card\"><p><strong>Ideal cuando:</strong></p><ul><li>Requisitos no claros.</li><li>Retroalimentación temprana.</li></ul></div></div>",
    "note": "- **Desarrollo:** La prototipación construye versiones rápidas para validar ideas. Reduce riesgos al obtener retroalimentación temprana. <br><br><strong>Ejemplos:</strong> **Global Exchange (conductor):** podríamos prototipar la interfaz de cambio de divisas para validar con el usuario antes de construir todo. **Segundo contexto industrial:** en un sistema de turnos, un prototipo puede mostrar cómo funciona la asignación automática. <br><br><strong>Reflexión docente:</strong> El prototipo no es el producto final; es una herramienta de aprendizaje. <br><br><strong>Pregunta desafío:</strong> ¿cuándo el prototipo puede ser contraproducente? <br><br><strong>Respuestas posibles:</strong><br><br><br>• Cuando el cliente lo confunde con el producto final. <br><br>• Cuando se invierte demasiado tiempo en el prototipo. <br><br>• Cuando no se valida con usuarios reales. <br><br><strong>Advertencia:</strong> el prototipo debe ser descartable; no convertirlo en el producto sin diseñar."
  },
  {
    "title": "Modelo de Prototipación",
    "eyebrow": "11 · Flujo",
    "body": "<div class=\"sequence-card\" aria-label=\"Flujo prototipación\"><div class=\"sequence-step\"><span class=\"sequence-index\">01</span><strong>Req. Prototipo</strong></div><div class=\"sequence-step\"><span class=\"sequence-index\">02</span><strong>Diseño</strong></div><div class=\"sequence-step\"><span class=\"sequence-index\">03</span><strong>Implementación</strong></div><div class=\"sequence-step\"><span class=\"sequence-index\">04</span><strong>Testing</strong></div></div><div class=\"card\" style=\"margin-top: 1rem;\"><p><strong>Ciclo:</strong> Se repite hasta alcanzar los requisitos del sistema.</p></div>",
    "note": "- **Desarrollo:** El flujo de prototipación es cíclico: se diseña, construye, prueba y repite. El objetivo es refinar los requisitos antes del desarrollo completo. <br><br><strong>Ejemplos:</strong> **Global Exchange (conductor):** prototipamos la pantalla de cambio, el usuario dice «falta el historial», refrescamos. **Segundo contexto industrial:** en un sistema de turnos, el prototipo puede mostrar cómo se asignan turnos; el usuario puede pedir filtros adicionales. <br><br><strong>Reflexión docente:</strong> La iteración es clave; cada ciclo reduce la incertidumbre. <br><br><strong>Pregunta desafío:</strong> ¿cuántas iteraciones son razonables? <br><br><strong>Respuestas posibles:</strong><br><br><br>• Las necesarias para clarificar requisitos, pero sin caer en perfeccionismo. <br><br>• Depende de la complejidad y del tiempo disponible. <br><br>• Siempre con un límite definido para evitar «scope creep». <br><br><strong>Advertencia:</strong> el prototipo no reemplaza el diseño; lo prepara."
  },
  {
    "title": "Modelo de Desarrollo en Fases",
    "eyebrow": "12 · Incremental",
    "body": "<div class=\"card\"><p>El mercado no acepta grandes retardos; se desarrolla en fases.</p></div><div class=\"card-grid card-grid--2\" style=\"margin-top: 1.5rem;\"><div class=\"card\"><p><strong>Estrategia:</strong> Entregar por partes, funcionalidad desde el inicio.</p></div><div class=\"card\"><p><strong>Ejemplo:</strong> Fase 1: 20%, Fase 2: 60%, Fase 3: 100%.</p></div></div>",
    "note": "- **Desarrollo:** El desarrollo en fases entrega el sistema en incrementos. El usuario obtiene funcionalidad temprana y puede dar retroalimentación. <br><br><strong>Ejemplos:</strong> **Global Exchange (conductor):** Fase 1: consulta de tasas. Fase 2: operaciones básicas. Fase 3: reporting avanzado. **Segundo contexto industrial:** en un ERP, Fase 1: inventario. Fase 2: compras. Fase 3: contabilidad. <br><br><strong>Reflexión docente:</strong> Las fases permiten aprender y ajustar, pero requieren una arquitectura que soporte incrementos. <br><br><strong>Pregunta desafío:</strong> ¿qué riesgo tiene entregar en fases? <br><br><strong>Respuestas posibles:</strong><br><br><br>• Si la arquitectura no está bien diseñada, los incrementos pueden ser incompatibles. <br><br>• El cliente puede presionar por funcionalidades no planificadas. <br><br>• La integración entre fases puede ser costosa. <br><br><strong>Advertencia:</strong> las fases no son «prototipos»; cada una debe ser una entrega estable."
  },
  {
    "title": "Modelo de Desarrollo en Fases",
    "eyebrow": "13 · Ejemplo",
    "body": "<div class=\"table-like\"><div class=\"row\"><strong>Fase</strong><span>Funcionalidad</span><b>Avance*</b></div><div class=\"row\"><strong>Fase 1</strong><span>Básica</span><b>20%</b></div><div class=\"row\"><strong>Fase 2</strong><span>Adicional</span><b>60%</b></div><div class=\"row\"><strong>Fase 3</strong><span>Completa</span><b>100%</b></div></div><p class=\"reference\">* Valor aproximado</p>",
    "note": "- **Desarrollo:** Este ejemplo muestra cómo el avance no es lineal: la fase 2 ya entrega el 60% del sistema. <br><br><strong>Ejemplos:</strong> **Global Exchange (conductor):** Fase 1: consulta de tasas. Fase 2: operaciones de cambio (60% del valor). Fase 3: reporting y administración. **Segundo contexto industrial:** en un sistema de turnos, Fase 1: visualización de turnos. Fase 2: asignación automática. Fase 3: optimización y reportes. <br><br><strong>Reflexión docente:</strong> El avance acumulativo permite priorizar lo más valioso primero. <br><br><strong>Pregunta desafío:</strong> ¿cómo decidir qué funcionalidad va en cada fase? <br><br><strong>Respuestas posibles:</strong><br><br><br>• Por valor al usuario: lo más crítico primero. <br><br>• Por dependencias técnicas: lo que otros módulos necesitan. <br><br>• Por riesgo: lo más incierto se prueba temprano. <br><br><strong>Advertencia:</strong> los porcentajes son orientativos; dependen del proyecto."
  },
  {
    "title": "Modelo en Espiral",
    "eyebrow": "14 · Iterativo",
    "body": "<div class=\"card\"><p>Combina desarrollo con <strong>Análisis de Riesgo</strong>.</p></div><div class=\"sequence-card\" style=\"margin-top: 1.5rem;\" aria-label=\"Fases espiral\"><div class=\"sequence-step\"><span class=\"sequence-index\">01</span><strong>Planificación</strong></div><div class=\"sequence-step\"><span class=\"sequence-index\">02</span><strong>Análisis Riesgo</strong></div><div class=\"sequence-step\"><span class=\"sequence-index\">03</span><strong>Ingeniería</strong></div><div class=\"sequence-step\"><span class=\"sequence-index\">04</span><strong>Evaluación</strong></div></div>",
    "note": "- **Desarrollo:** El modelo espiral combina iteraciones con análisis de riesgo. Cada vuelta produce un prototipo más maduro. <br><br><strong>Ejemplos:</strong> **Global Exchange (conductor):** cada iteración puede agregar una funcionalidad (consulta, operación, reporting) y evaluar riesgos (regulatorios, técnicos). **Segundo contexto industrial:** en un sistema de salud, cada iteración puede agregar un módulo (pacientes, turnos, facturación) y evaluar riesgos de privacidad. <br><br><strong>Reflexión docente:</strong> El espiral es poderoso pero complejo; requiere experiencia en gestión de riesgos. <br><br><strong>Pregunta desafío:</strong> ¿qué tipo de proyecto se beneficia más del espiral? <br><br><strong>Respuestas posibles:</strong><br><br><br>• Proyectos grandes y complejos con riesgos significativos. <br><br>• Proyectos donde los requisitos no están claros. <br><br>• Proyectos donde la calidad es crítica y los errores son costosos. <br><br><strong>Advertencia:</strong> el espiral no es para todos; su complejidad puede ser excesiva para proyectos pequeños."
  },
  {
    "title": "Modelo en Espiral",
    "eyebrow": "15 · Visualización",
    "body": "<img class=\"figure-img\" src=\"assets/modelo-espiral.png\" alt=\"Modelo espiral\">",
    "note": "- **Desarrollo:** El diagrama espiral muestra iteraciones crecientes con análisis de riesgo en cada vuelta. <br><br><strong>Reflexión docente:</strong> La espiral visualiza el concepto de iteración con riesgo. <br><br><strong>Pregunta desafío:</strong> ¿cómo se relaciona el riesgo con la planificación? <br><br><strong>Respuestas posibles:</strong><br><br><br>• A mayor riesgo, más iteraciones iniciales. <br><br>• El análisis de riesgo guía la priorización. <br><br>• Cada iteración reduce la incertidumbre. <br><br><strong>Advertencia:</strong> el diagrama es una representación conceptual; la práctica varía según el proyecto."
  },
  {
    "title": "RUP – Rational Unified Process",
    "eyebrow": "16 · Framework",
    "body": "<div class=\"card\"><p>Framework para describir procesos de desarrollo específicos.</p></div><p class=\"reference\">Jacobson, I., Booch, G., Rumbaugh, J. The Unified Software Development Process. Addison-Wesley, 1999.</p><div class=\"card-grid card-grid--2\" style=\"margin-top: 1.5rem;\"><div class=\"card\"><p><strong>4 fases:</strong> Concepción, Elaboración, Construcción, Transición.</p></div><div class=\"card\"><p><strong>Características:</strong> Iterativo, incremental, orientado a arquitectura.</p></div></div>",
    "note": "- **Desarrollo:** RUP es un framework iterativo e incremental, orientado a arquitectura y controlado por riesgos. <br><br><strong>Ejemplos:</strong> **Global Exchange (conductor):** cada fase de RUP puede entregar un incremento del sistema. **Segundo contexto industrial:** en un sistema bancario, RUP permite planificar iteraciones con análisis de riesgo regulatorio. <br><br><strong>Reflexión docente:</strong> RUP no es un proceso rígido; es un marco adaptable. <br><br><strong>Pregunta desafío:</strong> ¿cuándo usar RUP vs. Scrum? <br><br><strong>Respuestas posibles:</strong><br><br><br>• RUP para proyectos grandes con requisitos semi-estables. <br><br>• Scrum para equipos pequeños con requisitos cambiantes. <br><br>• Ambos pueden complementarse en organizaciones maduras. <br><br><strong>Advertencia:</strong> RUP requiere madurez organizacional para implementarse correctamente."
  },
  {
    "title": "RUP – Rational Unified Process",
    "eyebrow": "17 · Diagrama",
    "body": "<img class=\"figure-img\" src=\"assets/rup-proceso.png\" alt=\"Diagrama RUP\">",
    "note": "- **Desarrollo:** El diagrama RUP muestra las 4 fases y las disciplinas transversales. <br><br><strong>Reflexión docente:</strong> RUP integra todas las disciplinas de desarrollo en cada fase. <br><br><strong>Pregunta desafío:</strong> ¿qué disciplinas son transversales en RUP? <br><br><strong>Respuestas posibles:</strong><br><br><br>• Gestión de requisitos y diseño. <br><br>• Implementación y prueba. <br><br>• Despliegue y gestión de configuración. <br><br><strong>Advertencia:</strong> el diagrama es una simplificación; RUP es más complejo en la práctica."
  },
  {
    "title": "Problemas de los Modelos Tradicionales",
    "eyebrow": "18 · Limitaciones",
    "body": "<div class=\"card-grid card-grid--2\"><div class=\"card card--num\"><span class=\"number\">01</span><p>Incumplimiento de plazos.</p></div><div class=\"card card--num\"><span class=\"number\">02</span><p>Reducción de funcionalidades.</p></div><div class=\"card card--num\"><span class=\"number\">03</span><p>Difícil adaptación a cambios.</p></div><div class=\"card card--num\"><span class=\"number\">04</span><p>Excesiva documentación.</p></div></div>",
    "note": "- **Desarrollo:** Los modelos tradicionales tienen problemas comunes: retrasos, recortes, rigidez y burocracia. <br><br><strong>Ejemplos:</strong> **Global Exchange (conductor):** si el mercado cambia, el modelo tradicional no puede adaptarse rápido. **Segundo contexto industrial:** en un proyecto gubernamental, la documentación extensa puede retrasar la entrega. <br><br><strong>Reflexión docente:</strong> Estos problemas motivaron el surgimiento de los métodos ágiles. <br><br><strong>Pregunta desafío:</strong> ¿cuál de estos problemas es más grave? <br><br><strong>Respuestas posibles:</strong><br><br><br>• Incumplimiento de plazos → pierde credibilidad. <br><br>• Reducción de funcionalidades → no resuelve la necesidad. <br><br>• Difícil adaptación → el producto queda obsoleto. <br><br>• Excesiva documentación → burocracia sin valor. <br><br><strong>Advertencia:</strong> no todos los proyectos sufren todos estos problemas; depende del contexto."
  },
  {
    "title": "Métodos Ágiles (MAs)",
    "eyebrow": "19 · Origen",
    "body": "<div class=\"card\"><p>En febrero de 2001, en Utah-EEUU, nace el término \"Ágil\" aplicado al desarrollo de software.</p></div><p class=\"reference\">Beck, K. et al. Manifesto for Agile Software Development. agilemanifesto.org, 2001.</p><div class=\"card\" style=\"margin-top: 1rem;\"><p>17 expertos de la industria buscaron alternativas a los problemas de los modelos tradicionales.</p></div>",
    "note": "- **Desarrollo:** El Manifiesto Ágil nació en 2001 como respuesta a las limitaciones de los modelos tradicionales. <br><br><strong>Ejemplos:</strong> **Global Exchange (conductor):** los métodos ágiles permiten adaptarse a cambios en tasas y regulaciones. **Segundo contexto industrial:** en un sistema de turnos, la agilidad permite ajustar prioridades según la demanda. <br><br><strong>Reflexión docente:</strong> El ágil no es una moda; es una respuesta a problemas reales. <br><br><strong>Pregunta desafío:</strong> ¿por qué 17 expertos sintieron la necesidad de crear un manifiesto? <br><br><strong>Respuestas posibles:</strong><br><br><br>• Porque los modelos tradicionales no resolvían todos los problemas. <br><br>• Porque la industria necesitaba un enfoque más flexible. <br><br>• Porque la colaboración y la adaptabilidad eran valores olvidados. <br><br><strong>Advertencia:</strong> el manifiesto es un conjunto de valores, no una metodología específica."
  },
  {
    "title": "Métodos Ágiles",
    "eyebrow": "20 · Definición",
    "body": "<div class=\"card\"><p>Estrategias que promueven prácticas adaptativas, en lugar de predictivas.</p></div><p class=\"reference\">Pressman, R. Ingeniería del Software: Un enfoque práctico, 7ª ed. McGraw-Hill, 2010. Cap. 2.</p><div class=\"card\" style=\"margin-top: 1rem;\"><p><strong>Principio clave:</strong> Responder al cambio en vez de seguir un plan.</p></div>",
    "note": "- **Desarrollo:** Los MAs promueven adaptabilidad sobre predicción. Son estrategias que responden a los cambios en lugar de seguir un plan rígido. <br><br><strong>Ejemplos:</strong> **Global Exchange (conductor):** si cambian las regulaciones, el equipo puede ajustar el desarrollo sin rehacer todo el plan. **Segundo contexto industrial:** en un sistema de e-commerce, los cambios en precios o productos se incorporan iteración a iteración. <br><br><strong>Reflexión docente:</strong> La agilidad no es falta de proceso; es proceso adaptable. <br><br><strong>Pregunta desafío:</strong> ¿qué diferencia hay entre «adaptarse al cambio» y «no tener plan»? <br><br><strong>Respuestas posibles:</strong><br><br><br>• Adaptarse implica un marco de trabajo; la falta de plan es caos. <br><br>• Los MAs tienen roles, actividades y herramientas definidas. <br><br>• La agilidad requiere disciplina, no improvisación. <br><br><strong>Advertencia:</strong> la agilidad no elimina la necesidad de planificación; la transforma."
  },
  {
    "title": "Métodos Ágiles",
    "eyebrow": "21 · Manifiesto",
    "body": "<div class=\"card-grid card-grid--2\"><div class=\"card\"><p><strong>Individuos e interacciones</strong> sobre procesos y herramientas</p></div><div class=\"card\"><p><strong>Software funcionando</strong> sobre documentación extensiva</p></div><div class=\"card\"><p><strong>Colaboración con el cliente</strong> sobre negociación contractual</p></div><div class=\"card\"><p><strong>Respuesta al cambio</strong> sobre seguir un plan</p></div></div>",
    "note": "- **Desarrollo:** El manifiesto ágil establece 4 valores fundamentales que guían los métodos ágiles. <br><br><strong>Ejemplos:</strong> **Global Exchange (conductor):** preferimos reunirnos con el usuario que escribir 100 páginas de requisitos. **Segundo contexto industrial:** en un sistema de turnos, preferimos entregar funcionalidad que funcione que documentar todo el diseño. <br><br><strong>Reflexión docente:</strong> Los valores no son absolutos; son preferencias cuando hay trade-offs. <br><br><strong>Pregunta desafío:</strong> ¿qué valor les parece más importante y por qué? <br><br><strong>Respuestas posibles:</strong><br><br><br>• Individuos e interacciones, porque las personas hacen el software. <br><br>• Software funcionando, porque es la medida de progreso. <br><br>• Colaboración con el cliente, porque asegura que resolvamos el problema correcto. <br><br>• Respuesta al cambio, porque el mercado evoluciona. <br><br><strong>Advertencia:</strong> los valores no eliminan la necesidad de documentación o planificación; los priorizan."
  },
  {
    "title": "Métodos Ágiles",
    "eyebrow": "22 · Individuos",
    "body": "<div class=\"card\"><p><strong>Al individuo y las interacciones sobre el proceso y las herramientas.</strong></p></div><div class=\"card\" style=\"margin-top: 1rem;\"><p>La gente es el principal factor de éxito. Es más importante un buen equipo que las mejores herramientas.</p></div>",
    "note": "- **Desarrollo:** El valor prioritario es las personas y sus interacciones. Un equipo coordinado puede resolver problemas que las herramientas no pueden. <br><br><strong>Ejemplos:</strong> **Global Exchange (conductor):** un equipo que se comunica bien puede detectar errores de requisitos antes que una herramienta de gestión. **Segundo contexto industrial:** en un sistema de salud, la comunicación entre desarrolladores y médicos es clave para entender necesidades reales. <br><br><strong>Reflexión docente:</strong> Las herramientas apoyan; las personas deciden. <br><br><strong>Pregunta desafío:</strong> ¿qué pasa si un equipo tiene las mejores herramientas pero no se comunica? <br><br><strong>Respuestas posibles:</strong><br><br><br>• Se producen soluciones técnicamente correctas pero que no resuelven el problema. <br><br>• Se duplica esfuerzo porque no hay coordinación. <br><br>• Se pierden oportunidades de mejora que solo la colaboración revela. <br><br><strong>Advertencia:</strong> individuos e interacciones no excluyen herramientas; las complementan."
  },
  {
    "title": "Métodos Ágiles",
    "eyebrow": "23 · Software",
    "body": "<div class=\"card\"><p><strong>Desarrollar software que funciona más que conseguir documentación.</strong></p></div><div class=\"card\" style=\"margin-top: 1rem;\"><p>No producir documentos a menos que sean necesarios para una decisión importante.</p></div>",
    "note": "- **Desarrollo:** El software funcionando es la medida de progreso. La documentación tiene valor, pero no es el producto final. <br><br><strong>Ejemplos:</strong> **Global Exchange (conductor):** preferimos entregar una funcionalidad de cambio que funcione que documentar todo el diseño antes de empezar. **Segundo contexto industrial:** en un sistema de turnos, un prototipo funcionando comunica más que 50 páginas de especificación. <br><br><strong>Reflexión docente:</strong> La documentación excesiva puede convertirse en burocracia que nadie lee. <br><br><strong>Pregunta desafío:</strong> ¿qué documentación es realmente necesaria? <br><br><strong>Respuestas posibles:</strong><br><br><br>• La que ayuda a tomar decisiones importantes. <br><br>• La que facilita la mantención y evolución del sistema. <br><br>• La que permite a nuevos miembros del equipo entender el sistema. <br><br><strong>Advertencia:</strong> no documentar nada es tan peligroso como documentar todo; el equilibrio es clave."
  },
  {
    "title": "Métodos Ágiles",
    "eyebrow": "24 · Cliente",
    "body": "<div class=\"card\"><p><strong>La colaboración con el cliente más que la negociación de un contrato.</strong></p></div><div class=\"card\" style=\"margin-top: 1rem;\"><p>Interacción constante entre cliente y equipo; la colaboración guía el desarrollo.</p></div>",
    "note": "- **Desarrollo:** La colaboración continua con el cliente es fundamental. El cliente no es un demandante; es un colaborador. <br><br><strong>Ejemplos:</strong> **Global Exchange (conductor):** el usuario de divisas participa en cada iteración, validando que el sistema resuelve sus necesidades reales. **Segundo contexto industrial:** en un sistema de turnos, los médicos y administradores participan en cada sprint para priorizar funcionalidades. <br><br><strong>Reflexión docente:</strong> Un contrato sin colaboración puede entregar algo que nadie quiere usar. <br><br><strong>Pregunta desafío:</strong> ¿qué pasa si el cliente no puede participar activamente? <br><br><strong>Respuestas posibles:</strong><br><br><br>• Se asigna un representante o proxy del cliente. <br><br>• Se incrementa la frecuencia de revisión con el cliente disponible. <br><br>• Se documentan supuestos y se validan temprano. <br><br><strong>Advertencia:</strong> la colaboración requiere compromiso de ambas partes."
  },
  {
    "title": "Métodos Ágiles",
    "eyebrow": "25 · Cambio",
    "body": "<div class=\"card\"><p><strong>Responder a los cambios más que seguir estrictamente un plan.</strong></p></div><div class=\"card\" style=\"margin-top: 1rem;\"><p>La habilidad de responder a cambios es más importante que seguir un plan prefijado.</p></div>",
    "note": "- **Desarrollo:** La capacidad de adaptación es clave en entornos cambiantes. Un plan rígido puede convertirse en una camisa de fuerza. <br><br><strong>Ejemplos:</strong> **Global Exchange (conductor):** si cambian las regulaciones financieras, el equipo puede ajustar el desarrollo sin rehacer todo el plan. **Segundo contexto industrial:** en un sistema de e-commerce, los cambios en precios o productos se incorporan sin esperar al siguiente release. <br><br><strong>Reflexión docente:</strong> El plan es una guía, no una camisa de fuerza. <br><br><strong>Pregunta desafío:</strong> ¿cómo planificar sin ser rígido? <br><br><strong>Respuestas posibles:</strong><br><br><br>• Planificar en iteraciones cortas con objetivos claros. <br><br>• Mantener un backlog priorizado que se ajuste con cada iteración. <br><br>• Aceptar que el plan inicial es una aproximación que se refinará. <br><br><strong>Advertencia:</strong> la respuesta al cambio no es improvisación; es adaptación dentro de un marco."
  },
  {
    "title": "Agilidad vs. Proceso",
    "eyebrow": "26 · Equilibrio",
    "body": "<div class=\"card\"><p>CMM/CMMI y XP pueden complementarse.</p></div><div class=\"card-grid card-grid--2\" style=\"margin-top: 1rem;\"><div class=\"card\"><p><strong>Hallazgos:</strong> La agilidad no elimina la necesidad de proceso.</p></div><div class=\"card\"><p><strong>Desafío:</strong> Encontrar equilibrio entre agilidad y proceso.</p></div></div>",
    "note": "- **Desarrollo:** La agilidad y el proceso no son opuestos; son complementarios. CMM/CMMI y XP pueden coexistir. <br><br><strong>Ejemplos:</strong> **Global Exchange (conductor):** usar Scrum para iterar pero mantener documentación mínima de arquitectura. **Segundo contexto industrial:** en una empresa que usa CMMI, puede adoptar prácticas ágiles en equipos de desarrollo sin cambiar todo el marco organizacional. <br><br><strong>Reflexión docente:</strong> El equilibrio es contextual; no hay fórmula universal. <br><br><strong>Pregunta desafío:</strong> ¿cómo encontrar el equilibrio adecuado? <br><br><strong>Respuestas posibles:</strong><br><br><br>• Evaluar el contexto: madurez del equipo, complejidad del proyecto, regulaciones. <br><br>• Experimentar con prácticas ágiles en un entorno controlado. <br><br>• Medir resultados y ajustar gradualmente. <br><br><strong>Advertencia:</strong> no se puede copiar un enfoque de otra organización sin adaptarlo al contexto propio."
  },
  {
    "title": "Interrogantes",
    "eyebrow": "27 · Reflexión",
    "body": "<div class=\"card-grid card-grid--2\"><div class=\"card\"><p>¿Resuelven los MAs todos los problemas?</p></div><div class=\"card\"><p>¿Son aplicables a todo tipo de desarrollo?</p></div><div class=\"card\"><p>¿Cuánta agilidad? ¿Cuánto proceso?</p></div><div class=\"card\"><p><strong>Desafío:</strong> encontrar equilibrio.</p></div></div>",
    "note": "- **Desarrollo:** Los métodos ágiles no son la solución universal. El desafío es encontrar equilibrio entre agilidad y proceso. <br><br><strong>Ejemplos:</strong> **Global Exchange (conductor):** ¿es ágil para un sistema regulatorio? Depende del nivel de documentación requerido. **Segundo contexto industrial:** en un sistema de aviación, la agilidad puede ser limitada por regulaciones estrictas. <br><br><strong>Reflexión docente:</strong> La profesionalidad está en elegir el enfoque adecuado, no en defender uno por defecto. <br><br><strong>Pregunta desafío:</strong> ¿cuándo NO usar métodos ágiles? <br><br><strong>Respuestas posibles:</strong><br><br><br>• Cuando los requisitos son estables y las regulaciones exigen documentación extensa. <br><br>• Cuando el equipo no tiene experiencia o compromiso con la agilidad. <br><br>• Cuando el proyecto requiere certificaciones o auditorías específicas. <br><br><strong>Advertencia:</strong> no hay respuesta única; depende del contexto."
  },
  {
    "title": "Metodologías Ágiles",
    "eyebrow": "28 · Principales",
    "body": "<div class=\"card-grid card-grid--3\"><div class=\"card card--hero\"><h3>ASD</h3><p>Adaptive Software Development</p></div><div class=\"card card--hero\"><h3>XP</h3><p>Programación Extrema</p></div><div class=\"card card--hero\"><h3>Scrum</h3><p>Marco de trabajo ágil</p></div></div>",
    "note": "- **Desarrollo:** Las tres metodologías ágiles más conocidas: ASD, XP y Scrum. Cada una tiene fortalezas distintas. <br><br><strong>Ejemplos:</strong> **Global Exchange (conductor):** Scrum para gestión, XP para prácticas de código, ASD para filosofía de desarrollo. **Segundo contexto industrial:** en una startup, puede usarse una combinación de las tres según la etapa del proyecto. <br><br><strong>Reflexión docente:</strong> Cada metodología aporta algo distinto; se pueden combinar. <br><br><strong>Pregunta desafío:</strong> ¿qué diferencia hay entre las tres? <br><br><strong>Respuestas posibles:</strong><br><br><br>• ASD es más filosofía que proceso detallado. <br><br>• XP se centra en prácticas técnicas de desarrollo. <br><br>• Scrum se centra en gestión de trabajo en equipo. <br><br><strong>Advertencia:</strong> no se deben mezclar sin entender cada metodología."
  },
  {
    "title": "Adaptive Software Development (ASD)",
    "eyebrow": "29 · ASD",
    "body": "<div class=\"card\"><p>Desarrollado por J. Highsmith en 2000.</p></div><p class=\"reference\">Highsmith, J. Adaptive Software Development: A Collaborative Approach to Managing Complex Systems. Addison-Wesley, 2000.</p><div class=\"quote\" style=\"margin-top: 1rem;\"><p>«Balancearse en el borde del Caos»</p><footer>— Idea fundamental</footer></div><div class=\"card\" style=\"margin-top: 1rem;\"><p>Buscar equilibrio entre creatividad y estructura.</p></div>",
    "note": "- **Desarrollo:** ASD se basa en equilibrar creatividad y estructura. La filosofía es \"balancearse en el borde del caos\". <br><br><strong>Ejemplos:</strong> **Global Exchange (conductor):** permitir innovación en la interfaz pero mantener reglas de negocio claras. **Segundo contexto industrial:** en un equipo de innovación, ASD permite experimentar sin perder el foco en el producto. <br><br><strong>Reflexión docente:</strong> El caos controlado puede ser productivo cuando hay objetivos claros. <br><br><strong>Pregunta desafío:</strong> ¿qué significa \"borde del caos\" en la práctica? <br><br><strong>Respuestas posibles:</strong><br><br><br>• Tener suficiente estructura para no perder el rumbo. <br><br>• Tener suficiente libertad para innovar. <br><br>• Encontrar el punto donde la creatividad se convierte en productividad. <br><br><strong>Advertencia:</strong> ASD es más una filosofía que un conjunto de prácticas definidas."
  },
  {
    "title": "Proceso del ASD",
    "eyebrow": "30 · Diagrama",
    "body": "<img class=\"figure-img\" src=\"assets/asd-proceso.png\" alt=\"Diagrama ASD\">",
    "note": "- **Desarrollo:** El diagrama ASD muestra el ciclo de Speculación, Colaboración y Aprendizaje. <br><br><strong>Reflexión docente:</strong> ASD es más una filosofía que un proceso detallado; sus prácticas deben complementarse con otras metodologías. <br><br><strong>Pregunta desafío:</strong> ¿cómo se aplicaría ASD en un proyecto real? <br><br><strong>Respuestas posibles:</strong><br><br><br>• Specular sobre qué construir, colaborar en equipo, aprender de cada iteración. <br><br>• Mantener flexibilidad para cambiar de dirección según la evidencia. <br><br>• Complementar con prácticas técnicas de XP o gestión de Scrum. <br><br><strong>Advertencia:</strong> ASD no especifica prácticas concretas; necesita complementación."
  },
  {
    "title": "Uso actual del ASD",
    "eyebrow": "31 · Aplicación",
    "body": "<div class=\"card\"><p>Casi no se utiliza porque no especifica prácticas detalladas.</p></div><div class=\"card\" style=\"margin-top: 1rem;\"><p>Debe complementarse con otra metodología que defina prácticas concretas.</p></div>",
    "note": "- **Desarrollo:** ASD es más filosofía que proceso detallado. No se utiliza solo porque falta especificación de prácticas. <br><br><strong>Ejemplos:</strong> **Global Exchange (conductor):** usar filosofía ASD pero complementar con Scrum para gestión y XP para código. **Segundo contexto industrial:** en una empresa innovadora, ASD puede guiar la cultura mientras Scrum organiza el trabajo. <br><br><strong>Reflexión docente:</strong> ASD aporta ideas valiosas, pero no es suficiente solo. <br><br><strong>Pregunta desafío:</strong> ¿qué aporta ASD que otras metodologías no tienen? <br><br><strong>Respuestas posibles:</strong><br><br><br>• La filosofía de equilibrar creatividad y estructura. <br><br>• El enfoque en adaptación continua. <br><br>• La aceptación de la incertidumbre como parte del desarrollo. <br><br><strong>Advertencia:</strong> ASD es un complemento, no un reemplazo de otras metodologías."
  },
  {
    "title": "Programación Extrema (XP)",
    "eyebrow": "32 · Introducción",
    "body": "<div class=\"card\"><p>Desarrollado por K. Beck en 1999.</p></div><p class=\"reference\">Beck, K. Extreme Programming Explained: Embrace Change. Addison-Wesley, 1999.</p><div class=\"card\" style=\"margin-top: 1rem;\"><p>Probablemente la metodología ágil más conocida y utilizada.</p></div><div class=\"card\" style=\"margin-top: 1rem;\"><p>XP combina prácticas conocidas de manera innovadora.</p></div>",
    "note": "- **Desarrollo:** XP es la metodología ágil más conocida y practicada. Combina prácticas conocidas de forma innovadora. <br><br><strong>Ejemplos:</strong> **Global Exchange (conductor):** usar XP para desarrollo de código con testing continuo y programación en parejas. **Segundo contexto industrial:** en un equipo de desarrollo web, XP permite entregar funcionalidad de calidad rápidamente. <br><br><strong>Reflexión docente:</strong> XP es pragmático: combina prácticas conocidas de forma efectiva. <br><br><strong>Pregunta desafío:</strong> ¿por qué se llama \"Extrema\"? <br><br><strong>Respuestas posibles:</strong><br><br><br>• Porque lleva cada práctica al extremo de su recomendación. <br><br>• Porque combina múltiples prácticas de forma intensiva. <br><br>• Porque busca la máxima calidad posible en cada aspecto. <br><br><strong>Advertencia:</strong> XP requiere disciplina y compromiso del equipo."
  },
  {
    "title": "Programación Extrema (XP)",
    "eyebrow": "33 · Diagrama",
    "body": "<img class=\"figure-img\" src=\"assets/xp-proceso.png\" alt=\"Diagrama XP\">",
    "note": "- **Desarrollo:** El diagrama XP muestra las prácticas fundamentales y su relación. <br><br><strong>Reflexión docente:</strong> XP se centra en la calidad del código y la colaboración del equipo. <br><br><strong>Pregunta desafío:</strong> ¿cuáles son las prácticas más importantes de XP? <br><br><strong>Respuestas posibles:</strong><br><br><br>• Programación en parejas y testing continuo. <br><br>• Integración continua y refactorización. <br><br>• Diseño simple y propiedad colectiva del código. <br><br><strong>Advertencia:</strong> el diagrama es una simplificación; XP tiene muchas más prácticas."
  },
  {
    "title": "Prácticas de Programación Extrema",
    "eyebrow": "34 · Prácticas",
    "body": "<div class=\"card-grid card-grid--2\"><div class=\"card card--num\"><span class=\"number\">01</span><h3>Parejas</h3><p>Dos programadores, una estación.</p></div><div class=\"card card--num\"><span class=\"number\">02</span><h3>Diseño Simple</h3><p>Lo más simple que funcione.</p></div><div class=\"card card--num\"><span class=\"number\">03</span><h3>Refactorización</h3><p>Mejorar sin cambiar comportamiento.</p></div><div class=\"card card--num\"><span class=\"number\">04</span><h3>Testing Continuo</h3><p>Pruebas antes del código.</p></div></div>",
    "note": "- **Desarrollo:** XP define prácticas concretas para mejorar la calidad: programación en parejas, diseño simple, refactorización, testing continuo. <br><br><strong>Ejemplos:</strong> **Global Exchange (conductor):** programación en parejas para lógica de cambio de divisas, testing continuo para validar reglas de negocio. **Segundo contexto industrial:** en un equipo de desarrollo móvil, las prácticas de XP permiten entregar actualizaciones frecuentes con calidad. <br><br><strong>Reflexión docente:</strong> Las prácticas de XP son aplicables incluso fuera de XP. <br><br><strong>Pregunta desafío:</strong> ¿qué práctica les parece más beneficiosa? <br><br><strong>Respuestas posibles:</strong><br><br><br>• Testing continuo, porque detecta errores temprano. <br><br>• Programación en parejas, porque mejora la calidad del código. <br><br>• Refactorización, porque mantiene el código limpio y mantenible. <br><br><strong>Advertencia:</strong> las prácticas requieren compromiso y disciplina."
  },
  {
    "title": "Prácticas de Programación Extrema",
    "eyebrow": "35 · Prácticas",
    "body": "<div class=\"card-grid card-grid--2\"><div class=\"card card--num\"><span class=\"number\">05</span><h3>Integración Continua</h3><p>Integrar varias veces al día.</p></div><div class=\"card card--num\"><span class=\"number\">06</span><h3>Propiedad Colectiva</h3><p>Cualquiera cambia cualquier código.</p></div><div class=\"card card--num\"><span class=\"number\">07</span><h3>Código Estándar</h3><p>Todos programan igual.</p></div><div class=\"card card--num\"><span class=\"number\">08</span><h3>Sistema Metafórico</h3><p>Historia común del sistema.</p></div></div>",
    "note": "- **Desarrollo:** Más prácticas XP: integración continua, propiedad colectiva, código estándar, sistema metafórico. <br><br><strong>Ejemplos:</strong> **Global Exchange (conductor):** integración continua para detectar errores temprano, propiedad colectiva para que cualquier desarrollador pueda mejorar el código. **Segundo contexto industrial:** en un equipo distribuido, el código estándar y la integración continua son fundamentales. <br><br><strong>Reflexión docente:</strong> La propiedad colectiva reduce puntos ciegos y dependencias individuales. <br><br><strong>Pregunta desafío:</strong> ¿qué pasa si nadie quiere compartir la propiedad del código? <br><br><strong>Respuestas posibles:</strong><br><br><br>• Se crea dependencia de personas clave. <br><br>• Se dificulta la mantención y evolución del sistema. <br><br>• Se pierden oportunidades de mejora por conocimiento disperso. <br><br><strong>Advertencia:</strong> la propiedad colectiva requiere confianza y responsabilidad compartida."
  },
  {
    "title": "Uso actual de XP",
    "eyebrow": "36 · Mercado",
    "body": "<div class=\"card\"><p>El 38% del mercado ágil utiliza XP por sus prácticas bien definidas.</p></div>",
    "note": "- **Desarrollo:** XP es la metodología ágil más utilizada en el mercado por sus prácticas bien definidas. <br><br><strong>Ejemplos:</strong> **Global Exchange (conductor):** muchas empresas usan XP para desarrollo de software crítico donde la calidad es esencial. **Segundo contexto industrial:** en una consultancy de desarrollo, XP es el estándar por la previsibilidad de sus resultados. <br><br><strong>Reflexión docente:</strong> La popularidad de XP se debe a su pragmatismo y resultados medibles. <br><br><strong>Pregunta desafío:</strong> ¿por qué XP es más popular que otras metodologías ágiles? <br><br><strong>Respuestas posibles:</strong><br><br><br>• Porque tiene prácticas concretas y bien definidas. <br><br>• Porque produce resultados medibles en calidad y productividad. <br><br>• Porque es fácil de aprender y aplicar en equipos pequeños. <br><br><strong>Advertencia:</strong> la popularidad no garantiza que sea la mejor opción para todos los contextos."
  },
  {
    "title": "SCRUM",
    "eyebrow": "37 · Introducción",
    "body": "<div class=\"card\"><p>La metodología más utilizada por equipos ágiles.</p></div><p class=\"reference\">Schwaber, K., Sutherland, J. The Scrum Guide. Scrum.org, 2020.</p><div class=\"card\" style=\"margin-top: 1rem;\"><p>Trabajo en equipo con resultado incremental.</p></div>",
    "note": "- **Desarrollo:** Scrum es el marco ágil más utilizado para gestión de proyectos. Se basa en iteraciones cortas (sprints) y roles definidos. <br><br><strong>Ejemplos:</strong> **Global Exchange (conductor):** usar Scrum para gestionar entregas incrementales de funcionalidades de cambio. **Segundo contexto industrial:** en un equipo de desarrollo de software empresarial, Scrum permite planificar y ejecutar en ciclos de 2 semanas. <br><br><strong>Reflexión docente:</strong> Scrum no define cómo programar, sino cómo organizar el trabajo. <br><br><strong>Pregunta desafío:</strong> ¿por qué Scrum es tan popular? <br><br><strong>Respuestas posibles:</strong><br><br><br>• Porque es simple de entender y aplicar. <br><br>• Porque produce resultados visibles en cada sprint. <br><br>• Porque crea ritmo y previsibilidad en el equipo. <br><br><strong>Advertencia:</strong> Scrum requiere compromiso de todos los roles para funcionar."
  },
  {
    "title": "SCRUM - ACTIVIDADES",
    "eyebrow": "38 · Actividades",
    "body": "<div class=\"card-grid card-grid--2\"><div class=\"card card--num\"><span class=\"number\">01</span><h3>Sprint</h3><p>2-8 semanas.</p></div><div class=\"card card--num\"><span class=\"number\">02</span><h3>Planning</h3><p>Planificar sprint.</p></div><div class=\"card card--num\"><span class=\"number\">03</span><h3>Daily</h3><p>Reunión diaria.</p></div><div class=\"card card--num\"><span class=\"number\">04</span><h3>Review</h3><p>Revisar resultado.</p></div><div class=\"card card--num\"><span class=\"number\">05</span><h3>Retrospective</h3><p>Mejorar proceso.</p></div></div>",
    "note": "- **Desarrollo:** Scrum define 5 actividades clave: Sprint, Planning, Daily, Review y Retrospective. Cada una tiene un propósito distinto. <br><br><strong>Ejemplos:</strong> **Global Exchange (conductor):** cada sprint entrega funcionalidad de cambio de divisas; el Daily sincroniza al equipo; la Review valida con el cliente. **Segundo contexto industrial:** en un equipo de desarrollo web, las actividades de Scrum crean ritmo y visibilidad. <br><br><strong>Reflexión docente:</strong> Las actividades de Scrum crean ritmo y visibilidad del progreso. <br><br><strong>Pregunta desafío:</strong> ¿qué actividad es más importante y por qué? <br><br><strong>Respuestas posibles:</strong><br><br><br>• Sprint Planning, porque define qué se va a construir. <br><br>• Daily, porque mantiene al equipo sincronizado. <br><br>• Sprint Review, porque valida con el cliente. <br><br>• Retrospective, porque mejora el proceso continuamente. <br><br><strong>Advertencia:</strong> todas las actividades son importantes; omitir una debilita el marco."
  },
  {
    "title": "SCRUM - HERRAMIENTAS",
    "eyebrow": "39 · Herramientas",
    "body": "<div class=\"card-grid card-grid--3\"><div class=\"card card--hero\"><h3>Product Backlog</h3><p>Lista priorizada.</p></div><div class=\"card card--hero\"><h3>Sprint Backlog</h3><p>Trabajo del sprint.</p></div><div class=\"card card--hero\"><h3>Burn Down</h3><p>Gráfico progreso.</p></div></div>",
    "note": "- **Desarrollo:** Scrum usa tres herramientas principales: Product Backlog (lista priorizada), Sprint Backlog (trabajo del sprint) y Burn Down (gráfico de progreso). <br><br><strong>Ejemplos:</strong> **Global Exchange (conductor):** el Product Backlog lista todas las funcionalidades de cambio priorizadas por valor; el Burn Down muestra el avance diario. **Segundo contexto industrial:** en un equipo de desarrollo, el Sprint Backlog contiene las tareas del sprint actual. <br><br><strong>Reflexión docente:</strong> Las herramientas de Scrum hacen visible el progreso y las prioridades. <br><br><strong>Pregunta desafío:</strong> ¿qué pasa si el Product Backlog no está priorizado? <br><br><strong>Respuestas posibles:</strong><br><br><br>• El equipo trabaja en lo que parece urgente, no en lo más valioso. <br><br>• Se pierde tiempo en funcionalidades de bajo impacto. <br><br>• El cliente pierde confianza en el equipo. <br><br><strong>Advertencia:</strong> las herramientas sin disciplina no funcionan."
  },
  {
    "title": "SCRUM - ROLES",
    "eyebrow": "40 · Roles",
    "body": "<div class=\"card-grid card-grid--3\"><div class=\"card card--hero\"><h3>Product Owner</h3><p>Define y prioriza.</p></div><div class=\"card card--hero\"><h3>Scrum Master</h3><p>Facilita y remueve obstáculos.</p></div><div class=\"card card--hero\"><h3>Team</h3><p>Equipo de desarrollo.</p></div></div>",
    "note": "- **Desarrollo:** Scrum define tres roles: Product Owner (define qué construir), Scrum Master (facilita y remueve obstáculos) y Team (construye el producto). <br><br><strong>Ejemplos:</strong> **Global Exchange (conductor):** el Product Owner prioriza funcionalidades de cambio; el Scrum Master facilita las reuniones; el Team implementa. **Segundo contexto industrial:** en un equipo de desarrollo, cada rol tiene responsabilidades claras que evitan conflictos. <br><br><strong>Reflexión docente:</strong> Los roles de Scrum crean claridad y responsabilidad. <br><br><strong>Pregunta desafío:</strong> ¿qué pasa si el Product Owner no está disponible? <br><br><strong>Respuestas posibles:</strong><br><br><br>• El equipo pierde dirección y prioridades. <br><br>• Se toman decisiones sin contexto del negocio. <br><br>• El sprint puede producir algo que nadie necesita. <br><br><strong>Advertencia:</strong> todos los roles son esenciales; no se pueden omitir."
  },
  {
    "title": "SCRUM",
    "eyebrow": "41 · Diagrama",
    "body": "<img class=\"figure-img\" src=\"assets/comparacion-procesos.png\" alt=\"Diagrama Scrum\">",
    "note": "- **Desarrollo:** El diagrama muestra el ciclo de Scrum con roles, actividades y herramientas. <br><br><strong>Reflexión docente:</strong> Scrum es un marco completo para gestión ágil que integra roles, actividades y herramientas. <br><br><strong>Pregunta desafío:</strong> ¿cómo se integran los roles, actividades y herramientas en Scrum? <br><br><strong>Respuestas posibles:</strong><br><br><br>• El Product Owner llena el Product Backlog. <br><br>• El Team selecciona trabajo del Sprint Backlog en el Planning. <br><br>• El Scrum Master facilita las actividades y remueve obstáculos. <br><br>• El Burn Down muestra el avance del Sprint. <br><br><strong>Advertencia:</strong> el diagrama es una simplificación; Scrum tiene más matices en la práctica."
  },
  {
    "title": "Uso actual de SCRUM",
    "eyebrow": "42 · Mercado",
    "body": "<div class=\"card\"><p>Scrum es muy utilizado; se integra con XP para gestión + desarrollo.</p></div>",
    "note": "- **Desarrollo:** Scrum y XP se complementan: Scrum para gestión, XP para prácticas de código. <br><br><strong>Ejemplos:</strong> **Global Exchange (conductor):** usar Scrum para sprints y XP para programación en parejas y testing continuo. **Segundo contexto industrial:** en una empresa de desarrollo, la combinación Scrum+XP es muy efectiva para entregar calidad rápidamente. <br><br><strong>Reflexión docente:</strong> La integración de Scrum y XP es un área activa de investigación y práctica. <br><br><strong>Pregunta desafío:</strong> ¿por qué se buscan combinar Scrum y XP? <br><br><strong>Respuestas posibles:</strong><br><br><br>• Scrum aporta gestión; XP aporta prácticas técnicas. <br><br>• Juntos cubren más aspectos del desarrollo de software. <br><br>• La combinación produce resultados mejores que cada uno por separado. <br><br><strong>Advertencia:</strong> combinar metodologías requiere entender cada una por separado."
  },
  {
    "title": "Ventajas de las MAs",
    "eyebrow": "43 · Fortalezas",
    "body": "<div class=\"card-grid card-grid--2\"><div class=\"card card--num\"><span class=\"number\">01</span><p>Iteraciones cortas para correcciones rápidas.</p></div><div class=\"card card--num\"><span class=\"number\">02</span><p>Ciclos de 2 a 8 semanas.</p></div><div class=\"card card--num\"><span class=\"number\">03</span><p>Adaptable a nuevos riesgos.</p></div><div class=\"card card--num\"><span class=\"number\">04</span><p>Entrega continua de valor.</p></div></div>",
    "note": "- **Desarrollo:** Los MAs tienen ventajas claras: iteraciones cortas, adaptabilidad, orientación a personas y trabajo en equipo. <br><br><strong>Ejemplos:</strong> **Global Exchange (conductor):** entregar funcionalidad de cambio cada 2 semanas, adaptarse a cambios de regulaciones, trabajar en equipo con el usuario. **Segundo contexto industrial:** en un equipo de desarrollo ágil, las ventajas se traducen en mayor satisfacción del cliente y mejor calidad. <br><br><strong>Reflexión docente:</strong> Las ventajas son reales, pero requieren disciplina y compromiso. <br><br><strong>Pregunta desafío:</strong> ¿cuál es la ventaja más importante? <br><br><strong>Respuestas posibles:</strong><br><br><br>• Iteraciones cortas, porque permiten aprender rápido. <br><br>• Adaptabilidad, porque el mercado cambia constantemente. <br><br>• Orientación a personas, porque el software lo hacen las personas. <br><br><strong>Advertencia:</strong> las ventajas no se obtienen automáticamente; requieren práctica."
  },
  {
    "title": "Desventajas de las MAs",
    "eyebrow": "44 · Limitaciones",
    "body": "<div class=\"card-grid card-grid--2\"><div class=\"card card--num\"><span class=\"number\">01</span><p>Puede llevar al caos.</p></div><div class=\"card card--num\"><span class=\"number\">02</span><p>Difícil mantener interés del cliente.</p></div><div class=\"card card--num\"><span class=\"number\">03</span><p>Requiere equipo comprometido.</p></div><div class=\"card card--num\"><span class=\"number\">04</span><p>No adecuado para requisitos estables.</p></div></div>",
    "note": "- **Desarrollo:** Los MAs también tienen desventajas: riesgo de caos, dificultad para mantener interés del cliente, priorización compleja, no apto para requisitos estables. <br><br><strong>Ejemplos:</strong> **Global Exchange (conductor):** si el cliente no participa activamente, el ágil puede perder el rumbo. **Segundo contexto industrial:** en un proyecto gubernamental con requisitos estables, un enfoque ágil puede ser ineficiente. <br><br><strong>Reflexión docente:</strong> Los MAs no son para todos los contextos; conocer sus limitaciones es clave. <br><br><strong>Pregunta desafío:</strong> ¿cómo mitigar estas desventajas? <br><br><strong>Respuestas posibles:</strong><br><br><br>• Establecer un marco claro de trabajo (como Scrum) para evitar el caos. <br><br>• Comprometer al cliente con reuniones regulares y revisiones. <br><br>• Usar herramientas de priorización como el Product Backlog. <br><br>• Combinar con prácticas documentales cuando sea necesario. <br><br><strong>Advertencia:</strong> las desventajas no invalidan los MAs; indican cuándo usarlos con precaución."
  },
  {
    "title": "Métodos Ágiles",
    "eyebrow": "45 · Síntesis",
    "body": "<div class=\"card card--hero\"><p class=\"lede\">Los MAs son una respuesta a las limitaciones de los modelos tradicionales.</p><p>No son la solución universal, pero aportan herramientas valiosas.</p></div>",
    "note": "- **Desarrollo:** Los métodos ágiles son una respuesta válida pero no universal a las limitaciones de los modelos tradicionales. <br><br><strong>Ejemplos:</strong> **Global Exchange (conductor):** usar ágil para funcionalidades nuevas, tradicional para arquitectura estable. **Segundo contexto industrial:** en una empresa madura, combinar ágil y tradicional según el contexto del proyecto. <br><br><strong>Reflexión docente:</strong> La profesionalidad está en elegir el enfoque adecuado para cada situación. <br><br><strong>Pregunta desafío:</strong> ¿cómo decidir qué enfoque usar? <br><br><strong>Respuestas posibles:</strong><br><br><br>• Analizar el contexto: requisitos, equipo, regulaciones, plazos. <br><br>• Experimentar con ambos enfoques y medir resultados. <br><br>• Consultar con expertos y aprender de la experiencia. <br><br><strong>Advertencia:</strong> no hay respuesta única; depende del proyecto y la organización."
  },
  {
    "title": "Conclusiones",
    "eyebrow": "46 · Cierre",
    "body": "<div class=\"card\"><p>Las MAs proveen un marco aplicable a entornos sin procesos definidos.</p></div><div class=\"card\" style=\"margin-top: 1rem;\"><p>Aportan flexibilidad y adaptabilidad.</p></div><div class=\"card\" style=\"margin-top: 1rem;\"><p>El desafío es encontrar el equilibrio entre agilidad y proceso.</p></div>",
    "note": "- **Desarrollo:** Las conclusiones resumen los aportes de los MAs: marco aplicable, bueno para organizaciones en maduración, adecuado para proyectos de pequeño y mediano tamaño. <br><br><strong>Ejemplos:</strong> **Global Exchange (conductor):** el equilibrio entre ágil y tradicional es clave para el éxito del proyecto. **Segundo contexto industrial:** una startup puede beneficiarse mucho de los MAs por su flexibilidad y rapidez. <br><br><strong>Reflexión docente:</strong> La unidad muestra que no hay respuestas absolutas; la profesionalidad está en adaptar el enfoque al contexto. <br><br><strong>Pregunta desafío:</strong> ¿qué llevarían de esta unidad a su práctica profesional? <br><br><strong>Respuestas posibles:</strong><br><br><br>• Conocer ambos enfoques para elegir el adecuado. <br><br>• Entender que la agilidad requiere disciplina. <br><br>• Valorar la colaboración y la adaptabilidad. <br><br><strong>Advertencia:</strong> las conclusiones son generales; cada proyecto requiere análisis específico."
  },
  {
    "title": "Muchas gracias",
    "eyebrow": "47 · Cierre",
    "body": "<div class=\"card card--hero\"><p class=\"lede\">MUCHAS GRACIAS</p><h2 style=\"color:var(--fpuna-blue);\">PREGUNTAS</h2></div>",
    "note": "- **Desarrollo:** Cierre de la clase y apertura a preguntas. <br><br><strong>Ejemplos:</strong> **Global Exchange (conductor):** ¿qué modelo usarían para el sistema de cambio de divisas? **Segundo contexto industrial:** ¿cómo aplicarían lo aprendido en un proyecto real? <br><br><strong>Reflexión docente:</strong> Las preguntas revelan qué conceptos necesitan refuerzo. <br><br><strong>Pregunta desafío:</strong> ¿qué duda les queda después de esta clase? <br><br><strong>Respuestas posibles:</strong><br><br><br>• ¿Cuándo usar un modelo u otro? <br><br>• ¿Cómo implementar Scrum o XP en la práctica? <br><br>• ¿Cómo equilibrar agilidad y proceso? <br><br><strong>Advertencia:</strong> las preguntas son oportunidades de aprendizaje; no las dejen pasar."
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
