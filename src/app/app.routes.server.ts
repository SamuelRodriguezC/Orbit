import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [

  /**
   * Home prerender
   */
  {
    path: '',
    renderMode: RenderMode.Prerender,
  },

  /**
   * Characters list prerender
   */
  {
    path: 'personajes',
    renderMode: RenderMode.Prerender,
  },

  /**
   * Character detail SSR dinámico
   */
  {
    path: 'personajes/:id',
    renderMode: RenderMode.Server,
  },

  /**
   * Planets prerender
   */
  {
    path: 'planetas',
    renderMode: RenderMode.Prerender,
  },

  /**
   * Fallback
   */
  {
    path: '**',
    renderMode: RenderMode.Server,
  },
];