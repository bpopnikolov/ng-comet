import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { User } from '../../../user/shared';
import { ActionLinks } from '../../services/link';
import { LinkService } from '../../services/link/link.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.container.html',
  styleUrls: ['./layout.container.scss']
})
export class LayoutContainer implements OnInit {

    user: User = null;
    isAuthenticated: boolean = false;
    isAdmin: boolean = false;
    socialLinks: ActionLinks[] = [];

  constructor(private authService: AuthService, private linkService: LinkService ) { }

    ngOnInit() {
        this.authService.isAuthenticated.subscribe((data) => {
            console.log(data, 'is logged in');
            this.isAuthenticated = data;
            this.isAdmin = this.authService.isCurrentUserAdmin();
            console.log(this.isAdmin);
            this.user = this.authService.getCurrentUser();
            console.log(this.user);
        });
        this.getFooterLinks();
    }

    getFooterLinks() {
        this.linkService.getLinks().subscribe((links) => {
            this.socialLinks = links.filter((link) => link.type === 'social');
            console.log(this.socialLinks);
        });
    }

    onSignout() {
        this.authService.purgeAuth();
    }

}
