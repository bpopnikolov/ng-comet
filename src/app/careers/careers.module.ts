import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppMaterialModule } from '../app-material/app-material.module';
import { CareerService } from '../shared/services/career/career.service';
import { CareersRoutingModule } from './careers-routing.module';
import { CareersComponent } from './careers.component';
import { JobsListComponent } from './jobs-list/jobs-list.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { SearchService } from './shared/search.service';
import { MatPaginatorIntl } from '@angular/material';
import { JobViewComponent } from './job-view/job-view.component';

@NgModule({
  imports: [
    CommonModule,
    CareersRoutingModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    NgxPaginationModule,
  ],
  declarations: [CareersComponent, SearchBoxComponent, JobsListComponent, JobViewComponent],
  providers: [CareerService, SearchService],
})
export class CareersModule { }
