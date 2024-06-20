import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersDetailComponent } from './users-detail/users-detail.component';
import { UsersNewComponent } from './users-new/users-new.component';

const routes: Routes = [
    {
        path: '',
        component: UsersListComponent,   
    },
    {
        path: 'new',
        component: UsersNewComponent
    },
    {
        path: ':id',
        component: UsersDetailComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
