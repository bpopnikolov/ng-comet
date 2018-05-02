import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfigService } from '../../../app-config.service';
import { Contact } from './../../../contacts/shared';
import { catchError } from 'rxjs/operators';
import { ResponseError } from '../../models';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ContactsService {

    appApi: { [key: string]: any };

    constructor(
        private httpClient: HttpClient,
        private configService: AppConfigService
    ) {
        this.appApi = this.configService.get('api');
    }

    getContacts() {
        const headers = new HttpHeaders({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        });

        return this.httpClient.get<Contact[]>(this.appApi.baseUrl + 'contacts', {
            headers
        });
    }

    createContact(contact) {
        const headers = new HttpHeaders({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        });

        const body = contact;

        return this.httpClient.post<Contact>(this.appApi.baseUrl + 'contacts', body, {
            headers
        }).pipe(catchError((res: ResponseError) => Observable.throw(res)));;
    }

    editContact(contact: Contact) {
        const headers = new HttpHeaders({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        });

        const body = contact;

        return this.httpClient.post(this.appApi.baseUrl + 'contacts/update/' + `${contact._id}`, body, {
            headers
        }).pipe(catchError((res: ResponseError) => Observable.throw(res)));;
    }

    deleteContact(id: string) {
        const headers = new HttpHeaders({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        });

        return this.httpClient.delete(this.appApi.baseUrl + 'contacts/delete/' + id, {
            headers
        }).pipe(catchError((res: ResponseError) => Observable.throw(res)));;
    }

}
