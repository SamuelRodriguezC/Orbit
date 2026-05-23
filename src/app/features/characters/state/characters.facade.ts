import { Injectable, inject } from '@angular/core';
import { CharactersStore } from './characters.store';
import { SortKey } from './characters.utils';

@Injectable({ providedIn: 'root' })
export class CharactersFacade {
  private readonly store = inject(CharactersStore);

  // =========================
  // LIST STATE
  // =========================
  readonly characters = this.store.sortedCharacters;
  readonly page = this.store.page;
  readonly sortBy = this.store.sortBy;
  readonly totalPages = this.store.totalPages;
  readonly isEmpty = this.store.isEmpty;

  // =========================
  // DETAIL STATE
  // =========================
  readonly character = this.store.selectedCharacter;

  // =========================
  // SHARED STATE
  // =========================
  readonly loading = this.store.loading;
  readonly error = this.store.error;

  // =========================
  // LIST ACTIONS
  // =========================
  init(): void {
    this.store.loadCharacters();
  }

  changePage(page: number): void {
    this.store.setPage(page);
  }

  changeSort(sort: SortKey): void {
    this.store.setSort(sort);
    this.store.loadCharacters();
  }

  retryList(): void {
    this.store.retryList();
  }

  // =========================
  // DETAIL ACTIONS
  // =========================
  loadCharacter(id: string): void {
    this.store.loadCharacterById(id);
  }

  retryDetail(id: string): void {
    this.store.retryDetail(id);
  }

  resetDetail(): void {
    this.store.resetDetail();
  }

  // =========================
  // RESET GLOBAL
  // =========================
  reset(): void {
    this.store.reset();
  }
  retry(): void {
  this.store.retry();
}
}