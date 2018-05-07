import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../../../user/shared';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

    @Input() public user: User = null;
    @Input() public isAdmin: boolean = false;
    @Input() public isAuthenticated: boolean = false;
    @Output() public signedOut = new EventEmitter();


    constructor() { }

    public ngOnInit(): void {
    }

    public onSignout(): void {
        this.signedOut.emit();
    }

}
