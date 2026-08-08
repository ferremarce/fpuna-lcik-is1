# Guía docente — Unidad II

Esta guía conserva el orden completo de `sesiones-clase/clase-2/IS1-UNIDAD_II.pptx` (48 slides). El texto visible se transcribe desde el paquete OOXML del PPTX. Las imágenes de los slides 18, 31, 34 y 42 se describen y recrean con HTML/CSS/SVG en la presentación, sin copiar binarios.

## Ruta rápida

1. Presentar la Unidad II como el pasaje desde modelos de proceso hacia desarrollo rápido.
2. Recorrer primero los modelos tradicionales y sus problemas; luego introducir los valores, límites y metodologías ágiles.
3. Cerrar comparando enfoques y retomando la aplicabilidad regional indicada en la fuente.

## Slides

### Slide 1 — Ingeniería de Software I / Unidad II
- **Texto visible:** `INGENIERÍA DE SOFTWARE I`; `UNIDAD II – MODELOS DE DESARROLLO DE SOFTWARE Y DESARROLLO RÁPIDO DEL SOFTWARE`; `Prof. Ing. Julia Talavera`.
- **Visual:** Apertura de unidad, con jerarquía de título y subtítulo.
- **Explicación docente:**
  - **Desarrollo:**
    - En esta unidad quiero que entendamos cómo los **modelos de desarrollo** organizan un proyecto y cómo el **desarrollo rápido** usa la **iteración** para aprender y entregar valor.
    - La iteración no es repetir por repetir: consiste en producir una versión, observar evidencia y ajustar la siguiente decisión; el modelo elegido define cuánto planificamos antes y cuánto aprendemos durante el camino.
    - Piensen en la unidad como un mapa: no nos dice qué camino tomar siempre, sino qué camino conviene según el problema.
  - **Ejemplos:** **Global Exchange (conductor):** presenten el sistema de cambio de divisas como hilo de la unidad: consulta de tasas, simulación y compra o venta, con fondos, pagos, roles, clientes, tasas variables, auditoría e integraciones externas. **Segundo contexto industrial:** en un hospital, un sistema de turnos puede necesitar prototipar el flujo con pacientes, pero también controles formales para disponibilidad y privacidad.
  - **Reflexión docente:**
    - La decisión profesional es hacer explícito qué incertidumbre queremos reducir primero y qué controles no podemos negociar.
  - **Pregunta desafío:** ¿qué enfoque usarían para un sistema de turnos?
  - **Respuestas posibles:**
    1. Un enfoque iterativo, si los usuarios todavía deben validar el flujo.
    2. Prototipación, si el riesgo principal es entender bien las pantallas y reglas.
    3. Un modelo más planificado, si existen requisitos estables y restricciones formales.
  - **Advertencia:** ningún modelo es universal; la elección depende del contexto.

### Slide 2 — Objetivos
- **Texto visible:** Entender las diferencias entre métodos tradicionales y ágiles. Conocer principios, prácticas y limitaciones de los métodos ágiles. Entender cómo un enfoque iterativo e incremental conduce a una entrega más rápida.
- **Visual:** Tres objetivos consecutivos.
- **Explicación docente:**
  - **Desarrollo:**
    - Tomemos estos objetivos como el contrato de la clase: vamos a comparar lo **tradicional** y lo **ágil**, distinguir **principios** de **prácticas**, y ver cómo lo **iterativo e incremental** acelera la entrega.
    - Lo iterativo aprende mediante ciclos; lo incremental agrega partes utilizables, y juntos permiten que una entrega sea evidencia para decidir la siguiente.
    - Para demostrar rapidez, no alcanza con terminar antes: debemos observar cuándo se entrega algo útil y si conserva calidad.
  - **Ejemplos:** **Global Exchange (conductor):** usen una entrega de consulta y simulación de tasas para distinguir principios, prácticas e incrementos, y luego incorporen compra/venta, fondos y pagos sin perder calidad. **Segundo contexto industrial:** un comercio electrónico puede publicar primero búsqueda y catálogo, medir problemas reales de compra y recién después priorizar promociones o recomendaciones.
  - **Reflexión docente:**
    - Para mí, el trade-off es claro: una métrica de velocidad sin calidad puede premiar el retrabajo y dañar la confianza del negocio.
  - **Pregunta desafío:** ¿cómo demostrarían que una entrega fue más rápida sin perder calidad?
  - **Respuestas posibles:**
    1. Midiendo el tiempo hasta una funcionalidad usable y verificando sus pruebas.
    2. Comparando entregas pequeñas con el mismo criterio de aceptación.
    3. Revisando defectos y retrabajo, porque una entrega rápida que se corrige después puede no ser realmente más eficiente.
  - **Advertencia:** rapidez no equivale a improvisación.

### Slide 3 — Contenido
- **Texto visible:** Introducción; Características; Manifiesto ágil; Principales metodologías ágiles: Adaptive Software Development (ASD), Scrum, XP.
- **Visual:** Mapa de cinco bloques temáticos.
- **Explicación docente:**
  - **Desarrollo:**
    - Observen la ruta: primero veremos las **características** y el **manifiesto ágil**, y después tres metodologías: **ASD, Scrum y XP**.
    - La secuencia va del problema y los valores hacia formas concretas de trabajar: un valor explica qué priorizamos, mientras una metodología traduce esa prioridad en decisiones repetibles.
  - **Ejemplos:** **Global Exchange (conductor):** recorran el mapa desde el problema de consultar tasas hasta prácticas concretas para simular operaciones, ejecutar compra/venta y coordinar clientes, roles e integraciones. **Segundo contexto industrial:** en un equipo de una empresa SaaS, “aprender del cliente” puede convertirse en demos frecuentes de Scrum y pruebas automatizadas de XP; ninguna práctica tiene sentido si no ayuda a resolver una incertidumbre concreta.
  - **Reflexión docente:**
    - La reflexión importante es no adoptar nombres de metodologías como credenciales: hay que poder explicar qué comportamiento organizacional queremos cambiar.
  - **Pregunta desafío:** ¿qué diferencia esperarían entre una metodología y un valor?
  - **Respuestas posibles:**
    1. Un valor orienta decisiones, mientras una metodología organiza actividades y responsabilidades.
    2. “Colaborar con el cliente” es un valor; Scrum o XP ofrecen prácticas para llevarlo al trabajo cotidiano.
    3. Una metodología puede aplicar un valor de distintas maneras según el contexto.
  - **Advertencia:** este mapa anuncia temas; todavía no define ninguno.

### Slide 4 — Ingeniería de Software
- **Texto visible:** La calidad del software, las metodologías y la madurez de los entornos de desarrollo siguen siendo temas de discusión y estudio. Objetivos: maximizar calidad, maximizar productividad, minimizar riesgos.
- **Visual:** Triada calidad-productividad-riesgo.
- **Explicación docente:**
  - **Desarrollo:**
    - Acá quiero que veamos la ingeniería de software como una búsqueda de equilibrio entre **calidad**, **productividad** y **riesgos**, no como una colección de recetas.
    - La calidad reduce incidentes y retrabajo, la productividad relaciona esfuerzo con valor producido, y la gestión de riesgos busca anticipar aquello que puede comprometer ambos resultados.
  - **Ejemplos:** **Global Exchange (conductor):** equilibren calidad, productividad y riesgos en una compra/venta: tasas variables, fondos y pagos deben ser correctos, auditables e integrados con servicios externos. **Segundo contexto industrial:** en una aplicación bancaria, liberar rápido una modificación de transferencias puede ser productivo en apariencia, pero una falla de autorización transforma ese ahorro en un riesgo operativo y reputacional. En otro entorno industrial, producir más rápido en una planta manufacturera puede aumentar errores; por eso mejorar el proceso significa ajustar el trabajo completo, no comprar una herramienta mágica.
  - **Reflexión docente:**
    - La decisión profesional consiste en elegir controles proporcionales al impacto, no en optimizar una sola dimensión.
  - **Pregunta desafío:** ¿qué objetivo entra en conflicto en un proyecto real?
  - **Respuestas posibles:**
    1. Aumentar productividad reduciendo tiempos puede poner en riesgo la calidad.
    2. Agregar controles puede mejorar calidad, pero disminuir la velocidad si se los aplica sin criterio.
    3. Eliminar riesgos suele requerir inversión y puede afectar el presupuesto o el plazo.
  - **Advertencia:** maximizar una dimensión puede afectar a las otras.

### Slide 5 — Ingeniería de Software: implicancias
- **Texto visible:** Constructores básicos más poderosos; mejores técnicas de control de calidad; mejores herramientas y métodos. Todo en la forma de procesos adecuados al tipo de problema y que permitan gestionar los principales riesgos.
- **Visual:** Capas de capacidades que convergen en procesos adecuados.
- **Explicación docente:**
  - **Desarrollo:**
    - Fíjense en cómo los **constructores**, las técnicas de **calidad**, las **herramientas** y los **métodos** solo funcionan bien cuando forman parte de un **proceso** adecuado al problema.
    - Los constructores permiten expresar la solución, las técnicas detectan fallas, las herramientas hacen repetible el trabajo y el método ordena las decisiones; si no se conectan, cada capacidad queda aislada.
  - **Ejemplos:** **Global Exchange (conductor):** adapten herramientas y técnicas para validar primero la integración de tasas y pagos, antes de comprometer la arquitectura completa de fondos, clientes y auditoría. **Segundo contexto industrial:** ante una integración incierta entre una plataforma de comercio y un proveedor de pagos, yo adaptaría primero la forma de validar esa integración y de hacer visible el **riesgo**.
  - **Reflexión docente:**
    - El trade-off es invertir temprano en una prueba que quizá se descarte, para evitar comprometer meses de diseño sobre una suposición falsa.
  - **Pregunta desafío:** ¿qué adaptarían primero ante una integración incierta?
  - **Respuestas posibles:**
    1. Construir un prototipo o prueba técnica de la interfaz.
    2. Incorporar una revisión temprana con el sistema externo.
    3. Reservar una iteración para medir compatibilidad antes de comprometer todo el diseño.
  - **Advertencia:** más herramientas no significa automáticamente más calidad.

