# Guía de la Clase 4 Adicional

Guía docente para la presentación **Introducción a UML (Lenguaje Unificado de Modelado)**, clase complementaria de la Unidad IV. La presentación tiene **16 slides** y se construyó a partir del material `sesiones-clase/clase-4/UML-Definiciones Generales.pdf` (Módulo 7 – UML) y de referencias actuales verificadas (OMG UML 2.5.1, ISO/IEC 19505).

**Archivo:** `guia-slides-unidad-5-t4-a-uml.md`
**Ubicación:** `presentaciones-html/unidad-5/T4-uml-casos-uso/uml/`

## Lectura rápida

- **Fuente:** `sesiones-clase/clase-4/UML-Definiciones Generales.pdf` (9 páginas, Módulo 7 – UML – Definiciones Generales).
- **Total verificado:** 16 slides en `app.js`.
- **Notas del orador:** generadas en el campo `note` de cada slide con el formato unificado: el Desarrollo explica cada item del contenido y lleva los ejemplos inline (sin bloque Ejemplos separado).
- **Contenido visual embebido:** 2 diagramas SVG creados en `assets/` (línea de tiempo, taxonomía de diagramas) y la imagen `tres-amigos.png`.
- **Dato sensible:** no se encontraron contraseñas ni datos sensibles en la fuente.
- **Caso conductor:** esta presentación no usa Global Exchange como ejemplo; los ejemplos de las notas son genéricos o de otros dominios.

## Criterio de transcripción

Cada slide se describe en tres capas:

1. **Texto visible:** contenido textual del slide tal como aparece en el `body` del HTML (construido a partir del módulo fuente).
2. **Elementos visuales:** componentes institucionales (cards, quotes, table-like, sequence-card) y diagramas SVG utilizados.
3. **Explicación docente:** orientación para presentar el slide (coincide con el campo `note` del `app.js`).

## Reglas de diseño

- **Logo institucional:** `assets/fpuna_logo_institucional.svg` (copiado desde `clase-1/assets/`).
- **Componentes:** patrón de clase-1 (una columna, `slide-header`, cards, sequence-card, table-like, quote, reference).
- **Nombre del profesor:** "Prof. Lic. Guillermo Jacobo González Rodas Mst. PMP".
- **Referencias:** solo fuentes verificadas (OMG, ISO/IEC, bibliografía del módulo y Larman). Nunca inventar.

## Inventario slide por slide

### Slide 1. Apertura

**Texto visible**

- `Ingeniería de Software I`
- `UNIDAD IV · COMPLEMENTO`
- `INTRODUCCIÓN A UML`
- `Lenguaje Unificado de Modelado`
- `Prof. Lic. Guillermo Jacobo González Rodas Mst. PMP`

**Elementos visuales**

- Card hero con lede, título de la unidad y nombre del docente.

**Explicación docente**

- **Desarrollo:** **Ingeniería de Software I:** el slide abre la presentación de la asignatura y ubica el tema dentro del programa de la materia, señalando que esta clase es un complemento de la Unidad IV. **UNIDAD IV · COMPLEMENTO:** el contenido no sustituye a la unidad ya vista, sino que la amplía con el lenguaje de modelado que unifica las vistas del sistema; por ejemplo, en un sistema de turnos hospitalarios, UML permite comunicar flujos, estructura y estados a todo el equipo. **INTRODUCCIÓN A UML:** el propósito es presentar UML como el lenguaje de modelado estándar que organiza el trabajo de análisis y diseño antes de programar. **Lenguaje Unificado de Modelado:** se aclara que UML es una notación estándar, no un dibujo libre; por ejemplo, los diagramas de casos de uso ya revisados en la Unidad IV son solo uno de los catorce diagramas de UML y esta clase los ubica en el mapa completo. **Prof. Lic. Guillermo Jacobo González Rodas Mst. PMP:** la portada identifica al docente a cargo, con su grado académico y su certificación, para formalizar la autoría y el contexto institucional de la clase.
- **Reflexión docente:** UML es el lenguaje común que convierte modelos personales en documentos revisables.
- **Pregunta desafío:** ¿qué problemas aparecen cuando cada persona modela el sistema con una notación propia?
- **Respuestas posibles:** 1. Los modelos no se pueden compartir ni comparar. 2. Se pierde información al cambiar de persona o herramienta. 3. El cliente no puede validar una representación que no entiende.
- **Advertencia:** esta apertura contextualiza; los conceptos técnicos se desarrollan después.

### Slide 2. Objetivos

**Texto visible**

