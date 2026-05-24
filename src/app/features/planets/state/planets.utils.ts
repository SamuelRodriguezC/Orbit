import { PlanetModel } from '../data/planet.model';

export type PlanetSortKey =
  | 'name'
  | 'population'
  | 'diameter';

export function sortPlanets(
  planets: PlanetModel[],
  sortBy: PlanetSortKey
): PlanetModel[] {
  const copy = [...planets];

  switch (sortBy) {
    case 'name':
      return copy.sort((a, b) =>
        a.name.localeCompare(b.name)
      );

    case 'population':
      return copy.sort((a, b) =>
        a.population.localeCompare(
          b.population
        )
      );

    case 'diameter':
      return copy.sort(
        (a, b) => a.diameter - b.diameter
      );

    default:
      return copy;
  }
}