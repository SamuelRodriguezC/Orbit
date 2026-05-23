import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';

import {
  provideRouter,
  withComponentInputBinding,
  withInMemoryScrolling,
  withViewTransitions,
} from '@angular/router';

import {
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http';

import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';

import { routes } from './app.routes';

import {
  cacheInterceptor,
  errorInterceptor,
  loadingInterceptor,
} from './core/interceptors';

export const appConfig: ApplicationConfig = {
  providers: [
    /**
     * Global Angular errors
     */
    provideBrowserGlobalErrorListeners(),

    /**
     * Optimización change detection
     */
    provideZoneChangeDetection({
      eventCoalescing: true,
    }),

    /**
     * Router moderno
     */
    provideRouter(
      routes,

      /**
       * Permite binding automático
       * de params/query params
       */
      withComponentInputBinding(),

      /**
       * Scroll restoration
       */
      withInMemoryScrolling({
        scrollPositionRestoration: 'top',
        anchorScrolling: 'enabled',
      }),

      /**
       * Transiciones nativas
       */
      withViewTransitions(),
    ),

    /**
     * HttpClient moderno
     */
    provideHttpClient(
      /**
       * Fetch API moderna
       */
      withFetch(),

      /**
       * Interceptors funcionales
       */
      withInterceptors([
        loadingInterceptor,
        errorInterceptor,
        cacheInterceptor,
      ]),
    ),

    /**
     * SSR Hydration
     */
    provideClientHydration(
      withEventReplay(),
    ),
  ],
};