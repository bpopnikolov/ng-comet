import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfigService } from '../../../app-config.service';
import { ActionLink } from './link.model';
import { catchError } from 'rxjs/operators';
import { ResponseError } from '../../models';
import { Observable } from 'rxjs/Observable';

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

        return this.httpClient.get<ActionLink[]>(this.appApi.baseUrl + 'links', {
            headers
        });
    }


    createLink(link): any {
        const headers = new HttpHeaders({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        });

        const body = link;

        return this.httpClient.post<ActionLink>(this.appApi.baseUrl + 'contacts', body, {
            headers
        }).pipe(catchError((res: ResponseError) => Observable.throw(res)));
    }

    editLink(link: ActionLink){
        const headers = new HttpHeaders({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        });

        const body = link;

        return this.httpClient.post<ActionLink>(this.appApi.baseUrl + 'links/update/' + `${link._id}`, body, {
            headers
        }).pipe(catchError((res: ResponseError) => Observable.throw(res)));
    }

    deleteLink(id: string) {
        const headers = new HttpHeaders({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        });

        return this.httpClient.delete(this.appApi.baseUrl + 'links/delete/' + id, {
            headers
        }).pipe(catchError((res: ResponseError) => Observable.throw(res)));
    }


}
