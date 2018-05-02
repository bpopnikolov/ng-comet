import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';
import { JobAd } from '../../models/jobad.model';
import { ContactsService } from './contacts.service';
import { Contact } from '../../../contacts/shared';


@Injectable()
export class ContactsResolver implements Resolve<Contact[]> {

    constructor(private contactsService: ContactsService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<any> {

        return this.contactsService.getContacts().first().pipe(catchError((err) => Observable.empty()));
    }
}
