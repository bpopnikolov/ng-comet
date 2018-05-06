import { Component, OnInit } from '@angular/core';
import { FacebookService } from 'ngx-facebook';
import { AppConfigService } from '../../../app-config.service';

@Component({
    selector: 'app-social-feed',
    templateUrl: './social-feed.component.html',
    styleUrls: ['./social-feed.component.scss']
})
export class SocialFeedComponent implements OnInit {

    public userToken: string;
    constructor(private fb: FacebookService, private appConfigService: AppConfigService) {

        console.log('Initializing Facebook');
        this.userToken = this.appConfigService.get('facebook').token;

        fb.init({
            appId: `724057947942782`,
            version: 'v2.12',
        });
    }

    public ngOnInit(): void {
        this.getFeed();
    }

    public getFeed(): void {
        this.fb.api('/1890857230927298', 'get', { access_token: this.userToken })
            .then((res: any) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    }
}
