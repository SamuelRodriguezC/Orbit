import { CharacterModel } from '../../characters/data/character.model';

import { PlanetModel } from './planet.model';
import { SwapiPlanet } from './planets.api';

export class PlanetsMapper {
  static toModel(
    planet: SwapiPlanet,
    residents: CharacterModel[]
  ): PlanetModel {
    return {
      id: this.extractId(planet.url),

      name: planet.name,

      climate: planet.climate,

      terrain: planet.terrain,

      population: planet.population,

      diameter: this.toNumber(planet.diameter),

      residents,
    };
  }

  private static extractId(url: string): string {
    return url.split('/').filter(Boolean).pop() ?? '';
  }

  private static toNumber(value: string): number {
    const parsed = Number(value);

    return Number.isNaN(parsed) ? 0 : parsed;
  }
}