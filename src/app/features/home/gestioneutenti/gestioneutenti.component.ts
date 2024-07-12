import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { UserService } from '../../../core/services/user.service';
import { UpdateUserConfig } from '../../../core/configs/users';
import { Form } from '@angular/forms';
import { tap } from 'rxjs';
import { User } from '../../../core/models/users';

@Component({
  selector: 'app-gestioneutenti',
  templateUrl: './gestioneutenti.component.html',
  styleUrl: './gestioneutenti.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GestioneutentiComponent {
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
