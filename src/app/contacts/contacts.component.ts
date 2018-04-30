import { ContactService } from '../shared/services/contact/contact.service';
import { MapService } from './shared/map.service';
import { Contact } from './shared/contact';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  @Input()
  contacts: Contact[];
  @Input()
  latitude: number;
  @Input()
  longitude: number;

  primaryContact: Contact;

  constructor(
    private contactService: ContactService,
    private mapService: MapService) {
  }

  ngOnInit(): void {
    this.contacts = this.contactService.getAll();
    this.primaryContact = this.contacts.find(contact => contact.isPrimary === true);
    if (this.primaryContact) {
      this.mapService.getGeocoding(this.primaryContact.value)
        .subscribe((coordinates) => {
          this.latitude = coordinates.lat()
          this.longitude = coordinates.lng()
        });
    } else {
      this.latitude = 42.6977;
      this.longitude = 23.3219;
    }
  }

}
