import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanAuthGuardService } from '../shared/services/auth/can-auth-guard.service';
import { UserComponent } from './user.component';

const userRoutes: Routes = [
    { path: 'signin', component: UserComponent, canActivate: [CanAuthGuardService] },
    { path: 'signup', component: UserComponent, canActivate: [CanAuthGuardService] },
];

@NgModule({
    imports: [
        RouterModule.forChild(userRoutes),
    ],
    exports: [RouterModule],
})
export class UserRoutingModule { }
