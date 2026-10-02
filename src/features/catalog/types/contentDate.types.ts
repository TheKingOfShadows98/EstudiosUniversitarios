/**
 * @file contentDate.types.ts
 * @description Contratos de tipos para la consulta de fecha de ultima modificacion de los contenidos.
 */

/**
 * Respuesta devuelta por el endpoint /containt-date.
 */
export interface ContentLastModifiedResponse {
  /** Marca de tiempo Unix en milisegundos de la ultima modificacion detectada. */
  readonly timestamp: number;
  /** Fecha y hora de modificacion en formato estandar ISO 8601 UTC. */
  readonly lastModified: string;
  /** Fecha simplificada en formato YYYY-MM-DD. */
  readonly formatted: string;
}
