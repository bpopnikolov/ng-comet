import {
    NgModule
} from '@angular/core';
import {
    CommonModule
} from '@angular/common';
import {
    HomeComponent
} from './home.component';
import {
    HomeRoutingModule
} from './home-routing.module';
import { ComponentsModule } from '../shared/components';



@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule,
        ComponentsModule
    ],
    declarations: [
        HomeComponent,
    ]
})
export class HomeModule { }