### Slide 6 — Dificultades en producción de software
- **Texto visible:** Esencia; complejidad; conformidad; necesidad de cambios; invisibilidad.
- **Visual:** Cinco dificultades alrededor de la producción.
- **Explicación docente:**
  - **Desarrollo:**
    - En este slide quiero que reconozcamos cinco dificultades propias del software: **esencia**, **complejidad**, **conformidad**, necesidad de **cambios** e **invisibilidad**.
    - La **esencia** del software está en resolver problemas mediante abstracciones, reglas y comportamientos; no se trata de fabricar un objeto físico que podamos inspeccionar directamente.
    - La complejidad surge de muchas reglas relacionadas; la conformidad, de encajar en normas y sistemas existentes; los cambios alteran esas relaciones, y la invisibilidad hace difícil saber cuánto está realmente terminado.
    - Es como una ciudad cuyas reglas pueden cambiar y cuya estructura no se ve desde afuera: necesitamos un proceso para hacerla comprensible y gobernable.
  - **Ejemplos:** **Global Exchange (conductor):** observen la esencia como dificultad del software: reglas de conversión, tasas variables, roles, fondos y auditoría forman una complejidad abstracta que cambia y no se inspecciona físicamente. **Segundo contexto industrial:** en un sistema legado de gobierno, una nueva consulta puede depender de formatos antiguos, normas administrativas y datos dispersos: no alcanza con agregar una pantalla.
  - **Reflexión docente:**
    - La reflexión es que estas propiedades explican por qué un plan aparentemente simple puede volverse costoso y por qué necesitamos evidencia frecuente.
  - **Pregunta desafío:** ¿cuál de estas dificultades aparece primero en un proyecto estudiantil?
  - **Respuestas posibles:**
    1. La complejidad, cuando se acumulan reglas y excepciones.
    2. Los cambios, cuando el usuario prueba una primera versión y reformula lo que necesita.
    3. La invisibilidad, cuando el equipo cree avanzar pero no puede mostrar un resultado verificable.
  - **Advertencia:** **esencia** no es un título de sección: es una de las dificultades que debemos analizar; identificar estas dificultades no significa que sean imposibles de gestionar.

### Slide 7 — Proceso de Software
- **Texto visible:** “Conjunto relacionado de actividades y tareas implicadas en el desarrollo y evolución de un sistema software” (Sommerville).
- **Visual:** Cita destacada con atribución.
- **Explicación docente:**
  - **Desarrollo:**
    - Quiero que retengamos esta definición: un **proceso** es un conjunto relacionado de **actividades y tareas** para el **desarrollo y evolución** del software. “Relacionado” importa: los requisitos orientan el diseño, el diseño guía la construcción, las pruebas aportan evidencia y la operación devuelve información para evolucionar.
    - Si solo codificáramos, nos faltarían actividades como entender requisitos, probar, integrar, entregar y mantener.
  - **Ejemplos:** **Global Exchange (conductor):** conecten requisitos de consulta y simulación con diseño, construcción, pruebas, operación y evolución de compra/venta, pagos, fondos e integraciones externas. **Segundo contexto industrial:** en una plataforma de salud, un cambio de regla clínica debe pasar por análisis, implementación, validación y despliegue controlado; codificar sin esa cadena puede producir una función técnicamente correcta pero clínicamente riesgosa.
  - **Reflexión docente:**
    - La decisión profesional es hacer visible quién necesita cada salida del proceso y evitar tareas que solo sobreviven por costumbre.
  - **Pregunta desafío:** ¿qué tarea faltaría si solo se considerara codificar?
  - **Respuestas posibles:**
    1. Validar requisitos con quienes usarán el sistema.
    2. Probar el comportamiento y registrar defectos.
    3. Planificar la entrega y preparar la operación.
    4. Mantener el sistema cuando cambien las necesidades.
  - **Advertencia:** proceso no es sinónimo de herramienta ni de documento.

### Slide 8 — Modelos de Procesos de Software
- **Texto visible:** Modelos Tradicionales (MTs): Cascada, Prototipación, Desarrollo en Fases, Espiral, RUP. Métodos Ágiles (MAs): ASD, Scrum, XP.
- **Visual:** Dos familias enfrentadas.
- **Explicación docente:**
  - **Desarrollo:**
    - Ahora separamos dos familias: los **modelos tradicionales**, como **Cascada, Prototipación, Espiral y RUP**, y los **métodos ágiles**, como **ASD, Scrum y XP**.
    - Son rutas con distintas maneras de planificar y aprender: los tradicionales suelen hacer más explícito el plan y los ágiles acortan el ciclo entre construcción y feedback.
  - **Ejemplos:** **Global Exchange (conductor):** comparen una ruta tradicional para fondos, pagos, roles y auditoría con una ruta ágil para explorar tasas variables y experiencia de consulta, según riesgo y estabilidad. **Segundo contexto industrial:** en una empresa de transporte, el sistema de control de vehículos puede requerir un enfoque más tradicional por sus integraciones, regulaciones y necesidad de trazabilidad. En cambio, la aplicación móvil para consultar recorridos puede desarrollarse con ciclos ágiles, porque necesita probar rápidamente la experiencia y adaptarse al feedback.
  - **Reflexión docente:**
    - La elección impacta contratos, roles, documentación y expectativas, por lo que no debe reducirse a una preferencia personal.
  - **Pregunta desafío:** ¿qué criterio usarían para elegir una familia?
  - **Respuestas posibles:**
    1. La estabilidad de los requisitos y el costo de cambiarlos.
    2. El nivel de riesgo técnico y la necesidad de obtener feedback temprano.
    3. El tamaño del equipo, la distribución de las personas y las obligaciones contractuales.
  - **Advertencia:** clasificar no significa que todos los modelos de una familia sean idénticos.

### Slide 9 — Modelo en Cascada
- **Texto visible:** Es el más antiguo; debe completarse un estado antes del siguiente; ayuda a visualizar qué hacer; su principal problema es que no refleja la realidad. Etapas: análisis de requerimientos, diseño del sistema, diseño de programas, codificación, testing unitario e integrado, testing del sistema, testing de aceptación, operación y mantención.
- **Visual:** Flujo lineal de nueve etapas.
- **Explicación docente:**
  - **Desarrollo:**
    - Observen la **Cascada**: presenta una **secuencia lineal** de etapas, desde requisitos y diseño hasta codificación, **testing**, operación y mantenimiento.
    - Cada etapa produce entradas para la siguiente, y los distintos tipos de testing buscan verificar desde unidades hasta aceptación del usuario.
    - Es como avanzar por compuertas, suponiendo que una etapa queda cerrada antes de abrir la siguiente.
  - **Ejemplos:** **Global Exchange (conductor):** en Cascada, cerrar requisitos y diseño de tasas, compra/venta, fondos y auditoría antes de construir puede dar trazabilidad, pero encarece un cambio tardío en una integración externa. **Segundo contexto industrial:** en un proyecto gubernamental contratado con alcance y trazabilidad formal, esta estructura puede facilitar aprobaciones, pero un cambio tardío en una norma puede recorrer toda la cadena.
  - **Reflexión docente:**
    - El trade-off es previsibilidad documental frente a mayor costo de aprender después; funciona mejor cuando el problema y sus restricciones se conocen con suficiente estabilidad.
  - **Pregunta desafío:** ¿qué ocurre si un requerimiento cambia después del testing?
  - **Respuestas posibles:**
    1. Hay que volver a una etapa anterior y revisar diseño o código.
    2. Se generan retrabajo, costo y posible demora en la entrega.
    3. Si el cambio es imprescindible, conviene analizar su impacto y decidir si se incorpora ahora o en una versión posterior.
  - **Advertencia:** el esquema ideal no representa toda la realidad del desarrollo.

### Slide 10 — Modelo en Cascada: en la práctica
- **Texto visible:** “En la práctica…” y las etapas: análisis de requerimientos, diseño del sistema, diseño de programas, codificación, testing unitario e integrado, testing del sistema, testing de aceptación, operación y mantención.
- **Visual:** Malla de las 8 etapas interconectadas: todas se conectan entre sí para representar la práctica.
- **Explicación docente:**
  - **Desarrollo:**
    - Acá contrastamos el modelo ideal con la **práctica**: en un proyecto real aparecen retornos, ajustes y **feedback**.
    - Esos retornos muestran que el conocimiento se construye durante el proyecto, aunque el diagrama lineal lo oculte.
    - Volver al diseño después de probar es como corregir un plano cuando la obra revela una incompatibilidad.
  - **Ejemplos:** **Global Exchange (conductor):** la práctica devuelve desde testing una incompatibilidad en tasas o pagos hacia requisitos y diseño; el retorno es necesario aunque el diagrama parezca lineal. **Segundo contexto industrial:** en una migración bancaria, una prueba de conciliación puede revelar que el supuesto sobre datos históricos era incorrecto y obligar a revisar análisis y diseño.
  - **Reflexión docente:**
    - La reflexión es que reconocer el retrabajo permite presupuestarlo y gobernarlo; ocultarlo solo transforma una realidad normal en una sorpresa para el cliente.
  - **Pregunta desafío:** ¿qué costo tiene ocultar esos retornos?
  - **Respuestas posibles:**
    1. Se subestima el esfuerzo y se prometen plazos irreales.
    2. Los defectos reaparecen porque nadie registra dónde se originó el problema.
    3. El equipo pierde capacidad de planificar al no reconocer el retrabajo.
  - **Advertencia:** el retorno visual no convierte Cascada en un método ágil.

### Slide 11 — Modelo de Prototipación
- **Texto visible:** Permite la construcción rápida del sistema o parte de éste. Usuario y desarrollador tienen una visión común. Se reduce el riesgo y la incertidumbre.
- **Visual:** Tres beneficios conectados a un prototipo.
- **Explicación docente:**
  - **Desarrollo:**
    - Pensemos el **prototipo** como un instrumento para construir una **visión común** y reducir **riesgo e incertidumbre**.
    - La forma visual permite que usuario y desarrollador discutan comportamiento, datos y lenguaje antes de confundir una maqueta con un requisito completo.
    - Una pantalla navegable puede mostrar qué significa “confirmar” antes de invertir en todo el sistema.
  - **Ejemplos:** **Global Exchange (conductor):** prototipen la consulta de tasas y simulación para que clientes y operadores validen roles, compra/venta y fondos antes de construir pagos y auditoría. **Segundo contexto industrial:** en una aseguradora, un prototipo del alta de un siniestro puede descubrir que el operador necesita consultar pólizas mientras carga evidencias; esa conversación evita diseñar un flujo imposible de usar.
  - **Reflexión docente:**
    - El trade-off es dedicar tiempo a algo descartable para evitar construir la solución equivocada, y documentar qué hipótesis quedó validada.
  - **Pregunta desafío:** ¿qué pregunta del usuario responderían con un prototipo?
  - **Respuestas posibles:**
    1. “¿El flujo de reserva resulta claro?”
    2. “¿Qué información necesita ver antes de confirmar?”
    3. “¿Prefiere este comportamiento de búsqueda o aquel?”
    4. “¿La navegación coincide con su tarea real?”
  - **Advertencia:** un prototipo puede no tener la calidad, seguridad o robustez del producto final.

