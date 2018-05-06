import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { AppMaterialModule } from '../../app-material';
import { ConfirmActionModalComponent } from '../../shared/components';
import { ComponentsModule } from '../../shared/components/components.module';
import { JobadAdminModalComponent } from './jobad-admin-modal';
import { JobadsAdminRoutingModule } from './jobads-admin-routing.module';
import { JobadsAdminComponent } from './jobads-admin.component';

@NgModule({
    imports: [
        CommonModule,
        JobadsAdminRoutingModule,
        ReactiveFormsModule,
        ComponentsModule,
        FlexLayoutModule,
        AppMaterialModule,
        FroalaEditorModule,
        FroalaViewModule,
    ],
    entryComponents: [JobadAdminModalComponent, ConfirmActionModalComponent],
    declarations: [JobadsAdminComponent, JobadAdminModalComponent],
})
export class JobadsAdminModule { }
