import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConfigService } from '../../../app-config.service';
import { JobAd, ResponseError } from '../../models';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class JobadsService {


    appApi: { [key: string]: any };

    constructor(
        private httpClient: HttpClient,
        private configService: AppConfigService
    ) {
        this.appApi = this.configService.get('api');
    }

    getJobAds(): Observable<JobAd[]> {
        const headers = new HttpHeaders({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        });

        return this.httpClient.get<JobAd[]>(this.appApi.baseUrl + 'jobads', {
            headers
        }).pipe(catchError((res: ResponseError) => Observable.throw(res)));
    }

    createJobAd(jobAd) {
        const headers = new HttpHeaders({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        });

        const body = jobAd;

        return this.httpClient.post<JobAd>(this.appApi.baseUrl + 'jobads', body, {
            headers
        }).pipe(catchError((res: ResponseError) => Observable.throw(res)));;
    }

    editJobAd(jobAd) {
        const headers = new HttpHeaders({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        });

        const body = jobAd;

        return this.httpClient.post(this.appApi.baseUrl + 'jobads/update/' + `${jobAd._id}`, body, {
            headers
        }).pipe(catchError((res: ResponseError) => Observable.throw(res)));;
    }

    deleteJobAd(id: string) {
        const headers = new HttpHeaders({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        });

        return this.httpClient.delete(this.appApi.baseUrl + 'jobads/delete/' + id, {
            headers
        }).pipe(catchError((res: ResponseError) => Observable.throw(res)));;
    }
}
