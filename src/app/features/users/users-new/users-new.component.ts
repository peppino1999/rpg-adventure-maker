import { Component, inject } from '@angular/core';
import { UsersService } from '../../../core/services/users.service';
import { takeUntil } from 'rxjs';
import { EssentialComponent } from '../../../core/essentialComponent';
import { Router } from '@angular/router';
import { userFormConfig } from '../../../core/configs';
import { User } from '../../../core/models';

@Component({
  selector: 'app-users-new',
  templateUrl: './users-new.component.html',
  styleUrl: './users-new.component.scss'
})
export class UsersNewComponent extends EssentialComponent{
  formConfig = userFormConfig
  usersService = inject(UsersService)

  createUser(user: User){
    this.usersService.addUser(user).pipe(
      takeUntil(this.destroy$)
    ).subscribe((_user) => {
      this.router.navigate(['/'])
    })
  }
}
