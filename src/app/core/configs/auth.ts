import { ValidatorFn, Validators } from '@angular/forms';
import { matchPasswordValidator } from '../validators/matchPasswordValidator';
import { FormConfig } from '../../shared/form/form.component';

export const globalSignupFormConfig: ValidatorFn[] = [
  matchPasswordValidator('password', 'confirmPassword'),
];

export const signUpConfig: FormConfig[] = [
 
  {
    name: 'email',
    label: 'Indirizzo Email',
    type: 'text',
    validators: [Validators.required, Validators.email],
  },
  {
    name: 'password',
    label: 'Password',
    type: 'password',
    validators: [Validators.required],
  },
  {
    name: 'confirmPassword',
    label: 'Conferma Password',
    type: 'password',
    validators: [Validators.required],
  },
  {
    name: 'type',
    label: 'Tipo di account',
    type: 'select',
    options: [
      { label: 'Giocatore', value: 'player' },
      { label: 'Master', value: 'master' },
    ],
    validators: [Validators.required],

  },
];

export const signupPlayerConfig: FormConfig[] = [
  ...signUpConfig,
  {
    name: 'partyId',
    label: 'Codice Party ID',
    type: 'text',
    validators: [Validators.required],
  },
]

export const signInConfig: FormConfig[] = [
  {
    name: 'email',
    label: 'Indirizzo Email',
    type: 'text',
    validators: [Validators.required, Validators.email],
  },
  {
    name: 'password',
    label: 'Password',
    type: 'password',
    validators: [Validators.required],
  },
];
