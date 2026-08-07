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
- **Explicación docente:** Presentar el foco de la unidad: modelos de desarrollo y desarrollo rápido del software.

### Slide 2 — Objetivos
- **Texto visible:** Entender las diferencias entre métodos tradicionales y ágiles. Conocer principios, prácticas y limitaciones de los métodos ágiles. Entender cómo un enfoque iterativo e incremental conduce a una entrega más rápida.
- **Visual:** Tres objetivos consecutivos.
- **Explicación docente:** Leer los tres resultados como contrato de la clase y retomarlos en el cierre.

### Slide 3 — Contenido
- **Texto visible:** Introducción; Características; Manifiesto ágil; Principales metodologías ágiles: Adaptive Software Development (ASD), Scrum, XP.
- **Visual:** Mapa de cinco bloques temáticos.
- **Explicación docente:** Anticipar el recorrido desde el contexto hasta las tres metodologías principales.

### Slide 4 — Ingeniería de Software
- **Texto visible:** La calidad del software, las metodologías y la madurez de los entornos de desarrollo siguen siendo temas de discusión y estudio. Objetivos: maximizar calidad, maximizar productividad, minimizar riesgos.
- **Visual:** Triada calidad-productividad-riesgo.
- **Explicación docente:** Enmarcar la unidad como respuesta a problemas persistentes de producción, no como una colección de recetas.

### Slide 5 — Ingeniería de Software: implicancias
- **Texto visible:** Constructores básicos más poderosos; mejores técnicas de control de calidad; mejores herramientas y métodos. Todo en la forma de procesos adecuados al tipo de problema y que permitan gestionar los principales riesgos.
- **Visual:** Capas de capacidades que convergen en procesos adecuados.
- **Explicación docente:** Relacionar herramientas y técnicas con la necesidad de un proceso ajustado al problema.

### Slide 6 — Dificultades en producción de software
- **Texto visible:** Esencia: complejidad, conformidad, necesidad de cambios, invisibilidad.
- **Visual:** Cuatro tensiones alrededor de la producción.
- **Explicación docente:** Explicar que estas dificultades son propias del software y justifican estudiar modelos de proceso.

### Slide 7 — Proceso de Software
- **Texto visible:** “Conjunto relacionado de actividades y tareas implicadas en el desarrollo y evolución de un sistema software” (Sommerville).
- **Visual:** Cita destacada con atribución.
- **Explicación docente:** Fijar la definición operativa de proceso antes de comparar modelos.

### Slide 8 — Modelos de Procesos de Software
- **Texto visible:** Modelos Tradicionales (MTs): Cascada, Prototipación, Desarrollo en Fases, Espiral, RUP. Métodos Ágiles (MAs): ASD, Scrum, XP.
- **Visual:** Dos familias enfrentadas.
- **Explicación docente:** Diferenciar la familia tradicional de la ágil y ubicar los modelos que se verán.

### Slide 9 — Modelo en Cascada
- **Texto visible:** Es el más antiguo; debe completarse un estado antes del siguiente; ayuda a visualizar qué hacer; su principal problema es que no refleja la realidad. Etapas: análisis de requerimientos, diseño del sistema, diseño de programas, codificación, testing unitario e integrado, testing del sistema, testing de aceptación, operación y mantención.
- **Visual:** Flujo lineal de nueve etapas.
- **Explicación docente:** Mostrar la secuencia como una planificación ordenada y señalar la crítica explícita de la fuente.

### Slide 10 — Modelo en Cascada: en la práctica
- **Texto visible:** “En la práctica…” y las etapas: análisis de requerimientos, diseño del sistema, diseño de programas, codificación, testing unitario e integrado, testing del sistema, testing de aceptación, operación y mantención.
- **Visual:** El flujo lineal retorna visualmente hacia etapas anteriores para representar la práctica.
- **Explicación docente:** Contrastar el modelo ideal con la realidad de retrocesos y ajustes, sin agregar etapas nuevas.

### Slide 11 — Modelo de Prototipación
- **Texto visible:** Permite la construcción rápida del sistema o parte de éste. Usuario y desarrollador tienen una visión común. Se reduce el riesgo y la incertidumbre.
- **Visual:** Tres beneficios conectados a un prototipo.
- **Explicación docente:** Presentar el prototipo como instrumento de aprendizaje compartido y reducción de incertidumbre.

