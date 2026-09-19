---
id: "matematicas-geometria-03-identidades-y-ecuaciones-trigonometricas"
title: "Geometría: Identidades y Ecuaciones Trigonométricas"
description: "Aprende desde cero qué es una identidad trigonométrica fundamental, cómo simplificar expresiones complejas y cómo resolver ecuaciones trigonométricas para el examen de admisión UES."
especialidad: "ciencias-exactas"
materia: "matematicas"
order: 13
tags: ["matematicas", "geometria", "trigonometria", "identidades-trigonometricas", "ecuaciones-trigonometricas", "admision-ues"]
lastUpdated: "2026-09-19"
---

[TEMA nombre="El Espejo de los Ángulos: Identidades y Ecuaciones Trigonométricas"]

En las lecciones anteriores vimos cómo calcular lados y ángulos en triángulos rectángulos y oblicuángulos usando razones trigonométricas. Pero en el álgebra geométrica surge una pregunta muy natural: ¿qué pasa si combinamos senos, cosenos y tangentes dentro de una igualdad matemática?

Aquí nos encontramos con dos conceptos fundamentales que a menudo se confunden, pero son muy distintos:
1. **Una Identidad Trigonométrica:** Es una igualdad absoluta que **siempre se cumple**, sin importar qué valor de ángulo le pongas a la variable (es como decir $x + x = 2x$; es una verdad universal de las funciones).
2. **Una Ecuación Trigonométrica:** Es un acertijo o problema donde la igualdad solo es verdadera para **ciertos ángulos específicos** que debemos encontrar (es como decir $2x = 6$, que solo se cumple si $x = 3$).

---

### 1. Las Identidades Trigonométricas Fundamentales

Imagina las identidades como herramientas de traducción: si una expresión matemática tiene muchas funciones mezcladas (tangentes, secantes, cosecantes), las identidades nos permiten traducirlo todo al lenguaje simple de senos y cosenos.

[DEFINICION nombre="Identidades Recíprocas y por Cociente"]
Las seis razones trigonométricas nacen de relaciones directas entre sí:
*   **Identidades Recíprocas (Inversas multiplicativas):**
    $$\csc(\theta) = \frac{1}{\operatorname{sen}(\theta)}, \quad \sec(\theta) = \frac{1}{\cos(\theta)}, \quad \cot(\theta) = \frac{1}{\tan(\theta)}$$
*   **Identidades por Cociente:**
    $$\tan(\theta) = \frac{\operatorname{sen}(\theta)}{\cos(\theta)}, \quad \cot(\theta) = \frac{\cos(\theta)}{\operatorname{sen}(\theta)}$$
[/DEFINICION]

La reina indiscutible de todas las identidades nace directamente del Teorema de Pitágoras en el círculo unitario (donde la hipotenusa vale $1$, el cateto vertical es $\operatorname{sen}(\theta)$ y el horizontal es $\cos(\theta)$):

[DEFINICION nombre="Identidades Pitagóricas"]
La relación pitagórica fundamental afirma que:
$$\operatorname{sen}^2(\theta) + \cos^2(\theta) = 1$$
De esta ecuación madre se desprenden dos formas auxiliares muy útiles al dividir toda la expresión entre $\cos^2(\theta)$ o entre $\operatorname{sen}^2(\theta)$:
*   $$\tan^2(\theta) + 1 = \sec^2(\theta)$$
*   $$1 + \cot^2(\theta) = \csc^2(\theta)$$
[/DEFINICION]

[PREGUNTA tipo="opcion_multiple"]
Nivel Fácil: Si se sabe que un ángulo agudo $\theta$ cumple con $\operatorname{sen}(\theta) = \frac{3}{5}$, ¿cuál es el valor exacto de $\cos(\theta)$ utilizando la identidad pitagórica fundamental?
[RESPUESTA correcta="true"]$\frac{4}{5}$[/RESPUESTA]
[RESPUESTA]$\frac{2}{5}$[/RESPUESTA]
[RESPUESTA]$\frac{16}{25}$[/RESPUESTA]
[RESPUESTA]$\frac{5}{4}$[/RESPUESTA]
[EXPLICACION]
Partimos de la identidad pitagórica $\operatorname{sen}^2(\theta) + \cos^2(\theta) = 1$.  
Despejamos el coseno:
$$\cos^2(\theta) = 1 - \operatorname{sen}^2(\theta) = 1 - \left(\frac{3}{5}\right)^2 = 1 - \frac{9}{25} = \frac{16}{25}$$
Al extraer la raíz cuadrada positiva (por ser un ángulo agudo):
$$\cos(\theta) = \sqrt{\frac{16}{25}} = \frac{4}{5}$$
[/EXPLICACION]
[/PREGUNTA]