- `Explicar qué es UML y por qué es el estándar de modelado más utilizado en la industria del software.`
- `Reconocer la historia, la OMG y la especificación vigente (UML 2.5.1) como marco normativo.`
- `Distinguir los 14 diagramas UML, clasificarlos en estructurales y de comportamiento, y saber aplicarlos a casos concretos.`

**Elementos visuales**

- Card grid de 3 con números 01–03.

**Explicación docente**

- **Desarrollo:** **Explicar qué es UML y por qué es el estándar de modelado más utilizado en la industria del software:** el primer objetivo define el criterio de aceptación central: al cierre, cada estudiante debe poder explicar qué es UML y justificar su predominio en la industria; por ejemplo, en un sistema de logística, elegir el diagrama correcto según el aspecto a comunicar demuestra que se entendió el lenguaje. **Reconocer la historia, la OMG y la especificación vigente (UML 2.5.1) como marco normativo:** el segundo objetivo ubica el lenguaje en su contexto institucional, conociendo el organismo que lo gobierna y la versión formal vigente, para que las decisiones de modelado se apoyen en un estándar reconocido y no en costumbres personales. **Distinguir los 14 diagramas UML, clasificarlos en estructurales y de comportamiento, y saber aplicarlos a casos concretos:** el tercer objetivo pide dominio práctico: saber qué diagrama usar para un flujo de negocio y cuál para la estructura de datos; por ejemplo, frente a los estados de una transacción bancaria conviene una máquina de estados, mientras que para el orden de los mensajes es mejor un diagrama de secuencia.
- **Reflexión docente:** El objetivo se demuestra eligiendo el diagrama correcto ante un problema, no memorizando nombres.
- **Pregunta desafío:** ¿qué diagrama elegirían para mostrar los estados de una transacción?
- **Respuestas posibles:** 1. Máquina de estados. 2. Actividades, si lo que importa es el flujo. 3. Secuencia, si lo que importa es el orden de mensajes.
- **Advertencia:** elegir el diagrama equivocado comunica mal una decisión.

### Slide 3. Contenido

**Texto visible**

- `01 Fundamentos — Qué es UML, su historia y la OMG.`
- `02 Especificación — Finalidad, requisitos y versiones del estándar.`
- `03 Diagramas — Estructurales y de comportamiento (14 tipos).`

**Elementos visuales**

- Sequence-card con 3 pasos numerados.

**Explicación docente**

- **Desarrollo:** **01 Fundamentos — Qué es UML, su historia y la OMG:** el primer paso del recorrido presenta qué es UML, cómo surgió y quién lo gobierna. **02 Especificación — Finalidad, requisitos y versiones del estándar:** el segundo paso describe el marco normativo: para qué sirve el estándar, qué requisitos cumple y cómo evolucionó por versiones, lo que permite usar la notación correcta y justificar decisiones con un estándar reconocido. **03 Diagramas — Estructurales y de comportamiento (14 tipos):** el tercer paso llega a la práctica con la clasificación de los catorce diagramas en estructurales y de comportamiento, el material que se aplica a casos concretos. Por ejemplo, en un sistema de reservas, primero se entiende qué es UML, después su estándar y finalmente qué diagrama usar para cada vista; el mismo recorrido sirve para cualquier dominio donde se deba modelar antes de construir. La secuencia teoría → marco → diagramas evita dibujar sin saber por qué y deja claro que los temas están conectados.
- **Reflexión docente:** La secuencia teoría → marco → diagramas evita dibujar sin saber por qué.
- **Pregunta desafío:** ¿por qué conviene conocer el marco normativo antes de modelar?
- **Respuestas posibles:** 1. Para usar la notación correcta. 2. Para que el modelo sea interoperable. 3. Para justificar decisiones con un estándar reconocido.
- **Advertencia:** el mapa organiza la explicación; los temas están conectados.

### Slide 4. ¿Qué es UML?

**Texto visible**

- `Un lenguaje gráfico para visualizar, especificar, construir y documentar los artefactos de los sistemas.`
- `Lenguaje de modelado — Visual, común y semántica y sintácticamente rico.`
- `No es programación — UML no es un lenguaje de programación; las herramientas generan código a partir de los diagramas.`
- `Comparable a planos — Describe límites, estructura y comportamiento.`

**Elementos visuales**

- Quote con la definición de la OMG + card grid de 3 + reference.

**Explicación docente**

