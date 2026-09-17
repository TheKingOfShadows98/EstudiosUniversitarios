---
trigger: always_on
description: Reglas y estándares obligatorios de arquitectura (Feature-Driven, Hexagonal), principios SOLID/DRY, CSS Modules, y cobertura de pruebas Unitarias y E2E.
---

# Reglas de Arquitectura y Calidad de Software

## 1. Arquitectura y Modularidad
- Organizar el código según **Feature-Driven Architecture** (`src/features/<feature>/`) y **Shared Components** (`src/shared/`).
- Aplicar **Puertos y Adaptadores (Hexagonal)** para desacoplar fuentes de datos (`IProgressRepository`, `IContentProvider`).
- Mantener la colocación (*co-location*) de componentes, estilos (`.module.css`), tipos y tests en la misma carpeta.

## 2. Principios SOLID & DRY
- **SRP (Responsabilidad Única):** Separar funciones de cálculo puro, hooks de estado y componentes de presentación visual.
- **OCP (Abierto/Cerrado):** Usar patrones de factoría o composición para extender tipos de preguntas o renderizadores sin modificar el núcleo.
- **LSP (Sustitución de Liskov):** Los adaptadores en memoria (para tests) y los adaptadores reales (LocalStorage, FileSystem) deben ser intercambiables sin alterar la firma ni el comportamiento esperado.
- **ISP (Segregación de Interfaces):** Definir interfaces atómicas, evitando contratos monstruosos.
- **DIP (Inversión de Dependencias):** Inyectar repositorios y adaptadores en lugar de invocar directamente APIs del navegador en componentes.
- **DRY Pragmático:** Centralizar constantes y esquemas Zod; aplicar la regla de tres antes de crear abstracciones complejas.

## 3. Estilos y Diseño UI
- **CSS Modules Exclusivo:** Cada componente debe tener su archivo `[Nombre].module.css`. Prohibido importar librerías de componentes o utilidades CSS externas (Tailwind, Bootstrap, MUI).
- Usar variables CSS globales (`src/styles/globals.css`) para paleta de colores, tipografías y espaciado consistente.

## 4. Tipado y Validación
- **TypeScript Estricto:** `strict: true`, prohibido el uso de `any`.
- **Zod:** Validación obligatoria en build-time y runtime para Frontmatter de Markdown y datos en LocalStorage/Cookies.

## 5. Pruebas Automatizadas
- **Pruebas Unitarias e Integración (Vitest + React Testing Library):** Cobertura obligatoria para cálculo de scores de exámenes, validadores de esquemas, hooks de temporizador y adaptadores de datos.
- **Pruebas End-to-End (Playwright):** Casos obligatorios para navegación del catálogo, ciclo completo de exámenes con temporizador, persistencia en LocalStorage y buscador de contenidos.
- **Verificación:** Todo cambio debe superar `npm run lint`, `npm run typecheck`, `npm run test` y `npm run test:e2e`.
