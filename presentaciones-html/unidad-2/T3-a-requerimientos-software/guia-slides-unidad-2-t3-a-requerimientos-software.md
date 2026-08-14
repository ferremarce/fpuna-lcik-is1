# Guía de regeneración de Unidad II · T3 - Requerimientos de Software

Guía docente para regenerar la presentación a partir de `sesiones-clase/clase-3/IS1-UNIDAD_III (1).pptx`. Conserva los **39 slides**, su orden y su numeración de origen. La futura presentación deberá usar esta guía como especificación de contenido, no como sustituto del diseño visual.

**Archivo:** `guia-slides-unidad-2-t3-a-requerimientos-software.md`
**Ubicación:** `presentaciones-html/unidad-2/T3-a-requerimientos-software/`

## Lectura rápida

- **Fuente:** `sesiones-clase/clase-3/IS1-UNIDAD_III (1).pptx`.
- **Total verificado:** 39 slides en `ppt/presentation.xml`, dentro de `p:sldIdLst`.
- **Notas del orador:** no hay archivos `ppt/notesSlides/`; el paquete solo contiene un notes master, sin notas asociadas a slides.
- **Contenido visual embebido:** 9 slides contienen imágenes (slides 10, 12, 16, 17, 21, 24, 30, 32 y 33). Las imágenes del paquete son `image5.png`, `image6.jpeg`, `image7.png` y `image8.png`.
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

### Slide 1. Unidad III – Requerimientos de Software

**Texto visible**

- `Ingeniería de Software I`
- `Unidad II · T3 - Requerimientos de Software`
- `Prof. Ing. Julia Talavera`

**Elementos visuales**

- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** **Ingeniería de Software I:** se presenta la materia dentro del contexto de la carrera y se anuncia la unidad de la sesión. **Unidad II · T3 - Requerimientos de Software:** el tema central es qué necesita realmente un sistema antes de construirlo; por ejemplo, un sistema de reservas de hotel necesita saber qué habitaciones hay, en qué fechas y qué servicios se contratan. **Presentación del docente:** la portada identifica a quien dicta la unidad, se presenta e invita a pensar en qué debe hacer un sistema antes de diseñarlo.
- **Reflexión docente:** los requerimientos son la base de todo el proyecto: un error aquí se multiplica en las fases posteriores.
- **Pregunta desafío:** ¿qué pasa si construimos un sistema sin definir bien sus requerimientos?
- **Respuestas posibles:**
 1. Se construye algo que el cliente no pidió.
 2. Se descubren errores tarde y el retrabajo es costoso.
 3. Se superan plazos y presupuesto.
- **Advertencia:** no confundir requerimientos con diseño; los requerimientos describen el QUÉ, no el CÓMO.

### Slide 2. Objetivos

**Texto visible**

- `OBJETIVOS`
- `Comprender qué son los requerimientos de software y por qué son importantes`
- `Familiarizarse con los diferentes tipos de requerimientos`
- `Aprender técnicas y herramientas para la obtención, análisis y gestión de requerimientos`

**Elementos visuales**

- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** **Comprender qué son los requerimientos de software y por qué son importantes:** al terminar la unidad el estudiante explica qué es un requerimiento y justifica su impacto; por ejemplo, en un sistema de biblioteca, saber que "registrar préstamos" es un requerimiento evita construir módulos innecesarios. **Familiarizarse con los diferentes tipos de requerimientos:** distinguir los funcionales (qué hace el sistema) de los no funcionales (cómo debe comportarse); por ejemplo, en un portal de pagos, "procesar el pago" (funcional) frente a "cifrar los datos de la tarjeta" (no funcional). **Aprender técnicas y herramientas para la obtención, análisis y gestión de requerimientos:** por ejemplo, usar entrevistas para relevar el trabajo actual de una empresa de repartos y herramientas como JIRA para registrar, priorizar y seguir los requerimientos.
- **Reflexión docente:** estos objetivos estructuran el recorrido de la unidad y dan criterio para evaluar el avance.
- **Pregunta desafío:** ¿cuál de los tres objetivos les parece más difícil de lograr y por qué?
- **Respuestas posibles:**
 1. La obtención, porque los usuarios no siempre saben qué quieren.
 2. El análisis, por la cantidad de fuentes y prioridades.
 3. La gestión, porque los cambios son constantes.
- **Advertencia:** los objetivos son de aprendizaje; no describen aún contenido técnico.

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

- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** **Requerimientos de Software:** punto de partida del mapa de la unidad: qué es un requerimiento y por qué es la base del proyecto. **Tipos de Requerimientos:** su primera clasificación; por ejemplo, en un sistema de pedidos a domicilio, "agregar productos al carrito" (funcional) y "responder en menos de 2 segundos" (no funcional). **Ingeniería de Requerimientos:** la disciplina que reúne las actividades para descubrir, documentar y mantener los requisitos. **Proceso de Requerimientos de Software:** las cinco actividades que lo componen: obtención (entrevistar al personal de cocina y de reparto), análisis (clasificar y priorizar lo pedido), especificación (redactar el documento ERS), verificación (comprobar que el documento es correcto) y validación (confirmar con el cliente que es lo que quiere). **Gestión de Requerimientos:** controlar los cambios; por ejemplo, cuando el restaurante incorpora un nuevo método de pago.
- **Reflexión docente:** el proceso no es lineal estricto; las actividades se solapan y retroalimentan.
- **Pregunta desafío:** ¿por qué la verificación y la validación son pasos distintos?
- **Respuestas posibles:**
 1. Verificar es comprobar que se especificó bien; validar es confirmar que es lo que el cliente necesita.
 2. Se verifican contra el documento; se valida contra el usuario.
 3. Ambas se complementan en el proceso.
- **Advertencia:** la gestión atraviesa todo el proceso; no es una etapa final.

### Slide 4. ¿Qué es un Requerimiento de Software?

**Texto visible**

- `¿Qué es un Requerimiento de Software?`
- `Propiedad que debe ser exhibida por un software para resolver un problema particular. (Swebok)`
- `Condición o capacidad que necesita el usuario para resolver un problema o conseguir un objetivo determinado.`
- `ERS – Documento formal de Especificación de Requisitos Software`
- `SRS – Software Requirements Specification`

**Elementos visuales**

- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** **Definición (Swebok):** el software debe exhibir una propiedad que resuelve un problema particular; por ejemplo, en un sistema de facturación, "el sistema debe calcular el IVA automáticamente" es una propiedad que el software exhibe. **Definición (usuario):** es una condición o capacidad que el usuario necesita para resolver un problema; por ejemplo, en una biblioteca digital, el usuario necesita "buscar un libro por título". **ERS:** documento formal de Especificación de Requisitos Software. **SRS:** Software Requirements Specification; es el mismo documento con su nombre en inglés.
- **Reflexión docente:** la doble definición muestra que un requerimiento se puede ver desde el sistema y desde el negocio; ambos deben coincidir.
- **Pregunta desafío:** ¿un requerimiento describe lo que el sistema hace o lo que el usuario necesita?
- **Respuestas posibles:**
 1. Ambas cosas, según la perspectiva.
 2. Lo que el sistema hace para satisfacer la necesidad.
 3. Lo que el usuario necesita, traducido a capacidad del sistema.
- **Advertencia:** Swebok es la guía del cuerpo de conocimiento de la ingeniería de software; es una referencia académica.

### Slide 5. Características de los Requerimientos

**Texto visible**

- `Caracteristicas de Requerimientos`
- `Los requisitos de un software suelen ser una combinación compleja de los requisitos de diferentes personas en diferentes niveles de una organización y del entorno en el cual operará el software`
- `Es fundamental que un requisito sea verificable`
- `Otros atributos que les caracterizan son: Prioridad, Identificador único`
- `Los requisitos deben ser lo más claros y no ambiguos que se pueda, y cuantificables (si es posible).`

**Elementos visuales**

- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** **Combinación compleja:** los requisitos reúnen las necesidades de diferentes personas en distintos niveles de la organización y del entorno en el que operará el software; por ejemplo, en un hospital, el sistema de turnos combina lo que pide la administración (controlar tiempos de espera), el personal médico (acceso rápido al historial) y la ley (proteger los datos del paciente). **Verificable:** es fundamental que un requisito pueda comprobarse; por ejemplo, "el sistema debe ser rápido" no es verificable, pero "la pasarela confirma el pago en menos de 3 segundos" sí lo es. **Prioridad e identificador único:** atributos que caracterizan a cada requisito, permiten ordenar el desarrollo y rastrear su origen; por ejemplo, asignar prioridad "alta" a la facturación electrónica y un código como RF-001. **Claros y no ambiguos, y cuantificables (si es posible):** redactar de modo que haya una sola interpretación y expresar con números lo medible; por ejemplo, "soporte hasta 1.000 usuarios concurrentes" en lugar de "muchos usuarios".
- **Reflexión docente:** la verificabilidad es clave: un requerimiento que no se puede comprobar no se puede aceptar ni probar.
- **Pregunta desafío:** ¿cómo harían verificable el requerimiento "el sistema debe ser fácil de usar"?
- **Respuestas posibles:**
 1. Definiendo métricas (tiempo de aprendizaje, tasa de error).
 2. Con pruebas de usabilidad con usuarios.
 3. Con criterios de aceptación concretos.
- **Advertencia:** la prioridad y el identificador único ayudan a gestionar cambios y trazabilidad.

### Slide 6. Tipos de Requerimientos

**Texto visible**

- `Tipos de Requerimientos`
- `Requerimientos Funcionales`
- `Requerimientos No Funcionales`

**Elementos visuales**

- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** **Requerimientos Funcionales:** describen qué hace el sistema, sus servicios y su reacción ante las entradas; por ejemplo, en una biblioteca, "el sistema presta un libro y reduce el stock disponible". **Requerimientos No Funcionales:** describen restricciones y propiedades de calidad; por ejemplo, "la consulta del catálogo responde en menos de 2 segundos" o "los datos de los socios se almacenan cifrados". Ambos tipos conviven: un sistema con buenas funciones pero mala usabilidad o poca seguridad falla en la práctica.
- **Reflexión docente:** ambos tipos son necesarios; centrarse solo en los funcionales deja el sistema inusable.
- **Pregunta desafío:** ¿cuál de los dos tipos se suele olvidar en proyectos reales?
- **Respuestas posibles:**
 1. Los no funcionales, por ser menos visibles.
 2. Los funcionales, cuando el cliente describe restricciones.
 3. Depende de cada proyecto.
- **Advertencia:** esta clasificación se profundizará en los slides siguientes.

### Slide 7. Requerimientos Funcionales

**Texto visible**

- `Requerimientos Funcionales`
- `Se refiere a las capacidades del sistema`
- `Describen las funciones que lleva a cabo el software, cómo debe reaccionar ante ciertas entradas y cómo debe comportarse en situaciones particulares`
- `Describen la funcionalidad o los servicios que se espera que éste provea`
- `Son declaraciones de los servicios que proveerá el sistema, de la manera en que éste reaccionará a entradas particulares`
- `En algunos casos, los requerimientos funcionales de los sistemas también declaran explícitamente lo que el sistema NO debe hacer`

**Elementos visuales**

- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** **Capacidades del sistema:** los requerimientos funcionales expresan qué sabe hacer el software. **Reacción ante ciertas entradas y comportamiento en situaciones particulares:** describen cómo responde el sistema; por ejemplo, en un cajero automático, ante la entrada "saldo insuficiente" el sistema no dispensa dinero y muestra un mensaje. **Funcionalidad o servicios que se espera que provea:** declaran los servicios del sistema; por ejemplo, en un sistema de reservas, "el sistema registra la reserva y envía una confirmación por correo". **Lo que el sistema NO debe hacer:** también se declaran exclusiones; por ejemplo, en un sistema de préstamos, "el sistema no permite aprobar un crédito sin verificación de identidad".
- **Reflexión docente:** los requerimientos funcionales describen servicios, no la implementación interna.
- **Pregunta desafío:** ¿"el sistema usa una base de datos MySQL" es un requerimiento funcional?
- **Respuestas posibles:**
 1. No, es una decisión de diseño.
 2. Podría ser una restricción técnica (no funcional).
 3. Solo es funcional si describe un comportamiento observable.
- **Advertencia:** no mezclar requerimientos con soluciones tecnológicas.

### Slide 8. Ejemplos de Requerimientos Funcionales

**Texto visible**

- `Ejemplos de Requerimientos Funcionales`
- `RF1. El sistema controlará el acceso y lo permitirá solamente a usuarios autorizados. Los usuarios deben ingresar al sistema con un nombre de usuario y contraseña`
- `RF2. El campo país consistirá en una lista de preselección. El país asociado a una dirección debe ser previamente registrado en el sistema`
- `RF3. El campo estado, provincia o departamento consistirá en una lista de preselección. A los usuarios se les presentará únicamente los departamentos asociados al país seleccionado previamente`
- `RF4. El sistema enviará un correo electrónico cuando se registre alguna de las siguientes transacciones: pedido de venta de cliente, emisión de factura a cliente y registro de pago de cliente`

**Elementos visuales**

- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** **RF1. Control de acceso:** el sistema solo permite ingresar a usuarios autorizados con usuario y contraseña; por ejemplo, en un sistema bancario, "solo los usuarios autenticados pueden ver su saldo". **RF2. País de preselección:** el país asociado a una dirección debe estar previamente registrado; por ejemplo, en un comercio electrónico, "el cliente elige el país desde una lista y no lo escribe a mano". **RF3. Departamentos según el país:** solo se muestran los departamentos del país seleccionado; por ejemplo, "al elegir Paraguay, la lista muestra únicamente los departamentos de Paraguay". **RF4. Envío de correos por transacción:** el sistema notifica al registrarse pedidos, facturas y pagos; por ejemplo, "el sistema envía un correo al cliente cuando su pedido pasa a estado enviado". Todos siguen la forma "el sistema + verbo + condición", la redacción típica de un requerimiento funcional.
- **Reflexión docente:** los ejemplos muestran la redacción típica: "el sistema + verbo + condición".
- **Pregunta desafío:** ¿qué características comparten todos estos requerimientos?
- **Respuestas posibles:**
 1. Están redactados en tercera persona.
 2. Son verificables y específicos.
 3. Describen una acción observable del sistema.
- **Advertencia:** no copiar estos ejemplos tal cual; adaptarlos al dominio de cada proyecto.

### Slide 9. Requerimientos No Funcionales

**Texto visible**

- `Requerimientos No Funcionales`
- `Se refiere a las restricciones y requisitos de calidad`
- `Restricciones sobre las funciones o servicios ofrecidos por el sistema`
- `Son restricciones de los servicios o funciones ofrecidos por el sistema. Incluyen restricciones de tiempo, sobre el proceso de desarrollo, estándares, etc`
- `Son aquellos requerimientos que no se refieren directamente a las funciones específicas que entrega el sistema, sino a las propiedades emergentes de éste como la fiabilidad, la respuesta en el tiempo y la capacidad de almacenamiento`
- `De forma alternativa, definen las restricciones del sistema como la capacidad de los dispositivos de entrada/salida y la representación de datos que se utiliza en la interface del sistema`

**Elementos visuales**

- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** **Restricciones y requisitos de calidad:** los no funcionales no dicen qué hace el sistema, sino bajo qué condiciones; por ejemplo, en un sistema de reservas, "el sistema no debe caerse durante el horario pico". **Restricciones de tiempo, del proceso de desarrollo y estándares:** por ejemplo, "cada pantalla debe responder en menos de 2 segundos" o "el código debe seguir el estándar interno de la organización". **Propiedades emergentes:** fiabilidad, tiempo de respuesta y capacidad de almacenamiento son propiedades del sistema completo, no de una función puntual; por ejemplo, "el sistema debe soportar 500.000 registros de historial". **Restricciones de dispositivos de entrada/salida y representación de datos:** por ejemplo, "la interfaz debe funcionar en pantallas táctiles" o "las fechas se representan en formato dd/mm/aaaa".
- **Reflexión docente:** los no funcionales afectan propiedades emergentes del sistema, no funciones puntuales.
- **Pregunta desafío:** ¿qué diferencia hay entre una restricción y un requisito de calidad?
- **Respuestas posibles:**
 1. La restricción limita (hardware, estándares); la calidad define propiedades (rendimiento, fiabilidad).
 2. Ambas son no funcionales.
 3. Se complementan.
