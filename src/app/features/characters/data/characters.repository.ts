import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs';
import { CharactersApi } from './characters.api';
import { CharactersMapper } from './characters.mapper';
import { CharacterModel } from './character.model';

@Injectable({ providedIn: 'root' })
export class CharactersRepository {
  private readonly api = inject(CharactersApi);

  getAll(page: number = 1) {
    return this.api.getAll(page).pipe(
      map((response) => ({
        count: response.count,
        next: response.next,
        previous: response.previous,
        results: CharactersMapper.toModelList(response.results),
      }))
    );
  }

  getById(id: string) {
    return this.api.getById(id).pipe(
      map((person) => CharactersMapper.toModel(person))
    );
  }
}