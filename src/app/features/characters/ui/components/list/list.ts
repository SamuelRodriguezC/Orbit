import { Component, inject, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CharactersFacade } from '../../../state/characters.facade';
import { Card } from '../card/card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-characters-list',
  standalone: true,
  imports: [Card],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './list.html',
})


export class List  implements OnInit {
  private readonly facade = inject(CharactersFacade);
  private readonly router = inject(Router);

  readonly characters = this.facade.characters;
  readonly loading = this.facade.loading;
  readonly error = this.facade.error;
  readonly isEmpty = this.facade.isEmpty;

  ngOnInit(): void {
    this.facade.init();
  }

  goToDetail(id: string): void {
    this.router.navigate(['/personajes', id]);
  }
    retry(): void {
    this.facade.retry();
  }
}
