import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable()
export class ValidationService {

  constructor() { }

  public validatePassword(formControl: FormControl): { [error: string]: boolean } {
    const PASS_REGEXP = /^(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/;
    return PASS_REGEXP.test(formControl.value) ? null : { validatePassword: true };
  }

  public getEmailErrorMessage
}
