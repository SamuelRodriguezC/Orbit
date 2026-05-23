/**
 * Character Entity
 *
 * Modelo de dominio limpio.
 * NO depende de Angular.
 * NO representa el response crudo de SWAPI.
 *
 * Representa la verdad del negocio dentro
 * de Orbit.
 */

export interface Character {
  /**
   * Identificador único
   */
  id: string;

  /**
   * Nombre del personaje
   */
  name: string;

  /**
   * Altura en centímetros
   */
  height: number | null;

  /**
   * Peso en kilogramos
   */
  mass: number | null;

  /**
   * Información física
   */
  hairColor: string;

  skinColor: string;

  eyeColor: string;

  /**
   * Información personal
   */
  birthYear: string;

  gender: string;

  /**
   * Relaciones
   */
  homeworldUrl: string | null;

  filmUrls: string[];

  speciesUrls: string[];

  vehicleUrls: string[];

  starshipUrls: string[];

  /**
   * Metadata
   */
  createdAt: string;

  updatedAt: string;
}