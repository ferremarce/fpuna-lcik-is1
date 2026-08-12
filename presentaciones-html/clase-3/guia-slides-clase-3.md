# Guía de regeneración de la Clase 3

Guía docente para regenerar la presentación a partir de `sesiones-clase/clase-3/IS1-UNIDAD_III (1).pptx`. Conserva los **39 slides**, su orden y su numeración de origen. La futura presentación deberá usar esta guía como especificación de contenido, no como sustituto del diseño visual.

**Archivo:** `guia-slides-clase-3.md`
**Ubicación:** `presentaciones-html/clase-3/`

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

- `INGENIERÍA DE SOFTWARE I`
- `Prof. Ing. Julia Talavera`

**Elementos visuales**

- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** Apertura de la Unidad III: se presenta la materia y se sitúa el tema de los requerimientos dentro de la Ingeniería de Software. El docente se presenta e invita a pensar en qué necesita realmente un sistema antes de construirlo.
- **Ejemplos:** **Global Exchange (conductor):** antes de diseñar el sistema de cambio de divisas definimos qué debe hacer: registrar operaciones, calcular tasas y emitir comprobantes. **Segundo contexto industrial:** un sistema de turnos necesita saber quién se atiende, en qué orden y con qué servicio.
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

- **Desarrollo:** Se presentan los objetivos de la unidad: comprender qué son los requerimientos, distinguir sus tipos y aprender técnicas y herramientas para obtenerlos, analizarlos y gestionarlos.
- **Ejemplos:** **Global Exchange (conductor):** al finalizar la unidad sabremos definir los requerimientos funcionales (registrar cambio de divisas) y no funcionales (tiempo de respuesta, seguridad). **Segundo contexto industrial:** en un hospital, distinguir entre lo que el sistema debe hacer y las restricciones de privacidad.
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

- **Desarrollo:** Se presenta el mapa de la unidad: los diez temas que se recorrerán, desde la definición de requerimiento hasta la gestión de cambios.
- **Ejemplos:** **Global Exchange (conductor):** el recorrido nos lleva desde "qué es un requerimiento" hasta "cómo gestionar que el cliente pida más monedas o nuevas tasas". **Segundo contexto industrial:** en un sistema de inventario, el mismo camino: definir, obtener, analizar, especificar, verificar, validar y gestionar.
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
- `Propiedad que debe ser exhibida por un software para resolver un problema particular. (Sweebok)`
- `Condición o capacidad que necesita el usuario para resolver un problema o conseguir un objetivo determinado.`
- `ERS – Documento formal de Especificación de Requisitos Software`
- `SRS – Software Requirements Specification`

**Elementos visuales**

- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** Se define qué es un requerimiento desde dos perspectivas: la de Sweebok (propiedad que debe exhibir el software) y la del usuario (condición o capacidad para resolver un problema). Se mencionan los documentos ERS y SRS.
- **Ejemplos:** **Global Exchange (conductor):** un requerimiento es "el sistema debe calcular la tasa de cambio aplicando el margen definido". **Segundo contexto industrial:** en un sistema de turnos, "el sistema debe asignar el siguiente número según la prioridad del paciente".
- **Reflexión docente:** la doble definición muestra que un requerimiento se puede ver desde el sistema y desde el negocio; ambos deben coincidir.
- **Pregunta desafío:** ¿un requerimiento describe lo que el sistema hace o lo que el usuario necesita?
- **Respuestas posibles:**
 1. Ambas cosas, según la perspectiva.
 2. Lo que el sistema hace para satisfacer la necesidad.
 3. Lo que el usuario necesita, traducido a capacidad del sistema.
- **Advertencia:** Sweebok es la guía del cuerpo de conocimiento de la ingeniería de software; es una referencia académica.

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

- **Desarrollo:** Se presentan las características de los requerimientos: surgen de combinar necesidades de distintas personas, deben ser verificables, claros, no ambiguos y cuantificables, y llevan atributos como prioridad e identificador único.
- **Ejemplos:** **Global Exchange (conductor):** "la operación se registra en menos de 2 segundos" es verificable y cuantificable. **Segundo contexto industrial:** en un ERP, "el sistema debe ser rápido" no es verificable; "responder en menos de 3 segundos" sí.
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

