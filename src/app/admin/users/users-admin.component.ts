import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { User, UserService } from '../../user/shared';

@Component({
    selector: 'app-users-admin',
    templateUrl: './users-admin.component.html',
    styleUrls: ['./users-admin.component.scss'],
})
export class UsersAdminComponent implements OnInit {

    public displayedColumns = ['_id', 'email', 'role', 'createdAt', 'jobsApplied'];
    public truncCols = new Set(['_id', 'email']);

    public users;
    constructor(
        private userService: UserService,
        private route: ActivatedRoute,
    ) { }

    public ngOnInit(): void {
        this.route.data.subscribe(
            (data: {
                users: User[];
            }) => {

                data.users.forEach((user) => {
                    // console.log(user);
                    user.jobsApplied = user.jobsApplied.map((x) => {
                        // console.log(x);
                        return x ? x.jobAd.title : null;
                        // return x.JobAd.title;
                    });
                    // user.jobsApplied = user.jobsApplied.join(', ');
                });
                this.users = new MatTableDataSource(data.users);
            });

    }

}
