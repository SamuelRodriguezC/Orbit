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
  styleUrl: './pagination.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Pagination {
  readonly currentPage = input.required<number>();

  readonly totalItems = input.required<number>();

  readonly itemsPerPage = input(10);

  readonly pageChange = output<number>();

  /**
   * Total paginas
   */
  readonly totalPages = computed(() =>
    Math.ceil(this.totalItems() / this.itemsPerPage()),
  );

  /**
   * paginas visibles
   */
  readonly pages = computed(() =>
    Array.from(
      { length: this.totalPages() },
      (_, index) => index + 1,
    ),
  );

  /**
   * pagina anterior
   */
  previous(): void {
    if (this.currentPage() <= 1) {
      return;
    }

    this.pageChange.emit(this.currentPage() - 1);
  }

  /**
   * pagina siguiente
   */
  next(): void {
    if (this.currentPage() >= this.totalPages()) {
      return;
    }

    this.pageChange.emit(this.currentPage() + 1);
  }

  /**
   * ir a una pagina especifica 
   */
  goToPage(page: number): void {
    if (page === this.currentPage()) {
      return;
    }

    this.pageChange.emit(page);
  }
}