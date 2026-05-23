/**
 * CharacterModel
 * Pure domain model (clean architecture)
 */

export interface CharacterModel {
  id: string;
  name: string;
  height: number;
  mass: number;
  gender: string;
  birthYear: string;
  homeworldUrl: string;
}