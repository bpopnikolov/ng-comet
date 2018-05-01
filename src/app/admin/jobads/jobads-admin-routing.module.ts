import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobadsAdminComponent } from './jobads-admin.component';
import { JobAdsResolver } from '../../shared/services/jobads/jobads.resolver';

const routes: Routes = [{
    path: '',
    component: JobadsAdminComponent, resolve: {jobAds: JobAdsResolver},
    children: [

    ],
}, ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class JobadsAdminRoutingModule {}

