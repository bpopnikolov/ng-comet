
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class RoleGuardService {

    constructor(private authService: AuthService, private router: Router) { }

    public canLoad(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (this.authService.isCurrentUserAdmin()) {
            return true;
        }

        this.authService.isLoggedIn() ?
            this.router.navigate(['/home']) :
            this.router.navigate(['/signin']);
        return false;
    }
}
