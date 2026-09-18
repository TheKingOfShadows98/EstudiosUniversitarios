---
id: "fisica-02-proporcionalidad-y-graficas"
title: "Relaciones de Proporcionalidad y Representación Gráfica"
description: "Aprende desde cero a interpretar gráficos en física, calcular pendientes, entender la proporcionalidad directa, inversa y al cuadrado con reactivos tipo admisión."
especialidad: "ciencias-naturales"
materia: "fisica"
order: 2
tags: ["fisica", "proporcionalidad-directa", "proporcionalidad-inversa", "graficas", "pendiente", "admision-ues"]
lastUpdated: "2026-09-17"
---

[TEMA nombre="El Lenguaje Visual de la Física: Gráficas y Relaciones de Proporcionalidad"]

¿Alguna vez te has fijado en cómo cambia el costo del combustible al llenar el tanque de un auto? Si echas 1 galón pagas una cantidad; si echas 2 galones, pagas exactamente el doble; si echas 3 galones, el triple. Sin darte cuenta, tu cerebro ya comprende lo que en ciencia llamamos **proporcionalidad**.

En física, los fenómenos no ocurren de manera aislada: una magnitud casi siempre influye sobre otra. Por ejemplo, al aplicar más fuerza a un objeto, este acelera más rápido; o si viajas a mayor velocidad, tardas menos tiempo en llegar a tu destino. Para no perdernos en tablas infinitas de números, los físicos recurren a dos herramientas poderosas: las **fórmulas de proporcionalidad** y los **gráficos en el plano cartesiano**.

---

### 1. Variables en un Experimento Físico

Cuando un científico o estudiante realiza un experimento en el laboratorio, observa cómo interactúan dos magnitudes:

[DEFINICION nombre="Variable Independiente vs. Variable Dependiente"]
*   **Variable Independiente ($x$):** Es la magnitud que el experimentador manipula, cambia o controla libremente a voluntad (por ejemplo: el tiempo transcurrido o la masa que colocas en un platillo). Por convención internacional, **siempre se grafica en el eje horizontal (eje de las abscisas o eje X)**.
*   **Variable Dependiente ($y$):** Es la magnitud que responde, cambia o resulta como efecto de la variable independiente (por ejemplo: la posición alcanzada, la deformación de un resorte o la velocidad). **Siempre se ubica en el eje vertical (eje de las ordenadas o eje Y)**.

[PREGUNTA tipo="opcion_multiple"]
Un estudiante de física realiza un experimento donde mide la distancia recorrida por un ciclista cada 5 segundos fijados con un cronómetro (a los 5 s, 10 s, 15 s y 20 s). Para construir la gráfica cartesiana representativa, ¿en qué ejes deben ubicarse estas magnitudes?
[RESPUESTA correcta="true"]El tiempo en el eje horizontal (X) y la distancia en el eje vertical (Y)[/RESPUESTA]
[RESPUESTA]La distancia en el eje horizontal (X) y el tiempo en el eje vertical (Y)[/RESPUESTA]
[RESPUESTA]Ambas variables pueden intercambiarse sin ninguna convención en física[/RESPUESTA]
[RESPUESTA]El tiempo debe situarse en el eje vertical por ser una magnitud fundamental[/RESPUESTA]
[EXPLICACION]
El tiempo es la variable independiente (controlada a intervalos regulares de 5 segundos) y por convención se asigna al eje horizontal X. La distancia que el ciclista logra avanzar depende del tiempo transcurrido, constituyendo la variable dependiente situada en el eje vertical Y.
[/EXPLICACION]
[/PREGUNTA]
[/DEFINICION]

---

### 2. Proporcionalidad Directa

¿Qué significa que dos magnitudes sean directamente proporcionales? Piénsalo así: si una magnitud se duplica, se triplica o se reduce a la mitad, la otra magnitud sufre exactamente la misma modificación en igual factor.

[DEFINICION nombre="Proporcionalidad Directa ($y \propto x$)"]
Dos magnitudes $y$ y $x$ son directamente proporcionales si **su cociente o razón permanece constante**:
$$\frac{y}{x} = k \quad \Longleftrightarrow \quad y = k \cdot x$$
Donde $k$ es un número fijo distinto de cero llamado **constante de proporcionalidad**.

*   **Comportamiento gráfico:** Su representación en el plano cartesiano ($y$ vs. $x$) es invariablemente una **línea recta que pasa por el origen de coordenadas $(0,0)$**.
*   Si una recta no parte del origen (tiene la forma $y = kx + b$ con $b \neq 0$), decimos que existe una relación lineal general, pero no una proporcionalidad directa estricta.

