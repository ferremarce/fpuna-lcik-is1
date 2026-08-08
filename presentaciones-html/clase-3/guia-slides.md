# Guía de regeneración de la Clase 3

Guía docente para regenerar la presentación de la **Unidad III – Requerimientos de Software**. Conserva los **39 slides**, su orden y su numeración. La presentación HTML de esta clase debe usar esta guía como especificación de contenido, no como sustituto del diseño visual.

## Lectura rápida

- **Fuente:** material de la Clase 3 (Unidad III – Requerimientos de Software). El material original cita a "Prof. Ing. Julia Talavera" como autora; la presentación generada usa la identidad institucional del repositorio (Prof. Lic. Guillermo Jacobo González Rodas Mst. PMP) en la portada, igual que clase-1 y clase-2.
- **Total:** 39 slides.
- **Imágenes:** `assets/rnf-diagrama.png` (slide 10), `assets/tipos-requerimientos.jpeg` (slide 12), `assets/proceso-ir.png` (slides 16, 17, 21, 24, 30 y 33), `assets/verificacion-rnf.png` (slide 32) y `assets/fpuna_logo_institucional.svg` (topbar).
- **Dato sensible:** este material no contiene la contraseña del aula virtual.
- **Separadores repetidos:** los slides 16, 17, 21, 24, 30 y 33 repiten el título "Proceso de la Ingeniería de Requerimientos" con la misma imagen `proceso-ir.png`. Son separadores de fase: se mantienen todos, diferenciados por su eyebrow y por una frase introductoria en el body que orienta la fase en curso.
- **Referencias:** se usan solo las referencias permitidas: Sommerville (cap. 4), Pressman (cap. 7), SWEBOK Guide y IEEE 830.

## Criterio de transcripción

Cada slide se describe en tres capas:

1. **Texto visible:** transcripción del contenido textual del material fuente. Se conservan formulaciones y numeración (RF1–RF4, RNF1–RNF3).
2. **Elementos visuales:** objetos gráficos, imágenes y composición del slide.
3. **Explicación docente:** orientación para presentar el slide, tomada de las notas del orador de la presentación HTML.

## Inventario slide por slide

### Slide 1. Portada Unidad III

**Texto visible**

- `INGENIERÍA DE SOFTWARE I`
- `UNIDAD III – REQUERIMIENTOS DE SOFTWARE`
- `Prof. Lic. Guillermo Jacobo González Rodas Mst. PMP`

**Elementos visuales**

- Slide de apertura con el kicker "01 · Unidad III", título principal, subtítulo de unidad y nombre del docente institucional.
- No contiene imágenes.

**Explicación docente**

- **Desarrollo:**
  - Presentar la Unidad III como el momento en que definimos qué debe hacer el sistema antes de construir nada: los requerimientos son la base del éxito del proyecto.
  - Ubicar el punto en el recorrido del curso: después de estudiar los procesos, ahora decidimos qué construir.
- **Ejemplos:** **Global Exchange (conductor):** decidir qué operaciones de cambio, tasas y controles debe soportar el sistema antes de diseñar nada. **Segundo contexto industrial:** en salud, un sistema de historia clínica exige definir qué registros y permisos se requieren antes de diseñar la interfaz.
- **Reflexión docente:**
  - Un requerimiento mal entendido se multiplica en costos y retrabajo más adelante.
- **Pregunta desafío:** ¿qué puede pasar si un sistema se construye sin acordar antes sus requerimientos?
- **Respuestas posibles:**
  1. Se construye lo que el equipo supone y no lo que el usuario necesita.
  2. Se descubren tarde las discrepancias y se retrabaja.
  3. Se gastan recursos en funciones que nadie usa.
- **Advertencia:** la portada ubica el tema; los conceptos se desarrollan en los siguientes slides.

### Slide 2. Objetivos

**Texto visible**

- `OBJETIVOS`
- `Comprender qué son los requerimientos de software y por qué son importantes`
- `Familiarizarse con los diferentes tipos de requerimientos`
- `Aprender técnicas y herramientas para la obtención, análisis y gestión de requerimientos`

**Elementos visuales**

- Tarjetas numeradas 01/02/03 con el resultado esperado de cada objetivo.

**Explicación docente**

- **Desarrollo:**
  - Tomar los objetivos como criterios de aceptación de la clase: comprender qué son los requerimientos y por qué importan, distinguir los tipos y conocer técnicas y herramientas.
  - Al cierre, volver a ellos para comprobar si podemos aplicarlos.
- **Ejemplos:** **Global Exchange (conductor):** al cierre deberíamos poder clasificar una regla de cambio de divisas como funcional o no funcional. **Segundo contexto industrial:** en transporte, distinguir un requisito de rastreo de envíos (funcional) de uno de rendimiento (no funcional).
- **Reflexión docente:**
  - Un objetivo se demuestra aplicándolo a un caso, no repitiendo la frase.
- **Pregunta desafío:** ¿cómo demostrarían que comprendieron qué es un requerimiento?
- **Respuestas posibles:**
  1. Definiéndolo con palabras propias.
  2. Clasificando ejemplos reales en funcionales y no funcionales.
  3. Justificando por qué un requerimiento es importante para el éxito del sistema.
- **Advertencia:** no confundir comprender un término con poder aplicarlo a un caso concreto.

### Slide 3. Contenido

**Texto visible**

- `CONTENIDO`
- `Requerimientos de Software`
- `Tipos de Requerimientos`
- `Ingeniería de Requerimientos`
- `Proceso de Requerimientos de Software`
- `Obtención de Requerimientos`
- `Análisis de Requerimientos`
- `Especificación de Requerimientos`
- `Verificación de Requerimientos`
- `Validación de Requerimientos`
- `Gestión de Requerimientos`

**Elementos visuales**

- Secuencia numerada de seis etapas: Tipos, Obtención, Análisis, Especificación, Verificación y validación, Gestión.

**Explicación docente**

- **Desarrollo:**
  - Recorrer el mapa de la unidad: qué es un requerimiento, sus tipos, la ingeniería de requerimientos y el proceso completo.
- **Ejemplos:** **Global Exchange (conductor):** el mapa completo aplica al sistema de cambio de divisas, desde el relevamiento de necesidades hasta el control de cambios posteriores. **Segundo contexto industrial:** en banca, el mismo proceso se usa para definir un nuevo producto financiero.
- **Reflexión docente:**
  - El orden no es decorativo: cada fase produce artefactos que alimentan la siguiente.
- **Pregunta desafío:** ¿qué diferencia esperan entre obtener y gestionar requerimientos?
- **Respuestas posibles:**
  1. Obtener reúne necesidades; gestionar controla sus cambios.
  2. La obtención ocurre al inicio; la gestión acompaña todo el proceso.
  3. Sin gestión, un requerimiento nuevo puede llegar sin controlar su impacto.
- **Advertencia:** la lista de temas anticipa el recorrido; no los desarrolla todavía.

### Slide 4. ¿Qué es un Requerimiento de Software?

**Texto visible**

- `Propiedad que debe ser exhibida por un software para resolver un problema particular. (SWEBOK)`
- `Condición o capacidad que necesita el usuario para resolver un problema o conseguir un objetivo determinado.`
- `ERS – Documento formal de Especificación de Requisitos Software`
- `SRS – Software Requirements Specification`

**Elementos visuales**

- Cita de las dos lecturas del requerimiento (propiedad del sistema / capacidad para el usuario).

**Explicación docente**

- **Desarrollo:**
  - Contrastar las dos definiciones: una desde el sistema (propiedad que debe exhibir, SWEBOK) y otra desde el usuario (condición o capacidad que necesita).
  - Presentar ERS y SRS como el documento que formaliza la especificación de requisitos.
