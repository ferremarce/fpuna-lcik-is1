# Guía de regeneración de la Clase 2

Guía docente para regenerar la presentación a partir de `sesiones-clase/clase-2/IS1-UNIDAD_II.pptx`. Conserva los **47 slides**, su orden y su numeración de origen. La futura presentación deberá usar esta guía como especificación de contenido, no como sustituto del diseño visual.

**Archivo:** `guia-slides-clase-2.md`
**Ubicación:** `presentaciones-html/clase-2/`

## Lectura rápida

- **Fuente:** `sesiones-clase/clase-2/IS1-UNIDAD_II.pptx`.
- **Total verificado:** 47 slides en `ppt/presentation.xml`, dentro de `p:sldIdLst`.
- **Notas del orador:** no hay archivos `ppt/notesSlides/`; el paquete solo contiene un notes master, sin notas asociadas a slides.
- **Contenido visual embebido:** 4 slides contienen imágenes (slides 17, 30, 33, 41).
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

### Funcionalidades JavaScript Obligatorias

- **Navegación por teclado:** ← → para slides, Home/End para inicio/fin
- **Navegación por hash:** `#slide-N` para ir a un slide específico
- **Panel de índice:** Toggle con botón o tecla `I`
- **Panel de notas:** Toggle con botón o tecla `N`
- **Pantalla completa:** Botón o tecla `F`
- **Modo impresión:** beforeprint/afterprint para generar PDF
- **Barra de progreso:** Actualización visual del avance
- **Contador:** Formato `NN / NN` con slide actual y total

### Referencias bibliográficas del curso

| Autor | Obra | Editorial | Año |
|-------|------|-----------|-----|
| Sommerville, I. | Ingeniería de Software, 7ª ed. | Addison Wesley | 2005 |
| Pressman, R. | Ingeniería del Software: Un enfoque práctico, 7ª ed. | McGraw-Hill | 2010 |
| Jacobson, I., Booch, G., Rumbaugh, J. | The Unified Software Development Process | Addison-Wesley | 1999 |
| Highsmith, J. | Adaptive Software Development | Addison-Wesley | 2000 |
| Beck, K. | Extreme Programming Explained | Addison-Wesley | 1999 |
| Schwaber, K., Sutherland, J. | The Scrum Guide | Scrum.org | 2020 |
| Beck, K. et al. | Manifesto for Agile Software Development | agilemanifesto.org | 2001 |

---

## Inventario slide por slide

### Slide 1. Portada

**Texto visible**

- `UNIDAD II – MODELOS DE DESARROLLO DE SOFTWARE Y DESARROLLO RÁPIDO DEL SOFTWARE`
- `Prof. Ing. Julia Talavera`

**Elementos visuales**

- Slide de apertura con título principal, subtítulo y nombre del docente.
- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** Presentar la Unidad II como el estudio de cómo se organiza y ejecuta el desarrollo de software: modelos tradicionales, métodos ágiles y su impacto en la calidad y los plazos.
- **Ejemplos:** **Global Exchange (conductor):** un sistema de cambio de divisas necesita un proceso claro; el modelo elegido afecta cuándo y cómo se entrega valor. **Segundo contexto industrial:** en logística, la elección de un proceso determina si se entrega funcionalidad incremental o se espera a tener todo listo.
- **Reflexión docente:** La unidad conecta teoría y práctica: comprender los modelos ayuda a justificar por qué un equipo trabaja de cierta manera.
- **Pregunta desafío:** ¿por qué no basta con «programar y entregar»?
- **Respuestas posibles:**
 1. Porque el software requiere planificación, diseño, verificación y mantenimiento.
 2. Porque los plazos, costos y calidad dependen de cómo se organice el trabajo.
 3. Porque sin proceso, los errores se descubren tarde y el retrabajo es costoso.
- **Advertencia:** esta apertura contextualiza la unidad; aún no definimos modelos técnicos.

### Slide 2. Objetivos

**Texto visible**

- `OBJETIVOS`
- `Entender las diferencias entre los métodos tradicionales de desarrollo y los métodos ágiles.`
- `Conocer principios, prácticas y limitaciones de los métodos ágiles.`
- `Entender como un enfoque de desarrollo de software iterativo e incremental conduce a una entrega más rápida.`

**Elementos visuales**

- Título y lista de tres objetivos.
- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** Los objetivos guían la unidad: comprender diferencias entre enfoques, conocer prácticas ágiles, evaluar su impacto en calidad y reconocer cuándo son efectivos.
- **Ejemplos:** **Global Exchange (conductor):** ¿debemos usar cascada o ágil para construir el módulo de cambio de divisas? La respuesta depende del contexto. **Segundo contexto industrial:** un proyecto regulatorio puede exigir documentación extensa (cascada), mientras un prototipo de innovación puede beneficiarse de iteraciones cortas (ágil).
- **Reflexión docente:** No existe un modelo «perfecto»; la elección depende del problema, el equipo y las restricciones.
- **Pregunta desafío:** ¿qué factores determinan la elección de un modelo de proceso?
- **Respuestas posibles:**
 1. La claridad de los requisitos al inicio.
 2. La estabilidad del equipo y la tecnología.
 3. Los plazos, costos y riesgos del proyecto.
- **Advertencia:** los objetivos son evaluable; dominarlos es clave para el parcial.

### Slide 3. Contenido

**Texto visible**

- `CONTENIDO`
- `Introducción`
- `Características`
- `Manifiesto ágil`
- `Principales metodologías ágiles`
- `Adaptive Software Development (ASD)`
- `Scrum`
- `XP`

**Elementos visuales**

- Lista textual de siete temas.
- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** La unidad se divide en dos bloques: modelos tradicionales (cascada, prototipación, fases, espiral, RUP) y métodos ágiles (ASD, Scrum, XP).
- **Ejemplos:** **Global Exchange (conductor):** podemos empezar con cascada para definir la arquitectura y usar ágil para iterar funcionalidades. **Segundo contexto industrial:** en un sistema de turnos, el modelo tradicional puede funcionar para la infraestructura, pero ágil para la interfaz de usuario.
- **Reflexión docente:** El contenido muestra que no hay una respuesta única; la profesionalidad está en elegir y justificar el enfoque adecuado.
- **Pregunta desafío:** ¿por qué es importante conocer ambos enfoques?
- **Respuestas posibles:**
 1. Porque en la práctica real se combinan elementos de ambos.
 2. Porque el cliente puede pedir un enfoque específico.
 3. Porque comprender las limitaciones de uno ayuda a valorar las fortalezas del otro.
- **Advertencia:** el mapa anticipa temas; no reemplaza el desarrollo de cada sección.

### Slide 4. Ingeniería de Software

**Texto visible**

- `Ingeniería de Software`
- `A pesar haber transcurrido casi 40 años, la calidad del software, las metodologías y la madurez de los entornos de desarrollo siguen siendo temas de discusión y estudio.`
- `Objetivos`
- `Maximizar calidad`
- `Maximizar productividad`
- `Minimizar riesgos`

**Elementos visuales**

- Título, párrafo introductorio y tres objetivos.
- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** La Ingeniería de Software busca equilibrar calidad, costos y plazos. Después de casi 40 años, estos siguen siendo desafíos abiertos.
- **Ejemplos:** **Global Exchange (conductor):** un sistema de cambio de divisas debe ser preciso (calidad), accesible (costos) y rápido de entregar (plazos). **Segundo contexto industrial:** en un sistema bancario, un error de calidad puede costar millones; un retraso puede perder el mercado.
- **Reflexión docente:** La tensión entre Q, C y T es inevitable; la profesión está en gestionar trade-offs, no en eliminarlos.
- **Pregunta desafío:** ¿qué pasaría si ignoramos uno de los tres factores?
- **Respuestas posibles:**
 1. Ignorar calidad → software con errores que cuesta más mantener.
 2. Ignorar costos → proyecto que quiebra o no se completa.
 3. Ignorar plazos → oportunidad perdida o cliente insatisfecho.
- **Advertencia:** los factores Q, C, T están interconectados; no se pueden optimizar todos simultáneamente.

### Slide 5. Dificultades en Producción de Software

**Texto visible**

- `Dificultades en Producción de Software`
- `Esencia`
- `complejidad`
- `conformidad`
- `necesidad de cambios`
- `invisibilidad`

