import {
  Injectable,
  inject,
} from '@angular/core';

import {
  NavigationEnd,
  ActivatedRoute,
  Router,
} from '@angular/router';

import {
  filter,
} from 'rxjs/operators';

import { SeoService } from './seo.service';

@Injectable({
  providedIn: 'root',
})
export class SeoRouteService {

  private readonly router = inject(Router);

  private readonly activatedRoute =
    inject(ActivatedRoute);

  private readonly seo =
    inject(SeoService);

  init(): void {

    this.router.events
      .pipe(
        filter(event =>
          event instanceof NavigationEnd,
        ),
      )
      .subscribe(() => {

        const route = this.getDeepestRoute(
          this.activatedRoute,
        );

        const data = route.snapshot.data;

        const title =
          route.snapshot.title;

        this.seo.updateSeo({
          title: title ?? 'Orbitarium',
          description: data['description'],
          canonicalUrl: this.buildCanonicalUrl(),
          type: 'website',
        });
      });
  }

  private getDeepestRoute(
    route: ActivatedRoute,
  ): ActivatedRoute {

    while (route.firstChild) {
      route = route.firstChild;
    }

    return route;
  }

  private buildCanonicalUrl(): string {

    return `https://orbit.com${this.router.url}`;
  }
}