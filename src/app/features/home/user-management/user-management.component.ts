import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { UserService } from '../../../core/services/user.service';
import { UpdateUserConfig } from '../../../core/configs/users';
import { Form } from '@angular/forms';
import { User } from '../../../core/models/users';
import { tap } from 'rxjs';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserManagementComponent {
  userService = inject(UserService)
  userDataStore!: User
  userData$ = this.userService.getUserById().pipe(
    tap(
      res => {this.userDataStore = res}
    )
  )
  formConfig = UpdateUserConfig



  handleSubmit(event: Partial<User>){
    const {password, ...rest} = event
    const formValue = event.password ? event : rest
    const dataToUpdate = {
      ...this.userDataStore,
      ...formValue,

    }
    this.userData$ = this.userService.updateUser(dataToUpdate)
  }
}