### Slide 12 — Modelo de Prototipación: flujo
- **Texto visible:** Requerimientos del prototipo; diseño del prototipo; sistema prototipo; testing; revisión (repetida); requerimientos del sistema; sistema entregado.
- **Visual:** Ciclo de prototipo y revisión que desemboca en el sistema entregado.
- **Explicación docente:** Destacar que las revisiones alimentan la maduración de requerimientos antes de la entrega.

### Slide 13 — Modelo de Desarrollo en Fases
- **Texto visible:** El valor es aproximado. Hoy el mercado no acepta grandes retardos. Desarrollar en fases reduce los retardos; el sistema puede entregarse por partes. El usuario tiene funcionalidad mientras se desarrolla el resto. Sistemas en producción y desarrollo funcionan en paralelo.
- **Visual:** Dos carriles: producción para el cliente y desarrollo para la siguiente versión.
- **Explicación docente:** Explicar la entrega parcial y la convivencia entre versión operativa y próxima versión.

### Slide 14 — Modelo de Desarrollo en Fases: versiones
- **Texto visible:** Desarrolladores: construir versión 1, construir versión 2, construir versión 3. Usuarios: usar versión 1, usar versión 2, usar versión 3. Sistemas en desarrollo y sistemas en producción/operación.
- **Visual:** Dos líneas temporales paralelas con tres versiones.
- **Explicación docente:** Mostrar cómo el desarrollo incremental permite que usuarios y desarrolladores avancen en paralelo.

### Slide 15 — Modelo en Espiral
- **Texto visible:** Combina actividades de desarrollo con análisis de riesgo. Es iterativo: planificación, análisis de riesgo, ingeniería, evaluación. En cada iteración se evalúan alternativas y se elige una; los gestores intentan eliminar o minimizar el riesgo.
- **Visual:** Espiral/ciclo de cuatro estaciones.
- **Explicación docente:** Asociar cada vuelta con decisiones y reducción de riesgo, sin convertir el esquema en una métrica cuantitativa.

### Slide 16 — Modelo en Espiral: esquema de Boehm
- **Texto visible:** Recolección de requerimientos y planificación inicial; planificación basada en comentarios del cliente; evaluación del cliente; análisis de riesgo basado en requerimientos iniciales y reacción del cliente; prototipo inicial, prototipo del siguiente nivel, sistema de ingeniería; ingeniería, evaluación del cliente, planificación, análisis de riesgo, decisión de seguir/no seguir. Boehm (1986).
- **Visual:** Espiral con puntos de decisión y prototipos.
- **Explicación docente:** Leer la espiral como un ciclo de aprendizaje con cliente, riesgo y decisión explícita de continuar.

### Slide 17 — RUP
- **Texto visible:** Rational Unified Process. Es un framework para describir procesos específicos. Cada ciclo abarca cuatro fases: concepción/planificación, elaboración, construcción y transición. Su esencia es la iteración y cada iteración resulta en un entregable preferentemente ejecutable.
- **Visual:** Cuatro fases en ciclo.
- **Explicación docente:** Introducir RUP como framework adaptable y enfatizar el entregable ejecutable por iteración.

### Slide 18 — RUP: esquema visual
- **Texto visible:** `RUP – Rational Unified Process`.
- **Visual:** Recreación SVG de un ciclo de fases RUP; la imagen original está referenciada por `slide18.xml.rels` como `image5.png`.
- **Explicación docente:** Usar el diagrama para reforzar que las fases se atraviesan con intensidad variable y con iteraciones.

### Slide 19 — Problemas de los Modelos Tradicionales
- **Texto visible:** Incumplimiento de plazos; reducción de funcionalidades previstas; difícil adaptación a cambios; excesiva documentación.
- **Visual:** Cuatro señales de riesgo.
- **Explicación docente:** Recapitular las limitaciones que preparan el cambio hacia métodos ágiles.

