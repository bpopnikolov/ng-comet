import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { JobApplicationsResolver } from './job-applications.resolver';
import { JobApplicationsService } from './job-applications.service';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [],
    providers: [JobApplicationsService, JobApplicationsResolver],
})
export class JobApplicationsModule { }
