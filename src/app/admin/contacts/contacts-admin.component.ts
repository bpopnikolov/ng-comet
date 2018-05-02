import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../../shared/services/contacts';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { ContactsAdminModalComponent } from './contacts-admin-modal/contacts-admin-modal.component';
import { Contact } from '../../contacts/shared';

@Component({
    selector: 'app-contacts-admin',
    templateUrl: './contacts-admin.component.html',
    styleUrls: ['./contacts-admin.component.scss']
})
export class ContactsAdminComponent implements OnInit {


    displayedColumns = ['_id', 'name', 'value', 'email', 'phone', 'createdAt',];
    buttonColumns = ['edit', 'delete'];
    buttonDef = [
        {
            action: 'edit',
            color: 'primary'
        },
        {
            action: 'delete',
            color: 'warn'
        },
    ];
    contacts;

    constructor(
        private contactService: ContactsService,
        private contactsAdminModal: MatDialog,
        private route: ActivatedRoute,
    ) { }

    ngOnInit() {
        this.route.data.subscribe(
            (data: {
                contacts: Contact[]
            }) => {
                console.log(data.contacts);
                this.contacts = new MatTableDataSource(data.contacts);
            });

    }

    onAction(event) {
        // const contact = this.contacts.data.find(x => x._id === event.id);

        if (event.action === 'edit') {
            // this.onEdit(contact);
        }
        if (event.action === 'delete') {
            // this.onDelete(contact);
        }
    }


    openModal(data) {
        const dialogRef = this.contactsAdminModal.open(ContactsAdminModalComponent, {
            minWidth: '300px',
            width: '30%',
            data: data
        });

        return dialogRef;
    }

    onCreate() {
        const dialogRef = this.openModal({
            modalTitle: 'Create a Contact Detail',
            modalActionButton: 'Create'
        });

        dialogRef.afterClosed().subscribe((form) => {
            if (form) {
                const contact = form.value;
                console.log(contact);
                this.contactService.createContact(contact).subscribe((data) => {
                    this.contacts.data = [...this.contacts.data, data];
                }, (err) => {
                    alert(err);
                });
            }
        });
    }


    onDelete(arg0: any): any {
        throw new Error("Method not implemented.");
    }
    onEdit(arg0: any): any {
        throw new Error("Method not implemented.");
    }

}
