import { Component, inject } from '@angular/core';
import { globalSignupFormConfig, userSignupFormConfig } from '../../../core/configs';
import { User } from '../../../core/models';
import { EssentialComponent } from '../../../core/essentialComponent';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent extends EssentialComponent{
  formConfig = userSignupFormConfig
  globalValidators = globalSignupFormConfig


  createUser(user: User){
    const {confirmPassword, ...currentUser} = user
    // gestiamo la creazione dell'utente
  }
}
