import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { LinksResolver } from '../shared/services/link';


const homeRoutes: Routes = [{
    path: 'home',
    resolve: { links: LinksResolver },
    component: HomeComponent
},];

@NgModule({
    imports: [
        RouterModule.forChild(homeRoutes)
    ],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
