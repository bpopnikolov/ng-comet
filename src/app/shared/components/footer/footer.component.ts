import { Component, OnInit, Input } from '@angular/core';
import { ActionLinks } from '../../services/link/link.model';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

    @Input() socialLinks: ActionLinks[] = [];

    constructor() { }

    ngOnInit() {
        console.log(this.socialLinks);
    }

}