**Elementos visuales**

- Título y lista de cuatro elementos de la esencia del software.
- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** Fred Brooks identificó la esencia del software: complejidad, conformidad, invisibilidad y variabilidad. Estas hacen que la producción sea intrínsecamente difícil.
- **Ejemplos:** **Global Exchange (conductor):** un sistema de cambio de divisas tiene complejidad lógica (tasas, redondeo), conformidad (regulaciones), invisibilidad (lógica oculta) y cambios (nuevas monedas, regulaciones). **Segundo contexto industrial:** un ERP tiene miles de reglas de negocio que interactúan; un cambio puede romper otra funcionalidad.
- **Reflexión docente:** Entender la esencia ayuda a por qué no existen soluciones mágicas; la ingeniería es necesaria porque el software es inherentemente difícil.
- **Pregunta desafío:** ¿cuál de las cuatro esencias genera más problemas en un proyecto real?
- **Respuestas posibles:**
 1. Complejidad → errores difíciles de encontrar.
 2. Cambios → retrabajo constante.
 3. Invisibilidad → malentendidos entre equipo y cliente.
- **Advertencia:** estas no son excusas; son razones para aplicar ingeniería.

### Slide 6. Proceso de Software

**Texto visible**

- `Proceso de Software`
- `"Conjunto relacionado de actividades y tareas implicadas en el desarrollo y evolución de un sistema software" [Sommerville]`

**Elementos visuales**

- Definición textual con atribución a Sommerville.
- No contiene imágenes ni notas del orador.

<p class="reference">Sommerville, I. Ingeniería de Software, 7ª ed. Addison Wesley, 2005.</p>

**Explicación docente**

- **Desarrollo:** Un proceso de software organiza actividades, métodos y herramientas. Sommerville lo define como el conjunto de actividades implicadas en desarrollo y evolución.
- **Ejemplos:** **Global Exchange (conductor):** el proceso define cómo pasamos de la idea de cambiar divisas a un sistema funcionando. **Segundo contexto industrial:** en un hospital, el proceso define cómo se pasan requerimientos de privacidad a un sistema de historias clínicas.
- **Reflexión docente:** Un proceso sin contexto puede ser burocracia; un proceso con contexto es una herramienta de gestión.
- **Pregunta desafío:** ¿qué pasaría si no hubiera proceso alguno?
- **Respuestas posibles:**
 1. Caos: cada persona trabaja a su manera.
 2. Duplicación de esfuerzos y conflictos.
 3. Difícil de medir, corregir o mejorar.
- **Advertencia:** el proceso no es fin en sí mismo; sirve para producir software de calidad.

### Slide 7. Modelos de Procesos de Software

**Texto visible**

- `Modelos de Procesos de Software`
- `Modelos Tradicionales (MTs):`
- `Modelo en Cascada.`
- `Modelo de Prototipación.`
- `Modelo de Desarrollo en Fases.`
- `Modelo en Espiral.`
- `RUP`
- `Métodos Ágiles (MAs):`
- `Adaptive Software Development (ASD)`
- `Scrum`
- `XP`

**Elementos visuales**

- Lista jerárquica organizada en dos categorías: tradicionales y ágiles.
- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** Los procesos se clasifican en tradicionales y ágiles. Los tradicionales son más planificados y documentados; los ágiles son más flexibles e iterativos.
- **Ejemplos:** **Global Exchange (conductor):** podemos usar cascada para la arquitectura base y ágil para funcionalidades nuevas. **Segundo contexto industrial:** un sistema de facturación puede usar cascada para cumplir normativas y ágil para la interfaz.
- **Reflexión docente:** No son opuestos; son herramientas distintas para contextos distintos.
- **Pregunta desafío:** ¿cuándo elegiría tradicional vs. ágil?
- **Respuestas posibles:**
 1. Tradicional: requisitos claros, regulaciones estrictas.
 2. Ágil: requisitos cambiantes, equipo pequeño, innovación.
 3. Combinación: partes estables con tradicional, partes nuevas con ágil.
- **Advertencia:** la clasificación es útil pero no absoluta; existen híbridos.

### Slide 8. Modelo en Cascada

**Texto visible**

- `Modelo en Cascada`
- `Es el más antiguo.`
- `Debe completarse un estado antes de comenzar el siguiente.`
- `Es útil para que el desarrollador visualice lo que va a hacer.`
- `Su principal problema es que no refleja la realidad.`

**Elementos visuales**

- Título y lista de características del modelo en cascada.
- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** El modelo en cascada es secuencial: cada fase debe completarse antes de la siguiente. Es claro pero rígido.
- **Ejemplos:** **Global Exchange (conductor):** podríamos definir todos los requisitos de cambio de divisas, luego diseñar, luego codificar. Pero si falta un requisito, el error se detecta tarde. **Segundo contexto industrial:** en un sistema de control aéreo, la documentación extensa puede ser necesaria, pero la cascada pura es riesgosa.
- **Reflexión docente:** La cascada es buena para entender la secuencia lógica, pero peligrosa si se aplica rígidamente.
- **Pregunta desafío:** ¿por qué la cascada no refleja la realidad?
- **Respuestas posibles:**
 1. Porque los requisitos cambian durante el desarrollo.
 2. Porque los errores se descubren tarde.
 3. Porque el cliente no puede ver progreso hasta el final.
- **Advertencia:** la cascada no es «mala»; es inadecuada para proyectos con alta incertidumbre.

### Slide 9. Modelo en Cascada (En la práctica)

**Texto visible**

- `Modelo en Cascada`
- `En la práctica…`
- `ANÁLISIS DE REQUERIMIENTOS`
- `DISEÑO DEL SISTEMA`
- `DISEÑO DE PROGRAMAS`
- `CODIFICACIÓN`
- `TESTING UNITARIO E INTEGRADO`
- `TESTING DEL SISTEMA`
- `TESTING DE ACEPTACIÓN`
- `OPERACIÓN Y MANTENCIÓN`

**Elementos visuales**

- Lista secuencial de ocho fases del modelo en cascada.
- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** Este diagrama muestra las fases en secuencia: desde requerimientos hasta mantenimiento. En la práctica, estas fases se superponen y los errores se retroalimentan.
- **Ejemplos:** **Global Exchange (conductor):** primero definimos reglas de cambio, diseñamos la arquitectura, codificamos y probamos. Pero si en testing descubrimos un error de requisitos, debemos retroceder. **Segundo contexto industrial:** en un sistema de turnos, el testing de aceptación puede revelar que los requisitos no cubren todos los casos.
- **Reflexión docente:** El diagrama es ideal; la realidad es cíclica. Los errores retroalimentan fases anteriores.
- **Pregunta desafío:** ¿qué pasa si se detecta un error de requisitos en la fase de testing?
- **Respuestas posibles:**
 1. Se debe retroceder a análisis, lo que genera retrabajo.
 2. El costo del cambio aumenta con cada fase.
 3. La cascada pura no maneja bien esta retroalimentación.
- **Advertencia:** el diagrama es una simplificación; la realidad es más compleja.

### Slide 10. Modelo de Prototipación

**Texto visible**

- `Modelo de Prototipación`
- `Permite la construcción rápida del sistema (o parte de éste).`
- `Usuario y desarrollador tienen una visión común.`
- `Se reduce el riesgo y la incertidumbre del desarrollo.`

**Elementos visuales**

- Título y tres ventajas del modelo de prototipación.
- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** La prototipación construye versiones rápidas para validar ideas. Reduce riesgos al obtener retroalimentación temprana.
- **Ejemplos:** **Global Exchange (conductor):** podríamos prototipar la interfaz de cambio de divisas para validar con el usuario antes de construir todo. **Segundo contexto industrial:** en un sistema de turnos, un prototipo puede mostrar cómo funciona la asignación automática.
- **Reflexión docente:** El prototipo no es el producto final; es una herramienta de aprendizaje.
- **Pregunta desafío:** ¿cuándo el prototipo puede ser contraproducente?
- **Respuestas posibles:**
 1. Cuando el cliente lo confunde con el producto final.
 2. Cuando se invierte demasiado tiempo en el prototipo.
 3. Cuando no se valida con usuarios reales.
