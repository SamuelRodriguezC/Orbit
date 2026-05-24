import {
  PlanetModel,
  PlanetResident,
} from './planet.model';

import { SwapiPlanet } from './planets.api';

export class PlanetsMapper {
  static toModel(
    planet: SwapiPlanet
  ): PlanetModel {
    return {
      id: this.extractId(planet.url),

      name: planet.name,

      climate: planet.climate,

      terrain: planet.terrain,

      population: planet.population,

      diameter: Number(planet.diameter) || 0,

      residents: this.mapResidents(
        planet.residents
      ),
    };
  }

  static toModelList(
    planets: SwapiPlanet[]
  ): PlanetModel[] {
    return planets.map(
      this.toModel.bind(this)
    );
  }

  private static mapResidents(
    residents: string[]
  ): PlanetResident[] {
    return residents.map((url) => ({
      id: this.extractId(url),
      name: 'Unknown',
    }));
  }

  private static extractId(
    url: string
  ): string {
    return (
      url
        .split('/')
        .filter(Boolean)
        .pop() ?? ''
    );
  }
}