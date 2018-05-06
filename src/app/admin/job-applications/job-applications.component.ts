import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { JobApplication } from '../../shared/models';
import { JobApplicationsService } from '../../shared/services/job-applications';

@Component({
    selector: 'app-job-applications',
    templateUrl: './job-applications.component.html',
    styleUrls: ['./job-applications.component.scss'],
})

export class JobApplicationsComponent implements OnInit {
    public displayedColumns = ['_id', 'firstname', 'lastname', 'comment', 'createdAt'];
    public buttonColumns = ['cv', 'cl'];
    public truncCols = new Set(['_id', 'comment']);
    public buttonDef = [
        {
            action: 'Download CV',
            color: 'primary',
        },
        {
            action: 'Download CL',
            color: 'primary',
        },
        {
            action: 'delete',
            color: 'warn',
        }];
    public jobApplications;

    public contactsModalSubject = new Subject();

    constructor(
        private jobApplicationsService: JobApplicationsService,
        private route: ActivatedRoute,
    ) { }

    public ngOnInit(): void {
        this.route.data.subscribe(
            (data: {
                jobApplications: JobApplication[];
            }) => {
                console.log(data.jobApplications);
                this.jobApplications = new MatTableDataSource(data.jobApplications);
            });

    }

    public onAction(event: any): void {
        const jobApplication = this.jobApplications.data.find((x) => x._id === event.id);

        if (event.action === 'download_cv') {
            console.log('download CV');
        }
        if (event.action === 'download_cw') {
            console.log('download Cw');
        }
        if (event.action === 'delete') {
            // this.onDelete(jobApplication);
        }
    }

    // public onDelete(jobApplication: JobApplication): any {
    //     this.jobApplicationsService.deleteApplication(jobApplication._id).subscribe((res) => {
    //         this.jobApplications.data = this.jobApplications.data.filter((x) => x._id !== jobApplication._id);
    //     });
    // }

}