- **Desarrollo:** **Un lenguaje gráfico para visualizar, especificar, construir y documentar los artefactos de los sistemas:** esta es la definición de la OMG: cada verbo nombra una función profesional distinta, y con UML se puede visualizar un sistema antes de construirlo, especificar sus reglas y documentar sus decisiones; por ejemplo, en un sistema de control médico, los diagramas permiten revisar flujos y estructura con personal clínico antes de implementar. **Lenguaje de modelado — Visual, común y semántica y sintácticamente rico:** UML es un lenguaje gráfico compartido por la industria, con un vocabulario formal que le da rigor a la comunicación. **No es programación — UML no es un lenguaje de programación; las herramientas generan código a partir de los diagramas:** el modelo no se ejecuta, aunque algunas herramientas pueden generar código desde los diagramas, así que UML modela pero no ejecuta. **Comparable a planos — Describe límites, estructura y comportamiento:** como un plano de arquitectura, el diagrama fija el límite del sistema, su estructura y su comportamiento, de modo que visualizar da una vista comprensible mientras que especificar define con precisión.
- **Reflexión docente:** Cada verbo de la definición nombra una función profesional distinta.
- **Pregunta desafío:** ¿qué diferencia hay entre visualizar y especificar?
- **Respuestas posibles:** 1. Visualizar da una vista comprensible; especificar define con precisión. 2. Una vista puede omitir detalle; la especificación debe ser rigurosa. 3. Ambos se complementan.
- **Advertencia:** UML modela, no ejecuta.

### Slide 5. Historia del Modelado

**Texto visible**

- Antes de 1989 — Notaciones fragmentadas: análisis estructurado (1970s) y primeros métodos OO (1980s).
- Línea de tiempo: 1989 (OMG), 1995–97 (unificación), 1997 (UML 1.1), 2005 (UML 2.0), 2017 (UML 2.5.1).
- `La falta de estandarización en la representación gráfica impedía compartir modelos entre diseñadores.`

**Elementos visuales**

- Imagen: `assets/linea-tiempo-uml.svg` (incluye el panel "Antes de 1989") + card + reference.

**Explicación docente**

- **Desarrollo:** **Antes de 1989 — Notaciones fragmentadas:** el recuadro de contexto que abre la línea de tiempo muestra la época previa a la OMG: en los años 70 dominaba el análisis estructurado (DFD, entidad-relación, HIPO y Jackson) y en los 80 aparecieron los primeros métodos orientados a objetos (Booch, OMT de Rumbaugh y OOSE de Jacobson); cada uno usaba una notación propia, por lo que los modelos no se podían compartir entre equipos; por ejemplo, un diagrama de clases de Booch no era intercambiable con un diagrama de flujo de datos de Yourdon. **Línea de tiempo: 1989 (OMG), 1995–97 (unificación), 1997 (UML 1.1), 2005 (UML 2.0), 2017 (UML 2.5.1):** el diagrama de línea de tiempo recorre los hitos del lenguaje: en 1989 se funda la OMG como organismo de estandarización; entre 1995 y 1997 se unifican las notaciones de los principales métodos de objetos; en 1997 se publica UML 1.1; en 2005 llega UML 2.0 con una revisión mayor; y en 2017 se aprueba UML 2.5.1, la versión formal vigente. **La falta de estandarización en la representación gráfica impedía compartir modelos entre diseñadores:** la línea de tiempo responde al problema original de comunicación: sin una notación común, si cada integrante del equipo modelara a su manera, el diagrama de casos de uso no podría revisarse; por ejemplo, en un proyecto de gobierno, la estandarización permite que distintas empresas contratadas compartan modelos sin reescribirlos. La historia de UML es la historia de un problema de comunicación resuelto con un estándar.
- **Reflexión docente:** La historia de UML es la historia de un problema de comunicación resuelto con un estándar.
- **Pregunta desafío:** ¿qué problema concreto resolvió UML en 1997?
- **Respuestas posibles:** 1. Unificar notaciones incompatibles. 2. Permitir el intercambio de modelos entre herramientas. 3. Dar un lenguaje común.
- **Advertencia:** 2017 corresponde a la versión formal vigente; la especificación sigue evolucionando.

### Slide 6. Los Tres Amigos

**Texto visible**

- `Booch — Método de Booch (OOD).`
- `Rumbaugh — OMT (Técnica de Modelado de Objetos).`
- `Jacobson — OOSE (Ingeniería de Software Orientada a Objetos).`
- `UML combina las fortalezas de los tres enfoques.`

**Elementos visuales**

- Imagen: `assets/tres-amigos.png` + card grid de 3 + card de síntesis + reference.

**Explicación docente**