### Slide 12 — Modelo de Prototipación: flujo
- **Texto visible:** Requerimientos del prototipo; diseño del prototipo; sistema prototipo; testing; revisión (repetida); requerimientos del sistema; sistema entregado.
- **Visual:** Diagrama de flujo del ciclo de prototipo y revisión: bloques principales horizontales (requerimientos → diseño → sistema prototipo → testing → sistema entregado), bloques de revisión superiores interconectados con flechas bidireccionales.
- **Explicación docente:**
  - **Desarrollo:**
    - Sigan el flujo: definimos **requerimientos**, diseñamos el prototipo, lo probamos y repetimos la **revisión** hasta aclarar qué necesita el sistema entregado.
    - Requerimientos, diseño y testing se retroalimentan: cada observación puede corregir la comprensión inicial y hacer más preciso el siguiente ciclo.
    - Cada vuelta es una prueba de comprensión entre cliente y equipo.
  - **Ejemplos:** **Global Exchange (conductor):** repitan requerimientos, diseño, testing y revisión sobre la simulación hasta aclarar tasas variables, confirmación de compra/venta, fondos y comprobantes de pago. **Segundo contexto industrial:** en un portal de trámites, una revisión con funcionarios puede mostrar que “enviar solicitud” requiere guardar un borrador y emitir un comprobante, dos estados que no aparecían en la primera descripción.
  - **Reflexión docente:**
    - La decisión madura es distinguir aprendizaje necesario de cambio de alcance, para que el prototipo no se convierta en una promesa ilimitada.
  - **Pregunta desafío:** ¿qué requisito cambiaría después de observar el prototipo?
  - **Respuestas posibles:**
    1. El contenido o el orden de los datos mostrados.
    2. El paso de confirmación si el usuario no entiende cuándo se concreta la operación.
    3. La regla de validación que el prototipo revela como ambigua.
  - **Advertencia:** revisar no significa aceptar cualquier cambio sin analizar su impacto.

### Slide 13 — Modelo de Desarrollo en Fases
- **Texto visible:** El valor es aproximado. Hoy el mercado no acepta grandes retardos. Desarrollar en fases reduce los retardos; el sistema puede entregarse por partes. El usuario tiene funcionalidad mientras se desarrolla el resto. Sistemas en producción y desarrollo funcionan en paralelo.
- **Visual:** Dos carriles: producción para el cliente y desarrollo para la siguiente versión.
- **Explicación docente:**
  - **Desarrollo:**
    - En el **desarrollo en fases**, el sistema puede entregarse por partes: una versión funciona en **producción** mientras el equipo desarrolla la siguiente en paralelo.
    - El valor temprano depende de que cada fase sea operable, compatible con los datos existentes y suficientemente completa para una tarea real.
  - **Ejemplos:** **Global Exchange (conductor):** entreguen primero consulta de tasas y simulación, luego compra/venta y finalmente pagos, fondos, auditoría e integraciones, manteniendo operativa cada fase. **Segundo contexto industrial:** en una empresa de logística podemos habilitar primero la consulta de envíos y luego la reprogramación, manteniendo reglas claras para que la segunda versión no rompa la primera. En un sistema de logística, hoy podemos resolver las altas de usuarios y trabajar después en los reportes.
  - **Reflexión docente:**
    - El impacto organizacional es que soporte, usuarios y operaciones deben convivir con una evolución continua, no con un único lanzamiento final.
  - **Pregunta desafío:** ¿qué funcionalidad entregarían primero y por qué?
  - **Respuestas posibles:**
    1. La que aporte valor independiente y pueda usarse sin esperar todo el sistema.
    2. La que reduzca el mayor riesgo técnico o de negocio.
    3. La que permita obtener feedback de usuarios reales con seguridad.
  - **Advertencia:** entregar por partes exige cuidar compatibilidad, datos y operación.

### Slide 14 — Modelo de Desarrollo en Fases: versiones
- **Texto visible:** Desarrolladores: construir versión 1, construir versión 2, construir versión 3. Usuarios: usar versión 1, usar versión 2, usar versión 3. Sistemas en desarrollo y sistemas en producción/operación.
- **Visual:** Dos líneas temporales paralelas con tres versiones.
- **Explicación docente:**
  - **Desarrollo:**
    - Observen las dos líneas: los **desarrolladores** construyen versiones y los **usuarios** usan cada una en **producción**.
    - Eso es desarrollo **incremental**: cada versión es un peldaño utilizable, no solo una promesa.
    - La operación devuelve señales que el equipo no puede obtener en un entorno aislado: uso real, errores de datos, tiempos de respuesta y necesidades emergentes.
  - **Ejemplos:** **Global Exchange (conductor):** hagan que clientes y operadores usen una versión con consulta y simulación mientras se construyen compra/venta, fondos y pagos; el uso real prioriza la siguiente versión. **Segundo contexto industrial:** en un SaaS de facturación, la versión 1 puede mostrar que los clientes completan la emisión pero abandonan la configuración de impuestos; ese feedback cambia la prioridad de la versión 2.
  - **Reflexión docente:**
    - El riesgo es evolucionar sin estrategia de compatibilidad y obligar a los usuarios a reaprender todo en cada entrega.
  - **Pregunta desafío:** ¿qué feedback debe volver desde la versión 1?
  - **Respuestas posibles:**
    1. Qué funciones se usan realmente y cuáles generan confusión.
    2. Qué errores o problemas de rendimiento aparecen en operación.
    3. Qué necesidad nueva surge al trabajar con la primera versión.
  - **Advertencia:** varias versiones requieren una estrategia clara de evolución y compatibilidad.

### Slide 15 — Modelo en Espiral
- **Texto visible:** Combina actividades de desarrollo con análisis de riesgo. Es iterativo: planificación, análisis de riesgo, ingeniería, evaluación. En cada iteración se evalúan alternativas y se elige una; los gestores intentan eliminar o minimizar el riesgo.
- **Visual:** Diagrama del Modelo Espiral de Boehm (1986): espiral en sentido horario dividida en cuatro cuadrantes — Planificación (sup. izq.), Análisis de Riesgo (sup. der.), Ingeniería (inf. der.), Evaluación del Cliente (inf. izq.) — con línea punteada de salida hacia el Sistema final.
- **Explicación docente:**
  - **Desarrollo:**
    - En el modelo en **Espiral**, cada vuelta combina **planificación**, análisis de **riesgo**, **ingeniería** y evaluación.
    - La planificación define qué queremos aprender, el análisis ordena amenazas, la ingeniería construye evidencia y la evaluación decide si esa evidencia cambia el rumbo.
    - La idea es investigar primero el obstáculo más peligroso antes de comprometer más recursos.
  - **Ejemplos:** **Global Exchange (conductor):** prioricen en la espiral el riesgo de tasas variables y de una integración externa de pagos, construyendo evidencia antes de comprometer compra/venta, fondos y auditoría. **Segundo contexto industrial:** en una integración con identidad digital del Estado, una primera vuelta podría comprobar autenticación, disponibilidad y manejo de datos antes de desarrollar todos los trámites.
  - **Reflexión docente:**
    - El costo de este enfoque es exigir gestores capaces de comparar alternativas y no usar “riesgo” como excusa para investigar indefinidamente.
  - **Pregunta desafío:** ¿qué riesgo justificaría una primera iteración?
  - **Respuestas posibles:**
    1. La integración con un sistema externo que todavía no fue probada.
    2. La viabilidad de una tecnología central del producto.
    3. Un requisito crítico cuyo significado no está acordado con el cliente.
  - **Advertencia:** la espiral muestra una estrategia de análisis; no indica valores numéricos de riesgo.

### Slide 16 — Modelo en Espiral: esquema de Boehm
- **Texto visible:** Recolección de requerimientos y planificación inicial; planificación basada en comentarios del cliente; evaluación del cliente; análisis de riesgo basado en requerimientos iniciales y reacción del cliente; prototipo inicial, prototipo del siguiente nivel, sistema de ingeniería; ingeniería, evaluación del cliente, planificación, análisis de riesgo, decisión de seguir/no seguir. Boehm (1986).
- **Visual:** Espiral con puntos de decisión y prototipos.
- **Explicación docente:**
  - **Desarrollo:**
    - Lean este esquema de **Boehm** como un ciclo de aprendizaje: partimos de requerimientos, construimos prototipos, recibimos la **evaluación** del cliente, analizamos el riesgo y tomamos la decisión explícita de **seguir/no seguir**.
    - Los prototipos no son solo pantallas: pueden ser pruebas de arquitectura, datos o integración, y su valor está en producir evidencia para la decisión.
  - **Ejemplos:** **Global Exchange (conductor):** sigan el ciclo de Boehm con un prototipo de consulta, tasas y pago; la evaluación de clientes, roles y auditoría decide continuar, ajustar o detener la inversión. **Segundo contexto industrial:** en una plataforma de salud, si una prueba demuestra que el sistema no puede garantizar la trazabilidad clínica requerida, detenerse temprano puede proteger a pacientes y presupuesto, aunque sea incómodo para la organización.
  - **Reflexión docente:**
    - El cliente funciona como una brújula que permite corregir el rumbo, pero la decisión necesita criterios técnicos y de negocio acordados.
  - **Pregunta desafío:** ¿qué evidencia justificaría no seguir?
  - **Respuestas posibles:**
    1. Un prototipo que demuestra que la solución no es técnicamente viable.
    2. Un riesgo crítico cuyo costo supera el beneficio esperado.
    3. La evaluación del cliente que confirma que el producto no resuelve la necesidad principal.
  - **Advertencia:** decidir continuar no elimina los riesgos restantes.

### Slide 17 — RUP
- **Texto visible:** Rational Unified Process. Es un framework para describir procesos específicos. Cada ciclo abarca cuatro fases: concepción/planificación, elaboración, construcción y transición. Su esencia es la iteración y cada iteración resulta en un entregable preferentemente ejecutable.
- **Visual:** Cuatro fases en ciclo.
- **Explicación docente:**
  - **Desarrollo:**
    - Presento **RUP** como un **framework** para describir procesos específicos.
    - Sus fases son **concepción/planificación, elaboración, construcción y transición**, pero la esencia está en la **iteración** y en obtener un entregable preferentemente ejecutable.
    - La concepción alinea propósito, la elaboración reduce riesgos arquitectónicos, la construcción completa capacidades y la transición lleva el resultado a quienes lo operan; se relacionan porque cada fase prepara decisiones para la siguiente sin negar iteraciones.
  - **Ejemplos:** **Global Exchange (conductor):** usen RUP para iterar desde concepción y elaboración de reglas de tasas e integraciones hasta construcción y transición de compra/venta, fondos, pagos y auditoría. **Segundo contexto industrial:** en un sistema legado de seguros, un entregable ejecutable de elaboración podría demostrar la integración con pólizas antes de construir todos los módulos.
  - **Reflexión docente:**
    - El riesgo organizacional es convertir las fases en burocracia secuencial y perder el feedback que RUP intenta preservar.
  - **Pregunta desafío:** ¿qué entregable ejecutable validaría una iteración?
  - **Respuestas posibles:**
    1. Un flujo de alta que pueda probarse de punta a punta.
    2. Un componente integrado que demuestre una decisión técnica.
    3. Una versión instalable con una funcionalidad prioritaria y verificable.
  - **Advertencia:** una fase no debe confundirse con una única entrega aislada.

