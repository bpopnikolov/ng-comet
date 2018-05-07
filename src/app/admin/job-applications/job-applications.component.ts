import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import * as FileSaver from 'file-saver';
import { Subject } from 'rxjs/Subject';
import { JobApplication } from '../../shared/models';
import { DownloadService } from '../../shared/services/download/download.service';
import { JobApplicationsService } from '../../shared/services/job-applications';
@Component({
    selector: 'app-job-applications',
    templateUrl: './job-applications.component.html',
    styleUrls: ['./job-applications.component.scss'],
})

export class JobApplicationsComponent implements OnInit {
    public displayedColumns = ['_id', 'firstname', 'lastname', 'comment', 'jobAd', 'createdAt'];
    public buttonColumns = ['cv', 'cl'];
    public truncCols = new Set(['_id', 'comment']);
    public buttonDef = [
        {
            action: 'download_cv',
            color: 'primary',
        },
        {
            action: 'download_cl',
            color: 'primary',
        },
        {
            action: 'delete',
            color: 'warn',
        }];
    public jobApplications;
    public filterApplicationsBy: string = '';
    public contactsModalSubject = new Subject();

    constructor(
        private jobApplicationsService: JobApplicationsService,
        private route: ActivatedRoute,
        private downloadService: DownloadService,
    ) { }

    public ngOnInit(): void {
        this.route.data.subscribe(
            (data: {
                jobApplications: JobApplication[];
            }) => {
                data.jobApplications.forEach((application) => {
                    application.jobAd = application.jobAd.title;
                });

                this.jobApplications = new MatTableDataSource(data.jobApplications);
            });
        this.filterApplicationsBy = this.route.snapshot.queryParamMap.get('filter');
    }

    public onAction(event: any): void {
        const jobApplication = this.jobApplications.data.find((x) => x._id === event._id);

        if (event.action === 'download_cv') {
            this.downloadService.downloadFile(jobApplication.cv).subscribe((data) => {
                FileSaver.saveAs(data, `${jobApplication.firstname}_cv`);
            });
        }
        if (event.action === 'download_cl') {
            this.downloadService.downloadFile(jobApplication.cl).subscribe((data) => {
                FileSaver.saveAs(data, `${jobApplication.firstname}_cl`);
            });
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
