import { provideHttpClient, withFetch } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { API_URL } from "../configs/tokens";

@NgModule({
 providers:[
    {
        provide: API_URL,
        useValue: '/api'
      },
      provideHttpClient(
        withFetch(),
      )
 ]
})
export class ApiClientModule{}