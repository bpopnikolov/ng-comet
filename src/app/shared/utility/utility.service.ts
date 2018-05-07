import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { AppConfigService } from '../../app-config.service';

@Injectable()
export class UtilityService {

    private errors: { [key: string]: string };

    constructor(private configService: AppConfigService) {
        this.errors = configService.get('errors');
    }

    public getEmailErrorMessages(email: AbstractControl): string {
        if (email.hasError('required')) {
            return this.errors.emailRequiredError;
        }
        if (email.hasError('email')) {
            return this.errors.emailNotValidError;
        }
        if (email.hasError('maxlength')) {
            return this.errors.emailMaxLengthError;
        }
    }

    public getPasswordErrorMessages(password: AbstractControl): string {
        if (password.hasError('required')) {
            return this.errors.passwordMaxLengthError;
        }
    }

    public getConfirmPasswordErrorMessages(confirmPassword: AbstractControl): string {
        if (confirmPassword.hasError('required')) {
            return this.errors.passwordsMismatchError;
        }
    }


    public getLinkNameErrorMessages(name: AbstractControl): string {
        if (name.hasError('required')) {
            return this.errors.fieldRequiredError;
        }
        if (name.hasError('minlength')) {
            return this.errors.linkNameMinLengthError;
        }
        if (name.hasError('maxlength')) {
            return this.errors.linkNameMaxLengthError;
        }
    }

    public getJobTitleErrorMessages(title: AbstractControl): string {
        if (title.hasError('required')) {
            return this.errors.fieldRequiredError;
        }
        if (title.hasError('minlength')) {
            return this.errors.jobTitleMinLengthError;
        }
        if (title.hasError('maxlength')) {
            return this.errors.jobTitleMaxLengthError;
        }
    }


    public getJobDescErrorMessages(desc: AbstractControl): string {
        if (desc.hasError('required')) {
            return this.errors.fieldRequiredError;
        }
        if (desc.hasError('minlength')) {
            return this.errors.jobDescMinLengthError;
        }
        if (desc.hasError('maxlength')) {
            return this.errors.jobDescMaxLengthError;
        }
    }


    public getLinkTargetErrorMessages(target: AbstractControl): string {
        if (target.hasError('required')) {
            return this.errors.fieldRequiredError;
        }
        if (target.hasError('validateUrl')) {
            return this.errors.invalidUrlError;
        }
    }

    public getContactNameErrorMessages(name: AbstractControl): string {
        if (name.hasError('required')) {
            return this.errors.fieldRequiredError;
        }
        if (name.hasError('minlength')) {
            return this.errors.contactNameMinLengthError;
        }
        if (name.hasError('maxlength')) {
            return this.errors.contactNameMaxLengthError;
        }
    }
    public getContactValueErrorMessages(value: AbstractControl): string {
        if (value.hasError('required')) {
            return this.errors.fieldRequiredError;
        }
        if (value.hasError('minlength')) {
            return this.errors.contactValueMinLengthError;
        }
        if (value.hasError('maxlength')) {
            return this.errors.contactValueMaxLengthError;
        }
    }

    public getApplicationNameErrorMessages(name: AbstractControl): string {
        if (name.hasError('required')) {
            return this.errors.fieldRequiredError;
        }
        if (name.hasError('minlength')) {
            return this.errors.applicationNameMinLengthError;
        }
        if (name.hasError('maxlength')) {
            return this.errors.applicationNameMaxLengthError;
        }
    }

    public getApplicationFileFormatError(control: AbstractControl): string {
        if (control.hasError('fileFormat')) {
            return this.errors.applicationFileFormatError;
        }
    }
    public getFieldIsRequiredErrorMessage(control: AbstractControl): string {
        return control.hasError('required') ? this.errors.fieldRequiredError : '';
    }

}
