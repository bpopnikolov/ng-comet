import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { ResponseError } from '../shared/models';
import { SigninForm, SignupForm, UserService } from './shared';



@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

    authType: String;


    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private userService: UserService
    ) {

    }


    ngOnInit() {
        this.route.url.subscribe(data => {
            this.authType = data[data.length - 1].path;
        });
    }

    onSignupFormSubmit(form: SignupForm) {
        console.log(form);
        this.userService.signup(form).subscribe((res) => {
            this.router.navigate(['/signin']);
        }, (res) => {
            console.log(res);
        });
    }


    onSigninFormSubmit(form: SigninForm) {
        console.log(form);
        this.userService.signin(form).subscribe((res: any) => {
            console.log(res.token);
            this.router.navigate(['/']);
        }, (res) => {
            console.log(res);
        });
    }

    ngOnDestroy(): void {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
    }


}
