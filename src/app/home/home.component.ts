import { Component, OnInit } from '@angular/core';
import { ActionLink } from '../shared/services/link/link.model';
import { ActivatedRoute } from '@angular/router';
import { AppConfigService } from '../app-config.service';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    actionLinks: ActionLink[] = [];
    heroImgUrl;

    constructor(private route: ActivatedRoute, private appConfigService: AppConfigService) { }

    ngOnInit() {
        this.heroImgUrl = this.appConfigService.get('homeHero');

        this.route.data.subscribe(
            (data: { links: ActionLink[] }) => {
                // console.log(data);
                this.actionLinks = data.links.filter((link) => link.type === 'action')
            });
    }
}