- **Advertencia:** el prototipo debe ser descartable; no convertirlo en el producto sin diseñar.

### Slide 11. Modelo de Prototipación (Flujo)

**Texto visible**

- `Modelo de Prototipación`
- `REQUERIMIENTOS DEL PROTOTIPO`
- `DISEÑO DEL PROTOTIPO`
- `SISTEMA PROTOTIPO`
- `TESTING`
- `REVISIÓN`
- `REQUERIMIENTOS DEL SISTEMA`
- `SISTEMA ENTREGADO`

**Elementos visuales**

- Diagrama de flujo del proceso de prototipación con iteraciones.
- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** El flujo de prototipación es cíclico: se diseña, construye, prueba y repite. El objetivo es refinar los requisitos antes del desarrollo completo.
- **Ejemplos:** **Global Exchange (conductor):** prototipamos la pantalla de cambio, el usuario dice «falta el historial», refrescamos. **Segundo contexto industrial:** en un sistema de turnos, el prototipo puede mostrar cómo se asignan turnos; el usuario puede pedir filtros adicionales.
- **Reflexión docente:** La iteración es clave; cada ciclo reduce la incertidumbre.
- **Pregunta desafío:** ¿cuántas iteraciones son razonables?
- **Respuestas posibles:**
 1. Las necesarias para clarificar requisitos, pero sin caer en perfeccionismo.
 2. Depende de la complejidad y del tiempo disponible.
 3. Siempre con un límite definido para evitar «scope creep».
- **Advertencia:** el prototipo no reemplaza el diseño; lo prepara.

### Slide 12. Modelo de Desarrollo en Fases

**Texto visible**

- `Modelo de Desarrollo en Fases`
- `Hoy, el mercado no acepta grandes retardos.`
- `Una forma de reducirlos es desarrollar en fases.`
- `El sistema se diseña de manera que pueda ser entregado por partes.`
- `Así, el usuario tiene algo de funcionalidad, mientras se desarrolla el resto.`
- `Hay dos sistemas funcionando en paralelo: El de Producción. Usado por el cliente. El Nuevo. Siendo desarrollado.`

**Elementos visuales**

- Título y texto explicativo sobre el modelo de desarrollo en fases.
- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** El desarrollo en fases entrega el sistema en incrementos. El usuario obtiene funcionalidad temprana y puede dar retroalimentación.
- **Ejemplos:** **Global Exchange (conductor):** Fase 1: consulta de tasas. Fase 2: operaciones básicas. Fase 3: reporting avanzado. **Segundo contexto industrial:** en un ERP, Fase 1: inventario. Fase 2: compras. Fase 3: contabilidad.
- **Reflexión docente:** Las fases permiten aprender y ajustar, pero requieren una arquitectura que soporte incrementos.
- **Pregunta desafío:** ¿qué riesgo tiene entregar en fases?
- **Respuestas posibles:**
 1. Si la arquitectura no está bien diseñada, los incrementos pueden ser incompatibles.
 2. El cliente puede presionar por funcionalidades no planificadas.
 3. La integración entre fases puede ser costosa.
- **Advertencia:** las fases no son «prototipos»; cada una debe ser una entrega estable.

### Slide 13. Modelo de Desarrollo en Fases (Ejemplo)

**Texto visible**

- `Modelo de Desarrollo en Fases`
- `* Este valor es aproximado`

**Elementos visuales**

- Tabla o diagrama con ejemplo de avance por fases.
- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** Este ejemplo muestra cómo el avance no es lineal: la fase 2 ya entrega el 60% del sistema.
- **Ejemplos:** **Global Exchange (conductor):** Fase 1: consulta de tasas. Fase 2: operaciones de cambio (60% del valor). Fase 3: reporting y administración. **Segundo contexto industrial:** en un sistema de turnos, Fase 1: visualización de turnos. Fase 2: asignación automática. Fase 3: optimización y reportes.
- **Reflexión docente:** El avance acumulativo permite priorizar lo más valioso primero.
- **Pregunta desafío:** ¿cómo decidir qué funcionalidad va en cada fase?
- **Respuestas posibles:**
 1. Por valor al usuario: lo más crítico primero.
 2. Por dependencias técnicas: lo que otros módulos necesitan.
 3. Por riesgo: lo más incierto se prueba temprano.
- **Advertencia:** los porcentajes son orientativos; dependen del proyecto.

### Slide 14. Modelo en Espiral

**Texto visible**

- `Modelo en Espiral`
- `Se combinan las actividades de desarrollo con Análisis de Riesgo.`
- `El modelo es de tipo iterativo: Planificación, Análisis de Riesgo, Ingeniería, Evaluación, Planificación`
- `En cada iteración, se evalúan las diferentes alternativas y se elige una.`
- `Los gestores del proyecto intentan eliminar o minimizar los riesgos en cada iteración.`

**Elementos visuales**

- Título y descripción del modelo espiral con sus fases.
- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** El modelo espiral combina iteraciones con análisis de riesgo. Cada vuelta produce un prototipo más maduro.
- **Ejemplos:** **Global Exchange (conductor):** cada iteración puede agregar una funcionalidad (consulta, operación, reporting) y evaluar riesgos (regulatorios, técnicos). **Segundo contexto industrial:** en un sistema de salud, cada iteración puede agregar un módulo (pacientes, turnos, facturación) y evaluar riesgos de privacidad.
- **Reflexión docente:** El espiral es poderoso pero complejo; requiere experiencia en gestión de riesgos.
- **Pregunta desafío:** ¿qué tipo de proyecto se beneficia más del espiral?
- **Respuestas posibles:**
 1. Proyectos grandes y complejos con riesgos significativos.
 2. Proyectos donde los requisitos no están claros.
 3. Proyectos donde la calidad es crítica y los errores son costosos.
- **Advertencia:** el espiral no es para todos; su complejidad puede ser excesiva para proyectos pequeños.

### Slide 15. Modelo en Espiral (Visualización)

**Texto visible**

- `Modelo en Espiral`

**Elementos visuales**

- Diagrama visual del modelo espiral (imagen: `assets/modelo-espiral.png`).
- No contiene notas del orador.

**Explicación docente**

- **Desarrollo:** El diagrama espiral muestra iteraciones crecientes con análisis de riesgo en cada vuelta.
- **Reflexión docente:** La espiral visualiza el concepto de iteración con riesgo.
- **Pregunta desafío:** ¿cómo se relaciona el riesgo con la planificación?
- **Respuestas posibles:**
 1. A mayor riesgo, más iteraciones iniciales.
 2. El análisis de riesgo guía la priorización.
 3. Cada iteración reduce la incertidumbre.
- **Advertencia:** el diagrama es una representación conceptual; la práctica varía según el proyecto.

### Slide 16. RUP – Rational Unified Process

**Texto visible**

- `RUP – Rational Unified Process`
- `Corresponde a un framework que puede ser usado para describir procesos de desarrollo específicos`
- `Cada ciclo de vida del software abarca 4 fases en el siguiente orden: concepción/planificación, elaboración, construcción y transición`
- `La esencia de RUP es la iteración, y cada iteración resulta en un incremento del sistema.`

**Elementos visuales**

- Título y descripción del framework RUP.
- No contiene imágenes ni notas del orador.

<p class="reference">Jacobson, I., Booch, G., Rumbaugh, J. The Unified Software Development Process. Addison-Wesley, 1999.</p>

**Explicación docente**

- **Desarrollo:** RUP es un framework iterativo e incremental, orientado a arquitectura y controlado por riesgos.
- **Ejemplos:** **Global Exchange (conductor):** cada fase de RUP puede entregar un incremento del sistema. **Segundo contexto industrial:** en un sistema bancario, RUP permite planificar iteraciones con análisis de riesgo regulatorio.
- **Reflexión docente:** RUP no es un proceso rígido; es un marco adaptable.
- **Pregunta desafío:** ¿cuándo usar RUP vs. Scrum?
- **Respuestas posibles:**
 1. RUP para proyectos grandes con requisitos semi-estables.
 2. Scrum para equipos pequeños con requisitos cambiantes.
 3. Ambos pueden complementarse en organizaciones maduras.
- **Advertencia:** RUP requiere madurez organizacional para implementarse correctamente.

