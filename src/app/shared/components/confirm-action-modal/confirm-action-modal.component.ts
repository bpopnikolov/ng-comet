import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
    selector: 'app-confirm-action-modal',
    templateUrl: './confirm-action-modal.component.html',
    styleUrls: ['./confirm-action-modal.component.scss'],
})
export class ConfirmActionModalComponent implements OnInit {

    public modalMsg: string;

    constructor(
        public dialogRef: MatDialogRef<ConfirmActionModalComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
    ) { }

    public ngOnInit(): void {
        this.modalMsg = this.data.modalMsg;
        console.log(this.data);
    }

    public onActionClick(): void {
        this.data.subject.next({
            actionToConfirm: this.data.actionToConfirm,
            modalData: this.data,
        });
    }

    public onCancelClick(): void {
        this.dialogRef.close();
    }
}
