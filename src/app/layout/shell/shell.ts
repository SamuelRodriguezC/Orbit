import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';


import { Header} from '../header/header';
import { Footer } from '../footer/footer';
import { LoadingSpinner } from '../../shared/ui/loading-spinner/loading-spinner';


@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [
    RouterOutlet,
    Header,
    Footer,
    LoadingSpinner,
  ],
  templateUrl: './shell.html',
  styleUrl: './shell.css',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class Shell {}
