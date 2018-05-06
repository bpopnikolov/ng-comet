import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { AppConfigService } from '../../../app-config.service';
import { ResponseError } from '../../models';
import { JobApplication } from '../../models/job-application.model';

@Injectable()
export class JobApplicationsService {

    private appApi: { [key: string]: any };

    constructor(
        private httpClient: HttpClient,
        private configService: AppConfigService,
    ) {
        this.appApi = this.configService.get('api');
    }

    public getJobApplications(): Observable<JobApplication[]> {
        const headers = new HttpHeaders({
            Accept: 'application/json',
            'Content-Type': 'application/json',
        });

        return this.httpClient.get<JobApplication[]>(`${this.appApi.baseUrl}applications`, {
            headers,
        }).pipe(catchError((res: ResponseError) => Observable.throw(res)));
    }

    public createJobApplication(application: JobApplication): Observable<JobApplication> {
        const headers = new HttpHeaders({
            Accept: 'application/json',
            'Content-Type': 'application/json',
        });

        const body = application;

        return this.httpClient.post<JobApplication>(`${this.appApi.baseUrl}application`, body, {
            headers,
        }).pipe(catchError((res: ResponseError) => Observable.throw(res)));
    }

    public deleteJobApplication(id: string): Observable<boolean> {
        const headers = new HttpHeaders({
            Accept: 'application/json',
            'Content-Type': 'application/json',
        });

        return this.httpClient.delete<Observable<boolean>>(`${this.appApi.baseUrl}application/delete/${id}`, {
            headers,
        }).pipe(catchError((res: ResponseError) => Observable.throw(res)));
    }

}
