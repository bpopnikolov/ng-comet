import { Component, OnInit } from '@angular/core';
import { UserService, User } from '../../user/shared';
import { MatTableDataSource } from '@angular/material';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-users-admin',
    templateUrl: './users-admin.component.html',
    styleUrls: ['./users-admin.component.scss']
})
export class UsersAdminComponent implements OnInit {

    displayedColumns = ['_id', 'email', 'createdAt', 'jobsApplied'];

    users;
    constructor(
        private userService: UserService,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.route.data.subscribe(
            (data: {
                users: User[]
            }) => {
                this.users = new MatTableDataSource(data.users);
            });

    }

}
