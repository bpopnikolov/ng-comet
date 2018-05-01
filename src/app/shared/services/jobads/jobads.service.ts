import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConfigService } from '../../../app-config.service';
import { JobAd } from '../../models';

@Injectable()
export class JobadsService {


    appApi: {[key: string]: any};

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
}
