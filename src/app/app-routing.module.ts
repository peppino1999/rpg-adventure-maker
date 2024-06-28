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
    path: 'users',
    loadChildren: () => import('./features/users/users.module').then(m => m.UsersModule),
    canActivate: [protectedGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
