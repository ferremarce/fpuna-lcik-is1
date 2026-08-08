# Guía de regeneración de la Clase 4

Guía docente para regenerar la presentación de la **Unidad IV – Casos de Uso y Especificación de Casos de Uso**. Conserva los **22 slides**, su orden y su numeración. La presentación HTML de esta clase debe usar esta guía como especificación de contenido, no como sustituto del diseño visual.

## Lectura rápida

- **Fuente:** material de la Clase 4 (Unidad IV – Casos de Uso y Especificación de Casos de Uso). El material original cita a la autora de origen; la presentación generada usa la identidad institucional del repositorio (Prof. Lic. Guillermo Jacobo González Rodas Mst. PMP) en la portada, igual que clase-1, clase-2 y clase-3.
- **Total:** 22 slides.
- **Imágenes:** `assets/cu-formas-descripcion.png` (slide 5), `assets/como-preparar-cu.png` (slide 6), `assets/proceso-cu.png` (slide 7), `assets/diagrama-elementos.png` (slide 9), `assets/cu-crear-mensaje.png` (slide 10), `assets/relacion-include.png` (slide 11), `assets/relacion-extend.png` (slide 12), `assets/mal-uso-relaciones.png` (slide 13), `assets/especificacion-1.png`, `assets/especificacion-2.png` y `assets/especificacion-3.png` (slides 14, 15 y 16), `assets/espec-cu-crear-mensaje-1.png` y `assets/espec-cu-crear-mensaje-2.png` (slides 17 y 18), `assets/fpuna_logo_institucional.svg` (topbar).
- **Diagrama recreado:** el slide 20 no tiene imagen en el material; se recrea como SVG institucional UML (actor Estudiante, siete casos de uso y las relaciones Reenviar Correo `<<Include>>` Consultar correos y Adjuntar archivos `<<Extend>>` Redactar Correo).
- **Dato sensible:** este material no contiene la contraseña del aula virtual.
- **Referencias:** se usan solo las referencias permitidas: Sommerville (cap. 4), Pressman (cap. 7), SWEBOK Guide y Larman (UML y casos de uso). La portada, los objetivos, el contenido y los cierres no exigen referencias bibliográficas.

## Criterio de transcripción

Cada slide se describe en tres capas:

1. **Texto visible:** transcripción del contenido textual del material fuente. Se conservan formulaciones y numeración.
2. **Elementos visuales:** objetos gráficos, imágenes y composición del slide.
3. **Explicación docente:** orientación para presentar el slide, tomada de las notas del orador de la presentación HTML.

## Inventario slide por slide

### Slide 1. Portada Unidad IV

**Texto visible**

- `INGENIERÍA DE SOFTWARE I`
- `UNIDAD IV – CASOS DE USO Y ESPECIFICACIÓN DE CASOS DE USO`
- `Prof. Lic. Guillermo Jacobo González Rodas Mst. PMP`

**Elementos visuales**

- Slide de apertura con el kicker "01 · Unidad IV", título principal, subtítulo de unidad y nombre del docente institucional.
- No contiene imágenes.

**Explicación docente**

- **Desarrollo:**
  - Presentar la Unidad IV como el momento en que describimos qué debe hacer el sistema desde la perspectiva del usuario: los casos de uso capturan las interacciones y las funcionalidades antes de diseñar nada.
  - Ubicar el punto del recorrido del curso: definidos los procesos y los requerimientos, ahora modelamos el comportamiento con casos de uso.
- **Ejemplos:** **Global Exchange (conductor):** identificar las operaciones de cambio que un cliente realiza (consultar tasas, comprar, vender) como futuros casos de uso. **Segundo contexto industrial:** en salud, un sistema de historia clínica describe la interacción del médico al registrar una consulta.
- **Reflexión docente:**
  - Un caso de uso bien descrito comunica al usuario y al equipo de desarrollo el mismo comportamiento esperado.
- **Pregunta desafío:** ¿qué funcionalidades del sistema de cambio de divisas describirían con casos de uso?
- **Respuestas posibles:**
  1. Consultar tasas vigentes.
  2. Comprar y vender divisas.
  3. Generar comprobantes de operación.
