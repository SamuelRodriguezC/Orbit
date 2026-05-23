import {
  HttpEvent,
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';

import { Observable, of, tap } from 'rxjs';

import { API_CONFIG, SKIP_CACHE } from '../config/api.config';


// Cache para las respuestas 
const cache = new Map<string, HttpResponse<unknown>>();

export const cacheInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn,
): Observable<HttpEvent<unknown>> => {
  /**
   * Solo GET cacheables
   */
  if (req.method !== 'GET') {
    return next(req);
  }

  /**
   * Permitir skip cache
   */
  if (req.context.get(SKIP_CACHE)) {
    return next(req);
  }

  const cachedResponse = cache.get(req.urlWithParams);

  /**
   * Retorna cache inmediatamente
   */
  if (cachedResponse) {
    return of(cachedResponse.clone());
  }

  return next(req).pipe(
    tap((event) => {
      if (event instanceof HttpResponse) {
        cache.set(req.urlWithParams, event.clone());

        /**
         * Borrar cache después de TTL o tiempo de vida
         */
        setTimeout(() => {
          cache.delete(req.urlWithParams);
        }, API_CONFIG.cache.ttl);
      }
    }),
  );
};