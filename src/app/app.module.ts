import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { API_URL, LOGGEDIN_ROOT, SECURE_URL_CODE } from './core/tokens';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
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

    )
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
