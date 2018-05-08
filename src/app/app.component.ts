import { Component, HostListener } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from './shared/services/auth/auth.service';
import { RouterExtService } from './shared/services/router-ext/router-ext.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {

    constructor(
        private routerExtService: RouterExtService,
        private jwtHelperService: JwtHelperService,
        private authService: AuthService,
    ) {
    }

    public ngOnInit(): void {
        const hasExpired = this.jwtHelperService.isTokenExpired();

        if (hasExpired) {
            this.authService.purgeAuth();
        }
    }

    @HostListener('window:beforeunload', ['$event'])
    public clearLocalStorage(event: any): void {
        // this.authService.purgeAuth();
    }
}
