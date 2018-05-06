import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from '../../app-material';
import { ComponentsModule } from '../../shared/components';
import { JobApplicationsAdminRoutingModule } from './job-applications-admin-routing.module';
import { JobApplicationsComponent } from './job-applications.component';

@NgModule({
    imports: [
        CommonModule,
        JobApplicationsAdminRoutingModule,
        ReactiveFormsModule,
        ComponentsModule,
        FlexLayoutModule,
        AppMaterialModule,
    ],
    declarations: [JobApplicationsComponent],
})
export class JobApplicationsAdminModule { }
