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
import { User, UserTypes } from '../../../core/models/users';
import { PartyIdDialogComponent } from './party-id-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';



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
  authService = inject(AuthService);
  dialog = inject(MatDialog);
  snackbBar = inject(MatSnackBar);
  formConfig = signUpConfig;
  globalValidators = globalSignupFormConfig;
  canLeave = true;
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
            this.partyIdDialog(data);
          }else{
            this.router.navigate(['/']);
          }
          this.snackbBar.open('Registrazione avvenuta con successo', 'Chiudi', {
            duration: 2000,
          });
        },
        error: (err) => {
          console.log('erroneous', err.message);
        },
      });
  }

  partyIdDialog(data:any) {
    const dialog = this.dialog.open(PartyIdDialogComponent, {
      data: {
        title: 'Party ID',
        content: 'Copia il tuo party Id per condividere la partita' ,
        partyId: data.user.partyId
      },
    })
    dialog.afterClosed().pipe(takeUntil(this.destroy$)).subscribe(
      (result) => {
        this.router.navigate(['/']);
      }
    )
  }

  canDeactivate() {
    return this.canLeave;
  }

  monitorFormState(form: FormGroup) {
    console.log('form', form.value);
    if (form.value.type === UserTypes.PLAYER) {
      this.formConfig = signupPlayerConfig;
    } else {
      this.formConfig = signUpConfig;
    }
    this.canLeave = !(form.touched && form.dirty) && form.valid;
  }
}
