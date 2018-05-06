import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { LinkService } from './link.service';
import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs/Rx';
import { ActionLink } from './link.model'
import { of } from 'rxjs/observable/of';

@Injectable()
export class LinksResolver implements Resolve<ActionLink> {

    constructor(private linksService: LinkService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<any> {

        return this.linksService.getLinks().pipe(catchError((err) => Observable.empty()));
    }
}
