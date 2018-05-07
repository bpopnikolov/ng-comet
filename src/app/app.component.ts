import { Component } from '@angular/core';
import { RouterExtService } from './shared/services/router-ext/router-ext.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    constructor(private routerExtService: RouterExtService) {

    }
}