- **Desarrollo:** Se introduce la clasificación principal de los requerimientos: funcionales y no funcionales.
- **Ejemplos:** **Global Exchange (conductor):** funcional "registrar una venta de divisas"; no funcional "el sistema debe operar sin interrupciones en horario de atención". **Segundo contexto industrial:** en un hospital, funcional "asignar cama" y no funcional "cumplir la ley de protección de datos".
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

- **Desarrollo:** Se definen los requerimientos funcionales: capacidades del sistema, cómo reacciona ante entradas y cómo se comporta en situaciones particulares; también declaran lo que el sistema NO debe hacer.
- **Ejemplos:** **Global Exchange (conductor):** "el sistema permite al operador registrar una transacción con monto, moneda origen y destino". **Segundo contexto industrial:** en un sistema de préstamos, "el sistema no permite aprobar un préstamo sin verificación de identidad".
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

- **Desarrollo:** Se muestran cuatro ejemplos de requerimientos funcionales (RF1-RF4) para un sistema típico de comercio: control de acceso, país de preselección, departamentos por país y envío de correos por transacción.
- **Ejemplos:** **Global Exchange (conductor):** RF "el sistema valida el usuario y contraseña del operador"; RF "el sistema registra el tipo de cambio aplicado en cada venta". **Segundo contexto industrial:** en un sistema de facturación, los mismos patrones de RF1-RF4.
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

- **Desarrollo:** Se definen los requerimientos no funcionales: restricciones y requisitos de calidad (fiabilidad, tiempo de respuesta, capacidad de almacenamiento, restricciones de hardware y representación de datos).
- **Ejemplos:** **Global Exchange (conductor):** "el sistema debe responder una cotización en menos de 2 segundos" o "debe operar en horario continuo sin caídas". **Segundo contexto industrial:** en un sistema de salud, "los datos de pacientes deben estar cifrados".
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

- **Desarrollo:** Slide visual: se muestra el diagrama de la clasificación de los requerimientos no funcionales (producto, organizacionales y externos).
- **Ejemplos:** **Global Exchange (conductor):** ubicamos cada ejemplo en el diagrama: tiempos de respuesta (producto), cumplimiento normativo (externo). **Segundo contexto industrial:** en un banco, privacidad (externo) y disponibilidad (producto).
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

- **Desarrollo:** Se muestran ejemplos de requerimientos no funcionales organizados en tres grupos: del producto, organizacionales y externos (RNF1-RNF3).
- **Ejemplos:** **Global Exchange (conductor):** RNF "la interfaz del operador será HTML sin applets"; RNF "los entregables cumplirán la norma interna"; RNF "no se registrará información personal innecesaria". **Segundo contexto industrial:** en un sistema de salud, RNF externo "cumplir la ley de protección de datos (LOPD)".
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

- **Desarrollo:** Slide visual: se muestra un ejemplo ilustrado de requerimientos, sirviendo de apoyo para fijar el concepto.
- **Ejemplos:** **Global Exchange (conductor):** la imagen ilustra cómo se describe un requerimiento con su contexto. **Segundo contexto industrial:** aplicable a cualquier dominio de negocio.
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

- **Desarrollo:** Se define la Ingeniería de Requisitos como el conjunto de actividades para descubrir, documentar y mantener los requisitos, y para establecer los servicios y restricciones que el cliente requiere.
- **Ejemplos:** **Global Exchange (conductor):** la ingeniería de requisitos nos permite pasar de "queremos cambiar divisas" a un documento claro de servicios y restricciones. **Segundo contexto industrial:** en un ERP, definir qué módulos y bajo qué restricciones.
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

- **Desarrollo:** Se define el proceso de la ingeniería de requerimientos como un conjunto estructurado de actividades de cuya ejecución se obtiene, valida y mantiene el documento de requisitos (ERS).
- **Ejemplos:** **Global Exchange (conductor):** el proceso comienza con obtener qué necesita el cliente y termina con un ERS validado. **Segundo contexto industrial:** en un sistema de logística, el mismo flujo.
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

