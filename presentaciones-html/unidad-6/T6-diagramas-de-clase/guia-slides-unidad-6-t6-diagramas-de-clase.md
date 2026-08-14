# Guía de slides T6 · Diagramas de Clase

Guía docente y fuente de verdad de **Unidad VI · T6**. El deck conserva las 20 páginas del material principal `sesiones-clase/sesion-5/IS1-UNIDAD_V - Diagrama de CLASES.pdf` y complementa conceptos de `MODULO 10-CLASES-1.pdf` y `MODULO 10-CLASES-2.pdf`, sin incluir esos PDFs como recursos del deck.

## Criterio de transcripción

Cada slide contiene el texto visible, los elementos visuales y una explicación docente. La explicación de cada item se refleja en el campo `note` de `app.js`, en el mismo orden. Desde el slide 13 se incluyen referencias verificadas del material bibliográfico existente.

## Slide 1. Ingeniería de Software I

**Texto visible**

- `UNIDAD VI · DIAGRAMAS DE CLASE`
- `Prof. Lic. Guillermo Jacobo González Rodas Mst. PMP`
- `Modelar la estructura de un sistema antes de implementarlo.`

**Elementos visuales**

- Tarjeta hero institucional.
- Logo FP-UNA en el encabezado.

**Explicación docente**

**Desarrollo:** **Ingeniería de Software I:** ubica el tema en la asignatura; por ejemplo, un sistema de turnos necesita modelos antes de programarse. **UNIDAD VI · DIAGRAMAS DE CLASE:** presenta la estructura estática, sus clases y relaciones; por ejemplo, Paciente, Turno y Médico. **Prof. Lic. Guillermo Jacobo González Rodas Mst. PMP:** identifica al docente institucional. **Modelar la estructura de un sistema antes de implementarlo:** expresa el propósito de la unidad; por ejemplo, revisar responsabilidades en un modelo de biblioteca antes de escribir código.

**Reflexión docente:** un diagrama no reemplaza el análisis: lo hace visible y discutible.

**Pregunta desafío:** ¿qué decisión estructural conviene revisar antes de programar?

**Respuestas posibles:** 1. Las clases del dominio. 2. Sus responsabilidades. 3. Sus relaciones y restricciones.

**Advertencia:** esta portada usa la Unidad VI y el docente institucional actual; no reproduce la autoría de las fuentes.

## Slide 2. Objetivos

**Texto visible**

- `Comprender qué son los diagramas de clase y por qué son importantes.`
- `Familiarizarse con las notaciones de los diagramas de clase.`
- `Comprender la diferencia entre las relaciones de las clases.`

**Elementos visuales:** tres tarjetas numeradas.

**Explicación docente**

**Desarrollo:** **Objetivos:** presenta las metas observables de la unidad. **Comprender qué son los diagramas de clase y por qué son importantes:** implica reconocer la estructura de un sistema; por ejemplo, distinguir Libro de una instancia concreta. **Familiarizarse con las notaciones de los diagramas de clase:** implica leer clases, atributos, operaciones y multiplicidades; por ejemplo, interpretar `nombre: String`. **Comprender la diferencia entre las relaciones de las clases:** exige justificar asociación, composición, herencia o dependencia; por ejemplo, distinguir una Biblioteca que agrupa Libros de una Factura que compone sus Líneas.

**Reflexión docente:** dibujar símbolos no basta: cada relación debe tener significado.

**Pregunta desafío:** ¿cómo demostrarían que su diagrama es coherente?

**Respuestas posibles:** 1. Trazando cada clase a un requisito. 2. Revisando multiplicidades. 3. Validando responsabilidades con escenarios.

**Advertencia:** los objetivos describen resultados de aprendizaje, no una lista de herramientas.

## Slide 3. Contenido

**Texto visible**

- `Diagramas de Clase`
- `Elementos`
- `Clases y Objetos`
- `Relaciones`
- `Asociaciones`
- `Herencia`
- `Agregación y Composición`
- `Dependencia y Modelo`

**Elementos visuales:** secuencia numerada de ocho pasos.

**Explicación docente**

**Desarrollo:** **Contenido:** ordena la progresión conceptual. **Diagramas de Clase:** presentan la vista estructural. **Elementos:** reúnen clases, atributos, operaciones y relaciones. **Clases y Objetos:** separan la definición de sus instancias; por ejemplo, Libro y `libro-001`. **Relaciones:** explican conexiones y multiplicidades. **Asociaciones:** modelan vínculos 1:1, 1:N y N:M. **Herencia:** expresa generalización y especialización. **Agregación y Composición:** distinguen todo-parte con distinta dependencia de vida. **Dependencia y Modelo:** conectan el diagrama con una solución y sus decisiones.

**Reflexión docente:** el recorrido va de la abstracción a la justificación.

**Pregunta desafío:** ¿qué tema usarían para revisar una regla de negocio?

**Respuestas posibles:** 1. Multiplicidad. 2. Restricción. 3. Responsabilidad de una clase.

**Advertencia:** los temas están conectados; no deben estudiarse como símbolos aislados.

## Slide 4. ¿Qué es un Diagrama de Clase?

**Texto visible**

- `Los diagramas de clases son una herramienta para modelar sistemas.`
- `Proporcionan una representación visual de las clases, atributos, métodos y las relaciones entre estas clases.`
- `Documentan una solución de diseño: la estructura del sistema que se va a implementar en términos de clases y objetos.`
- `Ayudan a documentar el modelado de datos.`

**Elementos visuales:** tarjeta de definición y dos tarjetas numeradas.

**Explicación docente**

**Desarrollo:** **Los diagramas de clases son una herramienta para modelar sistemas:** permiten abstraer una realidad; por ejemplo, un sistema de biblioteca puede modelar Préstamo y Ejemplar. **Proporcionan una representación visual de las clases, atributos, métodos y las relaciones entre estas clases:** concentran estructura y responsabilidades en una vista legible. **Documentan una solución de diseño:** explican qué clases se implementarán y cómo colaboran; por ejemplo, Factura compone LíneasDeFactura. **Ayudan a documentar el modelado de datos:** hacen explícitos conceptos y vínculos, de manera análoga a un modelo entidad-relación, pero con comportamiento.

**Reflexión docente:** el diagrama es una decisión de diseño comunicable.

**Pregunta desafío:** ¿qué diferencia hay entre una foto del código y un modelo?

**Respuestas posibles:** 1. El modelo selecciona lo relevante. 2. Explicita significado. 3. Puede existir antes del código.

**Advertencia:** no agregar toda implementación si no ayuda a comunicar el diseño.

## Slide 5. Diagramas de Clase: ¿Qué Muestran?

**Texto visible**

- `Estructura estática`
- `La estructura estática del sistema modelado, independiente del tiempo.`
- `Relaciones`
- `Las relaciones que existen entre las distintas clases y objetos del sistema.`
- `Estructura interna`
- `Las clases y objetos del sistema y su estructura interna.`
- `No dinámicos`
- `Muestran aspectos estáticos y no dinámicos; para el comportamiento temporal se usan otros diagramas.`
- `Piense en el plano estructural de un ingeniero civil: muestra piezas y conexiones, no la secuencia de construcción.`

**Elementos visuales:** cuatro tarjetas y una cita destacada. Referencia: Rumbaugh, Jacobson y Booch, 2005.

**Explicación docente:** **Estructura estática:** describe qué elementos existen sin narrar una secuencia; por ejemplo, un Hospital tiene Pacientes y Médicos. **Relaciones:** expresan vínculos entre clases y objetos. **Estructura interna:** incluye propiedades y operaciones relevantes. **No dinámicos:** aclara que el tiempo y los mensajes pertenecen a otros modelos; por ejemplo, una secuencia de atención requiere un diagrama de secuencia. **Plano estructural:** la analogía ayuda a separar estructura de proceso.

**Reflexión docente:** elegir el diagrama correcto evita forzar una vista para responder otra pregunta.

**Pregunta desafío:** ¿qué modelo usarían para mostrar el orden temporal de una operación?

**Respuestas posibles:** 1. Secuencia. 2. Actividades. 3. Estados, según la pregunta.

**Advertencia:** una clase puede cambiar de estado, pero el diagrama de clases no muestra esa evolución.

## Slide 6. Diagramas de Clase: ¿Para qué Sirven?

**Texto visible**

- `Realizar la abstracción de un dominio y formalizar el análisis de los conceptos relacionados con él.`
- `Modelo de dominio`
- `Definir y documentar una solución de diseño en términos de clases y objetos.`
- `Definir y documentar el modelado de datos, como los diagramas ER.`
- `Un modelo de dominio selecciona conceptos relevantes del problema; no es un inventario de todas las palabras del negocio.`

**Elementos visuales:** tres tarjetas numeradas, badge de modelo de dominio y cita.

**Explicación docente:** **Abstracción de un dominio:** selecciona conceptos significativos; por ejemplo, en una biblioteca Libro, Usuario y Préstamo son relevantes. **Modelo de dominio:** formaliza conceptos y relaciones sin comprometer todavía la implementación. **Solución de diseño:** transforma conceptos en responsabilidades; por ejemplo, Préstamo puede calcular su vencimiento. **Modelado de datos:** documenta información persistente, como una relación entre Cliente y Factura. **No es un inventario:** una palabra del enunciado se convierte en clase sólo si tiene identidad, datos o responsabilidad útil.

**Reflexión docente:** una buena abstracción reduce ruido sin ocultar reglas importantes.

**Pregunta desafío:** ¿qué evidencia justifica convertir un sustantivo en clase?

**Respuestas posibles:** 1. Tiene atributos. 2. Participa en relaciones. 3. Posee responsabilidades o identidad.

**Advertencia:** el modelo de dominio no debe confundirse con un esquema de base de datos terminado.

## Slide 7. Elementos de un Diagrama de Clases

**Texto visible**

- `Clase: Conjunto de objetos con características similares y comportamientos comunes.`
- `Atributo: Propiedad que describe el estado; ejemplo: nombre: String.`
- `Método: Comportamiento de una clase; ejemplo: calcularPrecio(in precioBase: Double): Double.`
- `Relaciones: Conexiones entre clases y forma en que interactúan.`

**Elementos visuales:** tabla de cuatro filas. Referencia: OMG UML 2.5.1, 2017.

**Explicación docente:** **Clase:** define un conjunto de objetos con patrón común; por ejemplo, Libro. **Atributo:** expresa estado con nombre y tipo; por ejemplo, `isbn: String`. **Método:** expresa comportamiento con parámetros y retorno; por ejemplo, `calcularTotal(): Decimal`. **Relaciones:** conectan conceptos y permiten razonar sobre colaboración; por ejemplo, Cliente realiza Pedidos.

**Reflexión docente:** cada elemento responde una pregunta distinta: qué es, qué sabe, qué hace y con quién se relaciona.

**Pregunta desafío:** ¿por qué no alcanza con listar atributos?

**Respuestas posibles:** 1. Porque falta comportamiento. 2. Porque faltan vínculos. 3. Porque no se expresan restricciones.

**Advertencia:** los nombres deben ser claros y consistentes con requisitos y casos de uso.

## Slide 8. Las Clases

**Texto visible**

- `NombreDeClase`
- `- atributo: Tipo [multiplicidad]`
- `+ operacion(param: Tipo): Retorno`
- `Una clase se representa mediante un rectángulo dividido en nombre, propiedades y operaciones.`
- `Nombre: único identificador del clasificador.`
- `Atributos: propiedades relevantes.`
- `Operaciones: comportamiento disponible.`
- `Sólo el nombre es obligatorio; los otros compartimentos pueden quedar vacíos.`

**Elementos visuales:** clase UML de tres compartimentos y tarjetas de explicación. Referencia: OMG UML 2.5.1, 2017.

**Explicación docente:** **NombreDeClase:** identifica el clasificador. **Atributo:** ocupa el segundo compartimento y describe estado; por ejemplo, `-titulo: String`. **Operación:** ocupa el tercero y describe comportamiento; por ejemplo, `+prestar(usuario: Usuario): Prestamo`. **Rectángulo dividido:** es la notación clásica de tres compartimentos. **Sólo el nombre es obligatorio:** se puede usar una clase vacía cuando el modelo sólo necesita mostrar el concepto. **Sólo lo útil:** ocultar detalles irrelevantes mantiene legible el modelo.

