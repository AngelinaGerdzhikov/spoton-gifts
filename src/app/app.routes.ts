import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        // canActivate: [authGuard],
        loadChildren: () => import('./gift-idea-generator/gift-idea-generator.routes').then((m) => m.routes)
    },
    // {
    //     path: 'auth',
    //     loadChildren: () => import('./auth/auth.routes').then((m) => m.routes)
    // },
    {
        path: '**',
        loadChildren: () => import('./gift-idea-generator/gift-idea-generator.routes').then((m) => m.routes)
    }
];
