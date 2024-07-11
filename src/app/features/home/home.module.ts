import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from '../../shared/shared.module';
import { MasterComponent } from './master/master.component';
import { PlayerComponent } from './player/player.component';

@NgModule({
  declarations: [HomeComponent, MasterComponent, PlayerComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
})
export class HomeModule {}
