import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppConfigService } from '../app-config.service';
import { ActionLink } from '../shared/services/link/link.model';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

    public actionLinks: ActionLink[] = [];
    public heroImgUrl;
    public textSection: string;

    constructor(private route: ActivatedRoute, private appConfigService: AppConfigService) { }

    public ngOnInit(): void {
        this.heroImgUrl = this.appConfigService.get('homeHero');
        this.textSection = this.appConfigService.get('home').textSection;

        this.route.data.subscribe(
            (data: { links: ActionLink[] }) => {
                // console.log(data);
                this.actionLinks = data.links.filter((link) => link.type === 'action');
            });
    }
}
