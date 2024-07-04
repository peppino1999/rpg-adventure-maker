import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { UsersService } from '../users.service';
import { EssentialComponent } from '../../../core/components/essentialComponent';
import { catchError, map, takeUntil, throwError } from 'rxjs';
import { userFormConfig } from '../../../core/configs';
import { LOGGEDIN_ROOT } from '../../../core/tokens';
import { FormGroup } from '@angular/forms';
import { CanDeactivateComponent } from '../../../core/guards/can-exit.guard';

@Component({
  selector: 'app-users-detail',
  templateUrl: './users-detail.component.html',
  styleUrl: './users-detail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersDetailComponent extends EssentialComponent implements CanDeactivateComponent {
  usersService = inject(UsersService);
  formConfig = userFormConfig;
  loggedUser = inject(LOGGEDIN_ROOT)
  user$ = this.route.data.pipe(
    map(
      (data) => data['user']
    ),
    // catchError((error) => {
    //   this.router.navigate([this.loggedUser], {
    //     relativeTo: this.route
    //   });
    //   return throwError(() => error);
    // })
  );

  canLeave = true
  dialogTitle: string = "Sei sicuro?"
  dialogContent: string = "Uscendo perderai le modifiche!"
  deleteUser(user: any) {
    this.usersService
      .deleteUser(user)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.canLeave = true
        this.router.navigate(['../']);
      });
  }

  updateUser(user: any) {
    this.usersService
      .updateUser({ ...user, id: this.routeParams['id'] })
      .pipe(takeUntil(this.destroy$))
      .subscribe((_user) => {
        this.canLeave = true
        this.router.navigate(['/']);
      });
  }


  canDeactivate() {
    return this.canLeave;
  }

  monitorFormState(form: FormGroup) {

    this.canLeave = !(form.touched && form.dirty) && form.valid;
  }
}
