---
id: "quimica-04-numeros-cuanticos"
title: "Números Cuánticos y Configuración Electrónica"
description: "Aprende el código postal de los electrones: nivel principal, momento angular, magnético y espín, junto con la regla de las diagonales explicada paso a paso."
especialidad: "ciencias-naturales"
materia: "quimica"
order: 4
tags: ["quimica", "numeros-cuanticos", "configuracion-electronica", "orbitales", "aufbau", "admision-ues"]
lastUpdated: "2026-09-17"
---

[TEMA nombre="El Código Postal del Electrón: Números Cuánticos y Distribución Electrónica"]

Hasta ahora sabemos que los electrones orbitan alrededor del núcleo atómico, pero ¿dónde se ubican exactamente? No giran en pistas circulares fijas como los planetas alrededor del Sol, sino en regiones del espacio llamadas **orbitales atómicos**, donde existe una alta probabilidad de encontrarlos.

Para ubicar a cualquier persona en el mundo real necesitas su país, ciudad, calle y número de casa. Con los electrones ocurre algo idéntico: la mecánica cuántica utiliza cuatro valores numéricos conocidos como **números cuánticos** para describir el estado energético, la forma geométrica, la orientación y el giro de cada electrón en un átomo.

---

### 1. Los Cuatro Números Cuánticos

[DEFINICION nombre="Número Cuántico Principal ($n$)"]
Indica el **nivel de energía principal** del electrón y el tamaño relativo del orbital (su distancia promedio al núcleo). 
*   **Valores permitidos:** Números enteros positivos: $n = 1, 2, 3, 4, 5, 6, 7 \dots$
*   A mayor valor de $n$, el electrón tiene más energía y se encuentra más alejado del núcleo.
[/DEFINICION]

[DEFINICION nombre="Número Cuántico del Momento Angular o Secundario ($l$)"]
Determina la **forma geométrica** del orbital o subnivel de energía.
*   **Valores permitidos:** Enteros desde $0$ hasta $(n - 1)$.
*   Cada valor numérico de $l$ corresponde a una letra tradicional:
    *   $l = 0 \rightarrow$ Subnivel **s** (forma esférica, aloja hasta 2 $e^-$).
    *   $l = 1 \rightarrow$ Subnivel **p** (forma bilobular, aloja hasta 6 $e^-$).
    *   $l = 2 \rightarrow$ Subnivel **d** (forma tetralobular, aloja hasta 10 $e^-$).
    *   $l = 3 \rightarrow$ Subnivel **f** (geometría compleja, aloja hasta 14 $e^-$).
[/DEFINICION]

[DEFINICION nombre="Número Cuántico Magnético ($m_l$)"]
Describe la **orientación espacial** que adopta el orbital en presencia de un campo magnético.
*   **Valores permitidos:** Números enteros en el rango de $-l$ pasando por el $0$ hasta $+l$.
*   Por ejemplo, si $l = 1$ (subnivel $p$), los valores de $m_l$ posibles son $-1, 0, +1$, lo cual representa tres orbitales espaciales orientados en los ejes: $p_x, p_y, p_z$.
[/DEFINICION]

[DEFINICION nombre="Número Cuántico de Espín ($m_s$)"]
Representa el sentido de rotación o giro intrínseco del electrón sobre su propio eje magnético.
*   **Valores permitidos:** Únicamente $+\frac{1}{2}$ (giro en un sentido, simbolizado con una flecha hacia arriba $\uparrow$) o $-\frac{1}{2}$ (giro inverso, flecha hacia abajo $\downarrow$).
[/DEFINICION]

---

### 2. Reglas para Construir la Configuración Electrónica

La **configuración electrónica** es el mapa que nos dice cómo se organizan los electrones de un átomo desde el subnivel más estable hasta el más externo. Se rige por tres principios básicos:

1.  **Principio de Aufbau (o de Mínima Energía):** Los electrones van llenando primero los orbitales de menor energía disponible antes de ocupar los niveles superiores (se sigue el conocido diagrama o regla de las diagonales / diagrama de Moeller).
2.  **Principio de Exclusión de Pauli:** En un mismo átomo no pueden existir dos electrones con los cuatro números cuánticos idénticos. Si dos electrones comparten el mismo orbital (iguales $n, l, m_l$), deben tener espines opuestos ($+\frac{1}{2}$ y $-\frac{1}{2}$). Por eso, en un solo orbital caben como máximo 2 electrones.
3.  **Regla de Hund (Máxima Multiplicidad):** Al llenar orbitales de igual energía (como los tres orbitales $p$), los electrones se distribuyen primero ocupando cada orbital de forma individual y con espines paralelos ($\uparrow$), antes de comenzar a aparearse ($\uparrow\downarrow$).

**Secuencia estándar de llenado (Moeller):**  
$$1s \rightarrow 2s \rightarrow 2p \rightarrow 3s \rightarrow 3p \rightarrow 4s \rightarrow 3d \rightarrow 4p \rightarrow 5s \rightarrow 4d \dots$$

*Nota clave para exámenes:* Observa que el subnivel $4s$ se llena antes que el $3d$ porque posee menor energía relativa ($n + l = 4 + 0 = 4$ frente a $3 + 2 = 5$).

---

### Banco de Evaluación: Pon a prueba tu comprensión

