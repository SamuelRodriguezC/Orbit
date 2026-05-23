import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';

import { throwError } from 'rxjs';

import { catchError } from 'rxjs/operators';

// Manejo de errores en peticiones HTTP
export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      /**
       * Error de red
       */
      if (error.status === 0) {
        console.error('Network error:', error);
      }

      /**
       * Errores servidor
       */
      if (error.status >= 500) {
        console.error('Server error:', error);
      }

      /**
       * Errores cliente
       */
      if (error.status >= 400 && error.status < 500) {
        console.error('Client error:', error);
      }

      return throwError(() => error);
    }),
  );
};