- **Desarrollo:** **Booch — Método de Booch (OOD):** el primero de los tres amigos aporta el enfoque de diseño orientado a objetos, que contribuye con la visión de diseño y las notaciones de clases. **Rumbaugh — OMT (Técnica de Modelado de Objetos):** la tradición OMT aporta las clases y asociaciones del modelado estructural. **Jacobson — OOSE (Ingeniería de Software Orientada a Objetos):** de la corriente de Jacobson provienen los casos de uso, que capturan la funcionalidad desde el punto de vista del usuario. **UML combina las fortalezas de los tres enfoques:** la imagen de los tres amigos, acompañada de una tarjeta de síntesis, muestra cómo se fusionan las tres corrientes; por ejemplo, entender el origen explica la diversidad de diagramas de UML: los casos de uso de Jacobson, las clases y asociaciones de OMT y el diseño de Booch. Combinar las fortalezas de cada método redujo la confusión y permitió acordar un lenguaje común, aunque es importante recordar que UML es un lenguaje y no define un proceso de desarrollo.
- **Reflexión docente:** Conocer el origen permite entender por qué UML integra vistas tan diferentes.
- **Pregunta desafío:** ¿por qué unificar tres métodos produjo un estándar más fuerte?
- **Respuestas posibles:** 1. Combinó las fortalezas de cada uno. 2. Redujo la confusión. 3. Permitió acordar un lenguaje común.
- **Advertencia:** UML es un lenguaje; no define un proceso de desarrollo.

### Slide 7. UML y los Planos del Software

**Texto visible**

- `En la arquitectura — Los planos comunican la construcción a todos los oficios.`
- `En el software — Los diagramas UML comunican la solución a analistas, desarrolladores, clientes y operadores.`
- `Es comparable a los planos usados en otros campos… describen los límites, la estructura y el comportamiento del sistema.`

**Elementos visuales**

- Card grid de 2 + quote + reference.

**Explicación docente**

- **Desarrollo:** **En la arquitectura — Los planos comunican la construcción a todos los oficios:** el slide parte de la analogía clásica: un plano de arquitectura permite que cada oficio construya su parte sin contradicciones; por ejemplo, en una obra de ingeniería de transporte, los planos evitan que cada contratista construya una parte incompatible. **En el software — Los diagramas UML comunican la solución a analistas, desarrolladores, clientes y operadores:** la misma función comunicativa se traslada al software: cada diagrama habla con un destinatario distinto, de modo que analistas, desarrolladores, clientes y operadores comparten una única representación de la solución. **Es comparable a los planos usados en otros campos… describen los límites, la estructura y el comportamiento del sistema:** como el plano, el modelo UML describe los límites, la estructura y el comportamiento del sistema; el diagrama de casos de uso fija el límite del sistema, el de clases describe su estructura y el de estados su comportamiento. En software el "plano" suele evolucionar, pero su función de comunicación es la misma, recordando que el modelo es una abstracción, no el sistema real.
- **Reflexión docente:** En software el "plano" suele evolucionar, pero su función de comunicación es la misma.
- **Pregunta desafío:** ¿qué se construiría mal si el límite no estuviera modelado?
- **Respuestas posibles:** 1. Funciones fuera del alcance. 2. Integraciones con actores externos al alcance. 3. Pruebas de lo que no se debía construir.
- **Advertencia:** el modelo es una abstracción, no el sistema real.

### Slide 8. UML No Es un Lenguaje de Programación

**Texto visible**

- `Qué es — Lenguaje de modelado visual estándar para el análisis y el diseño orientados a objetos.`
- `Qué no es — Un lenguaje de programación: no se ejecuta, no define la implementación final y no reemplaza el código.`
- `Existen herramientas que pueden generar código en diversos lenguajes usando los diagramas UML.`

**Elementos visuales**

- Table-like con 2 filas + card + reference.

**Explicación docente**

- **Desarrollo:** **Qué es — Lenguaje de modelado visual estándar para el análisis y el diseño orientados a objetos:** la tabla aclara primero el alcance positivo de UML: un lenguaje de modelado visual estándar que apoya el análisis y el diseño orientados a objetos, sin ser código. **Qué no es — Un lenguaje de programación: no se ejecuta, no define la implementación final y no reemplaza el código:** el segundo matiz es negativo: UML no se compila ni se ejecuta, no define la implementación final y no reemplaza el código; por ejemplo, el diagrama de clases no es el código, pero puede servir de base para revisar el diseño antes de programar o para generar la implementación. **Existen herramientas que pueden generar código en diversos lenguajes usando los diagramas UML:** las herramientas CASE pueden derivar código en diversos lenguajes a partir de los diagramas; por ejemplo, en un sistema de facturación, un diagrama de clases ayuda a acordar la estructura antes de escribir SQL o código. Confundir modelo y código es un error frecuente, y el modelo no garantiza la corrección del código generado.
- **Reflexión docente:** Confundir modelo y código es un error frecuente.
- **Pregunta desafío:** ¿qué información aporta un diagrama que el código no muestra directamente?
- **Respuestas posibles:** 1. La intención y el alcance. 2. Las relaciones conceptuales. 3. Una vista que el cliente valida sin leer código.
- **Advertencia:** el modelo no garantiza la corrección del código generado.

