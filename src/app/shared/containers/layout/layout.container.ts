import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { User } from '../../../user/shared';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.container.html',
  styleUrls: ['./layout.container.scss']
})
export class LayoutContainer implements OnInit {

    user: User = null;
    isAuthenticated: boolean = false;
    isAdmin: boolean = false;

  constructor(private authService: AuthService) { }

    ngOnInit() {
        this.authService.isAuthenticated.subscribe((data) => {
            console.log(data, 'login state change');
            this.isAuthenticated = data;
            this.isAdmin = this.authService.isCurrentUserAdmin();
            this.user = this.authService.getCurrentUser();
            console.log(this.user);
            console.log(this.isAuthenticated);
      })
    }

    onSignout() {
        this.authService.purgeAuth();
    }

}