- **Ejemplos:** **Global Exchange (conductor):** "calcular la conversión entre divisas en tiempo real" es una capacidad que el usuario necesita y que el sistema debe exhibir. **Segundo contexto industrial:** en logística, "consultar el estado de un envío" es una capacidad que el sistema debe proveer.
- **Reflexión docente:**
  - Las dos miradas conviven: un buen requerimiento satisface tanto la necesidad del usuario como la propiedad verificable del sistema.
- **Pregunta desafío:** ¿una misma frase puede ser un requerimiento válido para el usuario y para el sistema?
- **Respuestas posibles:**
  1. Sí, si expresa una capacidad concreta y verificable.
  2. No, si queda en un deseo general sin criterio de comprobación.
  3. Depende de cuán concreta y medible sea la formulación.
- **Advertencia:** requerimiento y deseo no son lo mismo: un requerimiento se puede verificar.

### Slide 5. Características de Requerimientos

**Texto visible**

- `Los requisitos de un software suelen ser una combinación compleja de los requisitos de diferentes personas en diferentes niveles de una organización y del entorno en el cual operará el software`
- `Es fundamental que un requisito sea verificable`
- `Otros atributos que les caracterizan son: Prioridad; Identificador único`
- `Los requisitos deben ser lo más claros y no ambiguos que se pueda, y cuantificables (si es posible)`

**Elementos visuales**

- Cinco tarjetas de atributos: Verificable, Prioridad, Identificador único, Claro y no ambiguo, Cuantificable.

**Explicación docente**

- **Desarrollo:**
  - Explicar que los requisitos combinan necesidades de distintas personas y del entorno; destacar la verificabilidad y comentar los atributos de prioridad, identificador único, claridad, no ambigüedad y cuantificación.
- **Ejemplos:** **Global Exchange (conductor):** "el sistema debe verificar la tasa vigente antes de cada operación" es verificable y puede tener prioridad alta y un identificador único (RF-010). **Segundo contexto industrial:** en telecomunicaciones, "tiempo máximo de disponibilidad del servicio" se puede cuantificar y verificar.
- **Reflexión docente:**
  - Un requisito que no se puede verificar no se puede probar ni aceptar.
- **Pregunta desafío:** ¿cómo verificarían "la interfaz debe ser amigable"?
- **Respuestas posibles:**
  1. No es verificable tal como está; exige reformularla con criterios medibles.
  2. Podría convertirse en métricas de uso o de tareas completadas.
  3. Se podría reformular como un requisito no funcional cuantitativo.
- **Advertencia:** atributos como la prioridad o el identificador no reemplazan la verificabilidad del requisito.

### Slide 6. Tipos de Requerimientos

**Texto visible**

- `Requerimientos Funcionales`
- `Requerimientos No Funcionales`

**Elementos visuales**

- Dos tarjetas grandes con F y NF (Funcionales / No Funcionales).

**Explicación docente**

- **Desarrollo:**
  - Presentar la clasificación base en funcionales y no funcionales; anunciar que ambos tipos conviven y se complementan en todo sistema.
- **Ejemplos:** **Global Exchange (conductor):** "convertir divisas" es funcional; "responder la consulta de tasas en menos de 2 segundos" es no funcional. **Segundo contexto industrial:** en seguros, "emitir una póliza" es funcional y "cumplir la normativa de protección de datos" es no funcional.
- **Reflexión docente:**
  - Dividir en tipos ayuda a analizar, pero un sistema completo exige atender ambos grupos por igual.
- **Pregunta desafío:** ¿qué tipo se olvida con más frecuencia en los proyectos?
- **Respuestas posibles:**
  1. Los no funcionales, porque no se ven en pantalla.
  2. Los de rendimiento y seguridad, hasta que fallan.
  3. Los de calidad, porque los equipos se concentran en funciones visibles.
- **Advertencia:** un sistema que cumple las funciones pero no las restricciones puede fallar en producción.

### Slide 7. Requerimientos Funcionales

**Texto visible**

- `Se refiere a las capacidades del sistema`
- `Describen las funciones que lleva a cabo el software, cómo debe reaccionar ante ciertas entradas y cómo debe comportarse en situaciones particulares`
- `Describen la funcionalidad o los servicios que se espera que éste provea`
- `Son declaraciones de los servicios que proveerá el sistema, de la manera en que éste reaccionará a entradas particulares`
- `En algunos casos, los requerimientos funcionales de los sistemas también declaran explícitamente lo que el sistema NO debe hacer`

**Elementos visuales**

- Cita con las dimensiones que describen los requerimientos funcionales.

**Explicación docente**

- **Desarrollo:**
  - Definir los requerimientos funcionales como las capacidades y servicios del sistema: funciones, reacciones a entradas y comportamiento en situaciones particulares; recordar que también declaran lo que el sistema NO debe hacer.
- **Ejemplos:** **Global Exchange (conductor):** "el sistema debe validar que el cliente tenga fondos antes de autorizar la venta" y "no debe permitir operaciones con tasas vencidas". **Segundo contexto industrial:** en gobierno, un sistema de trámites debe rechazar solicitudes incompletas.
- **Reflexión docente:**
  - Las declaraciones negativas también son funcionales: evitan comportamientos indeseados y fijan límites verificables.
- **Pregunta desafío:** ¿por qué conviene declarar explícitamente lo que el sistema NO debe hacer?
- **Respuestas posibles:**
  1. Para que el equipo no lo implemente por descuido.
  2. Para fijar límites verificables de comportamiento.
  3. Para evitar interpretaciones divergentes entre clientes y desarrolladores.
- **Advertencia:** las declaraciones negativas deben ser tan verificables como las positivas.

### Slide 8. Ejemplos de Requerimientos Funcionales

**Texto visible**

- `RF1. El sistema controlará el acceso y lo permitirá solamente a usuarios autorizados. Los usuarios deben ingresar al sistema con un nombre de usuario y contraseña`
- `RF2. El campo país consistirá en una lista de preselección. El país asociado a una dirección debe ser previamente registrado en el sistema`
- `RF3. El campo estado, provincia o departamento consistirá en una lista de preselección. A los usuarios se les presentará únicamente los departamentos asociados al país seleccionado previamente`
- `RF4. El sistema enviará un correo electrónico cuando se registre alguna de las siguientes transacciones: pedido de venta de cliente, emisión de factura a cliente y registro de pago de cliente`

**Elementos visuales**

- Cuatro tarjetas RF1–RF4 (RF1 y RF2 en la columna izquierda, RF3 y RF4 en la derecha).

**Explicación docente**

- **Desarrollo:**
  - Recorrer los cuatro ejemplos: RF1 control de acceso, RF2 país como lista de preselección, RF3 departamentos dependientes del país elegido y RF4 envío de correos ante transacciones de venta.
  - Resaltar cómo cada uno se puede verificar.
- **Ejemplos:** **Global Exchange (conductor):** RF4 se traduce a "el sistema envía un correo cuando se registra un pedido, una factura o un pago" y se prueba con datos de prueba. **Segundo contexto industrial:** en comercio electrónico, los mismos ejemplos aplican a cuentas, catálogos y notificaciones.
- **Reflexión docente:**
  - Los ejemplos concretos vuelven comprensible la abstracción "requerimiento funcional".
- **Pregunta desafío:** ¿cómo probarían que se cumple RF1?
- **Respuestas posibles:**
  1. Intentando ingresar sin credenciales y verificando el rechazo.
  2. Validando que solo los usuarios autorizados acceden.
  3. Registrando la operación de ingreso y su resultado.
- **Advertencia:** los ejemplos son ilustrativos; cada proyecto adapta su propio catálogo de requerimientos.

### Slide 9. Requerimientos No Funcionales

**Texto visible**

