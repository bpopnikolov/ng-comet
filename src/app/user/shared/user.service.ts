import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AppConfigService } from '../../app-config.service';
import { AuthService } from '../../shared/services/auth';
import { SigninForm } from './signin-form.model';
import { SignupForm } from './signup-form.model';
import { User } from './user.model';


@Injectable()
export class UserService {

    public appApi: {
        [key: string]: string,
    };

    constructor(
        private httpClient: HttpClient,
        private authService: AuthService,
        private configService: AppConfigService) {
        this.appApi = this.configService.get('api');
    }

    public signin(form: SigninForm): Observable<any> {
        const headers = new HttpHeaders({
            Accept: 'application/json',
            'Content-Type': 'application/json',
        });

        const body = form;

        return this.httpClient.post<any>(this.appApi.baseUrl + 'auth/login', body, {
            headers,
        }).map((res: any) => {
            const token = res.token;
            this.authService.setAuth(token);
            return res
        });
    }

    public signup(form: SignupForm): Observable<any> {
        const headers = new HttpHeaders({
            Accept: 'application/json',
            'Content-Type': 'application/json',
        });

        const body = form;

        return this.httpClient.post<any>(this.appApi.baseUrl + 'auth/register', body, {
            headers,
        }).map((res: any) => {
            const token = res.token;
            this.authService.setAuth(token);
            return res;
        });
    }

    public getUsers(): Observable<User[]> {
        const headers = new HttpHeaders({
            Accept: 'application/json',
            'Content-Type': 'application/json',
        });

        return this.httpClient.get<User[]>(this.appApi.baseUrl + 'users', {
            headers,
        });
    }
}
