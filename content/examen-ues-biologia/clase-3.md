---
id: "biologia-03-material-genetico-y-herencia"
title: "Material Genético, Dogma Central y Leyes de la Herencia"
description: "Aprende desde cero qué es el ADN y ARN, cómo se duplica y traduce la información genética, las leyes de Mendel y las anomalías cromosómicas con preguntas tipo admisión."
especialidad: "ciencias-naturales"
materia: "biologia"
order: 3
tags: ["biologia", "adn", "arn", "genetica", "mendel", "transcripcion", "traduccion", "mutaciones", "admision-ues"]
lastUpdated: "2026-09-17"
---

[TEMA nombre="El Libro Secreto de la Vida: Del ADN a las Leyes de Mendel"]

¿Te has fijado en cómo los hijos heredan rasgos tan específicos de sus padres, como el color de los ojos, la forma de la nariz o incluso la propensión a enrollar la lengua en forma de 'U'? ¿O cómo sabe una célula de tu piel que debe comportarse como piel y no como una célula muscular?

Todas las características de un organismo vivo vienen escritas en un manual de instrucciones molecular. La ciencia encargada de estudiar cómo se almacena, se expresa y se transmite esta información de generación en generación es la **Genética**. En esta lección aprenderemos desde las letras químicas de este manual hasta las leyes matemáticas que predicen cómo se heredan nuestros rasgos.

---

### 1. Los Ácidos Nucleicos: ADN y ARN

En el núcleo de nuestras células residen dos tipos de macromoléculas esenciales conocidas como ácidos nucleicos. Ambos están formados por largas cadenas de unidades más pequeñas llamadas **nucleótidos**.

Cada nucleótido individual se compone de tres piezas:
1. Un grupo fosfato ($\text{PO}_4^{3-}$).
2. Un azúcar de 5 carbonos (pentosa): **Desoxirribosa** en el ADN y **Ribosa** en el ARN.
3. Una **base nitrogenada**.

[DEFINICION nombre="ADN vs. ARN: Estructura y Función"]
*   **ADN (Ácido Desoxirribonucleico):**
    *   Formado por una **doble hélice** helicoidal antiparalela (modelo propuesto por Watson y Crick en 1953).
    *   Sus cuatro bases nitrogenadas son: **Adenina (A), Timina (T), Citosina (C) y Guanina (G)**.
    *   *Regla de Chargaff (complementariedad):* La Adenina siempre se empareja con la Timina mediante dos puentes de hidrógeno ($A = T$), y la Guanina con la Citosina mediante tres puentes de hidrógeno ($G \equiv C$).
    *   *Función:* Almacenar el manual maestro de información genética de la célula.
*   **ARN (Ácido Ribonucleico):**
    *   Generalmente es una **cadena simple** (monocatenaria).
    *   Contiene el azúcar ribosa y reemplaza a la timina por el **Uracilo (U)** (bases: A, U, C, G).
    *   *Función:* Transportar el mensaje del ADN y ensamblar las proteínas.

[PREGUNTA tipo="opcion_multiple"]
Al analizar químicamente una hebra de ácido nucleico aislada de un cultivo celular, un bioanalista encuentra un $28\%$ de uracilo ($U$), presencia de azúcar ribosa y ausencia total de timina. ¿A qué molécula corresponde inequívocamente la muestra?
[RESPUESTA correcta="true"]Ácido Ribonucleico (ARN)[/RESPUESTA]
[RESPUESTA]Ácido Desoxirribonucleico bicatenario (ADN)[/RESPUESTA]
[RESPUESTA]Una proteína de la membrana plasmática[/RESPUESTA]
[RESPUESTA]Un carbohidrato de reserva celular[/RESPUESTA]
[EXPLICACION]
La presencia exclusiva de la base nitrogenada uracilo ($U$) junto con el azúcar ribosa es la firma bioquímica definitiva que distingue al ARN del ADN (el cual contiene timina y desoxirribosa).
[/EXPLICACION]
[/PREGUNTA]
[/DEFINICION]

