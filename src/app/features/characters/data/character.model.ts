/**
 * Character Entity
 *
 * Modelo de dominio limpio.
 * Independiente de Angular.
 */

export interface CharacterModel {
  id: string;

  name: string;

  height: number;

  mass: number;

  gender: string;

  birthYear: string;

  hairColor: string;

  skinColor: string;

  eyeColor: string;

  homeworldUrl: string;
}