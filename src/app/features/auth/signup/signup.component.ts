import { Component, inject } from '@angular/core';
import {
  globalSignupFormConfig,
  userSignupFormConfig,
} from '../../../core/configs';
import { User } from '../../../core/models';
import { EssentialComponent } from '../../../core/components/essentialComponent';
import { CanDeactivateComponent } from '../../../core/guards/can-exit.guard';
import { FormGroup } from '@angular/forms';
import { AuthService } from '../../../shared/auth/auth.service';
import { take, takeUntil } from 'rxjs';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-signup-confirm',
  template: `
    <h2 mat-dialog-title>Conferma</h2>
    <mat-dialog-content>
      sei sicuro di voler abbandonare la pagina?
    </mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button (click)="confirm()">Procedi</button>
      <button mat-button color="danger" (click)="decline()">Annulla</button>
    </mat-dialog-actions>
  `,
})
export class SignupConfirmDialog {

  dialogRef = inject(MatDialogRef)

  confirm(){
    this.dialogRef.close(true)
  }
  decline(){
    this.dialogRef.close(false)
  }
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
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

  goBack(){
    if(!this.canLeave){
      const dialogRef = this.dialog.open(SignupConfirmDialog)
      dialogRef.afterClosed().subscribe(
        (dialogResult) =>{
          this.canLeave = dialogResult
          if (this.canLeave){
            this.router.navigate(['./'])
          }
       
        }
      )
    }else{
      this.router.navigate(['./'])
    }
    
  }
  canDeactivate() {
    return this.canLeave;
  }

  monitorFormState(form: FormGroup) {
    console.log(form.valid);

    this.canLeave = !(form.touched && form.dirty) && form.valid;
  }
}
