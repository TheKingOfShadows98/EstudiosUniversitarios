---
id: "fisica-05-movimiento-de-proyectiles"
title: "Movimiento de Proyectiles y Tiro Parabólico"
description: "Aprende desde cero el movimiento en dos dimensiones: principio de independencia de movimientos de Galileo, tiro horizontal, tiro parabólico oblicuo, altura máxima y alcance."
especialidad: "ciencias-naturales"
materia: "fisica"
order: 5
tags: ["fisica", "cinematica", "tiro-parabolico", "proyectiles", "galileo", "alcance-maximo", "admision-ues"]
lastUpdated: "2026-09-17"
---

[TEMA nombre="La Trayectoria Curva: Movimiento de Proyectiles en Dos Dimensiones"]

¿Alguna vez has visto el arco que traza un balón de fútbol cuando el portero hace un despeje largo, o el chorro de agua que sale de una manguera de jardín? Ese arco no es una línea recta inclinada ni un círculo: es una **parábola**.

Hasta la lección anterior analizamos movimientos que ocurrían únicamente sobre un eje (horizontal o vertical). Pero en la vida real, muchos cuerpos se mueven en **dos dimensiones simultáneamente** (hacia adelante y hacia arriba/abajo a la vez). A cualquier objeto que se lanza al espacio sin motor propio y que se mueve únicamente bajo la acción de la gravedad lo denominamos **proyectil**.

---

### 1. El Secreto de Galileo: Principio de Independencia de Movimientos

Antes de Galileo Galilei, la gente creía que si un objeto avanzaba hacia adelante no podía caer a la misma velocidad que uno que caía en línea recta. Galileo demostró que estaban equivocados mediante una idea revolucionaria:

[DEFINICION nombre="Principio de Independencia de los Movimientos (Galileo)"]
Si un cuerpo experimenta un movimiento compuesto en dos dimensiones, **cada movimiento componente actúa de forma totalmente independiente del otro**, como si el otro no existiera:
1.  **En el eje horizontal ($X$):** No hay ninguna fuerza actuando (despreciando el aire), por lo que la partícula se mueve con **Movimiento Rectilíneo Uniforme (MRU)** con velocidad horizontal constante:
    $$a_x = 0, \quad v_x = v_{0x} = \text{constante}$$
2.  **En el eje vertical ($Y$):** La única fuerza que actúa es la atracción gravitatoria, por lo que el móvil experimenta un **Movimiento con Aceleración Constante (Caída Libre / MRUV)**:
    $$a_y = -g \quad (\approx -9.8\text{ m/s}^2 \text{ o } -10\text{ m/s}^2)$$

[PREGUNTA tipo="opcion_multiple"]
Dos canicas idénticas se encuentran al borde de una mesa horizontal lisa a la misma altura del suelo. En el mismo instante exacto, la canica A se deja caer verticalmente desde el reposo, mientras que la canica B es empujada horizontalmente saliendo disparada hacia adelante a $5\text{ m/s}$. Despreciando el rozamiento del aire, ¿cuál de las dos canicas impactará primero contra el suelo?
[RESPUESTA correcta="true"]Ambas impactan exactamente al mismo tiempo[/RESPUESTA]
[RESPUESTA]La canica A, porque recorre un camino en línea recta más corto[/RESPUESTA]
[RESPUESTA]La canica B, porque lleva mayor velocidad neta[/RESPUESTA]
[RESPUESTA]La canica A, porque la gravedad actúa con mayor intensidad sobre objetos sin velocidad horizontal[/RESPUESTA]
[EXPLICACION]
Según el Principio de Galileo, el avance horizontal de la canica B no afecta en lo más mínimo su aceleración vertical. Como ambas inician con velocidad vertical nula ($v_{0y} = 0$) y parten desde la misma altura bajo la misma aceleración de gravedad ($g$), tardan exactamente el mismo tiempo en caer ($t = \sqrt{2h/g}$).
[/EXPLICACION]
[/PREGUNTA]
[/DEFINICION]

---

### 2. Descomposición de la Velocidad Inicial ($v_0$)

Cuando un cañón o un jugador lanza un proyectil con una rapidez inicial $v_0$ formando un ángulo de inclinación $\theta$ respecto a la horizontal, el primer paso matemático obligatorio es descomponer ese vector en sus dos sombras perpendiculares:

[DEFINICION nombre="Componentes Iniciales de la Velocidad"]
*   **Componente horizontal:**
    $$v_{0x} = v_0 \cos(\theta)$$
    *(Esta velocidad jamás cambia durante todo el vuelo del proyectil).*
