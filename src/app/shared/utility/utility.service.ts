import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { AppConfigService } from '../../app-config.service';

@Injectable()
export class UtilityService {

    authConfig: any
    constructor(private configService: AppConfigService) {
        this.authConfig = configService.get('auth');
    }

    getEmailErrorMessages(email: AbstractControl) {
        if (email.hasError('required')) {
            return this.authConfig.emailRequiredError;
        }
        if (email.hasError('email')) {
            return this.authConfig.emailNotValidError;
        }
        if (email.hasError('maxlength')) {
            return this.authConfig.emailMaxLengthError;
        }
    }


    getPasswordErrorMessages(password: AbstractControl) {
      if (password.hasError('required')) {
          return this.authConfig.passwordRequiredError;
      }
      if (password.hasError('validatePassword')) {
          return this.authConfig.passwordNotValidError;
      }
      if (password.hasError('maxlength')) {
          return this.authConfig.passwordMaxLengthError;
      }
  }
}
