/**
 * @file layout.tsx
 * @description Layout raiz de la aplicacion EstudiosUniversitarios con proveedor de sesion y modal de autenticacion.
 */

import React from 'react';
import type { Metadata } from 'next';
import { Navbar } from '@/shared/components/Navbar/Navbar';
import { Footer } from '@/shared/components/Footer/Footer';
import { UserSessionProvider, UserLoginModal } from '@/features/user';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'EstudiosUniversitarios - Plataforma de Aprendizaje y Evaluacion',
  description:
    'Plataforma academica con fragmentos de conocimiento, definiciones rigurosas y examenes interactivos separados por materias y temas.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <UserSessionProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <UserLoginModal />
        </UserSessionProvider>
      </body>
    </html>
  );
}
