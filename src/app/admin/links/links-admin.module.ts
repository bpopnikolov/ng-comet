import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from '../../app-material';
import { ComponentsModule } from '../../shared/components';
import { LinksAdminModalComponent } from './links-admin-modal/links-admin-modal.component';
import { LinksAdminRoutingModule } from './links-admin-routing.module';
import { LinksAdminComponent } from './links-admin.component';

@NgModule({
    imports: [
        CommonModule,
        LinksAdminRoutingModule,
        ReactiveFormsModule,
        ComponentsModule,
        FlexLayoutModule,
        AppMaterialModule,
    ],
    entryComponents: [LinksAdminModalComponent],
    declarations: [LinksAdminComponent, LinksAdminModalComponent]
})
export class LinksAdminModule { }
