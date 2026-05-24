import {
  Component,
  input,
} from '@angular/core';
import { PlanetResident } from '../../../data/planet.model';

@Component({
  selector: 'app-resident-list',
  imports: [],
  templateUrl: './resident-list.html',
  styleUrl: './resident-list.css',
  standalone: true,

})
export class ResidentList {
    readonly residents =
    input.required<PlanetResident[]>();
}
