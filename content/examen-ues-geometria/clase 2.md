---
id: "matematicas-geometria-02-triangulos-oblicuangulos"
title: "Geometría: Resolución de Triángulos Oblicuángulos"
description: "Aprende a resolver triángulos que no tienen ángulo recto utilizando la Ley de Senos y la Ley de Cosenos paso a paso, con aplicaciones prácticas y reactivos tipo examen de admisión."
especialidad: "ciencias-exactas"
materia: "matematicas"
order: 12
tags: ["matematicas", "geometria", "triangulos-oblicuangulos", "ley-de-senos", "ley-de-cosenos", "admision-ues"]
lastUpdated: "2026-09-19"
---

[TEMA nombre="Más Allá del Ángulo Recto: Ley de Senos y Ley de Cosenos"]

En la lección anterior vimos cómo resolver triángulos que tienen una esquina recta de $90^\circ$ usando el Teorema de Pitágoras y las razones trigonométricas directas. Pero, ¿qué pasa cuando ninguna de las esquinas del triángulo mide $90^\circ$? A este tipo de figuras las conocemos como **triángulos oblicuángulos** (pueden ser acutángulos si todos sus ángulos son menores a $90^\circ$, u obtusángulos si tienen un ángulo mayor a $90^\circ$).

Para descifrar sus lados y ángulos desconocidos, los matemáticos desarrollaron dos herramientas universales: la **Ley de Senos** y la **Ley de Cosenos**. Ambas funcionan en cualquier triángulo del universo.

*Convención habitual de nomenclatura:*  
Llamamos a los ángulos con letras mayúsculas ($A$, $B$, $C$) y a los lados opuestos a cada ángulo con su respectiva letra minúscula ($a$, $b$, $c$). Recuerda además la regla de oro: **la suma de los tres ángulos internos de cualquier triángulo plano siempre es igual a $180^\circ$** ($A + B + C = 180^\circ$).

---

### 1. La Ley de Senos y su Aplicación

Imagina que cada lado de un triángulo "mira" hacia su ángulo opuesto. La Ley de Senos establece que existe una armonía constante: el cociente entre la longitud de un lado y el seno de su ángulo frontal es idéntico para las tres parejas del triángulo.

[DEFINICION nombre="Ley de Senos"]
En cualquier triángulo con lados $a, b, c$ y ángulos opuestos $A, B, C$:
$$\frac{a}{\operatorname{sen}(A)} = \frac{b}{\operatorname{sen}(B)} = \frac{c}{\operatorname{sen}(C)}$$

**¿Cuándo es el momento ideal para usarla?**
1. **Caso LAA o ALA:** Cuando conoces **dos ángulos y cualquier lado** (como conoces dos ángulos, el tercero sale restando de $180^\circ$, y luego emparejas lado/seno).
2. **Caso LLA:** Cuando conoces **dos lados y el ángulo opuesto a uno de ellos**.
[/DEFINICION]

[PREGUNTA tipo="opcion_multiple"]
Nivel Fácil: En un triángulo $ABC$, el ángulo $A$ mide $45^\circ$ y su lado opuesto mide $a = 10\sqrt{2}\text{ cm}$. Si el ángulo $B$ mide $30^\circ$, ¿cuánto mide el lado opuesto $b$? (Recuerda que $\operatorname{sen}(45^\circ) = \frac{\sqrt{2}}{2}$ y $\operatorname{sen}(30^\circ) = \frac{1}{2}$)
[RESPUESTA correcta="true"]10 cm[/RESPUESTA]
[RESPUESTA]20 cm[/RESPUESTA]
[RESPUESTA]$10\sqrt{2}\text{ cm}$[/RESPUESTA]
[RESPUESTA]5 cm[/RESPUESTA]
[EXPLICACION]
Establecemos la proporción de la Ley de Senos:
$$\frac{a}{\operatorname{sen}(A)} = \frac{b}{\operatorname{sen}(B)} \implies \frac{10\sqrt{2}}{\operatorname{sen}(45^\circ)} = \frac{b}{\operatorname{sen}(30^\circ)}$$
Sustituimos los valores trigonométricos notables:
$$\frac{10\sqrt{2}}{\frac{\sqrt{2}}{2}} = \frac{b}{\frac{1}{2}} \implies \frac{10\sqrt{2} \times 2}{\sqrt{2}} = 2b \implies 20 = 2b \implies b = 10\text{ cm}$$
[/EXPLICACION]
[/PREGUNTA]

