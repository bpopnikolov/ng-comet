import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { JobApplicationsService } from './job-applications.service';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [],
    providers: [JobApplicationsService],
})
export class JobApplicationsModule { }