### Slide 17. RUP (Diagrama)

**Texto visible**

- `RUP – Rational Unified Process`

**Elementos visuales**

- Diagrama de proceso RUP (imagen extraída del PPTX: `rup-proceso.png`).
- No contiene notas del orador.

**Explicación docente**

- **Desarrollo:** El diagrama RUP muestra las 4 fases y las disciplinas transversales.
- **Reflexión docente:** RUP integra todas las disciplinas de desarrollo en cada fase.
- **Pregunta desafío:** ¿qué disciplinas son transversales en RUP?
- **Respuestas posibles:**
 1. Gestión de requisitos y diseño.
 2. Implementación y prueba.
 3. Despliegue y gestión de configuración.
- **Advertencia:** el diagrama es una simplificación; RUP es más complejo en la práctica.

### Slide 18. Problemas de los Modelos Tradicionales

**Texto visible**

- `Problemas de los Modelos Tradicionales`
- `Incumplimiento de los plazos de entrega.`
- `Reducción de las funcionalidades previstas inicialmente.`
- `Difícil adaptación a los cambios.`
- `Excesiva documentación.`

**Elementos visuales**

- Título y lista de cuatro problemas.
- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** Los modelos tradicionales tienen problemas comunes: retrasos, recortes, rigidez y burocracia.
- **Ejemplos:** **Global Exchange (conductor):** si el mercado cambia, el modelo tradicional no puede adaptarse rápido. **Segundo contexto industrial:** en un proyecto gubernamental, la documentación extensa puede retrasar la entrega.
- **Reflexión docente:** Estos problemas motivaron el surgimiento de los métodos ágiles.
- **Pregunta desafío:** ¿cuál de estos problemas es más grave?
- **Respuestas posibles:**
 1. Incumplimiento de plazos → pierde credibilidad.
 2. Reducción de funcionalidades → no resuelve la necesidad.
 3. Difícil adaptación → el producto queda obsoleto.
 4. Excesiva documentación → burocracia sin valor.
- **Advertencia:** no todos los proyectos sufren todos estos problemas; depende del contexto.

### Slide 19. Métodos Ágiles (Origen)

**Texto visible**

- `Métodos Ágiles (MAs)`
- `En febrero de 2001, tras una reunión celebrada en Utah-EEUU, nace el término "Ágil", aplicado al desarrollo de software.`
- `En esta reunión participaron un grupo de 17 expertos de la industria del software, incluyendo algunos de los creadores o impulsores de metodologías de software.`
- `Su objetivo fue establecer un manifiesto que reflejara los valores de los métodos ágiles.`

**Elementos visuales**

- Título y texto sobre el origen del manifiesto ágil.
- No contiene imágenes ni notas del orador.

<p class="reference">Beck, K. et al. Manifesto for Agile Software Development. agilemanifesto.org, 2001.</p>

**Explicación docente**

- **Desarrollo:** El Manifiesto Ágil nació en 2001 como respuesta a las limitaciones de los modelos tradicionales.
- **Ejemplos:** **Global Exchange (conductor):** los métodos ágiles permiten adaptarse a cambios en tasas y regulaciones. **Segundo contexto industrial:** en un sistema de turnos, la agilidad permite ajustar prioridades según la demanda.
- **Reflexión docente:** El ágil no es una moda; es una respuesta a problemas reales.
- **Pregunta desafío:** ¿por qué 17 expertos sintieron la necesidad de crear un manifiesto?
- **Respuestas posibles:**
 1. Porque los modelos tradicionales no resolvían todos los problemas.
 2. Porque la industria necesitaba un enfoque más flexible.
 3. Porque la colaboración y la adaptabilidad eran valores olvidados.
- **Advertencia:** el manifiesto es un conjunto de valores, no una metodología específica.

### Slide 20. Métodos Ágiles (Definición)

**Texto visible**

- `Métodos Ágiles`
- `Las Metodologías Ágiles (MAs) son un conjunto de estrategias de desarrollo que promueven prácticas adaptativas, en lugar de predictivas, como las sugeridas por las Metodologías Tradicionales (MTs) de Desarrollo de Software.`
- `Dicho de otra manera, promueven la adaptabilidad a los cambios por sobre el seguimiento estricto de un plan.`

**Elementos visuales**

- Título y definición de metodologías ágiles.
- No contiene imágenes ni notas del orador.

<p class="reference">Pressman, R. Ingeniería del Software: Un enfoque práctico, 7ª ed. McGraw-Hill, 2010. Cap. 2.</p>

**Explicación docente**

- **Desarrollo:** Los MAs promueven adaptabilidad sobre predicción. Son estrategias que responden a los cambios en lugar de seguir un plan rígido.
- **Ejemplos:** **Global Exchange (conductor):** si cambian las regulaciones, el equipo puede ajustar el desarrollo sin rehacer todo el plan. **Segundo contexto industrial:** en un sistema de e-commerce, los cambios en precios o productos se incorporan iteración a iteración.
- **Reflexión docente:** La agilidad no es falta de proceso; es proceso adaptable.
- **Pregunta desafío:** ¿qué diferencia hay entre «adaptarse al cambio» y «no tener plan»?
- **Respuestas posibles:**
 1. Adaptarse implica un marco de trabajo; la falta de plan es caos.
 2. Los MAs tienen roles, actividades y herramientas definidas.
 3. La agilidad requiere disciplina, no improvisación.
- **Advertencia:** la agilidad no elimina la necesidad de planificación; la transforma.

### Slide 21. Manifiesto Ágil

**Texto visible**

- `Métodos Ágiles`
- `Según el manifiesto ágil se valora:`

**Elementos visuales**

- Título e introducción a los valores del manifiesto ágil.
- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** El manifiesto ágil establece 4 valores fundamentales que guían los métodos ágiles.
- **Ejemplos:** **Global Exchange (conductor):** preferimos reunirnos con el usuario que escribir 100 páginas de requisitos. **Segundo contexto industrial:** en un sistema de turnos, preferimos entregar funcionalidad que funcione que documentar todo el diseño.
- **Reflexión docente:** Los valores no son absolutos; son preferencias cuando hay trade-offs.
- **Pregunta desafío:** ¿qué valor les parece más importante y por qué?
- **Respuestas posibles:**
 1. Individuos e interacciones, porque las personas hacen el software.
 2. Software funcionando, porque es la medida de progreso.
 3. Colaboración con el cliente, porque asegura que resolvamos el problema correcto.
 4. Respuesta al cambio, porque el mercado evoluciona.
- **Advertencia:** los valores no eliminan la necesidad de documentación o planificación; los priorizan.

### Slide 22. Individuos e Interacciones

**Texto visible**

- `Métodos Ágiles`
- `Al individuo y las interacciones del equipo de desarrollo sobre el proceso y las herramientas.`
- `La gente es el principal factor de éxito de un proyecto software. Es más importante construir un buen equipo que construir el entorno. Muchas veces se comete el error de construir primero el entorno y esperar que luego se integre el equipo.`

**Elementos visuales**

- Título y texto sobre el valor de individuos e interacciones.
- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** El valor prioritario es las personas y sus interacciones. Un equipo coordinado puede resolver problemas que las herramientas no pueden.
- **Ejemplos:** **Global Exchange (conductor):** un equipo que se comunica bien puede detectar errores de requisitos antes que una herramienta de gestión. **Segundo contexto industrial:** en un sistema de salud, la comunicación entre desarrolladores y médicos es clave para entender necesidades reales.
- **Reflexión docente:** Las herramientas apoyan; las personas deciden.
- **Pregunta desafío:** ¿qué pasa si un equipo tiene las mejores herramientas pero no se comunica?
- **Respuestas posibles:**
 1. Se producen soluciones técnicamente correctas pero que no resuelven el problema.
 2. Se duplica esfuerzo porque no hay coordinación.
 3. Se pierden oportunidades de mejora que solo la colaboración revela.
- **Advertencia:** individuos e interacciones no excluyen herramientas; las complementan.

### Slide 23. Software Funcionando

**Texto visible**

- `Métodos Ágiles`
- `Desarrollar software que funciona más que conseguir una buena documentación.`
- `La regla a seguir es no producir documentos a menos que sean necesarios de forma inmediata para tomar una decisión importante. Estos documentos deben ser breves y centrarse en lo fundamental.`

