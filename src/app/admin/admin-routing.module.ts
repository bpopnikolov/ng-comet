import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [{
    path: '', component: AdminComponent, children: [
        {path:'jobads', loadChildren: './jobads/jobads-admin.module#JobadsAdminModule'},
        {path:'users', loadChildren: './users/users-admin.module#UsersAdminModule'},
        {path:'contacts', loadChildren: './contacts/contacts-admin.module#ContactsAdminModule'},
    ],
},];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }