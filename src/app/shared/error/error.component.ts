import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrl: './error.component.scss'
})
export class ErrorComponent {
  @Input() control!: AbstractControl<any, any> | null
  @Input() errorMessage!: string | undefined
  @Input() globalErrors!: ValidationErrors | null
  @Input() name!: string | undefined
}
