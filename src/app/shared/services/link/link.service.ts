import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfigService } from '../../../app-config.service';
import { ActionLinks } from './link.model';

@Injectable()
export class LinkService {

    appApi: {
        [key: string]: string
    };

    constructor(
        private httpClient: HttpClient,
        private configService: AppConfigService
    ) {
        this.appApi = this.configService.get('api');
    }

    getLinks() {
        const headers = new HttpHeaders({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        });

        return this.httpClient.get<ActionLinks[]>(this.appApi.baseUrl + 'links', {
            headers
        });
    }

}
