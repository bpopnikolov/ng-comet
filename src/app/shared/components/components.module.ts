import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppMaterialModule } from '../../app-material';
import { BackgroundImageDirective } from '../directives/background-image.directive';
import { HeroImageComponent } from './hero-image/hero-image.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SocialPanelComponent } from './social-panel/social-panel.component';


export const COMPONENTS = [
    NavigationComponent,
    HeroImageComponent,
    SocialPanelComponent,
    BackgroundImageDirective,
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    AppMaterialModule,
    RouterModule,
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class ComponentsModule { }
