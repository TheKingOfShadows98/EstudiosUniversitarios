/**
 * @file route.ts
 * @description Manejador de la ruta GET /containt-date para consultar la fecha de ultima modificacion del contenido.
 */

import { NextResponse } from 'next/server';
import { getContentLastModified, type ContentLastModifiedResponse } from '@/features/catalog';

export const dynamic = 'force-dynamic';

/**
 * Endpoint GET /containt-date.
 * Retorna la fecha y marca de tiempo de la ultima modificacion del contenido academico.
 */
export async function GET(): Promise<NextResponse<ContentLastModifiedResponse>> {
  try {
    const data = await getContentLastModified();
    return NextResponse.json(data, {
      status: 200,
      headers: {
        'Cache-Control': 'no-store, max-age=0',
      },
    });
  } catch (error) {
    console.error('Error en endpoint GET /containt-date:', error);
    const now = new Date();
    return NextResponse.json(
      {
        timestamp: now.getTime(),
        lastModified: now.toISOString(),
        formatted: now.toISOString().split('T')[0],
      },
      {
        status: 500,
      }
    );
  }
}
