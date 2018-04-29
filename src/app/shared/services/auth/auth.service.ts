import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { User } from '../../../user/shared';
import { distinctUntilChanged } from 'rxjs/operators';

@Injectable()
export class AuthService {

    private currentUserSubject = new BehaviorSubject<User>(null);
    public currentUser = this.currentUserSubject.asObservable().pipe(distinctUntilChanged());

    private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
    public isAuthenticated = this.isAuthenticatedSubject.asObservable();

    private isAdminSubject = new BehaviorSubject<boolean>(false);
    public isAdmin = this.isAdminSubject.asObservable().pipe(distinctUntilChanged());

    constructor(private jwtService: JwtHelperService) {
        // console.log(this.jwtService.decodeToken(this.jwtService.tokenGetter()).user);
        const token = this.jwtService.decodeToken(this.jwtService.tokenGetter());
        token ? this.currentUserSubject.next(token.user) : this.currentUserSubject.next(null);
    }

    setAuth(token: any): void {

        localStorage.setItem('access-token', token);
        const user: User = this.jwtService.decodeToken(token).user;

        this.currentUserSubject.next(user);
        this.isAuthenticatedSubject.next(true);
    }

    purgeAuth(): void {
        // Remove JWT from localstorage
        localStorage.removeItem('access-token');
        // Set current user to an empty object
        this.currentUserSubject.next(null);
        // Set auth status to false
        this.isAuthenticatedSubject.next(false);
    }

    getCurrentUser(): User {
        return this.currentUserSubject.value;
    }

    isCurrentUserAdmin(): boolean {
        return this.isAdminSubject.value;
    }
}
