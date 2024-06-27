import { NgModule } from '@angular/core';
import { LoadingComponent } from './loading.component';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors } from '@angular/common/http';
import { loadingInterceptor } from '../../core/interceptors/loading.interceptor';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [LoadingComponent],
  imports: [
    CommonModule
  ],
  providers:[
    provideHttpClient(
      withInterceptors(
        [
          loadingInterceptor
        ]
      )
    )
  ],
  exports: [
    LoadingComponent
  ]
})
export class LoadingModule {}
