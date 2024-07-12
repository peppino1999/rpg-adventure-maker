import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import {
  AbstractControlOptions,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidatorFn,
} from '@angular/forms';
import { Observable, Subscription, takeUntil } from 'rxjs';
import { ErrorComponent } from '../error/error.component';
import { EssentialComponent } from '../../core/components/essentialComponent';
import { UserTypes } from '../../core/models/users';

export interface FormConfig {
  name: string;
  label: string;
  type: string;
  connectedTo?: string;
  validators?: ValidatorFn | ValidatorFn[];
  errorMessage?: string;
  options?: { label: string; value: string }[];
}

@Component({
  selector: 'app-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent<T>
  extends EssentialComponent
  implements OnInit, AfterViewInit
{
  @Input() formConfig!: FormConfig[];
  @Input() startingValues!: T | null;
  @Input() globalValidators!: ValidatorFn | ValidatorFn[] | null | undefined;
  @Output() onSubmit: EventEmitter<any> = new EventEmitter();
  @Output() formState: EventEmitter<FormGroup<any>> = new EventEmitter();
  form!: FormGroup;
  formStateSubs!: Subscription;

  ngAfterViewInit(): void {
    if (this.startingValues) {
      this.form?.patchValue(this.startingValues);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['formConfig']) {
      const formValue = this.form?.value;
      // create a new form object
      this.form = new FormGroup(this.generateForm(this.formConfig), {
        validators: this.globalValidators,
      });
      //patch with old values
      if (formValue) {
        this.form.patchValue(formValue);
      }
      //reset subscription
      this.refreshFormStateSubs(true);
    }
    if(changes['startingValues']){
      if(this.startingValues){
        this.form.patchValue(this.startingValues)
      }
    }
  }

  ngOnInit(): void {
    this.form = new FormGroup(this.generateForm(this.formConfig), {
      validators: this.globalValidators,
    });
    this.refreshFormStateSubs();
  }

  private generateForm(formConfig: FormConfig[]) {
    const configOutput: Record<any, FormControl> = {};
    formConfig.forEach((item) => {
      configOutput[item.name] = new FormControl(null, item.validators);
    });
    return configOutput;
  }

  submit() {
    this.onSubmit.emit(this.form.value);
    //this.form.reset()
  }

  private subscribeToFormChanges() {
    return this.form.valueChanges.pipe(takeUntil(this.destroy$)).subscribe({
      next: (_form) => {
        this.formState.emit(this.form);
      },
    });
  }

  private refreshFormStateSubs(unsubscribe: boolean = false) {
    if (unsubscribe) {
      this.formStateSubs?.unsubscribe();
    }
    this.formStateSubs = this.subscribeToFormChanges();
  }


}
