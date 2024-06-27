import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { API_URL, LOGGEDIN_ROOT, SECURE_URL_CODE } from './core/tokens';
import { SharedModule } from './shared/shared.module';
import { loadingInterceptor } from './core/interceptors/loading.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    {
      provide: API_URL,
      useValue: '/api'
    },
    {
      provide: SECURE_URL_CODE,
      useValue: '660'
    },
    {
      provide: LOGGEDIN_ROOT,
      useValue: '/users'
    },
    provideHttpClient(
      withFetch(),
      withInterceptors([
        loadingInterceptor
      ])
    )
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
