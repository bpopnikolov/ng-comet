import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormErrorStateMatcher, UtilityService, ValidationService } from '../../../shared/utility';

@Component({
        selector: 'app-links-admin-modal',
        templateUrl: './links-admin-modal.component.html',
        styleUrls: ['./links-admin-modal.component.scss']
    }

) export class LinksAdminModalComponent implements OnInit {
    name: AbstractControl;
    target: AbstractControl;
    icon: AbstractControl;
    type: AbstractControl;
    isHidden: AbstractControl;
    modalTitle: string;
    modalActionButton: string;
    modalForm: FormGroup;
    types;

    constructor(
        public dialogRef: MatDialogRef < LinksAdminModalComponent > ,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private fb: FormBuilder,
        private fm: FormErrorStateMatcher,
        private validationService: ValidationService,
        private utilityService: UtilityService
    ) {
        this.types = [
            { name: 'social' },
            { name: 'action' }
        ];
    }

    ngOnInit() {
        this.modalTitle = this.data.modalTitle;
        this.modalActionButton = this.data.modalActionButton;
        this.initModalForm();
    }

    initModalForm() {
        const link = this.data.link;
        this.modalForm = this.fb.group({
            'name': [link ? link.name : '', [Validators.required, Validators.maxLength(128), Validators.minLength(3)]],
            'target': [link ? link.target : '', [Validators.required]],
            'icon': [link ? link.icon : '', [Validators.required]],
            'type': [link ? link.type : '', [Validators.required]],
            'isHidden': [link ? link.isHidden : false]
        });

        this.data.modalActionButton === 'Preview' ? this.modalForm.disable() : false;

        this.name = this.modalForm.controls['name'];
        this.target = this.modalForm.controls['target'];
        this.icon = this.modalForm.controls['icon'];
        this.type = this.modalForm.controls['type'];
        this.isHidden = this.modalForm.controls['isHidden'];
    }

    onActionClick() {
        this.data.subject.next({
            action: this.modalActionButton,
            formValue: this.modalForm.value,
            modalData: this.data
        }); // this.dialogRef.close(this.modalForm);
    }

    onCancelClick() {
        this.dialogRef.close();
    }
}