*   **Componente vertical inicial:**
    $$v_{0y} = v_0 \operatorname{sen}(\theta)$$
    *(Esta velocidad disminuye al subir, se anula en la cúspide y vuelve a ganar rapidez en sentido descendente).*

[PREGUNTA tipo="opcion_multiple"]
Un futbolista patea un balón con una rapidez inicial de $20\text{ m/s}$ y un ángulo de elevación de $30^\circ$ sobre el césped. Sabiendo que $\cos(30^\circ) = \frac{\sqrt{3}}{2} \approx 0.866$ y $\operatorname{sen}(30^\circ) = 0.5$, ¿cuáles son las velocidades iniciales en el eje X y en el eje Y?
[RESPUESTA correcta="true"]$v_{0x} \approx 17.32\text{ m/s}$ y $v_{0y} = 10\text{ m/s}$[/RESPUESTA]
[RESPUESTA]$v_{0x} = 10\text{ m/s}$ y $v_{0y} \approx 17.32\text{ m/s}$[/RESPUESTA]
[RESPUESTA]$v_{0x} = 20\text{ m/s}$ y $v_{0y} = 20\text{ m/s}$[/RESPUESTA]
[RESPUESTA]$v_{0x} = 0\text{ m/s}$ y $v_{0y} = 10\text{ m/s}$[/RESPUESTA]
[EXPLICACION]
Calculamos las componentes rectangulares:  
$$v_{0x} = 20 \cos(30^\circ) = 20 \times 0.866 = 17.32\text{ m/s}$$  
$$v_{0y} = 20 \operatorname{sen}(30^\circ) = 20 \times 0.5 = 10\text{ m/s}$$
[/EXPLICACION]
[/PREGUNTA]
[/DEFINICION]

---

### 3. El Punto Más Alto: Altura Máxima ($H_{\text{máx}}$)

A medida que el proyectil asciende, la gravedad frena su avance vertical hasta que llega al punto más alto de su trayectoria.

[DEFINICION nombre="Condición de Altura Máxima"]
En el punto de **altura máxima ($H_{\text{máx}}$)**, la componente vertical de la velocidad se hace **exactamente cero** ($v_y = 0$). Sin embargo, la velocidad total del proyectil **NO es cero**, ya que continúa desplazándose horizontalmente con su velocidad $v_x = v_{0x}$.
*   **Tiempo de subida ($t_s$):**
    $$t_s = \frac{v_{0y}}{g} = \frac{v_0 \operatorname{sen}(\theta)}{g}$$
*   **Altura máxima alcanzada:**
    $$H_{\text{máx}} = \frac{v_{0y}^2}{2g} = \frac{(v_0 \operatorname{sen}(\theta))^2}{2g}$$

[PREGUNTA tipo="opcion_multiple"]
¿Cuál de las siguientes afirmaciones describe con precisión la velocidad y la aceleración de un proyectil en el punto exacto de su altura máxima?
[RESPUESTA correcta="true"]La velocidad es puramente horizontal y la aceleración sigue siendo g dirigida hacia abajo[/RESPUESTA]
[RESPUESTA]Tanto la velocidad como la aceleración son cero[/RESPUESTA]
[RESPUESTA]La velocidad es cero, pero la aceleración apunta hacia adelante[/RESPUESTA]
[RESPUESTA]La velocidad es máxima y la aceleración es nula[/RESPUESTA]
[EXPLICACION]
En la cúspide, la velocidad vertical desaparece transitoriamente ($v_y = 0$), pero el proyectil no se detiene porque sigue avanzando con su velocidad horizontal constante ($v_x$). Además, la gravedad no se "apaga": sigue tirando hacia abajo con aceleración constante $g$.
[/EXPLICACION]
[/PREGUNTA]
[/DEFINICION]

---

### 4. Tiempo Total de Vuelo y Alcance Horizontal Máximo ($R$)

Si el proyectil aterriza al mismo nivel horizontal desde donde fue lanzado, el movimiento es completamente simétrico.

[DEFINICION nombre="Tiempo de Vuelo y Alcance Horizontal"]
*   **Tiempo de vuelo total ($t_v$):** Es el doble del tiempo de subida:
    $$t_v = 2 \cdot t_s = \frac{2 v_0 \operatorname{sen}(\theta)}{g}$$