- `Se refiere a las restricciones y requisitos de calidad`
- `Restricciones sobre las funciones o servicios ofrecidos por el sistema`
- `Incluyen restricciones de tiempo, sobre el proceso de desarrollo, estándares, etc`
- `Se refieren a las propiedades emergentes del sistema como la fiabilidad, la respuesta en el tiempo y la capacidad de almacenamiento`
- `También definen las restricciones del sistema como la capacidad de los dispositivos de entrada/salida y la representación de datos que se utiliza en la interfaz del sistema`

**Elementos visuales**

- Cita que resume la idea de restricción y calidad.

**Explicación docente**

- **Desarrollo:**
  - Definir los no funcionales como restricciones y requisitos de calidad: tiempo, proceso de desarrollo, estándares, y propiedades emergentes como fiabilidad, tiempo de respuesta y almacenamiento.
- **Ejemplos:** **Global Exchange (conductor):** "el sistema debe operar 24x7 con una disponibilidad del 99,5%" es un requerimiento no funcional. **Segundo contexto industrial:** en banca, "las transacciones deben registrar auditoría completa" combina restricción y calidad.
- **Reflexión docente:**
  - Los no funcionales condicionan la arquitectura tanto como los funcionales, aunque no sean visibles en pantalla.
- **Pregunta desafío:** ¿qué no funcional afectaría la elección de arquitectura de Global Exchange?
- **Respuestas posibles:**
  1. El tiempo de respuesta de las tasas en tiempo real.
  2. La seguridad y auditoría de las transacciones.
  3. La capacidad de almacenamiento del histórico.
- **Advertencia:** omitir no funcionales suele manifestarse como una falla grave en producción.

### Slide 10. Requerimientos No Funcionales (diagrama)

**Texto visible**

- `Requerimientos No Funcionales` (título; slide de diagrama)

**Elementos visuales**

- Imagen `assets/rnf-diagrama.png` con la clasificación de los requerimientos no funcionales (producto, organizacionales y externos).

**Explicación docente**

- **Desarrollo:**
  - Presentar el diagrama de clasificación de los requerimientos no funcionales; cada grupo reúne restricciones con una fuente distinta.
- **Ejemplos:** **Global Exchange (conductor):** rendimiento y usabilidad son del producto; la conformidad con normas internas es organizacional; la protección de datos personales es externa. **Segundo contexto industrial:** en salud, la confidencialidad de la historia clínica es una restricción externa impuesta por la normativa.
- **Reflexión docente:**
  - Clasificar por origen ayuda a identificar quién impone cada restricción y quién debe verificar su cumplimiento.
- **Pregunta desafío:** ¿por qué importa saber de dónde proviene una restricción?
- **Respuestas posibles:**
  1. Porque cada origen tiene responsables y plazos distintos.
  2. Porque permite verificar la restricción con la fuente adecuada.
  3. Porque una restricción externa puede cambiar por decisión ajena.
- **Advertencia:** la imagen esquematiza la clasificación; los ejemplos del siguiente slide la concretan.

### Slide 11. Ejemplos de Requerimientos No Funcionales

**Texto visible**

- `Requerimientos del Producto`
- `RNF1. La interfaz de usuario será implementada como HTML simple sin frames ni applets Java`
- `Requerimientos Organizacionales`
- `RNF2. El proceso de desarrollo y los entregables serán conformes a lo establecido en METRICA v3`
- `Requerimientos Externos`
- `RNF3. El sistema no registrará ninguna información personal de los clientes salvo su nombre y número de referencia respetando lo establecido en la Ley Orgánica de Protección de Datos (LOPD)`

**Elementos visuales**

- Tres tarjetas con categoría y ejemplo (Producto / Organizacional / Externos) y cita de las tres categorías.

**Explicación docente**

- **Desarrollo:**
  - Recorrer los tres ejemplos: RNF1 de producto (interfaz HTML simple), RNF2 organizacional (conformidad con METRICA v3) y RNF3 externo (protección de datos según la LOPD).
- **Ejemplos:** **Global Exchange (conductor):** un requisito externo sería no almacenar información personal más allá del nombre y la referencia, respetando la normativa vigente. **Segundo contexto industrial:** en un sistema hospitalario, cumplir la normativa de confidencialidad es un requerimiento externo.
- **Reflexión docente:**
  - La norma cambia según el país y el sector; los ejemplos del material usan referencias vigentes en su contexto original.
- **Pregunta desafío:** ¿cómo verificarían RNF1 (interfaz en HTML simple)?
- **Respuestas posibles:**
  1. Inspeccionando el código de la interfaz.
  2. Revisando que no se usen frames ni applets.
  3. Ejecutando pruebas automatizadas sobre la interfaz.
- **Advertencia:** las normas citadas (METRICA, LOPD) pertenecen al contexto del material; en cada proyecto se aplica la normativa correspondiente.

### Slide 12. Tipos de Requerimientos (imagen)

**Texto visible**

- Slide sin texto en el original; solo imagen. En la presentación se incorpora un título y una frase de contexto.

**Elementos visuales**

- Imagen `assets/tipos-requerimientos.jpeg` con el mapa de tipos de requerimientos.

**Explicación docente**

- **Desarrollo:**
  - Presentar la imagen como síntesis visual de la clasificación; relacionarla con los conceptos ya vistos.
- **Ejemplos:** **Global Exchange (conductor):** ubicar en la imagen las capacidades de cambio de divisas (funcionales) y las restricciones de seguridad (no funcionales). **Segundo contexto industrial:** en logística, ubicar el rastreo de envíos (funcional) y la disponibilidad del servicio (no funcional).
- **Reflexión docente:**
  - Una síntesis visual ayuda a retener la estructura completa antes de profundizar en la ingeniería de requerimientos.
- **Pregunta desafío:** ¿qué elemento de la imagen les resultaría más difícil de verificar?
- **Respuestas posibles:**
  1. Los no funcionales, por ser transversales.
  2. Los que dependen de condiciones externas.
  3. Los que mezclan tipos distintos.
- **Advertencia:** la imagen resume la clasificación; los conceptos se desarrollan a lo largo de la unidad.

### Slide 13. ¿Qué es la Ingeniería de Requisitos?

**Texto visible**

- `"Conjunto de actividades para descubrir, documentar y mantener un conjunto de requisitos"`
- `"Establecer los servicios que el cliente requiere de un sistema y las restricciones bajo las cuales opera y es desarrollado"`

**Elementos visuales**

- Dos tarjetas con las definiciones y cita de la esencia de la disciplina.

**Explicación docente**

- **Desarrollo:**
  - Definir la Ingeniería de Requisitos como el conjunto de actividades para descubrir, documentar y mantener requisitos, y como el proceso de establecer los servicios que el cliente requiere y las restricciones de operación y desarrollo.
- **Ejemplos:** **Global Exchange (conductor):** descubrir que el cliente necesita tasas actualizadas, documentar la regla de conversión y mantenerla cuando cambie. **Segundo contexto industrial:** en telecomunicaciones, definir qué servicios se ofrecen y con qué restricciones de red.
- **Reflexión docente:**
  - La palabra "mantener" es clave: los requisitos evolucionan y la Ingeniería de Requisitos los acompaña durante todo el ciclo de vida.
- **Pregunta desafío:** ¿por qué mantener es parte de la Ingeniería de Requisitos?
- **Respuestas posibles:**
  1. Porque los requisitos cambian durante el ciclo de vida.
  2. Porque sin mantenimiento el documento queda desactualizado.
  3. Porque la gestión de cambios evita inconsistencias.
- **Advertencia:** no confundir Ingeniería de Requisitos con escribir un único documento al inicio del proyecto.

### Slide 14. Proceso de la Ingeniería de Requerimientos (definición)

**Texto visible**

- `"Conjunto estructurado de actividades de cuya ejecución se obtiene, valida y mantiene un documento de requisitos del sistema (ERS)"`

**Elementos visuales**

- Proceso numerado de seis fases: Obtención, Análisis, Especificación, Verificación, Validación, Gestión.

**Explicación docente**

