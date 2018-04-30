import { Contact } from './../shared/contact';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';


@Component({
    selector: 'app-contacts-list',
    templateUrl: './contacts-list.component.html',
    styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit {

    @Input()
    contacts: Contact[];
    @Output() contactSelected = new EventEmitter<Contact>();

    selectedContact: number = null;
    constructor() { }

    ngOnInit() {
    }

    onContactSelected(contact, index) {
        this.selectedContact = index;
        this.contactSelected.emit(contact);
    }
}
