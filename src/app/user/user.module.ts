import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserSigninComponent } from './user-signin/user-signin.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { UserRoutingModule } from './user-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from '../app-material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormErrorStateMatcher } from '../shared/utility';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    AppMaterialModule,
    UserRoutingModule
  ],
  declarations: [UserComponent, UserSigninComponent, UserSignupComponent],
  providers: [FormErrorStateMatcher]
})
export class UserModule { }