- **Desarrollo:**
  - Definir el proceso como un conjunto estructurado de actividades que obtiene, valida y mantiene el ERS; adelantar las fases del proceso.
- **Ejemplos:** **Global Exchange (conductor):** el ERS documenta qué debe hacer el sistema de cambio de divisas y cómo se valida. **Segundo contexto industrial:** en banca, el ERS de un nuevo producto describe servicios, restricciones y criterios de aceptación.
- **Reflexión docente:**
  - El proceso es estructurado, no rígido: las fases pueden retroalimentarse con nueva información.
- **Pregunta desafío:** ¿qué artefacto produce el proceso de la Ingeniería de Requerimientos?
- **Respuestas posibles:**
  1. El documento de requisitos del sistema (ERS).
  2. Modelos y vistas de apoyo.
  3. Reportes de verificación y validación.
- **Advertencia:** el proceso no termina con el documento inicial: la gestión lo acompaña a lo largo de toda su vida.

### Slide 15. Participantes en el Proceso

**Texto visible**

- `Cliente y Usuarios — Conocen los requisitos adecuados a sus necesidades`
- `Diseñadores — Comprender los requerimientos para lograr un diseño que los satisfaga`
- `Supervisores del Contrato — Establecen los hitos de Control y cronogramas`
- `Gerentes del Negocio — Entienden el impacto en la Organización`
- `Verificadores — Comprender los requerimientos para poder verificar si el sistema los satisface`

**Elementos visuales**

- Tabla de cinco filas con rol, aporte y categoría (Necesidad / Diseño / Control / Negocio / Calidad).

**Explicación docente**

- **Desarrollo:**
  - Presentar los cinco roles y sus aportes complementarios en el proceso de requerimientos.
- **Ejemplos:** **Global Exchange (conductor):** el cliente define las operaciones de cambio, el supervisor fija los hitos, el gerente evalúa el impacto y los verificadores prueban el cumplimiento. **Segundo contexto industrial:** en un proyecto gubernamental, los mismos roles se repiten con distintos interesados.
- **Reflexión docente:**
  - Un proceso unipersonal pierde la visión de algún rol; la colaboración reduce puntos ciegos.
- **Pregunta desafío:** ¿qué pasa si un rol no participa del proceso?
- **Respuestas posibles:**
  1. Se pierde la información que ese rol aporta.
  2. Los requisitos pueden quedar incompletos o inconsistentes.
  3. Se detectan tarde problemas de diseño, contrato o verificación.
- **Advertencia:** los roles pueden solaparse en equipos pequeños, pero las funciones deben estar cubiertas.

### Slide 16. Proceso de la Ingeniería de Requerimientos (separador)

**Texto visible**

- `Proceso de la Ingeniería de Requerimientos` (título del separador)
- Frase introductoria que inicia el recorrido por el proceso.

**Elementos visuales**

- Imagen `assets/proceso-ir.png` con el diagrama del proceso.

**Explicación docente**

- **Desarrollo:**
  - Presentar el separador que inicia el recorrido por el proceso; recordar las fases: obtención, análisis, especificación, verificación, validación y gestión.
- **Ejemplos:** **Global Exchange (conductor):** el proceso completo acompaña al sistema de cambio de divisas desde el relevamiento hasta su evolución. **Segundo contexto industrial:** en seguros, el mismo proceso define un nuevo producto de pólizas.
- **Reflexión docente:**
  - El separador organiza la narrativa y marca dónde estamos dentro del proceso.
- **Pregunta desafío:** ¿cuál es la primera fase del proceso que veremos a continuación?
- **Respuestas posibles:**
  1. La obtención de requerimientos.
  2. El relevamiento de fuentes y técnicas.
  3. La recolección de necesidades de los interesados.
- **Advertencia:** no confundir el separador con el contenido: la fase se desarrolla en los próximos slides.

### Slide 17. Proceso de la Ingeniería de Requerimientos (separador de fase: Obtención)

**Texto visible**

- `Obtención de Requerimientos` (título del slide)
- Frase introductoria que anuncia la primera fase del proceso.

**Elementos visuales**

- Imagen `assets/proceso-ir.png` con el diagrama del proceso (misma imagen que en el slide 16).

**Explicación docente**

- **Desarrollo:**
  - Anunciar la fase de obtención como la primera del proceso; a continuación veremos las fuentes y las técnicas, y luego los problemas comunes.
- **Ejemplos:** **Global Exchange (conductor):** en la obtención se reúnen las necesidades de clientes, operadores y gerentes del sistema de cambio de divisas. **Segundo contexto industrial:** en transporte, la obtención releva necesidades de despacho, seguimiento y entrega.
- **Reflexión docente:**
  - Obtener bien es la base: si la obtención es deficiente, el resto del proceso arrastra sus errores.
- **Pregunta desafío:** ¿de qué fuentes puede obtenerse información de requerimientos?
- **Respuestas posibles:**
  1. Usuarios y clientes.
  2. Sistemas existentes y documentos.
  3. Modelos del dominio y sistemas análogos.
- **Advertencia:** la imagen de proceso se repite en los separadores para marcar la fase en curso.

### Slide 18. Obtención — Fuente de los Requerimientos

**Texto visible**

- `Fuente de los Requerimientos`
- `Cliente, usuario, otros interesados (necesidades)`
- `Modelos del dominio`
- `Revisar la situación actual`
- `Organización actual y sistemas`
- `Versión actual del sistema`
- `Desarrolladores de versión anterior`
- `Documentos existentes (antecedentes)`
- `Sistemas análogos ya existentes (antecedentes)`

**Elementos visuales**

- Cuatro tarjetas que agrupan las fuentes: Necesidades, Dominio, Sistemas y Antecedentes.

**Explicación docente**

- **Desarrollo:**
  - Recorrer las fuentes de requerimientos y cómo se complementan.
- **Ejemplos:** **Global Exchange (conductor):** se relevan las necesidades de los operadores de caja, se revisa el sistema actual de tasas y los documentos de reglas de conversión. **Segundo contexto industrial:** en logística, se revisan los sistemas de despacho vigentes y los procesos documentados.
- **Reflexión docente:**
  - La fuente correcta evita inventar requisitos y reduce el riesgo de omisiones.
- **Pregunta desafío:** ¿qué fuente suele olvidarse?
- **Respuestas posibles:**
  1. Los sistemas análogos ya existentes.
  2. Los usuarios finales, frente a los gerentes.
  3. Los documentos y antecedentes históricos.
- **Advertencia:** combinar fuentes amplía la visión, pero exige conciliar las contradicciones que aparezcan.

### Slide 19. Obtención — Técnicas

**Texto visible**

- `Técnicas`
- `Reuniones / Entrevistas`
- `Cuestionarios`
- `Observación`
- `Brainstorming`

**Elementos visuales**

- Proceso numerado de cuatro técnicas de obtención.

**Explicación docente**

- **Desarrollo:**
  - Presentar las cuatro técnicas de obtención; cada una sirve a un propósito distinto.
- **Ejemplos:** **Global Exchange (conductor):** entrevistas a operadores para conocer el flujo de una venta de divisas, observación del trabajo de caja y brainstorming de reglas de conversión. **Segundo contexto industrial:** en salud, entrevistas a médicos y observación de turnos para relevar necesidades.
- **Reflexión docente:**
  - La técnica se elige según el tipo de información que se busca y las personas involucradas.
- **Pregunta desafío:** ¿cuándo conviene un cuestionario en lugar de una entrevista?
- **Respuestas posibles:**
  1. Con muchas personas y preguntas cerradas.
  2. Cuando se quiere estandarizar la recolección.
  3. Cuando el tiempo para entrevistas individuales es limitado.
- **Advertencia:** la observación complementa lo que se declara: lo que se dice no siempre coincide con lo que se hace.

### Slide 20. Obtención — Problemas Comunes

