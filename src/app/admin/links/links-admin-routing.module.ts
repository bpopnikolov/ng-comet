import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LinksAdminComponent } from './links-admin.component';
import { LinksResolver } from '../../shared/services/link/links.resolver';

const routes: Routes = [{
    path: '', component: LinksAdminComponent, resolve: {links: LinksResolver}, children: [

    ]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LinksAdminRoutingModule { }