### Slide 18 — RUP: esquema visual
- **Texto visible:** `RUP – Rational Unified Process`.
- **Visual:** Imagen del diagrama de fases del RUP (`assets/rup.gif`), ciclo con iteraciones y las fases de concepción, elaboración, construcción y transición.
- **Explicación docente:**
  - **Desarrollo:**
    - Fíjense en el ciclo visual de **RUP**: las fases se atraviesan con **iteraciones** y con distinta **intensidad**.
    - La intensidad expresa dónde conviene concentrar esfuerzo, no una duración obligatoria: la elaboración puede pesar más al inicio cuando la arquitectura, los requisitos y las interfaces son inciertos.
  - **Ejemplos:** **Global Exchange (conductor):** lean las intensidades de RUP según el riesgo: elaboración para arquitectura de tasas, fondos y pagos; construcción para operaciones; transición para clientes, roles y auditoría. **Segundo contexto industrial:** en una empresa de telecomunicaciones, validar temprano una decisión de integración con la red puede ahorrar una reconstrucción posterior, mientras que un producto simple quizá necesite menos elaboración formal.
  - **Reflexión docente:**
    - La reflexión es ajustar el proceso al perfil de riesgo y poder justificar por qué una fase recibe más trabajo.
  - **Pregunta desafío:** ¿por qué elaboración puede pesar más al inicio?
  - **Respuestas posibles:**
    1. Porque ayuda a validar decisiones arquitectónicas tempranas.
    2. Porque permite aclarar requisitos y riesgos antes de comprometer la construcción.
    3. Porque no todos los proyectos tienen el mismo perfil de riesgo, así que la intensidad puede variar.
  - **Advertencia:** el esquema visual no agrega actividades que no estén rotuladas.

### Slide 19 — Problemas de los Modelos Tradicionales
- **Texto visible:** Incumplimiento de plazos; reducción de funcionalidades previstas; difícil adaptación a cambios; excesiva documentación.
- **Visual:** Cuatro señales de riesgo.
- **Explicación docente:**
  - **Desarrollo:**
    - Recapitulemos los problemas que impulsan la búsqueda de métodos ágiles: incumplir **plazos**, reducir **funcionalidades**, adaptarse mal a los **cambios** y producir **documentación** excesiva.
    - Están relacionados: los cambios generan retrabajo, el retrabajo presiona el plazo, y la presión puede llevar a recortar funciones o producir documentos que ya no orientan.
    - Un plan puede llegar tarde con un informe perfecto cuando el negocio ya cambió.
  - **Ejemplos:** **Global Exchange (conductor):** identifiquen cómo requisitos cambiantes, tasas variables e integraciones externas pueden retrasar consulta, compra/venta y pagos, forzando recortes o documentación que ya no guía. **Segundo contexto industrial:** en una compañía de comercio electrónico, llegar después de una campaña estacional puede volver irrelevante una funcionalidad aunque técnicamente esté bien construida.
  - **Reflexión docente:**
    - La conversación madura no es eliminar controles, sino identificar cuál problema destruye más valor y qué proceso lo hace visible antes.
  - **Pregunta desafío:** ¿qué problema atacarían primero?
  - **Respuestas posibles:**
    1. Los cambios, si las necesidades del negocio todavía son inciertas.
    2. Los plazos, si la entrega tardía vuelve inútil la solución.
    3. La documentación, si consume esfuerzo sin apoyar decisiones importantes.
  - **Advertencia:** estas limitaciones no demuestran que todo modelo tradicional sea inútil.

### Slide 20 — Métodos Ágiles
- **Texto visible:** En febrero de 2001, tras una reunión en Utah-EEUU, nace el término “Ágil” aplicado al desarrollo. Participaron 17 expertos. Se buscaban valores y principios para desarrollar rápidamente y responder a cambios. Se ofrecía una alternativa a procesos tradicionales.
- **Visual:** Línea de tiempo 2001 con 17 participantes y dos objetivos.
- **Explicación docente:**
  - **Desarrollo:**
    - En febrero de **2001**, en Utah, **17 expertos** se reunieron para expresar **valores y principios** que favorecieran el desarrollo rápido y la respuesta al **cambio**.
    - La reunión fue un punto de convergencia de ideas, no la creación de una metodología única: los valores dan dirección y las prácticas los vuelven observables en decisiones diarias.
  - **Ejemplos:** **Global Exchange (conductor):** usen la motivación ágil para validar frecuentemente tasas, simulación y operaciones con clientes y roles, sin abandonar controles de fondos, pagos y auditoría. **Segundo contexto industrial:** en un equipo de banca, decir que se valora la colaboración no alcanza si el cliente solo revisa al final; habría que diseñar una práctica de validación frecuente compatible con seguridad y auditoría.
  - **Reflexión docente:**
    - El impacto profesional es evitar usar la palabra “ágil” como una etiqueta que oculta una forma de trabajo contradictoria.
  - **Pregunta desafío:** ¿por qué distinguir valores de prácticas?
  - **Respuestas posibles:**
    1. Los valores indican qué priorizamos; las prácticas muestran cómo llevarlo al trabajo.
    2. Dos equipos pueden compartir un valor y aplicar prácticas distintas.
    3. Una práctica puede cambiar sin abandonar el valor que la orienta.
  - **Advertencia:** el dato histórico se presenta según la fuente.

### Slide 21 — Métodos Ágiles: definición
- **Texto visible:** Las MAs promueven prácticas adaptativas en lugar de predictivas, como las MTs. Promueven adaptabilidad a cambios por sobre planeamiento estricto.
- **Visual:** Adaptativo frente a predictivo.
- **Explicación docente:**
  - **Desarrollo:**
    - Acá distingamos un enfoque **adaptativo** de uno **predictivo**: los métodos ágiles priorizan responder al **cambio** por encima de sostener una planificación estricta.
    - Lo adaptativo usa ciclos de aprendizaje para revisar alcance y prioridades; lo predictivo intenta definir más por adelantado y controlar desviaciones.
  - **Ejemplos:** **Global Exchange (conductor):** comparen un plan predictivo para auditoría y fondos con una respuesta adaptativa a tasas variables, nuevas reglas de compra/venta y cambios en integraciones externas. **Segundo contexto industrial:** en una startup SaaS, una modificación de precios puede cambiar la prioridad del producto en semanas, mientras una actualización regulatoria de telecomunicaciones puede exigir una replanificación con trazabilidad.
  - **Reflexión docente:**
    - Un plan adaptativo es como un mapa que corregimos al conocer el terreno, pero seguimos teniendo un destino; el riesgo aparece cuando cambiar no tiene costo explícito ni decisión responsable.
  - **Pregunta desafío:** ¿qué cambio obligaría a replanificar?
  - **Respuestas posibles:**
    1. Un requisito regulatorio nuevo que cambie el alcance.
    2. Una tecnología que deje de estar disponible o no cumpla lo esperado.
    3. Un cambio de prioridad que vuelva menos valiosa la funcionalidad prevista.
  - **Advertencia:** adaptarse no significa trabajar sin objetivos.

### Slide 22 — Métodos Ágiles: manifiesto
- **Texto visible:** “Según el manifiesto ágil se valora:”.
- **Visual:** Umbral que introduce cuatro valores; los valores se detallan en los slides siguientes.
- **Explicación docente:**
  - **Desarrollo:**
    - Este slide funciona como transición: el **manifiesto ágil** introduce los **valores** que leeremos a continuación.
    - Los valores se relacionan porque priorizan comunicación, evidencia, colaboración y respuesta, pero no eliminan los elementos de la derecha: proceso, documentación, contrato y plan siguen teniendo utilidad.
  - **Ejemplos:** **Global Exchange (conductor):** anticipen cómo los cuatro valores orientarían el sistema: hablar con clientes y roles, mostrar software de consulta y simulación, colaborar sobre pagos y responder a tasas cambiantes. **Segundo contexto industrial:** en una implementación hospitalaria, colaborar con usuarios no reemplaza registros de seguridad; define cómo los usamos sin convertirlos en una barrera para aprender.
  - **Reflexión docente:**
    - Les propongo anticipar qué debería priorizar un equipo que necesita aprender rápido, sin adelantar formulaciones que todavía no aparecen.
  - **Pregunta desafío:** ¿qué valor esperan que aparezca primero?
  - **Respuestas posibles:**
    1. Individuos e interacciones, porque la coordinación sostiene el trabajo.
    2. Software que funciona, porque permite verificar el progreso con evidencia.
    3. Colaboración con el cliente, porque ayuda a validar que se construye lo correcto.
  - **Advertencia:** no atribuyamos a este slide formulaciones que aparecen en los siguientes.

### Slide 23 — Individuos e interacciones
- **Texto visible:** Individuos e interacciones sobre proceso y herramientas. La gente es el principal factor de éxito; es más importante construir un buen equipo que el entorno. El equipo configura su entorno según sus necesidades.
- **Visual:** Equipo al centro, proceso y herramientas como soporte.
- **Explicación docente:**
  - **Desarrollo:**
    - En este valor se priorizan **individuos e interacciones** sobre **proceso y herramientas**.
    - La interacción permite resolver ambigüedades, mientras el proceso y las herramientas ayudan a repetir y sostener lo acordado; son complementos, no sustitutos.
    - No estamos rechazando herramientas: estamos recordando que buenas herramientas no sustituyen la coordinación entre las personas que deciden y construyen.
  - **Ejemplos:** **Global Exchange (conductor):** prioricen la conversación entre cliente, operador, analista y desarrollador para definir qué significa tasa válida, cliente habilitado, fondo disponible y pago autorizado antes de automatizar. **Segundo contexto industrial:** en una integración de facturación, una conversación entre el equipo y contabilidad puede descubrir que “cliente activo” tiene una definición distinta en cada sistema, antes de automatizar un error.
  - **Reflexión docente:**
    - La reflexión es que una organización que compra herramientas sin cambiar sus conversaciones puede digitalizar la confusión.
  - **Pregunta desafío:** ¿qué interacción evitaría un malentendido?
  - **Respuestas posibles:**
    1. Una conversación directa entre usuario, analista y desarrollador antes de implementar.
    2. Una demostración breve donde el equipo observe cómo se interpreta el requisito.
    3. Una revisión conjunta de criterios de aceptación.
  - **Advertencia:** priorizar personas no elimina procesos ni herramientas.