[PREGUNTA tipo="opcion_multiple"]
Nivel Básico - Conceptual: Un topógrafo conoce dos ángulos de un terreno triangular: $A = 75^\circ$ y $B = 65^\circ$. Además, mide el lado intermedio entre ellos $c = 40\text{ metros}$. ¿Cuál es el primer paso indispensable para poder calcular los lados restantes mediante la Ley de Senos?
[RESPUESTA correcta="true"]Calcular el tercer ángulo $C = 180^\circ - (75^\circ + 65^\circ) = 40^\circ$ para tener la pareja completa con el lado c[/RESPUESTA]
[RESPUESTA]Aplicar el Teorema de Pitágoras con los ángulos dados[/RESPUESTA]
[RESPUESTA]Dividir el lado c entre la suma de los dos ángulos conocidos[/RESPUESTA]
[RESPUESTA]Multiplicar el lado c por el coseno de 75°[/RESPUESTA]
[EXPLICACION]
Para utilizar la Ley de Senos se necesita al menos una pareja completa (un lado y el seno de su ángulo opuesto). Dado que el lado conocido es $c$, requerimos obligatoriamente el ángulo opuesto $C$. Como la suma interna de los ángulos de un triángulo es $180^\circ$:  
$$C = 180^\circ - 75^\circ - 65^\circ = 40^\circ$$  
Con esto ya disponemos del cociente de referencia $\frac{c}{\operatorname{sen}(C)} = \frac{40}{\operatorname{sen}(40^\circ)}$.
[/EXPLICACION]
[/PREGUNTA]

---

### 2. La Ley de Cosenos: La Generalización de Pitágoras

¿Qué ocurre si quieres resolver un triángulo pero no tienes ninguna pareja completa de lado y ángulo opuesto? Por ejemplo, si conoces los tres lados ($LLL$) o si conoces dos lados y el ángulo que está atrapado entre ellos ($LAL$). Aquí la Ley de Senos no se puede aplicar directamente, y es donde entra la **Ley de Cosenos**.

Observa con atención su estructura: es idéntica al Teorema de Pitágoras, pero con un término de corrección al final que descuenta la falta de perpendicularidad.

[DEFINICION nombre="Ley de Cosenos"]
En cualquier triángulo con lados $a, b, c$ y ángulos opuestos $A, B, C$:
$$a^2 = b^2 + c^2 - 2bc \cos(A)$$
$$b^2 = a^2 + c^2 - 2ac \cos(B)$$
$$c^2 = a^2 + b^2 - 2ab \cos(C)$$

*(Fíjate que si el ángulo fuera recto, por ejemplo $C = 90^\circ$, como $\cos(90^\circ) = 0$, la fórmula se convierte exactamente en $c^2 = a^2 + b^2$).*

**¿Cuándo se utiliza?**
1. **Caso LAL:** Conoces **dos lados y el ángulo comprendido entre ellos**. Te permite hallar el tercer lado.
2. **Caso LLL:** Conoces **los tres lados** del triángulo. Te permite despejar el coseno de cualquier ángulo interior:
   $$\cos(C) = \frac{a^2 + b^2 - c^2}{2ab}$$
[/DEFINICION]

[PREGUNTA tipo="opcion_multiple"]
Nivel Intermedio: Dos barcos zarpan de un mismo puerto en trayectorias rectilíneas. El barco 1 recorre $6\text{ millas}$ náuticas y el barco 2 recorre $10\text{ millas}$ náuticas. Si las trayectorias de ambos forman un ángulo de $60^\circ$ entre sí, ¿a qué distancia en línea recta se encuentran separados los dos barcos en ese instante? (Considera $\cos(60^\circ) = 0.5$)
[RESPUESTA correcta="true"]$2\sqrt{19}\text{ millas}$[/RESPUESTA]
[RESPUESTA]$14\text{ millas}$[/RESPUESTA]
[RESPUESTA]8 millas[/RESPUESTA]
[RESPUESTA]$\sqrt{136}\text{ millas}$[/RESPUESTA]
[EXPLICACION]
Tenemos el caso LAL con lados $a = 6$, $b = 10$ y el ángulo intermedio $C = 60^\circ$. Calculamos la distancia de separación $c$ usando la Ley de Cosenos:
$$c^2 = a^2 + b^2 - 2ab \cos(C)$$
$$c^2 = 6^2 + 10^2 - 2(6)(10)\cos(60^\circ)$$
$$c^2 = 36 + 100 - 120(0.5) = 136 - 60 = 76$$
$$c = \sqrt{76} = \sqrt{4 \times 19} = 2\sqrt{19}\text{ millas}$$
[/EXPLICACION]
[/PREGUNTA]

