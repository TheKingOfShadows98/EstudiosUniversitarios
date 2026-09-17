/**
 * @file slugUtils.ts
 * @description Utilidades puras para la normalizacion de cadenas y generacion de slugs e IDs deterministas.
 */

/**
 * Genera un slug seguro para URLs y anclas HTML a partir de un texto dado.
 *
 * @param text - Cadena original a normalizar.
 * @returns Slug en minusculas, sin acentos ni caracteres especiales.
 */
export function generateSlug(text: string): string {
  if (!text || typeof text !== 'string') {
    return 'item-' + Math.random().toString(36).substring(2, 9);
  }

  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-_]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}
