import { HttpContextToken } from '@angular/common/http';

/**
 * =========================================================
 * API CONFIG
 * =========================================================
 * Configuración centralizada de infraestructura HTTP.
 * Single source of truth para:
 * - Base URLs
 * - Endpoints
 * - Timeouts
 * - Cache strategy
 * - Retry strategy
 * - Headers/context globales
 */

export const API_CONFIG = {
  /**
   * Base URL principal
   */
  baseUrl: 'https://swapi.py4e.com/api/',

  /**
   * Timeout global requests
   */
  timeout: 10000,

  /**
   * Configuración de cache
   */
  cache: {
    enabled: true,

    /**
     * TTL global cache
     * 5 minutos
     */
    ttl: 1000 * 60 * 5,
  },

  /**
   * Retry strategy
   */
  retry: {
    attempts: 2,
    delay: 1000,
  },

  /**
   * Endpoints centralizados
   */
  endpoints: {
    characters: 'people',
    characterById: (id: string | number) => `people/${id}`,
    planets: 'planets',
  },
} as const;

/**
 * =========================================================
 * HTTP CONTEXT TOKENS
 * =========================================================
 * Permiten controlar comportamiento
 * request por request.
 */

/**
 * Saltar cache manualmente
 */
export const SKIP_CACHE = new HttpContextToken<boolean>(() => false);

/**
 * Saltar loading global
 */
export const SKIP_LOADING = new HttpContextToken<boolean>(() => false);

/**
 * Saltar retry strategy
 */
export const SKIP_RETRY = new HttpContextToken<boolean>(() => false);