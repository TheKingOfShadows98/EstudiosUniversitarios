---
id: "matematicas-geometria-04-linea-recta-y-circunferencia"
title: "Geometría Analítica: Línea Recta y Circunferencia"
description: "Aprende desde cero las bases de la geometría analítica en el plano cartesiano: pendiente, ecuaciones de la recta, rectas paralelas/perpendiculares y la ecuación canónica y general de la circunferencia."
especialidad: "ciencias-exactas"
materia: "matematicas"
order: 14
tags: ["matematicas", "geometria-analitica", "linea-recta", "circunferencia", "pendiente", "admision-ues"]
lastUpdated: "2026-09-19"
---

[TEMA nombre="El Puente entre el Álgebra y la Geometría: Línea Recta y Circunferencia"]

Hasta ahora hemos estudiado las figuras geométricas mediante sus ángulos y lados en el espacio. Pero en el siglo XVII, el filósofo y matemático René Descartes tuvo una idea brillante: ¿qué pasaría si colocamos dos reglas perpendiculares que se crucen en un punto cero (el plano cartesiano) y le asignamos una dirección numérica a cada punto del plano?

Al hacer esto, cualquier punto se convierte en una pareja de números $(x, y)$, y cualquier figura geométrica (como una línea o un círculo) se puede describir mediante una **ecuación algebraica**. A esta unión perfecta entre el álgebra y la geometría la conocemos como **Geometría Analítica**.

---

### 1. La Línea Recta: Pendiente e Inclinación

Una línea recta es el camino más corto entre dos puntos y mantiene siempre la misma dirección. En el plano cartesiano, lo primero que necesitamos saber de una recta es qué tan inclinada está. A esa medida de inclinación la llamamos **pendiente ($m$)**.

[DEFINICION nombre="Pendiente de una Recta ($m$)"]
La pendiente mide cuánto sube o baja la recta verticalmente ($\Delta y$) por cada unidad que avanza horizontalmente ($\Delta x$) al pasar de un punto $P_1(x_1, y_1)$ a otro punto $P_2(x_2, y_2)$:
$$m = \frac{y_2 - y_1}{x_2 - x_1} \quad (x_1 \neq x_2)$$

*   **Si $m > 0$ (positiva):** La recta sube hacia la derecha (creciente).
*   **Si $m < 0$ (negativa):** La recta baja hacia la derecha (decreciente).
*   **Si $m = 0$ (cero):** La recta es perfectamente horizontal.
*   **Si el denominador es cero ($x_1 = x_2$):** La recta es vertical y su pendiente no está definida.
[/DEFINICION]

[PREGUNTA tipo="opcion_multiple"]
Nivel Fácil: ¿Cuál es la pendiente de la recta que pasa por los puntos $A(2, 3)$ y $B(6, 11)$ en el plano cartesiano?
[RESPUESTA correcta="true"]$m = 2$[/RESPUESTA]
[RESPUESTA]$m = \frac{1}{2}$[/RESPUESTA]
[RESPUESTA]$m = 4$[/RESPUESTA]
[RESPUESTA]$m = -2$[/RESPUESTA]
[EXPLICACION]
Aplicamos la fórmula de la pendiente con $(x_1, y_1) = (2, 3)$ y $(x_2, y_2) = (6, 11)$:
$$m = \frac{y_2 - y_1}{x_2 - x_1} = \frac{11 - 3}{6 - 2} = \frac{8}{4} = 2$$
La pendiente es positiva ($m = 2$), lo que indica que por cada unidad que avanza en $x$, la recta sube $2$ unidades en $y$.
[/EXPLICACION]
[/PREGUNTA]

[PREGUNTA tipo="opcion_multiple"]
Nivel Fácil - Conceptual: Si una recta horizontal pasa por los puntos $(-3, 5)$ y $(4, 5)$, ¿cuál es el valor de su pendiente?
[RESPUESTA correcta="true"]0[/RESPUESTA]
[RESPUESTA]5[/RESPUESTA]
[RESPUESTA]Indefinida[/RESPUESTA]
[RESPUESTA]1[/RESPUESTA]
[EXPLICACION]
Calculamos la pendiente:
$$m = \frac{5 - 5}{4 - (-3)} = \frac{0}{7} = 0$$
Toda recta horizontal tiene una variación vertical nula ($\Delta y = 0$), por lo que su pendiente es exactamente cero.
[/EXPLICACION]
[/PREGUNTA]

