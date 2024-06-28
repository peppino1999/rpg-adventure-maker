import { Component, inject } from '@angular/core';
import { EssentialComponent } from '../../../core/components/essentialComponent';
import { userTableConfig } from '../../../core/configs';
import { User } from '../../../core/models';
import { map } from 'rxjs';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent extends EssentialComponent{

   tableConfig = userTableConfig
   users$ = this.route.data.pipe(
    map(data => data['users'])
   );

   goToDetail(user:User){
     this.router.navigate([user.id], {relativeTo: this.route})
   }
}
