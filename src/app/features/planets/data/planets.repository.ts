import { inject, Injectable } from '@angular/core';

import { map } from 'rxjs';

import { PlanetsApi } from './planets.api';

import { PlanetsMapper } from './planets.mapper';

@Injectable({
  providedIn: 'root',
})
export class PlanetsRepository {
  private readonly api =
    inject(PlanetsApi);

  getAll(page: number = 1) {
    return this.api.getAll(page).pipe(
      map((response) => ({
        count: response.count,

        next: response.next,

        previous: response.previous,

        results:
          PlanetsMapper.toModelList(
            response.results
          ),
      }))
    );
  }
}