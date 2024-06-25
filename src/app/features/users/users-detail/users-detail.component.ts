import { Component, inject } from '@angular/core';
import { UsersService } from '../../../core/services/users.service';
import { EssentialComponent } from '../../../core/essentialComponent';
import { catchError, takeUntil, throwError } from 'rxjs';
import { userFormConfig } from '../../../core/configs';

@Component({
  selector: 'app-users-detail',
  templateUrl: './users-detail.component.html',
  styleUrl: './users-detail.component.scss',
})
export class UsersDetailComponent extends EssentialComponent {
  usersService = inject(UsersService);
  formConfig = userFormConfig;

  user$ = this.usersService.getUser(this.routeParams['id']).pipe(
    catchError((error) => {
      this.router.navigate(['/']);
      return throwError(() => error);
    })
  );

  deleteUser(user: any) {
    this.usersService
      .deleteUser(user)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.router.navigate(['/']);
      });
  }

  updateUser(user: any) {
    this.usersService
      .updateUser({ ...user, id: this.routeParams['id'] })
      .pipe(takeUntil(this.destroy$))
      .subscribe((_user) => {
        this.router.navigate(['/']);
      });
  }
}
