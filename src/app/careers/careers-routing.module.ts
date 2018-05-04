import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CareersComponent } from './careers.component';
import { JobViewComponent } from './job-view/job-view.component';

const routes: Routes = [
  { path: '', component: CareersComponent },
  { path: ':id', component: JobViewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CareersRoutingModule { }
