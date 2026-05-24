import { Routes } from '@angular/router';
import { PlanetsPage } from './ui/pages/planets-page/planets-page';

/**
 * Characters Feature Routes
 *
 * - Lazy loaded feature
 * - Clean separation of pages
 * - SEO-friendly routes
 * - SSR compatible
 */
export const PLANETS_ROUTES: Routes = [
  {
    path: '',
    component: PlanetsPage,
    title: 'Planetas | Orbitarium',
    data: {
      description: 'Explora el listado de planetas del universo Star Wars',
    },
  },

];