import {
  Component,
  effect,
  inject,
} from '@angular/core';

import {
  Meta,
  Title,
} from '@angular/platform-browser';

import { PlanetsFacade } from '../../../state/planets.facade';

import { PlanetsGrid } from '../../components/planets-grid/planets-grid';

import { Pagination } from '../../../../../shared/components/pagination/pagination';

import { PlanetSortKey } from '../../../state/planets.utils';

@Component({
  selector: 'app-planets-page',

  standalone: true,

  templateUrl: './planets-page.html',

  imports: [
    PlanetsGrid,
    Pagination,
  ],
})
export class PlanetsPage {
  private readonly facade =
    inject(PlanetsFacade);

  private readonly title =
    inject(Title);

  private readonly meta =
    inject(Meta);

  readonly planets =
    this.facade.planets;

  readonly loading =
    this.facade.loading;

  readonly error =
    this.facade.error;

  readonly hasPlanets =
    this.facade.hasPlanets;

  readonly totalPages =
    this.facade.totalPages;

  readonly page =
    this.facade.page;

  constructor() {
    this.initializeSeo();

    effect(() => {
      if (
        !this.hasPlanets() &&
        !this.loading()
      ) {
        this.facade.load();
      }
    });
  }

  onPageChange(page: number) {
    this.facade.changePage(page);

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  onSortChange(
    sort: PlanetSortKey
  ) {
    this.facade.changeSort(sort);
  }

  onRetry() {
    this.facade.retry();
  }

  private initializeSeo() {
    this.title.setTitle(
      'Planetas | Orbitarium'
    );

    this.meta.updateTag({
      name: 'description',
      content:
        'Explora los planetas del universo Star Wars.',
    });
  }
}