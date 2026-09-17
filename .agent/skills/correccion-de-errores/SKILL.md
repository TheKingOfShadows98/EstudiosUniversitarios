---
name: correccion-de-errores
description: >-
  Protocolo estricto de resolucion de incidencias, diagnostico de causa raiz y refactorizacion estructurada.
  Activar SIEMPRE que el usuario envie un reporte de error, especialmente cuando el mensaje comience con "[Reporte de error]"
  o solicite analizar y corregir fallos en el sistema.
---

# Skill: Protocolo Estandarizado de Correccion de Errores (SOP)

Este skill define el procedimiento mandatorio de fases secuenciales para diagnosticar, plantear soluciones arquitectonicas, planificar, ejecutar y verificar la resolucion de incidencias tecnicas en el proyecto.

---

## Regla de Oro: Ejecucion Secuencial con Validacion Obligatoria
Cada fase debe ejecutarse de forma estrictamente individual. Queda prohibido avanzar a la siguiente fase sin la aprobacion o confirmacion explicita del usuario para continuar.

---

## Flujo de Trabajo Secuencial

### Paso 1: Analisis de Causa Raiz (Fase 1 RCA)
1. **Accion del Agente:**
   - Realizar investigacion estatica del codigo sin modificar ningun archivo.
   - Rastrear el flujo de datos completo de frontend a backend y almacenamiento.
   - Explicar la causa raiz tecnica detallada y precisa.
2. **Pausa de Control:**
   - Detener la ejecucion y solicitar al usuario que valide el diagnostico antes de proponer soluciones.

---

### Paso 2: Formulacion y Evaluacion de Alternativas (Fase 2 SOLID y DRY)
1. **Accion del Agente (Tras validacion del Paso 1):**
   - Disenar entre 2 y 4 opciones de solucion basadas en principios SOLID y DRY.
   - Presentar tabla comparativa con pros, contras, impacto en rendimiento y riesgo de regresion.
2. **Pausa de Control:**
   - Detener la ejecucion y esperar a que el usuario seleccione la opcion deseada.

---

### Paso 3: Elaboracion del Plan de Implementacion (Fase 3)
1. **Accion del Agente (Tras eleccion de opcion del Paso 2):**
   - Generar el artefacto `implementation_plan.md` (con `RequestFeedback: true` y `UserFacing: true`).
   - Detallar archivos `[NEW]`, `[MODIFY]`, `[DELETE]`, metodos, tipos e instrucciones paso a paso para comprobar el cambio.
2. **Pausa de Control:**
   - Detener la ejecucion y solicitar aprobacion formal del plan al usuario.

---

### Paso 4: Ejecucion y Construccion Modular (Fase 4 y 5)
1. **Accion del Agente (Tras aprobacion del Paso 3):**
   - Implementar los cambios en modulos o servicios desacoplados bajo TypeScript estricto (sin `any`).
   - Agregar documentacion JSDoc completa.
   - Respetar la prohibicion absoluta de emojis en codigo, UI o comentarios.
   - Refactorizar controladores o componentes segun el plan aprobado.

---

### Paso 5: Verificacion y Documentacion Final (Fase 6)
1. **Accion del Agente:**
   - Ejecutar la comprobacion estatica de tipos:
     ```bash
     pnpm tsc --noEmit
     ```
   - Generar el artefacto de cierre `walkthrough.md`.
   - Presentar el resumen de cierre y las instrucciones de validacion manual al usuario.
