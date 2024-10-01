import { Routes } from '@angular/router';

export const routes: Routes = [{
    path: '',
    loadChildren: () => import('./gift-idea-generator/gift-idea-generator.routes').then((m) => m.routes)
}];
