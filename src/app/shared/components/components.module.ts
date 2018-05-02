import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppMaterialModule } from '../../app-material';
import { BackgroundImageDirective } from '../directives/background-image.directive';
import { HeroImageComponent } from './hero-image/hero-image.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SocialFeedComponent } from './social-feed/social-feed.component';
import { TextSectionComponent } from './text-section/text-section.component';
import { FooterComponent } from './footer/footer.component';
import { FacebookModule } from 'ngx-facebook';
import { TableWithSortingComponent } from './table-with-sorting/table-with-sorting.component';
import { TruncatePipe } from '../pipes/truncate.pipe';


export const COMPONENTS = [
    NavigationComponent,
    HeroImageComponent,
    BackgroundImageDirective,
    TruncatePipe,
    SocialFeedComponent,
    TextSectionComponent,
    FooterComponent,
    TableWithSortingComponent,
];
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        FacebookModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        AppMaterialModule,
        RouterModule,
    ],
    declarations: COMPONENTS,
    exports: COMPONENTS
})
export class ComponentsModule { }
