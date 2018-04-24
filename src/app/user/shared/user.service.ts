import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfigService } from '../../app-config.service';


@Injectable()
export class UserService {

    appApi: {
        [key: string]: string
    };
    constructor(httpClient: HttpClient, configService: AppConfigService) {
        this.appApi = configService.get('api');
    }

    public login() {

    }

    public register() {

    }
}