[PREGUNTA tipo="opcion_multiple"]
Nivel Intermedio: Los tres lados de un terreno triangular miden $a = 3\text{ m}$, $b = 5\text{ m}$ y $c = 7\text{ m}$. ¿Cuál es el valor del ángulo opuesto al lado mayor ($C$)? (Dato: $\cos(120^\circ) = -0.5$)
[RESPUESTA correcta="true"]$120^\circ$[/RESPUESTA]
[RESPUESTA]$60^\circ$[/RESPUESTA]
[RESPUESTA]$90^\circ$[/RESPUESTA]
[RESPUESTA]$135^\circ$[/RESPUESTA]
[EXPLICACION]
Despejamos el ángulo $C$ opuesto al lado $c = 7$ mediante la Ley de Cosenos:
$$\cos(C) = \frac{a^2 + b^2 - c^2}{2ab} = \frac{3^2 + 5^2 - 7^2}{2(3)(5)}$$
$$\cos(C) = \frac{9 + 25 - 49}{30} = \frac{34 - 49}{30} = \frac{-15}{30} = -0.5$$
El ángulo cuyo coseno es $-0.5$ en el intervalo $[0^\circ, 180^\circ]$ es un ángulo obtuso de $120^\circ$ (segundo cuadrante).
[/EXPLICACION]
[/PREGUNTA]

---

### 3. Criterios de Elección y Problemas Integrados

Para no dudar durante el examen de admisión, memoriza este esquema de decisión rápida:

[DEFINICION nombre="Guía Práctica de Selección"]
*   ¿Tienes **pareja completa** (un lado y su ángulo opuesto)? $\rightarrow$ **Usa Ley de Senos**.
*   ¿Tienes **dos lados y el ángulo encerrado entre ellos** ($LAL$)? $\rightarrow$ **Usa Ley de Cosenos** para encontrar el lado opuesto.
*   ¿Tienes **los tres lados** y buscas un ángulo ($LLL$)? $\rightarrow$ **Usa Ley de Cosenos**.
[/DEFINICION]

[PREGUNTA tipo="opcion_multiple"]
Nivel Avanzado - Tipo Examen Admisión UES: Dos puestos de vigilancia costera $A$ y $B$ están separados por una distancia horizontal de $10\text{ km}$ sobre la línea de playa. Ambos divisan un bote en el mar. Desde la estación $A$ se mide un ángulo de visión hacia el bote de $60^\circ$ respecto a la línea costera, mientras que desde la estación $B$ el ángulo medido es de $45^\circ$. ¿Cuál es la distancia exacta en línea recta desde la estación $B$ hasta el bote?
(Dato: $\operatorname{sen}(75^\circ) = \frac{\sqrt{6} + \sqrt{2}}{4}$ y $\operatorname{sen}(60^\circ) = \frac{\sqrt{3}}{2}$)
[RESPUESTA correcta="true"]$\frac{20\sqrt{3}}{\sqrt{6} + \sqrt{2}}\text{ km} = 10(\sqrt{3} - 1)\sqrt{2}\text{ km}$[/RESPUESTA]
[RESPUESTA]$5\sqrt{2}\text{ km}$[/RESPUESTA]
[RESPUESTA]$10\sqrt{3}\text{ km}$[/RESPUESTA]
[RESPUESTA]$\frac{10\sqrt{2}}{\sqrt{3}}\text{ km}$[/RESPUESTA]
[EXPLICACION]
Representamos el triángulo formado por los puntos $A$, $B$ y el bote ($C$):
1. Los ángulos en las estaciones son $A = 60^\circ$ y $B = 45^\circ$.
2. Calculamos el ángulo en el bote ($C$):
   $$C = 180^\circ - (60^\circ + 45^\circ) = 180^\circ - 105^\circ = 75^\circ$$
3. El lado conocido es la distancia entre las estaciones $c = 10\text{ km}$, que es opuesto al ángulo $C = 75^\circ$.
4. Queremos hallar la distancia desde la estación $B$ hasta el bote, la cual corresponde al lado $a$ (opuesto al ángulo $A = 60^\circ$).
5. Aplicamos la Ley de Senos:
   $$\frac{a}{\operatorname{sen}(60^\circ)} = \frac{c}{\operatorname{sen}(75^\circ)} \implies a = \frac{10 \cdot \operatorname{sen}(60^\circ)}{\operatorname{sen}(75^\circ)}$$
   Sustituyendo los valores trigonométricos:
   $$a = \frac{10 \cdot \frac{\sqrt{3}}{2}}{\frac{\sqrt{6} + \sqrt{2}}{4}} = \frac{5\sqrt{3}}{\frac{\sqrt{6} + \sqrt{2}}{4}} = \frac{20\sqrt{3}}{\sqrt{6} + \sqrt{2}}\text{ km}$$
[/EXPLICACION]
[/PREGUNTA]

[/TEMA]