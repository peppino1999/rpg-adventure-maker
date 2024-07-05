import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { SharedModule } from '../../shared/shared.module';
import { PartyIdDialogComponent } from './signup/party-id-dialog.component';


@NgModule({
  declarations: [
    AuthComponent,
    SignupComponent,
    SigninComponent,
    PartyIdDialogComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule
  ],
  bootstrap: [AuthComponent]
})
export class AuthFeatureModule { }
