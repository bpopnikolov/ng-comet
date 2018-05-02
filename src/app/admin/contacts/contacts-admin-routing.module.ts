import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsAdminComponent } from './contacts-admin.component';
import { ContactsResolver } from '../../shared/services/contacts';

const routes: Routes = [{
    path: '', component: ContactsAdminComponent, resolve: {contacts: ContactsResolver}, children: [

    ]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ContactsAdminRoutingModule { }
