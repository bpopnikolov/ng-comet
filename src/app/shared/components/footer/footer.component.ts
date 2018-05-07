import { Component, Input, OnInit } from '@angular/core';
import { ActionLink } from '../../services/link/link.model';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

    @Input() public socialLinks: ActionLink[] = [];

    constructor() { }

    ngOnInit() {
    }

}
