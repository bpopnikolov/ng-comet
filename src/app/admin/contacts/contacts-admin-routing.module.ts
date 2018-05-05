import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsResolver } from '../../shared/services/contacts';
import { ContactsAdminComponent } from './contacts-admin.component';

const routes: Routes = [{
    path: '', component: ContactsAdminComponent, resolve: {contacts: ContactsResolver}, children: [

    ],
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ContactsAdminRoutingModule { }
