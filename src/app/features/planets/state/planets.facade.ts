import {
  Injectable,
  inject,
} from '@angular/core';

import { PlanetsStore } from './planets.store';

import { PlanetSortKey } from './planets.utils';

@Injectable({
  providedIn: 'root',
})
export class PlanetsFacade {
  private readonly store =
    inject(PlanetsStore);

  readonly planets =
    this.store.sortedPlanets;

  readonly loading =
    this.store.loading;

  readonly error =
    this.store.error;

  readonly hasPlanets =
    this.store.hasPlanets;

  readonly isEmpty =
    this.store.isEmpty;

  readonly page =
    this.store.page;

  readonly totalPages =
    this.store.totalPages;

  readonly sortBy =
    this.store.sortBy;

  load(): void {
    this.store.load();
  }

  changePage(page: number): void {
    this.store.setPage(page);
  }

  changeSort(
    sort: PlanetSortKey
  ): void {
    this.store.setSort(sort);
  }

  retry(): void {
    this.store.retry();
  }
}