import { Contact } from './../../../contacts/shared';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConfigService } from '../../../app-config.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ContactsService {

    appApi: {[key: string]: any};

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
        });
    }
}