- **Desarrollo:** Se presentan los participantes en el proceso de ingeniería de requerimientos: cliente y usuarios, diseñadores, supervisores del contrato, gerentes del negocio y verificadores, con el rol de cada uno.
- **Ejemplos:** **Global Exchange (conductor):** el cliente define las reglas de cambio; el diseñador las convierte en arquitectura; el supervisor fija hitos; el verificador comprueba el cumplimiento. **Segundo contexto industrial:** en un hospital, pacientes (usuarios), médicos (gerentes), auditores (verificadores).
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

- **Desarrollo:** Slide visual: se muestra el diagrama del proceso de la ingeniería de requerimientos con sus actividades.
- **Ejemplos:** **Global Exchange (conductor):** localizamos en el diagrama dónde estamos: obtención, análisis, especificación, verificación y validación. **Segundo contexto industrial:** igual para cualquier dominio.
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

- **Desarrollo:** Slide visual de apoyo: se repite el diagrama del proceso para fijar la secuencia de actividades.
- **Ejemplos:** **Global Exchange (conductor):** se repasa el flujo de actividades con el ejemplo de las divisas. **Segundo contexto industrial:** aplicación a cualquier proyecto.
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

- **Desarrollo:** Se presentan las fuentes de donde se obtienen los requerimientos: clientes y usuarios, modelos del dominio, la situación actual, la organización y sistemas existentes, la versión anterior y documentos o sistemas análogos.
- **Ejemplos:** **Global Exchange (conductor):** se consulta al cliente (reglas de cambio), al sistema actual (planillas manuales) y a sistemas análogos (casas de cambio existentes). **Segundo contexto industrial:** en un hospital, revisar el sistema de turnos actual y los registros en papel.
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

- **Desarrollo:** Se presentan las técnicas de obtención de requerimientos: reuniones/entrevistas, cuestionarios, observación y brainstorming.
- **Ejemplos:** **Global Exchange (conductor):** entrevistas con el cliente para conocer las reglas de cambio; observación de cómo los operadores registran operaciones hoy; brainstorming para ideas de nuevas funciones. **Segundo contexto industrial:** en un sistema de logística, encuestas a repartidores y observación de rutas.
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

- **Desarrollo:** Se presentan los problemas comunes en la obtención de requerimientos: usuarios que no saben qué quieren o no conocen el costo, requisitos implícitos, distintas fuentes con requisitos distintos, factores políticos, prioridades que cambian y nuevos requisitos que aparecen.
- **Ejemplos:** **Global Exchange (conductor):** el cliente pide "cambiar divisas" sin saber cuántas monedas ni qué márgenes; luego pide más monedas. **Segundo contexto industrial:** en un sistema de turnos, distintas áreas piden prioridades distintas.
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

- **Desarrollo:** Slide visual de apoyo: se repite el diagrama del proceso para situar la actividad de análisis.
- **Ejemplos:** **Global Exchange (conductor):** se ubica la obtención y el análisis dentro del flujo general. **Segundo contexto industrial:** igual para cualquier proyecto.
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

- **Desarrollo:** Se presentan las actividades del análisis de requerimientos: analizar stakeholders, crear vistas, detallar, negociar prioridades, buscar requerimientos que faltan, evaluar factibilidad con prototipos y evaluar riesgos.
- **Ejemplos:** **Global Exchange (conductor):** se negocia qué monedas se soportan en la primera versión; se crean vistas del sistema por rol. **Segundo contexto industrial:** en un ERP, priorizar módulos y evaluar riesgos de integración.
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

- **Desarrollo:** Se presentan los modelos o vistas del sistema usados en el análisis: glosario, modelos gráficos, modelo conceptual, diagramas de estado, DFD, prototipos de interfaz, casos de prueba, tablas de decisión y casos de uso.
- **Ejemplos:** **Global Exchange (conductor):** un caso de uso "registrar venta de divisas", un DFD del flujo de operaciones, un prototipo de la pantalla de cotización. **Segundo contexto industrial:** en un hospital, un diagrama de estado del turno (en espera, en atención, finalizado).
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