[PREGUNTA tipo="opcion_multiple"]
Nivel Básico: ¿Cuál de las siguientes combinaciones de cuatro números cuánticos $(n, l, m_l, m_s)$ es IMPOSIBLE según las reglas cuánticas?
[RESPUESTA correcta="true"]$(2, 2, 0, +1/2)$[/RESPUESTA]
[RESPUESTA]$(3, 1, -1, -1/2)$[/RESPUESTA]
[RESPUESTA]$(4, 0, 0, +1/2)$[/RESPUESTA]
[RESPUESTA]$(2, 1, 1, -1/2)$[/RESPUESTA]
[EXPLICACION]
El número cuántico secundario $l$ solo puede tomar valores enteros desde $0$ hasta $(n - 1)$. Si el nivel principal es $n = 2$, los únicos valores posibles para $l$ son $0$ y $1$. Por lo tanto, un subnivel con $l = 2$ (un orbital "2d") no existe en la física cuántica.
[/EXPLICACION]
[/PREGUNTA]

[PREGUNTA tipo="opcion_multiple"]
Nivel Básico: ¿Cuál es el número máximo de electrones que puede albergar de manera completa el subnivel $3d$?
[RESPUESTA correcta="true"]10 electrones[/RESPUESTA]
[RESPUESTA]6 electrones[/RESPUESTA]
[RESPUESTA]14 electrones[/RESPUESTA]
[RESPUESTA]2 electrones[/RESPUESTA]
[EXPLICACION]
Cualquier subnivel de tipo $d$ ($l=2$) contiene exactamente 5 orbitales magnéticos ($m_l = -2, -1, 0, +1, +2$). Dado que cada orbital admite un máximo de 2 electrones con espines opuestos, la capacidad total de un subnivel $d$ es siempre $5 \times 2 = 10$ electrones.
[/EXPLICACION]
[/PREGUNTA]

[PREGUNTA tipo="opcion_multiple"]
Nivel Intermedio: ¿Cuál es la configuración electrónica en estado fundamental para un átomo neutro de azufre ($S$), cuyo número atómico es $Z = 16$?
[RESPUESTA correcta="true"]$1s^2\ 2s^2\ 2p^6\ 3s^2\ 3p^4$[/RESPUESTA]
[RESPUESTA]$(1s^2\ 2s^2\ 2p^6\ 3s^2\ 3p^6)$[/RESPUESTA]
[RESPUESTA]$(1s^2\ 2s^2\ 2p^6\ 4s^2\ 3d^4)$[/RESPUESTA]
[RESPUESTA]$(1s^2\ 2s^2\ 2p^4\ 3s^2\ 3p^6)$[/RESPUESTA]
[EXPLICACION]
Para $Z = 16$ electrones distribuimos siguiendo el orden de energía:  
$1s^2$ (2 $e^-$)  
$2s^2$ (4 $e^-$)  
$2p^6$ (10 $e^-$)  
$3s^2$ (12 $e^-$)  
$3p^4$ (16 $e^-$ en total).
[/EXPLICACION]
[/PREGUNTA]

[PREGUNTA tipo="opcion_multiple"]
Nivel Intermedio - Examen: Al aplicar la regla de Hund para el subnivel $2p^3$ del átomo de nitrógeno ($Z = 7$), ¿cómo quedan distribuidos los electrones en los tres orbitales $p$?
[RESPUESTA correcta="true"]Un electrón en cada uno de los tres orbitales, todos con espines paralelos[/RESPUESTA]
[RESPUESTA]Dos electrones apareados en el primer orbital y un electrón en el segundo[/RESPUESTA]
[RESPUESTA]Tres electrones apareados en un solo orbital[/RESPUESTA]
[RESPUESTA]Un par de electrones en el orbital z y un electrón libre en el orbital x[/RESPUESTA]
[EXPLICACION]
La regla de máxima multiplicidad de Hund establece que los orbitales degenerados (de igual energía) se ocupan primero de manera desapareada con espines idénticos ($\uparrow$ $\uparrow$ $\uparrow$) para minimizar la repulsión electrostática entre electrones, antes de admitir un segundo electrón.
[/EXPLICACION]
[/PREGUNTA]

[PREGUNTA tipo="opcion_multiple"]
Nivel Avanzado - Tipo Admisión: Un átomo neutro tiene la siguiente configuración electrónica terminal: $[\text{Ar}]\ 4s^2\ 3d^7$. ¿Cuáles son los números cuánticos del electrón más externo en nivel de energía (último electrón de valencia) y cuántos electrones desapareados posee este átomo?
[RESPUESTA correcta="true"]El electrón de mayor nivel está en el orbital 4s ($n=4, l=0$), y el átomo tiene 3 electrones desapareados en el subnivel 3d[/RESPUESTA]
[RESPUESTA]El electrón de mayor nivel está en el orbital 3d ($n=3, l=2$), y no tiene electrones desapareados[/RESPUESTA]
[RESPUESTA]El electrón de mayor nivel está en el orbital 4s ($n=4, l=1$), y tiene 7 electrones desapareados[/RESPUESTA]
[RESPUESTA]El electrón de mayor nivel está en el orbital 3d ($n=3, l=0$), y tiene 2 electrones desapareados[/RESPUESTA]
[EXPLICACION]
El nivel principal más externo es $n=4$ (orbital $4s$, con $l=0$). Por otro lado, en el subnivel $3d$ hay 5 orbitales disponibles para 7 electrones: según la regla de Hund, se ubican 5 electrones desapareados ($\uparrow \uparrow \uparrow \uparrow \uparrow$) y luego se aparean 2 ($\uparrow\downarrow \uparrow\downarrow \uparrow \uparrow \uparrow$), dejando exactamente 3 electrones desapareados.
[/EXPLICACION]
[/PREGUNTA]

[/TEMA]