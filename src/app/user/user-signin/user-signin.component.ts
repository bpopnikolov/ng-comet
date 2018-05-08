import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormErrorStateMatcher } from '../../shared/utility';
import { UtilityService } from '../../shared/utility/utility.service';
import { ValidationService } from '../../shared/utility/validation.service';
import { SigninForm } from '../shared';

@Component({
    selector: 'app-user-signin',
    templateUrl: './user-signin.component.html',
    styleUrls: ['./user-signin.component.scss'],
})
export class UserSigninComponent implements OnInit {

    @Output() public signinSubmited = new EventEmitter<SigninForm>();

    public signinForm: FormGroup;
    public email: AbstractControl;
    public password: AbstractControl;
    public rememberMe: AbstractControl;

    constructor(
        private fb: FormBuilder,
        private fm: FormErrorStateMatcher,
        private validationService: ValidationService,
        private utilityService: UtilityService,
    ) {

    }

    public ngOnInit(): void {
        this.initSigninForm();
    }

    public initSigninForm(): void {
        this.signinForm = this.fb.group({
            email: ['', [Validators.required, Validators.maxLength(1024), Validators.email]],
            password: ['', [Validators.required, Validators.maxLength(256), this.validationService.validatePassword]],
            rememberMe: [false, []],
        });

        this.email = this.signinForm.controls.email;
        this.password = this.signinForm.controls.password;
    }

    public getEmailErrorMessage(): string {
        return this.utilityService.getEmailErrorMessages(this.email);
    }

    public getPasswordErrorMessage(): string {
        return this.utilityService.getPasswordErrorMessages(this.password);
    }
    public onSubmit(): void {
        // const form = {
        //     email: this.email.value,
        //     password: this.password.value,
        //     rememberMe: this.rememberMe
        // };

        if (this.signinForm.valid) {
            this.signinSubmited.emit(this.signinForm.value);
        }
    }

}