- **Advertencia:** la portada ubica el tema; los conceptos se desarrollan en los siguientes slides.

### Slide 2. Objetivos

**Texto visible**

- `OBJETIVOS`
- `Comprender qué son los casos de uso y por qué son importantes`
- `Familiarizarse con los diagramas de caso de uso y relaciones`
- `Conocer una plantilla estándar para especificación de casos de uso`

**Elementos visuales**

- Tarjetas numeradas 01/02/03 con el resultado esperado de cada objetivo.

**Explicación docente**

- **Desarrollo:**
  - Tomar los objetivos como criterios de aceptación de la clase: comprender qué son los casos de uso y por qué importan, familiarizarse con los diagramas y sus relaciones, y conocer una plantilla estándar de especificación.
  - Al cierre, volver a ellos para comprobar si podemos aplicarlos.
- **Ejemplos:** **Global Exchange (conductor):** al cierre deberíamos poder diagramar la operación de compra de divisas y especificarla con la plantilla. **Segundo contexto industrial:** en transporte, distinguir en un diagrama al despachante (actor) de los casos de uso de envío.
- **Reflexión docente:**
  - Un objetivo se demuestra construyendo un diagrama y una especificación, no repitiendo la frase.
- **Pregunta desafío:** ¿cómo demostrarían que comprendieron los casos de uso?
- **Respuestas posibles:**
  1. Construyendo un diagrama con actores y relaciones.
  2. Especificando un caso de uso con la plantilla.
  3. Explicando por qué un caso de uso es importante para el sistema.
- **Advertencia:** no confundir comprender el concepto con saber construir el diagrama y la especificación.

### Slide 3. Contenido

**Texto visible**

- `CONTENIDO`
- `Casos de Uso`
- `Diagrama de Casos de Uso`
- `Actores`
- `Relaciones`
- `Especificación de Casos de Uso`
- `Plantilla Estándar`

**Elementos visuales**

- Secuencia numerada de seis etapas: Casos de Uso, Diagrama de CU, Actores, Relaciones, Especificación y Plantilla estándar.

**Explicación docente**

- **Desarrollo:**
  - Recorrer el mapa de la unidad: qué son los casos de uso, el diagrama de casos de uso, los actores, las relaciones y la especificación con la plantilla estándar.
- **Ejemplos:** **Global Exchange (conductor):** el mapa completo aplica a las operaciones de cambio, desde los actores hasta la especificación. **Segundo contexto industrial:** en banca, el mismo recorrido se usa para modelar un nuevo producto financiero.
- **Reflexión docente:**
  - El orden no es decorativo: el diagrama identifica los elementos y la especificación los detalla.
- **Pregunta desafío:** ¿qué relación esperan entre el diagrama y la especificación de un caso de uso?
- **Respuestas posibles:**
  1. El diagrama muestra los elementos y la especificación los describe.
  2. La especificación complementa al diagrama con detalle.
  3. Ambos describen el mismo caso desde perspectivas distintas.
- **Advertencia:** la lista de temas anticipa el recorrido; no los desarrolla todavía.

### Slide 4. ¿Qué es un Caso de Uso?

**Texto visible**

- `Un caso de uso es una técnica utilizada en el diseño de sistemas de software para describir cómo un usuario interactúa con un sistema para lograr una tarea o función específica.`
- `Conjunto de escenarios que tienen una meta de usuario en común`
- `Descripción de un proceso de inicio a fin, relativamente largo, que incluye varias etapas o transacciones`
- `Presenta un uso particular del sistema`
- `Describe una funcionalidad del sistema`
- `Ayuda a definir los límites del sistema y las relaciones entre el sistema y su entorno`

**Elementos visuales**

- Cita que resume la esencia del caso de uso (conjunto de escenarios con una meta de usuario en común; interacción del usuario para lograr una tarea).

**Explicación docente**

- **Desarrollo:**
  - Definir el caso de uso como una técnica para describir cómo un usuario interactúa con el sistema para lograr una tarea específica.
  - Destacar las cinco ideas: conjunto de escenarios con una meta común, proceso de inicio a fin, uso particular, funcionalidad y ayuda a definir los límites del sistema y su relación con el entorno.
