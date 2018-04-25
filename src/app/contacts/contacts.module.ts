import { ContactService } from './shared/contact.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppMaterialModule } from './../app-material/app-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './contacts.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
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
  declarations: [ContactsComponent, ContactDetailsComponent, ContactMapComponent],
  providers: [ContactService, MapService]
})
export class ContactsModule { }
