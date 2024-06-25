import { ValidatorFn } from "@angular/forms";


export function matchPasswordValidator(pwd1:string, pwd2:string):ValidatorFn{
    return (control)=>{
        if(control.get(pwd1)?.value !== control.get(pwd2)?.value){
            return {
                passwordMismatch:true,
                relatedFields:[pwd1, pwd2]
            }
        }
        return null;
    }
}