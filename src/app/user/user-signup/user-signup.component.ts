import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormErrorStateMatcher, UtilityService, ValidationService } from '../../shared/utility';
import { SignupForm } from '../shared';
import { ResponseError } from '../../shared/models';
import { Subject } from 'rxjs/Subject';


@Component({
    selector: 'app-user-signup',
    templateUrl: './user-signup.component.html',
    styleUrls: ['./user-signup.component.scss']
})
export class UserSignupComponent implements OnInit {

    @Output() signupSubmited = new EventEmitter<SignupForm>();

    signupForm: FormGroup;
    public email: AbstractControl;
    public password: AbstractControl;
    public confirmPassword: AbstractControl;

    constructor(
        private fb: FormBuilder,
        private fm: FormErrorStateMatcher,
        private validationService: ValidationService,
        private utilityService: UtilityService
    ) {
    }

    ngOnInit() {
        this.initSignupForm();
    }

    initSignupForm() {
        this.signupForm = this.fb.group({
            'email': ['', [Validators.required, Validators.maxLength(1024), Validators.email]],
            'password': ['', [Validators.required, Validators.maxLength(256), this.validationService.validatePassword]],
            'confirmPassword': ['', Validators.required],
        }, {
                validator: this.validationService.matchingPasswords('password', 'confirmPassword')
            });

        this.email = this.signupForm.controls['email'];
        this.password = this.signupForm.controls['password'];
        this.confirmPassword = this.signupForm.controls['confirmPassword'];
    }

    getEmailErrorMessage() {
        return this.utilityService.getEmailErrorMessages(this.email);
    }

    getPasswordErrorMessage() {
        return this.utilityService.getPasswordErrorMessages(this.password);
    }

    getConfirmPasswordErrorMessage() {
        return this.utilityService.getConfirmPasswordErrorMessages(this.confirmPassword);
    }

    onSubmit() {
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
