import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { JobAd } from '../../shared/models';
import { JobadsService } from '../../shared/services/jobads/jobads.service';

@Component({
    selector: 'app-jobads-admin',
    templateUrl: './jobads-admin.component.html',
    styleUrls: ['./jobads-admin.component.scss']
})
export class JobadsAdminComponent implements OnInit {

    displayedColumns = ['_id', 'title', 'createdAt',];
    buttonColumns = ['view', 'edit', 'delete'];
    buttonDef = [
        { action: 'view' },
        { action: 'edit' },
        { action: 'delete' },
    ];
    jobAds;
    constructor(private jobadsService: JobadsService, private route: ActivatedRoute) {
        this.jobadsService.getJobAds().subscribe((data) => {

        });

    }

    ngOnInit() {
        this.route.data.subscribe(
            (data: {
                jobAds: JobAd[]
            }) => {
                this.jobAds = new MatTableDataSource(data.jobAds);
            });
    }

    onAction(event) {
        console.log(event);
        if (event.action === 'view') {
            console.log('VIEW ' + event.id);
        }
        if (event.action === 'edit') {
            console.log('EDIT ' + event.id);
        }
        if (event.action === 'delete') {
            console.log('DELETED ' + event.id);
        }
    }

    onCreate() {
        console.log('CREATING JOB AD');
    }
}
