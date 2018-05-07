import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contact } from './../shared';


@Component({
    selector: 'app-contacts-list',
    templateUrl: './contacts-list.component.html',
    styleUrls: ['./contacts-list.component.scss'],
})
export class ContactsListComponent implements OnInit {

    @Input() public contacts: Contact[];
    @Output() public contactSelected = new EventEmitter<Contact>();

    @Input() public selectedContact: number = null;
    constructor() { }

    public ngOnInit(): void {
    }

    public onContactSelected(contact: Contact, index: number): void {
        this.selectedContact = index;
        this.contactSelected.emit(contact);
    }
}
