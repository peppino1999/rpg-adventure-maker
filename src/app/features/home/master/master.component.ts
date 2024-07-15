import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { UserService } from '../../../core/services/user.service';
import { User } from '../../../core/models/users';
import { Observable } from 'rxjs';
import { userTableConfig } from '../../../core/configs/users';
import { Router } from '@angular/router';


@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrl: './master.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MasterComponent {

  userService = inject(UserService)
  users$: Observable<User[]> = this.userService.usersByPartyAndType()
  tableConfig = userTableConfig
  router = inject(Router)
  goToDetail(user: User){
    this.router.navigate([`/master/character/${user.id}`])
  }
 


}
