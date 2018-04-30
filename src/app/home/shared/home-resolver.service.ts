import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { LinkService } from '../../shared/services/link';
import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs/Rx';
import { ActionLinks } from '../../shared/services/link';
import { of } from 'rxjs/observable/of';

@Injectable()
export class HomeResolver implements Resolve<ActionLinks> {

    constructor(private linkService: LinkService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<any> {

        return this.linkService.getLinks().pipe(catchError((err) => Observable.empty()));
    }
}
