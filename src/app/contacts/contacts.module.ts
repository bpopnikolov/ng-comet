import { AgmCoreModule } from '@agm/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppMaterialModule } from './../app-material/app-material.module';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './contacts.component';
import { GoogleMapsModule } from '../google-maps';


@NgModule({
    imports: [
        CommonModule,
        ContactsRoutingModule,
        AppMaterialModule,
        FlexLayoutModule,
        GoogleMapsModule
    ],
    declarations: [
        ContactsComponent,
        ContactsListComponent,
    ],
    providers: []
})
export class ContactsModule { }