**Reflexión docente:** el nivel de detalle debe responder a la finalidad del diagrama.

**Pregunta desafío:** ¿qué pasa si una clase tiene veinte operaciones en un diagrama conceptual?

**Respuestas posibles:** 1. Se pierde legibilidad. 2. Se puede separar la vista. 3. Se priorizan responsabilidades relevantes.

**Advertencia:** no convertir el diagrama conceptual en una copia exhaustiva del código.

## Slide 9. Atributos, Operaciones y Visibilidad

**Texto visible**

- `+ Público · - Privado · # Protegido · ~ Paquete`
- `[visibilidad] nombre [:tipo] [multiplicidad] [=valor por omisión] [{propiedad}]`
- `[visibilidad] nombre [(lista de parámetros)] [{propiedad}]`
- `[dirección (in/out/inout)] nombre: tipo [multiplicidad] [=valor por omisión]`
- `- nombre: Cadena[1]`
- `+ calcularPrecio(in precioBase: Double): Double`

**Elementos visuales:** cuatro tarjetas de sintaxis y bloque de código. Referencia: OMG UML 2.5.1, 2017.

**Explicación docente:** **Visibilidad:** `+` público, `-` privado, `#` protegido y `~` paquete; por ejemplo, el saldo puede ser privado. **Sintaxis de atributo:** combina visibilidad, nombre, tipo, multiplicidad, valor por omisión y propiedades; por ejemplo, `-lineas: LineaFactura [1..*]`. **Sintaxis de operación:** agrega nombre, parámetros y propiedades; por ejemplo, `+calcularTotal(): Decimal`. **Parámetro:** puede indicar dirección `in`, `out` o `inout`, nombre, tipo, multiplicidad y valor. **Ejemplo de código UML:** muestra cómo se leen los signos y tipos en una clase.

**Reflexión docente:** la sintaxis compacta permite comunicar decisiones precisas.

**Pregunta desafío:** ¿qué información aporta `0..1` en un atributo?

**Respuestas posibles:** 1. Que es opcional. 2. Que puede haber como máximo una instancia. 3. Que no es una colección.

**Advertencia:** la visibilidad no sustituye una política completa de autorización del sistema.

## Slide 10. Clases y Objetos

**Texto visible**

- `Clase: Definición de estructura y comportamiento de un conjunto de objetos con el mismo patrón.`
- `Objeto: Representación de algo mediante identificador, estructura y comportamiento. Es una instancia de una clase.`
- `Persona`
- `nombre: String`
- `p1 = new Persona()`
- `Instanciación: proceso de crear una instancia.`

**Elementos visuales:** clase Persona conectada a una instancia. Referencia: Rumbaugh, Jacobson y Booch, 2005.

**Explicación docente:** **Clase:** es la definición compartida; por ejemplo, Persona describe estructura y comportamiento. **Objeto:** es una instancia concreta con identidad; por ejemplo, `p1` representa una persona determinada. **Identificador, estructura y comportamiento:** explican qué diferencia a un objeto de un valor aislado. **Instanciación:** es la creación mediante una operación como `p1 = new Persona()`. **Relación entre clase y objeto:** una clase puede originar muchas instancias con distintos valores.

**Reflexión docente:** confundir clase y objeto produce modelos ambiguos.

**Pregunta desafío:** ¿Libro y un libro específico representan lo mismo?

**Respuestas posibles:** 1. No. 2. Libro es clase. 3. El ejemplar concreto es objeto.

**Advertencia:** el objeto no es una segunda clase; es una instancia situada.

## Slide 11. Clases Parametrizables, Abstractas y Utilitarias

**Texto visible**

- `Parametrizables / Genéricas: Plantillas que se parametrizan con uno o más tipos de datos.`
- `Lista<T>`
- `Abstractas: Clases que no tienen implementación para todos los métodos definidos y no se instancian directamente.`
- `Utilitarias: Clases que contienen librerías de funciones.`

