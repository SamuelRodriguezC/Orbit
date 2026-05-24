import {
  ChangeDetectionStrategy,
  Component,
  inject,
} from '@angular/core';

import {
  Meta,
  Title,
} from '@angular/platform-browser';
@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [],
  templateUrl: './home-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {

  private readonly title = inject(Title);

  private readonly meta = inject(Meta);

  constructor() {

    this.title.setTitle(
      'Orbitarium | Explorador Galáctico Star Wars',
    );

    this.meta.updateTag({
      name: 'description',
      content:
        'Explora personajes, planetas y sistemas galácticos de Star Wars usando Angular 21, Signals y arquitectura moderna.',
    });

  }

}