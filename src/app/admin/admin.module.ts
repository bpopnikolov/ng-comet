import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppMaterialModule } from '../app-material/app-material.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';

@NgModule({
    imports: [
        CommonModule,
        AdminRoutingModule,
        FlexLayoutModule,
        AppMaterialModule,
    ],
    declarations: [AdminComponent],
})
export class AdminModule { }
