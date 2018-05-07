import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppMaterialModule } from '../app-material/app-material.module';
import { ComponentsModule } from '../shared/components';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule,
        FlexLayoutModule,
        AppMaterialModule,
        ComponentsModule,
    ],
    declarations: [
        HomeComponent,
    ],
    providers: [],
})
export class HomeModule { }