- **Ejemplos:** **Global Exchange (conductor):** "consultar la cotización vigente" es una meta de usuario con varios escenarios (por sucursal, por web) que define un límite del sistema. **Segundo contexto industrial:** en educación, "inscribirse en un curso" describe un proceso completo de inicio a fin.
- **Reflexión docente:**
  - El caso de uso se escribe desde el punto de vista del usuario y por eso delimita qué queda dentro y fuera del sistema.
- **Pregunta desafío:** ¿qué límite del sistema define el caso de uso "consultar tasas"?
- **Respuestas posibles:**
  1. El sistema expone las tasas; el cálculo interno queda fuera.
  2. El usuario no necesita conocer el proceso interno.
  3. Define qué información entra y sale del sistema.
- **Advertencia:** la definición es la base de todo lo que sigue; no avanzar sin dominarla.

### Slide 5. Casos de Uso — Formas de describir

**Texto visible**

- `Casos de Uso`
- `Formas de describir:`
- `Diagramas de Casos de Uso`
- `Especificación de Casos de Uso`

**Elementos visuales**

- Imagen `assets/cu-formas-descripcion.png` (diagrama de las formas de describir casos de uso).

**Explicación docente**

- **Desarrollo:**
  - Presentar las dos formas complementarias de describir casos de uso: los diagramas (vista gráfica de actores, casos y relaciones) y la especificación (descripción textual detallada).
- **Ejemplos:** **Global Exchange (conductor):** la venta de divisas se dibuja en un diagrama y se detalla en una especificación. **Segundo contexto industrial:** en comercio electrónico, el carrito de compras se dibuja y se especifica por separado.
- **Reflexión docente:**
  - El diagrama comunica de un vistazo; la especificación comunica con precisión; ambos se complementan.
- **Pregunta desafío:** ¿qué aporta cada forma de descripción?
- **Respuestas posibles:**
  1. El diagrama aporta la visión general.
  2. La especificación aporta el detalle.
  3. Juntas reducen la ambigüedad del comportamiento.
- **Advertencia:** la imagen esquematiza ambas formas; la especificación se desarrolla en los slides 14 a 18.

### Slide 6. Cómo preparar Casos de Uso

**Texto visible**

- `Cómo preparar Casos de Uso`

**Elementos visuales**

- Imagen `assets/como-preparar-cu.png` (diagrama de pasos para preparar casos de uso).

**Explicación docente**

- **Desarrollo:**
  - Presentar el slide como la guía de preparación de casos de uso; el diagrama resume los pasos ordenados que se siguen para construirlos.
  - Invitar a observar el diagrama y explicar cada paso a medida que se recorre.
- **Ejemplos:** **Global Exchange (conductor):** preparar los casos de uso de las operaciones de cambio siguiendo los pasos del diagrama. **Segundo contexto industrial:** en logística, la preparación de los casos de uso de gestión de pedidos sigue el mismo proceso.
- **Reflexión docente:**
  - Preparar con método evita omitir actores o metas y reduce el retrabajo.
- **Pregunta desafío:** ¿qué paso del diagrama consideran el más importante para no equivocarse?
- **Respuestas posibles:**
  1. Identificar correctamente los actores.
  2. Definir las metas de cada actor.
  3. Verificar que no falten casos de uso.
- **Advertencia:** el diagrama del material es la referencia; no inventar pasos fuera de él en la explicación.

### Slide 7. Proceso de Casos de Uso

**Texto visible**

- `Proceso de Casos de Uso`

**Elementos visuales**

- Imagen `assets/proceso-cu.png` (diagrama del proceso de casos de uso).

**Explicación docente**

- **Desarrollo:**
  - Presentar el proceso de casos de uso como la secuencia de actividades que organiza su construcción y validación.
  - Usar el diagrama del material para mostrar cómo fluye el trabajo y guiar su lectura paso a paso.
