import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
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
        private http: Http,
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

    public createJobApplication(application: any): Observable<JobApplication> {

        const formData = new FormData();
        console.log(application.jobAd);
        formData.append('firstname', application.firstname);
        formData.append('lastname', application.lastname);
        formData.append('comment', application.comment);
        formData.append('cv', application.cv.files[0]);
        formData.append('cl', application.cl.files[0]);
        formData.append('jobAd', application.jobAd._id);

        const body = formData;

        return this.httpClient.post(`${this.appApi.baseUrl}applications`, body)
            .pipe(catchError((res: ResponseError) => Observable.throw(res)));
    }

    public deleteJobApplication(id: string): Observable<boolean> {
        const headers = new HttpHeaders({
            Accept: 'application/json',
            'Content-Type': 'application/json',
        });

        return this.httpClient.delete<Observable<boolean>>(`${this.appApi.baseUrl}applications/delete/${id}`, {
            headers,
        }).pipe(catchError((res: ResponseError) => Observable.throw(res)));
    }

}
