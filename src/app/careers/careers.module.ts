import { CommonModule, SlicePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FroalaEditorModule } from 'angular-froala-wysiwyg';
import { AppMaterialModule } from '../app-material/app-material.module';
import { CategoryService } from '../shared/services/category/category.service';
import { JobadsService } from '../shared/services/jobads/jobads.service';
import { CareersRoutingModule } from './careers-routing.module';
import { CareersComponent } from './careers.component';
import { JobApplicationModalComponent } from './job-application-modal/job-application-modal.component';
import { JobViewComponent } from './job-view/job-view.component';
import { JobsListComponent } from './jobs-list/jobs-list.component';
@NgModule({
    imports: [
        CommonModule,
        CareersRoutingModule,
        AppMaterialModule,
        FormsModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        FroalaEditorModule,
    ],
    declarations: [
        CareersComponent,
        JobsListComponent,
        JobViewComponent,
        JobApplicationModalComponent,
    ],
    entryComponents: [
        JobApplicationModalComponent,
    ],
    providers: [
        JobadsService,
        CategoryService,
        SlicePipe,
    ],
})
export class CareersModule { }
