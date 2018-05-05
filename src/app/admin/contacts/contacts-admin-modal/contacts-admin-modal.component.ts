import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormErrorStateMatcher, UtilityService, ValidationService } from '../../../shared/utility';

@Component({
  selector: 'app-contacts-admin-modal',
  templateUrl: './contacts-admin-modal.component.html',
  styleUrls: ['./contacts-admin-modal.component.scss'],
})

export class ContactsAdminModalComponent implements OnInit {

    public name: AbstractControl;
    public value: AbstractControl;
    public isPrimary: AbstractControl;
    public modalTitle: string;
    public modalActionButton: string;
    public modalForm: FormGroup;

    constructor(
        public dialogRef: MatDialogRef<ContactsAdminModalComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private fb: FormBuilder,
        private fm: FormErrorStateMatcher,
        private validationService: ValidationService,
        private utilityService: UtilityService,
    ) { }

    public ngOnInit(): void {
        this.modalTitle = this.data.modalTitle;
        this.modalActionButton = this.data.modalActionButton;

        this.initModalForm();
    }

    public onActionClick(): void {
        this.data.subject.next({action: this.modalActionButton, formValue: this.modalForm.value, modalData: this.data });
    }

    public onCancelClick(): void {
        this.dialogRef.close();
    }

    private initModalForm(): void {
        const contact = this.data.contact;
        this.modalForm = this.fb.group({
            name: [contact ? contact.name : '', [Validators.required, Validators.maxLength(128), Validators.minLength(2)]],
            value: [contact ? contact.value : '', [Validators.required, Validators.maxLength(1024), Validators.minLength(2)]],
            isPrimary: [contact ? contact.isPrimary : false],
        });

        this.data.modalActionButton === 'Preview' ? this.modalForm.disable() : this.modalForm.enable();

        this.name = this.modalForm.controls.name;
        this.value = this.modalForm.controls.value;
        this.isPrimary = this.modalForm.controls.isPrimary;
    }

}
