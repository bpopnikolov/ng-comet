import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobadsAdminRoutingModule } from './jobads-admin-routing.module';
import { JobadsAdminComponent } from './jobads-admin.component';
import { ComponentsModule } from '../../shared/components/components.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppMaterialModule } from '../../app-material';

@NgModule({
    imports: [
        CommonModule,
        JobadsAdminRoutingModule,
        ComponentsModule,
        FlexLayoutModule,
        AppMaterialModule
    ],
    declarations: [JobadsAdminComponent],
})
export class JobadsAdminModule { }
