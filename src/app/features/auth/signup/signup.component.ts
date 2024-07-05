import { ChangeDetectionStrategy, Component, Inject, inject } from '@angular/core';

import { EssentialComponent } from '../../../core/components/essentialComponent';
import { CanDeactivateComponent } from '../../../core/guards/can-exit.guard';
import { FormGroup } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import {  takeUntil } from 'rxjs';
import {  MatDialog } from '@angular/material/dialog';
import {
  globalSignupFormConfig,
  signUpConfig,
  signupPlayerConfig,
} from '../../../core/configs/auth';
import { User } from '../../../core/models/users';
import { PartyIdDialogComponent } from './party-id-dialog.component';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignupComponent
  extends EssentialComponent
  implements CanDeactivateComponent
{
  formConfig = signUpConfig;
  globalValidators = globalSignupFormConfig;
  authService = inject(AuthService);
  canLeave = true;
  dialog = inject(MatDialog);
  dialogTitle: string = 'Attenzione!';
  dialogContent: string = 'I tuoi dati andranno persi';

  createUser(user: User) {
    const { confirmPassword, ...currentUser } = user;
    this.authService
      .signup(currentUser)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (data:any) => {
          this.canLeave = true;
          if(data.user.type === 'master') {
            this.dialog.open(PartyIdDialogComponent, {
              data: {
                title: 'Party ID',
                content: 'Copia il tuo party Id per condividere la partita' ,
                partyId: data.user.partyId
              },
            })
          }else{
            this.router.navigate(['/']);
          }
          
        },
        error: (err) => {
          console.log('erroneous', err.message);
        },
      });
  }


  canDeactivate() {
    return this.canLeave;
  }

  monitorFormState(form: FormGroup) {
    console.log('form', form.value);
    if (form.value.type === 'player') {
      this.formConfig = signupPlayerConfig;
    } else {
      this.formConfig = signUpConfig;
    }
    this.canLeave = !(form.touched && form.dirty) && form.valid;
  }
}