### Slide 20 — Métodos Ágiles
- **Texto visible:** En febrero de 2001, tras una reunión en Utah-EEUU, nace el término “Ágil” aplicado al desarrollo. Participaron 17 expertos. Se buscaban valores y principios para desarrollar rápidamente y responder a cambios. Se ofrecía una alternativa a procesos tradicionales.
- **Visual:** Línea de tiempo 2001 con 17 participantes y dos objetivos.
- **Explicación docente:** Dar contexto histórico sin presentar la reunión como una metodología única.

### Slide 21 — Métodos Ágiles: definición
- **Texto visible:** Las MAs promueven prácticas adaptativas en lugar de predictivas, como las MTs. Promueven adaptabilidad a cambios por sobre planeamiento estricto.
- **Visual:** Adaptativo frente a predictivo.
- **Explicación docente:** Fijar la diferencia conceptual entre adaptación y predicción estricta.

### Slide 22 — Métodos Ágiles: manifiesto
- **Texto visible:** “Según el manifiesto ágil se valora:”.
- **Visual:** Umbral que introduce cuatro valores; los valores se detallan en los slides siguientes.
- **Explicación docente:** Presentar este slide como transición y no inventar el texto de los valores que la fuente desarrolla después.

### Slide 23 — Individuos e interacciones
- **Texto visible:** Individuos e interacciones sobre proceso y herramientas. La gente es el principal factor de éxito; es más importante construir un buen equipo que el entorno. El equipo configura su entorno según sus necesidades.
- **Visual:** Equipo al centro, proceso y herramientas como soporte.
- **Explicación docente:** Conversar sobre la primacía del equipo y evitar interpretar el valor como rechazo de procesos o herramientas.

### Slide 24 — Software que funciona
- **Texto visible:** Desarrollar software que funciona más que conseguir buena documentación. No producir documentos salvo que sean necesarios de forma inmediata para una decisión importante; deben ser breves y centrarse en lo fundamental.
- **Visual:** Entregable funcionando frente a documento mínimo útil.
- **Explicación docente:** Aclarar que el valor prioriza software funcionando, no que elimina toda documentación.

### Slide 25 — Colaboración con el cliente
- **Texto visible:** La colaboración con el cliente más que la negociación de un contrato. Interacción constante entre cliente y equipo; la colaboración marca la marcha y asegura el éxito.
- **Visual:** Cliente y equipo conectados por ciclos de conversación.
- **Explicación docente:** Enfatizar la colaboración continua como mecanismo de dirección del proyecto.

### Slide 26 — Responder a los cambios
- **Texto visible:** Responder a cambios más que seguir estrictamente un plan. Los cambios pueden aparecer en requisitos, tecnología o equipo. La planificación debe ser flexible y abierta.
- **Visual:** Plan flexible con desvíos controlados.
- **Explicación docente:** Diferenciar flexibilidad de ausencia de planificación.

### Slide 27 — Agilidad vs. proceso
- **Texto visible:** CMM/CMMI y XP pueden complementarse; los métodos ágiles coinciden con la esencia del mejoramiento de procesos bajo una interpretación menos literal; enfatizan gestión de proyectos, no gestión de procesos.
- **Visual:** Intersección entre gestión de procesos y prácticas técnicas.
- **Explicación docente:** Evitar la falsa dicotomía: agilidad y mejora de procesos pueden complementarse.

### Slide 28 — Interrogantes
- **Texto visible:** ¿Resuelven los métodos ágiles todos los problemas? ¿Son aplicables a todo desarrollo? ¿Cuánta agilidad? ¿Cuánto proceso? Desafío: encontrar equilibrio. Desarrollos potenciales: modelos balanceados y mecanismos para selección, adaptación, implantación y adopción.
- **Visual:** Balanza agilidad-proceso con preguntas abiertas.
- **Explicación docente:** Usar las preguntas para introducir juicio contextual y evitar respuestas absolutas.

### Slide 29 — Metodologías Ágiles
- **Texto visible:** Adaptive Software Development (ASD); Programación Extrema (XP); SCRUM.
- **Visual:** Tres rutas metodológicas.
- **Explicación docente:** Anunciar el estudio de ASD, XP y Scrum como ejemplos con alcances distintos.