---

### 2. El Dogma Central de la Biología Molecular

¿Cómo pasa la información guardada en el ADN a convertirse en el color de tu cabello o en una enzima digestiva? Este flujo unidireccional de información se conoce como el **Dogma Central de la Biología Molecular**:

$$\text{ADN} \xrightarrow{\text{Replicación}} \text{ADN} \xrightarrow{\text{Transcripción}} \text{ARN mensajero} \xrightarrow{\text{Traducción}} \text{Proteína}$$

[DEFINICION nombre="Replicación, Transcripción y Traducción"]
1.  **Replicación (Duplicación del ADN):** Ocurre durante la fase S del ciclo celular dentro del núcleo. Es **semiconservativa** (cada doble hélice hija conserva una hebra molde original y sintetiza una hebra nueva) y es ejecutada principalmente por la enzima **ADN polimerasa**.
2.  **Transcripción (ADN $\rightarrow$ ARNm):** Proceso en el núcleo donde la enzima **ARN polimerasa** copia la secuencia de un gen del ADN para formar una molécula complementaria de **ARN mensajero (ARNm)**.
    *(Si el molde de ADN tiene la secuencia $3'\text{-TAC GGC-}'5$, el ARNm complementario será $5'\text{-AUG CCG-}'3$).*
3.  **Traducción (ARNm $\rightarrow$ Proteína):** Ocurre en el citoplasma sobre los **ribosomas**. El ribosoma lee el mensaje en grupos de tres bases llamados **codones**. Cada codón especifica la incorporación de un aminoácido concreto llevado por un **ARN de transferencia (ARNt)**.
    *   *Codón de inicio universal:* **AUG** (codifica para Metionina).
    *   *Codones de parada (Stop):* UAA, UAG, UGA (indican el final de la cadena proteica).

[PREGUNTA tipo="opcion_multiple"]
Si un segmento de la hebra molde de ADN posee la secuencia de bases nitrogenadas $3'\text{-TAC CTT GAT-}'5$, ¿cuál será la secuencia exacta del ARN mensajero transcrito a partir de ella?
[RESPUESTA correcta="true"]$5'\text{-AUG GAA CUA-}'3$[/RESPUESTA]
[RESPUESTA]$5'\text{-ATG GAA CTA-}'3$[/RESPUESTA]
[RESPUESTA]$5'\text{-UAC CUU GAU-}'3$[/RESPUESTA]
[RESPUESTA]$5'\text{-AUG CTT GAT-}'3$[/RESPUESTA]
[EXPLICACION]
En la transcripción, la enzima ARN polimerasa coloca la base complementaria de ARN frente a cada base del molde de ADN: frente a T coloca A, frente a A coloca U (no timina), frente a C coloca G, y frente a G coloca C:  
T $\rightarrow$ A  
A $\rightarrow$ U  
C $\rightarrow$ G  
C $\rightarrow$ G  
T $\rightarrow$ A  
T $\rightarrow$ A  
G $\rightarrow$ C  
A $\rightarrow$ U  
T $\rightarrow$ A  
Produciendo la secuencia $5'\text{-AUG GAA CUA-}'3$.
[/EXPLICACION]
[/PREGUNTA]
[/DEFINICION]

---

### 3. Principios y Leyes de Gregor Mendel

Gregor Mendel, un monje agustino que experimentó con plantas de guisante (*Pisum sativum*), descubrió las reglas numéricas de la herencia sin saber siquiera de la existencia del ADN.

Antes de ver las leyes, aclaremos el vocabulario básico:
*   **Gen:** Fragmento de ADN con las instrucciones para un rasgo específico.
*   **Alelo:** Cada una de las versiones o variantes posibles de un mismo gen (por ejemplo, alelo flor morada vs. alelo flor blanca).
*   **Genotipo:** La constitución genética interna de un individuo ($AA$, $Aa$, $aa$).
    *   *Homocigoto (Raza pura):* Dos alelos iguales ($AA$ dominante, $aa$ recesivo).
    *   *Heterocigoto (Híbrido):* Dos alelos distintos ($Aa$).
