---
id: "fisica-04-cinematica-en-una-dimension"
title: "Cinemática en Una Dimensión: MRU, MRUV y Caída Libre"
description: "Aprende desde cero a describir el movimiento: posición, desplazamiento, velocidad vs. rapidez, aceleración constante y caída libre con reactivos tipo admisión."
especialidad: "ciencias-naturales"
materia: "fisica"
order: 4
tags: ["fisica", "cinematica", "mru", "mruv", "caida-libre", "velocidad", "aceleracion", "admision-ues"]
lastUpdated: "2026-09-17"
---

[TEMA nombre="El Estudio del Movimiento: Cinemática Rectilínea"]

¿Te has fijado en cómo se siente viajar en un autobús con los ojos cerrados? Si el autobús avanza en una carretera recta y lisa a velocidad constante, prácticamente no sientes que te estás moviendo. Pero en el instante en que el conductor frena de golpe o acelera para rebasar, tu cuerpo es empujado hacia adelante o hacia atrás.

La rama de la física encargada de estudiar y describir cómo se mueven los cuerpos sin preocuparse por las causas (fuerzas) que originan ese movimiento se llama **cinemática**. En esta lección aprenderemos a describir el movimiento en línea recta (una dimensión) desde cero.

---

### 1. Posición, Distancia y Desplazamiento

Para saber si algo se mueve, primero debemos fijar un punto de referencia (el origen $x = 0$).

[DEFINICION nombre="Posición, Distancia Recorrida y Desplazamiento"]
*   **Posición ($x$):** Es la ubicación puntual de un objeto en el espacio respecto a un sistema de coordenadas de referencia.
*   **Distancia Recorrida ($d$):** Es una magnitud **escalar** que mide la longitud total real del camino recorrido por el móvil (el odómetro del auto). Siempre es positiva o cero.
*   **Desplazamiento ($\Delta x$):** Es una magnitud **vectorial** que representa el cambio neto de posición de la partícula. Solo depende del punto inicial ($x_i$) y del punto final ($x_f$), ignorando el camino intermedio:
    $$\Delta x = x_f - x_i$$
    Puede ser positivo (movimiento hacia la derecha/arriba), negativo (hacia la izquierda/abajo) o cero.

[PREGUNTA tipo="opcion_multiple"]
Un atleta corre alrededor de una pista circular de $400\text{ metros}$ de longitud. Si completa exactamente una vuelta entera regresando al mismo punto de partida, ¿cuáles son la distancia recorrida y el módulo de su desplazamiento?
[RESPUESTA correcta="true"]Distancia = 400 m; Desplazamiento = 0 m[/RESPUESTA]
[RESPUESTA]Distancia = 400 m; Desplazamiento = 400 m[/RESPUESTA]
[RESPUESTA]Distancia = 0 m; Desplazamiento = 400 m[/RESPUESTA]
[RESPUESTA]Distancia = 0 m; Desplazamiento = 0 m[/RESPUESTA]
[EXPLICACION]
La distancia recorrida es la trayectoria total sobre la pista ($400\text{ m}$). Sin embargo, al iniciar y terminar en el mismo punto exacto ($x_f = x_i$), su cambio neto de posición es nulo: $\Delta x = x_f - x_i = 0\text{ m}$.
[/EXPLICACION]
[/PREGUNTA]
[/DEFINICION]

---

### 2. Rapidez Media vs. Velocidad Media

En el lenguaje diario solemos usar "rapidez" y "velocidad" como sinónimos, pero en física son dos conceptos distintos:

[DEFINICION nombre="Rapidez Media vs. Velocidad Media"]
*   **Rapidez Media ($v_{\text{med}}$):** Es una magnitud **escalar** que relaciona la distancia total recorrida entre el tiempo transcurrido:
    $$v_{\text{med}} = \frac{\text{distancia total}}{\Delta t}$$
