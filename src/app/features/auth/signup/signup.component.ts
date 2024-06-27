import { Component, inject } from '@angular/core';
import { globalSignupFormConfig, userSignupFormConfig } from '../../../core/configs';
import { User } from '../../../core/models';
import { EssentialComponent } from '../../../core/essentialComponent';
import { CanDeactivateComponent } from '../../../core/guards/can-exit.guard';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent extends EssentialComponent implements CanDeactivateComponent{
  formConfig = userSignupFormConfig
  globalValidators = globalSignupFormConfig
  canLeave = true

  createUser(user: User){
    const {confirmPassword, ...currentUser} = user
    // gestiamo la creazione dell'utente
  }

  canDeactivate(){
    return this.canLeave
  }

  monitorFormState(form: FormGroup){
    console.log(!(form.touched && form.dirty))
    this.canLeave = !(form.touched && form.dirty) || form.valid
  }

}
