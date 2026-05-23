import { Component, input, output, ChangeDetectionStrategy } from '@angular/core';
import { CharacterModel } from '../../../data/character.model';

@Component({
  selector: 'app-character-card',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './card.html',
})


export class Card {
  readonly character = input.required<CharacterModel>();

  readonly selected = output<string>();
}
