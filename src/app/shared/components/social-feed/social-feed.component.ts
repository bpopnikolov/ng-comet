import { Component, OnInit } from '@angular/core';
import { FacebookService, LoginResponse, LoginOptions } from 'ngx-facebook';

@Component({
    selector: 'app-social-feed',
    templateUrl: './social-feed.component.html',
    styleUrls: ['./social-feed.component.scss']
})
export class SocialFeedComponent implements OnInit {

    constructor(private fb: FacebookService) {
        fb.init({
            appId: `724057947942782`,
            version: 'v2.12'
        });
    }

    ngOnInit() {

    }

}
