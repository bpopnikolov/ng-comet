import { Component, OnInit } from '@angular/core';
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
                this.router.navigate(['/']);
            },
            (res) => {
                console.log(res);
            });
    }

    public onSigninFormSubmit(form: SigninForm): void {
        this.userService.signin(form).subscribe(
            (res: any) => {
                if (this.prevRoute !== '/signin') {
                    this.router.navigateByUrl(this.prevRoute);
                    return;
                }
                this.router.navigate(['/home']);
            },
            (res) => {
                console.log(res);
            });
    }
}
