import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { User } from '../../../user/shared';

@Injectable()
export class AuthService {

    private currentUserSubject = new BehaviorSubject<User>(null);
    private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
    private isAdminSubject = new BehaviorSubject<boolean>(false);

    public currentUser = this.currentUserSubject.asObservable().pipe(distinctUntilChanged());
    public isAuthenticated = this.isAuthenticatedSubject.asObservable();
    public isAdmin = this.isAdminSubject.asObservable().pipe(distinctUntilChanged());

    constructor(private jwtService: JwtHelperService) {
        // console.log(this.jwtService.decodeToken(this.jwtService.tokenGetter()).user);
        const token = this.jwtService.decodeToken(this.jwtService.tokenGetter());

        token ? this.currentUserSubject.next(token.user) : this.currentUserSubject.next(null);

        token ? this.isAuthenticatedSubject.next(true) : this.isAuthenticatedSubject.next(false);

        if (token) {
            token.user.role === 'admin' ? this.isAdminSubject.next(true) : this.isAdminSubject.next(false);
        }

    }

    public setAuth(token: any): void {

        localStorage.setItem('access-token', token);
        const user: User = this.jwtService.decodeToken(token).user;

        this.currentUserSubject.next(user);
        user.role === 'admin' ? this.isAdminSubject.next(true) : this.isAdminSubject.next(false);
        this.isAuthenticatedSubject.next(true);
    }

    public purgeAuth(): void {
        // Remove JWT from localstorage
        localStorage.removeItem('access-token');
        // Set current user to an empty object
        this.currentUserSubject.next(null);
        this.isAdminSubject.next(false);
        // Set auth status to false
        this.isAuthenticatedSubject.next(false);
    }

    public getCurrentUser(): User {
        return this.currentUserSubject.value;
    }

    public isLoggedIn(): boolean {
        return this.isAuthenticatedSubject.value;
    }

    public isCurrentUserAdmin(): boolean {
        return this.isAdminSubject.value;
    }
}