**Elementos visuales:** tres tarjetas comparativas. Referencia: Rumbaugh, Jacobson y Booch, 2005.

**Explicación docente:** **Parametrizables / Genéricas:** reutilizan una estructura con tipos variables; por ejemplo, `Lista<Libro>`. **Abstractas:** definen comportamiento incompleto para subclases; por ejemplo, Figura declara `calcularArea()` sin implementarlo. **Utilitarias:** agrupan funciones de uso general; por ejemplo, una clase FechaUtilitaria. **Diferencia entre los tres tipos:** una genérica varía por tipo, una abstracta modela una base incompleta y una utilitaria concentra funciones.

**Reflexión docente:** marcar una clase como abstracta o utilitaria comunica una decisión de diseño.

**Pregunta desafío:** ¿qué clase no debería instanciarse directamente?

**Respuestas posibles:** 1. Una abstracción incompleta. 2. Una clase utilitaria si sólo expone operaciones estáticas. 3. Depende de la regla de diseño.

**Advertencia:** no usar clases utilitarias para esconder responsabilidades mal ubicadas.

## Slide 12. Las Relaciones y la Multiplicidad

**Texto visible**

- `Las relaciones representan conexiones entre clases y cómo interactúan entre sí.`
- `La multiplicidad o cardinalidad representa el número de elementos de cada clase en una relación. Puede usar * para un número indeterminado.`
- `0..1: cero o una instancia`
- `1: exactamente una instancia`
- `1..*: una o más instancias`
- `0..*: cero o muchas instancias`

**Elementos visuales:** tarjeta conceptual y tabla de multiplicidades. Referencia: OMG UML 2.5.1, 2017.

**Explicación docente:** **Relaciones:** conectan clases y explican colaboración. **Multiplicidad o cardinalidad:** limita cuántas instancias participan; por ejemplo, un Pedido tiene `1..*` Líneas. **0..1:** relación opcional de una instancia; por ejemplo, una persona puede tener cero o un teléfono principal. **1:** relación obligatoria única. **1..*:** una o más instancias. **0..*:** colección opcional. **Asterisco:** representa cantidad indeterminada dentro del límite expresado.

**Reflexión docente:** una multiplicidad es una regla de negocio visible.

**Pregunta desafío:** ¿qué error aparece si una factura se modela sin líneas?

**Respuestas posibles:** 1. Permite una factura sin detalle. 2. Contradice la regla del dominio. 3. Debe justificarse como excepción.

**Advertencia:** no elegir multiplicidades por costumbre; deben derivarse del dominio.

## Slide 13. Asociaciones: 1:1, 1:N y N:M

**Texto visible**

- `1:1: Un Departamento tiene una Secretaria y una Secretaria pertenece a un Departamento.`
- `1:N: Un Departamento tiene muchos Profesores; cada Profesor pertenece a un Departamento.`
- `N:M: Un Estudiante cursa muchas Asignaturas y una Asignatura tiene muchos Estudiantes.`
- `La asociación se nombra con un verbo o rol: “tiene”, “pertenece”, “dicta”.`

**Elementos visuales:** tres tarjetas y asociación UML Departamento-Profesor con multiplicidades. Referencia: Rumbaugh, Jacobson y Booch, 2005.

**Explicación docente:** **1:1:** cada extremo limita al otro; por ejemplo, una Secretaria pertenece a un único Departamento. **1:N:** un objeto se asocia con muchos y cada miembro vuelve a uno; por ejemplo, un Departamento tiene muchos Profesores. **N:M:** ambos lados permiten muchos; por ejemplo, Estudiante y Asignatura. **Multiplicidades visibles:** los números junto a cada extremo deben leerse desde la clase opuesta. **Nombre o rol:** “tiene” y “pertenece” ayudan a interpretar la relación.

**Reflexión docente:** leer la asociación en ambos sentidos descubre inconsistencias.

**Pregunta desafío:** ¿cómo se implementa una asociación N:M sin perder información propia del vínculo?

