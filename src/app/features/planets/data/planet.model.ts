import { CharacterModel } from '../../characters/data/character.model';

export interface PlanetModel {
  id: string;

  name: string;

  climate: string;

  terrain: string;

  population: string;

  diameter: number;

  residents: PlanetResident[];
}



export interface PlanetResident {
  id: string;
  name: string;
}
