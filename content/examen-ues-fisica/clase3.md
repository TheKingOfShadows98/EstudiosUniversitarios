---
id: "fisica-03-vectores-y-operaciones"
title: "Vectores: Representación, Propiedades y Operaciones"
description: "Aprende desde cero qué es un vector, cómo representarlo con flechas y componentes cartesianas, el negativo de un vector, y cómo sumar y restar vectores para el examen de admisión."
especialidad: "ciencias-naturales"
materia: "fisica"
order: 3
tags: ["fisica", "vectores", "escalares", "componentes-rectangulares", "suma-de-vectores", "admision-ues"]
lastUpdated: "2026-09-17"
---

[TEMA nombre="El Sentido del Movimiento: Vectores y Operaciones Fundamentales"]

Imagina que estás en medio de una plaza desconocida y le preguntas a alguien cómo llegar a la estación de tren. Si esa persona solo te dice: *"camina 500 metros"*, te quedarás igual de perdido: ¿hacia el norte? ¿hacia la derecha? ¿hacia atrás? Caminar 500 metros en la dirección equivocada te alejaría del destino.

Para resolver este problema, la física no solo necesita saber **cuánto** mide algo, sino **hacia dónde** apunta. Aquí es donde entran en juego los **vectores**.

---

### 1. Cantidades Escalares vs. Cantidades Vectoriales

Comencemos distinguiendo las dos formas en que la naturaleza se manifiesta ante una medición:

[DEFINICION nombre="Cantidad Escalar"]
Es aquella magnitud física que queda **total y unívocamente determinada con solo indicar un número (magnitud) y su correspondiente unidad de medida**. No posee orientación ni sentido en el espacio.
*Ejemplos cotidianos:* La masa ($5\text{ kg}$), el tiempo ($30\text{ s}$), la temperatura ($24\ ^\circ\text{C}$), el volumen ($2\text{ L}$) o la energía ($100\text{ J}$).

[PREGUNTA tipo="opcion_multiple"]
Un termómetro clínico marca exactamente $37.5\ ^\circ\text{C}$. ¿Por qué la temperatura se clasifica estrictamente como una magnitud escalar?
[RESPUESTA correcta="true"]Porque queda completamente definida por su valor numérico y unidad, careciendo de sentido y dirección espacial[/RESPUESTA]
[RESPUESTA]Porque varía dependiendo de si se mide en dirección horizontal o vertical[/RESPUESTA]
[RESPUESTA]Porque es una magnitud que no se puede medir en el Sistema Internacional[/RESPUESTA]
[RESPUESTA]Porque solo puede tomar valores numéricos positivos[/RESPUESTA]
[EXPLICACION]
La temperatura no tiene "rumbo" ni apunta hacia ningún lado (no existen "37.5 °C hacia el norte"). Al quedar perfectamente descrita con la cifra numérica y la unidad de medida, es por definición una magnitud escalar.
[/EXPLICACION]
[/PREGUNTA]
[/DEFINICION]

[DEFINICION nombre="Cantidad Vectorial"]
Es aquella magnitud física que, para estar completamente descrita, requiere especificar **tres elementos obligatorios**:
1. **Módulo (o Magnitud):** El tamaño o valor numérico junto a su unidad (la longitud de la flecha).
2. **Dirección:** La inclinación de la recta sobre la que descansa el vector (generalmente medida como un ángulo $\theta$ respecto al eje horizontal).
3. **Sentido:** La orientación hacia donde apunta la punta de la flecha (por ejemplo: hacia el este, hacia arriba, positivo o negativo).
*Ejemplos cotidianos:* El desplazamiento, la velocidad, la aceleración, la fuerza y la cantidad de movimiento.

[PREGUNTA tipo="opcion_multiple"]
En una prueba de control de tráfico aéreo, un controlador reporta que un avión vuela a $600\text{ km/h}$ con rumbo $30^\circ$ al Noreste. ¿Qué tipo de cantidad física está reportando?
[RESPUESTA correcta="true"]Una cantidad vectorial, porque indica módulo (600 km/h), dirección (30°) y sentido (Noreste)[/RESPUESTA]
[RESPUESTA]Una cantidad escalar, porque la rapidez es constante[/RESPUESTA]
[RESPUESTA]Una magnitud fundamental del Sistema Internacional[/RESPUESTA]
[RESPUESTA]Un escalar con sentido imaginario[/RESPUESTA]
[EXPLICACION]
Al combinar la rapidez ($600\text{ km/h}$) con la orientación angular e indicación geográfica ($30^\circ$ al Noreste), se está especificando la velocidad completa del avión, la cual es una magnitud vectorial.
[/EXPLICACION]
[/PREGUNTA]
[/DEFINICION]

