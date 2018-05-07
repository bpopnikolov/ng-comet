import { Component, OnInit } from '@angular/core';
import { GoogleMapsService } from '../google-maps';
import { ContactsService } from '../shared/services/contacts';
import { Contact } from './shared';

@Component({
    selector: 'app-contacts',
    templateUrl: './contacts.component.html',
    styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {

    public contacts: Contact[] = [];

    public latitude: number = 0;

    public longitude: number = 0;

    public primaryContact: Contact = null;
    public selectedContact: number = 0;

    constructor(
        private contactsService: ContactsService,
        private googleMapsService: GoogleMapsService,
    ) { }

    public ngOnInit(): void {
        this.contactsService.getContacts().subscribe((contacts) => {
            this.contacts = contacts;
            this.primaryContact = this.contacts.find((contact, i) => {
                if (contact.isPrimary === true) {
                    this.selectedContact = i;
                    return true;
                }
            });

            this.initGoogleMap();

        });


    }

    public initGoogleMap(): void {
        if (this.primaryContact) {
            this.googleMapsService.getGeocoding(this.primaryContact.value)
                .subscribe((coordinates) => {
                    this.latitude = coordinates.lat();
                    this.longitude = coordinates.lng();
                });
        } else if (this.contacts.length > 0) {
            this.googleMapsService.getGeocoding(this.contacts[0].value)
                .subscribe((coordinates) => {
                    this.latitude = coordinates.lat();
                    this.longitude = coordinates.lng();
                });
        }
    }

    public updateMapContact(contact: Contact): void {
        this.googleMapsService.getGeocoding(contact.value)
            .subscribe((coordinates) => {
                this.latitude = coordinates.lat();
                this.longitude = coordinates.lng();
            });
    }
}
