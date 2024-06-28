import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { AbstractControlOptions, FormControl, FormGroup, ReactiveFormsModule, ValidatorFn } from '@angular/forms';
import { takeUntil } from 'rxjs';
import { ErrorComponent } from '../error/error.component';
import { EssentialComponent } from '../../core/components/essentialComponent';


export interface FormConfig {
  name: string,
  label: string,
  type: string,
  connectedTo?: string,
  validators?: ValidatorFn | ValidatorFn[],
  errorMessage?: string
}

@Component({
  selector: 'app-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent<T> extends EssentialComponent implements OnInit, AfterViewInit {

  @Input() formConfig!: FormConfig[] 
  @Input() startingValues!: T | null
  @Input() globalValidators!: ValidatorFn | ValidatorFn[] | null | undefined 
  @Output() onSubmit: EventEmitter<any> = new EventEmitter()
  @Output() formState: EventEmitter<FormGroup<any>> = new EventEmitter()
  form!:FormGroup

  private generateForm(formConfig: FormConfig[]){
    const configOutput : Record<any,FormControl> = {}
    formConfig.forEach( (item) =>{
      configOutput[item.name] =  new FormControl(null, item.validators)
    })
    return configOutput
  }

  ngAfterViewInit(): void {
    
    if( this.startingValues){
      this.form?.patchValue(this.startingValues )
    }
  }

  ngOnInit(): void {
      this.form = new FormGroup(this.generateForm(this.formConfig), {
        validators: this.globalValidators
      })
      if(this.form){
        this.form.valueChanges.pipe(
          takeUntil(this.destroy$)
        ).subscribe(() =>{
          // if(this.form.errors){
          //   this.form.errors?['relatedFields']
          // }
          this.formState.emit(this.form)
        })
      }
  }

  submit(){
    this.onSubmit.emit(this.form.value)
    //this.form.reset()
  }

  
}


