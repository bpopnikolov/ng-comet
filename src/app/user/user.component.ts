import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SigninForm, SignupForm, UserService } from './shared';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {

    public authType: string;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private userService: UserService,
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
                this.router.navigate(['/signin']);
            },
            (res) => {
                console.log(res);
            });
    }

    public onSigninFormSubmit(form: SigninForm): void {
        this.userService.signin(form).subscribe(
            (res: any) => {
                console.log(res.token);
                this.router.navigate(['/']);
            },
            (res) => {
                console.log(res);
            });
    }
}
