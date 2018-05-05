import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FacebookModule } from 'ngx-facebook';
import { AppMaterialModule } from '../../app-material';
import { BackgroundImageDirective } from '../directives/background-image.directive';
import { Parallax } from '../directives/parallax.directive';
import { TruncatePipe } from '../pipes/truncate.pipe';
import { ConfirmActionModalComponent } from './confirm-action-modal/confirm-action-modal.component';
import { FooterComponent } from './footer/footer.component';
import { HeroImageComponent } from './hero-image/hero-image.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SocialFeedComponent } from './social-feed/social-feed.component';
import { TableWithSortingComponent } from './table-with-sorting/table-with-sorting.component';
import { TextSectionComponent } from './text-section/text-section.component';

export const COMPONENTS = [
    NavigationComponent,
    HeroImageComponent,
    BackgroundImageDirective,
    Parallax,
    TruncatePipe,
    SocialFeedComponent,
    TextSectionComponent,
    FooterComponent,
    TableWithSortingComponent,
    PageNotFoundComponent,
    ConfirmActionModalComponent,
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
    exports: COMPONENTS,
})
export class ComponentsModule { }
