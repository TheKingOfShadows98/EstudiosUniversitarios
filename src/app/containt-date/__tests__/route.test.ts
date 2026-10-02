/**
 * @file route.test.ts
 * @description Pruebas unitarias para el Route Handler GET /containt-date.
 */

import { describe, it, expect } from 'vitest';
import { GET } from '../route';

describe('GET /containt-date route handler', () => {
  it('debe responder con estado 200 y la estructura de fecha correcta', async () => {
    const response = await GET();
    expect(response.status).toBe(200);

    const body = await response.json();
    expect(typeof body.timestamp).toBe('number');
    expect(body.timestamp).toBeGreaterThan(0);
    expect(typeof body.lastModified).toBe('string');
    expect(body.lastModified).toMatch(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/);
    expect(typeof body.formatted).toBe('string');
    expect(body.formatted).toMatch(/^\d{4}-\d{2}-\d{2}$/);
  });
});
