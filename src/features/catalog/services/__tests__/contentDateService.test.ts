/**
 * @file contentDateService.test.ts
 * @description Pruebas unitarias para el servicio de calculo de fecha de ultima modificacion de contenidos.
 */

import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import path from 'path';
import fs from 'fs/promises';
import os from 'os';
import { getContentLastModified } from '../contentDateService';

describe('getContentLastModified', () => {
  let tempDir: string;

  beforeEach(async () => {
    tempDir = await fs.mkdtemp(path.join(os.tmpdir(), 'content-test-'));
  });

  afterEach(async () => {
    try {
      await fs.rm(tempDir, { recursive: true, force: true });
    } catch {
      // Ignorar errores de limpieza
    }
  });

  it('debe retornar la fecha del archivo con la modificacion mas reciente', async () => {
    const subFolder = path.join(tempDir, 'materia-1');
    await fs.mkdir(subFolder, { recursive: true });

    const file1 = path.join(subFolder, 'tema-1.md');
    const file2 = path.join(subFolder, 'tema-2.md');

    await fs.writeFile(file1, '# Tema 1', 'utf-8');
    // Esperar un breve intervalo para asegurar diferencia en mtime
    await new Promise((resolve) => setTimeout(resolve, 50));
    await fs.writeFile(file2, '# Tema 2', 'utf-8');

    const result = await getContentLastModified(tempDir);

    expect(result.timestamp).toBeGreaterThan(0);
    expect(result.lastModified).toMatch(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/);
    expect(result.formatted).toMatch(/^\d{4}-\d{2}-\d{2}$/);

    const stat2 = await fs.stat(file2);
    expect(result.timestamp).toBe(stat2.mtime.getTime());
  });

  it('debe manejar directorios anidados con multiples niveles', async () => {
    const deepFolder = path.join(tempDir, 'nivel1', 'nivel2');
    await fs.mkdir(deepFolder, { recursive: true });

    const file = path.join(deepFolder, 'profundo.md');
    await fs.writeFile(file, '# Profundo', 'utf-8');

    const result = await getContentLastModified(tempDir);
    const stat = await fs.stat(file);

    expect(result.timestamp).toBe(stat.mtime.getTime());
  });

  it('debe responder con fallback valido si el directorio no existe', async () => {
    const nonExistentPath = path.join(tempDir, 'inexistente');
    const result = await getContentLastModified(nonExistentPath);

    expect(result.timestamp).toBeGreaterThan(0);
    expect(typeof result.lastModified).toBe('string');
    expect(typeof result.formatted).toBe('string');
  });

  it('debe funcionar con el directorio real de content del proyecto', async () => {
    const result = await getContentLastModified();

    expect(result.timestamp).toBeGreaterThan(0);
    expect(result.lastModified).toBeTruthy();
    expect(result.formatted).toMatch(/^\d{4}-\d{2}-\d{2}$/);
  });
});
