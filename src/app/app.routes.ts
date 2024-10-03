import { Routes } from '@angular/router';
import { authGuard } from '@auth/core/auth.guard';

export const routes: Routes = [
    {
        path: '',
        canActivate: [authGuard],
        loadChildren: () => import('./gift-idea-generator/gift-idea-generator.routes').then((m) => m.routes)
    },
    {
        path: 'auth',
        loadChildren: () => import('./auth/auth.routes').then((m) => m.routes)
    }
];