### Slide 24 — Software que funciona
- **Texto visible:** Desarrollar software que funciona más que conseguir buena documentación. No producir documentos salvo que sean necesarios de forma inmediata para una decisión importante; deben ser breves y centrarse en lo fundamental.
- **Visual:** Entregable funcionando frente a documento mínimo útil.
- **Explicación docente:**
  - **Desarrollo:**
    - Cuando priorizamos **software que funciona**, buscamos evidencia concreta de avance, sin eliminar toda **documentación**.
    - El software ejecutable permite observar comportamiento; la documentación conserva decisiones, restricciones y conocimiento necesario para operar o auditar.
    - Una prueba ejecutable puede enseñarnos más sobre una función que una promesa escrita, pero un documento sigue siendo útil si apoya una decisión importante.
  - **Ejemplos:** **Global Exchange (conductor):** demuestren software funcionando con consulta de tasas y simulación, conservando documentación breve pero necesaria sobre pagos, fondos, roles, auditoría e integraciones. **Segundo contexto industrial:** en un SaaS, una demo puede probar el flujo de suscripción, pero un registro breve de permisos y despliegue evita que soporte dependa de una sola persona.
  - **Reflexión docente:**
    - El trade-off es escribir lo que reduce una decisión o riesgo real, no producir páginas que nadie consulta.
  - **Pregunta desafío:** ¿qué documento sigue siendo necesario?
  - **Respuestas posibles:**
    1. Una especificación breve de una decisión arquitectónica relevante.
    2. Instrucciones mínimas para operar o desplegar el sistema.
    3. Un registro de requisitos regulatorios o de seguridad que debamos demostrar.
  - **Advertencia:** documentación mínima no significa documentación inexistente.

### Slide 25 — Colaboración con el cliente
- **Texto visible:** La colaboración con el cliente más que la negociación de un contrato. Interacción constante entre cliente y equipo; la colaboración marca la marcha y asegura el éxito.
- **Visual:** Cliente y equipo conectados por ciclos de conversación.
- **Explicación docente:**
  - **Desarrollo:**
    - La **colaboración con el cliente** mantiene el proyecto orientado: el cliente participa como copiloto que corrige el rumbo, no como alguien que firma al inicio y reaparece al final.
    - La colaboración conecta necesidad, prioridad y criterio de aceptación; sin esa conexión, el equipo puede entregar exactamente lo pedido y aun así resolver mal el problema.
    - El contrato sigue existiendo, pero la interacción y el **feedback** ayudan a tomar mejores decisiones.
  - **Ejemplos:** **Global Exchange (conductor):** mantengan a clientes y operadores dentro del ciclo para validar tasas, simulaciones, compra/venta y pagos; el contrato no reemplaza su feedback sobre fondos y roles. **Segundo contexto industrial:** en una aplicación de salud, validar con admisión el flujo real puede revelar pasos operativos que no aparecen en el contrato inicial.
  - **Reflexión docente:**
    - El desafío organizacional es reservar tiempo y autoridad del cliente, porque la colaboración sin disponibilidad se vuelve una formalidad.
  - **Pregunta desafío:** ¿qué decisión requiere validación frecuente?
  - **Respuestas posibles:**
    1. La prioridad de las funcionalidades de la próxima entrega.
    2. El flujo de una operación que afecta directamente al usuario.
    3. La interpretación de un requisito ambiguo o una regla de negocio.
  - **Advertencia:** colaborar no elimina acuerdos ni responsabilidades contractuales.

### Slide 26 — Responder a los cambios
- **Texto visible:** Responder a cambios más que seguir estrictamente un plan. Los cambios pueden aparecer en requisitos, tecnología o equipo. La planificación debe ser flexible y abierta.
- **Visual:** Plan flexible con desvíos controlados.
- **Explicación docente:**
  - **Desarrollo:**
    - **Responder a los cambios** no significa abandonar el plan: significa mantenerlo flexible frente a cambios en requisitos, tecnología o equipo.
    - Cambio, impacto y decisión deben quedar relacionados: si agregamos una regla, algo puede postergarse, encarecerse o requerir más pruebas.
  - **Ejemplos:** **Global Exchange (conductor):** respondan a una tasa variable, una regla nueva de fondos o una caída de un proveedor externo, reordenando trabajo y explicitando impacto en pagos, auditoría y plazos. **Segundo contexto industrial:** en un sistema de telecomunicaciones, una nueva obligación de retención de datos puede afectar arquitectura, operación y contrato, no solo una historia del backlog.
  - **Reflexión docente:**
    - Como en un mapa, podemos cambiar el camino sin perder el destino; la reflexión es que la flexibilidad necesita transparencia para no convertirse en deuda oculta.
  - **Pregunta desafío:** ¿cómo registrarían el impacto de un cambio?
  - **Respuestas posibles:**
    1. Describiendo qué alcance, plazo, costo y riesgo modifica.
    2. Reordenando prioridades y dejando explícita la decisión.
    3. Validando con el cliente qué compromiso se posterga si se incorpora el cambio.
  - **Advertencia:** responder al cambio requiere evaluar prioridades.

### Slide 27 — Agilidad vs. proceso
- **Texto visible:** CMM/CMMI y XP pueden complementarse; los métodos ágiles coinciden con la esencia del mejoramiento de procesos bajo una interpretación menos literal; enfatizan gestión de proyectos, no gestión de procesos.
- **Visual:** Intersección entre gestión de procesos y prácticas técnicas.
- **Explicación docente:**
  - **Desarrollo:**
    - No planteemos una falsa dicotomía entre **CMM/CMMI** y **XP**: la agilidad y la **mejora de procesos** pueden complementarse.
    - CMM/CMMI puede ayudar a institucionalizar capacidades, mientras XP aporta prácticas concretas para construir con feedback técnico; una cosa evalúa madurez del entorno y la otra mejora el trabajo cotidiano.
  - **Ejemplos:** **Global Exchange (conductor):** combinen mejora de procesos con prácticas técnicas: auditorías y trazabilidad para pagos y fondos pueden convivir con pruebas automáticas e integración continua de tasas y compra/venta. **Segundo contexto industrial:** en una empresa de software para gobierno, las retrospectivas y pruebas automáticas pueden convivir con evidencias formales de proceso.
  - **Reflexión docente:**
    - El riesgo es medir cumplimiento sin aprendizaje o practicar agilidad sin capacidad de sostenerla.
  - **Pregunta desafío:** ¿qué práctica ágil aporta evidencia de mejora?
  - **Respuestas posibles:**
    1. Una retrospectiva que registra una acción y verifica si funcionó.
    2. La integración continua, si permite observar y reducir fallas repetidas.
    3. La medición de tiempos de entrega y defectos, interpretada junto con el contexto.
  - **Advertencia:** no confundir gestión de proyecto con gestión completa del proceso.

### Slide 28 — Interrogantes
- **Texto visible:** ¿Resuelven los métodos ágiles todos los problemas? ¿Son aplicables a todo desarrollo? ¿Cuánta agilidad? ¿Cuánto proceso? Desafío: encontrar equilibrio. Desarrollos potenciales: modelos balanceados y mecanismos para selección, adaptación, implantación y adopción.
- **Visual:** Balanza agilidad-proceso con preguntas abiertas.
- **Explicación docente:**
  - **Desarrollo:**
    - Estas preguntas nos obligan a ejercer **juicio contextual**: debemos seleccionar, adaptar, implantar y lograr la adopción de un equilibrio entre agilidad y proceso.
    - La agilidad necesaria depende de incertidumbre, impacto, regulación, tamaño del equipo y capacidad real de colaboración.
  - **Ejemplos:** **Global Exchange (conductor):** ajusten la agilidad: ciclos cortos para consultar tasas y simular, controles formales para fondos, pagos, roles, auditoría e integraciones críticas. **Segundo contexto industrial:** en un sistema de pagos, podemos usar ciclos cortos para explorar experiencia de usuario, pero exigir controles fuertes en autorización, auditoría y recuperación.
  - **Reflexión docente:**
    - Elegir agilidad es como ajustar una receta a los comensales y restricciones reales; la decisión profesional debe poder explicarse con riesgos observables.
  - **Pregunta desafío:** ¿cuánta agilidad necesita este proyecto?
  - **Respuestas posibles:**
    1. La suficiente para recibir feedback temprano sobre las partes inciertas.
    2. Menos flexibilidad en aspectos regulados o críticos que requieren trazabilidad.
    3. Una combinación: ciclos cortos para construir y controles formales para riesgos específicos.
  - **Advertencia:** responder “siempre ágil” o “siempre tradicional” evita el análisis.

### Slide 29 — Metodologías Ágiles
- **Texto visible:** Adaptive Software Development (ASD); Programación Extrema (XP); SCRUM.
- **Visual:** Tres rutas metodológicas.
- **Explicación docente:**
  - **Desarrollo:**
    - Vamos a estudiar **ASD, XP y Scrum** como metodologías con énfasis distintos.
    - Pueden pensarlas como tres lentes: **ASD** pone el foco en la adaptación, **XP** en prácticas técnicas y **Scrum** en la coordinación del trabajo.
  - **Ejemplos:** **Global Exchange (conductor):** usen ASD para aprender sobre tasas variables y comportamiento de clientes, XP para proteger reglas y pagos con pruebas, y Scrum para ordenar incrementos del sistema. **Segundo contexto industrial:** en un producto SaaS complejo, Scrum puede ordenar prioridades, XP reducir regresiones y ASD orientar el aprendizaje cuando cambian las hipótesis; sus aportes se relacionan, pero no son intercambiables.
  - **Reflexión docente:**
    - El trade-off es sumar prácticas solo cuando cubren una necesidad, porque combinar etiquetas sin capacidad puede aumentar ceremonias y confusión.
  - **Pregunta desafío:** ¿qué problema parece resolver mejor cada una?
  - **Respuestas posibles:**
    1. ASD, la adaptación y el aprendizaje en sistemas complejos.
    2. XP, la calidad técnica y el feedback frecuente del código.
    3. Scrum, la organización del trabajo incremental y la inspección del avance.
  - **Advertencia:** no las tratemos como sinónimos.