[PREGUNTA tipo="opcion_multiple"]
Nivel Fácil - Conceptual: ¿Cuál de las siguientes igualdades es una identidad trigonométrica universalmente válida para todo ángulo donde las funciones estén bien definidas?
[RESPUESTA correcta="true"]$\sec^2(x) - \tan^2(x) = 1$[/RESPUESTA]
[RESPUESTA]$\operatorname{sen}(x) + \cos(x) = 1$[/RESPUESTA]
[RESPUESTA]$\tan(x) = \frac{\cos(x)}{\operatorname{sen}(x)}$[/RESPUESTA]
[RESPUESTA]$\csc(x) \cdot \cos(x) = 1$[/RESPUESTA]
[EXPLICACION]
De la identidad pitagórica derivada $1 + \tan^2(x) = \sec^2(x)$, si restamos $\tan^2(x)$ en ambos lados obtenemos directamente:
$$\sec^2(x) - \tan^2(x) = 1$$
En cambio, $\operatorname{sen}(x) + \cos(x) = 1$ solo se cumple para ángulos particulares (como $0^\circ$ o $90^\circ$), no para todos los ángulos.
[/EXPLICACION]
[/PREGUNTA]

---

### 2. Simplificación de Expresiones Trigonométricas

Una de las preguntas más frecuentes en las pruebas de admisión consiste en tomar una fracción larga y aparatosa y transformarla en un solo término simple.

[DEFINICION nombre="Estrategia Maestra para Simplificar"]
1.  **Pasa todo a términos de seno y coseno:** Sustituye de inmediato cualquier tangente, cotangente, secante o cosecante.
2.  **Realiza las operaciones algebraicas:** Suma fracciones encontrando el común denominador o factoriza términos comunes.
3.  **Aplica identidades pitagóricas:** Busca apariciones de $1 - \operatorname{sen}^2(x)$ para cambiarlo por $\cos^2(x)$ (o viceversa).
[/DEFINICION]

[PREGUNTA tipo="opcion_multiple"]
Nivel Intermedio: Al simplificar al máximo la expresión trigonométrica $\frac{\tan(\theta)}{\sec(\theta)}$, ¿qué resultado irreductible se obtiene?
[RESPUESTA correcta="true"]$\operatorname{sen}(\theta)$[/RESPUESTA]
[RESPUESTA]$\cos(\theta)$[/RESPUESTA]
[RESPUESTA]$\csc(\theta)$[/RESPUESTA]
[RESPUESTA]1[/RESPUESTA]
[EXPLICACION]
Convertimos ambas funciones a sus definiciones en términos de seno y coseno:
$$\tan(\theta) = \frac{\operatorname{sen}(\theta)}{\cos(\theta)}, \quad \sec(\theta) = \frac{1}{\cos(\theta)}$$
Sustituimos en la fracción y aplicamos la división de fracciones (medios con medios y extremos con extremos):
$$\frac{\tan(\theta)}{\sec(\theta)} = \frac{\frac{\operatorname{sen}(\theta)}{\cos(\theta)}}{\frac{1}{\cos(\theta)}} = \frac{\operatorname{sen}(\theta) \cdot \cos(\theta)}{1 \cdot \cos(\theta)} = \operatorname{sen}(\theta)$$
[/EXPLICACION]
[/PREGUNTA]

[PREGUNTA tipo="opcion_multiple"]
Nivel Intermedio: ¿Cuál es la forma más simple equivalente a la expresión $(1 - \cos^2(x)) \cdot \csc(x)$?
[RESPUESTA correcta="true"]$\operatorname{sen}(x)$[/RESPUESTA]
[RESPUESTA]$\cos(x)$[/RESPUESTA]
[RESPUESTA]$\tan(x)$[/RESPUESTA]
[RESPUESTA]$\operatorname{sen}^3(x)$[/RESPUESTA]
[EXPLICACION]
1. Por la identidad pitagórica, sabemos que $1 - \cos^2(x) = \operatorname{sen}^2(x)$.  
2. Por la identidad recíproca, $\csc(x) = \frac{1}{\operatorname{sen}(x)}$.  
Multiplicando ambos términos:
$$\operatorname{sen}^2(x) \cdot \frac{1}{\operatorname{sen}(x)} = \frac{\operatorname{sen}^2(x)}{\operatorname{sen}(x)} = \operatorname{sen}(x)$$
[/EXPLICACION]
[/PREGUNTA]

---

### 3. Resolución de Ecuaciones Trigonométricas