---

### 2. Ecuaciones de la Recta y Posiciones Relativas

Una vez conocida la pendiente y al menos un punto de apoyo, podemos escribir la ecuación matemática que describe a todos los puntos que pertenecen a esa recta.

[DEFINICION nombre="Formas de la Ecuación de la Recta"]
1.  **Forma Punto-Pendiente:** Si conoces un punto $(x_1, y_1)$ y la pendiente $m$:
    $$y - y_1 = m(x - x_1)$$
2.  **Forma Pendiente-Intercepto (Explícita):**
    $$y = mx + b$$
    Donde $m$ es la pendiente y $b$ es el intercepto con el eje Y (el punto $(0, b)$).
3.  **Forma General:**
    $$Ax + By + C = 0$$
    *(De donde se puede despejar la pendiente: $m = -\frac{A}{B}$).*
[/DEFINICION]

[DEFINICION nombre="Rectas Paralelas y Perpendiculares"]
Dadas dos rectas con pendientes $m_1$ y $m_2$:
*   **Paralelas ($L_1 \parallel L_2$):** Tienen exactamente la **misma inclinación**:
    $$m_1 = m_2$$
*   **Perpendiculares ($L_1 \perp L_2$):** Se cortan formando un ángulo recto de $90^\circ$. Sus pendientes son **inversas y de signo opuesto**:
    $$m_1 \cdot m_2 = -1 \quad \Longleftrightarrow \quad m_2 = -\frac{1}{m_1}$$
[/DEFINICION]

[PREGUNTA tipo="opcion_multiple"]
Nivel Intermedio: ¿Cuál es la ecuación en forma explícita ($y = mx + b$) de la recta que pasa por el punto $(1, -2)$ y es paralela a la recta cuya ecuación es $y = 3x + 7$?
[RESPUESTA correcta="true"]$y = 3x - 5$[/RESPUESTA]
[RESPUESTA]$y = 3x - 2$[/RESPUESTA]
[RESPUESTA]$y = -\frac{1}{3}x - 5$[/RESPUESTA]
[RESPUESTA]$y = 3x + 1$[/RESPUESTA]
[EXPLICACION]
1. Como la recta buscada es paralela a $y = 3x + 7$, debe compartir la misma pendiente: $m = 3$.  
2. Usamos la forma punto-pendiente con el punto $(x_1, y_1) = (1, -2)$:
   $$y - (-2) = 3(x - 1) \implies y + 2 = 3x - 3$$
3. Despejamos $y$:
   $$y = 3x - 3 - 2 \implies y = 3x - 5$$
[/EXPLICACION]
[/PREGUNTA]

[PREGUNTA tipo="opcion_multiple"]
Nivel Intermedio: ¿Cuál es la pendiente de cualquier recta perpendicular a la recta dada por la ecuación general $2x - 6y + 5 = 0$?
[RESPUESTA correcta="true"]$-3$[/RESPUESTA]
[RESPUESTA]$\frac{1}{3}$[/RESPUESTA]
[RESPUESTA]$3$[/RESPUESTA]
[RESPUESTA]$-\frac{1}{3}$[/RESPUESTA]
[EXPLICACION]
1. Despejamos $y$ de la recta dada para conocer su pendiente:
   $$2x + 5 = 6y \implies y = \frac{2}{6}x + \frac{5}{6} \implies y = \frac{1}{3}x + \frac{5}{6}$$
   La pendiente de la recta original es $m_1 = \frac{1}{3}$.  
2. Para que una recta sea perpendicular, su pendiente $m_2$ debe cumplir $m_1 \cdot m_2 = -1$:
   $$m_2 = -\frac{1}{m_1} = -\frac{1}{\frac{1}{3}} = -3$$