- **Advertencia:** los no funcionales son difíciles de cuantificar; conviene hacerlo cuanto antes.

### Slide 10. Requerimientos No Funcionales (Diagrama)

**Texto visible**

- `Requerimientos No Funcionales`

**Elementos visuales**

- Imagen: `ppt/media/image5.png — Clasificación de los requerimientos no funcionales`.

**Explicación docente**

- **Desarrollo:** **Clasificación de los no funcionales:** el diagrama organiza los requerimientos no funcionales en tres grupos. **Producto:** propiedades del propio sistema; por ejemplo, tiempos de respuesta y seguridad en un portal de pagos. **Organizacionales:** políticas y estándares de la empresa; por ejemplo, "los entregables seguirán la norma interna de desarrollo". **Externos:** normativa legal y regulación; por ejemplo, "la aplicación debe cumplir la ley de protección de datos personales". El diagrama resume la clasificación y sirve de referencia durante toda la unidad.
- **Reflexión docente:** la imagen resume la clasificación y sirve de referencia durante toda la unidad.
- **Pregunta desafío:** ¿en qué categoría ubicarían "el sistema debe usar estándares de la organización"?
- **Respuestas posibles:**
 1. Organizacionales.
 2. De producto.
 3. Externos.
- **Advertencia:** la clasificación es orientativa; algunos requisitos pueden pertenecer a más de una categoría.

### Slide 11. Ejemplos de Requerimientos No Funcionales

**Texto visible**

- `Ejemplos de Requerimientos No Funcionales`
- `Requerimientos del Producto`
- `RNF1. La interfaz de usuario será implementada como HTML simple sin frames ni applets Java`
- `Requerimientos Organizacionales`
- `RNF2. El proceso de desarrollo y los entregables serán conformes a lo establecido en METRICA v3`
- `Requerimientos Externos`
- `RNF3. El sistema no registrará ninguna información personal de los clientes salvo su nombre y número de referencia respetando lo establecido en la Ley Orgánica de Protección de Datos (LOPD)`

**Elementos visuales**

- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** **Requerimientos del Producto (RNF1):** la interfaz se implementará como HTML simple, sin frames ni applets Java; por ejemplo, en un sistema interno, esta restricción garantiza la compatibilidad con los navegadores de la organización. **Requerimientos Organizacionales (RNF2):** el proceso de desarrollo y los entregables serán conformes a lo establecido en METRICA v3; por ejemplo, en un proyecto gubernamental, cumplir la metodología oficial del organismo. **Requerimientos Externos (RNF3):** no se registrará información personal de los clientes salvo nombre y número de referencia, respetando la LOPD; por ejemplo, en un sistema de ventas, no se guardan datos innecesarios como la dirección completa si no hacen falta. Cada grupo condiciona al sistema desde una fuente distinta: el producto, la organización y la ley.
- **Reflexión docente:** los ejemplos muestran cómo la normativa y la organización condicionan el sistema.
- **Pregunta desafío:** ¿por qué un requerimiento externo puede ser obligatorio por ley?
- **Respuestas posibles:**
 1. Porque violarlo implica sanciones.
 2. Porque afecta a terceros (clientes, pacientes).
 3. Porque limita qué datos se pueden almacenar.
- **Advertencia:** la LOPD y METRICA v3 son ejemplos concretos; cada proyecto tendrá su normativa.

### Slide 12. Ejemplo de Requerimientos

**Texto visible**

- (Slide visual: solo contiene la imagen; sin texto visible adicional)

**Elementos visuales**

- Imagen: `ppt/media/image6.jpeg — Ejemplo ilustrado de requerimientos`.

**Explicación docente**

- **Desarrollo:** **Ejemplo ilustrado:** la imagen muestra un caso concreto de cómo se describe un requerimiento con su contexto, sirviendo de apoyo para fijar el concepto. Se usa para mostrar que un requerimiento debe incluir el actor, la acción y la condición; por ejemplo, en un sistema de turnos, "el recepcionista registra al paciente y el sistema asigna el siguiente número según la prioridad". Es un slide de apoyo visual; el detalle técnico se desarrolla en los slides posteriores.
- **Reflexión docente:** los recursos visuales ayudan a conectar la teoría con casos concretos.
- **Pregunta desafío:** ¿qué información necesitaría un desarrollador para implementar el ejemplo de la imagen?
- **Respuestas posibles:**
 1. El requerimiento funcional preciso.
 2. Las restricciones no funcionales.
 3. Los criterios de aceptación.
- **Advertencia:** la imagen es ilustrativa; el contenido técnico se desarrolla en slides posteriores.

### Slide 13. ¿Qué es la Ingeniería de Requisitos?

**Texto visible**

- `¿Qué es la Ingeniería de Requisitos?`
- `“Conjunto de actividades para descubrir, documentar y mantener un conjunto de requisitos”`
- `“Establecer los servicios que el cliente requiere de un sistema y las restricciones bajo las cuales opera y es desarrollado”`

**Elementos visuales**

- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** **Conjunto de actividades para descubrir, documentar y mantener requisitos:** la ingeniería de requisitos permite pasar de una idea vaga a un conjunto organizado; por ejemplo, en un sistema de inventario, descubrir que el encargado necesita alertas de stock mínimo, documentar ese requisito y mantenerlo actualizado cuando cambia el negocio. **Establecer los servicios que el cliente requiere y las restricciones bajo las cuales opera:** define qué pide el cliente y qué límites condicionan al sistema; por ejemplo, "el sistema genera órdenes de compra" (servicio) y "solo el comprador autorizado puede generarlas" (restricción).
- **Reflexión docente:** la ingeniería de requisitos es la primera disciplina del proceso; de ella depende el resto.
- **Pregunta desafío:** ¿por qué se dice que los requisitos son la etapa más cara de corregir?
- **Respuestas posibles:**
 1. Porque un error se propaga al diseño y código.
 2. Porque corregirlo al final requiere rehacer varias etapas.
 3. Porque involucra a muchas personas.
- **Advertencia:** mantener requisitos no es solo documentar: incluye actualizarlos y gestionar su evolución.

### Slide 14. Proceso de la Ingeniería de Requerimientos

**Texto visible**

- `“Conjunto estructurado de actividades de cuya ejecución se obtiene, valida y mantiene un documento de requisitos del sistema (ERS)”`

**Elementos visuales**

- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** **Conjunto estructurado de actividades:** el proceso organiza las actividades en pasos ordenados y relacionados. **Obtener, validar y mantener un ERS:** de su ejecución surge el documento de requisitos del sistema (ERS), que se valida con el cliente y se mantiene actualizado. Por ejemplo, en un sistema de logística, se obtienen los requisitos entrevistando a los repartidores, se validan con el responsable del depósito y se mantienen cuando cambian las rutas de entrega. El ERS es el artefacto central: todas las actividades convergen en él.
- **Reflexión docente:** el ERS es el artefacto central; todas las actividades convergen en él.
- **Pregunta desafío:** ¿qué significa que el ERS se "valida y mantiene"?
- **Respuestas posibles:**
 1. Se confirma con el cliente y se actualiza ante cambios.
 2. Es un documento vivo.
 3. Deja de ser válido cuando cambian los requisitos.
- **Advertencia:** el proceso es iterativo, no una secuencia rígida.

### Slide 15. Participantes en el Proceso

**Texto visible**

- `Participantes en el Proceso`
- `Cliente y Usuarios`
- `Conocen los requisitos adecuados a sus necesidades`
- `Diseñadores`
- `Comprender los requerimientos para lograr un diseño que los satisfaga`
- `Supervisores del Contrato`
- `Establecen los hitos de Control y cronogramas`
- `Gerentes del Negocio`
- `Entienden el impacto en la Organización`
- `Verificadores`
- `Comprender los requerimientos para poder verificar si el sistema los satisface`

**Elementos visuales**

- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** **Cliente y usuarios:** conocen los requisitos adecuados a sus necesidades; por ejemplo, en un sistema de salud, los médicos describen cómo quieren registrar la atención. **Diseñadores:** comprenden los requerimientos para lograr un diseño que los satisfaga; por ejemplo, el arquitecto decide cómo estructurar los módulos del sistema. **Supervisores del contrato:** establecen los hitos de control y los cronogramas; por ejemplo, definen cuándo se entrega el prototipo. **Gerentes del negocio:** entienden el impacto en la organización; por ejemplo, evalúan cómo el sistema de turnos afecta la atención al paciente. **Verificadores:** comprenden los requerimientos para poder verificar si el sistema los satisface; por ejemplo, diseñan las pruebas de aceptación. Cada participante ve los requisitos desde su rol; la ingeniería debe conciliar todas las visiones.
- **Reflexión docente:** cada participante ve los requisitos desde su rol; la ingeniería de requisitos debe conciliar todas las visiones.
- **Pregunta desafío:** ¿qué pasa si un participante no participa del proceso?
- **Respuestas posibles:**
 1. Se pierden requisitos importantes.
 2. Se diseñan soluciones incorrectas.
 3. La verificación falla.
- **Advertencia:** los verificadores necesitan entender los requisitos para poder comprobar si el sistema los satisface.

### Slide 16. Proceso de la Ingeniería de Requerimientos (Diagrama)

**Texto visible**

- `Proceso de la Ingeniería de Requerimientos`

**Elementos visuales**

- Imagen: `ppt/media/image7.png — Diagrama del proceso de la ingeniería de requerimientos`.

**Explicación docente**

- **Desarrollo:** **Diagrama del proceso:** el slide muestra el mapa con las actividades de la ingeniería de requerimientos. **Obtención:** se recogen las necesidades; por ejemplo, entrevistas al personal de una fábrica. **Análisis:** se clasifican y priorizan; por ejemplo, se decide qué módulos entran en la primera versión. **Especificación:** se redacta el ERS. **Verificación:** se comprueba que el documento no tiene errores ni omisiones. **Validación:** se confirma con el cliente que es lo que necesita. El diagrama es el mapa del proceso; conviene volver a él en cada fase.
- **Reflexión docente:** la imagen es el mapa del proceso; conviene volver a ella en cada fase.
- **Pregunta desafío:** ¿qué actividad del diagrama les parece que se repite más veces?
- **Respuestas posibles:**
 1. La obtención, porque aparecen nuevos requisitos.
 2. La validación, por las revisiones con el cliente.
 3. La gestión, por los cambios.
- **Advertencia:** el diagrama es una simplificación; en la práctica las actividades se solapan.

### Slide 17. Proceso de la Ingeniería de Requerimientos (Diagrama)

**Texto visible**

- `Proceso de la Ingeniería de Requerimientos`

**Elementos visuales**

- Imagen: `ppt/media/image7.png — Diagrama del proceso de la ingeniería de requerimientos`.

**Explicación docente**

- **Desarrollo:** **Repetición del diagrama:** se vuelve a mostrar el diagrama del proceso para fijar la secuencia de actividades. **Ejemplo de recorrido:** en un sistema de restaurante, obtener los requisitos hablando con cocina y mozos, analizarlos, especificarlos en el ERS, verificarlos y validarlos con el dueño. El slide es de apoyo visual: refuerza la memorización del proceso sin introducir contenido nuevo.
- **Reflexión docente:** la repetición del diagrama refuerza la memorización del proceso.
- **Pregunta desafío:** ¿qué diferencia hay entre este diagrama y el del slide anterior?
- **Respuestas posibles:**
 1. Ninguna, es el mismo proceso.
 2. Cambia el énfasis visual.
 3. Se enfoca en otra actividad.
- **Advertencia:** son diapositivas de apoyo visual del mismo proceso.

### Slide 18. Obtención de Requerimientos: Fuentes

**Texto visible**

- `Obtención de Requerimientos`
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

- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** **Cliente, usuario y otros interesados (necesidades):** la principal fuente de requerimientos; por ejemplo, en una farmacia, el farmacéutico describe cómo controlar el vencimiento de los medicamentos. **Modelos del dominio:** conocimiento estructurado del área de negocio; por ejemplo, el modelo de precios de una distribuidora. **Revisar la situación actual, la organización actual y los sistemas existentes:** entender cómo se trabaja hoy; por ejemplo, revisar las planillas manuales de un almacén. **Versión actual del sistema y desarrolladores de la versión anterior:** aportan lo que ya funciona y los problemas conocidos. **Documentos existentes (antecedentes):** manuales, reglamentos y actas. **Sistemas análogos ya existentes (antecedentes):** por ejemplo, estudiar el sistema de una sucursal que ya se informatizó. Cuantas más fuentes se consulten, menos requisitos se pierden.
- **Reflexión docente:** cuantas más fuentes se consulten, menos requisitos se pierden.
- **Pregunta desafío:** ¿qué fuente suele aportar los requisitos más completos?
- **Respuestas posibles:**
 1. Los usuarios reales.
 2. Los sistemas análogos.
 3. La documentación existente.
- **Advertencia:** no confiar en una única fuente; los usuarios no siempre conocen todos los requisitos.

### Slide 19. Obtención de Requerimientos: Técnicas

**Texto visible**

- `Obtención de Requerimientos`
- `Técnicas`
- `Reuniones / Entrevistas`
- `Cuestionarios`
- `Observación`
- `Brainstorming`

**Elementos visuales**

- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** **Reuniones / Entrevistas:** conversación guiada con los interesados; por ejemplo, entrevistar al responsable de cobranzas para conocer las reglas de descuento. **Cuestionarios:** encuestas que llegan a muchos usuarios; por ejemplo, encuestar a los vendedores de distintas sucursales. **Observación:** ver cómo se trabaja hoy; por ejemplo, observar cómo un operario registra pedidos en papel revela pasos que nadie mencionó. **Brainstorming:** generación de ideas en grupo; por ejemplo, una sesión con el equipo comercial para listar nuevas funciones. Cada técnica tiene ventajas; suelen combinarse según el contexto.
- **Reflexión docente:** cada técnica tiene ventajas; suelen combinarse.
- **Pregunta desafío:** ¿qué técnica conviene cuando los usuarios están dispersos geográficamente?
- **Respuestas posibles:**
 1. Cuestionarios.
 2. Entrevistas virtuales.
 3. Observación remota.
- **Advertencia:** la observación directa revela lo que los usuarios hacen, no solo lo que dicen que hacen.

### Slide 20. Obtención de Requerimientos: Problemas Comunes

**Texto visible**

- `Obtención de Requerimientos`
- `Problemas Comunes`
- `No saben lo que quieren del sistema, sólo en términos generales, no conocen el costo de sus peticiones`
- `Los requisitos están en sus términos y con conocimiento implícito de su propio trabajo`
- `Distintos usuarios tienen distintos requisitos, se deben encontrar todas las fuentes`
- `Influyen factores políticos`
- `La prioridad que se da a los requisitos varía con el tiempo`
- `Aparecen nuevos requisitos`

**Elementos visuales**

- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** **No saben lo que quieren y no conocen el costo de sus peticiones:** los usuarios piden en términos generales sin medir el esfuerzo; por ejemplo, pedir "que todo sea automático" sin saber cuánto cuesta. **Requisitos en sus términos y con conocimiento implícito:** el usuario asume que ciertas tareas se entienden solas; por ejemplo, un contador da por sabido el cierre contable mensual. **Distintos usuarios tienen distintos requisitos:** hay que encontrar todas las fuentes; por ejemplo, ventas y almacén piden cosas distintas del mismo sistema. **Influyen factores políticos:** intereses de áreas o personas que condicionan las decisiones. **La prioridad varía con el tiempo:** lo urgente hoy puede no serlo mañana. **Aparecen nuevos requisitos:** el proyecto crece y cambia. Estos problemas son la razón de ser de la ingeniería de requisitos: ordenar el caos.
- **Reflexión docente:** estos problemas son la razón de ser de la ingeniería de requisitos: ordenar el caos.
- **Pregunta desafío:** ¿cómo se mitiga que el usuario no conozca el costo de sus peticiones?
- **Respuestas posibles:**
 1. Estimando el impacto de cada requisito.
 2. Mostrando prototipos.
 3. Negociando prioridades.
- **Advertencia:** los factores políticos existen y deben gestionarse, no ignorarse.

### Slide 21. Proceso de la Ingeniería de Requerimientos (Diagrama)