**Texto visible**

- `No saben lo que quieren del sistema, sólo en términos generales, no conocen el costo de sus peticiones`
- `Los requisitos están en sus términos y con conocimiento implícito de su propio trabajo`
- `Distintos usuarios tienen distintos requisitos, se deben encontrar todas las fuentes`
- `Influyen factores políticos`
- `La prioridad que se da a los requisitos varía con el tiempo`
- `Aparecen nuevos requisitos`

**Elementos visuales**

- Cita con las barreras de la obtención.

**Explicación docente**

- **Desarrollo:**
  - Analizar los problemas típicos de la obtención y cómo reconocerlos.
- **Ejemplos:** **Global Exchange (conductor):** operadores y gerentes pueden pedir reglas de conversión distintas, y la prioridad entre seguridad y velocidad puede variar. **Segundo contexto industrial:** en gobierno, distintas dependencias pueden tener requisitos en conflicto.
- **Reflexión docente:**
  - Reconocer los problemas es el primer paso para gestionarlos dentro del proceso.
- **Pregunta desafío:** ¿qué problema de la lista consideran más difícil de resolver?
- **Respuestas posibles:**
  1. El conocimiento implícito del propio trabajo.
  2. Los requisitos en conflicto entre usuarios.
  3. La aparición de nuevos requisitos durante el proceso.
- **Advertencia:** los problemas no se eliminan por completo; se gestionan con técnicas, negociación y trazabilidad.

### Slide 21. Proceso de la Ingeniería de Requerimientos (separador)

**Texto visible**

- `Proceso de la Ingeniería de Requerimientos` (título del separador)
- Frase que anuncia el avance hacia el análisis.

**Elementos visuales**

- Imagen `assets/proceso-ir.png`.

**Explicación docente**

- **Desarrollo:**
  - Marcar el avance del proceso: finalizada la obtención, la siguiente fase es el análisis de requerimientos.
- **Ejemplos:** **Global Exchange (conductor):** las necesidades relevadas pasan a analizarse y modelarse antes de especificarse. **Segundo contexto industrial:** en banca, los requisitos relevados se analizan antes de redactar el documento.
- **Reflexión docente:**
  - Cada separador recuerda que el proceso avanza de fase en fase.
- **Pregunta desafío:** ¿qué se hace con lo obtenido en la fase de análisis?
- **Respuestas posibles:**
  1. Se analiza y modela la información.
  2. Se negocian prioridades.
  3. Se buscan requerimientos que faltan.
- **Advertencia:** la fase de análisis se detalla en los próximos slides.

### Slide 22. Análisis de Requerimientos

**Texto visible**

- `Analizar stakeholders / clientes / usuarios`
- `Crear vistas`
- `Detallar`
- `Negociar prioridades`
- `Buscar requerimientos que faltan`
- `Evaluar factibilidad técnica – prototipos`
- `Evaluar riesgos de requerimientos`

**Elementos visuales**

- Seis tarjetas de tareas del análisis: Personas, Vistas, Prioridades, Cobertura, Factibilidad, Riesgo.

**Explicación docente**

- **Desarrollo:**
  - Presentar las tareas del análisis de requerimientos y su propósito.
- **Ejemplos:** **Global Exchange (conductor):** se detallan las operaciones de cambio, se negocia la prioridad entre funciones y se prueba la factibilidad con un prototipo de la interfaz de operación. **Segundo contexto industrial:** en telecomunicaciones, se evalúa la factibilidad técnica de nuevas funcionalidades.
- **Reflexión docente:**
  - El análisis convierte necesidades en algo modelable y negociable.
- **Pregunta desafío:** ¿para qué sirven los prototipos en el análisis?
- **Respuestas posibles:**
  1. Para evaluar la factibilidad técnica.
  2. Para aclarar necesidades con el usuario.
  3. Para detectar requerimientos faltantes.
- **Advertencia:** analizar no es codificar: los modelos se usan para entender, no para entregar.

### Slide 23. Análisis — Modelos o Vistas del Sistema

**Texto visible**

- `Modelos o Vistas del Sistema`
- `Glosario`
- `Modelos gráficos`
- `Modelo conceptual`
- `Diagramas de estado – para entidades complejas que pasen por distintos estados`
- `Diagramas de Flujo de Datos (DFD)`
- `Prototipos de interfaz gráfica`
- `Casos de Prueba`
- `Tablas de Decisión`
- `Casos de Uso`

**Elementos visuales**

- Cinco tarjetas que agrupan las vistas: Texto, Gráficos, Interfaz, Reglas, Comportamiento.

**Explicación docente**

- **Desarrollo:**
  - Presentar los modelos y vistas del sistema y cómo se complementan.
- **Ejemplos:** **Global Exchange (conductor):** un diagrama de estados modela los estados de una operación de cambio y un caso de uso describe la venta de divisas. **Segundo contexto industrial:** en logística, un DFD describe el flujo de un pedido.
- **Reflexión docente:**
  - Cada vista ilumina un aspecto del sistema; varias vistas complementarias reducen la ambigüedad.
- **Pregunta desafío:** ¿qué vista usarían para entidades que pasan por distintos estados?
- **Respuestas posibles:**
  1. Diagramas de estados.
  2. Diagramas de flujo de datos.
  3. Casos de uso o tablas de decisión.
- **Advertencia:** no confundir las vistas de análisis con los artefactos de diseño que se crean en etapas posteriores.

### Slide 24. Proceso de la Ingeniería de Requerimientos (separador)

**Texto visible**

- `Proceso de la Ingeniería de Requerimientos` (título del separador)
- Frase que anuncia el avance hacia la especificación.

**Elementos visuales**

- Imagen `assets/proceso-ir.png`.

**Explicación docente**

- **Desarrollo:**
  - Marcar el avance del proceso: completado el análisis, la siguiente fase es la especificación de los requerimientos.
- **Ejemplos:** **Global Exchange (conductor):** los modelos analizados se convierten en el documento de especificación. **Segundo contexto industrial:** en seguros, la especificación formaliza los requisitos de la nueva póliza.
- **Reflexión docente:**
  - La especificación traduce los modelos en un documento formal y comprensible.
- **Pregunta desafío:** ¿qué documento produce la fase de especificación?
- **Respuestas posibles:**
  1. El ERS o SRS.
  2. El documento formal de requisitos.
  3. La especificación de requisitos de software.
- **Advertencia:** la fase de especificación se desarrolla en los próximos slides.

### Slide 25. Especificación de Requerimientos

**Texto visible**

- `Documentación de requisitos`
- `Qué documentar?: lo que hace el sistema actual; lo que el cliente pide; lo que el sistema va a hacer; criterios de aceptación; criterios de verificación`
- `Recomendaciones: agrupar por temas; formular los requerimientos como requerimientos positivos y no negativos; expresarlos en voz activa y no pasiva; indicar si se está documentando solo lo que va en el alcance o todo lo que se pidió; representar requerimientos con múltiples vistas`

**Elementos visuales**

- Cita que resume la importancia de qué y cómo se documenta.

**Explicación docente**

- **Desarrollo:**
  - Explicar qué documentar y las recomendaciones de redacción.
- **Ejemplos:** **Global Exchange (conductor):** el documento describe las operaciones actuales de caja, lo que pide el cliente y cómo se verificará la conversión. **Segundo contexto industrial:** en logística, la especificación documenta el flujo de envíos y sus criterios de aceptación.
- **Reflexión docente:**
  - La redacción del documento determina su utilidad para clientes y desarrolladores.
- **Pregunta desafío:** ¿por qué se recomienda formular los requerimientos en voz activa y en forma positiva?
- **Respuestas posibles:**
  1. Para evitar ambigüedad sobre quién ejecuta la acción.
  2. Para facilitar la verificación.
  3. Para reducir interpretaciones dobles.
