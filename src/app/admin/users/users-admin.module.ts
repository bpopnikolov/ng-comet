import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersAdminRoutingModule } from './users-admin-routing.module';
import { UsersAdminComponent } from './users-admin.component';
import { ComponentsModule } from '../../shared/components';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppMaterialModule } from '../../app-material';

@NgModule({
  imports: [
    CommonModule,
      UsersAdminRoutingModule,
      ComponentsModule,
      FlexLayoutModule,
      AppMaterialModule
  ],
  declarations: [UsersAdminComponent]
})
export class UsersAdminModule { }
