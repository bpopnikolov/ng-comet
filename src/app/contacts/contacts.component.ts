import { Component, OnInit } from '@angular/core';
import { GoogleMapsService } from '../google-maps';
import { ContactsService } from '../shared/services/contacts';
import { Contact } from './shared';

@Component({
    selector: 'app-contacts',
    templateUrl: './contacts.component.html',
    styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

    contacts: Contact[] = [];

    latitude: number = 0;

    longitude: number = 0;

    primaryContact: Contact = null;

    constructor(
        private contactsService: ContactsService,
        private googleMapsService: GoogleMapsService
    ) { }

    ngOnInit(): void {
        this.contactsService.getContacts().subscribe((contacts) => {
            console.log(contacts);
            this.contacts = contacts;

            this.primaryContact = this.contacts.find(contact => contact.isPrimary === true);

            this.initGoogleMap();

        });


    }

    initGoogleMap() {
        if (this.primaryContact) {
            this.googleMapsService.getGeocoding(this.primaryContact.value)
                .subscribe((coordinates) => {
                    this.latitude = coordinates.lat()
                    this.longitude = coordinates.lng()
                });
        } else if (this.contacts.length > 0) {
            this.googleMapsService.getGeocoding(this.contacts[0].value)
                .subscribe((coordinates) => {
                    this.latitude = coordinates.lat()
                    this.longitude = coordinates.lng()
                });
        }
    }

    updateMapContact(contact) {
        this.googleMapsService.getGeocoding(contact.value)
        .subscribe((coordinates) => {
            this.latitude = coordinates.lat()
            this.longitude = coordinates.lng()
        });
    }
}
