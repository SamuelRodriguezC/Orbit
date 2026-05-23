import { Injectable, computed, signal } from '@angular/core';

/**
 * Configuración centralizada de estado de carga.
 */
@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  /**
   * Requests activas
   */
  private readonly activeRequests = signal(0);

  /**
   * Estado loading global
   */
  readonly isLoading = computed(() => this.activeRequests() > 0);

  /**
   * Incrementa requests
   */
  show(): void {
    this.activeRequests.update((value) => value + 1);
  }

  /**
   * Decrementa requests
   */
  hide(): void {
    this.activeRequests.update((value) => Math.max(0, value - 1));
  }
}
