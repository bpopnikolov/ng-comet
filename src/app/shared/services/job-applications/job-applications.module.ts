import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { JobApplicationsResolver } from './job-applications.resolver';
import { JobApplicationsService } from './job-applications.service';


@NgModule({
    imports: [
        CommonModule,
        HttpModule,
    ],
    declarations: [],
    providers: [JobApplicationsService, JobApplicationsResolver],
})
export class JobApplicationsModule { }
