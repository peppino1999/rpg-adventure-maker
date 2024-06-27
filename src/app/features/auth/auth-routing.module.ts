import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { canExitGuard } from '../../core/guards/can-exit.guard';

const routes: Routes = [
  {
    path: '',
    component: SigninComponent
  },
  {
    path: 'signup',
    component: SignupComponent,
    canDeactivate: [canExitGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
