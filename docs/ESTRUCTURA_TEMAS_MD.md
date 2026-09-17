# Guia de Estructuracion de Contenido Markdown

Esta guia documenta las convenciones obligatorias para la redaccion de temas, asignaturas, definiciones y reactivos de evaluacion dentro del proyecto **EstudiosUniversitarios**.

---

## 1. Estructura de Directorios

Todos los archivos de contenido deben residir dentro del directorio `content/` organizados por el slug de su respectiva materia o asignatura:

```text
content/
└── [slug-de-materia]/
    ├── [slug-del-tema-1].md
    ├── [slug-del-tema-2].md
    └── metadata.json
```

**Ejemplo real:**
- Materia: `content/estructuras-de-datos/`
- Tema: `content/estructuras-de-datos/arboles-binarios.md`

---

## 2. Sintaxis de Etiquetas Especiales

El sistema procesa etiquetas delimitadas por corchetes (`[...]`) con apertura y cierre obligatorio.

### 2.1. Bloque de Tema: `[TEMA]` ... `[/TEMA]`
Es el contenedor de nivel superior que delimita un tema completo.

**Sintaxis admitida:**
- `[TEMA nombre="Arboles Binarios de Busqueda"]`
- `[TEMA "Arboles Binarios de Busqueda"]`

**Reglas:**
- Todo archivo debe contener al menos un bloque `[TEMA]`.
- Puede contener texto en Markdown regular, multiples bloques `[DEFINICION]` y bloques `[PREGUNTA]`.

---

### 2.2. Bloque de Definicion: `[DEFINICION]` ... `[/DEFINICION]`
Resalta terminos tecnicos clave, teoremas o conceptos fundamentales como tarjetas destacadas (*callouts*).

**Sintaxis admitida:**
- `[DEFINICION nombre="Factor de Equilibrio"]`
- `[DEFINICION = "Factor de Equilibrio"]`
- `[DEFINICION "Factor de Equilibrio"]`

**Reglas:**
- Un bloque `[DEFINICION]` debe estar ubicado obligatoriamente dentro de un bloque `[TEMA]`.
- Puede contener texto en Markdown regular y preguntas asociadas al concepto.

---

### 2.3. Bloque de Pregunta: `[PREGUNTA]` ... `[/PREGUNTA]`
Representa una evaluacion o reactivo interactivo.

**Sintaxis admitida:**
- `[PREGUNTA tipo="opcion_multiple"]`
- `[PREGUNTA tipo="codigo"]`
- `[PREGUNTA tipo="verdadero_falso"]`

**Estructura interna:**
1. **Enunciado:** Texto Markdown libre antes de las opciones.
2. **Opciones:** Delimitadas por `[RESPUESTA]` ... `[/RESPUESTA]`.
   - Para la respuesta correcta, usar el atributo `correcta="true"`: `[RESPUESTA correcta="true"]Opcion Correcta[/RESPUESTA]`.
   - Para respuestas incorrectas: `[RESPUESTA]Opcion Incorrecta[/RESPUESTA]`.
3. **Explicacion (Opcional pero recomendada):** Delimitada por `[EXPLICACION]` ... `[/EXPLICACION]`.

**Reglas:**
- Debe estar obligatoriamente dentro de un bloque `[TEMA]` o dentro de un bloque `[DEFINICION]`.
- En **Modo Lectura**, las preguntas permanecen ocultas. En **Modo Estudio Activo**, se renderizan como widgets interactivos.

---

## 3. Ejemplo Completo de Plantilla

```markdown
---
id: "arboles-binarios-01"
title: "Arboles Binarios y Recorridos"
description: "Fundamentos, propiedades y algoritmos de recorrido en arboles binarios."
especialidad: "ingenieria-software"
materia: "estructuras-de-datos"
order: 1
tags: ["estructuras-de-datos", "arboles", "algoritmos"]
lastUpdated: "2026-09-17"
---

[TEMA nombre="Fundamentos de Arboles Binarios"]

Un arbol binario es una estructura de datos jerarquica en la cual cada nodo tiene a lo sumo dos hijos, comunmente denominados hijo izquierdo e hijo derecho.

[DEFINICION nombre="Nodo Raiz"]
El nodo superior de la jerarquia del cual descienden todos los demas nodos. No posee nodo padre.
[/DEFINICION]

[DEFINICION nombre="Altura de un Arbol"]
La longitud del camino mas largo desde la raiz hasta una hoja.

[PREGUNTA tipo="opcion_multiple"]
Cual es la altura de un arbol binario que contiene unicamente el nodo raiz?
[RESPUESTA correcta="true"]0[/RESPUESTA]
[RESPUESTA]1[/RESPUESTA]
[RESPUESTA]-1[/RESPUESTA]
[EXPLICACION]
Por definicion estandar, un arbol con solo la raiz tiene una altura de 0 (o longitud de camino cero).
[/EXPLICACION]
[/PREGUNTA]
[/DEFINICION]

### Recorridos Principales

Los tres recorridos en profundidad clasicos son:
1. **Inorden (In-order):** Izquierdo, Raiz, Derecho.
2. **Preorden (Pre-order):** Raiz, Izquierdo, Derecho.
3. **Postorden (Post-order):** Izquierdo, Derecho, Raiz.

[PREGUNTA tipo="opcion_multiple"]
En un Arbol Binario de Busqueda (BST), que recorrido visita los elementos en orden estrictamente ascendente?
[RESPUESTA correcta="true"]Recorrido Inorden[/RESPUESTA]
[RESPUESTA]Recorrido Preorden[/RESPUESTA]
[RESPUESTA]Recorrido Postorden[/RESPUESTA]
[EXPLICACION]
El recorrido Inorden en un BST visita primero todos los valores menores (subarbol izquierdo), luego la raiz, y finalmente los mayores (subarbol derecho), produciendo una secuencia ordenada de menor a mayor.
[/EXPLICACION]
[/PREGUNTA]

[/TEMA]
```
