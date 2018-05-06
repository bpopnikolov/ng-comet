import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { AppConfigService } from '../../../app-config.service';
import { ResponseError } from '../../models';
import { Contact } from './../../../contacts/shared';

@Injectable()
export class ContactsService {

    private appApi: { [key: string]: any };

    constructor(
        private httpClient: HttpClient,
        private configService: AppConfigService,
    ) {
        this.appApi = this.configService.get('api');
    }

    public getContacts(): Observable<Contact[]> {
        const headers = new HttpHeaders({
            Accept: 'application/json',
            'Content-Type': 'application/json',
        });

        return this.httpClient.get<Contact[]>(`${this.appApi.baseUrl}contacts`, {
            headers,
        });
    }

    public createContact(contact: any): Observable<Contact> {
        const headers = new HttpHeaders({
            Accept: 'application/json',
            'Content-Type': 'application/json',
        });

        const body = contact;

        return this.httpClient.post<Contact>(`${this.appApi.baseUrl}contacts`, body, {
            headers,
        }).pipe(catchError((res: ResponseError) => Observable.throw(res)));
    }

    public editContact(contact: Contact): Observable<Contact> {
        const headers = new HttpHeaders({
            Accept: 'application/json',
            'Content-Type': 'application/json',
        });

        const body = contact;

        return this.httpClient.post(`${this.appApi.baseUrl}contacts/update/${contact._id}`, body, {
            headers,
        }).pipe(catchError((res: ResponseError) => Observable.throw(res)));
    }

    public deleteContact(id: string): Observable<boolean> {
        const headers = new HttpHeaders({
            Accept: 'application/json',
            'Content-Type': 'application/json',
        });

        return this.httpClient.delete(`${this.appApi.baseUrl}contacts/delete/${id}`, {
            headers,
        }).pipe(catchError((res: ResponseError) => Observable.throw(res)));
    }

}
