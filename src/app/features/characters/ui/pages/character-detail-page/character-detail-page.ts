import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersFacade } from '../../../state/characters.facade';

@Component({
  selector: 'app-character-detail-page',
  standalone: true,
  templateUrl: './character-detail-page.html',
})
export class CharacterDetailPage  implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly facade = inject(CharactersFacade);

  readonly character = this.facade.character; // (idealmente sería getById en otro store)
  readonly loading = this.facade.loading;
  readonly error = this.facade.error;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.facade.loadCharacter(id); 
  }

  

  retry(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.facade.retryDetail(id);
  }

}