- **Ejemplos:** **Global Exchange (conductor):** el proceso acompaña la construcción de los casos de uso de tasas y operaciones de cambio. **Segundo contexto industrial:** en seguros, el mismo proceso define los casos de uso de emisión de pólizas.
- **Reflexión docente:**
  - Un proceso ordenado asegura que los casos de uso sean completos y consistentes.
- **Pregunta desafío:** ¿por qué conviene seguir un proceso al construir casos de uso?
- **Respuestas posibles:**
  1. Para no omitir casos ni actores.
  2. Para validar que reflejen el comportamiento real.
  3. Para mantener consistencia entre diagrama y especificación.
- **Advertencia:** la imagen de proceso marca la secuencia; no confundir el proceso con los pasos de preparación del slide anterior.

### Slide 8. Diagrama de Casos de Uso

**Texto visible**

- `Diagrama de Casos de Uso`
- `Límites del Sistema`
- `Actores`
- `Casos de Uso`
- `Relaciones: Asociación, Generalización/especialización, Inclusión, Extensión`

**Elementos visuales**

- Tarjetas con las cuatro relaciones: Asociación, Generalización, Inclusión y Extensión.

**Explicación docente**

- **Desarrollo:**
  - Presentar los componentes del diagrama de casos de uso: límites del sistema, actores, casos de uso y las relaciones de asociación, generalización o especialización, inclusión y extensión.
  - Anticipar que las relaciones se desarrollan en los siguientes slides.
- **Ejemplos:** **Global Exchange (conductor):** el límite separa las operaciones de cambio del resto del banco; el cliente es actor y "comprar divisas" es un caso de uso. **Segundo contexto industrial:** en gobierno, la administración tributaria delimita su sistema frente a otros organismos.
- **Reflexión docente:**
  - El límite del sistema es una decisión de modelado que define el alcance del proyecto.
- **Pregunta desafío:** ¿qué define el límite del sistema en un diagrama?
- **Respuestas posibles:**
  1. Qué comportamientos son responsabilidad del sistema.
  2. Qué actores interactúan con él.
  3. Qué relaciones se modelan dentro del alcance.
- **Advertencia:** generalización y especialización aplican también a los actores, no solo a los casos de uso.

### Slide 9. Elementos del diagrama

**Texto visible**

- `Diagrama de Casos de Uso`
- `actor`
- `caso de uso`
- `asociación`

**Elementos visuales**

- Imagen `assets/diagrama-elementos.png` (elementos del diagrama: actor, caso de uso y asociación).

**Explicación docente**

- **Desarrollo:**
  - Presentar los tres elementos básicos del diagrama: el actor (rol que interactúa), el caso de uso (funcionalidad) y la asociación (vínculo de comunicación entre actor y caso de uso).
- **Ejemplos:** **Global Exchange (conductor):** el cliente (actor) se asocia con el caso de uso "consultar tasas". **Segundo contexto industrial:** en telecomunicaciones, el abonado se asocia con el caso de uso de autogestión de su línea.
- **Reflexión docente:**
  - Estos tres elementos son el vocabulario mínimo del diagrama; todo lo demás se construye sobre ellos.
- **Pregunta desafío:** ¿cuál de los tres elementos define quién se comunica con el sistema?
- **Respuestas posibles:**
  1. El actor.
  2. El caso de uso describe la comunicación.
  3. La asociación es el vínculo de comunicación.
- **Advertencia:** el actor es un rol, no una persona específica: una persona puede desempeñar varios roles.

### Slide 10. Casos de Uso "Crear mensaje en el foro"

**Texto visible**

- `Casos de Uso "Crear mensaje en el foro"`

**Elementos visuales**

- Imagen `assets/cu-crear-mensaje.png` (diagrama de casos de uso "Crear mensaje en el foro").

**Explicación docente**

- **Desarrollo:**
  - Presentar el ejemplo del diagrama de casos de uso "Crear mensaje en el foro".
  - Identificar los actores y los casos de uso representados y cómo se asocian.
- **Ejemplos:** **Global Exchange (conductor):** un diagrama análogo describiría "Registrar operación de cambio" con los actores cliente y operador. **Segundo contexto industrial:** en una mesa de ayuda, "registrar un ticket de soporte" tiene una estructura equivalente.
- **Reflexión docente:**
  - Leer un diagrama ajeno es una habilidad: hay que identificar actores, casos y relaciones.
