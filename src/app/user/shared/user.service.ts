import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfigService } from '../../app-config.service';
import { ResponseError } from '../../shared/models/response-error.model';
import { SigninForm } from './signin-form.model';
import { SignupForm } from './signup-form.model';
import { AuthService } from '../../shared/services/auth';
import { User } from './user.model';


@Injectable()
export class UserService {

    appApi: {
        [key: string]: string
    };

    constructor(
        private httpClient: HttpClient,
        private authService: AuthService,
        private configService: AppConfigService) {
        this.appApi = this.configService.get('api');
    }

    public signin(form: SigninForm) {
        const headers = new HttpHeaders({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        })

        const body = form;

        return this.httpClient.post<ResponseError>(this.appApi.baseUrl + 'auth/login', body, {
            headers
        }).map((res: any) => {
            const token = res.token;
            this.authService.setAuth(token);
            return res;
        });
    }

    public signup(form: SignupForm) {
        const headers = new HttpHeaders({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        });

        const body = form;

        return this.httpClient.post<ResponseError>(this.appApi.baseUrl + 'auth/register', body, {
            headers
        });
    }

    getUsers() {
        const headers = new HttpHeaders({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        });

        return this.httpClient.get<User[]>(this.appApi.baseUrl + 'users', {
            headers
        });
    }
}