### Slide 30 — Adaptive Software Development
- **Texto visible:** Desarrollado por J. Highsmith en 2000. Idea fundamental: “Balancearse en el borde del Caos”. Equilibrio entre creatividad e innovación y administración de lo que se hace.
- **Visual:** Borde entre creatividad y administración.
- **Explicación docente:** Explicar la metáfora como equilibrio operativo, no como invitación al desorden.

### Slide 31 — Proceso del ASD
- **Texto visible:** `Proceso del ASD`.
- **Visual:** Recreación SVG del ciclo iterativo ASD; la imagen original está referenciada como `image6.png`.
- **Explicación docente:** Señalar el carácter cíclico del proceso ASD y vincularlo con la idea de adaptación.

### Slide 32 — Uso actual del ASD
- **Texto visible:** Casi no se utiliza porque no especifica en detalle pautas de desarrollo y gestión. Puede utilizarse complementado con otra metodología mejor definida. Provee conceptos sobre filosofía ágil, sistemas complejos, trabajo colaborativo y agilidad administrativa.
- **Visual:** Filosofía ASD conectada a una metodología complementaria.
- **Explicación docente:** Presentar la limitación de especificidad y el valor conceptual que conserva.

### Slide 33 — Programación Extrema (XP)
- **Texto visible:** Desarrollada por K. Beck en 1999. Probablemente la metodología ágil más conocida y utilizada. Conjunto de prácticas conocidas combinadas innovadoramente; “Extrema” por llevar prácticas a niveles extremos.
- **Visual:** Prácticas conocidas llevadas a un extremo coherente.
- **Explicación docente:** Introducir XP desde su origen, popularidad y combinación intensiva de prácticas.

### Slide 34 — Programación Extrema: esquema
- **Texto visible:** `Programación Extrema (XP)`.
- **Visual:** Recreación SVG del mapa visual de XP; la imagen original está referenciada como `image7.png`.
- **Explicación docente:** Usar el esquema como mapa antes de detallar las prácticas en los slides 35 y 36.

### Slide 35 — Prácticas de XP I
- **Texto visible:** Planificación incremental; entregas pequeñas; diseño simple; desarrollo previamente probado; refactorización. Se describen historias en tarjetas, tareas, valor temprano, diseño necesario, pruebas automatizadas antes de implementar y mejora continua del código.
- **Visual:** Cinco tarjetas de práctica.
- **Explicación docente:** Recorrer las prácticas como un sistema coherente de feedback, entrega temprana y código mantenible.

### Slide 36 — Prácticas de XP II
- **Texto visible:** Programación en pares; propiedad colectiva; integración continua; ritmo sostenible; cliente presente. Se describen revisión entre pares, código compartido, integración y pruebas frecuentes, límites a horas extra y cliente como miembro del equipo.
- **Visual:** Cinco tarjetas de colaboración y calidad.
- **Explicación docente:** Destacar que XP distribuye conocimiento, integra pronto y mantiene contacto directo con el cliente.

### Slide 37 — Uso actual de XP
- **Texto visible:** El 38% del mercado “ágil” utiliza XP. Esto se atribuye a prácticas bien definidas. En Agile Alliance existe amplia mayoría de usuarios de XP.
- **Visual:** El valor 38% se muestra como dato textual de la fuente, sin gráfico proporcional adicional.
- **Explicación docente:** Presentar el dato exactamente como aparece, sin extenderlo a una afirmación actualizada.

### Slide 38 — SCRUM
- **Texto visible:** Scrum es la metodología más utilizada por equipos ágiles. Es una manera de trabajar en equipo con resultado incremental; el resultado es un entregable. Periodos cortos denominados sprints, base del método.
- **Visual:** Sprint como contenedor de trabajo y entregable.
- **Explicación docente:** Introducir Scrum desde la cadencia corta, el trabajo en equipo y el entregable incremental.

### Slide 39 — Scrum: actividades
- **Texto visible:** Sprint Planning; Daily; Sprint Review; Sprint Retrospective.
- **Visual:** Ciclo de cuatro actividades alrededor del sprint.
- **Explicación docente:** Explicar la función de cada actividad como preparación, sincronización, inspección y mejora.

