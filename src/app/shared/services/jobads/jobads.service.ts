import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConfigService } from '../../../app-config.service';
import { JobAd, ResponseError } from '../../models';

@Injectable()
export class JobadsService {


    appApi: { [key: string]: any };

    constructor(
        private httpClient: HttpClient,
        private configService: AppConfigService
    ) {
        this.appApi = this.configService.get('api');
    }

    getJobAds() {
        const headers = new HttpHeaders({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        });

        return this.httpClient.get<JobAd[]>(this.appApi.baseUrl + 'jobads', {
            headers
        });
    }

    createJobAd(jobAd) {
        const headers = new HttpHeaders({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        });

        const body = jobAd;

        return this.httpClient.post<ResponseError>(this.appApi.baseUrl + 'jobads', body, {
            headers
        });
    }

    editJobAd(jobAd) {
        const headers = new HttpHeaders({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        });

        const body = jobAd;

        return this.httpClient.post<ResponseError>(this.appApi.baseUrl + 'jobads/update/' + `${jobAd._id}`, body, {
            headers
        });
    }

    deleteJobAd(id) {
        const headers = new HttpHeaders({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        });

        return this.httpClient.delete(this.appApi.baseUrl + 'jobads/delete/' + id, {
            headers
        });
    }
}
