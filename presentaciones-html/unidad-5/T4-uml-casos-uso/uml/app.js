const slides = [
  {
    "title": "Ingeniería de Software I",
    "eyebrow": "01 · Apertura",
    "body": `<div class="card card--hero">
  <p class="lede">UNIDAD IV · COMPLEMENTO</p>
  <h2 style="color:var(--fpuna-blue); margin-bottom:.5rem;">INTRODUCCIÓN A UML</h2>
  <p>Lenguaje Unificado de Modelado</p>
  <p>Prof. Lic. Guillermo Jacobo González Rodas Mst. PMP</p>
</div>`,
    "note": `<strong>Desarrollo:</strong> **Ingeniería de Software I:** el slide abre la presentación de la asignatura y ubica el tema dentro del programa de la materia, señalando que esta clase es un complemento de la Unidad IV. **UNIDAD IV · COMPLEMENTO:** el contenido no sustituye a la unidad ya vista, sino que la amplía con el lenguaje de modelado que unifica las vistas del sistema; por ejemplo, en un sistema de turnos hospitalarios, UML permite comunicar flujos, estructura y estados a todo el equipo. **INTRODUCCIÓN A UML:** el propósito es presentar UML como el lenguaje de modelado estándar que organiza el trabajo de análisis y diseño antes de programar. **Lenguaje Unificado de Modelado:** se aclara que UML es una notación estándar, no un dibujo libre; por ejemplo, los diagramas de casos de uso ya revisados en la Unidad IV son solo uno de los catorce diagramas de UML y esta clase los ubica en el mapa completo. **Prof. Lic. Guillermo Jacobo González Rodas Mst. PMP:** la portada identifica al docente a cargo, con su grado académico y su certificación, para formalizar la autoría y el contexto institucional de la clase. <br><br><strong>Reflexión docente:</strong> UML es el lenguaje común que convierte modelos personales e intransferibles en documentos que el equipo puede revisar y corregir.<br><br><strong>Pregunta desafío:</strong> ¿qué problemas aparecen cuando cada persona modela el sistema con una notación propia?<br><br><strong>Respuestas posibles:</strong> 1. Los modelos no se pueden compartir ni comparar. 2. Se pierde información al cambiar de persona o de herramienta. 3. El cliente no puede validar una representación que no entiende.<br><br><strong>Advertencia:</strong> esta apertura contextualiza; los conceptos técnicos se desarrollan en los slides siguientes.`
  },
  {
    "title": "Objetivos",
    "eyebrow": "02 · Objetivos",
    "body": `<div class="card-grid card-grid--3">
  <div class="card card--num"><span class="number">01</span><p>Explicar qué es UML y por qué es el estándar de modelado más utilizado en la industria del software.</p></div>
  <div class="card card--num"><span class="number">02</span><p>Reconocer la historia, la OMG y la especificación vigente (UML 2.5.1) como marco normativo.</p></div>
  <div class="card card--num"><span class="number">03</span><p>Distinguir los 14 diagramas UML, clasificarlos en estructurales y de comportamiento, y saber aplicarlos a casos concretos.</p></div>
</div>`,
    "note": `<strong>Desarrollo:</strong> **Explicar qué es UML y por qué es el estándar de modelado más utilizado en la industria del software:** el primer objetivo define el criterio de aceptación central: al cierre, cada estudiante debe poder explicar qué es UML y justificar su predominio en la industria; por ejemplo, en un sistema de logística, elegir el diagrama correcto según el aspecto a comunicar demuestra que se entendió el lenguaje. **Reconocer la historia, la OMG y la especificación vigente (UML 2.5.1) como marco normativo:** el segundo objetivo ubica el lenguaje en su contexto institucional, conociendo el organismo que lo gobierna y la versión formal vigente, para que las decisiones de modelado se apoyen en un estándar reconocido y no en costumbres personales. **Distinguir los 14 diagramas UML, clasificarlos en estructurales y de comportamiento, y saber aplicarlos a casos concretos:** el tercer objetivo pide dominio práctico: saber qué diagrama usar para un flujo de negocio y cuál para la estructura de datos; por ejemplo, frente a los estados de una transacción bancaria conviene una máquina de estados, mientras que para el orden de los mensajes es mejor un diagrama de secuencia. <br><br><strong>Reflexión docente:</strong> Un objetivo se demuestra eligiendo el diagrama correcto ante un problema concreto, no memorizando nombres.<br><br><strong>Pregunta desafío:</strong> ¿qué diagrama elegirían para mostrar los estados de una transacción?<br><br><strong>Respuestas posibles:</strong> 1. El diagrama de máquina de estados. 2. El diagrama de actividades, si lo que importa es el flujo. 3. El de secuencia, si lo que importa es el orden de los mensajes.<br><br><strong>Advertencia:</strong> elegir el diagrama equivocado comunica mal una decisión aunque el modelo sea correcto.`
  },
  {
    "title": "Contenido",
    "eyebrow": "03 · Recorrido",
    "body": `<div class="sequence-card" aria-label="Recorrido de la clase">
  <div class="sequence-step"><span class="sequence-index">01</span><strong>Fundamentos</strong><small>Qué es UML, su historia y la OMG.</small></div>
  <div class="sequence-step"><span class="sequence-index">02</span><strong>Especificación</strong><small>Finalidad, requisitos y versiones del estándar.</small></div>
  <div class="sequence-step"><span class="sequence-index">03</span><strong>Diagramas</strong><small>Estructurales y de comportamiento (14 tipos).</small></div>
</div>`,
    "note": `<strong>Desarrollo:</strong> **01 Fundamentos — Qué es UML, su historia y la OMG:** el primer paso del recorrido presenta qué es UML, cómo surgió y quién lo gobierna. **02 Especificación — Finalidad, requisitos y versiones del estándar:** el segundo paso describe el marco normativo: para qué sirve el estándar, qué requisitos cumple y cómo evolucionó por versiones, lo que permite usar la notación correcta y justificar decisiones con un estándar reconocido. **03 Diagramas — Estructurales y de comportamiento (14 tipos):** el tercer paso llega a la práctica con la clasificación de los catorce diagramas en estructurales y de comportamiento, el material que se aplica a casos concretos. Por ejemplo, en un sistema de reservas, primero se entiende qué es UML, después su estándar y finalmente qué diagrama usar para cada vista; el mismo recorrido sirve para cualquier dominio donde se deba modelar antes de construir. La secuencia teoría → marco → diagramas evita dibujar sin saber por qué y deja claro que los temas están conectados. <br><br><strong>Reflexión docente:</strong> La secuencia teoría → marco → diagramas evita que los estudiantes dibujen sin saber por qué.<br><br><strong>Pregunta desafío:</strong> ¿por qué conviene conocer el marco normativo antes de modelar?<br><br><strong>Respuestas posibles:</strong> 1. Para usar la notación correcta. 2. Para que el modelo sea interoperable entre herramientas. 3. Para justificar decisiones con un estándar reconocido.<br><br><strong>Advertencia:</strong> el mapa organiza la explicación; los temas están conectados y se refuerzan entre sí.`
  },
  {
    "title": "¿Qué es UML?",
    "eyebrow": "04 · Definición",
    "body": `<div class="quote">Un lenguaje gráfico para <strong>visualizar</strong>, <strong>especificar</strong>, <strong>construir</strong> y <strong>documentar</strong> los artefactos de los sistemas.</div>
<div class="card-grid card-grid--3">
  <div class="card"><h3>Lenguaje de modelado</h3><p>Visual, común y semántica y sintácticamente rico para la arquitectura, el diseño y la implementación de sistemas complejos.</p></div>
  <div class="card"><h3>No es programación</h3><p>UML no es un lenguaje de programación, pero existen herramientas que generan código a partir de los diagramas.</p></div>
  <div class="card"><h3>Comparable a planos</h3><p>Como los planos en otros campos, describe límites, estructura y comportamiento del sistema y sus objetos.</p></div>
</div>
<p class="reference">OMG. Unified Modeling Language (UML), Versión 2.5.1. Object Management Group, 2017. https://www.omg.org/spec/UML/2.5.1</p>`,
    "note": `<strong>Desarrollo:</strong> **Un lenguaje gráfico para visualizar, especificar, construir y documentar los artefactos de los sistemas:** esta es la definición de la OMG: cada verbo nombra una función profesional distinta, y con UML se puede visualizar un sistema antes de construirlo, especificar sus reglas y documentar sus decisiones; por ejemplo, en un sistema de control médico, los diagramas permiten revisar flujos y estructura con personal clínico antes de implementar. **Lenguaje de modelado — Visual, común y semántica y sintácticamente rico:** UML es un lenguaje gráfico compartido por la industria, con un vocabulario formal que le da rigor a la comunicación. **No es programación — UML no es un lenguaje de programación; las herramientas generan código a partir de los diagramas:** el modelo no se ejecuta, aunque algunas herramientas pueden generar código desde los diagramas, así que UML modela pero no ejecuta. **Comparable a planos — Describe límites, estructura y comportamiento:** como un plano de arquitectura, el diagrama fija el límite del sistema, su estructura y su comportamiento, de modo que visualizar da una vista comprensible mientras que especificar define con precisión. <br><br><strong>Reflexión docente:</strong> La definición no es decorativa: cada verbo (visualizar, especificar, construir, documentar) nombra una función profesional distinta.<br><br><strong>Pregunta desafío:</strong> ¿qué diferencia hay entre visualizar y especificar un sistema?<br><br><strong>Respuestas posibles:</strong> 1. Visualizar es tener una vista comprensible; especificar es definir con precisión qué se construye. 2. Una vista puede omitir detalle; la especificación debe ser rigurosa. 3. Ambos se complementan en el modelado.<br><br><strong>Advertencia:</strong> UML modela, no ejecuta: un diagrama correcto no garantiza un sistema correcto.`
  },
  {
    "title": "Historia del Modelado",
    "eyebrow": "05 · Historia",
    "body": `<img class="figure-img" src="assets/linea-tiempo-uml.svg" alt="Antes de 1989: notaciones fragmentadas; línea de tiempo de UML: 1989 OMG, unificación, 1997 UML 1.1, 2005 UML 2.0, 2017 UML 2.5.1" style="display:block; margin:0 auto;">
<div class="card" style="margin-top:1rem;"><p>La falta de estandarización en la representación gráfica impedía compartir modelos entre diseñadores. Con ese objetivo nació UML: el lenguaje de modelado más conocido en la actualidad y estándar internacional aprobado por la <strong>OMG</strong>.</p></div>
<p class="reference">Rumbaugh, J., Jacobson, I. y Booch, G. El Lenguaje Unificado de Modelado. Manual de Referencia, 2ª ed. Pearson Educación, 2005.</p>`,
    "note": `<strong>Desarrollo:</strong> **Antes de 1989 — Notaciones fragmentadas:** el recuadro de contexto que abre la línea de tiempo muestra la época previa a la OMG: en los años 70 dominaba el análisis estructurado (DFD, entidad-relación, HIPO y Jackson) y en los 80 aparecieron los primeros métodos orientados a objetos (Booch, OMT de Rumbaugh y OOSE de Jacobson); cada uno usaba una notación propia, por lo que los modelos no se podían compartir entre equipos; por ejemplo, un diagrama de clases de Booch no era intercambiable con un diagrama de flujo de datos de Yourdon. **Línea de tiempo: 1989 (OMG), 1995–97 (unificación), 1997 (UML 1.1), 2005 (UML 2.0), 2017 (UML 2.5.1):** el diagrama de línea de tiempo recorre los hitos del lenguaje: en 1989 se funda la OMG como organismo de estandarización; entre 1995 y 1997 se unifican las notaciones de los principales métodos de objetos; en 1997 se publica UML 1.1; en 2005 llega UML 2.0 con una revisión mayor; y en 2017 se aprueba UML 2.5.1, la versión formal vigente. **La falta de estandarización en la representación gráfica impedía compartir modelos entre diseñadores:** la línea de tiempo responde al problema original de comunicación: sin una notación común, si cada integrante del equipo modelara a su manera, el diagrama de casos de uso no podría revisarse; por ejemplo, en un proyecto de gobierno, la estandarización permite que distintas empresas contratadas compartan modelos sin reescribirlos. La historia de UML es la historia de un problema de comunicación resuelto con un estándar. <br><br><strong>Reflexión docente:</strong> La historia de UML es la historia de un problema de comunicación resuelto con un estándar.<br><br><strong>Pregunta desafío:</strong> ¿qué problema concreto resolvió UML en 1997?<br><br><strong>Respuestas posibles:</strong> 1. Unificar notaciones de diseño que no se compartían. 2. Permitir que herramientas distintas intercambien modelos. 3. Dar un lenguaje común entre analistas, clientes y desarrolladores.<br><br><strong>Advertencia:</strong> la fecha 2017 corresponde a la versión formal vigente; la especificación sigue evolucionando.`
  },
  {
    "title": "Los Tres Amigos",
    "eyebrow": "06 · Origen",
    "body": `<img class="figure-img" src="assets/tres-amigos.png" alt="Los tres amigos del modelado: Grady Booch, James Rumbaugh e Ivar Jacobson" style="display:block; margin:0 auto; max-height:22vh;">
<div class="card-grid card-grid--3" style="margin-top:1rem;">
  <div class="card"><h3>Booch</h3><p>Método de Booch (OOD, Diseño Orientado a Objetos).</p></div>
  <div class="card"><h3>Rumbaugh</h3><p>OMT (Object Modeling Technique, Técnica de Modelado de Objetos).</p></div>
  <div class="card"><h3>Jacobson</h3><p>OOSE (Object-Oriented Software Engineering, Ingeniería de Software Orientada a Objetos).</p></div>
</div>
<div class="card" style="margin-top:1rem;"><p>UML es una <strong>combinación</strong> de varias notaciones orientadas a objetos: usa las fortalezas de los tres enfoques para presentar una metodología más uniforme y sencilla de usar.</p></div>
<p class="reference">Rumbaugh, J., Jacobson, I. y Booch, G. El Lenguaje Unificado de Modelado. Manual de Referencia, 2ª ed. Pearson Educación, 2005.</p>`,
    "note": `<strong>Desarrollo:</strong> **Booch — Método de Booch (OOD):** el primero de los tres amigos aporta el enfoque de diseño orientado a objetos, que contribuye con la visión de diseño y las notaciones de clases. **Rumbaugh — OMT (Técnica de Modelado de Objetos):** la tradición OMT aporta las clases y asociaciones del modelado estructural. **Jacobson — OOSE (Ingeniería de Software Orientada a Objetos):** de la corriente de Jacobson provienen los casos de uso, que capturan la funcionalidad desde el punto de vista del usuario. **UML combina las fortalezas de los tres enfoques:** la imagen de los tres amigos, acompañada de una tarjeta de síntesis, muestra cómo se fusionan las tres corrientes; por ejemplo, entender el origen explica la diversidad de diagramas de UML: los casos de uso de Jacobson, las clases y asociaciones de OMT y el diseño de Booch. Combinar las fortalezas de cada método redujo la confusión y permitió acordar un lenguaje común, aunque es importante recordar que UML es un lenguaje y no define un proceso de desarrollo. <br><br><strong>Reflexión docente:</strong> Conocer el origen de la notación permite entender por qué UML integra vistas tan diferentes: funcionales, estructurales y de comportamiento.<br><br><strong>Pregunta desafío:</strong> ¿por qué unificar tres métodos produjo un estándar más fuerte?<br><br><strong>Respuestas posibles:</strong> 1. Porque combinó las fortalezas de cada uno. 2. Porque redujo la confusión de usar notaciones incompatibles. 3. Porque permitió que la comunidad acordara un lenguaje común.<br><br><strong>Advertencia:</strong> UML es un lenguaje de modelado; no define por sí mismo un proceso de desarrollo.`
  },
  {
    "title": "UML y los Planos del Software",
    "eyebrow": "07 · Analogía",
    "body": `<div class="card-grid card-grid--2">
  <div class="card"><h3>En la arquitectura</h3><p>Los planos comunican la construcción a todos los oficios: sin ellos, cada uno construiría de forma distinta e incompatible.</p></div>
  <div class="card"><h3>En el software</h3><p>Los diagramas UML comunican la solución a analistas, desarrolladores, clientes y operadores, reduciendo malentendidos sobre qué se construye.</p></div>
</div>
<div class="quote">Es comparable a los planos usados en otros campos y consiste en diferentes tipos de diagramas. En general, los diagramas UML describen los <strong>límites</strong>, la <strong>estructura</strong> y el <strong>comportamiento</strong> del sistema y los objetos que contiene.</div>
<p class="reference">Kimmel, P. Manual de UML. McGraw-Hill Interamericana, 2010.</p>`,
    "note": `<strong>Desarrollo:</strong> **En la arquitectura — Los planos comunican la construcción a todos los oficios:** el slide parte de la analogía clásica: un plano de arquitectura permite que cada oficio construya su parte sin contradicciones; por ejemplo, en una obra de ingeniería de transporte, los planos evitan que cada contratista construya una parte incompatible. **En el software — Los diagramas UML comunican la solución a analistas, desarrolladores, clientes y operadores:** la misma función comunicativa se traslada al software: cada diagrama habla con un destinatario distinto, de modo que analistas, desarrolladores, clientes y operadores comparten una única representación de la solución. **Es comparable a los planos usados en otros campos… describen los límites, la estructura y el comportamiento del sistema:** como el plano, el modelo UML describe los límites, la estructura y el comportamiento del sistema; el diagrama de casos de uso fija el límite del sistema, el de clases describe su estructura y el de estados su comportamiento. En software el \"plano\" suele evolucionar, pero su función de comunicación es la misma, recordando que el modelo es una abstracción, no el sistema real. <br><br><strong>Reflexión docente:</strong> La analogía no es exacta: en software el "plano" suele evolucionar con el producto, pero la función de comunicación es la misma.<br><br><strong>Pregunta desafío:</strong> ¿qué se construiría mal si el límite del sistema no estuviera modelado?<br><br><strong>Respuestas posibles:</strong> 1. Funciones que no corresponden al sistema. 2. Integraciones con actores que quedan fuera del alcance. 3. Pruebas que validan lo que no se debía construir.<br><br><strong>Advertencia:</strong> el modelo es una abstracción, no el sistema real.`
  },
  {
    "title": "UML No Es un Lenguaje de Programación",
    "eyebrow": "08 · Alcance",
    "body": `<div class="table-like">
  <div class="row"><strong>Qué es</strong><span>Lenguaje de modelado visual estándar para el análisis y el diseño orientados a objetos.</span></div>
  <div class="row"><strong>Qué no es</strong><span>Un lenguaje de programación: no se ejecuta, no define la implementación final y no reemplaza el código.</span></div>
</div>
<div class="card" style="margin-top:1rem;"><p>UML guarda una <strong>relación directa</strong> con el análisis y el diseño orientados a objetos. Existen herramientas que pueden generar código en diversos lenguajes usando los diagramas UML.</p></div>
<p class="reference">OMG. Unified Modeling Language (UML), Versión 2.5.1. Object Management Group, 2017.</p>`,
    "note": `<strong>Desarrollo:</strong> **Qué es — Lenguaje de modelado visual estándar para el análisis y el diseño orientados a objetos:** la tabla aclara primero el alcance positivo de UML: un lenguaje de modelado visual estándar que apoya el análisis y el diseño orientados a objetos, sin ser código. **Qué no es — Un lenguaje de programación: no se ejecuta, no define la implementación final y no reemplaza el código:** el segundo matiz es negativo: UML no se compila ni se ejecuta, no define la implementación final y no reemplaza el código; por ejemplo, el diagrama de clases no es el código, pero puede servir de base para revisar el diseño antes de programar o para generar la implementación. **Existen herramientas que pueden generar código en diversos lenguajes usando los diagramas UML:** las herramientas CASE pueden derivar código en diversos lenguajes a partir de los diagramas; por ejemplo, en un sistema de facturación, un diagrama de clases ayuda a acordar la estructura antes de escribir SQL o código. Confundir modelo y código es un error frecuente, y el modelo no garantiza la corrección del código generado. <br><br><strong>Reflexión docente:</strong> Confundir modelo y código es un error frecuente: el modelo comunica la intención, el código expresa la implementación.<br><br><strong>Pregunta desafío:</strong> ¿qué información aporta un diagrama que el código no muestra directamente?<br><br><strong>Respuestas posibles:</strong> 1. La intención y el alcance de la solución. 2. Las relaciones conceptuales entre entidades. 3. Una vista que el cliente puede validar sin leer código.<br><br><strong>Advertencia:</strong> el modelo no garantiza la corrección del código generado.`
  },
  {
    "title": "La OMG",
    "eyebrow": "09 · Organismo",
    "body": `<img class="figure-img" src="assets/omg-logo.png" alt="Logo de la OMG (Object Management Group)" style="display:block; margin:0 auto; max-height:18vh;">
<div class="card-grid card-grid--2" style="margin-top:1rem;">
  <div class="card"><h3>¿Qué es?</h3><p>El Object Management Group (OMG) es un consorcio internacional <strong>sin fines de lucro</strong> y de membresía abierta para estándares tecnológicos, fundado en <strong>1989</strong>.</p></div>
  <div class="card"><h3>¿Quiénes participan?</h3><p>Proveedores, usuarios finales, instituciones académicas y agencias gubernamentales. Sus grupos de trabajo desarrollan estándares de integración empresarial.</p></div>
</div>
<div class="card" style="margin-top:1rem;"><p>La OMG <strong>supervisa</strong> la definición y el mantenimiento de las especificaciones de UML. Esto permite usar un lenguaje para muchos propósitos en todas las etapas del ciclo de vida del software.</p></div>
<p class="reference">OMG. Object Management Group. https://www.omg.org</p>`,
    "note": `<strong>Desarrollo:</strong> **El Object Management Group (OMG) es un consorcio internacional sin fines de lucro y de membresía abierta para estándares tecnológicos, fundado en 1989:** la OMG es la organización que gobierna el estándar UML: un consorcio internacional sin fines de lucro, de membresía abierta y fundado en 1989, cuyo rol evita que una sola empresa controle el lenguaje. **Proveedores, usuarios finales, instituciones académicas y agencias gubernamentales:** la membresía abierta reúne a proveedores de herramientas, usuarios finales, instituciones académicas y agencias gubernamentales, lo que asegura que el estándar evolucione con la industria y no con un interés particular. **La OMG supervisa la definición y el mantenimiento de las especificaciones de UML:** la OMG define y mantiene la especificación, que se versiona como el software; por ejemplo, en banca, usar un estándar mantenido por un consorcio reduce el riesgo de notación propietaria, y cuando un equipo entrega un diagrama, la notación que usa proviene de ese estándar. Las herramientas implementan la especificación con distinto grado de cumplimiento. <br><br><strong>Reflexión docente:</strong> Detrás de UML hay gobernanza: una especificación se mantiene, corrige y versiona, igual que el software.<br><br><strong>Pregunta desafío:</strong> ¿por qué conviene que un estándar lo mantenga un consorcio y no una empresa?<br><br><strong>Respuestas posibles:</strong> 1. Para que ninguna empresa controle el estándar. 2. Para que evolucione con el aporte de la industria. 3. Para garantizar interoperabilidad entre herramientas.<br><br><strong>Advertencia:</strong> la OMG define la especificación; las herramientas la implementan con distintos niveles de cumplimiento.`
  },
  {
    "title": "Finalidad de UML",
    "eyebrow": "10 · Finalidad",
    "body": `<div class="card-grid card-grid--2">
  <div class="card card--num"><span class="number">01</span><h3>Herramientas para el trabajo</h3><p>Brindar a arquitectos de sistemas, ingenieros y desarrolladores las herramientas para el análisis, el diseño y la implementación de sistemas basados en software, así como para el modelado de procesos de negocio.</p></div>
  <div class="card card--num"><span class="number">02</span><h3>Interoperabilidad</h3><p>Hacer progresar la industria permitiendo la interoperabilidad de herramientas de modelado visual de objetos, mediante un acuerdo sobre semántica y notación.</p></div>
</div>
<p class="reference">OMG. Unified Modeling Language (UML), Versión 2.5.1. Object Management Group, 2017.</p>`,
    "note": `<strong>Desarrollo:</strong> **01 Herramientas para el trabajo — Análisis, diseño e implementación de sistemas basados en software y modelado de procesos de negocio:** el primer propósito que la OMG define para UML es profesional: servir como herramienta para el análisis, el diseño y la implementación de sistemas basados en software, así como para modelar procesos de negocio; por ejemplo, en integración empresarial, UML ayuda a representar tanto el flujo operativo como el sistema que lo soporta. **02 Interoperabilidad — Interoperabilidad de herramientas de modelado visual de objetos mediante acuerdo sobre semántica y notación:** el segundo propósito es de industria: gracias al acuerdo sobre semántica y notación, las herramientas de modelado pueden intercambiar modelos sin perder significado; por ejemplo, un diagrama creado en una herramienta podría importarse en otra sin re-modelar, usando formatos de intercambio como XMI. La finalidad combina la utilidad profesional y el objetivo de interoperabilidad, que evita re-modelar al cambiar de herramienta y requiere cumplir la semántica y la notación del estándar. <br><br><strong>Reflexión docente:</strong> La finalidad combina utilidad profesional y un objetivo de industria: que el modelado no quede atrapado en una herramienta.<br><br><strong>Pregunta desafío:</strong> ¿qué problema resuelve la interoperabilidad entre herramientas?<br><br><strong>Respuestas posibles:</strong> 1. Reutilizar modelos al cambiar de herramienta. 2. Compartir modelos entre equipos distintos. 3. Comparar modelos sin reescribirlos.<br><br><strong>Advertencia:</strong> la interoperabilidad plena exige cumplir la semántica y notación del estándar.`
  },
  {
    "title": "Tipos de Diagramas",
    "eyebrow": "11 · Taxonomía",
    "body": `<img class="figure-img" src="assets/taxonomia-diagramas.svg" alt="Los 14 diagramas UML: 7 estructurales y 7 de comportamiento" style="display:block; margin:0 auto;">
<p class="reference">OMG. Unified Modeling Language (UML), Versión 2.5.1. Object Management Group, 2017. https://www.omg.org/spec/UML/2.5.1</p>`,
    "note": `<strong>Desarrollo:</strong> **Estructurales · 7 — Clases, Componentes, Estructura compuesta, Despliegue, Objetos, Paquetes, Perfil:** el diagrama de taxonomía organiza los catorce diagramas en dos grandes grupos: los siete estructurales —clases, componentes, estructura compuesta, despliegue, objetos, paquetes y perfil— responden a la pregunta de cómo está organizado el sistema; por ejemplo, para explicar la infraestructura de un sistema de control de tráfico, el diagrama estructural describe la infraestructura física y lógica. **Comportamiento · 7 — Casos de uso, Actividades, Máquina de estados, Secuencia, Comunicación, Panorama de interacciones, Temporización:** los siete diagramas de comportamiento —casos de uso, actividades, máquina de estados, secuencia, comunicación, panorama de interacciones y temporización— responden a cómo se comporta el sistema; por ejemplo, la secuencia de las señales en el control de tráfico se describe con diagramas de comportamiento. La clasificación ayuda a elegir: primero se pregunta si se comunica estructura o comportamiento, aunque la frontera no es rígida. <br><br><strong>Reflexión docente:</strong> Clasificar los diagramas ayuda a elegir: primero pregunto si comunico estructura o comportamiento.<br><br><strong>Pregunta desafío:</strong> ¿el diagrama de secuencia es estructural o de comportamiento?<br><br><strong>Respuestas posibles:</strong> 1. De comportamiento, porque muestra interacción en el tiempo. 2. Estructural, si solo lista participantes. 3. Ambos en distintos contextos.<br><br><strong>Advertencia:</strong> la frontera no es rígida, pero la clasificación orienta el uso.`
  },
  {
    "title": "Diagramas Estructurales",
    "eyebrow": "12 · Estructurales",
    "body": `<div class="card-grid card-grid--3">
  <div class="card card--num"><span class="number">01</span><h3>Clases</h3><p>El diagrama más usado y la base de toda solución orientada a objetos: clases, atributos, operaciones y relaciones.</p></div>
  <div class="card card--num"><span class="number">02</span><h3>Componentes</h3><p>Relación estructural de los elementos del software; los componentes se comunican por interfaces.</p></div>
  <div class="card card--num"><span class="number">03</span><h3>Estructura compuesta</h3><p>Muestra la estructura interna de una clase.</p></div>
  <div class="card card--num"><span class="number">04</span><h3>Despliegue</h3><p>Ilustra el hardware del sistema y su software, útil para soluciones en múltiples máquinas.</p></div>
  <div class="card card--num"><span class="number">05</span><h3>Objetos</h3><p>Relaciones entre objetos por medio de ejemplos reales, en un momento dado.</p></div>
  <div class="card card--num"><span class="number">06</span><h3>Paquetes</h3><p>Niveles de un sistema que revelan la arquitectura; dependencias de importación y fusión.</p></div>
  <div class="card card--num"><span class="number">07</span><h3>Perfil</h3><p>Extiende el lenguaje con estereotipos y restricciones para modelar un dominio específico.</p></div>
</div>
<p class="reference">OMG. Unified Modeling Language (UML), Versión 2.5.1. Object Management Group, 2017. https://www.omg.org/spec/UML/2.5.1</p>`,
    "note": `<strong>Desarrollo:</strong> **01 Clases — El diagrama más usado y la base de toda solución OO:** el más utilizado de todos los diagramas UML modela las entidades del negocio y sus relaciones, y es la base de toda solución orientada a objetos. **02 Componentes — Comunicación por interfaces:** muestra cómo los componentes del sistema se comunican mediante interfaces bien definidas. **03 Estructura compuesta — Estructura interna de una clase:** permite ver la estructura interna de una clase, es decir, sus partes y conexiones internas. **04 Despliegue — Hardware y software en múltiples máquinas:** describe dónde se ejecuta la aplicación: qué hardware soporta qué software cuando hay múltiples máquinas; por ejemplo, en un sistema bancario, componentes y despliegue comunican la arquitectura de integración. **05 Objetos — El sistema en un momento dado:** captura una fotografía del sistema en un instante, con objetos concretos y sus enlaces. **06 Paquetes — Niveles del sistema; importación y fusión:** organizan el sistema en niveles y controlan la importación y fusión de elementos. **07 Perfil — Extensiones del lenguaje:** permite especializar UML con estereotipos, etiquetas y restricciones para un dominio; por ejemplo, un perfil para aplicaciones móviles define estereotipos como <<Pantalla>> o <<Servicio>>. Los estructurales responden a cómo está organizado el sistema, y un diagrama de clases sin multiplicidades consistentes es solo una lista de cajas. <br><br><strong>Reflexión docente:</strong> Los estructurales responden "cómo está organizado"; son la base para el diseño de la solución.<br><br><strong>Pregunta desafío:</strong> ¿qué diagrama usarían para mostrar la arquitectura de hardware y software?<br><br><strong>Respuestas posibles:</strong> 1. Despliegue. 2. Componentes. 3. Paquetes.<br><br><strong>Advertencia:</strong> un diagrama de clases sin multiplicidades consistentes es una lista de cajas, no un modelo.`
  },
  {
    "title": "Diagramas de Comportamiento",
    "eyebrow": "13 · Comportamiento",
    "body": `<div class="card-grid card-grid--3">
  <div class="card card--num"><span class="number">01</span><h3>Casos de uso</h3><p>Representan una funcionalidad particular y su relación con los actores.</p></div>
  <div class="card card--num"><span class="number">02</span><h3>Actividades</h3><p>Flujos de trabajo de negocio u operativos; alternativa a la máquina de estados.</p></div>
  <div class="card card--num"><span class="number">03</span><h3>Máquina de estados</h3><p>Comportamiento de objetos que cambian según su estado actual.</p></div>
  <div class="card card--num"><span class="number">04</span><h3>Secuencia</h3><p>Orden de ocurrencia de las interacciones entre objetos, para un escenario concreto.</p></div>
  <div class="card card--num"><span class="number">05</span><h3>Comunicación</h3><p>Similar a secuencia, pero con el foco en los mensajes entre objetos.</p></div>
  <div class="card card--num"><span class="number">06</span><h3>Panorama de interacciones</h3><p>Muestra la secuencia en la cual actúan las interacciones.</p></div>
  <div class="card card--num"><span class="number">07</span><h3>Temporización</h3><p>Comportamiento de los objetos en un período de tiempo dado.</p></div>
</div>
<p class="reference">OMG. Unified Modeling Language (UML), Versión 2.5.1. Object Management Group, 2017. https://www.omg.org/spec/UML/2.5.1</p>`,
    "note": `<strong>Desarrollo:</strong> **01 Casos de uso:** describen una funcionalidad particular y su relación con los actores, fijando qué hace el sistema para cada tipo de usuario. **02 Actividades:** modelan flujos de trabajo y son una alternativa a la máquina de estados cuando lo que importa es el proceso; por ejemplo, en un sistema de atención al cliente, el diagrama de actividades describe el flujo de un reclamo. **03 Máquina de estados:** describe el comportamiento según el estado actual de una entidad y modela su ciclo de vida; por ejemplo, los estados de una transacción bancaria. **04 Secuencia:** muestra el orden de las interacciones entre objetos para un escenario concreto. **05 Comunicación:** pone el foco en los mensajes que se intercambian los objetos y en cómo se organizan. **06 Panorama de interacciones:** indica la secuencia en la que actúan distintas interacciones. **07 Temporización:** describe el comportamiento en un período de tiempo, útil cuando el tiempo es relevante. Los de comportamiento responden a cómo se comporta el sistema, y los flujos no deben contradecir la especificación del caso de uso. <br><br><strong>Reflexión docente:</strong> Los de comportamiento responden "cómo se comporta"; son clave para validar reglas de negocio.<br><br><strong>Pregunta desafío:</strong> ¿qué diagrama de comportamiento muestra el flujo de un proceso?<br><br><strong>Respuestas posibles:</strong> 1. El de actividades. 2. El de máquina de estados. 3. El de secuencia.<br><br><strong>Advertencia:</strong> los flujos del diagrama de actividades no deben contradecir la especificación del caso de uso.`
  },
  {
    "title": "Herramientas y Buenas Prácticas",
    "eyebrow": "14 · Prácticas",
    "body": `<div class="card-grid card-grid--3">
  <div class="card"><h3>Herramientas de modelado</h3><p>El estándar UML es soportado por múltiples herramientas CASE de modelado visual, que además pueden generar código o esquemas a partir de los diagramas.</p></div>
  <div class="card"><h3>MDA</h3><p>La OMG promueve también la Model Driven Architecture (MDA), un enfoque que usa modelos como artefactos centrales del desarrollo.</p></div>
  <div class="card"><h3>Buenas prácticas</h3><p>Mantener trazabilidad requisito → modelo → hito y consistencia entre diagramas (mismos nombres, actores y reglas).</p></div>
</div>
<p class="reference">OMG. Model Driven Architecture (MDA). https://www.omg.org/mda</p>`,
    "note": `<strong>Desarrollo:</strong> **Herramientas de modelado — El estándar es soportado por múltiples herramientas CASE:** el cierre del contenido técnico recuerda que UML no se dibuja a mano: el estándar está soportado por múltiples herramientas CASE que asisten el modelado, la verificación y la generación de artefactos. **MDA — La OMG promueve la Model Driven Architecture:** la OMG impulsa la Model Driven Architecture, el enfoque en que el modelo, no el código, es el artefacto central del desarrollo. **Buenas prácticas — Trazabilidad requisito → modelo y consistencia entre diagramas:** la práctica clave es la trazabilidad: cada modelo entregado debe poder trazarse a un requisito, y los diagramas deben ser consistentes entre sí; por ejemplo, en ingeniería de sistemas, la consistencia entre modelos reduce defectos costosos. La herramienta es un medio; la calidad está en el modelo, y ninguna herramienta corrige un modelo que no responde a los requisitos. <br><br><strong>Reflexión docente:</strong> La herramienta es un medio; la calidad está en el modelo y su trazabilidad.<br><br><strong>Pregunta desafío:</strong> ¿qué hace a un modelo confiable, más allá de la herramienta?<br><br><strong>Respuestas posibles:</strong> 1. Que represente fielmente los requisitos. 2. Que sea consistente con los demás diagramas. 3. Que pueda ser revisado y validado.<br><br><strong>Advertencia:</strong> ninguna herramienta corrige un modelo que no responde a los requisitos.`
  },
  {
    "title": "Referencias",
    "eyebrow": "15 · Referencias",
    "body": `<div class="card-grid card-grid--2">
  <div class="card card--blog"><h3>OMG</h3><p>Unified Modeling Language (UML), Versión 2.5.1. Object Management Group, 2017.</p></div>
  <div class="card card--blog"><h3>ISO/IEC</h3><p>ISO/IEC 19505-1:2012 e ISO/IEC 19505-2:2012. Information technology — OMG UML. ISO/IEC, 2012 (confirmado 2025).</p></div>
  <div class="card card--blog"><h3>RUMBAUGH, Jacobson y Booch</h3><p>El Lenguaje Unificado de Modelado. Manual de Referencia, 2ª ed. Pearson Educación, 2005.</p></div>
  <div class="card card--blog"><h3>KIMMEL, Paul</h3><p>Manual de UML. McGraw-Hill Interamericana, 2010.</p></div>
  <div class="card card--blog"><h3>LARMAN, Craig</h3><p>UML y Patrones, 2ª ed. Pearson, 2003.</p></div>
  <div class="card card--blog"><h3>Módulo 7</h3><p>UML — Definiciones Generales. Material de la asignatura (sesiones-clase/clase-4).</p></div>
</div>`,
    "note": `<strong>Desarrollo:</strong> **OMG — Unified Modeling Language (UML), Versión 2.5.1. Object Management Group, 2017:** la especificación oficial del lenguaje, publicada por el organismo que lo gobierna, es la fuente de autoridad para verificar la notación. **ISO/IEC — ISO/IEC 19505-1:2012 e ISO/IEC 19505-2:2012. Information technology — OMG UML. ISO/IEC, 2012 (confirmado 2025):** la norma internacional que ratifica a UML, confirmada vigente, permite citarlo como estándar ISO/IEC. **RUMBAUGH, Jacobson y Booch — El Lenguaje Unificado de Modelado. Manual de Referencia, 2ª ed. Pearson Educación, 2005:** el manual escrito por los tres autores del lenguaje es la referencia clásica para consultar la notación. **KIMMEL, Paul — Manual de UML. McGraw-Hill Interamericana, 2010:** manual introductorio y práctico, útil para el aprendizaje guiado. **LARMAN, Craig — UML y Patrones, 2ª ed. Pearson, 2003:** obra de referencia para aplicar UML en análisis y diseño con patrones. **Módulo 7 — UML — Definiciones Generales. Material de la asignatura (sesiones-clase/clase-4):** la fuente del módulo sobre la que se construyó la clase. Para justificar una regla de modelado se puede citar el manual de referencia, y conviene verificar la vigencia de la versión citada. <br><br><strong>Reflexión docente:</strong> Las referencias son verificables; ninguna afirmación de la clase debe carecer de fuente.<br><br><strong>Pregunta desafío:</strong> ¿qué fuente consultarían para verificar la notación de una multiplicidad?<br><br><strong>Respuestas posibles:</strong> 1. La especificación de la OMG. 2. El manual de Rumbaugh, Jacobson y Booch. 3. El manual de Larman.<br><br><strong>Advertencia:</strong> verificar siempre la vigencia de la versión citada.`
  },
  {
    "title": "Muchas gracias",
    "eyebrow": "16 · Cierre",
    "body": `<div class="card card--hero">
  <p class="lede">MUCHAS GRACIAS</p>
  <h2 style="color:var(--fpuna-blue);">PREGUNTAS</h2>
</div>`,
    "note": `<strong>Desarrollo:</strong> **MUCHAS GRACIAS:** el slide de cierre agradece y retoma el mapa de la clase sin introducir contenidos nuevos: UML unifica las vistas funcional, de objetos y dinámica del sistema, y clasificar los catorce diagramas permite elegir el correcto para cada vista. **PREGUNTAS:** la invitación a preguntar abre el espacio final de consultas; por ejemplo, se puede repasar qué diagrama conviene usar según el aspecto que se debe comunicar, y la misma lógica aplica a cualquier proyecto de software. La idea central es que lo importante no es memorizar catorce diagramas, sino saber cuándo y por qué usar cada uno; por ejemplo, los casos de uso sirven para fijar el alcance, los diagramas de clases para la estructura y la máquina de estados para las reglas de negocio. <br><br><strong>Reflexión docente:</strong> Lo que importa no es memorizar 14 diagramas, sino saber cuándo y por qué usar cada uno.<br><br><strong>Pregunta desafío:</strong> ¿qué diagrama de UML les resultaría más útil para su proyecto y por qué?<br><br><strong>Respuestas posibles:</strong> 1. El de casos de uso, para fijar el alcance. 2. El de clases, para la estructura. 3. El de estados, para las reglas de negocio.<br><br><strong>Advertencia:</strong> cierre de la clase; no se introducen contenidos nuevos.`
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
const presenterView = new URLSearchParams(location.search).get('view') === 'presenter';

function slideMarkup(slide, index, headingId = 'slide-title') {
  return `<article class="slide slide-${index + 1}" aria-labelledby="${headingId}">
  <header class="slide-header">
  <p class="eyebrow">${slide.eyebrow}</p>
  <h1 id="${headingId}">${slide.title}</h1>
  </header>
  <div class="content">${slide.body}</div>
  </article>`;
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

function goTo(index, silent) {
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
  if (!silent && presenterWindow && !presenterWindow.closed) presenterWindow.postMessage({ type: 'presentation:navigate', index: current }, '*');
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

let presenterWindow = null;

function showNotice(message) {
  const notice = document.querySelector('#popup-notice, #presenter-notice');
  if (!notice) return;
  notice.textContent = message;
  notice.hidden = false;
  window.setTimeout(() => { notice.hidden = true; }, 7000);
}

function openPresenter() {
  presenterWindow = window.open(`${location.pathname}?view=presenter#slide-${current + 1}`, 'fpuna-presenter', 'popup,width=1440,height=900,resizable=yes,scrollbars=yes');
  if (!presenterWindow) { showNotice('El navegador bloqueó la ventana del modo presentador. Permití las ventanas emergentes para este sitio e intentá nuevamente.'); return; }
  presenterWindow.focus();
}

function fitPresenterSlide(frame) {
  const slide = frame.querySelector('.slide'); if (!slide) return;
  slide.style.transform = 'none'; slide.style.width = '100%';
  const width = slide.scrollWidth; const height = slide.scrollHeight;
  const scale = Math.min(1, frame.clientWidth / width, frame.clientHeight / height);
  slide.style.width = `${100 / scale}%`; slide.style.transformOrigin = 'top left'; slide.style.transform = `scale(${scale})`;
  frame.style.setProperty('--slide-scale', scale);
}

function initPresenter() {
  document.body.innerHTML = `<main class="presenter-shell"><header class="presenter-header"><div><p class="presenter-kicker">FP-UNA · Unidad V · T4 - UML y Casos de Uso</p><h1>Modo presentador</h1></div><div class="presenter-meta"><span id="presenter-counter">01 / ${String(slides.length).padStart(2, '0')}</span><time id="presenter-clock"></time></div></header><section class="presenter-workspace" aria-label="Vista del presentador"><section class="presenter-notes"><h2>Notas docentes</h2><div id="presenter-notes-content" tabindex="0"></div></section><div class="presenter-stack"><div class="presenter-current"><div class="presenter-label">Slide actual</div><div id="presenter-current-frame" class="presenter-slide-frame"></div></div><section class="presenter-next"><h2>Siguiente slide</h2><div id="presenter-next-frame" class="presenter-slide-frame presenter-slide-frame--next"></div></section></div></section><footer class="presenter-controls"><button id="presenter-previous" type="button">← Anterior</button><button id="presenter-next" type="button">Siguiente →</button><span class="presenter-spacer"></span><button id="presenter-public" type="button">Pantalla completa del público</button><button id="presenter-close" type="button">Cerrar</button></footer><div id="presenter-notice" class="popup-notice" role="status" aria-live="polite" hidden></div></main>`;
  const currentFrame = document.querySelector('#presenter-current-frame'); const nextFrame = document.querySelector('#presenter-next-frame');
  function renderPresenter() { const slide = slides[current]; const next = current + 1; currentFrame.innerHTML = slideMarkup(slide, current, 'presenter-current-title'); nextFrame.innerHTML = next < slides.length ? slideMarkup(slides[next], next, 'presenter-next-title') : '<p class="presenter-end-message">Fin de la presentación</p>'; document.querySelector('#presenter-notes-content').innerHTML = slide.note; document.querySelector('#presenter-counter').textContent = `${String(current + 1).padStart(2, '0')} / ${String(slides.length).padStart(2, '0')}`; requestAnimationFrame(() => { fitPresenterSlide(currentFrame); fitPresenterSlide(nextFrame); }); }
  function presenterGoTo(position, silent = false) { current = Math.max(0, Math.min(slides.length - 1, position)); renderPresenter(); if (!silent && window.opener && !window.opener.closed) window.opener.postMessage({ type: 'presenter:navigate', index: current }, '*'); history.replaceState(null, '', `#slide-${current + 1}`); }
  document.querySelector('#presenter-previous').addEventListener('click', () => presenterGoTo(current - 1)); document.querySelector('#presenter-next').addEventListener('click', () => presenterGoTo(current + 1));
  document.querySelector('#presenter-public').addEventListener('click', () => { if (window.opener && !window.opener.closed) window.opener.postMessage({ type: 'presenter:fullscreen' }, '*'); else showNotice('La pantalla pública no está vinculada a esta ventana.'); });
  document.querySelector('#presenter-close').addEventListener('click', () => window.close());
  document.addEventListener('keydown', event => { if (['ArrowRight', 'PageDown', ' '].includes(event.key)) { event.preventDefault(); presenterGoTo(current + 1); } if (['ArrowLeft', 'PageUp'].includes(event.key)) { event.preventDefault(); presenterGoTo(current - 1); } if (event.key === 'Home') presenterGoTo(0); if (event.key === 'End') presenterGoTo(slides.length - 1); });
  window.addEventListener('resize', () => { fitPresenterSlide(currentFrame); fitPresenterSlide(nextFrame); });
  window.addEventListener('message', event => { if (event.source !== window.opener) return; if (event.data?.type === 'presentation:state') presenterGoTo(event.data.index, true); });
  const initial = location.hash.match(/slide-(\d+)/); if (initial) current = Math.max(0, Math.min(slides.length - 1, Number(initial[1]) - 1)); renderPresenter();
  if (window.opener && !window.opener.closed) window.opener.postMessage({ type: 'presenter:ready' }, '*');
  setInterval(() => { document.querySelector('#presenter-clock').textContent = new Intl.DateTimeFormat('es-PY', { hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(new Date()); }, 1000);
}

const hashMatch = location.hash.match(/#slide-(\d+)/);
const startSlide = hashMatch ? parseInt(hashMatch[1], 10) - 1 : 0;
const printAll = new URLSearchParams(location.search).get('print') === 'all';

if (presenterView) {
  initPresenter();
} else {
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

  document.getElementById('presenter-mode').addEventListener('click', openPresenter);

  window.addEventListener('message', event => {
    if (event.source !== presenterWindow) return;
    if (event.data?.type === 'presenter:ready') presenterWindow.postMessage({ type: 'presentation:state', index: current }, '*');
    if (event.data?.type === 'presenter:navigate') goTo(event.data.index, true);
    if (event.data?.type === 'presenter:fullscreen') {
      const request = document.documentElement.requestFullscreen?.();
      request?.catch(() => showNotice('El navegador no permitió activar pantalla completa desde la ventana presentador. Activala con el botón Pantalla completa de esta ventana.'));
    }
  });

  window.addEventListener('beforeprint', () => { renderAllForPrint(); });
  window.addEventListener('afterprint', () => { stage.innerHTML = ''; goTo(current); });

  buildIndex();
  if (printAll) renderAllForPrint(); else goTo(Math.min(startSlide, slides.length - 1));
}
