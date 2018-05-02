import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobadsAdminRoutingModule } from './jobads-admin-routing.module';
import { JobadsAdminComponent } from './jobads-admin.component';
import { ComponentsModule } from '../../shared/components/components.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppMaterialModule } from '../../app-material';
import { JobadAdminModalComponent } from './jobad-admin-modal';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        JobadsAdminRoutingModule,
        ReactiveFormsModule,
        ComponentsModule,
        FlexLayoutModule,
        AppMaterialModule
    ],
    entryComponents: [JobadAdminModalComponent],
    declarations: [JobadsAdminComponent, JobadAdminModalComponent],
})
export class JobadsAdminModule { }
