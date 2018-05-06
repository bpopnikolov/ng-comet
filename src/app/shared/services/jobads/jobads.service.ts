import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { AppConfigService } from '../../../app-config.service';
import { JobAd, ResponseError } from '../../models';

@Injectable()
export class JobadsService {

    private appApi: { [key: string]: any };

    constructor(
        private httpClient: HttpClient,
        private configService: AppConfigService,
    ) {
        this.appApi = this.configService.get('api');
    }

    public getJobAds(): Observable<JobAd[]> {
        const headers = new HttpHeaders({
            Accept: 'application/json',
            'Content-Type': 'application/json',
        });

        return this.httpClient.get<JobAd[]>(`${this.appApi.baseUrl}jobads`, {
            headers,
        }).pipe(catchError((res: ResponseError) => Observable.throw(res)));
    }

    public createJobAd(jobAd: any): Observable<JobAd> {
        const headers = new HttpHeaders({
            Accept: 'application/json',
            'Content-Type': 'application/json',
        });

        const body = jobAd;

        return this.httpClient.post<JobAd>(`${this.appApi.baseUrl}jobads`, body, {
            headers,
        }).pipe(catchError((res: ResponseError) => Observable.throw(res)));
    }

    public editJobAd(jobAd: JobAd): Observable<JobAd> {
        const headers = new HttpHeaders({
            Accept: 'application/json',
            'Content-Type': 'application/json',
        });

        const body = jobAd;

        return this.httpClient.post(`${this.appApi.baseUrl}jobads/update/${jobAd._id}`, body, {
            headers,
        }).pipe(catchError((res: ResponseError) => Observable.throw(res)));
    }

    public deleteJobAd(id: string): Observable<boolean> {
        const headers = new HttpHeaders({
            Accept: 'application/json',
            'Content-Type': 'application/json',
        });

        return this.httpClient.delete<Observable<boolean>>(`${this.appApi.baseUrl}jobads/delete/${id}`, {
            headers,
        }).pipe(catchError((res: ResponseError) => Observable.throw(res)));
    }

    public getById(id: string): Observable<JobAd> {
        const headers = new HttpHeaders({
            Accept: 'application/json',
            'Content-Type': 'application/json',
        });

        return this.httpClient.get<JobAd>(`${this.appApi.baseUrl}jobads/${id}`, {
            headers,
        }).pipe(catchError((res: ResponseError) => Observable.throw(res)));
    }
}
