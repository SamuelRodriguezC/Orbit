import {
  Component,
  input,
} from '@angular/core';

import { DecimalPipe } from '@angular/common';

import { PlanetModel } from '../../../data/planet.model';

import { ResidentList } from '../resident-list/resident-list';

@Component({
  selector: 'app-planet-card',

  standalone: true,

  templateUrl: './card.html',

  imports: [
    DecimalPipe,
    // ResidentList,
  ],
})
export class Card {
  readonly planet =
    input.required<PlanetModel>();
}