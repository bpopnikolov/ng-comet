import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LinksAdminRoutingModule } from './links-admin-routing.module';
import { LinksAdminComponent } from './links-admin.component';
import { LinksAdminModalComponent } from './links-admin-modal/links-admin-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../../shared/components';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppMaterialModule } from '../../app-material';

@NgModule({
  imports: [
    CommonModule,
      LinksAdminRoutingModule,
      ReactiveFormsModule,
      ComponentsModule,
      FlexLayoutModule,
      AppMaterialModule,
    ],
  entryComponents: [LinksAdminModalComponent],
  declarations: [LinksAdminComponent, LinksAdminModalComponent]
})
export class LinksAdminModule { }
