import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from '../app-material';
import { FormErrorStateMatcher } from '../shared/utility';
import { UserService } from './shared/user.service';
import { UserRoutingModule } from './user-routing.module';
import { UserSigninComponent } from './user-signin/user-signin.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { UserComponent } from './user.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        AppMaterialModule,
        UserRoutingModule
    ],
    declarations: [
        UserComponent,
        UserSigninComponent,
        UserSignupComponent
    ],
    providers: [
        UserService,
        FormErrorStateMatcher
    ]
})
export class UserModule {}
