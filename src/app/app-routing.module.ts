import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { protectedGuard, unprotectedGuard } from './core/guards/protected.guard';
import { userTypeGuard } from './core/guards/user-type.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthFeatureModule),
    canActivate: [unprotectedGuard]
  },
  {
    path: '',
    loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule),
    canActivate: [protectedGuard, userTypeGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