*   **Alcance horizontal ($R$ o $X_{\text{máx}}$):** Es la distancia horizontal total recorrida durante todo el tiempo de vuelo:
    $$R = v_{0x} \cdot t_v = \frac{v_0^2 \operatorname{sen}(2\theta)}{g}$$
*   **Ángulo de alcance máximo:** Para una misma velocidad de disparo $v_0$, el alcance horizontal máximo sobre terreno llano se logra siempre a un ángulo de **$45^\circ$** (ya que $\operatorname{sen}(2 \times 45^\circ) = \operatorname{sen}(90^\circ) = 1$).
*   **Ángulos complementarios:** Dos ángulos que sumen $90^\circ$ (como $30^\circ$ y $60^\circ$, o $20^\circ$ y $70^\circ$) disparados con la misma rapidez producen **exactamente el mismo alcance horizontal**.

[PREGUNTA tipo="opcion_multiple"]
Dos cañones disparan balas con la misma rapidez inicial $v_0 = 50\text{ m/s}$ sobre un campo de tiro plano. El cañón 1 dispara a un ángulo de elevación de $35^\circ$ y el cañón 2 dispara a $55^\circ$. Despreciando la resistencia del aire, ¿cómo se comparan sus alcances horizontales?
[RESPUESTA correcta="true"]Ambos cañones logran exactamente el mismo alcance horizontal, porque sus ángulos son complementarios ($35^\circ + 55^\circ = 90^\circ$)[/RESPUESTA]
[RESPUESTA]El cañón 2 alcanza mayor distancia porque fue disparado más alto[/RESPUESTA]
[RESPUESTA]El cañón 1 alcanza mayor distancia porque viaja más pegado al suelo[/RESPUESTA]
[RESPUESTA]El cañón 2 permanece menos tiempo en el aire[/RESPUESTA]
[EXPLICACION]
La fórmula de alcance depende de $\operatorname{sen}(2\theta)$. Como $\operatorname{sen}(2 \times 35^\circ) = \operatorname{sen}(70^\circ)$ y $\operatorname{sen}(2 \times 55^\circ) = \operatorname{sen}(110^\circ) = \operatorname{sen}(180^\circ - 70^\circ) = \operatorname{sen}(70^\circ)$, cualquier par de ángulos complementarios ($\theta_1 + \theta_2 = 90^\circ$) aterriza exactamente en la misma coordenada horizontal.
[/EXPLICACION]
[/PREGUNTA]
[/DEFINICION]

---

### 5. Tiro Horizontal (Nivel Examen Admisión UES)

El tiro horizontal es un caso especial muy evaluado en la UES: el objeto sale disparado de una plataforma con velocidad inicial puramente horizontal ($\theta = 0^\circ$).

[DEFINICION nombre="Tiro Horizontal desde una Altura $h$"]
*   Velocidad vertical inicial nula: $v_{0y} = 0$.
*   Velocidad horizontal: $v_x = v_0$ constante.
*   Tiempo de caída: depende únicamente de la altura:
    $$t = \sqrt{\frac{2h}{g}}$$
*   Alcance horizontal:
    $$x = v_0 \cdot t = v_0 \sqrt{\frac{2h}{g}}$$

[PREGUNTA tipo="opcion_multiple"]
Nivel Admisión: Una esfera rueda por una mesa horizontal de $0.8\text{ metros}$ de altura y sale despedida por el borde con una velocidad horizontal de $3.0\text{ m/s}$. ¿A qué distancia de la base de la mesa tocará el suelo? (Considera $g = 10\text{ m/s}^2$ y desprecia el rozamiento)
[RESPUESTA correcta="true"]1.2 metros[/RESPUESTA]
[RESPUESTA]2.4 metros[/RESPUESTA]
[RESPUESTA]0.8 metros[/RESPUESTA]
[RESPUESTA]1.6 metros[/RESPUESTA]
[EXPLICACION]
Paso 1: Calculamos el tiempo que tarda en caer al suelo usando el movimiento vertical:  
$$t = \sqrt{\frac{2h}{g}} = \sqrt{\frac{2(0.8\text{ m})}{10\text{ m/s}^2}} = \sqrt{\frac{1.6}{10}} = \sqrt{0.16} = 0.4\text{ segundos}$$  
Paso 2: Con el tiempo de caída, calculamos la distancia horizontal que avanza a velocidad constante:  
$$x = v_x \cdot t = (3.0\text{ m/s}) \times (0.4\text{ s}) = 1.2\text{ metros}$$
[/EXPLICACION]
[/PREGUNTA]
[/DEFINICION]

[/TEMA]