**Elementos visuales**

- Título y texto sobre el valor de software funcionando.
- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** El software funcionando es la medida de progreso. La documentación tiene valor, pero no es el producto final.
- **Ejemplos:** **Global Exchange (conductor):** preferimos entregar una funcionalidad de cambio que funcione que documentar todo el diseño antes de empezar. **Segundo contexto industrial:** en un sistema de turnos, un prototipo funcionando comunica más que 50 páginas de especificación.
- **Reflexión docente:** La documentación excesiva puede convertirse en burocracia que nadie lee.
- **Pregunta desafío:** ¿qué documentación es realmente necesaria?
- **Respuestas posibles:**
 1. La que ayuda a tomar decisiones importantes.
 2. La que facilita la mantención y evolución del sistema.
 3. La que permite a nuevos miembros del equipo entender el sistema.
- **Advertencia:** no documentar nada es tan peligroso como documentar todo; el equilibrio es clave.

### Slide 24. Colaboración con el Cliente

**Texto visible**

- `Métodos Ágiles`
- `La colaboración con el cliente más que la negociación de un contrato.`
- `Se propone que exista una interacción constante entre el cliente y el equipo de desarrollo. Esta colaboración entre ambos será la que marque la marcha del proyecto y asegure su éxito.`

**Elementos visuales**

- Título y texto sobre la colaboración con el cliente.
- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** La colaboración continua con el cliente es fundamental. El cliente no es un demandante; es un colaborador.
- **Ejemplos:** **Global Exchange (conductor):** el usuario de divisas participa en cada iteración, validando que el sistema resuelve sus necesidades reales. **Segundo contexto industrial:** en un sistema de turnos, los médicos y administradores participan en cada sprint para priorizar funcionalidades.
- **Reflexión docente:** Un contrato sin colaboración puede entregar algo que nadie quiere usar.
- **Pregunta desafío:** ¿qué pasa si el cliente no puede participar activamente?
- **Respuestas posibles:**
 1. Se asigna un representante o proxy del cliente.
 2. Se incrementa la frecuencia de revisión con el cliente disponible.
 3. Se documentan supuestos y se validan temprano.
- **Advertencia:** la colaboración requiere compromiso de ambas partes.

### Slide 25. Respuesta al Cambio

**Texto visible**

- `Métodos Ágiles`
- `Responder a los cambios más que seguir estrictamente un plan.`
- `La habilidad de responder a los cambios que puedan surgir a lo largo del proyecto (cambios en los requisitos, en la tecnología, en el equipo, etc.) determina también el éxito o fracaso del mismo.`
- `Por lo tanto, la planificación no debe ser rígida, sino que debe permitir la adaptación.`

**Elementos visuales**

- Título y texto sobre la respuesta al cambio.
- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** La capacidad de adaptación es clave en entornos cambiantes. Un plan rígido puede convertirse en una camisa de fuerza.
- **Ejemplos:** **Global Exchange (conductor):** si cambian las regulaciones financieras, el equipo puede ajustar el desarrollo sin rehacer todo el plan. **Segundo contexto industrial:** en un sistema de e-commerce, los cambios en precios o productos se incorporan sin esperar al siguiente release.
- **Reflexión docente:** El plan es una guía, no una camisa de fuerza.
- **Pregunta desafío:** ¿cómo planificar sin ser rígido?
- **Respuestas posibles:**
 1. Planificar en iteraciones cortas con objetivos claros.
 2. Mantener un backlog priorizado que se ajuste con cada iteración.
 3. Aceptar que el plan inicial es una aproximación que se refinará.
- **Advertencia:** la respuesta al cambio no es improvisación; es adaptación dentro de un marco.

### Slide 26. Agilidad vs. Proceso

**Texto visible**

- `Agilidad vs. Proceso`
- `En los últimos años distintos trabajos han investigado la relación entre modelos de procesos y métodos ágiles, observando lo siguiente`
- `El CMM/CMMI del SEI y XP pueden complementarse (enfocando aspectos de gestión vs. técnicos)`
- `Métodos ágiles coinciden con la esencia del mejoramiento de procesos bajo un enfoque de equipo`
- `Scrum y CMM/CMMI son compatibles`
- `El punto de equilibrio entre ambos enfoques permite maximizar beneficios`

**Elementos visuales**

- Título y texto sobre la relación entre agilidad y proceso.
- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** La agilidad y el proceso no son opuestos; son complementarios. CMM/CMMI y XP pueden coexistir.
- **Ejemplos:** **Global Exchange (conductor):** usar Scrum para iterar pero mantener documentación mínima de arquitectura. **Segundo contexto industrial:** en una empresa que usa CMMI, puede adoptar prácticas ágiles en equipos de desarrollo sin cambiar todo el marco organizacional.
- **Reflexión docente:** El equilibrio es contextual; no hay fórmula universal.
- **Pregunta desafío:** ¿cómo encontrar el equilibrio adecuado?
- **Respuestas posibles:**
 1. Evaluar el contexto: madurez del equipo, complejidad del proyecto, regulaciones.
 2. Experimentar con prácticas ágiles en un entorno controlado.
 3. Medir resultados y ajustar gradualmente.
- **Advertencia:** no se puede copiar un enfoque de otra organización sin adaptarlo al contexto propio.

### Slide 27. Interrogantes

**Texto visible**

- `Interrogantes`
- `¿Resuelven los métodos ágiles todos los problemas?`
- `¿Son aplicables a todo tipo de desarrollo?`
- `¿Cuánta agilidad? ¿Cuánto proceso?`
- `Desafío: encontrar un punto de equilibrio, un balance adecuado`
- `Desarrollos potenciales`
- `Modelos ágiles balanceados para migración a la práctica industrial`
- `Mecanismos y herramientas para la integración de procesos`

**Elementos visuales**

- Título y lista de interrogantes sobre métodos ágiles.
- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** Los métodos ágiles no son la solución universal. El desafío es encontrar equilibrio entre agilidad y proceso.
- **Ejemplos:** **Global Exchange (conductor):** ¿es ágil para un sistema regulatorio? Depende del nivel de documentación requerido. **Segundo contexto industrial:** en un sistema de aviación, la agilidad puede ser limitada por regulaciones estrictas.
- **Reflexión docente:** La profesionalidad está en elegir el enfoque adecuado, no en defender uno por defecto.
- **Pregunta desafío:** ¿cuándo NO usar métodos ágiles?
- **Respuestas posibles:**
 1. Cuando los requisitos son estables y las regulaciones exigen documentación extensa.
 2. Cuando el equipo no tiene experiencia o compromiso con la agilidad.
 3. Cuando el proyecto requiere certificaciones o auditorías específicas.
- **Advertencia:** no hay respuesta única; depende del contexto.

### Slide 28. Metodologías Ágiles (Lista)

**Texto visible**

- `Metodologías Ágiles`
- `Adaptive Software Development (ASD)`
- `Programación Extrema (XP)`
- `SCRUM`

**Elementos visuales**

- Lista de tres metodologías ágiles principales.
- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** Las tres metodologías ágiles más conocidas: ASD, XP y Scrum. Cada una tiene fortalezas distintas.
- **Ejemplos:** **Global Exchange (conductor):** Scrum para gestión, XP para prácticas de código, ASD para filosofía de desarrollo. **Segundo contexto industrial:** en una startup, puede usarse una combinación de las tres según la etapa del proyecto.
- **Reflexión docente:** Cada metodología aporta algo distinto; se pueden combinar.
- **Pregunta desafío:** ¿qué diferencia hay entre las tres?
- **Respuestas posibles:**
 1. ASD es más filosofía que proceso detallado.
 2. XP se centra en prácticas técnicas de desarrollo.
 3. Scrum se centra en gestión de trabajo en equipo.
- **Advertencia:** no se deben mezclar sin entender cada metodología.

### Slide 29. ASD

**Texto visible**

- `Adaptive Software Development (ASD)`
- `Desarrollado por J. Highsmith en el año 2000.`
- `La idea fundamental del ASD es: "Balancearse en el borde del Caos"`
- `Dicho de otra manera, buscar un equilibrio entre crear un ambiente que favorezca la creatividad e innovación, y administrar lo que se está haciendo.`

