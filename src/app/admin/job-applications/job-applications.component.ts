import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import { JobApplication } from '../../shared/models';
import { JobApplicationsService } from '../../shared/services/job-applications';

@Component({
    selector: 'app-job-applications',
    templateUrl: './job-applications.component.html',
    styleUrls: ['./job-applications.component.scss'],
})

export class JobApplicationsComponent implements OnInit {
    public displayedColumns = ['_id', 'name', 'comment', 'createdAt'];
    public buttonColumns = ['CV', 'CW'];
    public truncCols = new Set(['_id', 'comment']);
    public buttonDef = [
        {
            action: 'download_cv',
            color: 'primary',
        },
        {
            action: 'download_cw',
            color: 'primary',
        },
        {
            action: 'delete',
            color: 'warn',
        }];
    public jobApplications;

    public contactsModalSubject = new Subject();
    private subscription: Subscription;

    constructor(
        private jobApplicationsService: JobApplicationsService,
        private route: ActivatedRoute,
    ) { }

    public ngOnInit(): void {
        this.route.data.subscribe(
            (data: {
                jobApplications: JobApplication[];
            }) => {
                this.jobApplications = new MatTableDataSource( []);
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

    public ngOnDestroy(): void {
        // Called once, before the instance is destroyed.
        // Add 'implements OnDestroy' to the class.
        this.subscription.unsubscribe();
    }
}
