import { Routes } from '@angular/router';
//routing
export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./shared/components/layout/layout.component'),
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./business/dashboard/dashboard.component').then(
            (m) => m.DashboardComponent
          ),
      },
      {
        path: 'profile',
        loadComponent: () =>
          import('./business/profile/profile.component').then(
            (m) => m.ProfileComponent
          ),
      },
      {
        path: 'tables',
        loadComponent: () =>
          import('./business/tables/tables.component').then(
            (m) => m.TablesComponent
          ),
      },
      {
        path: 'estadisticas',
        loadComponent: () =>
          import('./business/estadisticas/estadisticas.component').then(
            (m) => m.EstadisticasComponent
          ),
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
    ],
  },
  {
    path: 'login',
    loadComponent: () => import('./business/authentication/login/login.component')
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];
