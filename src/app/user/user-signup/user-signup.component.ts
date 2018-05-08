import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormErrorStateMatcher, UtilityService, ValidationService } from '../../shared/utility';
import { SignupForm } from '../shared';
import { MatSnackBar } from '@angular/material';


@Component({
    selector: 'app-user-signup',
    templateUrl: './user-signup.component.html',
    styleUrls: ['./user-signup.component.scss'],
})
export class UserSignupComponent implements OnInit {

    @Output() public signupSubmited = new EventEmitter<SignupForm>();

    public signupForm: FormGroup;
    public email: AbstractControl;
    public password: AbstractControl;
    public confirmPassword: AbstractControl;

    constructor(
        private fb: FormBuilder,
        private fm: FormErrorStateMatcher,
        private validationService: ValidationService,
        private utilityService: UtilityService,
        private snackBar: MatSnackBar,
    ) {
    }

    public ngOnInit(): void {
        this.initSignupForm();
    }

    public initSignupForm(): void {
        this.signupForm = this.fb.group(
            {
                email: ['', [Validators.required, Validators.maxLength(1024), Validators.email]],
                password: ['', [Validators.required, Validators.maxLength(256), this.validationService.validatePassword]],
                confirmPassword: ['', Validators.required],
            },
            {
                validator: this.validationService.matchingPasswords('password', 'confirmPassword'),
            });

        this.email = this.signupForm.controls.email;
        this.password = this.signupForm.controls.password;
        this.confirmPassword = this.signupForm.controls.confirmPassword;
    }

    public getEmailErrorMessage(): string {
        return this.utilityService.getEmailErrorMessages(this.email);
    }

    public getPasswordErrorMessage(): string {
        return this.utilityService.getPasswordErrorMessages(this.password);
    }

    public getConfirmPasswordErrorMessage(): string {
        return this.utilityService.getConfirmPasswordErrorMessages(this.confirmPassword);
    }

    public onSubmit(): void {
        const form = {
            email: this.email.value,
            password: this.password.value,
            confirmPassword: this.confirmPassword.value,
        };

        if (this.signupForm.valid) {
            this.signupSubmited.emit(form);
        }
    }

}
