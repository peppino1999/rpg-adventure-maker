import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { EssentialComponent } from '../../../core/components/essentialComponent';
import { CanDeactivateComponent } from '../../../core/guards/can-exit.guard';
import { FormGroup } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { take, takeUntil } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmComponent } from '../../../shared/confirm/confirm.component';
import { globalSignupFormConfig } from '../../../core/configs/auth';
import { userSignupFormConfig } from '../../../core/configs/users';
import { User } from '../../../core/models/users';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignupComponent
  extends EssentialComponent
  implements CanDeactivateComponent
{
  formConfig = userSignupFormConfig;
  globalValidators = globalSignupFormConfig;
  authService = inject(AuthService);
  canLeave = true;
  dialog = inject(MatDialog)
  dialogTitle: string = 'Attenzione!'
  dialogContent: string = 'I tuoi dati andranno persi'

  createUser(user: User) {
    const { confirmPassword, ...currentUser } = user;
    this.authService
      .signup(currentUser)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (data) => {
          this.canLeave = true;
          this.router.navigate(['/']);
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

    this.canLeave = !(form.touched && form.dirty) && form.valid;
  }
}
