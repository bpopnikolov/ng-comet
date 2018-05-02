import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormErrorStateMatcher, ValidationService, UtilityService } from '../../../shared/utility';

@Component({
  selector: 'app-contacts-admin-modal',
  templateUrl: './contacts-admin-modal.component.html',
  styleUrls: ['./contacts-admin-modal.component.scss']
})
export class ContactsAdminModalComponent implements OnInit {

    name: AbstractControl;
    value: AbstractControl;
    isPrimary: AbstractControl;
    modalTitle: string;
    modalActionButton: string;
    modalForm: FormGroup;


    constructor(
        public dialogRef: MatDialogRef<ContactsAdminModalComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private fb: FormBuilder,
        private fm: FormErrorStateMatcher,
        private validationService: ValidationService,
        private utilityService: UtilityService
    ) { }

    ngOnInit() {
        this.modalTitle = this.data.modalTitle;
        this.modalActionButton = this.data.modalActionButton;

        this.initModalForm();
    }

    initModalForm() {
        const contact = this.data.contact;
        this.modalForm = this.fb.group({
            'name': [contact? contact.name: '', [Validators.required, Validators.maxLength(128), Validators.minLength(2)]],
            'value': [contact? contact.value: '', [Validators.required, Validators.maxLength(1024), Validators.minLength(2)],],
            'isPrimary': [contact? contact.isPrimary: false]
        });

        this.data.modalActionButton === 'Preview' ? this.modalForm.disable() : false;

        this.name = this.modalForm.controls['name'];
        this.value = this.modalForm.controls['value'];
        this.isPrimary = this.modalForm.controls['isPrimary'];

    }

    onActionClick() {
        this.data.subject.next({action: this.modalActionButton, formValue: this.modalForm.value, modalData: this.data });
        // this.dialogRef.close(this.modalForm);
    }

    onCancelClick() {
        this.dialogRef.close();
    }

}
