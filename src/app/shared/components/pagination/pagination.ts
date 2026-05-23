import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  output,
} from '@angular/core';

@Component({
  selector: 'app-pagination',
  standalone: true,
  templateUrl: './pagination.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Pagination {
  readonly currentPage = input.required<number>();

  readonly totalPages = input.required<number>();

  readonly pageChange = output<number>();

  /**
   * Ventana visible de páginas
   * Evita renderizar demasiados botones.
   */
  readonly visiblePages = computed(() => {
    const current = this.currentPage();
    const total = this.totalPages();

    const delta = 2;

    const start = Math.max(1, current - delta);
    const end = Math.min(total, current + delta);

    return Array.from(
      { length: end - start + 1 },
      (_, index) => start + index,
    );
  });

  previous(): void {
    if (this.currentPage() <= 1) return;

    this.pageChange.emit(this.currentPage() - 1);
  }

  next(): void {
    if (this.currentPage() >= this.totalPages()) return;

    this.pageChange.emit(this.currentPage() + 1);
  }

  goToPage(page: number): void {
    if (page === this.currentPage()) return;

    this.pageChange.emit(page);
  }
}