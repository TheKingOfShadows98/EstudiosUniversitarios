/**
 * @file page.tsx
 * @description Pagina principal (Home / Landing Page) de la plataforma EstudiosUniversitarios.
 */

import React from 'react';
import { getAllSubjects, LandingCatalogView } from '@/features/catalog';

// Forzar revalidacion estatica de la pagina
export const dynamic = 'force-static';
export const revalidate = false;

export default async function HomePage() {
  // Escaneo en servidor/build de todas las asignaturas y temas en content/
  const subjects = await getAllSubjects();

  return <LandingCatalogView initialSubjects={subjects} />;
}
