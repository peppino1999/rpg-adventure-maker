import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { protectedGuard, unprotectedGuard } from './core/guards/protected.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthFeatureModule),
    canActivate: [unprotectedGuard]
  },
  {
    path: 'home',
    loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule),
    canActivate: [protectedGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