**Respuestas posibles:** 1. Con una clase de asociación. 2. Con una tabla intermedia. 3. Con referencias cruzadas.

**Advertencia:** no confundir N:M con dos asociaciones independientes sin regla de correspondencia.

## Slide 14. Clase de Asociación

**Texto visible**

- `Estudiante`
- `Sección`
- `Nota «clase de asociación»`
- `nota: Double`
- `asistencias: Integer`
- `Una relación muchos a muchos se puede ver como dos relaciones uno a muchos.`
- `La clase de asociación almacena datos del vínculo y mantiene referencias a las dos clases relacionadas.`

**Elementos visuales:** dos clases extremas, clase Nota y colecciones. Referencia: OMG UML 2.5.1, 2017.

**Explicación docente:** **Estudiante y Sección:** representan los extremos de una relación N:M. **Nota como clase de asociación:** almacena información que no pertenece sólo a un estudiante ni sólo a una sección; por ejemplo, nota y asistencias. **Dos relaciones 1:N:** permiten representar la colección de notas desde cada extremo. **Datos del vínculo:** justifican crear la clase `Nota`; sin ellos la asociación simple sería suficiente. **Referencias cruzadas:** la instancia conserva referencias a Estudiante y Sección.

**Reflexión docente:** una clase de asociación hace explícito el significado de un vínculo.

**Pregunta desafío:** ¿dónde colocarían la fecha de inscripción de un estudiante a una materia?

**Respuestas posibles:** 1. En una clase de asociación. 2. No en Estudiante ni en Materia. 3. Junto con el estado de la inscripción.

**Advertencia:** no crear una clase de asociación si la relación no tiene datos ni responsabilidades propias.

## Slide 15. Navegabilidad

**Texto visible**

- `Navegable por ambos lados`
- `Navegable`
- `No navegable`
- `Indefinido`
- `La navegabilidad indica desde qué extremo se puede acceder o recorrer una asociación en el diseño.`

**Elementos visuales:** asociación Pedido-Cliente bidireccional y cuatro estados de navegación. Referencia: OMG UML 2.5.1, 2017.

**Explicación docente:** **Pedido y Cliente:** muestran una asociación que puede recorrerse desde un objeto hacia el otro. **Navegable por ambos lados:** ambos extremos conocen al otro; por ejemplo, un Cliente consulta sus Pedidos y un Pedido conoce a su Cliente. **Navegable:** sólo se indica el sentido permitido. **No navegable:** el diseño evita recorrer ese extremo. **Indefinido:** aún no se decide. **Acceso o recorrido:** la navegabilidad expresa una decisión de diseño, no una multiplicidad.

**Reflexión docente:** hacer explícito el sentido evita dependencias innecesarias.

**Pregunta desafío:** ¿por qué una asociación no siempre debe ser bidireccional?

**Respuestas posibles:** 1. Para reducir acoplamiento. 2. Para proteger invariantes. 3. Para expresar una sola responsabilidad de navegación.

**Advertencia:** no inferir navegabilidad sólo por ver una línea de asociación.

## Slide 16. Herencia, Generalización y Especialización

**Texto visible**

- `Figura {abstract}`
- `+ calcularArea()`
- `+ dibujar()`
- `Rectángulo`
- `Elipse`
- `Cuadrado`
- `Círculo`
- `ES-UN(A): una subclase hereda atributos y operaciones de su superclase.`
- `Restricciones: simple o múltiple; disjunta o traslapada; total o parcial.`

**Elementos visuales:** jerarquía UML de cuatro clases. Referencia: Rumbaugh, Jacobson y Booch, 2005.

**Explicación docente:** **Figura abstracta:** define operaciones comunes sin instanciarse directamente. **Rectángulo y Elipse:** son especializaciones de Figura. **Cuadrado y Círculo:** refinan una jerarquía en niveles posteriores. **ES-UN(A):** expresa generalización/especialización; un Cuadrado es una Figura. **Herencia:** la subclase recibe atributos y métodos. **Simple o múltiple:** indica uno o varios padres según la política del lenguaje y del modelo. **Disjunta o traslapada:** las especializaciones pueden excluirse o coexistir. **Total o parcial:** cubren todos o sólo algunos casos del padre.

