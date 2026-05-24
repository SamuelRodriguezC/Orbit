import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./layout/shell/shell')
        .then(c => c.Shell),
  // } // Eliminar este corchete para habilitar las rutas hijas 
    children: [

      {
        path: '',
        loadChildren: () =>
          import('./features/home/home.routes')
            .then(r => r.HOME_ROUTES),
      },

      {
        path: 'personajes',
        loadChildren: () =>
          import('./features/characters/characters.routes')
            .then(r => r.CHARACTERS_ROUTES),
      },

      {

        path: 'planetas',
        loadChildren: () =>
          import('./features/planets/planets.routes')
            .then(r => r.PLANETS_ROUTES),
      },
    ],
//   },

//   {
//     path: '**',
//     loadChildren: () =>
//       import('./features/not-found/routes/not-found.routes')
//         .then(r => r.NOT_FOUND_ROUTES),
  },
];