- **Advertencia:** documentar "todo lo que se pidió" no es lo mismo que documentar solo lo que entra en el alcance.

### Slide 26. Especificación — Documento de Especificación de Requisitos

**Texto visible**

- `Documento de Especificación de requisitos`
- `Registrar los requisitos en los términos del cliente`
- `Delinear el propósito general del sistema: Incluir referencias a otros sistemas, glosario y abreviaciones`
- `Describir el contexto y objetivos del desarrollo del sistema`
- `Delinear visión global del sistema: Incluir restricciones generales`
- `Definir en detalle las características del sistema propuesto, definir el alcance del sistema e interfaces`
- `Discutir el ambiente en el que el sistema va a operar (hardware, comunicaciones, personal)`

**Elementos visuales**

- Cuatro tarjetas con el contenido del documento: Propósito, Contexto, Detalle y Ambiente.

**Explicación docente**

- **Desarrollo:**
  - Presentar el contenido del documento de especificación de requisitos.
- **Ejemplos:** **Global Exchange (conductor):** el documento define el propósito del sistema de cambio, su alcance, las interfaces con el servicio de tasas y el ambiente de operación. **Segundo contexto industrial:** en banca, el documento describe el ambiente de hardware y comunicaciones del nuevo producto.
- **Reflexión docente:**
  - El documento es el contrato de entendimiento entre el cliente y el equipo de desarrollo.
- **Pregunta desafío:** ¿por qué registrar los requisitos en los términos del cliente?
- **Respuestas posibles:**
  1. Para que el cliente pueda validar el documento.
  2. Para reducir malentendidos.
  3. Para que todos los involucrados lo comprendan.
- **Advertencia:** el glosario y las referencias son parte del documento, no un accesorio.

### Slide 27. Especificación — SRS IEEE 830 (Correcta / No Ambigua / Completa)

**Texto visible**

- `Características de una Buena Especificación SRS (IEEE 830)`
- `Correcta / Válida: Todos los requerimientos son requeridos en el sistema. No existe herramienta que asegure esto. Validado por el cliente (que efectivamente refleje sus necesidades)`
- `No Ambigua: Todo requerimiento tiene una única interpretación. Incluir glosario. No ambigua para quienes lo crearon y para quienes lo usan`
- `Completa: Debe incluir todos los requisitos asociados con funcionalidad, desempeño, restricciones de diseño, atributos o interfaces externas; definición de respuestas del software a todo posible dato de entrada (válido o inválido) en toda clase de situaciones realizables; no hay referencias sin definir. La frase "a determinar" indica que la SRS no está completa`

**Elementos visuales**

- Tarjetas Correcta / No Ambigua en la columna izquierda y tarjeta Completa en la columna derecha.

**Explicación docente**

- **Desarrollo:**
  - Presentar las primeras características de una buena SRS según IEEE 830.
- **Ejemplos:** **Global Exchange (conductor):** la SRS debe ser validada por el cliente (correcta), cada regla de conversión con una única interpretación (no ambigua) y sin "a determinar" sin explicación (completa). **Segundo contexto industrial:** en gobierno, una SRS incompleta genera retrabajo en los procesos de licitación.
- **Reflexión docente:**
  - La completitud es difícil de demostrar; la frase "a determinar" es una señal de alerta en la especificación.
- **Pregunta desafío:** ¿qué indica la frase "a determinar" en una SRS?
- **Respuestas posibles:**
  1. Que la SRS no está completa.
  2. Que aún falta decidir algo.
  3. Que hay que describir las condiciones y los responsables para resolverlo.
- **Advertencia:** la completitud absoluta no existe; la norma exige explicitar qué falta y cómo se resolverá.

### Slide 28. Especificación — SRS IEEE 830 (Consistente / Ordenada / Verificable)

**Texto visible**

- `Consistente internamente: Los requisitos no son contradictorios entre sí`
- `Ordenados por grado de importancia y/o estabilidad: Los requisitos deben tener un identificador`
- `Verificable: Un requerimiento es verificable si existe un proceso finito de costo accesible para determinar que el sistema lo cumple. Usar términos concretos y cantidades mesurables. Preparar pruebas para demostrar que se cumplen. Si no se puede, eliminar o revisar el requisito. Expresar cada requerimiento separadamente`

**Elementos visuales**

- Tarjetas Consistente y Ordenada en la columna izquierda y tarjeta Verificable en la derecha.

**Explicación docente**

- **Desarrollo:**
  - Continuar con las características de la SRS: consistencia interna, orden por importancia y estabilidad con identificador, y verificabilidad.
- **Ejemplos:** **Global Exchange (conductor):** dos reglas de conversión que se contradicen son una inconsistencia; cada requerimiento debe tener identificador y pruebas de verificación. **Segundo contexto industrial:** en transporte, los requerimientos contradictorios de rutas se detectan en la revisión.
- **Reflexión docente:**
  - La verificabilidad obliga a usar términos concretos y cantidades mesurables.
- **Pregunta desafío:** ¿qué hacer con un requerimiento que no se puede verificar?
- **Respuestas posibles:**
  1. Revisarlo o eliminarlo.
  2. Reformularlo con términos medibles.
  3. Preparar pruebas para demostrar su cumplimiento.
- **Advertencia:** el identificador único es la base de la trazabilidad posterior.

### Slide 29. Especificación — SRS IEEE 830 (Trazable / Realista / Entendible)

**Texto visible**

- `Trazables: El origen de cada requerimiento es claro, y es posible seguirle la pista en futuros desarrollos o mejora de la documentación. Trazabilidad hacia atrás: en versiones previas. Trazabilidad hacia adelante: documentos posteriores. Requiere IDENTIFICADOR ÚNICO`
- `Realistas / Factibles: Ej.: tiempo de respuesta local = remoto. Ej.: el cliente quiere adelantarse a la tecnología`
- `Entendibles: Tanto por los usuarios como por los desarrolladores`

**Elementos visuales**

- Tarjetas Trazable y Realista en la columna izquierda y cita Entendible en la derecha.

**Explicación docente**

- **Desarrollo:**
  - Completar las características de la SRS: trazabilidad, realismo o factibilidad y entendibilidad.
- **Ejemplos:** **Global Exchange (conductor):** cada requisito debe rastrearse desde su origen hasta los documentos posteriores; un requisito de respuesta instantánea debe ser realista con la tecnología disponible. **Segundo contexto industrial:** en telecomunicaciones, exigir tecnología futura puede volver irreal el requisito.
- **Reflexión docente:**
  - Trazabilidad, realismo y entendibilidad protegen el documento durante toda su vida útil.
- **Pregunta desafío:** ¿qué se necesita para lograr la trazabilidad?
- **Respuestas posibles:**
  1. Identificador único por requerimiento.
  2. Registro del origen.
  3. Vínculos con documentos posteriores.
- **Advertencia:** "adelantarse a la tecnología" puede generar requisitos irrealizables dentro del plazo del proyecto.

### Slide 30. Proceso de la Ingeniería de Requerimientos (separador)

**Texto visible**

- `Proceso de la Ingeniería de Requerimientos` (título del separador)
- Frase que anuncia el avance hacia la verificación.

**Elementos visuales**

- Imagen `assets/proceso-ir.png`.

**Explicación docente**

- **Desarrollo:**
  - Marcar el avance del proceso: concluida la especificación, la siguiente fase es la verificación de los requerimientos.
- **Ejemplos:** **Global Exchange (conductor):** el documento especificado se verifica antes de validarlo con el cliente. **Segundo contexto industrial:** en banca, la verificación revisa el documento internamente.
- **Reflexión docente:**
  - La verificación revisa el documento; la validación revisa contra las necesidades del cliente. Son dos controles distintos.
- **Pregunta desafío:** ¿en qué se diferencia la verificación de la validación?
- **Respuestas posibles:**
  1. La verificación revisa el documento; la validación revisa contra el cliente.
  2. La verificación busca defectos internos.
  3. La validación confirma que la especificación responde a las necesidades.
