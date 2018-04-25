import { Contact } from './../shared/contact';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {

  @Input()
  contact: Contact;
  constructor() { }

  ngOnInit() {
  }

}