[PREGUNTA tipo="opcion_multiple"]
Una tabla de laboratorio registra los siguientes datos entre dos magnitudes $A$ y $B$:
- Cuando $A = 2$, $B = 10$
- Cuando $A = 4$, $B = 20$
- Cuando $A = 6$, $B = 30$
- Cuando $A = 8$, $B = 40$

¿Qué tipo de relación guardan estas magnitudes y cuál es el valor de su constante de proporcionalidad ($k = B/A$)?
[RESPUESTA correcta="true"]Son directamente proporcionales con una constante k = 5[/RESPUESTA]
[RESPUESTA]Son inversamente proporcionales con una constante k = 20[/RESPUESTA]
[RESPUESTA]Son directamente proporcionales con una constante k = 0.2[/RESPUESTA]
[RESPUESTA]No guardan relación de proporcionalidad[/RESPUESTA]
[EXPLICACION]
Al evaluar el cociente $B/A$ para cada par de datos: $10/2 = 5$, $20/4 = 5$, $30/6 = 5$, $40/8 = 5$. Como la división es constante e igual a 5 en todos los casos, las magnitudes son directamente proporcionales con $k = 5$.
[/EXPLICACION]
[/PREGUNTA]
[/DEFINICION]

---

### 3. La Pendiente de la Recta y su Significado Físico

En los exámenes de admisión, casi nunca te preguntarán solo por números de matemáticas puras: te pedirán interpretar qué significa la inclinación de la línea. A esa inclinación la llamamos **pendiente ($m$)**.

[DEFINICION nombre="Pendiente de una Recta ($m$)"]
Es la medida de la inclinación de la recta y cuantifica cuánto varía la variable vertical ($\Delta y$) por cada unidad que avanza la variable horizontal ($\Delta x$):
$$m = \frac{\Delta y}{\Delta x} = \frac{y_2 - y_1}{x_2 - x_1}$$

En física, **la pendiente de una recta siempre representa una nueva magnitud física**, cuyas unidades se obtienen dividiendo las unidades del eje Y entre las unidades del eje X:
*   En una gráfica de **Posición vs. Tiempo** ($x$ vs. $t$): La pendiente $\frac{\Delta x}{\Delta t}$ representa la **velocidad** ($\text{m/s}$).
*   En una gráfica de **Fuerza vs. Aceleración** ($F$ vs. $a$): La pendiente $\frac{\Delta F}{\Delta a}$ representa la **masa** ($\text{kg}$).
*   En una gráfica de **Masa vs. Volumen** ($m$ vs. $V$): La pendiente $\frac{\Delta m}{\Delta V}$ representa la **densidad** ($\text{kg/m}^3$).

[PREGUNTA tipo="opcion_multiple"]
En un experimento escolar se grafica el estiramiento de un resorte ($\Delta x$, en metros) contra la fuerza aplicada ($F$, en newtons), obteniéndose una línea recta que pasa por el origen. Si al aplicar una fuerza de $F_1 = 20\text{ N}$ el resorte se estira $0.1\text{ m}$, y al aplicar $F_2 = 60\text{ N}$ se estira $0.3\text{ m}$, ¿cuál es el valor y significado de la pendiente $m = \frac{\Delta F}{\Delta x}$?
[RESPUESTA correcta="true"]200 N/m, representa la constante elástica del resorte[/RESPUESTA]
[RESPUESTA]0.005 m/N, representa el peso del resorte[/RESPUESTA]
[RESPUESTA]40 N/m, representa la aceleración del sistema[/RESPUESTA]
[RESPUESTA]20 N/m, representa la energía potencial almacenada[/RESPUESTA]
[EXPLICACION]
Calculamos la pendiente:
$$m = \frac{60\text{ N} - 20\text{ N}}{0.3\text{ m} - 0.1\text{ m}} = \frac{40\text{ N}}{0.2\text{ m}} = 200\text{ N/m}$$
Según la Ley de Hooke ($F = k \cdot \Delta x$), la razón fuerza entre estiramiento equivale a la constante elástica ($k$) del resorte.
[/EXPLICACION]
[/PREGUNTA]
[/DEFINICION]

---

### 4. Proporcionalidad Inversa

¿Qué ocurre cuando una magnitud sube y la otra baja? Imagina que 4 obreros tardan 12 horas en pintar un muro. Si contratas el doble de obreros (8 obreros), no tardarán el doble de tiempo: tardarán la mitad (6 horas). Eso es la **proporcionalidad inversa**.

