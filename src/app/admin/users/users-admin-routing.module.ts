import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersAdminComponent } from './users-admin.component';
import { UsersResolver } from '../../user/shared/users.resolver';

const routes: Routes = [{
    path: '', component: UsersAdminComponent, resolve: {users: UsersResolver}, children: [

    ]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsersAdminRoutingModule { }
