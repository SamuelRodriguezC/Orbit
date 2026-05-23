import { Component, inject } from '@angular/core';
import { CharactersFacade } from '../../../state/characters.facade';
import { SortKey } from '../../../state/characters.utils';

@Component({
  selector: 'app-characters-filters',
  standalone: true,
  templateUrl: './filters.html',
})
export class Filters {
  private readonly facade = inject(CharactersFacade);

  readonly sortBy = this.facade.sortBy;

  changeSort(value: SortKey): void {
    this.facade.changeSort(value);
  }
}