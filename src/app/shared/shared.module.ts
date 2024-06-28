import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorComponent } from './error/error.component';
import { TableComponent } from './table/table.component';
import { LoadingComponent } from './loading/loading.component';
import { MaterialModule } from './material.module';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    FormComponent,
    ErrorComponent,
    TableComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [
    FormComponent,
    ErrorComponent,
    TableComponent,
    HeaderComponent,
    MaterialModule
  ]
})
export class SharedModule { }
