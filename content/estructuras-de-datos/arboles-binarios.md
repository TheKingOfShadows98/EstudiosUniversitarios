---
id: "arboles-binarios"
title: "Arboles Binarios y Recorridos"
description: "Estructura no lineal jerarquica, propiedades formales y algoritmos de recorrido clasicos."
especialidad: "ingenieria-software"
materia: "estructuras-de-datos"
order: 1
tags: ["estructuras-de-datos", "arboles", "recorridos", "algoritmos"]
lastUpdated: "2026-09-17"
---

[TEMA nombre="Arboles Binarios y sus Propiedades"]

Un arbol binario es una estructura de datos recursiva y no lineal constituida por un conjunto finito de nodos. Si el conjunto no esta vacio, consta de un nodo distinguido denominado raiz y dos subarboles binarios disjuntos: el subarbol izquierdo y el subarbol derecho.

[DEFINICION nombre="Nodo Hoja"]
Un nodo hoja (o nodo terminal) es cualquier nodo de un arbol binario que no tiene hijos (tanto su puntero izquierdo como derecho apuntan a nulo).
[/DEFINICION]

[DEFINICION nombre="Factor de Equilibrio (AVL)"]
Diferencia entre la altura del subarbol izquierdo y la altura del subarbol derecho en un nodo:

$$FE = h(izq) - h(der)$$

En un arbol AVL estricto, el factor de equilibrio de cada nodo debe pertenecer al conjunto $\{-1, 0, 1\}$.

[PREGUNTA tipo="opcion_multiple"]
Cual es el factor de equilibrio de un nodo cuya altura del subarbol izquierdo es 3 y la del derecho es 1?
[RESPUESTA correcta="true"]2 (Requiere rotacion de balanceo)[/RESPUESTA]
[RESPUESTA]1 (Arbol balanceado)[/RESPUESTA]
[RESPUESTA]-2 (Requiere rotacion simple a la derecha)[/RESPUESTA]
[EXPLICACION]
El calculo es FE = h(izq) - h(der) = 3 - 1 = 2. Al exceder el rango permitido [-1, 1], el nodo esta desbalanceado.
[/EXPLICACION]
[/PREGUNTA]
[/DEFINICION]

### Algoritmos de Recorrido en Profundidad (DFS)

Los recorridos en profundidad procesan los nodos siguiendo un patron recursivo sistematico:

1. **Inorden (LNR):** Procesa el subarbol izquierdo, visita el nodo actual y procesa el subarbol derecho.
2. **Preorden (NLR):** Visita el nodo actual, procesa el subarbol izquierdo y luego el subarbol derecho.
3. **Postorden (LRN):** Procesa los subarboles izquierdo y derecho antes de procesar el nodo actual.

```typescript
// Implementacion clasica de recorrido Inorden
function inOrderTraversal(node: TreeNode | null, result: number[] = []): number[] {
  if (node === null) return result;
  inOrderTraversal(node.left, result);
  result.push(node.value);
  inOrderTraversal(node.right, result);
  return result;
}
```

[PREGUNTA tipo="opcion_multiple"]
Cual es la complejidad temporal asintotica de recorrer un arbol binario de N nodos mediante el algoritmo Inorden?
[RESPUESTA correcta="true"]O(N)[/RESPUESTA]
[RESPUESTA]O(log N)[/RESPUESTA]
[RESPUESTA]O(N log N)[/RESPUESTA]
[RESPUESTA]O(1)[/RESPUESTA]
[EXPLICACION]
Cada uno de los N nodos se visita un numero constante de veces, por lo que la complejidad es lineal O(N).
[/EXPLICACION]
[/PREGUNTA]

[/TEMA]