### Slide 9. La OMG

**Texto visible**

- `El Object Management Group (OMG) es un consorcio internacional sin fines de lucro y de membresía abierta para estándares tecnológicos, fundado en 1989.`
- `Proveedores, usuarios finales, instituciones académicas y agencias gubernamentales.`
- `La OMG supervisa la definición y el mantenimiento de las especificaciones de UML.`

**Elementos visuales**

- Card grid de 2 + card de síntesis + logo OMG (imagen `assets/omg-logo.png`) + reference.

**Explicación docente**

- **Desarrollo:** **El Object Management Group (OMG) es un consorcio internacional sin fines de lucro y de membresía abierta para estándares tecnológicos, fundado en 1989:** la OMG es la organización que gobierna el estándar UML: un consorcio internacional sin fines de lucro, de membresía abierta y fundado en 1989, cuyo rol evita que una sola empresa controle el lenguaje. **Proveedores, usuarios finales, instituciones académicas y agencias gubernamentales:** la membresía abierta reúne a proveedores de herramientas, usuarios finales, instituciones académicas y agencias gubernamentales, lo que asegura que el estándar evolucione con la industria y no con un interés particular. **La OMG supervisa la definición y el mantenimiento de las especificaciones de UML:** la OMG define y mantiene la especificación, que se versiona como el software; por ejemplo, en banca, usar un estándar mantenido por un consorcio reduce el riesgo de notación propietaria, y cuando un equipo entrega un diagrama, la notación que usa proviene de ese estándar. Las herramientas implementan la especificación con distinto grado de cumplimiento.
- **Reflexión docente:** Detrás de UML hay gobernanza: una especificación se versiona como el software.
- **Pregunta desafío:** ¿por qué conviene que un estándar lo mantenga un consorcio y no una empresa?
- **Respuestas posibles:** 1. Para que ninguna empresa lo controle. 2. Para que evolucione con la industria. 3. Para garantizar interoperabilidad.
- **Advertencia:** la OMG define la especificación; las herramientas la implementan con distinto cumplimiento.

### Slide 10. Finalidad de UML

**Texto visible**

- `01 Herramientas para el trabajo — Análisis, diseño e implementación de sistemas basados en software y modelado de procesos de negocio.`
- `02 Interoperabilidad — Interoperabilidad de herramientas de modelado visual de objetos mediante acuerdo sobre semántica y notación.`

**Elementos visuales**

- Card grid de 2 con números 01–02 + reference.

**Explicación docente**

- **Desarrollo:** **01 Herramientas para el trabajo — Análisis, diseño e implementación de sistemas basados en software y modelado de procesos de negocio:** el primer propósito que la OMG define para UML es profesional: servir como herramienta para el análisis, el diseño y la implementación de sistemas basados en software, así como para modelar procesos de negocio; por ejemplo, en integración empresarial, UML ayuda a representar tanto el flujo operativo como el sistema que lo soporta. **02 Interoperabilidad — Interoperabilidad de herramientas de modelado visual de objetos mediante acuerdo sobre semántica y notación:** el segundo propósito es de industria: gracias al acuerdo sobre semántica y notación, las herramientas de modelado pueden intercambiar modelos sin perder significado; por ejemplo, un diagrama creado en una herramienta podría importarse en otra sin re-modelar, usando formatos de intercambio como XMI. La finalidad combina la utilidad profesional y el objetivo de interoperabilidad, que evita re-modelar al cambiar de herramienta y requiere cumplir la semántica y la notación del estándar.
- **Reflexión docente:** La finalidad combina utilidad profesional y un objetivo de industria.
- **Pregunta desafío:** ¿qué problema resuelve la interoperabilidad entre herramientas?
- **Respuestas posibles:** 1. Reutilizar modelos al cambiar de herramienta. 2. Compartir modelos entre equipos. 3. Comparar modelos sin reescribirlos.
- **Advertencia:** la interoperabilidad plena exige cumplir semántica y notación del estándar.

### Slide 11. Tipos de Diagramas

**Texto visible**

