import {
  Injectable,
  computed,
  inject,
  signal,
} from '@angular/core';

import { PlanetsRepository } from '../data/planets.repository';

import { PlanetModel } from '../data/planet.model';

import {
  PlanetSortKey,
  sortPlanets,
} from './planets.utils';

@Injectable({
  providedIn: 'root',
})
export class PlanetsStore {
  private readonly repository =
    inject(PlanetsRepository);

  // =========================
  // STATE
  // =========================

  readonly planets =
    signal<PlanetModel[]>([]);

  readonly loading = signal(false);

  readonly error =
    signal<string | null>(null);

  readonly page = signal(1);

  readonly total = signal(0);

  readonly sortBy =
    signal<PlanetSortKey>('name');

  // =========================
  // COMPUTED
  // =========================

  readonly sortedPlanets = computed(() =>
    sortPlanets(
      this.planets(),
      this.sortBy()
    )
  );

  readonly totalPages = computed(() =>
    Math.ceil(this.total() / 10)
  );

  readonly hasPlanets = computed(
    () =>
      !this.loading() &&
      this.planets().length > 0
  );

  readonly isEmpty = computed(
    () =>
      !this.loading() &&
      this.planets().length === 0
  );

  // =========================
  // ACTIONS
  // =========================

  load(): void {
    this.loading.set(true);

    this.error.set(null);

    this.repository
      .getAll(this.page())
      .subscribe({
        next: (response) => {
          this.planets.set(
            response.results
          );

          this.total.set(
            response.count
          );

          this.loading.set(false);
        },

        error: () => {
          this.error.set(
            'Failed to load planets'
          );

          this.loading.set(false);
        },
      });
  }

  setPage(page: number): void {
    this.page.set(page);

    this.load();
  }

  setSort(
    sort: PlanetSortKey
  ): void {
    this.sortBy.set(sort);
  }

  retry(): void {
    this.load();
  }
}