- **Advertencia:** la fase de verificación se desarrolla en los próximos slides.

### Slide 31. Verificación de Requerimientos

**Texto visible**

- `Se verifica en el documento de requisitos: Consistencia (que no haya contradicciones); Completitud (que no falte nada; chequear por omisiones con árboles de decisión y por límites con una tabla); Ambigüedades; Realismo o Factibilidad (implementable con la tecnología, presupuesto y calendario existentes); Verificabilidad (diseñar un conjunto de pruebas; cuidado con adjetivos y adverbios); Comprensibilidad (que los usuarios finales lo entiendan); Adaptabilidad (que el requisito se pueda cambiar sin afectar a otros); Trazabilidad (que esté establecido el origen)`

**Elementos visuales**

- Ocho tarjetas con las dimensiones de la verificación: Consistencia, Completitud, Ambigüedad, Realismo, Verificabilidad, Comprensibilidad, Adaptabilidad y Trazabilidad.

**Explicación docente**

- **Desarrollo:**
  - Recorrer las dimensiones de la verificación en el documento de requisitos.
- **Ejemplos:** **Global Exchange (conductor):** se verifica que no haya reglas contradictorias, que los límites de las tasas estén completos en una tabla y que los adjetivos no generen ambigüedad. **Segundo contexto industrial:** en logística, se verifica que no falten casos límite de entrega.
- **Reflexión docente:**
  - Cuidar adjetivos y adverbios evita requerimientos inverificables.
- **Pregunta desafío:** ¿por qué los árboles de decisión ayudan a la completitud?
- **Respuestas posibles:**
  1. Porque permiten ver todas las opciones detalladas.
  2. Porque muestran las omisiones.
  3. Porque estructuran los casos límite.
- **Advertencia:** la verificación interna no sustituye la validación con el cliente.

### Slide 32. Verificación de Requerimientos — RNF

**Texto visible**

- `Verificación de los Requerimientos NO funcionales`
- `Son difíciles de verificar`
- `Se deben expresar de manera cuantitativa utilizando métricas que se puedan probar de forma objetiva (esto es IDEAL)`
- `Para los usuarios es difícil especificarlos en forma cuantitativa`

**Elementos visuales**

- Imagen `assets/verificacion-rnf.png` con el diagrama de verificación de los no funcionales.

**Explicación docente**

- **Desarrollo:**
  - Explicar que los requerimientos no funcionales son difíciles de verificar y que se deben expresar cuantitativamente con métricas objetivas; reconocer que a los usuarios les cuesta especificarlos así.
- **Ejemplos:** **Global Exchange (conductor):** "el sistema debe responder en menos de 2 segundos" es verificable; "debe ser rápido" no lo es. **Segundo contexto industrial:** en salud, "el sistema debe estar disponible el 99,9% del tiempo" es una métrica verificable.
- **Reflexión docente:**
  - La cuantificación es el ideal; el equipo debe acompañar al usuario para lograrla.
- **Pregunta desafío:** ¿cómo reformularían "el sistema debe ser seguro"?
- **Respuestas posibles:**
  1. Con métricas de seguridad específicas.
  2. Con criterios de control de acceso verificables.
  3. Con pruebas de vulnerabilidad definidas.
- **Advertencia:** sin métricas, un requerimiento no funcional no se puede aceptar de forma objetiva.

### Slide 33. Proceso de la Ingeniería de Requerimientos (separador)

**Texto visible**

- `Proceso de la Ingeniería de Requerimientos` (título del separador)
- Frase que anuncia el avance hacia la validación.

**Elementos visuales**

- Imagen `assets/proceso-ir.png`.

**Explicación docente**

- **Desarrollo:**
  - Marcar el avance del proceso: verificada la especificación, la siguiente fase es la validación de los requerimientos.
- **Ejemplos:** **Global Exchange (conductor):** tras la verificación interna, el documento se valida con el cliente. **Segundo contexto industrial:** en seguros, la validación confirma que el documento refleja las necesidades del negocio.
- **Reflexión docente:**
  - Verificación y validación forman el control de calidad del proceso de requerimientos.
- **Pregunta desafío:** ¿quién participa principalmente en la validación?
- **Respuestas posibles:**
  1. El cliente y los usuarios.
  2. Los representantes de las necesidades.
  3. Los interesados que validan el documento.
- **Advertencia:** la fase de validación se desarrolla en los próximos slides.

### Slide 34. Validación de Requerimientos

**Texto visible**

- `Proceso por el cual se determina si la especificación es consistente con las necesidades del cliente`
- `Se verifica en el documento de requisitos: Validez (que el usuario valide qué es lo que quiere); Planificar quién (qué stakeholder) va a validar qué artefacto y cómo (técnica); Registrar – Reporte de validación / Firma`

**Elementos visuales**

- Cita que resume la clave de la validación.

**Explicación docente**

- **Desarrollo:**
  - Definir la validación como el proceso de determinar si la especificación es consistente con las necesidades del cliente; verificar la validez, planificar quién valida qué y cómo, y registrar con reporte y firma.
- **Ejemplos:** **Global Exchange (conductor):** el cliente valida que las operaciones de cambio especificadas son las que necesita y firma el reporte. **Segundo contexto industrial:** en gobierno, la validación formal confirma el alcance del sistema.
- **Reflexión docente:**
  - La firma hace visible la aceptación y fija un punto de referencia para los cambios posteriores.
- **Pregunta desafío:** ¿qué registra un reporte de validación?
- **Respuestas posibles:**
  1. Qué artefacto se validó y con qué técnica.
  2. Quién lo validó.
  3. El resultado y la firma.
- **Advertencia:** validar no es aprobar sin revisar: exige comparar el documento contra las necesidades reales.

### Slide 35. Validación de Requerimientos — Proceso manual

**Texto visible**

- `Proceso manual: Se revisa el documento de requisitos buscando anomalías y omisiones`
- `Revisiones informales: discusión informal`
- `Revisiones formales: se hace una "recorrida" del documento de requisitos con el cliente, explicando implicancias de cada requisito`
- `Participan representantes del cliente (operadores, quienes realicen entradas, utilicen salidas, y sus gerentes) y del equipo de desarrollo (analistas de requisitos, diseñadores, encargados de pruebas y gestión de configuración)`
- `Incluye: revisar objetivos del sistema; evaluar alineamiento de requisitos con los objetivos; revisar el ambiente de operación y las interfaces; funciones completas, restricciones realistas; evaluar riesgos`
- `Considerar: pruebas del sistema; cambios en los requisitos en el proyecto, su verificación y validación`

**Elementos visuales**

- Dos tarjetas con "Incluye" y "Considerar" de la revisión.

**Explicación docente**

- **Desarrollo:**
  - Explicar el proceso manual de validación: revisiones informales y formales (recorrida del documento con el cliente), con representantes del cliente y del equipo de desarrollo.
- **Ejemplos:** **Global Exchange (conductor):** una recorrida del documento con operadores y gerentes explica las implicancias de cada regla de conversión. **Segundo contexto industrial:** en logística, la recorrida revisa rutas, entregas y excepciones.
- **Reflexión docente:**
  - La revisión formal es costosa, pero detecta errores antes de construir.
- **Pregunta desafío:** ¿qué papel juegan los operadores en la recorrida?
- **Respuestas posibles:**
  1. Validar que las entradas y salidas sean las correctas.
  2. Confirmar que el flujo coincide con el trabajo real.
  3. Detectar omisiones de funciones.
- **Advertencia:** una recorrida superficial no reemplaza la revisión de las implicancias de cada requisito.

### Slide 36. Gestión de Requerimientos

**Texto visible**

