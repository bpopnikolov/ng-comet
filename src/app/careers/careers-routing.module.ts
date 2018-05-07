import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CareersComponent } from './careers.component';
import { JobViewComponent } from './job-view/job-view.component';
import { JobsListComponent } from './jobs-list/jobs-list.component';

const routes: Routes = [
    {
        path: '', component: CareersComponent, children: [
            { path: '', component: JobsListComponent },
            { path: ':id', component: JobViewComponent },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CareersRoutingModule { }