**Elementos visuales**

- Título, autor, año y filosofía del ASD.
- No contiene imágenes ni notas del orador.

<p class="reference">Highsmith, J. Adaptive Software Development: A Collaborative Approach to Managing Complex Systems. Addison-Wesley, 2000.</p>

**Explicación docente**

- **Desarrollo:** ASD se basa en equilibrar creatividad y estructura. La filosofía es "balancearse en el borde del caos".
- **Ejemplos:** **Global Exchange (conductor):** permitir innovación en la interfaz pero mantener reglas de negocio claras. **Segundo contexto industrial:** en un equipo de innovación, ASD permite experimentar sin perder el foco en el producto.
- **Reflexión docente:** El caos controlado puede ser productivo cuando hay objetivos claros.
- **Pregunta desafío:** ¿qué significa "borde del caos" en la práctica?
- **Respuestas posibles:**
 1. Tener suficiente estructura para no perder el rumbo.
 2. Tener suficiente libertad para innovar.
 3. Encontrar el punto donde la creatividad se convierte en productividad.
- **Advertencia:** ASD es más una filosofía que un conjunto de prácticas definidas.

### Slide 30. ASD (Diagrama)

**Texto visible**

- `Proceso del ASD`

**Elementos visuales**

- Diagrama de proceso ASD (imagen extraída del PPTX: `asd-proceso.png`).
- No contiene notas del orador.

**Explicación docente**

- **Desarrollo:** El diagrama ASD muestra el ciclo de Speculación, Colaboración y Aprendizaje.
- **Reflexión docente:** ASD es más una filosofía que un proceso detallado; sus prácticas deben complementarse con otras metodologías.
- **Pregunta desafío:** ¿cómo se aplicaría ASD en un proyecto real?
- **Respuestas posibles:**
 1. Specular sobre qué construir, colaborar en equipo, aprender de cada iteración.
 2. Mantener flexibilidad para cambiar de dirección según la evidencia.
 3. Complementar con prácticas técnicas de XP o gestión de Scrum.
- **Advertencia:** ASD no especifica prácticas concretas; necesita complementación.

### Slide 31. Uso actual del ASD

**Texto visible**

- `Uso actual del ASD`
- `Casi no es utilizado porque no se especifican en detalle las pautas (prácticas de desarrollo y gestión) que deben seguirse para su uso.`
- `ASD puede ser utilizado, pero debe complementarse con otra metodología mejor definida.`
- `Sin embargo, ASD provee conceptos sobre la filosofía misma de las MAs, con ideas importantes sobre cómo enfocar el desarrollo.`

**Elementos visuales**

- Título y texto sobre el uso actual del ASD.
- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** ASD es más filosofía que proceso detallado. No se utiliza solo porque falta especificación de prácticas.
- **Ejemplos:** **Global Exchange (conductor):** usar filosofía ASD pero complementar con Scrum para gestión y XP para código. **Segundo contexto industrial:** en una empresa innovadora, ASD puede guiar la cultura mientras Scrum organiza el trabajo.
- **Reflexión docente:** ASD aporta ideas valiosas, pero no es suficiente solo.
- **Pregunta desafío:** ¿qué aporta ASD que otras metodologías no tienen?
- **Respuestas posibles:**
 1. La filosofía de equilibrar creatividad y estructura.
 2. El enfoque en adaptación continua.
 3. La aceptación de la incertidumbre como parte del desarrollo.
- **Advertencia:** ASD es un complemento, no un reemplazo de otras metodologías.

### Slide 32. XP (Introducción)

**Texto visible**

- `Programación Extrema (XP)`
- `Desarrollado por K. Beck en 1999.`
- `Probablemente es la metodología ágil más conocida y utilizada en la actualidad.`
- `XP es un conjunto de prácticas ya conocidas, pero combinadas de manera innovadora para lograr una nueva metodología.`
- `Se la conoce como "Extrema" por el hecho de llevar cada una de sus prácticas al extremo de su recomendación.`

**Elementos visuales**

- Título, autor, año y descripción de XP.
- No contiene imágenes ni notas del orador.

<p class="reference">Beck, K. Extreme Programming Explained: Embrace Change. Addison-Wesley, 1999.</p>

**Explicación docente**

- **Desarrollo:** XP es la metodología ágil más conocida y practicada. Combina prácticas conocidas de forma innovadora.
- **Ejemplos:** **Global Exchange (conductor):** usar XP para desarrollo de código con testing continuo y programación en parejas. **Segundo contexto industrial:** en un equipo de desarrollo web, XP permite entregar funcionalidad de calidad rápidamente.
- **Reflexión docente:** XP es pragmático: combina prácticas conocidas de forma efectiva.
- **Pregunta desafío:** ¿por qué se llama "Extrema"?
- **Respuestas posibles:**
 1. Porque lleva cada práctica al extremo de su recomendación.
 2. Porque combina múltiples prácticas de forma intensiva.
 3. Porque busca la máxima calidad posible en cada aspecto.
- **Advertencia:** XP requiere disciplina y compromiso del equipo.

### Slide 33. XP (Diagrama)

**Texto visible**

- `Programación Extrema (XP)`

**Elementos visuales**

- Diagrama de proceso XP (imagen extraída del PPTX: `xp-proceso.png`).
- No contiene notas del orador.

**Explicación docente**

- **Desarrollo:** El diagrama XP muestra las prácticas fundamentales y su relación.
- **Reflexión docente:** XP se centra en la calidad del código y la colaboración del equipo.
- **Pregunta desafío:** ¿cuáles son las prácticas más importantes de XP?
- **Respuestas posibles:**
 1. Programación en parejas y testing continuo.
 2. Integración continua y refactorización.
 3. Diseño simple y propiedad colectiva del código.
- **Advertencia:** el diagrama es una simplificación; XP tiene muchas más prácticas.

### Slide 34. Prácticas de XP (1)

**Texto visible**

- `Prácticas de Programación Extrema`

**Elementos visuales**

- Lista de prácticas de XP (primera parte).
- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** XP define prácticas concretas para mejorar la calidad: programación en parejas, diseño simple, refactorización, testing continuo.
- **Ejemplos:** **Global Exchange (conductor):** programación en parejas para lógica de cambio de divisas, testing continuo para validar reglas de negocio. **Segundo contexto industrial:** en un equipo de desarrollo móvil, las prácticas de XP permiten entregar actualizaciones frecuentes con calidad.
- **Reflexión docente:** Las prácticas de XP son aplicables incluso fuera de XP.
- **Pregunta desafío:** ¿qué práctica les parece más beneficiosa?
- **Respuestas posibles:**
 1. Testing continuo, porque detecta errores temprano.
 2. Programación en parejas, porque mejora la calidad del código.
 3. Refactorización, porque mantiene el código limpio y mantenible.
- **Advertencia:** las prácticas requieren compromiso y disciplina.

### Slide 35. Prácticas de XP (2)

**Texto visible**

- `Prácticas de Programación Extrema`

**Elementos visuales**

- Lista de prácticas de XP (segunda parte).
- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** Más prácticas XP: integración continua, propiedad colectiva, código estándar, sistema metafórico.
- **Ejemplos:** **Global Exchange (conductor):** integración continua para detectar errores temprano, propiedad colectiva para que cualquier desarrollador pueda mejorar el código. **Segundo contexto industrial:** en un equipo distribuido, el código estándar y la integración continua son fundamentales.
- **Reflexión docente:** La propiedad colectiva reduce puntos ciegos y dependencias individuales.
- **Pregunta desafío:** ¿qué pasa si nadie quiere compartir la propiedad del código?
- **Respuestas posibles:**
 1. Se crea dependencia de personas clave.
 2. Se dificulta la mantención y evolución del sistema.
 3. Se pierden oportunidades de mejora por conocimiento disperso.
- **Advertencia:** la propiedad colectiva requiere confianza y responsabilidad compartida.

### Slide 36. Uso actual de XP

**Texto visible**

- `Uso actual de XP`
- `El 38% del mercado "ágil" utiliza XP. Esto es gracias a que tiene bien definidas sus prácticas a lo largo de todo el proceso de desarrollo.`
- `En la Agile Alliance se puede apreciar en el grupo de usuarios de MAs que existe una amplia mayoría de usuarios de XP.`

