import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable()
export class ValidationService {

  constructor() { }

  public validatePassword(formControl: FormControl): { [error: string]: any } {
    const PASS_REGEXP = /^(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/;
    return PASS_REGEXP.test(formControl.value) ? null : { 'validatePassword': { valid: false } };
  }

  public matchingPasswords(controlKey: string, matchingControlKey: string): {[error: string]: any} {
    return (group: FormGroup): {[key: string]: any} => {
      if (group.controls[controlKey].value !== group.controls[matchingControlKey].value) {
        group.controls[matchingControlKey].setErrors({ 'mismatch': { valid: false } });
        return { 'mismatch': { valid: false } };
      }
    }
  }
}