*   **Fenotipo:** La expresión física, visible o medible del genotipo influenciada por el ambiente (por ejemplo, ojos café o estatura alta).

[DEFINICION nombre="Las Leyes Fundamentales de Mendel"]
1.  **Primera Ley (Principio de la Uniformidad):** Si se cruzan dos razas puras homocigotas para un determinado carácter ($AA \times aa$), todos los descendientes de la primera generación filial ($F_1$) serán fenotípica y genotípicamente idénticos entre sí, mostrando todos el fenotipo del alelo dominante ($100\%\ Aa$).
2.  **Segunda Ley (Principio de la Segregación):** Al autofecundar o cruzar a los individuos de la $F_1$ ($Aa \times Aa$), los alelos se separan (segregan) durante la formación de gametos. Reaparece el fenotipo recesivo en la segunda generación filial ($F_2$) con una proporción fenotípica clásica de **3 dominantes por cada 1 recesivo (3:1)** y proporción genotípica **1 AA : 2 Aa : 1 aa**.
3.  **Tercera Ley (Transmisión Independiente):** Los diferentes rasgos (como color de la semilla y textura de la cáscara) se heredan de manera independiente unos de otros (siempre que los genes estén en cromosomas distintos), dando una proporción fenotípica de **9:3:3:1** en un cruce dihíbrido ($AaBb \times AaBb$).

[PREGUNTA tipo="opcion_multiple"]
En las plantas de guisante, el color amarillo de la semilla está determinado por un alelo dominante ($A$) y el color verde por un alelo recesivo ($a$). Si se cruzan dos plantas heterocigotas de semillas amarillas ($Aa \times Aa$), ¿qué porcentaje de la descendencia se espera que presente semillas de color verde?
[RESPUESTA correcta="true"]25%[/RESPUESTA]
[RESPUESTA]50%[/RESPUESTA]
[RESPUESTA]75%[/RESPUESTA]
[RESPUESTA]0%[/RESPUESTA]
[EXPLICACION]
Construyendo el cuadro de Punnett para el cruce monohíbrido $Aa \times Aa$:  
- 1/4 ($25\%$) $AA$ (Amarillo)  
- 2/4 ($50\%$) $Aa$ (Amarillo)  
- 1/4 ($25\%$) $aa$ (Verde, homocigoto recesivo)  
Por lo tanto, exactamente el $25\%$ de las semillas manifestará el fenotipo verde recesivo (proporción fenotípica 3 amarillos : 1 verde).
[/EXPLICACION]
[/PREGUNTA]
[/DEFINICION]

---

### 4. Herencia Ligada al Sexo

En los seres humanos, 22 pares de cromosomas son **autosomas** (iguales en hombres y mujeres), pero el par 23 determina el sexo cromosómico: **$XX$ en mujeres** y **$XY$ en hombres**.

[DEFINICION nombre="Herencia Ligada al Cromosoma X"]
Como el cromosoma Y es mucho más pequeño y contiene muy pocos genes, los hombres ($XY$) son **hemicigotos** para los genes ubicados en el cromosoma X. Esto significa que **cualquier alelo recesivo ubicado en el cromosoma X se manifestará obligatoriamente en el hombre**, ya que no cuenta con un segundo cromosoma X para compensarlo.
*   *Ejemplos clásicos de enfermedades recesivas ligadas al cromosoma X:* El **daltonismo** (dificultad para distinguir el rojo y el verde) y la **hemofilia** (trastorno de la coagulación sanguínea).
*   Una mujer requiere portar dos alelos defectuosos ($X^d X^d$) para padecer la condición; si solo tiene uno ($X^D X^d$), es una portadora sana. Un hombre con un solo alelo mutado ($X^d Y$) padecerá la condición.