**Elementos visuales**

- Título y estadísticas de uso de XP.
- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** XP es la metodología ágil más utilizada en el mercado por sus prácticas bien definidas.
- **Ejemplos:** **Global Exchange (conductor):** muchas empresas usan XP para desarrollo de software crítico donde la calidad es esencial. **Segundo contexto industrial:** en una consultancy de desarrollo, XP es el estándar por la previsibilidad de sus resultados.
- **Reflexión docente:** La popularidad de XP se debe a su pragmatismo y resultados medibles.
- **Pregunta desafío:** ¿por qué XP es más popular que otras metodologías ágiles?
- **Respuestas posibles:**
 1. Porque tiene prácticas concretas y bien definidas.
 2. Porque produce resultados medibles en calidad y productividad.
 3. Porque es fácil de aprender y aplicar en equipos pequeños.
- **Advertencia:** la popularidad no garantiza que sea la mejor opción para todos los contextos.

### Slide 37. SCRUM (Introducción)

**Texto visible**

- `SCRUM`
- `La metodología SCRUM es la más utilizada por los equipos que apuestan por las metodologías ágiles`
- `Scrum es una manera de trabajar en equipo donde el resultado se produce de forma incremental, este resultado es un entregable`
- `Se establecen periodos cortos de trabajo en los que se sigue un mismo patrón`

**Elementos visuales**

- Título y descripción de Scrum.
- No contiene imágenes ni notas del orador.

<p class="reference">Schwaber, K., Sutherland, J. The Scrum Guide. Scrum.org, 2020.</p>

**Explicación docente**

- **Desarrollo:** Scrum es el marco ágil más utilizado para gestión de proyectos. Se basa en iteraciones cortas (sprints) y roles definidos.
- **Ejemplos:** **Global Exchange (conductor):** usar Scrum para gestionar entregas incrementales de funcionalidades de cambio. **Segundo contexto industrial:** en un equipo de desarrollo de software empresarial, Scrum permite planificar y ejecutar en ciclos de 2 semanas.
- **Reflexión docente:** Scrum no define cómo programar, sino cómo organizar el trabajo.
- **Pregunta desafío:** ¿por qué Scrum es tan popular?
- **Respuestas posibles:**
 1. Porque es simple de entender y aplicar.
 2. Porque produce resultados visibles en cada sprint.
 3. Porque crea ritmo y previsibilidad en el equipo.
- **Advertencia:** Scrum requiere compromiso de todos los roles para funcionar.

### Slide 38. SCRUM (Actividades)

**Texto visible**

- `SCRUM - ACTIVIDADES`
- `Sprint`
- `Sprint planing`
- `Daily`
- `Sprint Review`
- `Sprint Retrospective`

**Elementos visuales**

- Lista de cinco actividades de Scrum.
- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** Scrum define 5 actividades clave: Sprint, Planning, Daily, Review y Retrospective. Cada una tiene un propósito distinto.
- **Ejemplos:** **Global Exchange (conductor):** cada sprint entrega funcionalidad de cambio de divisas; el Daily sincroniza al equipo; la Review valida con el cliente. **Segundo contexto industrial:** en un equipo de desarrollo web, las actividades de Scrum crean ritmo y visibilidad.
- **Reflexión docente:** Las actividades de Scrum crean ritmo y visibilidad del progreso.
- **Pregunta desafío:** ¿qué actividad es más importante y por qué?
- **Respuestas posibles:**
 1. Sprint Planning, porque define qué se va a construir.
 2. Daily, porque mantiene al equipo sincronizado.
 3. Sprint Review, porque valida con el cliente.
 4. Retrospective, porque mejora el proceso continuamente.
- **Advertencia:** todas las actividades son importantes; omitir una debilita el marco.

### Slide 39. SCRUM (Herramientas)

**Texto visible**

- `SCRUM - HERRAMIENTAS`
- `Product Backlog`
- `Sprint Backlog`
- `Burn Down`

**Elementos visuales**

- Lista de tres herramientas de Scrum.
- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** Scrum usa tres herramientas principales: Product Backlog (lista priorizada), Sprint Backlog (trabajo del sprint) y Burn Down (gráfico de progreso).
- **Ejemplos:** **Global Exchange (conductor):** el Product Backlog lista todas las funcionalidades de cambio priorizadas por valor; el Burn Down muestra el avance diario. **Segundo contexto industrial:** en un equipo de desarrollo, el Sprint Backlog contiene las tareas del sprint actual.
- **Reflexión docente:** Las herramientas de Scrum hacen visible el progreso y las prioridades.
- **Pregunta desafío:** ¿qué pasa si el Product Backlog no está priorizado?
- **Respuestas posibles:**
 1. El equipo trabaja en lo que parece urgente, no en lo más valioso.
 2. Se pierde tiempo en funcionalidades de bajo impacto.
 3. El cliente pierde confianza en el equipo.
- **Advertencia:** las herramientas sin disciplina no funcionan.

### Slide 40. SCRUM (Roles)

**Texto visible**

- `SCRUM - ROLES`
- `Product Owner`
- `Scrum Master`
- `Team (equipo de desarrollo)`

**Elementos visuales**

- Lista de tres roles de Scrum.
- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** Scrum define tres roles: Product Owner (define qué construir), Scrum Master (facilita y remueve obstáculos) y Team (construye el producto).
- **Ejemplos:** **Global Exchange (conductor):** el Product Owner prioriza funcionalidades de cambio; el Scrum Master facilita las reuniones; el Team implementa. **Segundo contexto industrial:** en un equipo de desarrollo, cada rol tiene responsabilidades claras que evitan conflictos.
- **Reflexión docente:** Los roles de Scrum crean claridad y responsabilidad.
- **Pregunta desafío:** ¿qué pasa si el Product Owner no está disponible?
- **Respuestas posibles:**
 1. El equipo pierde dirección y prioridades.
 2. Se toman decisiones sin contexto del negocio.
 3. El sprint puede producir algo que nadie necesita.
- **Advertencia:** todos los roles son esenciales; no se pueden omitir.

### Slide 41. SCRUM (Diagrama)

**Texto visible**

- (Sin título visible en el slide)

**Elementos visuales**

- Diagrama de proceso Scrum (imagen extraída del PPTX: `comparacion-procesos.png`).
- No contiene notas del orador.

**Explicación docente**

- **Desarrollo:** El diagrama muestra el ciclo de Scrum con roles, actividades y herramientas.
- **Reflexión docente:** Scrum es un marco completo para gestión ágil que integra roles, actividades y herramientas.
- **Pregunta desafío:** ¿cómo se integran los roles, actividades y herramientas en Scrum?
- **Respuestas posibles:**
 1. El Product Owner llena el Product Backlog.
 2. El Team selecciona trabajo del Sprint Backlog en el Planning.
 3. El Scrum Master facilita las actividades y remueve obstáculos.
 4. El Burn Down muestra el avance del Sprint.
- **Advertencia:** el diagrama es una simplificación; Scrum tiene más matices en la práctica.

### Slide 42. Uso actual de SCRUM

**Texto visible**

- `Uso actual de SCRUM`
- `Después de XP, Scrum es uno de los enfoques ágiles más utilizados, pero aún lejos de XP.`
- `A nivel de investigación, se están realizando esfuerzos para integrar XP y Scrum, argumentando que Scrum provee un marco de gestión del proyecto sobre las prácticas bien definidas de XP.`

**Elementos visuales**

- Título y texto sobre el uso actual de Scrum.
- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** Scrum y XP se complementan: Scrum para gestión, XP para prácticas de código.
- **Ejemplos:** **Global Exchange (conductor):** usar Scrum para sprints y XP para programación en parejas y testing continuo. **Segundo contexto industrial:** en una empresa de desarrollo, la combinación Scrum+XP es muy efectiva para entregar calidad rápidamente.
- **Reflexión docente:** La integración de Scrum y XP es un área activa de investigación y práctica.
- **Pregunta desafío:** ¿por qué se buscan combinar Scrum y XP?
- **Respuestas posibles:**
 1. Scrum aporta gestión; XP aporta prácticas técnicas.
 2. Juntos cubren más aspectos del desarrollo de software.
 3. La combinación produce resultados mejores que cada uno por separado.
