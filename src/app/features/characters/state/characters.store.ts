import { Injectable, signal, computed, inject } from '@angular/core';
import { CharactersRepository } from '../data/characters.repository';
import { CharacterModel } from '../data/character.model';
import { sortCharacters, SortKey } from './characters.utils';

@Injectable({ providedIn: 'root' })
export class CharactersStore {
  private readonly repository = inject(CharactersRepository);

  // =========================
  // LIST STATE
  // =========================
  readonly characters = signal<CharacterModel[]>([]);
  readonly page = signal(1);
  readonly sortBy = signal<SortKey>('name');
  readonly total = signal(0);

  // =========================
  // DETAIL STATE
  // =========================
  readonly selectedCharacter = signal<CharacterModel | null>(null);

  // =========================
  // SHARED STATE
  // =========================
  readonly loading = signal(false);
  readonly error = signal<string | null>(null);

  // =========================
  // COMPUTED
  // =========================
  readonly sortedCharacters = computed(() =>
    sortCharacters(this.characters(), this.sortBy())
  );

  readonly isEmpty = computed(
    () => !this.loading() && this.characters().length === 0
  );

  readonly totalPages = computed(() =>
    Math.ceil(this.total() / 10)
  );

  // =========================
  // LIST ACTIONS
  // =========================
  loadCharacters(): void {
    this.loading.set(true);
    this.error.set(null);

    this.repository.getAll(this.page()).subscribe({
      next: (response) => {
        this.characters.set(response.results);
        this.total.set(response.count);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('Error loading characters');
        this.loading.set(false);
      },
    });
  }

  setPage(page: number): void {
    this.page.set(page);
    this.loadCharacters();
  }

  setSort(sort: SortKey): void {
    this.sortBy.set(sort);
  }

  retryList(): void {
    this.loadCharacters();
  }

  // =========================
  // DETAIL ACTIONS
  // =========================
  loadCharacterById(id: string): void {
    this.loading.set(true);
    this.error.set(null);

    this.repository.getById(id).subscribe({
      next: (response) => {
        this.selectedCharacter.set(response);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('Error loading character');
        this.loading.set(false);
      },
    });
  }

  retryDetail(id: string): void {
    this.loadCharacterById(id);
  }

  resetDetail(): void {
    this.selectedCharacter.set(null);
  }
  

  // =========================
  // GLOBAL RESET
  // =========================
  reset(): void {
    this.characters.set([]);
    this.selectedCharacter.set(null);
    this.page.set(1);
    this.error.set(null);
    this.loading.set(false);
  }

  retry(): void {
  this.loadCharacters();
  }
}