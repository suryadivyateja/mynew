import { Directive } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, ValidatorFn, Validator, FormControl } from '@angular/forms';


// validation function
function validateUserNameFactory() : ValidatorFn {
  return (c: AbstractControl) => {
    var pattern =   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    if(c.value && pattern.test(c.value)){
      if(c.value === 'Surya1431') {
        return null;
      } else {
        return {
          validUserpassword: {
            valid: false
          }
        };
      }
    }

  }
}


@Directive({
  selector: '[validUserpassword][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: ValidUserpasswordDirective, multi: true }
  ]
})
export class ValidUserpasswordDirective implements Validator {
  validator: ValidatorFn;
  
  constructor() {
    this.validator = validateUserNameFactory();
  }
  
  validate(c: FormControl) {
    return this.validator(c);
  }
  
}