- **Desarrollo:** Slide visual de apoyo: diagrama del proceso, situando la especificación.
- **Ejemplos:** **Global Exchange (conductor):** se ubica el análisis y la especificación en el flujo. **Segundo contexto industrial:** igual.
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

- **Desarrollo:** Se presentan las pautas para documentar los requisitos: qué documentar (lo que hace el sistema actual, lo que pide el cliente, lo que hará, criterios de aceptación y verificación) y recomendaciones de redacción (agrupar por temas, requerimientos positivos, voz activa, indicar alcance y múltiples vistas).
- **Ejemplos:** **Global Exchange (conductor):** documentar que hoy se registra en planillas, que el cliente pide un sistema web, y que el nuevo sistema registrará operaciones en línea con criterios de aceptación definidos. **Segundo contexto industrial:** en un sistema de inventario, igual.
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

- **Desarrollo:** Se presentan los contenidos del documento de especificación de requisitos (SRS): registrar en términos del cliente, propósito general, contexto, visión global, características del sistema, alcance, interfaces y ambiente de operación.
- **Ejemplos:** **Global Exchange (conductor):** el SRS describe el propósito (sistema de cambio de divisas en línea), contexto (operaciones del local), características (registrar, cotizar, liquidar) e interfaces (con el sistema contable). **Segundo contexto industrial:** en un hospital, el SRS del sistema de turnos describe hardware, comunicaciones y personal.
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

- **Desarrollo:** Se presentan las primeras características de una buena especificación SRS según IEEE 830: correcta/válida, no ambigua y completa, con detalle de cada una.
- **Ejemplos:** **Global Exchange (conductor):** un requisito es correcto si el cliente lo valida; no ambiguo si tiene una única interpretación; completo si no hay "a determinar" sin explicar. **Segundo contexto industrial:** en un sistema de turnos, validar con el cliente cada requisito.
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

- **Desarrollo:** Se presentan más características del SRS según IEEE 830: consistente internamente, ordenada por importancia/estabilidad, y verificable, con sus implicaciones.
- **Ejemplos:** **Global Exchange (conductor):** "el sistema responde en 2 segundos" es verificable si existe una prueba; un requisito contradictorio con otro rompe la consistencia. **Segundo contexto industrial:** en un sistema de facturación, definir pruebas para cada requisito.
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

- **Desarrollo:** Se presentan las últimas características del SRS según IEEE 830: trazables (hacia atrás y hacia adelante), realistas/factibles y entendibles.
- **Ejemplos:** **Global Exchange (conductor):** cada requisito tiene un identificador único que permite rastrear su origen y su implementación; "tiempo de respuesta local = remoto" puede no ser factible. **Segundo contexto industrial:** en un sistema de salud, trazar cada requisito a su normativa.
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

- **Desarrollo:** Slide visual de apoyo: diagrama del proceso, situando la verificación.
- **Ejemplos:** **Global Exchange (conductor):** se ubica la verificación dentro del flujo, tras la especificación. **Segundo contexto industrial:** igual.
- **Reflexión docente:** el diagrama mantiene el contexto.
- **Pregunta desafío:** ¿qué viene después de especificar en el proceso?
- **Respuestas posibles:**
 1. Verificar.
 2. Validar.
 3. Gestionar.
- **Advertencia:** es un apoyo visual.

### Slide 31. Verificación de Requerimientos

**Texto visible**

- `Verificación de Requerimientos`
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

- **Desarrollo:** Se presentan los criterios para verificar el documento de requisitos: consistencia, completitud (omisiones y límites), ambigüedades, realismo o factibilidad, verificabilidad, comprensibilidad, adaptabilidad y trazabilidad.
- **Ejemplos:** **Global Exchange (conductor):** verificar que no haya contradicciones entre las reglas de cambio; usar tablas para ver que no falten casos (límites); revisar que "el sistema debe ser rápido" sea reformulado con métricas. **Segundo contexto industrial:** en un sistema de turnos, árboles de decisión para cubrir todas las opciones.
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

