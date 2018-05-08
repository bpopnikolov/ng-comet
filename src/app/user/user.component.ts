import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterExtService } from '../shared/services/router-ext/router-ext.service';
import { SigninForm, SignupForm, UserService } from './shared';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {

    public authType: string;
    public prevRoute: string = null;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private userService: UserService,
        private routerExtService: RouterExtService,
        private snackBar: MatSnackBar,
    ) {

    }

    public ngOnInit(): void {
        this.route.url.subscribe((data) => {
            this.authType = data[data.length - 1].path;
        });
    }

    public onSignupFormSubmit(form: SignupForm): void {
        this.userService.signup(form).subscribe(
            (res) => {
                this.snackBar.open('Welcome to Comet!', '', { duration: 2500, panelClass: 'success-snackbar' });
                this.router.navigate(['/']);
            },
            (res) => {
                this.snackBar.open(res.error, '', { duration: 2500, panelClass: 'error-snackbar' });
            });
    }

    public onSigninFormSubmit(form: SigninForm): void {
        this.userService.signin(form).subscribe(
            (res: any) => {
                if (this.prevRoute && this.prevRoute !== '/signin') {
                    this.router.navigateByUrl(this.prevRoute);
                    return;
                }
                this.snackBar.open('Welcome to Comet!', '', { duration: 2500, panelClass: 'success-snackbar' });
                this.router.navigate(['/home']);
            },
            (res) => {
                this.snackBar.open(res.error, '', { duration: 2500, panelClass: 'error-snackbar' });
            });
    }
}
