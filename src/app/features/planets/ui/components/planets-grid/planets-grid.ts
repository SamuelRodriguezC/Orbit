import { Component, input } from '@angular/core';
import { PlanetModel } from '../../../data/planet.model';

import { Card } from '../card/card';


@Component({
  selector: 'app-planets-grid',
  imports: [Card],
  templateUrl: './planets-grid.html',
  styleUrl: './planets-grid.css',
})
export class PlanetsGrid {
    readonly planets =
    input.required<PlanetModel[]>();
}
