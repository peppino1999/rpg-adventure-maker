import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { UserService } from '../../../core/services/user.service';
import { User } from '../../../core/models/users';
import { Observable } from 'rxjs';
import { TableConfig } from '../../../shared/table/table.model';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrl: './master.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MasterComponent {

  userService = inject(UserService)
  users$: Observable<User[]> = this.userService.usersByPartyAndType()

  tableConfig: TableConfig[] = [
    {
      name: 'email',
      type: 'text',
      label: 'Email'
    },
    {
      name: 'type',
      type: 'text',
      label: 'Type'
    }
  ]

}
