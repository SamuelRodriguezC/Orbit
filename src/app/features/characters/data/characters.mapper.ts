import { CharacterModel } from './character.model';
import { SwapiPerson } from './characters.api';

/**
 * Mapper puro (sin Angular, sin RxJS)
 */
export class CharactersMapper {
  static toModel(person: SwapiPerson): CharacterModel {
    const id = this.extractId(person.url);

    return {
      id,
      name: person.name,
      height: this.toNumber(person.height),
      mass: this.toNumber(person.mass),
      gender: person.gender,
      birthYear: person.birth_year,
      homeworldUrl: person.homeworld,
      hairColor: person.hair_color,
      skinColor: person.skin_color,
      eyeColor: person.eye_color,
    };
  }

  static toModelList(people: SwapiPerson[]): CharacterModel[] {
    return people.map(this.toModel.bind(this));
  }

  private static extractId(url: string): string {
    return url.split('/').filter(Boolean).pop() ?? '';
  }

  private static toNumber(value: string): number {
    const parsed = Number(value);
    return isNaN(parsed) ? 0 : parsed;
  }
}