import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./paginas/home/home.page').then( m => m.HomePage)
  },
  {
    path: 'formulario',
    loadComponent: () => import('./paginas/formulario/formulario.page').then( m => m.FormularioPage)
  },
];
