import { Component, OnInit } from '@angular/core';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { Contact } from '../../contacts/shared';
import { ContactsService } from '../../shared/services/contacts';
import { ContactsAdminModalComponent } from './contacts-admin-modal/contacts-admin-modal.component';

@Component({
    selector: 'app-contacts-admin',
    templateUrl: './contacts-admin.component.html',
    styleUrls: ['./contacts-admin.component.scss']
})
export class ContactsAdminComponent implements OnInit {


    displayedColumns = ['_id', 'name', 'value', 'email', 'phone', 'createdAt', ];
    buttonColumns = ['edit', 'delete'];
    buttonDef = [{
            action: 'edit',
            color: 'primary'
        },
        {
            action: 'delete',
            color: 'warn'
        },
    ];
    contacts;

    contactsModalSubject = new Subject();
    subscription: Subscription;

    constructor(
        private contactsService: ContactsService,
        private modalService: MatDialog,
        private route: ActivatedRoute,
    ) {}

    ngOnInit() {
        this.route.data.subscribe(
            (data: {
                contacts: Contact[]
            }) => {
                this.contacts = new MatTableDataSource(data.contacts);
            });

        this.subscription = this.contactsModalSubject.subscribe((event: {
            action: string,
            formValue: any,
            modalData: any
        }) => {
            if (event.action === 'Create') {
                this.onCreate(event.formValue);
            } else if (event.action === 'Edit') {
                this.onEdit(event.modalData.contact, event.formValue);
            }
        });
    }

    onAction(event) {
        const contact = this.contacts.data.find(x => x._id === event.id);

        if (event.action === 'edit') {
            const dialogRef = this.openModal({
                modalTitle: 'Edit a Contact Detail',
                modalActionButton: 'Edit',
                contact: contact,
                subject: this.contactsModalSubject
            });
        }
        if (event.action === 'delete') {
            this.onDelete(contact);
        }
    }



    openModal(data) {
        const dialogRef = this.modalService.open(ContactsAdminModalComponent, {
            minWidth: '300px',
            width: '25%',
            data: data,
        });

        return dialogRef;
    }

    onOpenCreate() {
        this.openModal({
            modalTitle: 'Create a Contact Detail',
            modalActionButton: 'Create',
            subject: this.contactsModalSubject,
        });
    }

    onCreate(contact) {
        this.contactsService.createContact(contact).subscribe((data) => {
            this.contacts.data = [...this.contacts.data, data];
            this.modalService.closeAll();
        }, (err) => {
            alert(err);
        });
    }

    onEdit(contact, updatedInfo) {
        // deep copy current jobAd
        const newJobAd = Object.assign({}, contact);

        // mutate the new jobAd
        Object.keys(updatedInfo).forEach((key) => {
            newJobAd[key] = updatedInfo[key];
        });

        this.contactsService.editContact(newJobAd).subscribe((data) => {
            // mutate old jobad to match the updated one
            Object.keys(data).forEach((key) => {
                contact[key] = data[key];
            });
            this.modalService.closeAll();

        }, (err) => {
            alert(err);
        });
    }

    onDelete(contact: Contact) {
        this.contactsService.deleteContact(contact._id).subscribe((res) => {
            this.contacts.data = this.contacts.data.filter(x => x._id !== contact._id);
        });
    }

    ngOnDestroy(): void {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.subscription.unsubscribe();
    }

}
