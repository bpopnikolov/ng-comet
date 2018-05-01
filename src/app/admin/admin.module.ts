import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AppMaterialModule } from '../app-material/app-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    imports: [
        CommonModule,
        AdminRoutingModule,
        FlexLayoutModule,
        AppMaterialModule
    ],
    declarations: [AdminComponent]
})
export class AdminModule { }
