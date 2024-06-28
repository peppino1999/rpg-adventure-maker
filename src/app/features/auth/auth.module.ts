import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { SignupComponent, SignupConfirmDialog } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    AuthComponent,
    SignupComponent,
    SigninComponent,
    SignupConfirmDialog
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule
  ],
  bootstrap: [AuthComponent]
})
export class AuthFeatureModule { }
