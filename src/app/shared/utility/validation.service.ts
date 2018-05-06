import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable()
export class ValidationService {

    constructor() { }

    public isUrl(formControl: FormControl): { [error: string]: any } {
        const URL_REGEXP = new RegExp('^(?!mailto:)(?:(?:http|https|ftp)://)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$', 'i');
        return URL_REGEXP.test(formControl.value) ? null : { validateUrl: { valid: false } };
    }

    public validatePassword(formControl: FormControl): { [error: string]: any } {
        const PASS_REGEXP = /^(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/;
        return PASS_REGEXP.test(formControl.value) ? null : { validatePassword: { valid: false } };
    }

    public matchingPasswords(controlKey: string, matchingControlKey: string): { [error: string]: any } {
        return (group: FormGroup): { [key: string]: any } => {
            if (group.controls[controlKey].value !== group.controls[matchingControlKey].value) {
                group.controls[matchingControlKey].setErrors({ mismatch: { valid: false } });
                return { mismatch: { valid: false } };
            }
        };
    }
}
