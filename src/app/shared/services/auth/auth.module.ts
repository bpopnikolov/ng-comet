import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service';
import { CanAuthGuardService } from './can-auth-guard.service';
import { RoleGuardService } from './role-guard.service';

@NgModule({
    imports: [
        CommonModule,
    ],
    providers: [
        AuthService,
        AuthGuardService,
        CanAuthGuardService,
        RoleGuardService,
    ],
})
export class AuthModule { }