---

### 2. Simbología y Representación Gráfica de un Vector

En los libros y exámenes, un vector se identifica con una letra que lleva una pequeña flecha encima: $\vec{A}$, $\vec{v}$ o $\vec{F}$. Si solo escribimos la letra sin flecha ($A$) o entre barras ($|\vec{A}|$), nos estamos refiriendo únicamente a su **módulo** (siempre positivo).

Gráficamente, un vector se dibuja como una **flecha recta**:
*   El punto de origen de la flecha se llama **origen o cola**.
*   El extremo final con punta de flecha se llama **cabeza o punto de aplicación**.
*   La longitud física del trazo dibujado es proporcional a la magnitud de la variable.

---

### 3. Igualdad de Vectores y el Negativo de un Vector

¿Cuándo podemos decir que dos vectores son idénticos?

[DEFINICION nombre="Igualdad de Vectores y Vector Negativo"]
*   **Igualdad de Vectores:** Dos vectores $\vec{A}$ y $\vec{B}$ son estrictamente iguales ($\vec{A} = \vec{B}$) si y solo si tienen **el mismo módulo, la misma dirección y el mismo sentido**, sin importar en qué punto del plano estén dibujados (puedes mover un vector paralelamente a sí mismo y sigue siendo el mismo).
*   **El Negativo de un Vector ($-\vec{A}$):** Es aquel vector que posee **exactamente el mismo módulo y la misma dirección** que $\vec{A}$, pero **sentido exactamente opuesto** ($180^\circ$ de diferencia). Si $\vec{A}$ te empuja $10\text{ N}$ a la derecha, $-\vec{A}$ te empuja $10\text{ N}$ a la izquierda.

[PREGUNTA tipo="opcion_multiple"]
Dos automóviles parten de un mismo peaje: el auto 1 viaja a $80\text{ km/h}$ hacia el Norte y el auto 2 viaja a $80\text{ km/h}$ hacia el Sur. ¿Son iguales sus vectores de velocidad $\vec{v}_1$ y $\vec{v}_2$?
[RESPUESTA correcta="true"]No, porque aunque tienen igual módulo y dirección sobre la misma recta vertical, tienen sentidos opuestos ($\vec{v}_2 = -\vec{v}_1$)[/RESPUESTA]
[RESPUESTA]Sí, porque ambos marcan exactamente 80 km/h en el velocímetro[/RESPUESTA]
[RESPUESTA]Sí, porque parten del mismo punto de referencia[/RESPUESTA]
[RESPUESTA]No, porque uno es una cantidad escalar y el otro vectorial[/RESPUESTA]
[EXPLICACION]
Para que dos vectores sean iguales deben coincidir en magnitud, dirección y sentido. Como uno apunta hacia el Norte y el otro hacia el Sur, sus sentidos son contrarios; de hecho, $\vec{v}_2$ es el vector negativo de $\vec{v}_1$ ($\vec{v}_2 = -\vec{v}_1$). Sus rapideces son iguales, pero sus velocidades vectoriales no lo son.
[/EXPLICACION]
[/PREGUNTA]
[/DEFINICION]

---

### 4. Suma y Resta de Vectores (Métodos Gráficos y Analíticos)

Sumar vectores no es lo mismo que sumar números ordinarios ($3 + 4$ no siempre es $7$ en vectores). El resultado de la suma de varios vectores se denomina **vector resultante ($\vec{R}$)**.

#### A. Métodos Gráficos
1.  **Método del Triángulo / Polígono:** Se coloca la cola del segundo vector en la punta del primer vector; el vector resultante va desde la cola del primero hasta la punta del último.
2.  **Método del Paralelogramo:** Se unen los dos vectores por su origen común y se proyectan líneas paralelas formando una figura de cuatro lados; la diagonal que parte del origen es la resultante.

#### B. Componentes Rectangulares (El método más exacto)
Cualquier vector $\vec{A}$ inclinado a un ángulo $\theta$ medido desde el eje positivo X se puede descomponer en dos sombras perpendiculares:
*   Componente horizontal en X: $A_x = |\vec{A}| \cos(\theta)$
*   Componente vertical en Y: $A_y = |\vec{A}| \operatorname{sen}(\theta)$

