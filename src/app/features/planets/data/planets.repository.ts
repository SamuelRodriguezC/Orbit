import { inject, Injectable } from '@angular/core';

import {
  forkJoin,
  map,
  switchMap,
} from 'rxjs';

import { CharacterModel } from '../../characters/data/character.model';
import { CharactersRepository } from '../../characters/data/characters.repository';

import { PlanetModel } from './planet.model';
import { PlanetsApi } from './planets.api';
import { PlanetsMapper } from './planets.mapper';

@Injectable({ providedIn: 'root' })
export class PlanetsRepository {
  private readonly api = inject(PlanetsApi);

  private readonly charactersRepository =
    inject(CharactersRepository);

  getAll() {
    return forkJoin([
      this.charactersRepository.getAll(1),
      this.charactersRepository.getAll(2),
      this.charactersRepository.getAll(3),
      this.charactersRepository.getAll(4),
      this.charactersRepository.getAll(5),
      this.charactersRepository.getAll(6),
      this.charactersRepository.getAll(7),
      this.charactersRepository.getAll(8),
      this.charactersRepository.getAll(9),
    ]).pipe(
      map((pages) => pages.flatMap((page) => page.results)),

      switchMap((characters) =>
        this.api.getAll().pipe(
          map((response) =>
            response.results.map((planet) => {
              const residents = this.resolveResidents(
                planet.residents,
                characters
              );

              return PlanetsMapper.toModel(
                planet,
                residents
              );
            })
          )
        )
      )
    );
  }

  private resolveResidents(
    residentUrls: string[],
    characters: CharacterModel[]
  ): CharacterModel[] {
    return residentUrls
      .map((url) => this.extractId(url))
      .map((id) =>
        characters.find(
          (character) => character.id === id
        )
      )
      .filter(Boolean) as CharacterModel[];
  }

  private extractId(url: string): string {
    return url.split('/').filter(Boolean).pop() ?? '';
  }
}