import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { AppConfigService } from '../../../app-config.service';
import { ResponseError } from '../../models';
import { ActionLink } from './link.model';

@Injectable()
export class LinkService {

    private appApi: {
        [key: string]: string;
    };

    constructor(
        private httpClient: HttpClient,
        private configService: AppConfigService,
    ) {
        this.appApi = this.configService.get('api');
    }

    public getLinks(): Observable<ActionLink[]> {
        const headers = new HttpHeaders({
            Accept: 'application/json',
            'Content-Type': 'application/json',
        });

        return this.httpClient.get<ActionLink[]>(`${this.appApi.baseUrl}links`, {
            headers,
        });
    }

    public createLink(link: any): any {
        const headers = new HttpHeaders({
            Accept: 'application/json',
            'Content-Type': 'application/json',
        });

        const body = link;

        return this.httpClient.post(this.appApi.baseUrl + 'links', body, {
            headers,
        }).pipe(catchError((res: ResponseError) => Observable.throw(res)));
    }

    public editLink(link: ActionLink): Observable<ActionLink> {
        const headers = new HttpHeaders({
            Accept: 'application/json',
            'Content-Type': 'application/json',
        });

        const body = link;

        return this.httpClient.post<Observable<ActionLink>>(`${this.appApi.baseUrl}links/update/${link._id}`, body, {
            headers,
        }).pipe(catchError((res: ResponseError) => Observable.throw(res)));
    }

    public deleteLink(id: string): Observable<boolean> {
        const headers = new HttpHeaders({
            Accept: 'application/json',
            'Content-Type': 'application/json',
        });

        return this.httpClient.delete<Observable<boolean>>(`${this.appApi.baseUrl}links/delete/${id}`, {
            headers,
        }).pipe(catchError((res: ResponseError) => Observable.throw(res)));
    }
}
