import { ValidatorFn } from "@angular/forms";
import { matchPasswordValidator } from "../validators/matchPasswordValidator";

export const globalSignupFormConfig: ValidatorFn[] = [
    matchPasswordValidator('password', 'confirmPassword'),
  ];