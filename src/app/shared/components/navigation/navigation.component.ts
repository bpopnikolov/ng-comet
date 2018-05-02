import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../../../user/shared';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

    @Input() user: User = null;
    @Input() isAdmin: boolean = false;
    @Input() isAuthenticated: boolean = false;
    @Output() signedOut = new EventEmitter();


    constructor() { }

    ngOnInit() {
    }

    test() {
        console.log(this.user);
    }
    onSignout() {
        console.log('object');
        this.signedOut.emit();
    }

}