[DEFINICION nombre="Proporcionalidad Inversa ($y \propto \frac{1}{x}$)"]
Dos magnitudes son inversamente proporcionales si al multiplicarse entre sí dan como resultado una **constante fija**:
$$y \cdot x = k \quad \Longleftrightarrow \quad y = \frac{k}{x}$$
*   **Comportamiento gráfico:** Su curva en el plano cartesiano no es una recta, sino una curva suave asintótica descendente llamada **hipérbola equilátera**.
*   *Linealización:* Si graficas $y$ en función del inverso de $x$ (es decir, $y$ frente a $\frac{1}{x}$), la gráfica resultante se convierte en una **línea recta**.

[PREGUNTA tipo="opcion_multiple"]
La Ley de Boyle para un gas ideal a temperatura constante establece que la presión ($P$) y el volumen ($V$) cumplen la relación $P \cdot V = \text{constante}$. Si un gas ocupa un volumen de $4.0\text{ Litros}$ a una presión de $1.0\text{ atm}$, ¿qué presión experimentará si se comprime el gas hasta reducir su volumen a solo $0.5\text{ Litros}$?
[RESPUESTA correcta="true"]8.0 atm[/RESPUESTA]
[RESPUESTA]0.125 atm[/RESPUESTA]
[RESPUESTA]2.0 atm[/RESPUESTA]
[RESPUESTA]0.5 atm[/RESPUESTA]
[EXPLICACION]
Como son inversamente proporcionales, el producto inicial debe ser igual al final:
$$P_1 \cdot V_1 = P_2 \cdot V_2$$
$$(1.0\text{ atm}) \cdot (4.0\text{ L}) = P_2 \cdot (0.5\text{ L})$$
$$P_2 = \frac{4.0}{0.5} = 8.0\text{ atm}$$
Al reducir el volumen a la octava parte ($4.0 \rightarrow 0.5$), la presión se multiplicó por 8.
[/EXPLICACION]
[/PREGUNTA]
[/DEFINICION]

---

### 5. Proporcionalidad con Potencias (Nivel Admisión)

Muchas leyes fundamentales de la física no varían con $x$ simple, sino con su cuadrado ($x^2$). Por ejemplo, la energía cinética ($E_c = \frac{1}{2}m v^2$) o la distancia en caída libre ($y = \frac{1}{2}g t^2$).

[DEFINICION nombre="Proporcionalidad Directa con el Cuadrado ($y \propto x^2$)"]
Ocurre cuando una magnitud varía de forma directamente proporcional al cuadrado de la otra:
$$y = k \cdot x^2$$
*   Si $x$ se duplica ($\times 2$), $y$ se cuadruplica ($\times 2^2 = \times 4$).
*   Si $x$ se triplica ($\times 3$), $y$ aumenta por un factor de 9 ($\times 3^2 = \times 9$).
*   **Comportamiento gráfico:** Al graficar $y$ vs. $x$ se obtiene una curva que abre hacia arriba llamada **parábola**. Si se grafica $y$ vs. $x^2$, se obtiene una línea recta.

[PREGUNTA tipo="opcion_multiple"]
Nivel Admisión: La distancia ($d$) que recorre un automóvil que parte del reposo con aceleración constante es directamente proporcional al cuadrado del tiempo transcurrido ($d \propto t^2$). Si el vehículo recorre $20\text{ metros}$ durante los primeros $2\text{ segundos}$, ¿qué distancia total habrá recorrido al cumplirse $6\text{ segundos}$ desde el inicio?
[RESPUESTA correcta="true"]180 metros[/RESPUESTA]
[RESPUESTA]60 metros[/RESPUESTA]
[RESPUESTA]120 metros[/RESPUESTA]
[RESPUESTA]360 metros[/RESPUESTA]
[EXPLICACION]
Método 1 (Factor de escala): El tiempo pasó de $2\text{ s}$ a $6\text{ s}$, es decir, se triplicó ($\times 3$). Como la distancia depende del cuadrado del tiempo ($t^2$), la distancia debe multiplicarse por $3^2 = 9$.  
$$\text{Distancia} = 20\text{ m} \times 9 = 180\text{ metros}$$

Método 2 (Constante k):  
$$k = \frac{d}{t^2} = \frac{20}{2^2} = \frac{20}{4} = 5\text{ m/s}^2$$  
Para $t = 6\text{ s}$:  
$$d = k \cdot t^2 = 5 \times 6^2 = 5 \times 36 = 180\text{ metros}$$
[/EXPLICACION]
[/PREGUNTA]
[/DEFINICION]

[/TEMA]