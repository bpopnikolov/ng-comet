import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../user/shared';
import { AuthService } from '../../services/auth/auth.service';
import { ActionLink } from '../../services/link';
import { LinkService } from '../../services/link/link.service';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.container.html',
    styleUrls: ['./layout.container.scss'],
})
export class LayoutContainer implements OnInit {

    public user: User = null;
    public isAuthenticated: boolean = false;
    public isAdmin: boolean = false;
    public socialLinks: ActionLink[] = [];

    constructor(
        private authService: AuthService,
        private linkService: LinkService,
        private router: Router) { }

    public ngOnInit(): void {
        this.authService.isAuthenticated.subscribe((data) => {
            this.isAuthenticated = data;
            this.isAdmin = this.authService.isCurrentUserAdmin();
            this.user = this.authService.getCurrentUser();
        });
        this.getFooterLinks();
    }

    public getFooterLinks(): void {
        this.linkService.getLinks().subscribe((links) => {
            this.socialLinks = links.filter((link) => link.type === 'social');
        });
    }

    public onSignout(): void {
        this.authService.purgeAuth();
        this.router.navigate(['/home']);
    }

}
