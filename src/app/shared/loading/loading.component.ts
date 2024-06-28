import { Component, inject } from '@angular/core';
import { LoadingService } from './loading.service';

@Component({
  selector: 'app-loading',
  template: `
  @if(loadingService.isLoading){
    <ng-content select="[loading]"/>
  }@else {
    <ng-content select="[loaded]"/>
  }
  `,
  styleUrl: './loading.component.scss'
})
export class LoadingComponent {
  loadingService = inject(LoadingService)
}