### Slide 30 — Adaptive Software Development
- **Texto visible:** Desarrollado por J. Highsmith en 2000. Idea fundamental: “Balancearse en el borde del Caos”. Equilibrio entre creatividad e innovación y administración de lo que se hace.
- **Visual:** Borde entre creatividad y administración.
- **Explicación docente:**
  - **Desarrollo:**
    - En **ASD**, “balancearse en el borde del **caos**” es una metáfora del equilibrio entre **creatividad e innovación** y la **administración** de lo que hacemos.
    - La creatividad genera alternativas y la administración pone límites de tiempo, presupuesto y responsabilidad; ambas se necesitan para que el aprendizaje llegue a una decisión.
  - **Ejemplos:** **Global Exchange (conductor):** balanceen explorar nuevas tasas y experiencias de simulación con administrar límites de riesgo, fondos, pagos, auditoría y compromisos con integraciones externas. **Segundo contexto industrial:** en una startup que explora una función de inteligencia artificial, conviene experimentar con usuarios, pero definir una hipótesis, una revisión y criterios de privacidad antes de escalarla.
  - **Reflexión docente:**
    - Innovar sin administrar recursos es tan riesgoso como administrar sin aprender.
  - **Pregunta desafío:** ¿qué límite mantiene productivo ese borde?
  - **Respuestas posibles:**
    1. Un objetivo claro que oriente la exploración.
    2. Iteraciones con resultados revisables y límites de tiempo.
    3. Criterios para detener una idea cuando el riesgo supera su valor.
  - **Advertencia:** caos no significa ausencia de dirección.

### Slide 31 — Proceso del ASD
- **Texto visible:** `Proceso del ASD`.
- **Visual:** Recreación SVG del ciclo iterativo ASD; la imagen original está referenciada como `image6.png`.
- **Explicación docente:**
  - **Desarrollo:**
    - Observen el carácter cíclico del **proceso ASD**: cada vuelta combina adaptación, **aprendizaje** y **feedback** antes de comprometer la siguiente.
  - **Ejemplos:** **Global Exchange (conductor):** cierren cada ciclo ASD probando consulta, simulación o compra/venta con clientes y roles, aprendiendo de tasas, pagos y auditoría para adaptar la siguiente iteración. **Segundo contexto industrial:** en un sistema de transporte, una iteración puede probar una regla de asignación con operadores reales y usar resultados observables para ajustar el siguiente experimento.
  - **Reflexión docente:**
    - Adaptar sin aprendizaje sería reaccionar; aprender sin feedback sería especular, y el ciclo conecta ambos con una decisión.
  - **Pregunta desafío:** ¿qué feedback cerraría el ciclo?
  - **Respuestas posibles:**
    1. La evaluación del usuario sobre un comportamiento entregado.
    2. El resultado de una prueba técnica sobre el riesgo principal.
    3. La revisión del equipo sobre qué decisión produjo o no el resultado esperado.
  - **Advertencia:** el diagrama no define una duración ni una métrica.

### Slide 32 — Uso actual del ASD
- **Texto visible:** Casi no se utiliza porque no especifica en detalle pautas de desarrollo y gestión. Puede utilizarse complementado con otra metodología mejor definida. Provee conceptos sobre filosofía ágil, sistemas complejos, trabajo colaborativo y agilidad administrativa.
- **Visual:** Filosofía ASD conectada a una metodología complementaria.
- **Explicación docente:**
  - **Desarrollo:**
    - La fuente señala que **ASD** se usa poco porque tiene poca **especificidad** sobre pautas de desarrollo y gestión, pero conserva valor como filosofía para sistemas complejos y trabajo colaborativo.
    - Esa abstracción ayuda a pensar, pero no resuelve por sí sola cómo ordenar un backlog, desplegar o verificar calidad.
  - **Ejemplos:** **Global Exchange (conductor):** complementen ASD con Scrum o XP para hacer operativas sus ideas: aprendizaje sobre tasas y clientes, backlog de fondos y pagos, y prácticas verificables de auditoría. **Segundo contexto industrial:** en una organización que adopta ASD junto con Scrum, puede usar la filosofía para orientar aprendizaje y Scrum para hacer visibles responsabilidades y ciclos.
  - **Reflexión docente:**
    - La decisión es complementar sin fingir que una idea general ya constituye un proceso operativo.
  - **Pregunta desafío:** ¿qué detalle faltaría para aplicarlo mañana?
  - **Respuestas posibles:**
    1. Cómo planificar y priorizar el trabajo de una iteración.
    2. Qué roles, prácticas y entregables debe usar el equipo.
    3. Cómo evaluar resultados y decidir los próximos pasos.
  - **Advertencia:** el uso actual se comunica según la fuente, no como dato actualizado.

### Slide 33 — Programación Extrema (XP)
- **Texto visible:** Desarrollada por K. Beck en 1999. Probablemente la metodología ágil más conocida y utilizada. Conjunto de prácticas conocidas combinadas innovadoramente; “Extrema” por llevar prácticas a niveles extremos.
- **Visual:** Prácticas conocidas llevadas a un extremo coherente.
- **Explicación docente:**
  - **Desarrollo:**
    - **XP**, desarrollada por K.
    - Beck, combina prácticas conocidas de una manera intensiva; por eso se habla de llevarlas a un nivel **extremo**.
    - Las prácticas se refuerzan: pruebas dan feedback, integración lo vuelve frecuente, refactorización mantiene el diseño y programación en pares distribuye comprensión.
  - **Ejemplos:** **Global Exchange (conductor):** lleven XP al extremo con pruebas automatizadas de tasas, fondos y pagos, integración frecuente de proveedores externos, refactorización y conocimiento compartido del equipo. **Segundo contexto industrial:** en un producto de comercio electrónico con cambios diarios, ese conjunto puede reducir regresiones, pero exige disciplina, automatización y un equipo dispuesto a revisar su código.
  - **Reflexión docente:**
    - Llevar las pruebas y el feedback al extremo significa practicarlos continuamente, no una sola vez al final.
  - **Pregunta desafío:** ¿qué práctica conocida reforzarían primero?
  - **Respuestas posibles:**
    1. Pruebas automatizadas, si hoy los cambios rompen funcionalidades existentes.
    2. Integración continua, si el equipo descubre los conflictos demasiado tarde.
    3. Programación en pares, si el conocimiento está concentrado en una persona.
  - **Advertencia:** “extrema” no significa imprudente.

### Slide 34 — Programación Extrema: esquema
- **Texto visible:** `Programación Extrema (XP)`.
- **Visual:** Recreación SVG del mapa visual de XP; la imagen original está referenciada como `image7.png`.
- **Explicación docente:**
  - **Desarrollo:**
    - Usemos este esquema de **XP** como un mapa: primero vemos cómo se conectan prácticas, **feedback**, calidad y entrega; después estudiaremos cada instrumento en los slides siguientes.
    - La arquitectura del esquema importa: entregas pequeñas producen evidencia, prácticas técnicas hacen seguro cambiar y colaboración evita que la calidad dependa de una persona.
  - **Ejemplos:** **Global Exchange (conductor):** lean el esquema XP como la relación entre entregas pequeñas de consulta/simulación, feedback de clientes y prácticas que hacen seguro cambiar compra/venta, fondos y pagos. **Segundo contexto industrial:** en un sistema legado de telecomunicaciones, integrar gradualmente con pruebas puede ser más valioso que intentar una reescritura completa sin feedback.
  - **Reflexión docente:**
    - La conversación profesional es decidir qué práctica desbloquea a las demás y qué costo de adopción puede sostener el equipo.
  - **Pregunta desafío:** ¿qué relación entre prácticas esperan encontrar?
  - **Respuestas posibles:**
    1. Las entregas pequeñas generan feedback para ajustar el diseño.
    2. Las pruebas automatizadas y la integración frecuente reducen el costo de cambiar.
    3. La colaboración y la propiedad colectiva distribuyen el conocimiento necesario para sostener el ritmo.
  - **Advertencia:** no lean el esquema como una lista independiente.

### Slide 35 — Prácticas de XP I
- **Texto visible:** Planificación incremental; entregas pequeñas; diseño simple; desarrollo previamente probado; refactorización. Se describen historias en tarjetas, tareas, valor temprano, diseño necesario, pruebas automatizadas antes de implementar y mejora continua del código.
- **Visual:** Cinco tarjetas de práctica.
- **Explicación docente:**
  - **Desarrollo:**
    - Recorramos estas prácticas de **XP** como un sistema: la **planificación incremental** y las **entregas pequeñas** generan feedback; el **diseño simple**, las pruebas y la **refactorización** mantienen el código preparado para cambiar.
    - Una historia en tarjeta expresa valor, una tarea permite construirlo y una prueba convierte el comportamiento esperado en evidencia; después la refactorización mejora la estructura sin cambiar ese comportamiento.
  - **Ejemplos:** **Global Exchange (conductor):** escriban primero pruebas para tasas variables, disponibilidad de fondos, autorización de compra/venta y errores de pago; luego refactoricen sin perder ese comportamiento. **Segundo contexto industrial:** en un sistema de facturación, una prueba de vencimiento puede revelar una regla de negocio antes de que llegue a producción y luego protegerla durante una refactorización.
  - **Reflexión docente:**
    - La simplicidad exige disciplina continua y una decisión consciente sobre qué no construir todavía.
  - **Pregunta desafío:** ¿qué prueba escribirían antes de implementar?
  - **Respuestas posibles:**
    1. Una prueba del caso normal que defina el comportamiento esperado.
    2. Una prueba de un límite o error importante para hacer visible la regla.
    3. Una prueba automatizada que pueda repetirse después de cada cambio.
  - **Advertencia:** la simplicidad exige disciplina continua; no significa hacer un diseño descuidado.

### Slide 36 — Prácticas de XP II
- **Texto visible:** Programación en pares; propiedad colectiva; integración continua; ritmo sostenible; cliente presente. Se describen revisión entre pares, código compartido, integración y pruebas frecuentes, límites a horas extra y cliente como miembro del equipo.
- **Visual:** Cinco tarjetas de colaboración y calidad.
- **Explicación docente:**
  - **Desarrollo:**
    - Estas prácticas distribuyen conocimiento y sostienen la calidad: la programación en **pares** revisa decisiones, la **propiedad colectiva** evita dueños exclusivos, la **integración continua** detecta conflictos pronto y el **cliente** permanece cerca del equipo.
    - El ritmo sostenible protege calidad y continuidad, no es permiso para trabajar sin exigencia.
  - **Ejemplos:** **Global Exchange (conductor):** usen pares, propiedad colectiva, integración continua y cliente presente para evitar que una sola persona domine reglas de tasas, roles, fondos o auditoría. **Segundo contexto industrial:** en una empresa de salud, compartir propiedad no elimina controles de acceso ni responsabilidad, pero evita que una única persona sea el cuello de botella.
  - **Reflexión docente:**
    - Se relacionan con un riesgo organizacional concreto: si una persona conoce el código crítico, una ausencia puede detener la entrega; si se integra tarde, el equipo pierde la capacidad de aislar causas.
  - **Pregunta desafío:** ¿qué riesgo reduce la integración frecuente?
  - **Respuestas posibles:**
    1. Que dos cambios incompatibles se descubran al final.
    2. Que una rama se aleje demasiado del código compartido.
    3. Que los defectos se acumulen y resulte difícil identificar su origen.
  - **Advertencia:** un ritmo sostenible no justifica reducir calidad.

