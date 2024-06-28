import { CommonModule } from '@angular/common';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { LoadingComponent } from './loading.component';
import { loadingInterceptor } from './loading.interceptor';

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
