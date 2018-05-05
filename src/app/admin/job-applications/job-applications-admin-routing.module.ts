import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobApplicationsResolver } from '../../shared/services/job-applications/';
import { JobApplicationsComponent } from './job-applications.component';

const routes: Routes = [{
    path: '', component: JobApplicationsComponent, resolve: { jobApplications: JobApplicationsResolver }, children: [],
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class JobApplicationsAdminRoutingModule { }
