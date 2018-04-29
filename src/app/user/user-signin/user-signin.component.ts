import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormErrorStateMatcher } from '../../shared/utility';
import { UtilityService } from '../../shared/utility/utility.service';
import { ValidationService } from '../../shared/utility/validation.service';
import { SigninForm } from '../shared';

@Component({
    selector: 'app-user-signin',
    templateUrl: './user-signin.component.html',
    styleUrls: ['./user-signin.component.scss']
})
export class UserSigninComponent implements OnInit {

    @Output() signinSubmited = new EventEmitter<SigninForm>();

    signinForm: FormGroup;
    public email: AbstractControl;
    public password: AbstractControl;

    constructor(
        private fb: FormBuilder,
        private fm: FormErrorStateMatcher,
        private validationService: ValidationService,
        private utilityService: UtilityService
    ) {

    }

    ngOnInit() {
        this.initSigninForm();
    }

    initSigninForm() {
        this.signinForm = this.fb.group({
            'email': ['', [Validators.required, Validators.maxLength(1024), Validators.email]],
            'password': ['', [Validators.required, Validators.maxLength(256), this.validationService.validatePassword]]
        });

        this.email = this.signinForm.controls['email'];
        this.password = this.signinForm.controls['password'];
    }

    getEmailErrorMessage() {
        return this.utilityService.getEmailErrorMessages(this.email);
    }

    getPasswordErrorMessage() {
        return this.utilityService.getPasswordErrorMessages(this.password);
    }
    onSubmit() {
        const form = {
            email: this.email.value,
            password: this.password.value,
        };

        if (this.signinForm.valid) {
            this.signinSubmited.emit(form);
        }
    }

}
