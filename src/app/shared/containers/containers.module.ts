import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutContainer } from './layout/layout.container';
import { ComponentsModule } from '../components';
import { FlexLayoutModule } from "@angular/flex-layout";
import { AppMaterialModule } from '../../app-material';

export const CONTAINERS = [
  LayoutContainer
];

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    FlexLayoutModule,
    AppMaterialModule,
  ],
  declarations: CONTAINERS,
  exports: CONTAINERS
})
export class ContainersModule { }
