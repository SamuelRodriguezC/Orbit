import { Routes } from '@angular/router';
import { HomePage } from './ui/pages/home-page/home-page';


export const HOME_ROUTES: Routes = [
  {
    path: '',
    component: HomePage,
    title: 'Inicio | Orbitarium',
    data: {
      description: 'Bienvenido a Orbitarium, el explorador galáctico de Star Wars',
    },
  },

];