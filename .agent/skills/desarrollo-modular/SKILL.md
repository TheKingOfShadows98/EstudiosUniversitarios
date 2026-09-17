---
name: desarrollo-modular
description: >-
  Protocolo estricto para el diseno y construccion de nuevas funcionalidades, modulos y refactorizaciones estructurales.
  Activar SIEMPRE que el usuario solicite implementar nueva logica, nuevos componentes o redisenar codigo existente,
  especialmente cuando el mensaje comience con "[Nuevo desarrollo]", "[Nueva funcionalidad]" o "[Refactorizacion]".
---

# Skill: Protocolo Estandarizado de Desarrollo Modular y Nuevas Funcionalidades (SOP)

Este skill define el procedimiento mandatorio de 5 fases secuenciales para disenar, modularizar, planificar, construir y verificar nuevas caracteristicas en el proyecto, previniendo la acumulacion de deuda tecnica, tipos debiles y componentes monoliticos tipicos del vibe coding.

---

## Regla de Oro: Enfoque Tipo-Primero (Type-First) y Pausas Obligatorias
Queda estrictamente prohibido generar componentes visuales (JSX/TSX), controladores o logica de ejecucion en las primeras dos fases. Cada fase debe ejecutarse de forma individual y requerir aprobacion o confirmacion explicita del usuario antes de avanzar.

---

## Flujo de Trabajo Secuencial

### Paso 1: Contratos de Tipos y Modelo de Dominio (Fase 1)
1. **Accion del Agente:**
   - Analizar los requerimientos funcionales y las invariantes de negocio.
   - Definir y presentar unicamente los tipos de TypeScript en el archivo de definicion correspondiente (`src/types/*.types.ts`).
   - Requisitos mandatorios de tipado:
     - Prohibicion absoluta del uso de 'any' o aserciones inseguras no validadas.
     - Definir uniones discriminadas para representar estados mutuamente excluyentes.
     - Usar tipos numericos en lugar de cadenas para magnitudes (dimensiones, coordenadas, calidad).
     - Prohibir contratos ambiguos como Record<string, string> cuando las claves pertenezcan a un dominio acotado.
2. **Pausa de Control:**
   - Detener la ejecucion y solicitar al usuario la validacion o ajuste de los contratos de tipos antes de continuar.

---

### Paso 2: Descomposicion Arquitectonica y Principio SRP (Fase 2)
1. **Accion del Agente (Tras validacion del Paso 1):**
   - Disenar la separacion estricta de responsabilidades bajo principios SOLID:
     - **Logica Pura / Calculo:** Funciones puras y reutilizables en `src/lib/*`.
     - **Estado y Efectos:** Custom hooks dedicados en `src/hooks/*` (eventos de puntero, llamadas asincronas, timers).
     - **Capa Visual:** Componentes presentacionales ligeros en `src/components/*` (maximo 150-200 lineas por componente).
   - Identificar el contexto de UI correspondiente:
     - Rutas bajo `src/app/admin/*`: PC-First, alta densidad, consumir tokens de `admin-panel.css`.
     - Rutas de catalogo / cliente: Tablet-First, accesibilidad senior, consumir tokens de `admin-client.css`.
   - Evaluar posibles efectos secundarios o dependencias cruzadas con modulos existentes.
2. **Pausa de Control:**
   - Detener la ejecucion y presentar el mapa de descomposicion para la eleccion o ajuste del usuario.

---

### Paso 3: Elaboracion del Plan de Implementacion (Fase 3)
1. **Accion del Agente (Tras validacion del Paso 2):**
   - Generar el artefacto `implementation_plan.md` (con `RequestFeedback: true` y `UserFacing: true`).
   - Detallar la lista ordenada de archivos `[NEW]`, `[MODIFY]` y `[DELETE]`.
   - Especificar las firmas de funciones, hooks y props de cada componente involucrado.
   - Detallar el plan de verificacion manual y automatizado.
2. **Pausa de Control:**
   - Detener la ejecucion y esperar la aprobacion formal del plan por parte del usuario.

---

### Paso 4: Construccion Modular y Documentacion (Fase 4)
1. **Accion del Agente (Tras aprobacion del Paso 3):**
   - Ejecutar la implementacion en orden estricto de dependencias:
     1. Archivos de definicion de tipos (`src/types/*`).
     2. Funciones puras y utilidades (`src/lib/*`).
     3. Custom hooks desacoplados (`src/hooks/*`).
     4. Componentes visuales y contenedores (`src/components/*`).
   - Cumplir estrictamente con:
     - Documentacion JSDoc en todas las funciones publicas, componentes y hooks.
     - Prohibicion absoluta del uso de emojis en codigo, nombres, logs, comentarios o interfaz de usuario.
     - Consumo de clases semanticas del proyecto evitando la acumulacion de clases inline en etiquetas JSX.

---

### Paso 5: Verificacion Estatica y Cierre (Fase 5)
1. **Accion del Agente:**
   - Ejecutar la comprobacion estatica obligatoria de compilacion:
     ```bash
     pnpm tsc --noEmit
     ```
   - Corregir cualquier advertencia o incompatibilidad detectada por el compilador de TypeScript.
   - Generar el artefacto de cierre `walkthrough.md`.
   - Presentar el resumen de implementacion y las instrucciones precisas para la prueba manual por parte del usuario.
