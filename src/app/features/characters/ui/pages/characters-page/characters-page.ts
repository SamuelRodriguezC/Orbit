import { Component, inject, OnInit } from '@angular/core';
import { CharactersFacade } from '../../../state/characters.facade';
import { SortKey } from '../../../state/characters.utils';
import { RouterLink } from '@angular/router';
import { Card } from '../../../ui/components/card/card'; 
import { Router } from '@angular/router';
import { Pagination } from '../../../../../shared/components/pagination/pagination';



@Component({
  selector: 'app-characters-page',
  standalone: true,
  templateUrl: './characters-page.html',
  imports: [Card, Pagination],

})
export class CharactersPage implements OnInit {
  private readonly facade = inject(CharactersFacade);
  private readonly router = inject(Router);


  // 📡 Exposición directa a UI (signals del facade)
  readonly characters = this.facade.characters;
  readonly loading = this.facade.loading;
  readonly error = this.facade.error;
  readonly isEmpty = this.facade.isEmpty;
  readonly totalPages = this.facade.totalPages;
  readonly page = this.facade.page;
  readonly sortBy = this.facade.sortBy;

  ngOnInit(): void {
    this.facade.init();
  }

  // eventos de UI
  onPageChange(page: number): void {
    this.facade.changePage(page);
  }

  onSortChange(sort: SortKey): void {
    this.facade.changeSort(sort);
  }

  onRetry(): void {
    this.facade.retry();
  }

  goToDetail(id: string): void {
  this.router.navigate(['/personajes', id]);
  }
}
