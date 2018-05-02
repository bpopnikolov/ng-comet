import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsAdminRoutingModule } from './contacts-admin-routing.module';
import { ContactsAdminComponent } from './contacts-admin.component';
import { ContactsAdminModalComponent } from './contacts-admin-modal/contacts-admin-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../../shared/components';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppMaterialModule } from '../../app-material';

@NgModule({
  imports: [
    CommonModule,
      ContactsAdminRoutingModule,
      ReactiveFormsModule,
      ComponentsModule,
      FlexLayoutModule,
      AppMaterialModule,
    ],
  entryComponents: [ContactsAdminModalComponent],
  declarations: [ContactsAdminComponent, ContactsAdminModalComponent]
})
export class ContactsAdminModule { }
