import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [{
    path: '', component: AdminComponent, children: [
        { path: 'jobads', loadChildren: './jobads/jobads-admin.module#JobadsAdminModule' },
        { path: 'jobapps', loadChildren: './job-applications/job-applications-admin.module#JobApplicationsAdminModule' },
        { path: 'users', loadChildren: './users/users-admin.module#UsersAdminModule' },
        { path: 'links', loadChildren: './links/links-admin.module#LinksAdminModule' },
        { path: 'contacts', loadChildren: './contacts/contacts-admin.module#ContactsAdminModule' },
    ],
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AdminRoutingModule { }
