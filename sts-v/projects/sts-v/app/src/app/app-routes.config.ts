import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadChildren: () => import('./features/home/home.module').then(m => m.HomeFeatureModule) },
    { path: 'about', loadChildren: () => import('./features/about/about.module').then(m => m.AboutFeatureModule) },
    { path: 'diagrams', loadChildren: () => import('./features/diagrams/diagrams.module').then(m => m.DiagramsFeatureModule) },
    { path: 'pictures', loadChildren: () => import('./features/pictures/pictures.module').then(m => m.PicturesFeatureModule) },
];
  