**Reflexión docente:** herencia debe expresar una relación conceptual estable, no sólo reutilización de código.

**Pregunta desafío:** ¿qué prueba harían antes de aplicar herencia?

**Respuestas posibles:** 1. Verificar la relación ES-UN. 2. Revisar sustitución. 3. Confirmar restricciones de la jerarquía.

**Advertencia:** no usar herencia para cualquier parecido entre clases.

## Slide 17. Polimorfismo y Reescritura

**Texto visible**

- `Polimorfismo: se puede usar el mismo nombre para la definición de un método en varias clases.`
- `Reescritura: una subclase redefine una operación heredada.`
- `Sobrecarga: mismo nombre con distintas firmas.`
- `Enlace tardío: selecciona el código adecuado al objeto definido en la invocación.`
- `Figura figura = new Círculo();`
- `figura.dibujar();`

**Elementos visuales:** tres tarjetas y bloque de código. Referencia: Rumbaugh, Jacobson y Booch, 2005.

**Explicación docente:** **Polimorfismo:** permite invocar una operación común sobre objetos de distintas subclases; por ejemplo, `dibujar()` en Círculo y Rectángulo. **Reescritura:** una subclase redefine una operación heredada con su comportamiento específico. **Sobrecarga:** usa el mismo nombre con distintas firmas, por ejemplo, `buscar(isbn)` y `buscar(titulo)`. **Enlace tardío:** el método se selecciona según el objeto real al ejecutar; por ejemplo, una referencia Figura puede contener un Círculo. **Ejemplo de código:** muestra la referencia de tipo Figura y el objeto Círculo.

**Reflexión docente:** el polimorfismo reduce condicionales y mantiene el modelo abierto a especializaciones.

**Pregunta desafío:** ¿qué debe ser común para que el polimorfismo sea útil?

**Respuestas posibles:** 1. Una operación compartida. 2. Un contrato compatible. 3. Una jerarquía justificada.

**Advertencia:** polimorfismo no significa que todas las clases tengan el mismo estado.

## Slide 18. Agregación y Composición

**Texto visible**

- `Agregación: Una clase representa un todo y otra una parte. Rombo blanco. La parte puede existir independientemente del todo.`
- `Composición: Es una forma más fuerte de todo-parte. Rombo relleno. El todo tiene responsabilidad sobre la existencia de las partes.`
- `Biblioteca — Libro: agregación.`
- `Factura — LíneaDeFactura: composición.`

**Elementos visuales:** comparación de dos relaciones todo-parte. Referencia: OMG UML 2.5.1, 2017.

**Explicación docente:** **Agregación:** expresa un todo y partes que pueden vivir separadas; por ejemplo, una Biblioteca agrupa Libros que pueden existir fuera de ella. **Rombo blanco:** es su notación UML. **Composición:** expresa una relación todo-parte fuerte; por ejemplo, una Factura compone sus Líneas. **Rombo relleno:** identifica el lado compuesto. **Responsabilidad de existencia:** en composición, la parte depende del ciclo de vida del todo. **Ejemplos:** Biblioteca-Libro y Factura-LíneaDeFactura contrastan ambas semánticas.

**Reflexión docente:** la pregunta clave es qué ocurre con la parte cuando desaparece el todo.

**Pregunta desafío:** ¿una rueda siempre es composición de un automóvil?

**Respuestas posibles:** 1. Depende del dominio. 2. Si la rueda se reutiliza, puede ser agregación. 3. Si nace y muere con el auto, composición.

**Advertencia:** no usar rombos como decoración; la semántica de ciclo de vida debe estar justificada.

## Slide 19. Dependencia de Uso

**Texto visible**

- `Factura`
- `+ exportar(formato)`
- `FormatoPDF`
- `La dependencia se representa con una línea punteada desde la clase que depende hacia la clase requerida.`
- `Caso de Estudio: sistema de gestión para Emergencias del 911.`
- `Clases: Zona, Tipo_Recurso, Emergencia, Tipo_Emergencia y Operador 911.`
- `Relaciones y multiplicidades: Zona 1:N Emergencia; Tipo_Emergencia 1:N Emergencia; Operador 911 1:N Emergencia; Emergencia N:M Tipo_Recurso.`

