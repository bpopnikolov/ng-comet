import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Category } from '../../../shared/models';
import { FormErrorStateMatcher, UtilityService, ValidationService } from '../../../shared/utility';

const options = ['bold', 'italic', 'underline', 'fontSize', 'color', 'align', 'insertLink', 'paragraphFormat', 'alert'];
@Component({
    selector: 'app-jobad-admin-modal',
    templateUrl: './jobad-admin-modal.component.html',
    styleUrls: ['./jobad-admin-modal.component.scss'],
})
export class JobadAdminModalComponent implements OnInit {

    public modalTitle: string;
    public modalActionButton: string;
    public modalForm: FormGroup;
    public desc: AbstractControl;
    public title: AbstractControl;
    public category: AbstractControl;
    public status: AbstractControl;
    public categories: Category[] = [];
    public statuses = [];
    public editorOptions: { [key: string]: any } = {
        placeholderText: 'Description',
        charCounterCount: true,
        toolbarButtons: options,
        toolbarButtonsXS: options,
        toolbarButtonsSM: options,
        toolbarButtonsMD: options,
    };

    constructor(
        public dialogRef: MatDialogRef<JobadAdminModalComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private fb: FormBuilder,
        private fm: FormErrorStateMatcher,
        private validationService: ValidationService,
        private utilityService: UtilityService,
    ) { }

    public ngOnInit(): void {
        this.modalTitle = this.data.modalTitle;
        this.modalActionButton = this.data.modalActionButton;

        if (this.data.jobCategories) {
            this.categories = this.data.jobCategories;
        }

        this.statuses = [
            { name: 'active' },
            { name: 'inactive' },
        ];

        this.initModalForm();
    }

    public initModalForm(): void {
        const jobAd = this.data.jobAd;
        this.modalForm = this.fb.group({
            title: [jobAd ? jobAd.title : '', [Validators.required, Validators.maxLength(256), Validators.minLength(4)]],
            desc: [jobAd ? jobAd.desc : '', [Validators.required, Validators.maxLength(16384), Validators.minLength(4)]],
            category: [jobAd ? jobAd.category.name : '', [Validators.required]],
            status: [jobAd ? jobAd.status : '', [Validators.required]],
        });

        this.data.modalActionButton === 'Preview' ? this.modalForm.disable() : this.modalForm.enable();

        this.title = this.modalForm.controls.title;
        this.desc = this.modalForm.controls.desc;
        this.category = this.modalForm.controls.category;
        this.status = this.modalForm.controls.status;

    }

    public getTitleErrorMsg(): string {
        return this.utilityService.getJobTitleErrorMessages(this.title);
    }

    public getDescErrorMsg(): string {
        return this.utilityService.getJobDescErrorMessages(this.desc);
    }

    public getFieldRequiredErrorMsg(control: AbstractControl): string {
        return this.utilityService.getFieldIsRequiredErrorMessage(control);
    }

    public onActionClick(): void {
        this.data.subject.next({ action: this.modalActionButton, formValue: this.modalForm.value, modalData: this.data });
    }

    public onCancelClick(): void {
        this.dialogRef.close();
    }

}
