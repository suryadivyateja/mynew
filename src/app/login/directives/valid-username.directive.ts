import { Directive } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, ValidatorFn, Validator, FormControl } from '@angular/forms';


// validation function
function validateJuriNameFactory() : ValidatorFn {
  return (c: AbstractControl) => {
    var pattern =   /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if(c.value && pattern.test(c.value)){
      if(c.value === 'surya@gmail.com') {
        return null;
      } else {
        return {
          validUsername: {
            valid: false
          }
        };
      }
    }

  }
}


@Directive({
  selector: '[validUsername][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: ValidUsernameDirective, multi: true }
  ]
})
export class ValidUsernameDirective implements Validator {
  validator: ValidatorFn;
  
  constructor() {
    this.validator = validateJuriNameFactory();
  }
  
  validate(c: FormControl) {
    return this.validator(c);
  }
  
}