- `Estructurales · 7 — Clases, Componentes, Estructura compuesta, Despliegue, Objetos, Paquetes, Perfil.`
- `Comportamiento · 7 — Casos de uso, Actividades, Máquina de estados, Secuencia, Comunicación, Panorama de interacciones, Temporización.`

**Elementos visuales**

- Imagen: `assets/taxonomia-diagramas.svg` + reference.

**Explicación docente**

- **Desarrollo:** **Estructurales · 7 — Clases, Componentes, Estructura compuesta, Despliegue, Objetos, Paquetes, Perfil:** el diagrama de taxonomía organiza los catorce diagramas en dos grandes grupos: los siete estructurales —clases, componentes, estructura compuesta, despliegue, objetos, paquetes y perfil— responden a la pregunta de cómo está organizado el sistema; por ejemplo, para explicar la infraestructura de un sistema de control de tráfico, el diagrama estructural describe la infraestructura física y lógica. **Comportamiento · 7 — Casos de uso, Actividades, Máquina de estados, Secuencia, Comunicación, Panorama de interacciones, Temporización:** los siete diagramas de comportamiento —casos de uso, actividades, máquina de estados, secuencia, comunicación, panorama de interacciones y temporización— responden a cómo se comporta el sistema; por ejemplo, la secuencia de las señales en el control de tráfico se describe con diagramas de comportamiento. La clasificación ayuda a elegir: primero se pregunta si se comunica estructura o comportamiento, aunque la frontera no es rígida.
- **Reflexión docente:** Clasificar ayuda a elegir: primero pregunto si comunico estructura o comportamiento.
- **Pregunta desafío:** ¿el diagrama de secuencia es estructural o de comportamiento?
- **Respuestas posibles:** 1. De comportamiento, porque muestra interacción en el tiempo. 2. Estructural, si solo lista participantes. 3. Ambos en distintos contextos.
- **Advertencia:** la frontera no es rígida.

### Slide 12. Diagramas Estructurales

**Texto visible**

- `01 Clases — El diagrama más usado y la base de toda solución OO.`
- `02 Componentes — Comunicación por interfaces.`
- `03 Estructura compuesta — Estructura interna de una clase.`
- `04 Despliegue — Hardware y software en múltiples máquinas.`
- `05 Objetos — El sistema en un momento dado.`
- `06 Paquetes — Niveles del sistema; importación y fusión.`
- `07 Perfil — Extensiones del lenguaje; estereotipos y restricciones.`

**Elementos visuales**

- Card grid de 3 (7 cards) + reference.

**Explicación docente**

- **Desarrollo:** **01 Clases — El diagrama más usado y la base de toda solución OO:** el más utilizado de todos los diagramas UML modela las entidades del negocio y sus relaciones, y es la base de toda solución orientada a objetos. **02 Componentes — Comunicación por interfaces:** muestra cómo los componentes del sistema se comunican mediante interfaces bien definidas. **03 Estructura compuesta — Estructura interna de una clase:** permite ver la estructura interna de una clase, es decir, sus partes y conexiones internas. **04 Despliegue — Hardware y software en múltiples máquinas:** describe dónde se ejecuta la aplicación: qué hardware soporta qué software cuando hay múltiples máquinas; por ejemplo, en un sistema bancario, componentes y despliegue comunican la arquitectura de integración. **05 Objetos — El sistema en un momento dado:** captura una fotografía del sistema en un instante, con objetos concretos y sus enlaces. **06 Paquetes — Niveles del sistema; importación y fusión:** organizan el sistema en niveles y controlan la importación y fusión de elementos. **07 Perfil — Extensiones del lenguaje:** permite especializar UML con estereotipos, etiquetas y restricciones para un dominio; por ejemplo, un perfil para aplicaciones móviles define estereotipos como <<Pantalla>> o <<Servicio>>. Los estructurales responden a cómo está organizado el sistema, y un diagrama de clases sin multiplicidades consistentes es solo una lista de cajas.
- **Reflexión docente:** Los estructurales responden "cómo está organizado".
- **Pregunta desafío:** ¿qué diagrama usarían para mostrar la arquitectura de hardware y software?
- **Respuestas posibles:** 1. Despliegue. 2. Componentes. 3. Paquetes.
- **Advertencia:** un diagrama de clases sin multiplicidades consistentes es una lista de cajas.

### Slide 13. Diagramas de Comportamiento

**Texto visible**

