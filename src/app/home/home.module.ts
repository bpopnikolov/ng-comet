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
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppMaterialModule } from '../app-material/app-material.module';
import { HomeResolver } from './shared/home-resolver.service';



@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule,
        FlexLayoutModule,
        AppMaterialModule,
        ComponentsModule
    ],
    declarations: [
        HomeComponent,
    ],
    providers: [HomeResolver]
})
export class HomeModule { }
