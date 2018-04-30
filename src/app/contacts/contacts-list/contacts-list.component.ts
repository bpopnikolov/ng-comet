import { Contact } from './../shared/contact';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit {

  @Input()
  contacts: Contact[];
  contact: Contact;
  constructor() { }

  ngOnInit() {
  }

}
