import { Contact } from './../../../contacts/shared/contact';
import { Injectable } from '@angular/core';

@Injectable()
export class ContactService {

  contacts: Contact[] = [
    {
      name: 'Address',
      value: '10 Aleksandar Malinov boulevard, Sofia',
      isPrimary: true,
    },
        {
      name: 'email',
      value: 'contactus@cometgroup.org',
      isPrimary: false,
    },
    {
      name: 'phone',
      value: '+44 720 435 798',
      isPrimary: false,
    },
    {
      name: 'Address',
      value: '150 Botevgradsko Shose boulevard, Sofia',
      isPrimary: true,
    },
  ];

  getAll(): Contact[] {
    return this.contacts;
  }
}
