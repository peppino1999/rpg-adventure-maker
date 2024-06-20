import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users-routing.module';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersDetailComponent } from './users-detail/users-detail.component';
import { UsersNewComponent } from './users-new/users-new.component';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    UsersComponent,
    UsersListComponent,
    UsersDetailComponent,
    UsersNewComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule
  ],
  bootstrap: [UsersComponent]
})
export class UsersModule { }
