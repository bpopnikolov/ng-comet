import { ContactService } from './../shared/services/contact/contact.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppMaterialModule } from './../app-material/app-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './contacts.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { AgmCoreModule } from '@agm/core';
import { ContactMapComponent } from './contact-map/contact-map.component'
import { MapService } from './shared/map.service';

@NgModule({
  imports: [
    CommonModule,
    ContactsRoutingModule,
    AppMaterialModule,
    FlexLayoutModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBWdbXMftu9v6hVI73eFExumntT7e-x1oI',
      libraries: ['places']
    }),
  ],
  declarations: [ContactsComponent, ContactsListComponent, ContactMapComponent],
  providers: [ContactService, MapService]
})
export class ContactsModule { }
