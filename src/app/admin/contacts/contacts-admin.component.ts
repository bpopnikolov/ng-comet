import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MatSnackBar, MatTableDataSource } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import { Contact } from '../../contacts/shared';
import { ConfirmActionModalComponent } from '../../shared/components/';
import { ContactsService } from '../../shared/services/contacts';
import { ContactsAdminModalComponent } from './contacts-admin-modal/contacts-admin-modal.component';

@Component({
    selector: 'app-contacts-admin',
    templateUrl: './contacts-admin.component.html',
    styleUrls: ['./contacts-admin.component.scss'],
})
export class ContactsAdminComponent implements OnInit, OnDestroy {
    public displayedColumns = ['_id', 'name', 'value', 'isPrimary', 'email', 'phone', 'createdAt'];
    public buttonColumns = ['view', 'edit', 'delete'];
    public truncCols = new Set(['_id', 'value', 'phone', 'email']);
    public buttonDef = [
        {
            action: 'view',
            color: 'primary',
        },
        {
            action: 'edit',
            color: 'primary',
        },
        {
            action: 'delete',
            color: 'warn',
        }];
    public contacts;

    public contactsModalSubject = new Subject();
    public confirmModalSubject = new Subject();

    private subscriptions: Subscription[] = [];

    constructor(
        private contactsService: ContactsService,
        private modalService: MatDialog,
        private route: ActivatedRoute,
        private snackBar: MatSnackBar,
    ) { }

    public ngOnInit(): void {

        // this.snackBar.open('test');

        this.route.data.subscribe(
            (data: {
                contacts: Contact[];
            }) => {
                this.contacts = new MatTableDataSource(data.contacts);
            });

        const contactsModalSubscription = this.contactsModalSubject.subscribe((event: {
            action: string;
            formValue: any;
            modalData: any;
        }) => {
            if (event.action === 'Create') {
                this.onCreate(event.formValue);
            } else if (event.action === 'Edit') {
                this.onEdit(event.modalData.contact, event.formValue);
            }
        });

        const confirmModalSubscription = this.confirmModalSubject.subscribe((event: {
            actionToConfirm: string;
            modalData: any;
        }) => {
            if (event.actionToConfirm === 'Delete') {
                this.onDelete(event.modalData.contact);
            }
        });

        this.subscriptions.push(contactsModalSubscription);
        this.subscriptions.push(confirmModalSubscription);
    }

    public onAction(event: any): void {
        const contact = this.contacts.data.find((x) => x._id === event._id);

        if (event.action === 'view') {
            this.openModal(
                {
                    modalTitle: 'Preview Contact Detail',
                    modalActionButton: 'Preview',
                    contact,
                    subject: this.contactsModalSubject,
                },
                ContactsAdminModalComponent);
        }
        if (event.action === 'edit') {
            const dialogRef = this.openModal(
                {
                    modalTitle: 'Edit a Contact Detail',
                    modalActionButton: 'Edit',
                    contact,
                    subject: this.contactsModalSubject,
                },
                ContactsAdminModalComponent);
        }
        if (event.action === 'delete') {
            this.openModal(
                {
                    modalMsg: 'Are you sure?',
                    actionToConfirm: 'Delete',
                    subject: this.confirmModalSubject,
                    contact,
                },
                ConfirmActionModalComponent);
        }
    }

    public openModal(data: any, modalComponent: any): MatDialogRef<any> {
        const dialogRef = this.modalService.open(modalComponent, {
            minWidth: '300px',
            width: '25%',
            data,
        });

        return dialogRef;
    }

    public onOpenCreate(): void {
        this.openModal(
            {
                modalTitle: 'Create a Contact Detail',
                modalActionButton: 'Create',
                subject: this.contactsModalSubject,
            },
            ContactsAdminModalComponent);
    }

    public onCreate(contact: any): void {
        this.contactsService.createContact(contact).subscribe(
            (data) => {
                this.contacts.data = [...this.contacts.data, data];
                this.modalService.closeAll();
            },
            (err) => {
                alert(err);
            });
    }

    public onEdit(contact: any, updatedInfo: any): void {
        // deep copy current jobAd
        const newJobAd = { ...contact };

        // mutate the new jobAd
        Object.keys(updatedInfo).forEach((key) => {
            newJobAd[key] = updatedInfo[key];
        });

        this.contactsService.editContact(newJobAd).subscribe(
            (data) => {
                // mutate old jobad to match the updated one
                Object.keys(data).forEach((key) => {
                    contact[key] = data[key];
                });
                this.modalService.closeAll();
            },
            (err) => {
                alert(err);
            });
    }

    public onDelete(contact: Contact): any {
        this.contactsService.deleteContact(contact._id).subscribe((res) => {
            this.contacts.data = this.contacts.data.filter((x) => x._id !== contact._id);
            this.modalService.closeAll();
        });
    }

    public ngOnDestroy(): void {
        // Called once, before the instance is destroyed.
        // Add 'implements OnDestroy' to the class.
        this.subscriptions.forEach((sub) => sub.unsubscribe());
    }

}