### Slide 37 — Uso actual de XP
- **Texto visible:** El 38% del mercado “ágil” utiliza XP. Esto se atribuye a prácticas bien definidas. En Agile Alliance existe amplia mayoría de usuarios de XP.
- **Visual:** El valor 38% se muestra como dato textual de la fuente, sin gráfico proporcional adicional.
- **Explicación docente:**
  - **Desarrollo:**
    - El slide presenta que el **38%** del mercado “ágil” utiliza **XP**; voy a tratarlo como un dato de esta fuente, no como una estadística vigente.
    - Además del porcentaje, debemos preguntar qué se contó como “utilizar XP”: adoptar todas las prácticas, algunas o solo declarar la etiqueta.
  - **Ejemplos:** **Global Exchange (conductor):** no usen una estadística de XP para decidir por etiqueta; verifiquen qué prácticas necesita el equipo para proteger tasas, pagos, fondos e integraciones externas. **Segundo contexto industrial:** en una empresa de desarrollo, basar una transformación en ese número sin revisar fecha, muestra y definición puede llevar a copiar una moda en lugar de resolver un problema.
  - **Reflexión docente:**
    - Es una fotografía del material, no un pronóstico.
  - **Pregunta desafío:** ¿qué fecha y muestra necesitaríamos para actualizarlo?
  - **Respuestas posibles:**
    1. La fecha de recolección del estudio.
    2. El tamaño y la composición de la muestra.
    3. La definición de “mercado ágil” y de “utiliza XP”.
    4. La fuente metodológica y su margen de error.
  - **Advertencia:** no presentemos el 38% como estadística actual sin verificación.

### Slide 38 — SCRUM
- **Texto visible:** Scrum es la metodología más utilizada por equipos ágiles. Es una manera de trabajar en equipo con resultado incremental; el resultado es un entregable. Periodos cortos denominados sprints, base del método.
- **Visual:** Sprint como contenedor de trabajo y entregable.
- **Explicación docente:**
  - **Desarrollo:**
    - Presentemos **Scrum** desde tres ideas: trabajo en equipo, períodos cortos llamados **sprints** y un resultado **incremental** que pueda inspeccionarse.
    - El sprint conecta una prioridad con una revisión: el equipo selecciona trabajo, construye un incremento y obtiene información para decidir después.
  - **Ejemplos:** **Global Exchange (conductor):** definan un sprint que entregue un flujo integrado de consulta, simulación o compra/venta, con criterios de aceptación y evidencia sobre tasas y fondos. **Segundo contexto industrial:** en una plataforma de ventas, un sprint que solo termina componentes aislados no demuestra valor; un flujo integrado de carrito y confirmación sí permite conversar con usuarios, aunque todavía falten promociones.
  - **Reflexión docente:**
    - Cada sprint es una caja de tiempo que debe terminar con algo entregable, no solo con tareas marcadas.
  - **Pregunta desafío:** ¿qué hace que un incremento sea útil?
  - **Respuestas posibles:**
    1. Que resuelva una necesidad prioritaria del usuario.
    2. Que esté integrado y probado con un criterio de aceptación claro.
    3. Que pueda demostrarse o ponerse en uso sin depender de trabajo esencial pendiente.
  - **Advertencia:** un sprint no es solo una lista de tareas.

### Slide 39 — Scrum: actividades
- **Texto visible:** Sprint Planning; Daily; Sprint Review; Sprint Retrospective.
- **Visual:** Ciclo de cuatro actividades alrededor del sprint.
- **Explicación docente:**
  - **Desarrollo:**
    - Veamos la función de cada actividad: **Sprint Planning** prepara el trabajo, la **Daily** sincroniza al equipo, la **Sprint Review** inspecciona el resultado y la **Retrospective** mejora la forma de trabajar.
  - **Ejemplos:** **Global Exchange (conductor):** en Planning seleccionen una operación prioritaria, en Daily destraben tasas o pagos, en Review validen el incremento con clientes y en Retrospective mejoren el proceso. **Segundo contexto industrial:** en un equipo distribuido que mantiene una app bancaria, la Daily puede revelar un bloqueo de integración, la Review validar el comportamiento y la Retrospective decidir cómo evitar que vuelva a ocurrir.
  - **Reflexión docente:**
    - Se relacionan como un circuito de compromiso, coordinación, evidencia y aprendizaje: si una actividad se vuelve reporte burocrático, se rompe el circuito.
  - **Pregunta desafío:** ¿qué problema pertenece a una retrospectiva y no a una review?
  - **Respuestas posibles:**
    1. “El código se integra demasiado tarde” es un problema del proceso y corresponde a la retrospectiva.
    2. “El usuario necesita otro comportamiento” corresponde a la revisión del producto.
    3. “Las reuniones no están ayudando” puede analizarse en la retrospectiva.
  - **Advertencia:** las ceremonias deben producir conversación útil, no ritual vacío.

### Slide 40 — Scrum: herramientas
- **Texto visible:** Product Backlog; Sprint Backlog; Burn Down.
- **Visual:** Tres artefactos/herramientas conectados al sprint.
- **Explicación docente:**
  - **Desarrollo:**
    - Diferenciemos estas herramientas: el **Product Backlog** reúne y ordena necesidades del producto; el **Sprint Backlog** concentra el trabajo del sprint; y el **Burn Down** visualiza el trabajo restante.
  - **Ejemplos:** **Global Exchange (conductor):** ordenen el Product Backlog con consulta, tasas, compra/venta, fondos, pagos, auditoría e integraciones; armen el Sprint Backlog y usen Burn Down solo como señal de avance. **Segundo contexto industrial:** en un producto de comercio electrónico, una nueva obligación de privacidad cambia la prioridad del Product Backlog, mientras el equipo evalúa si afecta el Sprint Backlog y el Burn Down solo refleja el trabajo restante.
  - **Reflexión docente:**
    - El primero expresa valor futuro, el segundo el compromiso de corto plazo y el tercero una señal de avance; ninguno reemplaza una conversación sobre calidad o riesgo.
  - **Pregunta desafío:** ¿qué artefacto cambia ante una nueva prioridad?
  - **Respuestas posibles:**
    1. Primero cambia el Product Backlog, porque se reordena la prioridad del producto.
    2. El Sprint Backlog puede cambiar si el equipo y el contexto del sprint acuerdan un ajuste.
    3. El Burn Down refleja el avance, pero no decide la prioridad.
  - **Advertencia:** no confundir artefactos con roles.

### Slide 41 — Scrum: roles
- **Texto visible:** Product Owner; Scrum Master; Team (equipo de desarrollo).
- **Visual:** Tres roles alrededor del equipo.
- **Explicación docente:**
  - **Desarrollo:**
    - Acá distinguimos tres roles complementarios: **Product Owner**, **Scrum Master** y **Team**.
    - Son responsabilidades diferentes que coordinan el valor, la forma de trabajo y la construcción; la separación permite que prioridad, facilitación y decisión técnica no queden concentradas sin contraste.
  - **Ejemplos:** **Global Exchange (conductor):** asignen claridad al Product Owner sobre valor y prioridades, al Scrum Master sobre el flujo de trabajo y al Team sobre construir operaciones seguras para clientes y roles. **Segundo contexto industrial:** en una empresa SaaS, si quien define ingresos también decide cómo implementar y bloquea toda discusión, el equipo puede optimizar una métrica comercial a costa de calidad o sostenibilidad.
  - **Reflexión docente:**
    - La reflexión no es crear jerarquías rígidas, sino proteger claridad y responsabilidad compartida.
  - **Pregunta desafío:** ¿qué conflicto aparece si una sola persona decide todo?
  - **Respuestas posibles:**
    1. Se mezclan prioridades del producto con decisiones sobre cómo trabajar.
    2. Se reduce la revisión independiente y aumenta la dependencia de una sola persona.
    3. El equipo puede perder participación y capacidad de asumir decisiones técnicas.
  - **Advertencia:** mantengamos el alcance del material y no inventemos responsabilidades no visibles.

### Slide 42 — Scrum: esquema visual
- **Texto visible:** No hay texto extraíble; el slide contiene una imagen asociada por `slide42.xml.rels` como `image8.png`.
- **Visual:** Recreación SVG de un tablero/ciclo Scrum sin valores ni etiquetas inventadas.
- **Explicación docente:**
  - **Desarrollo:**
    - Usemos este esquema como integración visual: las **actividades**, **herramientas** y **roles** se organizan alrededor del **sprint** para producir un **incremento**.
    - La relación es de responsabilidades y evidencia: el trabajo se selecciona, se construye, se observa y se conversa con quienes pueden cambiar la prioridad.
  - **Ejemplos:** **Global Exchange (conductor):** integren roles, backlog, actividades y sprint alrededor de un incremento verificable: consulta o simulación conectada con tasas, fondos, pagos y auditoría. **Segundo contexto industrial:** en un proyecto de gobierno, ese circuito ayuda a detectar que una entrega técnicamente completa no es operable por los funcionarios, antes de escalarla.
  - **Reflexión docente:**
    - Es el tablero de una expedición: reúne el mapa, los instrumentos y las personas, pero la expedición solo aprende si mira el terreno real.
  - **Pregunta desafío:** ¿qué relación entre elementos permite inspeccionar el avance?
  - **Respuestas posibles:**
    1. El Sprint Backlog muestra el trabajo elegido y el Burn Down muestra cuánto resta.
    2. La Daily permite al equipo contrastar el plan con el avance real.
    3. La Review conecta el incremento con la evaluación del cliente y del producto.
  - **Advertencia:** el esquema integra conceptos previos; no agrega etiquetas nuevas.

