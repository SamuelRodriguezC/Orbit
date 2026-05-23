import { CharacterModel } from '../data/character.model';

/**
 * Ordena personajes de forma pura
 */
export type SortKey = 'name' | 'height' | 'mass';

export function sortCharacters(
  characters: CharacterModel[],
  sortBy: SortKey
): CharacterModel[] {
  const copy = [...characters];

  switch (sortBy) {
    case 'name':
      return copy.sort((a, b) => a.name.localeCompare(b.name));

    case 'height':
      return copy.sort((a, b) => a.height - b.height);

    case 'mass':
      return copy.sort((a, b) => a.mass - b.mass);

    default:
      return copy;
  }
}