[PREGUNTA tipo="opcion_multiple"]
Un hombre con visión normal ($X^D Y$) se casa con una mujer portadora del gen del daltonismo ($X^D X^d$). Si tienen un hijo varón, ¿cuál es la probabilidad de que ese hijo sea daltónico?
[RESPUESTA correcta="true"]50% de probabilidad[/RESPUESTA]
[RESPUESTA]100% de probabilidad[/RESPUESTA]
[RESPUESTA]25% de probabilidad[/RESPUESTA]
[RESPUESTA]0% de probabilidad[/RESPUESTA]
[EXPLICACION]
El padre dona obligatoriamente su cromosoma $Y$ a todos sus hijos varones. La madre puede transmitirles su cromosoma $X^D$ normal (con probabilidad del $50\%$, dando un varón sano $X^D Y$) o su cromosoma $X^d$ mutado (con probabilidad del $50\%$, dando un varón daltónico $X^d Y$). Por ende, entre los hijos varones, el riesgo de ser daltónico es del $50\%$.
[/EXPLICACION]
[/PREGUNTA]
[/DEFINICION]

---

### 5. Anomalías Cromosómicas (Nivel Admisión UES)

En ocasiones, durante la meiosis, los cromosomas homólogos o las cromátidas hermanas no se separan adecuadamente (evento llamado **no disyunción meiótica**), lo que genera gametos con un número anómalo de cromosomas.

[DEFINICION nombre="Aneuploidías Humanas Frecuentes"]
Una **aneuploidía** es una alteración en la que el individuo tiene un cromosoma de más (trisomía, $2n+1$) o un cromosoma de menos (monosomía, $2n-1$).
*   **Síndrome de Down (Trisomía 21):** El individuo posee 47 cromosomas ($47, XX, +21$ o $47, XY, +21$) debido a una tercera copia del cromosoma 21. Provoca discapacidad intelectual variable, rasgos faciales característicos y cardiopatías congénitas.
*   **Síndrome de Turner (Monosomía X):** Afecta a mujeres con solo un cromosoma sexual X ($45, X0$). Cursa con talla baja, cuello alado, amenorrea e infertilidad. Es la única monosomía viable en la especie humana.
*   **Síndrome de Klinefelter:** Afecta a varones con un cromosoma X extra ($47, XXY$). Cursa con talla alta, hipogonadismo, ginecomastia y fertilidad reducida.

[PREGUNTA tipo="opcion_multiple"]
Nivel Admisión: Al realizar el cariotipo genético de un recién nacido que presenta hipotonía muscular, pliegue palmar único y cardiopatía congénita, el genetista cuenta un total de 47 cromosomas debido a la presencia de tres cromosomas en el par 21. ¿Cómo se denomina esta anomalía cromosómica numérica y cuál fue su mecanismo de origen biológico habitual?
[RESPUESTA correcta="true"]Trisomía 21 (Síndrome de Down), originada comúnmente por una no disyunción meiótica en los gametos parentales[/RESPUESTA]
[RESPUESTA]Monosomía sexual, producida por una mutación puntual en la ADN ligasa[/RESPUESTA]
[RESPUESTA]Triploidía total somática, causada por poliespermia mitótica[/RESPUESTA]
[RESPUESTA]Síndrome de Klinefelter, causado por translocación robertsoniana balanceada[/RESPUESTA]
[EXPLICACION]
La presencia de 47 cromosomas con tres copias en el par 21 define la trisomía 21 o Síndrome de Down. Su causa más frecuente (más del $90\%$ de los casos) es un error durante la anafase de la meiosis llamado no disyunción meiótica, en el cual los cromosomas no se separaron hacia polos opuestos, quedando un gameto con 24 cromosomas que al fecundarse produjo un cigoto con 47 cromosomas.
[/EXPLICACION]
[/PREGUNTA]
[/DEFINICION]

[/TEMA]