- **Pregunta desafío:** ¿qué actores esperarían encontrar en el diagrama del foro?
- **Respuestas posibles:**
  1. El participante que crea el mensaje.
  2. El moderador que revisa o publica.
  3. El sistema que registra la publicación.
- **Advertencia:** el ejemplo pertenece al material original; usarlo como referencia para otros dominios.

### Slide 11. Casos de Uso – Relación Include

**Texto visible**

- `Casos de Uso – Relación Include`

**Elementos visuales**

- Imagen `assets/relacion-include.png` (diagrama de la relación Include entre casos de uso).

**Explicación docente**

- **Desarrollo:**
  - Explicar la relación Include: un caso de uso incluye otro de forma obligatoria para reutilizar comportamiento común.
  - El caso incluido se ejecuta siempre dentro del que lo incluye.
- **Ejemplos:** **Global Exchange (conductor):** "Vender divisas `<<include>>` Validar identidad del cliente": cada venta valida la identidad. **Segundo contexto industrial:** en banca, "Transferir fondos `<<include>>` Autenticar usuario" reutiliza la autenticación.
- **Reflexión docente:**
  - Include sirve para extraer comportamiento repetido y evitar duplicarlo en varios casos de uso.
- **Pregunta desafío:** ¿cuándo conviene extraer un caso de uso con Include?
- **Respuestas posibles:**
  1. Cuando varios casos comparten el mismo comportamiento.
  2. Cuando el comportamiento es obligatorio para el caso.
  3. Cuando conviene reutilizar y reducir duplicación.
- **Advertencia:** no usar Include para comportamiento opcional: eso corresponde a Extend.

### Slide 12. Casos de Uso – Relación Extend

**Texto visible**

- `Casos de Uso – Relación Extend`

**Elementos visuales**

- Imagen `assets/relacion-extend.png` (diagrama de la relación Extend entre casos de uso).

**Explicación docente**

- **Desarrollo:**
  - Explicar la relación Extend: agrega comportamiento opcional a un caso de uso base que se ejecuta solo bajo ciertas condiciones.
- **Ejemplos:** **Global Exchange (conductor):** "Aplicar recargo por moneda escasa `<<extend>>` Vender divisas": el recargo solo se aplica si la moneda está escasa. **Segundo contexto industrial:** en un hospital, "Registrar urgencia `<<extend>>` Agendar turno" ocurre solo en emergencias.
- **Reflexión docente:**
  - Extend modela variaciones y excepciones sin ensuciar el caso de uso principal.
- **Pregunta desafío:** ¿qué diferencia a Extend de Include?
- **Respuestas posibles:**
  1. Extend es opcional e Include es obligatorio.
  2. Extend depende de una condición.
  3. Include reutiliza comportamiento común.
- **Advertencia:** confundir Include y Extend es el error más común al modelar relaciones.

### Slide 13. Mal uso de las relaciones

**Texto visible**

- `Mal uso de las relaciones`

**Elementos visuales**

- Imagen `assets/mal-uso-relaciones.png` (ejemplos de mal uso de las relaciones entre casos de uso).

**Explicación docente**

- **Desarrollo:**
  - Presentar los ejemplos de mal uso de las relaciones: usar Include o Extend sin criterio genera diagramas confusos.
  - Explicar los errores que muestra el material y cómo evitarlos.
- **Ejemplos:** **Global Exchange (conductor):** no usar Extend para agregar una operación completa a otra; el modelo debe reflejar la realidad del negocio. **Segundo contexto industrial:** en retail, un punto de venta no debe encadenar includes sin necesidad.
- **Reflexión docente:**
  - La claridad del modelo vale más que el uso de todas las relaciones disponibles.
- **Pregunta desafío:** ¿cómo reconocer un mal uso de las relaciones en un diagrama?
- **Respuestas posibles:**
  1. Cuando el diagrama se vuelve confuso.
  2. Cuando se usa Include para comportamiento opcional.
  3. Cuando las relaciones no aportan claridad al modelo.