*   **Velocidad Media ($\vec{v}_{\text{med}}$):** Es una magnitud **vectorial** que relaciona el vector desplazamiento con el intervalo de tiempo:
    $$\vec{v}_{\text{med}} = \frac{\Delta x}{\Delta t} = \frac{x_f - x_i}{t_f - t_i}$$
    La velocidad media indica tanto qué tan rápido se mueve el móvil como el sentido de su movimiento (+ o -).

[PREGUNTA tipo="opcion_multiple"]
Un dron se desplaza en línea recta $60\text{ metros}$ hacia el Este en $6\text{ segundos}$, e inmediatamente regresa sobre la misma línea recorriendo $20\text{ metros}$ hacia el Oeste en $4\text{ segundos}$. ¿Cuál fue su velocidad media durante los $10\text{ segundos}$ de recorrido?
[RESPUESTA correcta="true"]+4.0 m/s hacia el Este[/RESPUESTA]
[RESPUESTA]8.0 m/s[/RESPUESTA]
[RESPUESTA]2.0 m/s hacia el Oeste[/RESPUESTA]
[RESPUESTA]+40 m/s hacia el Este[/RESPUESTA]
[EXPLICACION]
1. Calculamos el desplazamiento neto: $\Delta x = +60\text{ m} - 20\text{ m} = +40\text{ m}$.  
2. El tiempo total transcurrido es: $\Delta t = 6\text{ s} + 4\text{ s} = 10\text{ s}$.  
3. Velocidad media: $v_{\text{med}} = \frac{+40\text{ m}}{10\text{ s}} = +4.0\text{ m/s}$ (hacia el Este).  
*Nota:* Su rapidez media habría sido $\frac{60 + 20}{10} = 8.0\text{ m/s}$.
[/EXPLICACION]
[/PREGUNTA]
[/DEFINICION]

---

### 3. Movimiento Rectilíneo Uniforme (MRU)

El tipo de movimiento más simple es cuando un objeto se desplaza a lo largo de una línea recta sin cambiar de ritmo ni de rumbo.

[DEFINICION nombre="Movimiento Rectilíneo Uniforme (MRU)"]
Es aquel movimiento en el cual la **velocidad permanece constante** en el tiempo (magnitud, dirección y sentido invariables). Al no haber cambio en la velocidad, la aceleración es nula ($a = 0$).
*   El móvil recorre **distancias iguales en intervalos de tiempo iguales**.
*   **Ecuación horaria de posición:**
    $$x(t) = x_0 + v \cdot t$$
*   **Gráfica $x$ vs $t$:** Es una línea recta cuya pendiente representa la velocidad ($v$).
*   **Gráfica $v$ vs $t$:** Es una línea horizontal paralela al eje del tiempo; el área bajo la recta representa el desplazamiento.

[PREGUNTA tipo="opcion_multiple"]
Un tren avanza en línea recta con velocidad constante de $25\text{ m/s}$ ($90\text{ km/h}$). Si en el instante inicial se encuentra en la marca $x_0 = 100\text{ metros}$, ¿en qué posición estará al cabo de $20\text{ segundos}$?
[RESPUESTA correcta="true"]600 metros[/RESPUESTA]
[RESPUESTA]500 metros[/RESPUESTA]
[RESPUESTA]400 metros[/RESPUESTA]
[RESPUESTA]250 metros[/RESPUESTA]
[EXPLICACION]
Aplicamos la ecuación del MRU:  
$$x = x_0 + v \cdot t = 100\text{ m} + (25\text{ m/s} \times 20\text{ s}) = 100 + 500 = 600\text{ metros}$$
[/EXPLICACION]
[/PREGUNTA]
[/DEFINICION]

---

### 4. Aceleración y Movimiento Rectilíneo Uniformemente Variado (MRUV)

En el mundo real los móviles cambian su velocidad: frenan ante un semáforo o aceleran al entrar a una autopista. A esa tasa de cambio de velocidad la llamamos **aceleración**.

[DEFINICION nombre="Aceleración y Ecuaciones del MRUV"]
La **aceleración media ($a$)** es el cambio de velocidad por unidad de tiempo:
$$a = \frac{\Delta v}{\Delta t} = \frac{v_f - v_i}{t}$$
En el SI se mide en metros por segundo al cuadrado ($\text{m/s}^2$). Si la aceleración es constante, el movimiento es un MRUV.

