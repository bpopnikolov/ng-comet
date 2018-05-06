import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from '../../app-material';
import { ComponentsModule } from '../../shared/components';
import { ConfirmActionModalComponent } from '../../shared/components/confirm-action-modal/confirm-action-modal.component';
import { ContactsAdminModalComponent } from './contacts-admin-modal/contacts-admin-modal.component';
import { ContactsAdminRoutingModule } from './contacts-admin-routing.module';
import { ContactsAdminComponent } from './contacts-admin.component';

@NgModule({
    imports: [
        CommonModule,
        ContactsAdminRoutingModule,
        ReactiveFormsModule,
        ComponentsModule,
        FlexLayoutModule,
        AppMaterialModule,
    ],
    entryComponents: [ContactsAdminModalComponent, ConfirmActionModalComponent],
    declarations: [ContactsAdminComponent, ContactsAdminModalComponent],
})
export class ContactsAdminModule { }
