import { Component, OnInit } from '@angular/core';
import { ActionLinks } from '../shared/services/link/link.model';
import { ActivatedRoute } from '@angular/router';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    actionLinks: ActionLinks[] = [];

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.data.subscribe(
            (data: { links: ActionLinks[] }) => {
                // console.log(data);
                this.actionLinks = data.links.filter((link) => link.type === 'action')
            });
    }
}