Una **ecuación trigonométrica** busca los ángulos que hacen cierta una igualdad. Dado que las funciones trigonométricas son periódicas (se repiten cada vuelta entera de $360^\circ$ o $2\pi$ radianes), en los exámenes de admisión usualmente se restringe la búsqueda a **la primera vuelta**: es decir, en el intervalo $[0^\circ, 360^\circ)$ o en radianes $[0, 2\pi)$.

[DEFINICION nombre="Los Signos por Cuadrante y Ángulos de Referencia"]
Para hallar todas las soluciones en una vuelta completa:
*   **Primer Cuadrante ($0^\circ$ a $90^\circ$):** Todas las razones trigonométricas son positivas ($\theta = \alpha$).
*   **Segundo Cuadrante ($90^\circ$ a $180^\circ$):** El seno es positivo; coseno y tangente son negativos ($\theta = 180^\circ - \alpha$).
*   **Tercer Cuadrante ($180^\circ$ a $270^\circ$):** La tangente es positiva; seno y coseno son negativos ($\theta = 180^\circ + \alpha$).
*   **Cuarto Cuadrante ($270^\circ$ a $360^\circ$):** El coseno es positivo; seno y tangente son negativos ($\theta = 360^\circ - \alpha$).
*(Donde $\alpha$ es el ángulo de referencia del primer cuadrante).*
[/DEFINICION]

[PREGUNTA tipo="opcion_multiple"]
Nivel Intermedio: Resuelve la ecuación trigonométrica elemental $2\operatorname{sen}(x) - 1 = 0$ para todos los ángulos contenidos en la primera vuelta completa $[0^\circ, 360^\circ)$.
[RESPUESTA correcta="true"]$x_1 = 30^\circ$ y $x_2 = 150^\circ$[/RESPUESTA]
[RESPUESTA]$x_1 = 30^\circ$ y $x_2 = 210^\circ$[/RESPUESTA]
[RESPUESTA]$x_1 = 60^\circ$ y $x_2 = 120^\circ$[/RESPUESTA]
[RESPUESTA]Únicamente $x = 30^\circ$[/RESPUESTA]
[EXPLICACION]
Despejamos la función seno:
$$2\operatorname{sen}(x) - 1 = 0 \implies 2\operatorname{sen}(x) = 1 \implies \operatorname{sen}(x) = \frac{1}{2}$$
1. Buscamos el ángulo notable del primer cuadrante donde el seno vale $\frac{1}{2}$:  
   $$\alpha = 30^\circ$$
2. Como el valor es positivo ($+1/2$), el seno también es positivo en el **segundo cuadrante**:  
   $$x_2 = 180^\circ - 30^\circ = 150^\circ$$
Por tanto, las soluciones en una vuelta son $30^\circ$ y $150^\circ$.
[/EXPLICACION]
[/PREGUNTA]

[PREGUNTA tipo="opcion_multiple"]
Nivel Avanzado - Tipo Examen Admisión UES: Encuentra el conjunto de soluciones de la ecuación cuadrática trigonométrica $2\cos^2(x) + \cos(x) - 1 = 0$ en el intervalo $[0^\circ, 360^\circ)$.
[RESPUESTA correcta="true"]$60^\circ$, $180^\circ$ y $300^\circ$[/RESPUESTA]
[RESPUESTA]$30^\circ$, $150^\circ$ y $270^\circ$[/RESPUESTA]
[RESPUESTA]$60^\circ$ y $180^\circ$ únicamente[/RESPUESTA]
[RESPUESTA]$45^\circ$, $135^\circ$ y $315^\circ$[/RESPUESTA]
[EXPLICACION]
Podemos hacer un cambio de variable mental llamando $u = \cos(x)$, lo que nos da la ecuación cuadrática ordinaria:
$$2u^2 + u - 1 = 0$$
Factorizamos buscando dos factores:
$$(2u - 1)(u + 1) = 0$$
Esto produce dos posibles valores para $\cos(x)$:
1. **Primer caso:** $2u - 1 = 0 \implies u = \cos(x) = \frac{1}{2}$.  
   El coseno es positivo en el I y IV cuadrante:
   - En el I cuadrante: $x = 60^\circ$.
   - En el IV cuadrante: $x = 360^\circ - 60^\circ = 300^\circ$.
2. **Segundo caso:** $u + 1 = 0 \implies u = \cos(x) = -1$.  
   El ángulo cuyo coseno vale $-1$ en la primera vuelta es:
   - $x = 180^\circ$.

Reuniendo todas las soluciones ordenadas: $\{60^\circ, 180^\circ, 300^\circ\}$.
[/EXPLICACION]
[/PREGUNTA]

[/TEMA]