**Texto visible**

- `Proceso de la Ingeniería de Requerimientos`

**Elementos visuales**

- Imagen: `ppt/media/image7.png — Diagrama del proceso de la ingeniería de requerimientos`.

**Explicación docente**

- **Desarrollo:** **Diagrama del proceso:** se repite el diagrama para situar la actividad de análisis. **Obtención y análisis dentro del flujo general:** primero se obtienen las necesidades y luego se analizan; por ejemplo, en un sistema de reservas, se obtiene "reservar sala" y se analiza qué datos mínimos necesita la reserva. El diagrama sirve de guía de navegación de la unidad; el avance por las etapas no es estrictamente secuencial.
- **Reflexión docente:** el diagrama sirve de guía de navegación de la unidad.
- **Pregunta desafío:** ¿en qué etapa del diagrama nos encontramos ahora?
- **Respuestas posibles:**
 1. Obtención.
 2. Análisis.
 3. Especificación.
- **Advertencia:** el avance por las etapas no es estrictamente secuencial.

### Slide 22. Análisis de Requerimientos

**Texto visible**

- `Análisis de Requerimientos`
- `Analizar stakeholders / clientes / usuarios`
- `Crear vistas`
- `Detallar`
- `Negociar prioridades`
- `Buscar requerimientos que faltan`
- `Evaluar factibilidad técnica – prototipos`
- `Evaluar riesgos de requerimientos`

**Elementos visuales**

- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** **Analizar stakeholders / clientes / usuarios:** identificar quién participa y qué espera cada uno; por ejemplo, en un sistema de nómina, separar lo que pide RRHH de lo que pide contabilidad. **Crear vistas:** representar el sistema desde distintas perspectivas; por ejemplo, una vista por rol de usuario. **Detallar:** precisar cada requerimiento; por ejemplo, definir los pasos exactos de "registrar ausencia". **Negociar prioridades:** decidir qué entra primero; por ejemplo, posponer el módulo de reportes avanzados. **Buscar requerimientos que faltan:** completar vacíos; por ejemplo, detectar que nadie pidió la recuperación de contraseña. **Evaluar factibilidad técnica con prototipos:** probar que lo pedido se puede construir; por ejemplo, un prototipo de pantalla valida la idea antes de desarrollarla. **Evaluar riesgos de los requerimientos:** anticipar problemas; por ejemplo, depender de un sistema externo de pagos. El análisis transforma necesidades dispersas en requisitos organizados y priorizados; no es diseño.
- **Reflexión docente:** el análisis transforma necesidades dispersas en requisitos organizados y priorizados.
- **Pregunta desafío:** ¿por qué son útiles los prototipos en el análisis?
- **Respuestas posibles:**
 1. Porque aclaran lo que el usuario quiere.
 2. Porque validan la factibilidad.
 3. Porque reducen malentendidos.
- **Advertencia:** el análisis no es diseño; busca entender y organizar, no construir la solución.

### Slide 23. Análisis de Requerimientos: Modelos o Vistas del Sistema

**Texto visible**

- `Análisis de Requerimientos`
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

- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** **Glosario:** definiciones comunes de los términos del dominio; por ejemplo, qué significa "cliente activo" en la organización. **Modelos gráficos y modelo conceptual:** representaciones visuales de la estructura; por ejemplo, el modelo conceptual de una biblioteca muestra libros, socios y préstamos. **Diagramas de estado:** para entidades que pasan por distintos estados; por ejemplo, un pedido (creado, pagado, enviado, entregado). **Diagramas de Flujo de Datos (DFD):** muestran cómo circulan los datos entre procesos; por ejemplo, el flujo de un pedido desde el cliente hasta el almacén. **Prototipos de interfaz gráfica:** maquetas de las pantallas para validar la interacción. **Casos de prueba:** situaciones concretas para comprobar el comportamiento. **Tablas de decisión:** combinan condiciones y acciones; por ejemplo, cuándo aplicar un descuento según el monto y el tipo de cliente. **Casos de uso:** describen la interacción entre un actor y el sistema; por ejemplo, "registrar devolución". Cada vista muestra una faceta del sistema; ninguna es suficiente por sí sola.
- **Reflexión docente:** cada vista muestra una faceta del sistema; ninguna es suficiente por sí sola.
- **Pregunta desafío:** ¿qué vista usarían para entender los estados de una entidad?
- **Respuestas posibles:**
 1. Diagrama de estados.
 2. DFD.
 3. Tabla de decisión.
- **Advertencia:** estos modelos se estudian en profundidad en unidades posteriores.

### Slide 24. Proceso de la Ingeniería de Requerimientos (Diagrama)

**Texto visible**

- `Proceso de la Ingeniería de Requerimientos`

**Elementos visuales**

- Imagen: `ppt/media/image7.png — Diagrama del proceso de la ingeniería de requerimientos`.

**Explicación docente**

- **Desarrollo:** **Diagrama del proceso:** se muestra nuevamente el diagrama, situando la especificación. **Análisis y especificación en el flujo:** tras analizar los requisitos se redactan; por ejemplo, en un sistema de inventario, después de priorizar qué productos requieren alertas de stock se escribe el requerimiento en el ERS. Es un apoyo visual; no introduce contenido nuevo.
- **Reflexión docente:** el diagrama mantiene el contexto del recorrido.
- **Pregunta desafío:** ¿qué actividad sigue al análisis en el proceso?
- **Respuestas posibles:**
 1. Especificación.
 2. Verificación.
 3. Obtención.
- **Advertencia:** es un apoyo visual; no introduce contenido nuevo.

### Slide 25. Especificación de Requerimientos: Documentación

**Texto visible**

- `Especificación de Requerimientos`
- `Documentación de requisitos`
- `Qué documentar?: lo que hace el sistema actual, lo que el cliente pide, lo que el sistema va a hacer, criterios de aceptación, criterios de verificación`
- `Recomendaciones: agrupar por temas, formular los requerimientos como requerimientos positivos y no negativos, expresarlos en voz activa y no pasiva, indicar si se está documentando solo lo que va en el alcance o todo lo que se pidió, representar requerimientos con múltiples vistas`

**Elementos visuales**

- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** **Qué documentar:** lo que hace el sistema actual, lo que el cliente pide, lo que el sistema va a hacer, y los criterios de aceptación y de verificación. Por ejemplo, en un sistema de inventario, documentar que hoy el conteo se hace en planillas, que el cliente pide lectura por código de barras, que el nuevo sistema hará el conteo en línea y cómo se comprobará cada punto. **Recomendaciones:** agrupar por temas (por ejemplo, por módulos), formular los requerimientos en positivo y no en negativo ("el sistema valida el documento" en lugar de "no debe aceptar documentos inválidos"), expresarlos en voz activa y no pasiva, indicar si se documenta solo el alcance o todo lo que se pidió, y representar los requerimientos con múltiples vistas. Redactar bien evita malentendidos y falsas expectativas.
- **Reflexión docente:** la documentación es la base del ERS; redactar bien ahorra malentendidos.
- **Pregunta desafío:** ¿por qué se recomienda formular requerimientos en positivo y en voz activa?
- **Respuestas posibles:**
 1. Para reducir ambigüedad.
 2. Para facilitar la verificación.
 3. Para que el lector sepa exactamente qué hacer.
- **Advertencia:** indicar si se documenta solo el alcance o todo lo pedido evita falsas expectativas.

### Slide 26. Especificación de Requerimientos: Documento SRS

**Texto visible**

- `Especificación de Requerimientos`
- `Documento de Especificación de requisitos`
- `Registrar los requisitos en los términos del cliente`
- `Delinear el propósito general del sistema: Incluir referencias a otros sistemas, glosario y abreviaciones`
- `Describir el contexto y objetivos del desarrollo del sistema`
- `Delinear visión global del sistema: Incluir restricciones generales`
- `Definir en detalle las características del sistema propuesto, definir el alcance del sistema e interfaces`
- `Discutir el ambiente en el que el sistema va a operar (hardware, comunicaciones, personal)`

**Elementos visuales**

- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** **Registrar los requisitos en los términos del cliente:** sin tecnicismos; por ejemplo, describir que "la caja registradora se comunica con el sistema central" en palabras del cajero. **Propósito general del sistema:** incluye referencias a otros sistemas, glosario y abreviaciones; por ejemplo, referirse al sistema de contabilidad que recibe las ventas. **Contexto y objetivos del desarrollo:** el porqué de construir el sistema. **Visión global del sistema:** incluye las restricciones generales; por ejemplo, "solo se accede desde la red interna". **Características del sistema propuesto, alcance e interfaces:** detallar funciones y límites; por ejemplo, "el módulo de ventas incluye cobro y no incluye devoluciones". **Ambiente de operación:** hardware, comunicaciones y personal; por ejemplo, "se ejecuta en cajas con lector de código de barras y requiere un encargado de turno". El SRS es el contrato técnico entre el cliente y los desarrolladores.
- **Reflexión docente:** el SRS es el contrato técnico entre cliente y desarrolladores.
- **Pregunta desafío:** ¿qué diferencia hay entre el propósito y la visión global del sistema?
- **Respuestas posibles:**
 1. El propósito es el porqué; la visión, el qué general.
 2. El propósito es corto; la visión, más detallada.
 3. Ambos describen el sistema desde lo alto.
- **Advertencia:** el SRS se redacta en términos del cliente, sin tecnicismos innecesarios.

### Slide 27. Características de una Buena Especificación SRS (IEEE 830)

**Texto visible**

- `Especificación de Requerimientos`
- `Características de una Buena Especificación SRS (IEEE 830)`
- `Correcta / Válida: Todos los requerimientos son requeridos en el sistema. No existe herramienta que asegure esto. Validado por el cliente (que efectivamente refleje sus necesidades)`
- `No Ambigua: Todo requerimiento tiene una única interpretación. Incluir glosario. No ambigua para quienes lo crearon y para quienes lo usan`
- `Completa: Debe incluir: Todos los requisitos asociados con funcionalidad, desempeño, restricciones de diseño, atributos o interfaces externas. Definición de respuestas del sw a todo posible datos de entrada (válidos o inválidos) en toda clase de situaciones realizables. No hay referencias sin definir en la especificación. La frase “a determinar” indica SRS no está completa. Ocasionalmente necesaria; describir: condiciones que causan que no se sepa aún y qué se debe hacer para determinar lo que falta, con quién y cuándo`

**Elementos visuales**

- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** **Correcta / Válida:** todos los requerimientos son requeridos por el sistema; no existe herramienta que lo asegure, lo valida el cliente. Por ejemplo, en un sistema de turnos, el cliente confirma que el requisito "rechazar doble reserva" refleja su necesidad real. **No ambigua:** cada requerimiento tiene una única interpretación; se incluye un glosario. Por ejemplo, "cuenta corriente" debe significar lo mismo para el cliente y para el desarrollador. **Completa:** incluye todos los requisitos de funcionalidad, desempeño, restricciones de diseño, atributos e interfaces externas; define la respuesta del software ante todo dato de entrada válido o inválido; no hay referencias sin definir, y la frase "a determinar" indica que el SRS no está completo (si aparece, se describe qué falta, con quién y cuándo se definirá). Por ejemplo, un ERS completo especifica qué sucede si el usuario ingresa un monto negativo.
- **Reflexión docente:** la completitud es difícil de lograr; requiere revisar funcionalidad, desempeño, restricciones e interfaces.
- **Pregunta desafío:** ¿qué implica que una especificación tenga la frase "a determinar"?
- **Respuestas posibles:**
 1. Que no está completa.
 2. Que falta definir un valor.
 3. Que debe documentarse qué falta, con quién y cuándo se definirá.
- **Advertencia:** la correctitud no la garantiza ninguna herramienta; la valida el cliente.

### Slide 28. Características de una Buena Especificación SRS (IEEE 830)

**Texto visible**

- `Especificación de Requerimientos`
- `Características de una Buena Especificación SRS (IEEE 830)`
- `Consistente internamente: Los requisitos no son contradictorios entre sí`
- `Ordenados por grado de importancia y/o estabilidad: Los requisitos deben tener un identificador`
- `Verificable: Un requerimiento es verificable si existe un proceso finito de costo accesible para determinar que el sistema lo cumple. Usar términos concretos y cantidades mesurables. Preparar pruebas para demostrar que se cumplen. Si no se puede, eliminar o revisar el requisito. Expresar cada req. separadamente.`

**Elementos visuales**

- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** **Consistente internamente:** los requisitos no se contradicen entre sí; por ejemplo, no puede decirse que el sistema acepta pagos sin conexión y, a la vez, que solo opera conectado. **Ordenados por grado de importancia y/o estabilidad:** los requisitos deben tener un identificador; por ejemplo, priorizar "RF-005 facturación" por encima de "RF-012 reportes históricos". **Verificable:** existe un proceso finito de costo accesible para determinar que el sistema cumple el requisito; se usan términos concretos y cantidades mesurables y se preparan pruebas. Por ejemplo, "el sistema responde en menos de 2 segundos" se verifica con una prueba de rendimiento. Si no se puede verificar, el requisito se revisa o se elimina, y cada requisito se expresa por separado.
- **Reflexión docente:** la verificabilidad exige usar términos concretos y cantidades mesurables.
- **Pregunta desafío:** ¿qué se hace si un requisito no es verificable?
- **Respuestas posibles:**
 1. Revisarlo o eliminarlo.
 2. Preparar pruebas.
 3. Reformularlo con métricas.
- **Advertencia:** ordenar por importancia facilita priorizar el desarrollo y los cambios.

### Slide 29. Características de una Buena Especificación SRS (IEEE 830)

**Texto visible**

- `Especificación de Requerimientos`
- `Características de una Buena Especificación SRS (IEEE 830)`
- `Trazables: El origen de cada requerimiento es claro, y es posible seguirle la pista en futuros desarrollos o mejora de la documentación. Trazabilidad hacia atrás: en versiones previas. Trazabilidad hacia adelante: documentos posteriores: requiere IDENTIFICADOR ÚNICO.`
- `Realistas / Factibles: Ej.: tiempo de respuesta local=remoto. Ej.: El cliente quiere adelantarse a la tecnología`
- `Entendibles: Tanto por los usuarios como por los desarrolladores`

**Elementos visuales**

- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** **Trazables:** el origen de cada requerimiento es claro y es posible seguirle la pista en desarrollos futuros. Trazabilidad hacia atrás: hacia versiones previas. Trazabilidad hacia adelante: hacia documentos posteriores (diseño, pruebas). Ambas requieren identificador único; por ejemplo, el requisito RF-010 se rastrea desde su origen en un acta de reunión hasta su implementación en el código. **Realistas / Factibles:** deben poder implementarse con la tecnología y los recursos disponibles; por ejemplo, exigir "tiempo de respuesta local igual al remoto" puede no ser factible, y un cliente que quiere adelantarse a la tecnología pide funcionalidades aún no maduras. **Entendibles:** comprensibles tanto por los usuarios como por los desarrolladores; por ejemplo, "el sistema recuerda el idioma preferido" en lugar de tecnicismos.
- **Reflexión docente:** la trazabilidad exige identificadores únicos desde el inicio.
- **Pregunta desafío:** ¿qué diferencia hay entre trazabilidad hacia atrás y hacia adelante?
- **Respuestas posibles:**
 1. Hacia atrás: versiones previas; hacia adelante: documentos posteriores.
 2. Una rastrea el origen; la otra la implementación.
 3. Ambas requieren identificador único.
- **Advertencia:** los requisitos deben ser entendibles tanto por usuarios como por desarrolladores.

### Slide 30. Proceso de la Ingeniería de Requerimientos (Diagrama)

**Texto visible**

- `Proceso de la Ingeniería de Requerimientos`

**Elementos visuales**

- Imagen: `ppt/media/image7.png — Diagrama del proceso de la ingeniería de requerimientos`.

**Explicación docente**

- **Desarrollo:** **Diagrama del proceso:** se muestra el diagrama situando la verificación. **Verificación tras la especificación:** una vez redactado el ERS se comprueba su calidad; por ejemplo, en un sistema de reservas, revisar que cada requisito sea verificable antes de pasar al diseño. Es un apoyo visual.
- **Reflexión docente:** el diagrama mantiene el contexto.
- **Pregunta desafío:** ¿qué viene después de especificar en el proceso?
- **Respuestas posibles:**
 1. Verificar.
 2. Validar.
 3. Gestionar.