- `Proceso de comprender y controlar los cambios en los requisitos del sistema`
- `Se hace en paralelo con el Proceso de Requisitos`
- `Los requisitos cambian, debido a: Muchos usuarios; Quienes pagan por el sistema y los usuarios no son las mismas personas; Cambios en el negocio; Cambios en la tecnología`
- `Tres etapas: Planificación (al comenzar el análisis de requisitos); Administración del cambio (con la primera versión del documento); Trazabilidad (a lo largo del proceso de requisitos)`

**Elementos visuales**

- Secuencia numerada de las tres etapas de la gestión.

**Explicación docente**

- **Desarrollo:**
  - Definir la gestión de requerimientos como el proceso de comprender y controlar los cambios; se hace en paralelo con el proceso de requisitos.
- **Ejemplos:** **Global Exchange (conductor):** una nueva normativa de cambios exige actualizar un requisito y su impacto debe controlarse con el proceso de gestión. **Segundo contexto industrial:** en banca, el cambio de tasas o de normativa dispara la administración del cambio.
- **Reflexión docente:**
  - El cambio es inevitable; la gestión lo convierte en un proceso controlado.
- **Pregunta desafío:** ¿cuándo comienza la administración del cambio?
- **Respuestas posibles:**
  1. Cuando existe una primera versión del documento de requisitos.
  2. Tras la planificación.
  3. Cuando aparece el primer cambio.
- **Advertencia:** sin gestión, cada cambio nuevo puede romper el alcance y el plan del proyecto.

### Slide 37. Gestión de Requerimientos — Herramientas

**Texto visible**

- `JIRA: herramienta de gestión de proyectos ampliamente utilizada que también ofrece funcionalidades para la gestión de requerimientos. Permite la creación de historias de usuario, tareas, epics y otras unidades de trabajo, así como la asignación de prioridades, seguimiento de estado y colaboración en equipo`
- `Trello: herramienta de gestión de proyectos basada en tableros visuales que puede adaptarse para la gestión de requerimientos. Permite la creación de tarjetas para representar requerimientos, listas para organizarlos y tableros para visualizar el flujo de trabajo y el progreso del proyecto`
- `Confluence: plataforma de colaboración que también puede utilizarse para la gestión de requerimientos. Permite la creación de documentación estructurada, incluyendo especificaciones de requerimientos, casos de uso y otros artefactos`
- `GitHub Issues: herramienta de seguimiento de problemas integrada en la plataforma de desarrollo colaborativo GitHub. Permite la creación y seguimiento de problemas, bugs y mejoras, y puede ser utilizada para gestionar los requerimientos de software`

**Elementos visuales**

- Cuatro tarjetas con las herramientas (JIRA, Trello, Confluence, GitHub Issues) y cita de los nombres.

**Explicación docente**

- **Desarrollo:**
  - Presentar herramientas de apoyo: JIRA, Trello, Confluence y GitHub Issues, con sus funciones para la gestión de requerimientos.
- **Ejemplos:** **Global Exchange (conductor):** se pueden registrar historias de usuario de las operaciones de cambio en JIRA y documentar la especificación en Confluence. **Segundo contexto industrial:** en telecomunicaciones, los tableros de Trello organizan el flujo de requerimientos.
- **Reflexión docente:**
  - La herramienta apoya el proceso; no reemplaza la disciplina de gestión.
- **Pregunta desafío:** ¿qué aporta un tablero visual a la gestión?
- **Respuestas posibles:**
  1. Visibilidad del flujo de trabajo.
  2. Seguimiento del estado.
  3. Colaboración del equipo.
- **Advertencia:** los nombres de herramientas son ejemplos del material; cada organización elige según su contexto.

### Slide 38. Ejemplos (enlaces)

**Texto visible**

- `Requerimientos funcionales: http://www.pmoinformatica.com/2017/02/requerimientos-funcionales-ejemplos.html`
- `Requerimientos no funcionales: http://www.pmoinformatica.com/2015/05/requerimientos-no-funcionales-ejemplos.html`

**Elementos visuales**

- Lista de enlaces en la columna izquierda y dos tarjetas con las URLs en la derecha.

**Explicación docente**

- **Desarrollo:**
  - Presentar enlaces de consulta con ejemplos de requerimientos funcionales y no funcionales; usarlos como material complementario.
- **Ejemplos:** **Global Exchange (conductor):** los ejemplos de los enlaces pueden adaptarse para ilustrar requisitos del sistema de cambio de divisas. **Segundo contexto industrial:** los mismos patrones de formulación aplican a otros sectores.
- **Reflexión docente:**
  - Los recursos externos complementan; la bibliografía del curso sigue siendo la referencia principal.
- **Pregunta desafío:** ¿cómo usarían los ejemplos de los enlaces en un proyecto?
- **Respuestas posibles:**
  1. Como referencia de formulación.
  2. Como inspiración para adaptar a su contexto.
  3. Como fuente de patrones verificables.
- **Advertencia:** los enlaces son recursos complementarios del material original; pueden cambiar con el tiempo.

### Slide 39. Cierre

**Texto visible**

- `Muchas gracias`
- Mensaje de cierre que resume la unidad.

**Elementos visuales**

- Título de cierre y síntesis de la unidad.

**Explicación docente**

- **Desarrollo:**
  - Cerrar la unidad retomando el recorrido: desde qué es un requerimiento hasta su gestión, con el proceso de la Ingeniería de Requerimientos como hilo conductor.
- **Ejemplos:** **Global Exchange (conductor):** aplicar el proceso completo al sistema de cambio de divisas demuestra el valor de la disciplina. **Segundo contexto industrial:** cualquier sistema (salud, banca, logística) depende de los mismos principios.
- **Reflexión docente:**
  - La calidad del software empieza por la calidad de los requerimientos.
- **Pregunta desafío:** ¿qué concepto de la unidad aplicarían primero en un proyecto?
- **Respuestas posibles:**
  1. La obtención con fuentes y técnicas.
  2. La especificación con el documento ERS.
  3. La gestión de cambios.
- **Advertencia:** el cierre resume; la práctica en los trabajos del curso consolida los conceptos.

## Checklist de regeneración

- [ ] Mantener exactamente 39 slides y el orden 1–39.
- [ ] Conservar títulos, listas, definiciones, numeración RF1–RF4 / RNF1–RNF3 y citas del inventario.
- [ ] Mantener la imagen `proceso-ir.png` en los seis separadores (slides 16, 17, 21, 24, 30 y 33) sin eliminar ni combinar ninguno.
- [ ] Distinguir visualmente títulos, texto de contenido, jerarquías y bloques de citas.
- [ ] Usar la identidad institucional del repositorio (Guillermo Jacobo González Rodas) en la portada; no usar el nombre de la autora del material original en ningún artefacto.
- [ ] Incluir `<p class="reference">` en los slides académicos (desde el slide 4) con solo las referencias permitidas: Sommerville (cap. 4), Pressman (cap. 7), SWEBOK Guide e IEEE 830.
- [ ] No usar personas reales, cuentas, credenciales ni transacciones reales en ejemplos.
- [ ] Mantener los enlaces de pmoinformatica.com como URLs `<a href="...">`.
- [ ] Revisar en una exportación o render final que no se corte texto, especialmente en slides 8, 25, 27, 28, 29, 31 y 35.
- [ ] Verificar el PDF: 39 páginas, tamaño 841.92 x 473.04 pts.

## Verificación de fuente

La guía se construyó a partir del texto completo de los 39 slides de la Clase 3 (Unidad III – Requerimientos de Software). Las imágenes del material se copiaron a `assets/` (`rnf-diagrama.png`, `tipos-requerimientos.jpeg`, `proceso-ir.png`, `verificacion-rnf.png` y `fpuna_logo_institucional.svg`) y se referencian tal cual con `<img class="figure-img">`, sin conversión a SVG ni modificación. El nombre de la autora del material original no se reproduce en ningún artefacto.



