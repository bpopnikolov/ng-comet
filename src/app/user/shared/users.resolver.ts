import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';
import { User } from './user.model';
import { UserService } from './user.service';

@Injectable()
export class UsersResolver implements Resolve<User[]> {

    constructor(private userService: UserService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<any> {

        return this.userService.getUsers().first().pipe(catchError((err) => Observable.empty()));
    }
}
