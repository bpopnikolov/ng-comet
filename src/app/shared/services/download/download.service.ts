import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AppConfigService } from '../../../app-config.service';

@Injectable()
export class DownloadService {

    private appApi: {
        [key: string]: string;
    };

    constructor(
        private httpClient: HttpClient,
        private configService: AppConfigService,
    ) {
        this.appApi = this.configService.get('api');
    }

    public downloadFile(fileName: string): Observable<any> {
        console.log(fileName);
        return this.httpClient.get(`${this.appApi.baseUrl}downloads/${fileName}`, { responseType: 'blob' });
    }
}
