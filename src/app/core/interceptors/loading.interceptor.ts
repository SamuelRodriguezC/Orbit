import { HttpInterceptorFn } from '@angular/common/http';

import { inject } from '@angular/core';

import { finalize } from 'rxjs';

import { LoadingService } from '../services/loading.service';
import { SKIP_LOADING } from '../config/api.config';

// Permite encender o apagar el Loading Spinner
export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  // Saltar el spinner de carga para requests específicas
  if (req.context.get(SKIP_LOADING)) {
    return next(req);
  }

  const loadingService = inject(LoadingService);

  // Activación visual de spinner
  loadingService.show();

  // Desactivación visual de spinner al finalizar request
  return next(req).pipe(
    finalize(() => {
      loadingService.hide();
    }),
  );
};
