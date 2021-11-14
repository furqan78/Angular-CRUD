import { AbstractControl, ValidatorFn } from "@angular/forms";

export function forbiddenEmailValidaor(forbiddenEmail : RegExp): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null =>{
        const forbidden = forbiddenEmail.test(control.value);
        return forbidden ? null : {'forbiddenEmail': {value: control.value}} ;
    };
}