### Slide 40 — Scrum: herramientas
- **Texto visible:** Product Backlog; Sprint Backlog; Burn Down.
- **Visual:** Tres artefactos/herramientas conectados al sprint.
- **Explicación docente:** Diferenciar el inventario de producto, el compromiso del sprint y la visualización de trabajo restante.

### Slide 41 — Scrum: roles
- **Texto visible:** Product Owner; Scrum Master; Team (equipo de desarrollo).
- **Visual:** Tres roles alrededor del equipo.
- **Explicación docente:** Presentar las responsabilidades como roles complementarios, sin agregar definiciones externas al material.

### Slide 42 — Scrum: esquema visual
- **Texto visible:** No hay texto extraíble; el slide contiene una imagen asociada por `slide42.xml.rels` como `image8.png`.
- **Visual:** Recreación SVG de un tablero/ciclo Scrum sin valores ni etiquetas inventadas.
- **Explicación docente:** Utilizar el esquema como integración visual de actividades, herramientas y roles ya explicados.

### Slide 43 — Uso actual de Scrum
- **Texto visible:** Después de XP, Scrum es uno de los enfoques más utilizados, aunque lejos de XP. Se investiga integrar XP y Scrum: Scrum provee marco de gestión y XP prácticas bien definidas.
- **Visual:** Scrum como marco y XP como prácticas conectadas.
- **Explicación docente:** Presentar la complementariedad propuesta por la fuente y no convertirla en prescripción universal.

### Slide 44 — Ventajas de las MAs
- **Texto visible:** Iteraciones cortas; límites de tiempo de dos a ocho semanas; adaptación a nuevos riesgos; orientación a personas; trabajo en equipo.
- **Visual:** Cinco ventajas en una matriz de beneficios.
- **Explicación docente:** Recorrer las ventajas y subrayar la relación entre ciclos cortos, feedback y adaptación.

### Slide 45 — Desventajas de las MAs
- **Texto visible:** Adaptarse al cambio puede llevar al caos; difícil mantener el interés de clientes; prioridades difíciles con múltiples actores; simplicidad implica trabajo extra; contratos pueden ser un problema.
- **Visual:** Cinco riesgos con señal de advertencia.
- **Explicación docente:** Equilibrar la presentación mostrando límites y costos de adopción.

### Slide 46 — Métodos Ágiles vs. Tradicionales
- **Texto visible:** Tabla comparativa: heurísticas vs normas; preparados para cambios vs resistencia; imposición interna vs externa; proceso menos controlado vs más controlado; contrato flexible vs prefijado; cliente en el equipo vs reuniones; grupos pequeños y mismo sitio vs grandes/distribuidos; menor énfasis en arquitectura vs arquitectura esencial y modelada.
- **Visual:** Comparación de dos columnas, sin alterar el contenido.
- **Explicación docente:** Leer cada fila como contraste de énfasis, no como regla sin excepciones.

### Slide 47 — Conclusiones
- **Texto visible:** Las ventajas de las MAs proveen un marco aplicable a entornos sin procesos definidos o vagos, en desarrollo y aseguramiento de calidad. Se ajustan a sistemas pequeños y medianos o productos PC, adecuados a proyectos habituales de la región.
- **Visual:** Síntesis que conecta agilidad, procesos y contexto regional.
- **Explicación docente:** Cerrar con la aplicabilidad contextual que declara la fuente y retomar el objetivo de elegir un balance.

### Slide 48 — Muchas gracias
- **Texto visible:** `Muchas gracias`.
- **Visual:** Cierre sobrio con la marca de la Unidad II.
- **Explicación docente:** Abrir el espacio para preguntas y pedir que los estudiantes expresen diferencias entre modelos tradicionales y ágiles.

## Criterios de implementación

- La presentación debe renderizar exactamente 48 slides, en el mismo orden.
- Cada slide debe exponer sus notas docentes mediante el panel de notas y la tecla `N`.
- El índice debe permitir saltar a cualquier slide; `←`, `→`, `PageUp`, `PageDown`, `Home`, `End` y espacio deben navegar.
- La interfaz debe ocupar el ancho disponible, adaptarse a móvil, conservar foco visible, contraste suficiente y respetar `prefers-reduced-motion`.
- No se encontraron enlaces públicos en el paquete OOXML de esta fuente.