**Elementos visuales:** dependencia punteada Factura-FormatoPDF y resumen de clases, relaciones y multiplicidades del caso de estudio. Referencia: Rumbaugh, Jacobson y Booch, 2005.

**Explicación docente:** **Factura:** es la clase cliente del servicio. **FormatoPDF:** es la clase requerida para exportar. **Línea punteada:** indica dependencia desde quien usa hacia quien es usado. **Dependencia de uso:** aparece, por ejemplo, cuando una clase recibe otra como parámetro o utiliza sus servicios. **Caso de Estudio: sistema de gestión para Emergencias del 911:** plantea el dominio indicado por la fuente. **Zona, Tipo_Recurso, Emergencia, Tipo_Emergencia y Operador 911:** son las clases visibles del caso. **Relaciones y multiplicidades:** Zona se relaciona 1:N con Emergencia; Tipo_Emergencia se relaciona 1:N con Emergencia; Operador 911 se relaciona 1:N con Emergencia; y Emergencia se relaciona N:M con Tipo_Recurso.

**Reflexión docente:** el caso integra estructura y decisiones, no sólo dibujo.

**Pregunta desafío:** ¿qué multiplicidad cambiaría si una emergencia pudiera ser atendida por un único tipo de recurso?

**Respuestas posibles:** 1. Emergencia-Tipo_Recurso podría ser N:1. 2. La decisión debe justificarse con la regla operativa. 3. El modelo debe mantener coherencia entre ambos extremos.

**Advertencia:** el caso se presenta como modelo académico y no contiene datos reales.

## Slide 20. Criterios de Revisión

**Texto visible**

- `Cada clase se deriva de un concepto, requisito o responsabilidad.`
- `Las asociaciones tienen nombres, multiplicidades y navegabilidad coherentes.`
- `Las relaciones de herencia, agregación, composición y dependencia están justificadas.`
- `El modelo es consistente con casos de uso y reglas; no agrega datos reales.`
- `Un diagrama de clases vale por las decisiones que hace visibles.`

**Elementos visuales:** cuatro tarjetas numeradas, cierre y dos referencias. Referencias: OMG UML 2.5.1, 2017; Rumbaugh, Jacobson y Booch, 2005.

**Explicación docente:** **Cada clase se deriva de un concepto, requisito o responsabilidad:** exige trazabilidad; por ejemplo, Turno proviene de una necesidad de agenda. **Asociaciones con nombres, multiplicidades y navegabilidad:** permiten verificar reglas en ambos sentidos. **Herencia, agregación, composición y dependencia justificadas:** cada símbolo debe responder por qué esa relación y no otra. **Consistencia con casos de uso y reglas:** el modelo debe soportar escenarios y no contradecirlos. **No agrega datos reales:** se trabaja con dominios y valores genéricos. **Un diagrama vale por sus decisiones:** cierra la unidad conectando notación con revisión.

**Reflexión docente:** la revisión cruzada mejora el modelo antes del código.

**Pregunta desafío:** ¿qué revisarían primero en el borrador de otro equipo?

**Respuestas posibles:** 1. Trazabilidad. 2. Multiplicidades y restricciones. 3. Coherencia con casos de uso.

**Advertencia:** un diagrama prolijo puede seguir siendo incorrecto si no representa el dominio.

## Bibliografía verificada

- OMG. *Unified Modeling Language (UML), Version 2.5.1.* Object Management Group, 2017. https://www.omg.org/spec/UML/2.5.1
- Rumbaugh, J., Jacobson, I. y Booch, G. *El Lenguaje Unificado de Modelado. Manual de Referencia, 2ª ed.* Pearson Educación, 2005.
- Material de la asignatura: `sesiones-clase/sesion-5/IS1-UNIDAD_V - Diagrama de CLASES.pdf`, `MODULO 10-CLASES-1.pdf` y `MODULO 10-CLASES-2.pdf`.