[/EXPLICACION]
[/PREGUNTA]

---

### 3. La Circunferencia: Centro y Radio

Una circunferencia es el conjunto de todos los puntos del plano que se encuentran a una distancia fija (llamada **radio**, $r$) de un punto central fijo (llamado **centro**, $C(h, k)$). 

Nace directamente de aplicar el Teorema de Pitágoras o la fórmula de distancia entre dos puntos:

[DEFINICION nombre="Ecuaciones de la Circunferencia"]
*   **Ecuación Canónica (Centro en el origen $(0,0)$):**
    $$x^2 + y^2 = r^2$$
*   **Ecuación Ordinaria o Estándar (Centro en $C(h, k)$ y radio $r$):**
    $$(x - h)^2 + (y - k)^2 = r^2$$
*   **Ecuación General:** Al desarrollar los binomios al cuadrado se obtiene la forma:
    $$x^2 + y^2 + Dx + Ey + F = 0$$
    Donde las coordenadas del centro son $h = -\frac{D}{2}$, $k = -\frac{E}{2}$ y el radio es $r = \sqrt{h^2 + k^2 - F}$.
[/DEFINICION]

[PREGUNTA tipo="opcion_multiple"]
Nivel Intermedio: Una circunferencia tiene su centro en el punto $C(-3, 4)$ y su radio mide $r = 5$. ¿Cuál es su ecuación ordinaria estándar?
[RESPUESTA correcta="true"]$(x + 3)^2 + (y - 4)^2 = 25$[/RESPUESTA]
[RESPUESTA]$(x - 3)^2 + (y + 4)^2 = 25$[/RESPUESTA]
[RESPUESTA]$(x + 3)^2 + (y - 4)^2 = 5$[/RESPUESTA]
[RESPUESTA]$(x - 3)^2 + (y - 4)^2 = 10$[/RESPUESTA]
[EXPLICACION]
Sustituimos las coordenadas del centro $(h, k) = (-3, 4)$ y el radio $r = 5$ en la forma estándar $(x - h)^2 + (y - k)^2 = r^2$:
$$(x - (-3))^2 + (y - 4)^2 = 5^2 \implies (x + 3)^2 + (y - 4)^2 = 25$$
[/EXPLICACION]
[/PREGUNTA]

[PREGUNTA tipo="opcion_multiple"]
Nivel Avanzado - Tipo Examen Admisión UES: Dada la ecuación general de la circunferencia $x^2 + y^2 - 4x + 6y - 12 = 0$, ¿cuáles son las coordenadas exactas de su centro $C(h, k)$ y la longitud de su radio $r$?
[RESPUESTA correcta="true"]Centro $(2, -3)$ y radio $r = 5$[/RESPUESTA]
[RESPUESTA]Centro $(-2, 3)$ y radio $r = 5$[/RESPUESTA]
[RESPUESTA]Centro $(2, -3)$ y radio $r = \sqrt{12}$[/RESPUESTA]
[RESPUESTA]Centro $(4, -6)$ y radio $r = 25$[/RESPUESTA]
[EXPLICACION]
Podemos resolver completando cuadrados trinomios perfectos:
1. Agrupamos los términos en $x$ y en $y$, pasando la constante al lado derecho:
   $$(x^2 - 4x) + (y^2 + 6y) = 12$$
2. Completamos cuadrados sumando $\left(\frac{-4}{2}\right)^2 = 4$ y $\left(\frac{6}{2}\right)^2 = 9$ en ambos lados de la ecuación:
   $$(x^2 - 4x + 4) + (y^2 + 6y + 9) = 12 + 4 + 9$$
3. Factorizamos como binomios al cuadrado:
   $$(x - 2)^2 + (y + 3)^2 = 25$$
Comparando con la forma $(x - h)^2 + (y - k)^2 = r^2$:
- Centro: $h = 2$, $k = -3 \implies C(2, -3)$
- Radio: $r^2 = 25 \implies r = \sqrt{25} = 5$
[/EXPLICACION]
[/PREGUNTA]

[/TEMA]