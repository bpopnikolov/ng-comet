import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FileValidator } from 'ngx-material-file-input';
import { FormErrorStateMatcher, UtilityService, ValidationService } from '../../shared/utility';

const options = ['bold', 'italic', 'underline', 'fontSize', 'color', 'align', 'insertLink', 'paragraphFormat', 'alert'];

@Component({
    selector: 'app-job-application-modal',
    templateUrl: './job-application-modal.component.html',
    styleUrls: ['./job-application-modal.component.scss'],
})

export class JobApplicationModalComponent implements OnInit {

    public jobTitle: string = '';
    public modalForm: FormGroup;
    public firstname: AbstractControl;
    public lastname: AbstractControl;
    public comment: AbstractControl;
    public cv: AbstractControl;
    public cl: AbstractControl;
    public editorOptions: { [key: string]: any } = {
        placeholderText: 'Comment',
        charCounterCount: true,
        toolbarButtons: options,
        toolbarButtonsXS: options,
        toolbarButtonsSM: options,
        toolbarButtonsMD: options,
    };
    public readonly maxFileSize = 16777216;

    constructor(
        public dialogRef: MatDialogRef<JobApplicationModalComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private fb: FormBuilder,
        private fm: FormErrorStateMatcher,
        private validationService: ValidationService,
        private utilityService: UtilityService,
    ) { }

    public ngOnInit(): void {
        this.jobTitle = this.data.jobTitle;
        this.initModalForm();
    }

    public initModalForm(): void {

        this.modalForm = this.fb.group({
            firstname: ['', [Validators.required, Validators.maxLength(100), Validators.minLength(3)]],
            lastname: ['', [Validators.required, Validators.maxLength(100), Validators.minLength(3)]],
            comment: ['', [Validators.maxLength(1024)]],
            cv: [null, [
                Validators.required,
                this.validationService.validateApplicationFileFormat,
                FileValidator.maxContentSize(this.maxFileSize)]],
            cl: [null, [
                Validators.required,
                this.validationService.validateApplicationFileFormat,
                FileValidator.maxContentSize(this.maxFileSize)]],
        });

        this.firstname = this.modalForm.controls.firstname;
        this.lastname = this.modalForm.controls.lastname;
        this.comment = this.modalForm.controls.comment;
        this.cv = this.modalForm.controls.cv;
        this.cl = this.modalForm.controls.cv;
    }

    public getNameFieldErrorMsg(control: AbstractControl): string {
        return this.utilityService.getApplicationNameErrorMessages(control);
    }

    public getFileFormatErrorMsg(control: AbstractControl): string {
        return this.utilityService.getApplicationFileFormatError(control);
    }

    public onActionClick(): void {
        this.data.subject.next(this.modalForm.value);
    }

    public onCancelClick(): void {
        this.dialogRef.close();
    }
}