- `01 Casos de uso — Funcionalidad particular y su relación con los actores.`
- `02 Actividades — Flujos de trabajo; alternativa a la máquina de estados.`
- `03 Máquina de estados — Comportamiento según el estado actual.`
- `04 Secuencia — Orden de las interacciones para un escenario.`
- `05 Comunicación — Foco en los mensajes entre objetos.`
- `06 Panorama de interacciones — Secuencia en la que actúan las interacciones.`
- `07 Temporización — Comportamiento en un período de tiempo.`

**Elementos visuales**

- Card grid de 3 (7 cards) + reference.

**Explicación docente**

- **Desarrollo:** **01 Casos de uso:** describen una funcionalidad particular y su relación con los actores, fijando qué hace el sistema para cada tipo de usuario. **02 Actividades:** modelan flujos de trabajo y son una alternativa a la máquina de estados cuando lo que importa es el proceso; por ejemplo, en un sistema de atención al cliente, el diagrama de actividades describe el flujo de un reclamo. **03 Máquina de estados:** describe el comportamiento según el estado actual de una entidad y modela su ciclo de vida; por ejemplo, los estados de una transacción bancaria. **04 Secuencia:** muestra el orden de las interacciones entre objetos para un escenario concreto. **05 Comunicación:** pone el foco en los mensajes que se intercambian los objetos y en cómo se organizan. **06 Panorama de interacciones:** indica la secuencia en la que actúan distintas interacciones. **07 Temporización:** describe el comportamiento en un período de tiempo, útil cuando el tiempo es relevante. Los de comportamiento responden a cómo se comporta el sistema, y los flujos no deben contradecir la especificación del caso de uso.
- **Reflexión docente:** Los de comportamiento responden "cómo se comporta".
- **Pregunta desafío:** ¿qué diagrama de comportamiento muestra el flujo de un proceso?
- **Respuestas posibles:** 1. Actividades. 2. Máquina de estados. 3. Secuencia.
- **Advertencia:** los flujos no deben contradecir la especificación del caso de uso.

### Slide 14. Herramientas y Buenas Prácticas

**Texto visible**

- `Herramientas de modelado — El estándar es soportado por múltiples herramientas CASE.`
- `MDA — La OMG promueve la Model Driven Architecture.`
- `Buenas prácticas — Trazabilidad requisito → modelo y consistencia entre diagramas.`

**Elementos visuales**

- Card grid de 3 + reference.

**Explicación docente**

- **Desarrollo:** **Herramientas de modelado — El estándar es soportado por múltiples herramientas CASE:** el cierre del contenido técnico recuerda que UML no se dibuja a mano: el estándar está soportado por múltiples herramientas CASE que asisten el modelado, la verificación y la generación de artefactos. **MDA — La OMG promueve la Model Driven Architecture:** la OMG impulsa la Model Driven Architecture, el enfoque en que el modelo, no el código, es el artefacto central del desarrollo. **Buenas prácticas — Trazabilidad requisito → modelo y consistencia entre diagramas:** la práctica clave es la trazabilidad: cada modelo entregado debe poder trazarse a un requisito, y los diagramas deben ser consistentes entre sí; por ejemplo, en ingeniería de sistemas, la consistencia entre modelos reduce defectos costosos. La herramienta es un medio; la calidad está en el modelo, y ninguna herramienta corrige un modelo que no responde a los requisitos.
- **Reflexión docente:** La herramienta es un medio; la calidad está en el modelo.
- **Pregunta desafío:** ¿qué hace a un modelo confiable?
- **Respuestas posibles:** 1. Que represente los requisitos. 2. Que sea consistente con los demás diagramas. 3. Que pueda revisarse y validarse.
- **Advertencia:** ninguna herramienta corrige un modelo que no responde a los requisitos.

### Slide 15. Referencias

**Texto visible**

- `OMG — Unified Modeling Language (UML), Versión 2.5.1. Object Management Group, 2017.`
- `ISO/IEC — ISO/IEC 19505-1:2012 e ISO/IEC 19505-2:2012. Information technology — OMG UML. ISO/IEC, 2012 (confirmado 2025).`
- `RUMBAUGH, Jacobson y Booch — El Lenguaje Unificado de Modelado. Manual de Referencia, 2ª ed. Pearson Educación, 2005.`
- `KIMMEL, Paul — Manual de UML. McGraw-Hill Interamericana, 2010.`
- `LARMAN, Craig — UML y Patrones, 2ª ed. Pearson, 2003.`
- `Módulo 7 — UML — Definiciones Generales. Material de la asignatura (sesiones-clase/clase-4).`

**Elementos visuales**

- Card grid de 2 con cards de bibliografía.

**Explicación docente**

