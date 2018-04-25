import { ContactService } from './shared/contact.service';
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


  constructor(private contactService: ContactService) {  
   }

  ngOnInit(): void {
    this.contacts = this.contactService.getAll();
  }

}
