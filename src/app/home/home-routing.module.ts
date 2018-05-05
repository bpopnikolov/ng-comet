import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LinksResolver } from '../shared/services/link';
import { HomeComponent } from './home.component';

const homeRoutes: Routes = [{
    path: 'home',
    resolve: { links: LinksResolver },
    component: HomeComponent,
}];

@NgModule({
    imports: [
        RouterModule.forChild(homeRoutes),
    ],
    exports: [RouterModule],
})
export class HomeRoutingModule { }