- **Advertencia:** el material muestra contraejemplos para evitar; no replicarlos en los trabajos.

### Slide 14. Especificación de Casos de Uso

**Texto visible**

- `Especificación de Casos de Uso`

**Elementos visuales**

- Imagen `assets/especificacion-1.png` (plantilla de especificación de casos de uso, primera parte).

**Explicación docente**

- **Desarrollo:**
  - Introducir la especificación de casos de uso como la descripción textual detallada que complementa al diagrama.
  - Presentar la plantilla estándar y sus campos iniciales.
- **Ejemplos:** **Global Exchange (conductor):** la especificación de "comprar divisas" detalla el objetivo, los actores y las condiciones. **Segundo contexto industrial:** en logística, la especificación de "seguimiento de envío" usa la misma plantilla.
- **Reflexión docente:**
  - La plantilla estándar da uniformidad a las especificaciones del equipo.
- **Pregunta desafío:** ¿qué campos esperan en una plantilla de especificación de casos de uso?
- **Respuestas posibles:**
  1. Nombre, actores y objetivo.
  2. Precondiciones y flujo de eventos.
  3. Postcondiciones y excepciones.
- **Advertencia:** la plantilla del material es un estándar de referencia; los campos se detallan en los siguientes slides.

### Slide 15. Especificación de Casos de Uso

**Texto visible**

- `Especificación de Casos de Uso`

**Elementos visuales**

- Imagen `assets/especificacion-2.png` (plantilla de especificación de casos de uso, segunda parte).

**Explicación docente**

- **Desarrollo:**
  - Continuar con la plantilla de especificación: los campos que detallan la interacción entre el actor y el sistema, incluyendo el flujo básico de eventos.
- **Ejemplos:** **Global Exchange (conductor):** el flujo básico de "comprar divisas" describe cada paso desde la selección de la moneda hasta el comprobante. **Segundo contexto industrial:** en gobierno, el flujo de un trámite en línea se describe paso a paso.
- **Reflexión docente:**
  - El flujo básico debe ser completo y comprensible por el usuario sin conocimientos técnicos.
- **Pregunta desafío:** ¿qué describe el flujo básico de un caso de uso?
- **Respuestas posibles:**
  1. La secuencia normal de la interacción.
  2. Los pasos del actor y del sistema.
  3. El camino más común hacia la meta.
- **Advertencia:** no incluir en el flujo básico las variaciones; esas van en los flujos alternativos.

### Slide 16. Especificación de Casos de Uso

**Texto visible**

- `Especificación de Casos de Uso`

**Elementos visuales**

- Imagen `assets/especificacion-3.png` (plantilla de especificación de casos de uso, tercera parte).

**Explicación docente**

- **Desarrollo:**
  - Completar la plantilla con los campos de cierre: precondiciones, postcondiciones y condiciones que validan el caso de uso.
- **Ejemplos:** **Global Exchange (conductor):** precondición de "vender divisas" es contar con la tasa vigente; postcondición, registrar la operación. **Segundo contexto industrial:** en telecomunicaciones, activar un servicio exige precondiciones de habilitación.
- **Reflexión docente:**
  - Las condiciones delimitan cuándo el caso de uso puede ejecutarse y qué garantiza al finalizar.
- **Pregunta desafío:** ¿qué diferencia hay entre precondición y postcondición?
- **Respuestas posibles:**
  1. La precondición se cumple antes de ejecutar.
  2. La postcondición se cumple al finalizar.
  3. Ambas delimitan el comportamiento del caso de uso.
- **Advertencia:** una especificación incompleta deja sin definir el comportamiento esperado del sistema.

### Slide 17. Especificación de CU "Crear mensaje en el foro"

**Texto visible**

- `Especificación de CU "Crear mensaje en el foro"`

**Elementos visuales**

- Imagen `assets/espec-cu-crear-mensaje-1.png` (especificación del caso de uso "Crear mensaje en el foro", primera parte).

**Explicación docente**

- **Desarrollo:**
  - Presentar la aplicación de la plantilla al caso de uso "Crear mensaje en el foro": objetivo, actores y condiciones del caso de uso.
- **Ejemplos:** **Global Exchange (conductor):** el mismo formato se aplica al caso de uso "Registrar operación de cambio". **Segundo contexto industrial:** en educación, "inscribirse en un curso" se especifica con la misma plantilla.
- **Reflexión docente:**
  - Aplicar la plantilla a un ejemplo concreto consolida el concepto.
- **Pregunta desafío:** ¿quién sería el actor principal del caso de uso "Crear mensaje en el foro"?
- **Respuestas posibles:**
  1. El participante que publica el mensaje.
  2. El moderador del foro.
  3. Cualquier usuario autenticado con permiso.
- **Advertencia:** la especificación del material es de referencia; no usar datos reales de personas en las prácticas.

### Slide 18. Especificación de CU "Crear mensaje en el foro"

**Texto visible**

- `Especificación de CU "Crear mensaje en el foro"`

**Elementos visuales**

- Imagen `assets/espec-cu-crear-mensaje-2.png` (especificación del caso de uso "Crear mensaje en el foro", segunda parte).

**Explicación docente**

- **Desarrollo:**
  - Completar la especificación del caso de uso "Crear mensaje en el foro" con el flujo de eventos: los pasos de la interacción entre el participante y el sistema.
- **Ejemplos:** **Global Exchange (conductor):** el flujo de "crear mensaje" se compara con el flujo de "registrar operación de cambio". **Segundo contexto industrial:** en una plataforma de e-learning, publicar una consulta sigue el mismo flujo.
- **Reflexión docente:**
  - El flujo de eventos convierte el diagrama en una guía accionable para el desarrollo.
- **Pregunta desafío:** ¿qué se debe describir en cada paso del flujo de eventos?
- **Respuestas posibles:**
  1. La acción del actor y la respuesta del sistema.
  2. El orden de los pasos hacia la meta.
  3. Las alternativas y excepciones.
- **Advertencia:** el nivel de detalle del flujo debe bastar para desarrollar y probar el caso de uso.

### Slide 19. Caso de Estudio – Diagrama de CU (enunciado)

**Texto visible**

- `Caso de Estudio – Diagrama de CU`
- `Preparar Diagramas de los casos de usos respectivos para la interacción de un estudiante con el sistema de correos electrónico`

**Elementos visuales**

- Cita que resume el enunciado y tarjetas con el actor (Estudiante), el sistema (Correos electrónicos) y el entregable (Diagrama de casos de uso).

**Explicación docente**

- **Desarrollo:**
  - Presentar el caso de estudio: preparar los diagramas de casos de uso para la interacción de un estudiante con el sistema de correos electrónicos.
  - Explicar el enunciado y los entregables esperados.
- **Ejemplos:** **Global Exchange (conductor):** el mismo ejercicio se resuelve con las operaciones de cambio y sus actores. **Segundo contexto industrial:** en banca, el home banking del cliente es un caso de estudio análogo.
- **Reflexión docente:**
  - El caso de estudio integra todo lo visto: actores, casos de uso y relaciones.
- **Pregunta desafío:** ¿qué casos de uso esperan identificar para el sistema de correos?
- **Respuestas posibles:**
  1. Consultar y recibir correos.
  2. Enviar, redactar y reenviar correos.
  3. Borrar correos y adjuntar archivos.
- **Advertencia:** usar cuentas y datos ficticios del enunciado; no usar correos personales reales en el ejercicio.

### Slide 20. Caso de Estudio – Diagrama de CU (solución)

**Texto visible**

- `Caso de Estudio – Diagrama de CU`
- Actor: `Estudiante`
- Casos de uso: `Consultar correos`, `Enviar correo`, `Redactar Correo`, `Borrar correos`, `Recibir correos`, `Reenviar Correo`, `Adjuntar archivos`
- Relaciones: `Reenviar Correo <<Include>> Consultar correos`; `Adjuntar archivos <<Extend>> Redactar Correo`

**Elementos visuales**

- Diagrama SVG institucional UML recreado: actor Estudiante (figura de palo), sistema limitado por el rectángulo "Sistema de Correos Electrónicos", siete casos de uso como elipses y relaciones `<<include>>` y `<<extend>>` con flechas punteadas en azul institucional (`#2c4a8a`).

**Explicación docente**

- **Desarrollo:**
  - Presentar el diagrama de casos de uso del sistema de correos: el actor Estudiante, los siete casos de uso y las relaciones Reenviar Correo `<<Include>>` Consultar correos y Adjuntar archivos `<<Extend>>` Redactar Correo.
  - Explicar el porqué de cada relación.
- **Ejemplos:** **Global Exchange (conductor):** el diagrama equivalente mostraría al cliente con las operaciones de cambio y sus relaciones. **Segundo contexto industrial:** en un sistema de correo corporativo, el empleado es el actor con los mismos casos de uso.
- **Reflexión docente:**
  - Reenviar implica consultar el correo original; adjuntar archivos es una extensión opcional al redactar.
- **Pregunta desafío:** ¿por qué "Adjuntar archivos" extiende a "Redactar Correo" y no lo incluye?
- **Respuestas posibles:**
  1. Porque adjuntar es opcional al redactar.
  2. Porque solo ocurre bajo la condición de agregar archivos.
  3. Porque redactar puede completarse sin adjuntar.
- **Advertencia:** el diagrama SVG recrea la solución del material; la numeración de los casos puede variar en otros autores.

### Slide 21. Referencias

**Texto visible**

- `Referencias`
- `http://agilismoatwork.blogspot.com/2012/12/actividad-tablero-kanban-concepto-de.html`
- `http://agilismoatwork.blogspot.com/2011/11/implantando-roles-agiles-parte-i-los.html`
- `http://agilismoatwork.blogspot.com/2014/05/backlog-todo-el-trabajo-pendiente-del.html`
- `https://proyectosagiles.org/que-es-scrum/`

**Elementos visuales**

- Tarjetas con los temas consultados: Kanban, Roles ágiles, Backlog y Scrum.

**Explicación docente**

- **Desarrollo:**
  - Presentar las referencias consultadas: enlaces a materiales de metodologías ágiles (Kanban, roles ágiles, backlog y Scrum) que complementan la unidad.
- **Ejemplos:** **Global Exchange (conductor):** los conceptos de backlog y Scrum pueden aplicarse a la gestión del proyecto de cambio de divisas. **Segundo contexto industrial:** en logística, un tablero Kanban organiza el flujo de trabajo del equipo.
- **Reflexión docente:**
  - Los recursos externos complementan; la bibliografía oficial del curso sigue siendo la referencia principal.
- **Pregunta desafío:** ¿cómo usarían estos recursos en el proyecto del curso?
- **Respuestas posibles:**
  1. Para gestionar el backlog del proyecto.
  2. Para organizar roles y tableros del equipo.
  3. Como lectura complementaria de metodologías ágiles.
- **Advertencia:** los enlaces pertenecen al material original y pueden cambiar; verificar su vigencia al usarlos.

### Slide 22. Muchas gracias

**Texto visible**

- `Muchas gracias`

**Elementos visuales**

- Cita de síntesis: "Describir el comportamiento del sistema desde la perspectiva del usuario antes de diseñarlo".

**Explicación docente**

- **Desarrollo:**
  - Cerrar la unidad retomando el recorrido: desde qué es un caso de uso hasta su especificación con la plantilla estándar, con el diagrama como herramienta de comunicación.
- **Ejemplos:** **Global Exchange (conductor):** aplicar el proceso completo a las operaciones de cambio demuestra el valor de la disciplina. **Segundo contexto industrial:** cualquier sistema (salud, banca, logística) depende de los mismos principios.
- **Reflexión docente:**
  - Describir bien el comportamiento del sistema desde el usuario es la base para diseñarlo, desarrollarlo y validarlo.
- **Pregunta desafío:** ¿qué concepto de la unidad aplicarían primero en un proyecto?
- **Respuestas posibles:**
  1. El diagrama de casos de uso.
  2. La especificación con la plantilla estándar.
  3. El uso correcto de las relaciones.
- **Advertencia:** el cierre resume; la práctica en los trabajos del curso consolida los conceptos.
