/**
 * @file contentDateService.ts
 * @description Servicio de consulta y calculo de la fecha de ultima modificacion del contenido academico.
 */

import fs from 'fs/promises';
import path from 'path';
import type { ContentLastModifiedResponse } from '../types/contentDate.types';

/**
 * Escanea de forma recursiva un directorio para recopilar todas las rutas de archivos.
 *
 * @param dirPath - Ruta absoluta o relativa del directorio a escanear.
 * @returns Lista de rutas de archivos encontrados dentro del arbol.
 */
async function getFilesRecursively(dirPath: string): Promise<string[]> {
  const entries = await fs.readdir(dirPath, { withFileTypes: true });
  const filePaths: string[] = [];

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      const nestedFiles = await getFilesRecursively(fullPath);
      filePaths.push(...nestedFiles);
    } else if (entry.isFile()) {
      filePaths.push(fullPath);
    }
  }

  return filePaths;
}

/**
 * Obtiene la fecha y marca de tiempo de la ultima modificacion en el directorio de contenidos.
 *
 * @param contentDir - Ruta opcional al directorio de contenidos. Por defecto toma process.cwd()/content.
 * @returns Promesa con los datos estructurados de la ultima modificacion detectada.
 */
export async function getContentLastModified(
  contentDir?: string
): Promise<ContentLastModifiedResponse> {
  const targetDir = contentDir || path.join(process.cwd(), 'content');

  try {
    const stat = await fs.stat(targetDir);
    if (!stat.isDirectory()) {
      return fallbackResponse(stat.mtime);
    }

    const allFiles = await getFilesRecursively(targetDir);

    if (allFiles.length === 0) {
      return fallbackResponse(stat.mtime);
    }

    let latestTimestamp = 0;

    for (const filePath of allFiles) {
      const fileStat = await fs.stat(filePath);
      const mtimeMs = fileStat.mtime.getTime();
      if (mtimeMs > latestTimestamp) {
        latestTimestamp = mtimeMs;
      }
    }

    const latestDate = new Date(latestTimestamp);

    return {
      timestamp: latestTimestamp,
      lastModified: latestDate.toISOString(),
      formatted: latestDate.toISOString().split('T')[0],
    };
  } catch (error) {
    console.warn('Advertencia al calcular la fecha de ultima modificacion de contenidos:', error);
    const fallbackDate = new Date();
    return fallbackResponse(fallbackDate);
  }
}

/**
 * Genera una respuesta por defecto a partir de un objeto Date.
 *
 * @param date - Instancia de Date de referencia.
 * @returns Estructura ContentLastModifiedResponse estandarizada.
 */
function fallbackResponse(date: Date): ContentLastModifiedResponse {
  return {
    timestamp: date.getTime(),
    lastModified: date.toISOString(),
    formatted: date.toISOString().split('T')[0],
  };
}
