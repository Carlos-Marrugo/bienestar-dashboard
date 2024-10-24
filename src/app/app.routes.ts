import { Routes } from '@angular/router';
//routing
export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./shared/components/layout/layout.component'),
        children: [
            {
                path: 'dashboard',
                loadComponent: () => import('./business/dashboard/dashboard.component').then(m => m.DashboardComponent),
            },
            {
                path: 'profile',
                loadComponent: () => import('./business/profile/profile.component').then(m => m.ProfileComponent)
            },
            {
                path: 'tables',
                loadComponent: () => import('./business/tables/tables.component').then(m => m.TablesComponent)
            }
        ]
    }
];