Para sumar vectores analíticamente:
1. Se suman todas las componentes horizontales: $R_x = A_x + B_x$
2. Se suman todas las componentes verticales: $R_y = A_y + B_y$
3. Se halla el módulo final usando el Teorema de Pitágoras:
   $$|\vec{R}| = \sqrt{R_x^2 + R_y^2}$$

[DEFINICION nombre="Suma Vectorial Perpendicular y Resta"]
*   **Vectores Perpendiculares ($90^\circ$):** Si dos vectores forman un ángulo recto entre sí, el módulo de su resultante es la hipotenusa de un triángulo rectángulo:
    $$|\vec{R}| = \sqrt{A^2 + B^2}$$
*   **Resta de Vectores:** Restar un vector $\vec{B}$ a un vector $\vec{A}$ equivale a **sumarle su negativo**:
    $$\vec{A} - \vec{B} = \vec{A} + (-\vec{B})$$

[PREGUNTA tipo="opcion_multiple"]
Un excursionista camina $3\text{ km}$ en línea recta hacia el Este y luego dobla hacia el Norte caminando $4\text{ km}$. ¿Cuál es el módulo del desplazamiento resultante total desde su punto de partida?
[RESPUESTA correcta="true"]5 km[/RESPUESTA]
[RESPUESTA]7 km[/RESPUESTA]
[RESPUESTA]1 km[/RESPUESTA]
[RESPUESTA]12 km[/RESPUESTA]
[EXPLICACION]
Como el Este y el Norte forman un ángulo de $90^\circ$ entre sí, los desplazamientos forman los catetos de un triángulo rectángulo. Aplicamos el Teorema de Pitágoras:
$$|\vec{R}| = \sqrt{3^2 + 4^2} = \sqrt{9 + 16} = \sqrt{25} = 5\text{ km}$$
*Nota:* La distancia recorrida escalarmente es $3 + 4 = 7\text{ km}$, pero el módulo del desplazamiento vectorial neto es de solo $5\text{ km}$.
[/EXPLICACION]
[/PREGUNTA]
[/DEFINICION]

---

### 5. Suma de Vectores Colineales y Ángulos Extremos (Nivel Examen UES)

¿Qué ocurre con la resultante cuando los vectores están alineados en la misma dirección?

[DEFINICION nombre="Resultante Máxima y Mínima de dos Vectores"]
Dados dos vectores de módulos fijos $A$ y $B$:
*   **Resultante Máxima:** Ocurre cuando apuntan en el **mismo sentido** ($\theta = 0^\circ$):  
    $$R_{\text{máx}} = A + B$$
*   **Resultante Mínima:** Ocurre cuando apuntan en **sentidos opuestos** ($\theta = 180^\circ$):  
    $$R_{\text{mín}} = |A - B|$$
El módulo de la resultante entre dos vectores siempre estará acotado en el intervalo:  
$$|A - B| \le |\vec{R}| \le A + B$$

[PREGUNTA tipo="opcion_multiple"]
Nivel Admisión: Dos fuerzas de magnitudes $F_1 = 8\text{ N}$ y $F_2 = 6\text{ N}$ se aplican simultáneamente sobre una misma caja. ¿Cuál de los siguientes valores de fuerza resultante es FÍSICAMENTE IMPOSIBLE de obtener, sin importar el ángulo que formen entre sí?
[RESPUESTA correcta="true"]15 N[/RESPUESTA]
[RESPUESTA]14 N[/RESPUESTA]
[RESPUESTA]10 N[/RESPUESTA]
[RESPUESTA]2 N[/RESPUESTA]
[EXPLICACION]
Calculamos los límites extremos para la resultante:
*   Valor máximo posible ($\theta = 0^\circ$): $8\text{ N} + 6\text{ N} = 14\text{ N}$
*   Valor mínimo posible ($\theta = 180^\circ$): $8\text{ N} - 6\text{ N} = 2\text{ N}$  
Cualquier ángulo intermedio producirá un valor comprendido entre $2\text{ N}$ y $14\text{ N}$ (por ejemplo, a $90^\circ$ da $\sqrt{8^2 + 6^2} = 10\text{ N}$). Por ende, una resultante de $15\text{ N}$ es físicamente imposible con esas dos fuerzas.
[/EXPLICACION]
[/PREGUNTA]
[/DEFINICION]

[/TEMA]