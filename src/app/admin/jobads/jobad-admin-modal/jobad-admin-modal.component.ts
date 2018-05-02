import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormErrorStateMatcher, UtilityService, ValidationService } from '../../../shared/utility';

@Component({
    selector: 'app-jobad-admin-modal',
    templateUrl: './jobad-admin-modal.component.html',
    styleUrls: ['./jobad-admin-modal.component.scss']
})
export class JobadAdminModalComponent implements OnInit {

    modalTitle: string;
    modalActionButton: string;
    modalForm: FormGroup;
    desc: AbstractControl;
    title: AbstractControl;
    category: AbstractControl;
    status: AbstractControl;
    categories = [];
    statuses = []

    constructor(
        public dialogRef: MatDialogRef<JobadAdminModalComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private fb: FormBuilder,
        private fm: FormErrorStateMatcher,
        private validationService: ValidationService,
        private utilityService: UtilityService
    ) { }

    ngOnInit() {
        this.modalTitle = this.data.modalTitle;
        this.modalActionButton = this.data.modalActionButton;

        this.categories = [
            { name: 'IT' },
            { name: 'Marketing' },
            { name: 'Sales' },
            { name: 'Operations' },
            { name: 'Other' },
        ];

        this.statuses = [
            { name: 'active' },
            { name: 'inactive' },
        ];

        this.initModalForm();
    }

    initModalForm() {
        const jobAd = this.data.jobAd;
        this.modalForm = this.fb.group({
            'title': [jobAd? jobAd.title: '', [Validators.required, Validators.maxLength(256), Validators.minLength(4)]],
            'desc': [jobAd? jobAd.desc: '', [Validators.required, Validators.maxLength(16384), Validators.minLength(4)],],
            'category': [jobAd? jobAd.category: '', [Validators.required]],
            'status': [jobAd? jobAd.status: '', [Validators.required]],
        });

        this.data.modalActionButton === 'Preview' ? this.modalForm.disable() : false;

        this.title = this.modalForm.controls['title'];
        this.desc = this.modalForm.controls['desc'];
        this.category = this.modalForm.controls['category'];
        this.status = this.modalForm.controls['status'];

    }

    onActionClick() {
        // console.log(this.modalForm);
        this.dialogRef.close(this.modalForm);
    }

    onCancelClick() {
        this.dialogRef.close();

    }

}
