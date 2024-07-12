import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { MasterComponent } from './master/master.component';
import { PlayerComponent } from './player/player.component';
import { GestioneutentiComponent } from './gestioneutenti/gestioneutenti.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children:[
      {
        path: 'master',
        component: MasterComponent,
      },  
      {
        path: 'master/user-managment',
        component: GestioneutentiComponent
      },
      {
        path: 'player',
        component: PlayerComponent
      },
      {
        path: 'player/user-managment',
        component: GestioneutentiComponent
      }
    
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
