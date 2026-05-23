import { Routes } from '@angular/router';
import { CharactersPage } from './ui/pages/characters-page/characters-page';
import { CharacterDetailPage } from './ui/pages/character-detail-page/character-detail-page';

/**
 * Characters Feature Routes
 *
 * - Lazy loaded feature
 * - Clean separation of pages
 * - SEO-friendly routes
 * - SSR compatible
 */
export const CHARACTERS_ROUTES: Routes = [
  {
    path: '',
    component: CharactersPage,
    title: 'Personajes | Orbitarium',
    data: {
      description: 'Explora el listado de personajes del universo Star Wars',
    },
  },
  {
    path: ':id',
    component: CharacterDetailPage,
    title: 'Detalle de personaje | Orbitarium',
    data: {
      description: 'Consulta información detallada de un personaje de Star Wars',
    },
  },
];