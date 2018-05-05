import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobApplicationsComponent } from './job-applications.component';

const routes: Routes = [{
    path: '', component: JobApplicationsComponent, children: [],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class JobApplicationsAdminRoutingModule { }