### Slide 43 — Uso actual de Scrum
- **Texto visible:** Después de XP, Scrum es uno de los enfoques más utilizados, aunque lejos de XP. Se investiga integrar XP y Scrum: Scrum provee marco de gestión y XP prácticas bien definidas.
- **Visual:** Scrum como marco y XP como prácticas conectadas.
- **Explicación docente:**
  - **Desarrollo:**
    - La fuente propone complementar **Scrum** y **XP**: Scrum puede ofrecer el **marco de gestión**, mientras XP aporta **prácticas** técnicas bien definidas.
    - Scrum organiza la conversación sobre qué entregar y cuándo inspeccionarlo; XP reduce el riesgo de que ese incremento llegue con código frágil.
  - **Ejemplos:** **Global Exchange (conductor):** combinen Scrum para priorizar consulta, compra/venta y pagos con XP para probar tasas, fondos e integraciones; verifiquen el uso real antes de adoptar la combinación. **Segundo contexto industrial:** en un sistema legado, Scrum puede ordenar la modernización por partes y XP proteger cada cambio con pruebas e integración, pero la combinación exige capacitación y tiempo para automatizar.
  - **Reflexión docente:**
    - Es como usar Scrum para ordenar el viaje y XP para mejorar los hábitos con los que lo recorremos.
  - **Pregunta desafío:** ¿qué problema resolvería cada enfoque?
  - **Respuestas posibles:**
    1. Scrum ayuda a organizar prioridades, sprints e inspección del avance.
    2. XP ayuda a sostener calidad mediante pruebas, integración y colaboración técnica.
    3. Juntos pueden cubrir gestión y construcción, si el equipo realmente necesita ambos.
  - **Advertencia:** combinar no siempre es necesario ni automático.

### Slide 44 — Ventajas de las MAs
- **Texto visible:** Iteraciones cortas; límites de tiempo de dos a ocho semanas; adaptación a nuevos riesgos; orientación a personas; trabajo en equipo.
- **Visual:** Cinco ventajas en una matriz de beneficios.
- **Explicación docente:**
  - **Desarrollo:**
    - En las **MAs**, las **iteraciones cortas** y el **timebox** de dos a ocho semanas permiten recibir feedback, adaptar el trabajo y detectar riesgos antes de gastar todo el presupuesto.
    - El límite de tiempo obliga a elegir un objetivo y hace comparable el aprendizaje entre ciclos; también puede dejar fuera trabajo importante si se usa para presionar en lugar de enfocar.
  - **Ejemplos:** **Global Exchange (conductor):** en iteraciones de dos a ocho semanas validen una parte útil, como consulta o simulación, y midan feedback, riesgos de tasas, fondos, pagos y colaboración del equipo. **Segundo contexto industrial:** en una aplicación de turnos, dos semanas pueden alcanzar para validar la reserva, pero no para afirmar que están resueltos seguridad, carga y operación.
  - **Reflexión docente:**
    - También ponen en el centro a las personas y al equipo.
  - **Pregunta desafío:** ¿qué feedback esperan obtener en dos semanas?
  - **Respuestas posibles:**
    1. Si una funcionalidad resuelve la tarea principal del usuario.
    2. Qué riesgo técnico o defecto aparece al integrar la entrega.
    3. Si el equipo puede sostener el ritmo y qué obstáculo necesita remover.
  - **Advertencia:** acortar ciclos no elimina la necesidad de priorizar.

### Slide 45 — Desventajas de las MAs
- **Texto visible:** Adaptarse al cambio puede llevar al caos; difícil mantener el interés de clientes; prioridades difíciles con múltiples actores; simplicidad implica trabajo extra; contratos pueden ser un problema.
- **Visual:** Cinco riesgos con señal de advertencia.
- **Explicación docente:**
  - **Desarrollo:**
    - No ocultemos los límites: adaptarse puede producir **caos**, varios clientes pueden dificultar las **prioridades**, la simplicidad exige trabajo extra y los **contratos** pueden restringir el cambio.
    - Estos riesgos se conectan: si todos pueden cambiar prioridades y nadie decide, el equipo pierde foco; si se exige simplicidad sin refactorizar, aparece deuda técnica.
  - **Ejemplos:** **Global Exchange (conductor):** controlen el caos de cambios en tasas, clientes y pagos con backlog priorizado, timeboxes, criterios de aceptación y acuerdos sobre auditoría e integraciones externas. **Segundo contexto industrial:** en un contrato de outsourcing, la colaboración ágil necesita una forma explícita de aceptar cambios sin transferir todo el riesgo al proveedor o al cliente.
  - **Reflexión docente:**
    - La flexibilidad sin acuerdos convierte el proyecto en una puerta giratoria.
  - **Pregunta desafío:** ¿qué control evitaría ese caos?
  - **Respuestas posibles:**
    1. Un backlog priorizado con una persona o grupo que decida.
    2. Timeboxes y criterios de aceptación para limitar el trabajo de cada ciclo.
    3. Un acuerdo explícito sobre cómo se solicitan, analizan y aprueban cambios.
  - **Advertencia:** reconocer desventajas es parte de elegir responsablemente.

### Slide 46 — Métodos Ágiles vs. Tradicionales
- **Texto visible:** Tabla comparativa: heurísticas vs normas; preparados para cambios vs resistencia; imposición interna vs externa; proceso menos controlado vs más controlado; contrato flexible vs prefijado; cliente en el equipo vs reuniones; grupos pequeños y mismo sitio vs grandes/distribuidos; menor énfasis en arquitectura vs arquitectura esencial y modelada.
- **Visual:** Comparación de dos columnas, sin alterar el contenido.
- **Explicación docente:**
  - **Desarrollo:**
    - Lean cada fila como un contraste de **énfasis**: heurísticas frente a normas, adaptación frente a resistencia al cambio, contrato flexible frente a prefijado, cliente integrado frente a reuniones, y menor o mayor énfasis en **arquitectura**.
    - Cada fila representa una decisión sobre gobernanza, comunicación y riesgo, no una frontera técnica absoluta.
  - **Ejemplos:** **Global Exchange (conductor):** comparen agilidad y tradición: iterar la consulta de tasas puede convivir con arquitectura, trazabilidad y normas más estrictas para fondos, pagos, roles y auditoría. **Segundo contexto industrial:** en un sistema crítico de energía, podemos conservar iteraciones y feedback del equipo, pero reforzar arquitectura, trazabilidad, pruebas y aprobaciones; en un prototipo interno puede pesar más la velocidad de aprendizaje.
  - **Reflexión docente:**
    - El trade-off es agregar controles donde el impacto lo justifica sin convertir todo el proyecto en un circuito inmanejable.
  - **Pregunta desafío:** ¿qué fila cambiaría en un sistema crítico?
  - **Respuestas posibles:**
    1. Aumentaría el énfasis en arquitectura, trazabilidad y normas verificables.
    2. El contrato podría ser más prefijado en obligaciones regulatorias, aunque admita cambios controlados.
    3. Mantendría iteraciones y feedback, pero con controles adicionales de seguridad y calidad.
  - **Advertencia:** la tabla compara tendencias, no clasifica proyectos de forma absoluta.

### Slide 47 — Conclusiones
- **Texto visible:** Las ventajas de las MAs proveen un marco aplicable a entornos sin procesos definidos o vagos, en desarrollo y aseguramiento de calidad. Se ajustan a sistemas pequeños y medianos o productos PC, adecuados a proyectos habituales de la región.
- **Visual:** Síntesis que conecta agilidad, procesos y contexto regional.
- **Explicación docente:**
  - **Desarrollo:**
    - Para cerrar, retomemos la idea central: las ventajas de las MAs pueden ofrecer un marco para contextos con procesos vagos o inexistentes, especialmente en sistemas pequeños y medianos, sin olvidar la **calidad** y el contexto regional que menciona la fuente.
    - Elegir un enfoque es elegir una herramienta adecuada al tamaño y las restricciones del proyecto, y revisar luego si la evidencia confirma esa elección.
  - **Ejemplos:** **Global Exchange (conductor):** cierren evaluando qué combinación conviene: prototipar consulta y simulación, iterar compra/venta y proteger fondos, pagos, auditoría e integraciones según evidencia y contexto. **Segundo contexto industrial:** en una empresa regional que mantiene un sistema legado, empezar con entregas pequeñas y controles de regresión puede ser más realista que imponer una transformación total.
  - **Reflexión docente:**
    - El marco solo produce resultados si la organización puede sostener feedback, priorización, pruebas y decisiones; de lo contrario, las iteraciones pueden repetir desorden.
  - **Pregunta desafío:** ¿qué evidencia justificaría el balance elegido?
  - **Respuestas posibles:**
    1. La estabilidad o variabilidad de los requisitos.
    2. Los riesgos técnicos, regulatorios y de seguridad identificados.
    3. La capacidad del equipo y del cliente para colaborar y sostener feedback.
    4. Resultados de iteraciones previas, como defectos, tiempos de entrega y valor entregado.
  - **Advertencia:** la aplicabilidad declarada pertenece al contexto de la fuente.

### Slide 48 — Muchas gracias
- **Texto visible:** `Muchas gracias`.
- **Visual:** Cierre sobrio con la marca de la Unidad II.
- **Explicación docente:**
  - **Desarrollo:**
    - Para cerrar, les propongo que comparen **modelos**, **métodos**, adaptación, proceso y **feedback** a partir de un caso concreto.
    - No quiero solo el nombre de una metodología: quiero que expliquen qué problema resuelve y qué límites aceptan.
  - **Ejemplos:** **Global Exchange (conductor):** pidan una decisión final sobre el sistema completo: explicar cómo elegirían modelo para tasas y simulación, método para compra/venta y controles para fondos, pagos, roles, auditoría e integraciones. **Segundo contexto industrial:** podemos imaginar una obra de modernización bancaria donde el prototipo valida la experiencia, Scrum ordena entregas y XP protege el código, mientras controles formales cubren auditoría; no hay una etiqueta única que resuelva todo.
  - **Reflexión docente:**
    - La respuesta profesional debe conectar problema, incertidumbre, impacto y capacidad del equipo con una forma de trabajo, y también explicar qué riesgo queda aceptado.
  - **Pregunta desafío:** ¿qué enfoque elegirían para un caso concreto y por qué?
  - **Respuestas posibles:**
    1. Prototipación para un sistema de turnos si la incertidumbre principal está en el flujo con el usuario.
    2. Scrum con prácticas de XP si necesitamos entregas incrementales y calidad técnica frecuente.
    3. Un enfoque más tradicional si los requisitos son estables y la trazabilidad formal es prioritaria.
  - **Advertencia:** una respuesta correcta debe justificar el contexto, no solo nombrar una metodología.

## Criterios de implementación

- La presentación debe renderizar exactamente 48 slides, en el mismo orden.
- Cada slide debe exponer sus notas docentes mediante el panel de notas y la tecla `N`.
- El índice debe permitir saltar a cualquier slide; `←`, `→`, `PageUp`, `PageDown`, `Home`, `End` y espacio deben navegar.
- La interfaz debe ocupar el ancho disponible, adaptarse a móvil, conservar foco visible, contraste suficiente y respetar `prefers-reduced-motion`.
- No se encontraron enlaces públicos en el paquete OOXML de esta fuente.