**Fórmulas cinemáticas fundamentales:**
1.  $$v_f = v_i + a \cdot t$$
2.  $$x = v_i \cdot t + \frac{1}{2} a \cdot t^2$$
3.  $$v_f^2 = v_i^2 + 2 a \cdot \Delta x$$
4.  $$\Delta x = \left(\frac{v_i + v_f}{2}\right) \cdot t$$

[PREGUNTA tipo="opcion_multiple"]
Un automóvil que viaja a $20\text{ m/s}$ frena con una desaceleración constante de $4\text{ m/s}^2$ hasta detenerse por completo. ¿Qué distancia recorre desde que aplica los frenos hasta quedar en reposo?
[RESPUESTA correcta="true"]50 metros[/RESPUESTA]
[RESPUESTA]100 metros[/RESPUESTA]
[RESPUESTA]25 metros[/RESPUESTA]
[RESPUESTA]80 metros[/RESPUESTA]
[EXPLICACION]
Datos: $v_i = 20\text{ m/s}$, $v_f = 0\text{ m/s}$, $a = -4\text{ m/s}^2$ (por ser frenado).  
Usamos la fórmula independiente del tiempo:  
$$v_f^2 = v_i^2 + 2 a \cdot d \implies 0 = (20)^2 + 2(-4)d$$  
$$0 = 400 - 8d \implies 8d = 400 \implies d = \frac{400}{8} = 50\text{ metros}$$
[/EXPLICACION]
[/PREGUNTA]
[/DEFINICION]

---

### 5. Caída Libre y Tiro Vertical (Nivel Admisión)

Si sueltas una piedra y una hoja de papel en un tubo al vacío (sin resistencia del aire), ambas caen exactamente con la misma rapidez. Este fenómeno fue demostrado por Galileo Galilei.

[DEFINICION nombre="Caída Libre"]
Es un caso particular de MRUV en el eje vertical (eje Y), donde los cuerpos se mueven exclusivamente bajo la influencia del campo gravitatorio terrestre, despreciando la fricción con el aire.
*   **Aceleración de la gravedad ($g$):** Es constante cerca de la superficie terrestre, apunta siempre verticalmente hacia el centro de la Tierra (hacia abajo), con un valor estándar aproximado de:
    $$g \approx 9.8\text{ m/s}^2 \quad (\text{a menudo redondeado a } 10\text{ m/s}^2 \text{ en exámenes UES})$$
*   **Si un cuerpo se deja caer (desde el reposo):** Su velocidad inicial es cero ($v_{0y} = 0$).
*   **Si se lanza verticalmente hacia arriba:** En el punto de altura máxima su velocidad vertical instantánea es cero ($v_y = 0$). El tiempo que tarda en subir es exactamente igual al tiempo que tarda en regresar al punto de lanzamiento.

[PREGUNTA tipo="opcion_multiple"]
Nivel Admisión: Se deja caer una piedra desde lo alto de un puente hacia un río. Si la piedra impacta contra el agua exactamente $3.0\text{ segundos}$ después de ser soltada, ¿cuál es la altura del puente respecto al nivel del agua? (Considera $g = 10\text{ m/s}^2$ y desprecia la fricción del aire)
[RESPUESTA correcta="true"]45 metros[/RESPUESTA]
[RESPUESTA]30 metros[/RESPUESTA]
[RESPUESTA]90 metros[/RESPUESTA]
[RESPUESTA]15 metros[/RESPUESTA]
[EXPLICACION]
Al dejarse caer desde el reposo, la velocidad inicial es $v_0 = 0$.  
Aplicamos la ecuación de posición en el eje vertical:  
$$h = \frac{1}{2} g t^2 = \frac{1}{2} (10\text{ m/s}^2) (3.0\text{ s})^2 = 5 \times 9 = 45\text{ metros}$$
[/EXPLICACION]
[/PREGUNTA]
[/DEFINICION]

[/TEMA]