- **Desarrollo:** Se presenta la verificación de los requerimientos no funcionales: son difíciles de verificar, deben expresarse cuantitativamente con métricas objetivas (ideal) y a los usuarios les cuesta especificarlos en forma cuantitativa.
- **Ejemplos:** **Global Exchange (conductor):** "el sistema debe ser confiable" se reformula como "disponibilidad del 99,9% anual". **Segundo contexto industrial:** en un sistema de salud, "los datos deben protegerse" se reformula como "cifrado AES-256".
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

- **Desarrollo:** Slide visual de apoyo: diagrama del proceso, situando la validación.
- **Ejemplos:** **Global Exchange (conductor):** se ubica la validación tras la verificación. **Segundo contexto industrial:** igual.
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

- **Desarrollo:** Se define la validación de requerimientos: proceso por el cual se determina si la especificación es consistente con las necesidades del cliente; incluye validez, planificar quién valida qué artefacto y cómo, y registrar un reporte de validación con firma.
- **Ejemplos:** **Global Exchange (conductor):** el cliente valida que el SRS refleja las reglas de cambio que realmente necesita y firma el reporte. **Segundo contexto industrial:** en un hospital, cada stakeholder valida los artefactos que le conciernen.
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

- **Desarrollo:** Se presenta la validación como proceso manual: revisiones informales y formales (recorrida del documento con el cliente), con participantes del cliente y del equipo de desarrollo, incluyendo revisión de objetivos, alineamiento, ambiente, funciones, restricciones y riesgos.
- **Ejemplos:** **Global Exchange (conductor):** una recorrida del SRS con el cliente explicando implicancias de cada requisito; participan el analista, el diseñador y los encargados de pruebas. **Segundo contexto industrial:** en un sistema de facturación, revisar objetivos y alineamiento con la normativa.
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

- **Desarrollo:** Se presenta la gestión de requerimientos: comprender y controlar los cambios; se hace en paralelo con el proceso de requisitos; los cambios surgen por muchos usuarios, diferencias entre quien paga y quien usa, cambios de negocio y de tecnología; tiene tres etapas: planificación, administración del cambio y trazabilidad.
- **Ejemplos:** **Global Exchange (conductor):** el cliente pide nuevas monedas; se administra el cambio evaluando su impacto y se actualiza la trazabilidad. **Segundo contexto industrial:** en un sistema de inventario, cambios por nueva normativa.
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

- **Desarrollo:** Se presentan herramientas para la gestión de requerimientos: JIRA (historias de usuario, tareas, épicas, prioridades), Trello (tableros visuales), Confluence (documentación estructurada) y GitHub Issues (seguimiento de problemas y mejoras).
- **Ejemplos:** **Global Exchange (conductor):** usar JIRA para las historias de usuario del sistema de divisas, Confluence para el SRS y GitHub Issues para bugs. **Segundo contexto industrial:** en un ERP, Trello para el flujo de trabajo y Confluence para la especificación.
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

- **Desarrollo:** Se comparten referencias web con ejemplos de requerimientos funcionales y no funcionales para ampliar la práctica.
- **Ejemplos:** **Global Exchange (conductor):** usar los ejemplos de la referencia para redactar requerimientos del sistema de divisas. **Segundo contexto industrial:** adaptar los ejemplos a cualquier dominio.
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

- **Desarrollo:** Cierre de la unidad: se agradece y se abre el espacio de preguntas.
- **Ejemplos:** **Global Exchange (conductor):** repaso rápido de cómo definimos los requerimientos del sistema de cambio de divisas. **Segundo contexto industrial:** aplicación de lo aprendido a cualquier proyecto.
- **Reflexión docente:** la unidad sienta las bases para el diseño y desarrollo posteriores.
- **Pregunta desafío:** ¿qué concepto de la unidad les resultó más útil y por qué?
- **Respuestas posibles:**
 1. La diferencia entre funcionales y no funcionales.
 2. La verificación vs. validación.
 3. La gestión de cambios.
- **Advertencia:** cierre de la unidad; no se introducen contenidos nuevos.