- **Desarrollo:** **OMG — Unified Modeling Language (UML), Versión 2.5.1. Object Management Group, 2017:** la especificación oficial del lenguaje, publicada por el organismo que lo gobierna, es la fuente de autoridad para verificar la notación. **ISO/IEC — ISO/IEC 19505-1:2012 e ISO/IEC 19505-2:2012. Information technology — OMG UML. ISO/IEC, 2012 (confirmado 2025):** la norma internacional que ratifica a UML, confirmada vigente, permite citarlo como estándar ISO/IEC. **RUMBAUGH, Jacobson y Booch — El Lenguaje Unificado de Modelado. Manual de Referencia, 2ª ed. Pearson Educación, 2005:** el manual escrito por los tres autores del lenguaje es la referencia clásica para consultar la notación. **KIMMEL, Paul — Manual de UML. McGraw-Hill Interamericana, 2010:** manual introductorio y práctico, útil para el aprendizaje guiado. **LARMAN, Craig — UML y Patrones, 2ª ed. Pearson, 2003:** obra de referencia para aplicar UML en análisis y diseño con patrones. **Módulo 7 — UML — Definiciones Generales. Material de la asignatura (sesiones-clase/clase-4):** la fuente del módulo sobre la que se construyó la clase. Para justificar una regla de modelado se puede citar el manual de referencia, y conviene verificar la vigencia de la versión citada.
- **Reflexión docente:** Ninguna afirmación de la clase debe carecer de fuente.
- **Pregunta desafío:** ¿qué fuente consultarían para verificar la notación de una multiplicidad?
- **Respuestas posibles:** 1. La especificación de la OMG. 2. El manual de Rumbaugh, Jacobson y Booch. 3. El manual de Larman.
- **Advertencia:** verificar siempre la vigencia de la versión citada.

### Slide 16. Muchas gracias

**Texto visible**

- `MUCHAS GRACIAS`
- `PREGUNTAS`

**Elementos visuales**

- Card hero de cierre.

**Explicación docente**

- **Desarrollo:** **MUCHAS GRACIAS:** el slide de cierre agradece y retoma el mapa de la clase sin introducir contenidos nuevos: UML unifica las vistas funcional, de objetos y dinámica del sistema, y clasificar los catorce diagramas permite elegir el correcto para cada vista. **PREGUNTAS:** la invitación a preguntar abre el espacio final de consultas; por ejemplo, se puede repasar qué diagrama conviene usar según el aspecto que se debe comunicar, y la misma lógica aplica a cualquier proyecto de software. La idea central es que lo importante no es memorizar catorce diagramas, sino saber cuándo y por qué usar cada uno; por ejemplo, los casos de uso sirven para fijar el alcance, los diagramas de clases para la estructura y la máquina de estados para las reglas de negocio.
- **Reflexión docente:** Lo importante no es memorizar 14 diagramas, sino saber cuándo y por qué usar cada uno.
- **Pregunta desafío:** ¿qué diagrama les resultaría más útil para su proyecto y por qué?
- **Respuestas posibles:** 1. Casos de uso, para fijar alcance. 2. Clases, para la estructura. 3. Estados, para las reglas de negocio.
- **Advertencia:** cierre de la clase; no se introducen contenidos nuevos.

## Referencias utilizadas (verificadas)

- OMG. *Unified Modeling Language (UML), Version 2.5.1.* Documento formal/17-12-05. Object Management Group, diciembre 2017. https://www.omg.org/spec/UML/2.5.1
- ISO/IEC 19505-1:2012 e ISO/IEC 19505-2:2012. *Information technology — Object Management Group Unified Modeling Language (OMG UML).* ISO/IEC, 2012 (confirmado vigente en 2025). https://www.iso.org/standard/32624.html
- Rumbaugh, J., Jacobson, I. y Booch, G. *El Lenguaje Unificado de Modelado. Manual de Referencia, 2ª ed.* Pearson Educación, 2005.
- Kimmel, P. *Manual de UML.* McGraw-Hill Interamericana, 2010.
- Larman, C. *UML y Patrones, 2ª ed.* Pearson, 2003.
- Fuente del módulo: *UML — Definiciones Generales* (Módulo 7). Material de la asignatura, `sesiones-clase/clase-4/`.

## Checklist de regeneración

- [x] Archivo nombrado como `guia-slides-unidad-5-t4-a-uml.md`
- [x] Mantener exactamente 16 slides y el orden 1–16.
- [x] Conservar títulos, listas, definiciones y referencias del inventario.
- [x] Diagramas SVG validados con `xmllint`.
- [x] `node --check app.js` sin errores.
- [x] No publicar datos sensibles.
- [x] Actualizar `presentaciones-html/index.html` con el card de la clase.