- **Advertencia:** combinar metodologías requiere entender cada una por separado.

### Slide 43. Ventajas de las MAs

**Texto visible**

- `Ventajas de las MAs`
- `Iteraciones en ciclos cortos que permiten correcciones y verificaciones más rápidamente.`
- `Límites de tiempo para cada ciclo de dos a ocho semanas.`
- `Adaptable al surgimiento de nuevos riesgos.`
- `Orientación hacia las personas.`
- `Estilo de trabajo en equipo.`

**Elementos visuales**

- Título y lista de cinco ventajas de las MAs.
- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** Los MAs tienen ventajas claras: iteraciones cortas, adaptabilidad, orientación a personas y trabajo en equipo.
- **Ejemplos:** **Global Exchange (conductor):** entregar funcionalidad de cambio cada 2 semanas, adaptarse a cambios de regulaciones, trabajar en equipo con el usuario. **Segundo contexto industrial:** en un equipo de desarrollo ágil, las ventajas se traducen en mayor satisfacción del cliente y mejor calidad.
- **Reflexión docente:** Las ventajas son reales, pero requieren disciplina y compromiso.
- **Pregunta desafío:** ¿cuál es la ventaja más importante?
- **Respuestas posibles:**
 1. Iteraciones cortas, porque permiten aprender rápido.
 2. Adaptabilidad, porque el mercado cambia constantemente.
 3. Orientación a personas, porque el software lo hacen las personas.
- **Advertencia:** las ventajas no se obtienen automáticamente; requieren práctica.

### Slide 44. Desventajas de las MAs

**Texto visible**

- `Desventajas de las MAs`
- `Su filosofía de poder adaptarse al cambio en vez de seguir estrictamente un plan, puede llevar al caos en el proceso de desarrollo.`
- `Difícil de mantener el interés de los clientes que participan en el proceso de desarrollo.`
- `Definir las prioridades de los cambios pueden ser difíciles de establecer cuando los cambios son muchos y se superponen.`
- `No es adecuado para proyectos con requisitos muy estables o con restricciones de documentación.`

**Elementos visuales**

- Título y lista de cuatro desventajas de las MAs.
- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** Los MAs también tienen desventajas: riesgo de caos, dificultad para mantener interés del cliente, priorización compleja, no apto para requisitos estables.
- **Ejemplos:** **Global Exchange (conductor):** si el cliente no participa activamente, el ágil puede perder el rumbo. **Segundo contexto industrial:** en un proyecto gubernamental con requisitos estables, un enfoque ágil puede ser ineficiente.
- **Reflexión docente:** Los MAs no son para todos los contextos; conocer sus limitaciones es clave.
- **Pregunta desafío:** ¿cómo mitigar estas desventajas?
- **Respuestas posibles:**
 1. Establecer un marco claro de trabajo (como Scrum) para evitar el caos.
 2. Comprometer al cliente con reuniones regulares y revisiones.
 3. Usar herramientas de priorización como el Product Backlog.
 4. Combinar con prácticas documentales cuando sea necesario.
- **Advertencia:** las desventajas no invalidan los MAs; indican cuándo usarlos con precaución.

### Slide 45. Métodos Ágiles (Síntesis)

**Texto visible**

- `Métodos Ágiles`

**Elementos visuales**

- Slide de síntesis o cierre del bloque de métodos ágiles.
- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** Los métodos ágiles son una respuesta válida pero no universal a las limitaciones de los modelos tradicionales.
- **Ejemplos:** **Global Exchange (conductor):** usar ágil para funcionalidades nuevas, tradicional para arquitectura estable. **Segundo contexto industrial:** en una empresa madura, combinar ágil y tradicional según el contexto del proyecto.
- **Reflexión docente:** La profesionalidad está en elegir el enfoque adecuado para cada situación.
- **Pregunta desafío:** ¿cómo decidir qué enfoque usar?
- **Respuestas posibles:**
 1. Analizar el contexto: requisitos, equipo, regulaciones, plazos.
 2. Experimentar con ambos enfoques y medir resultados.
 3. Consultar con expertos y aprender de la experiencia.
- **Advertencia:** no hay respuesta única; depende del proyecto y la organización.

### Slide 46. Conclusiones

**Texto visible**

- `Conclusiones`
- `Las ventajas de las MAs proveen un marco de trabajo aplicable a entornos de desarrollo de software que no tienen definidos sus procesos (o lo tienen vagamente), en el área de desarrollo mismo como en el área de aseguramiento de la calidad del producto.`
- `Como las MAs se ajustan a sistemas de pequeño y mediano tamaño, pueden ser una buena alternativa para organizaciones que recién inician procesos de desarrollo de software.`

**Elementos visuales**

- Título y texto de conclusiones.
- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** Las conclusiones resumen los aportes de los MAs: marco aplicable, bueno para organizaciones en maduración, adecuado para proyectos de pequeño y mediano tamaño.
- **Ejemplos:** **Global Exchange (conductor):** el equilibrio entre ágil y tradicional es clave para el éxito del proyecto. **Segundo contexto industrial:** una startup puede beneficiarse mucho de los MAs por su flexibilidad y rapidez.
- **Reflexión docente:** La unidad muestra que no hay respuestas absolutas; la profesionalidad está en adaptar el enfoque al contexto.
- **Pregunta desafío:** ¿qué llevarían de esta unidad a su práctica profesional?
- **Respuestas posibles:**
 1. Conocer ambos enfoques para elegir el adecuado.
 2. Entender que la agilidad requiere disciplina.
 3. Valorar la colaboración y la adaptabilidad.
- **Advertencia:** las conclusiones son generales; cada proyecto requiere análisis específico.

### Slide 47. Cierre

**Texto visible**

- `PREGUNTAS`

**Elementos visuales**

- Slide de cierre simple.
- No contiene imágenes ni notas del orador.

**Explicación docente**

- **Desarrollo:** Cierre de la clase y apertura a preguntas.
- **Ejemplos:** **Global Exchange (conductor):** ¿qué modelo usarían para el sistema de cambio de divisas? **Segundo contexto industrial:** ¿cómo aplicarían lo aprendido en un proyecto real?
- **Reflexión docente:** Las preguntas revelan qué conceptos necesitan refuerzo.
- **Pregunta desafío:** ¿qué duda les queda después de esta clase?
- **Respuestas posibles:**
 1. ¿Cuándo usar un modelo u otro?
 2. ¿Cómo implementar Scrum o XP en la práctica?
 3. ¿Cómo equilibrar agilidad y proceso?
- **Advertencia:** las preguntas son oportunidades de aprendizaje; no las dejen pasar.

---

## Checklist de regeneración

- [ ] Archivo nombrado como `guia-slides-clase-2.md`
- [ ] Mantener exactamente 47 slides y el orden 1–47.
- [ ] Conservar títulos, listas, definiciones, porcentajes, referencias y citas del inventario.
- [ ] Distinguir visualmente títulos, texto de contenido, jerarquías y bloques de citas.
- [ ] Slides 15, 17, 30, 33, 41: usar imágenes del PPTX o assets (`modelo-espiral.png`, `rup-proceso.png`, `asd-proceso.png`, `xp-proceso.png`, `comparacion-procesos.png`).
- [ ] Slide 1: nombre del profesor "Prof. Lic. Guillermo Jacobo González Rodas Mst. PMP" (no "Prof. Ing. Julia Talavera").
- [ ] Slides 6, 16, 19, 20, 29, 32, 37: incluir referencias bibliográficas.
- [ ] Logo institucional: `assets/fpuna_logo_institucional.svg`.
- [ ] No publicar datos sensibles en HTML, CSS, JavaScript, Markdown versionado ni capturas públicas.
- [ ] No agregar notas del orador si la fuente no contiene notas por slide.
- [ ] Revisar en una exportación o render final que no se corte texto.

## Verificación de fuente

La guía se construyó leyendo el paquete OOXML del PPTX: `ppt/presentation.xml`, `ppt/_rels/presentation.xml.rels`, `ppt/slides/slide1.xml` a `ppt/slides/slide47.xml`, sus relaciones y `ppt/media/`. La revisión del paquete no encontró `ppt/notesSlides/`, por lo que no hay notas de orador adicionales que incorporar.
