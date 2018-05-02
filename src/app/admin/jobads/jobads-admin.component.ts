import { Component, OnInit } from '@angular/core';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { JobAd } from '../../shared/models';
import { JobadsService } from '../../shared/services/jobads';
import { JobadAdminModalComponent } from './jobad-admin-modal';

@Component({
    selector: 'app-jobads-admin',
    templateUrl: './jobads-admin.component.html',
    styleUrls: ['./jobads-admin.component.scss']
})
export class JobadsAdminComponent implements OnInit {

    displayedColumns = ['_id', 'title', 'createdAt',];
    buttonColumns = ['view', 'edit', 'delete'];
    buttonDef = [{
        action: 'view',
        color: 'primary'
    },
    {
        action: 'edit',
        color: 'primary'
    },
    {
        action: 'delete',
        color: 'warn'
    },
    ];
    jobAds;

    constructor(
        private jobadsService: JobadsService,
        private route: ActivatedRoute,
        public jobAdAdminModal: MatDialog
    ) {

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
        const jobAd = this.jobAds.data.find(x => x._id === event.id);

        if (event.action === 'view') {
            this.onView(jobAd);
        }
        if (event.action === 'edit') {
            this.onEdit(jobAd);
        }
        if (event.action === 'delete') {
            this.onDelete(jobAd);
        }
    }

    openModal(data) {
        const dialogRef = this.jobAdAdminModal.open(JobadAdminModalComponent, {
            minWidth: '300px',
            width: '30%',
            data: data
        });

        return dialogRef;
    }

    onCreate() {
        const dialogRef = this.openModal({
            modalTitle: 'Create a JobAd',
            modalActionButton: 'Create'
        });

        dialogRef.afterClosed().subscribe((form) => {
            if (form) {
                const jobAd = form.value;
                console.log(jobAd);
                this.jobadsService.createJobAd(jobAd).subscribe((data) => {
                    this.jobAds.data = [...this.jobAds.data, data];
                }, (err) => {
                    alert(err);
                });
            }
        });
    }

    onView(jobAd) {
        const dialogRef = this.openModal({
            modalTitle: 'Preview JobAd',
            modalActionButton: 'Preview',
            jobAd: jobAd
        });

        dialogRef.afterClosed().subscribe((result) => {
            console.log(result);
        });
    }

    onEdit(jobAd) {
        const dialogRef = this.openModal({
            modalTitle: 'Edit a JobAd',
            modalActionButton: 'Edit',
            jobAd: jobAd
        });

        dialogRef.afterClosed().subscribe((form) => {
            if (form) {
                const updatedInfo = form.value;

                // deep copy current jobAd
                const newJobAd = Object.assign({}, jobAd);

                // mutate the new jobAd
                Object.keys(updatedInfo).forEach((key) => {
                    newJobAd[key] = updatedInfo[key];
                });

                this.jobadsService.editJobAd(newJobAd).subscribe((data) => {
                    // mutate old jobad to match the updated one
                    Object.keys(data).forEach((key) => {
                        jobAd[key] = data[key];
                    });
                }, (err) => {
                    alert(err);
                });
            }

        });
    }

    onDelete(jobAd) {
        this.jobadsService.deleteJobAd(jobAd._id).subscribe((res) => {
            this.jobAds.data = this.jobAds.data.filter(x => x._id !== jobAd._id);
        });
    }

}
