import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppMaterialModule } from '../../app-material';
import { ComponentsModule } from '../../shared/components';
import { UsersAdminRoutingModule } from './users-admin-routing.module';
import { UsersAdminComponent } from './users-admin.component';

@NgModule({
    imports: [
        CommonModule,
        UsersAdminRoutingModule,
        ComponentsModule,
        FlexLayoutModule,
        AppMaterialModule,
    ],
    declarations: [UsersAdminComponent],
})
export class UsersAdminModule { }