- **Advertencia:** es un apoyo visual.

### Slide 31. Verificación de Requerimientos Funcionales

**Texto visible**

- `Verificación de Requerimientos`
- `Proceso por el cual se comprueba que los requisitos del documento estén correctamente definidos: consistentes, completos, sin ambigüedades, realistas, verificables, comprensibles, adaptables y trazables`
- `Se verifica en el documento de requisitos:`
- `Consistencia: que no haya contradicciones`
- `Completitud: que no falte nada. Chequear por: Omisiones. Hacer árboles de decisión para ver que estén todas las opciones detalladas. Límites. Más claro con tabla, ahí se ve que no falta ninguno`
- `Ambigüedades`
- `Realismo o Factibilidad: que se puedan implementar con la tecnología, presupuesto y calendario existentes`
- `Verificabilidad: que se pueda diseñar conjunto de pruebas para demostrar que el sistema cumple esos requisitos. Cuidado con adjetivos y adverbios`
- `Comprensibilidad: que los usuarios finales lo entiendan`
- `Adaptabilidad: que el requisito se pueda cambiar sin afectar a otros`
- `Trazabilidad: que esté establecido el origen`

**Elementos visuales**

- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** **Verificación de requisitos:** es el proceso de revisar el documento de requisitos para comprobar que los requisitos estén correctamente definidos, antes de pasar al diseño; por ejemplo, en un sistema de facturación, se verifica que el requisito "el sistema aplica el 10% de IVA" no contradiga a otro que defina un porcentaje distinto. **Consistencia:** que no haya contradicciones; por ejemplo, no permitir que dos requisitos definan plazos distintos para la misma entrega. **Completitud:** que no falte nada; se chequean las omisiones, se usan árboles de decisión para verificar que estén todas las opciones y tablas para revisar los límites; por ejemplo, una tabla que cruce tipo de cliente y forma de pago muestra si falta alguna combinación. **Ambigüedades:** detectar términos con más de una interpretación. **Realismo o Factibilidad:** que se pueda implementar con la tecnología, el presupuesto y el calendario existentes. **Verificabilidad:** que se pueda diseñar un conjunto de pruebas para demostrar el cumplimiento; cuidado con adjetivos y adverbios ("rápido", "fácil"). **Comprensibilidad:** que los usuarios finales lo entiendan. **Adaptabilidad:** que el requisito se pueda cambiar sin afectar a otros. **Trazabilidad:** que esté establecido el origen. La verificación comprueba la calidad del documento, no que el sistema esté bien construido.
- **Reflexión docente:** la verificación comprueba la calidad del documento, no que el sistema esté bien construido.
- **Pregunta desafío:** ¿qué se revisa con las tablas de decisión?
- **Respuestas posibles:**
 1. Que no falten combinaciones (completitud).
 2. Los límites.
 3. Las ambigüedades.
- **Advertencia:** cuidado con adjetivos y adverbios en la verificación de requerimientos.

### Slide 32. Verificación de Requerimientos No Funcionales

**Texto visible**

- `Verificación de Requerimientos`
- `Verificación de los Requerimientos NO funcionales`
- `Son difíciles de verificar`
- `Se deben expresar de manera cuantitativa utilizando métricas que se puedan probar de forma objetiva (esto es IDEAL)`
- `Para los usuarios es difícil especificarlos en forma cuantitativa`

**Elementos visuales**

- Imagen: `ppt/media/image8.png — Verificación de los requerimientos no funcionales`.

**Explicación docente**

- **Desarrollo:** **Son difíciles de verificar:** los no funcionales no describen una acción puntual, por lo que cuesta comprobarlos. **Expresarlos de manera cuantitativa con métricas que se puedan probar de forma objetiva (ideal):** por ejemplo, "el sistema debe ser confiable" se reformula como "disponibilidad del 99,9% anual", y "los datos deben estar protegidos" como "cifrado AES-256". **A los usuarios les cuesta especificarlos en forma cuantitativa:** suelen pedir "que sea rápido" o "que no se caiga" sin números; el analista debe ayudar a convertirlos en métricas. Cuantificar es difícil pero necesario para poder probarlos.
- **Reflexión docente:** cuantificar los no funcionales es difícil pero necesario para poder probarlos.
- **Pregunta desafío:** ¿cómo cuantificarían "el sistema debe ser fácil de usar"?
- **Respuestas posibles:**
 1. Tiempo máximo de aprendizaje.
 2. Tasa de error permitida.
 3. Satisfacción en una escala.
- **Advertencia:** la cuantificación es lo ideal; si no se logra, al menos definir criterios de aceptación claros.

### Slide 33. Proceso de la Ingeniería de Requerimientos (Diagrama)

**Texto visible**

- `Proceso de la Ingeniería de Requerimientos`

**Elementos visuales**

- Imagen: `ppt/media/image7.png — Diagrama del proceso de la ingeniería de requerimientos`.

**Explicación docente**

- **Desarrollo:** **Diagrama del proceso:** se muestra el diagrama situando la validación. **Validación tras la verificación:** primero se comprueba el documento y luego se confirma con el cliente; por ejemplo, en un sistema de facturación, validar con el responsable que el ERS refleja las reglas fiscales de la empresa. Es un apoyo visual.
- **Reflexión docente:** el diagrama mantiene el contexto del proceso.
- **Pregunta desafío:** ¿qué actividad sigue a la verificación?
- **Respuestas posibles:**
 1. Validación.
 2. Especificación.
 3. Gestión.
- **Advertencia:** es un apoyo visual.

### Slide 34. Validación de Requerimientos

**Texto visible**

- `Validación de Requerimientos`
- `Proceso por el cual se determina si la especificación es consistente con las necesidades del cliente`
- `Se verifica en el documento de requisitos: Validez: que el usuario valide qué es lo que quiere. Planificar quién (qué stakeholder) va a validar qué artefacto y cómo (técnica). Registrar – Reporte de validación / Firma`

**Elementos visuales**

- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** **Proceso de validación:** se determina si la especificación es consistente con las necesidades del cliente. **Validez:** el usuario valida qué es lo que quiere; por ejemplo, en una biblioteca, el bibliotecario confirma que el requisito "renovación de préstamos" es lo que realmente necesita. **Planificación de la validación:** se define quién (qué stakeholder) valida qué artefacto y cómo (qué técnica); por ejemplo, el gerente valida el alcance y los operadores validan los casos de uso. **Registro:** se documenta un reporte de validación y se obtiene la firma, que compromete a las partes. Diferencia clave: verificar es contra el documento; validar es con el cliente.
- **Reflexión docente:** la validación es con el cliente; la verificación es contra el documento.
- **Pregunta desafío:** ¿qué diferencia hay entre verificar y validar?
- **Respuestas posibles:**
 1. Verificar: el sistema cumple la especificación; validar: la especificación satisface al cliente.
 2. Verificar es interno; validar es con el usuario.
 3. Ambas son complementarias.
- **Advertencia:** la firma del reporte de validación compromete a las partes.

### Slide 35. Validación de Requerimientos: Revisiones

**Texto visible**

- `Validación de Requerimientos`
- `Proceso manual: Se revisa el documento de requisitos buscando anomalías y omisiones:`
- `Revisiones informales: discusión informal`
- `Revisiones formales: se hace una “recorrida” del doc de req con el cliente, explicando implicancias de cada requisito.`
- `Participan representantes: del cliente: operadores, quienes realicen entradas, utilicen salidas, y sus gerentes. del equipo de desarrollo: analistas de requisitos, diseñadores, encargados de pruebas y gestión de configuración`
- `Incluye: revisar objetivos del sistema, evaluar alineamiento de requisitos con los objetivos (necesidad), revisar el ambiente de operación y las interfaces con otros sistemas, funciones completas, restricciones realistas, evaluar riesgos`
- `Considerar: pruebas del sistema, cambios en los requisitos en el proyecto, su verificación y validación`

**Elementos visuales**

- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** **Proceso manual:** se revisa el documento de requisitos buscando anomalías y omisiones. **Revisiones informales:** discusión sin estructura formal entre pares. **Revisiones formales:** se hace una "recorrida" del documento con el cliente explicando las implicancias de cada requisito; por ejemplo, en un sistema de facturación, recorrer requisito por requisito con el contador para confirmar cada regla fiscal. **Participantes:** del cliente (operadores, quienes realizan las entradas, quienes usan las salidas y sus gerentes) y del equipo de desarrollo (analistas de requisitos, diseñadores, encargados de pruebas y de gestión de configuración). **La revisión incluye:** revisar los objetivos del sistema, evaluar el alineamiento de los requisitos con esos objetivos (la necesidad), revisar el ambiente de operación y las interfaces con otros sistemas, verificar funciones completas y restricciones realistas, y evaluar riesgos. **Además se consideran:** las pruebas del sistema, los cambios en los requisitos del proyecto, su verificación y validación.
- **Reflexión docente:** la recorrida formal es una técnica efectiva para detectar anomalías tempranamente.
- **Pregunta desafío:** ¿qué se busca al evaluar la alineación de requisitos con los objetivos?
- **Respuestas posibles:**
 1. Que cada requisito responda a una necesidad.
 2. Que no haya requisitos innecesarios.
 3. Que el alcance sea correcto.
- **Advertencia:** la validación debe considerar las pruebas del sistema y los cambios en los requisitos.

### Slide 36. Gestión de Requerimientos

**Texto visible**

- `Gestión de Requerimientos`
- `Proceso de comprender y controlar los cambios en los requisitos del sistema`
- `Se hace en paralelo con el Proceso de Requisitos`
- `Los requisitos cambian, debido a: Muchos usuarios, Quienes pagan por el sistema y los usuarios no son las mismas personas, Cambios en el negocio, Cambios en la tecnología`
- `Tres etapas: Planificación: Se realiza al comenzar el análisis de requisitos. Administración del cambio: Comienza una vez que se tiene una primera versión del documento de requisitos. Trazabilidad: Se mantiene a lo largo del proceso de requisitos`

**Elementos visuales**

- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** **Comprender y controlar los cambios:** la gestión maneja la evolución de los requisitos a lo largo del proyecto. **En paralelo con el proceso de requisitos:** acompaña a la obtención, el análisis y el resto de las actividades. **Los requisitos cambian porque:** hay muchos usuarios (cada uno pide algo), quienes pagan por el sistema y quienes lo usan no son las mismas personas (por ejemplo, el gerente lo compra pero el operario lo utiliza), y cambian el negocio y la tecnología (por ejemplo, una nueva ley impositiva obliga a modificar la facturación). **Tres etapas:** Planificación (se realiza al comenzar el análisis de requisitos), Administración del cambio (comienza cuando existe una primera versión del documento de requisitos) y Trazabilidad (se mantiene a lo largo de todo el proceso). La gestión evita que los cambios descontrolados destruyan el proyecto.
- **Reflexión docente:** la gestión evita que los cambios descontrolados destruyan el proyecto.
- **Pregunta desafío:** ¿por qué los cambios son inevitables en los proyectos de software?
- **Respuestas posibles:**
 1. Porque el negocio y la tecnología cambian.
 2. Porque los usuarios descubren nuevas necesidades.
 3. Porque quien paga no siempre es quien usa.
- **Advertencia:** la trazabilidad se mantiene a lo largo de todo el proceso, no solo al final.

### Slide 37. Gestión de Requerimientos: Herramientas

**Texto visible**

- `Gestión de Requerimientos - Herramientas`
- `JIRA: herramienta de gestión de proyectos ampliamente utilizada que también ofrece funcionalidades para la gestión de requerimientos. Permite la creación de historias de usuario, tareas, epics y otras unidades de trabajo, así como la asignación de prioridades, seguimiento de estado y colaboración en equipo`
- `Trello: herramienta de gestión de proyectos basada en tableros visuales que puede adaptarse para la gestión de requerimientos de software. Permite la creación de tarjetas para representar requerimientos, listas para organizarlos y tableros para visualizar el flujo de trabajo y el progreso del proyecto.`
- `Confluence: plataforma de colaboración que también puede utilizarse para la gestión de requerimientos. Permite la creación de documentación estructurada, incluyendo especificaciones de requerimientos, casos de uso y otros artefactos`
- `GitHub Issues: herramienta de seguimiento de problemas integrada en la plataforma de desarrollo colaborativo GitHub. Permite la creación y seguimiento de problemas, bugs y mejoras, y puede ser utilizada para gestionar los requerimientos de software`

**Elementos visuales**

- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** **JIRA:** herramienta de gestión de proyectos ampliamente utilizada que también ofrece funcionalidades para la gestión de requerimientos; permite crear historias de usuario, tareas, épicas y otras unidades de trabajo, asignar prioridades, seguir el estado y colaborar en equipo. Por ejemplo, registrar la historia "como cajero, quiero cobrar con tarjeta para agilizar la fila". **Trello:** herramienta basada en tableros visuales, con tarjetas para representar requerimientos, listas para organizarlos y tableros para visualizar el flujo de trabajo; por ejemplo, organizar los requerimientos en columnas "por hacer", "en análisis" y "validados". **Confluence:** plataforma de colaboración para documentación estructurada, incluidas especificaciones de requerimientos y casos de uso; por ejemplo, publicar el SRS del proyecto. **GitHub Issues:** seguimiento de problemas, bugs y mejoras dentro de GitHub; por ejemplo, reportar un bug de la facturación como issue. Las herramientas apoyan la gestión, pero no reemplazan el proceso.
- **Reflexión docente:** las herramientas apoyan la gestión, pero no reemplazan el proceso.
- **Pregunta desafío:** ¿qué herramienta usarían para documentar la especificación SRS?
- **Respuestas posibles:**
 1. Confluence.
 2. JIRA.
 3. GitHub Issues.
- **Advertencia:** la elección de herramienta depende de la organización; lo importante es el proceso.

### Slide 38. Ejemplos de Requerimientos

**Texto visible**

- `Ejemplos`
- `Requerimientos funcionales: http://www.pmoinformatica.com/2017/02/requerimientos-funcionales-ejemplos.html`
- `Requerimientos no funcionales: http://www.pmoinformatica.com/2015/05/requerimientos-no-funcionales-ejemplos.html`

**Elementos visuales**

- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** **Referencias web de ejemplos:** el slide comparte dos enlaces con ejemplos de requerimientos funcionales y no funcionales para ampliar la práctica. **Requerimientos funcionales:** el primer enlace muestra redacciones de acciones del sistema, por ejemplo "el sistema debe registrar al cliente y sus datos de contacto". **Requerimientos no funcionales:** el segundo muestra restricciones y calidad, por ejemplo "el sistema debe soportar 100 usuarios concurrentes". Se recomienda usar estos ejemplos como modelo para redactar requerimientos propios y adaptarlos al dominio de cada proyecto; al ser referencias externas, conviene verificar su vigencia.
- **Reflexión docente:** los ejemplos externos complementan la teoría con casos reales.
- **Pregunta desafío:** ¿qué diferencia encontraron entre los ejemplos funcionales y no funcionales de las referencias?
- **Respuestas posibles:**
 1. Los funcionales describen acciones; los no funcionales, restricciones.
 2. Los no funcionales son más difíciles de cuantificar.
 3. Ambos son necesarios.
- **Advertencia:** las referencias son externas; verificar su vigencia.

### Slide 39. Muchas Gracias

**Texto visible**

- `PREGUNTAS`

**Elementos visuales**

- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** **Preguntas:** cierre de la unidad: se agradece y se abre el espacio para consultas. Se puede proponer un repaso rápido: definir qué es un requerimiento, distinguir los funcionales de los no funcionales y explicar la diferencia entre verificar y validar, usando como referencia un caso conocido, por ejemplo un sistema de reservas o de pedidos. La unidad sienta las bases para el diseño y desarrollo posteriores; no se introducen contenidos nuevos.
- **Reflexión docente:** la unidad sienta las bases para el diseño y desarrollo posteriores.
- **Pregunta desafío:** ¿qué concepto de la unidad les resultó más útil y por qué?
- **Respuestas posibles:**
 1. La diferencia entre funcionales y no funcionales.
 2. La verificación vs. validación.
 3. La gestión de cambios.
- **Advertencia:** cierre de la unidad; no se introducen contenidos nuevos.
