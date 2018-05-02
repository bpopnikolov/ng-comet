import { Component, OnInit } from '@angular/core';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { JobAd } from '../../shared/models';
import { JobadsService } from '../../shared/services/jobads';
import { JobadAdminModalComponent } from './jobad-admin-modal';

@Component({
    selector: 'app-jobads-admin',
    templateUrl: './jobads-admin.component.html',
    styleUrls: ['./jobads-admin.component.scss']
})
export class JobadsAdminComponent implements OnInit {

    displayedColumns = ['_id', 'title', 'createdAt', ];
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
    jobAdsModalSubject = new Subject();
    subscription: Subscription;

    constructor(
        private jobadsService: JobadsService,
        private route: ActivatedRoute,
        public modalService: MatDialog
    ) {

    }

    ngOnInit() {
        this.route.data.subscribe(
            (data: {
                jobAds: JobAd[]
            }) => {
                this.jobAds = new MatTableDataSource(data.jobAds);
            });

        this.subscription = this.jobAdsModalSubject.subscribe((event: {
            action: string,
            formValue: any,
            modalData: any
        }) => {

            if (event.action === 'Create') {
                this.onCreate(event.formValue);
            } else if (event.action === 'Edit') {
                this.onEdit(event.modalData.jobAd, event.formValue, );
            }
        });
    }

    onAction(event) {
        const jobAd = this.jobAds.data.find(x => x._id === event.id);

        if (event.action === 'view') {
            this.openModal({
                modalTitle: 'Preview JobAd',
                modalActionButton: 'Preview',
                jobAd: jobAd,
                subject: this.jobAdsModalSubject
            });
        }
        if (event.action === 'edit') {
            this.openModal({
                modalTitle: 'Edit a JobAd',
                modalActionButton: 'Edit',
                jobAd: jobAd,
                subject: this.jobAdsModalSubject
            });

        }
        if (event.action === 'delete') {
            this.onDelete(jobAd);
        }
    }

    openModal(data) {
        const dialogRef = this.modalService.open(JobadAdminModalComponent, {
            minWidth: '300px',
            width: '30%',
            data: data
        });

        return dialogRef;
    }

    onOpenCreate() {
        this.openModal({
            modalTitle: 'Create a JobAd',
            modalActionButton: 'Create',
            subject: this.jobAdsModalSubject
        });
    }

    onCreate(jobAd) {
        this.jobadsService.createJobAd(jobAd).subscribe((data) => {
            this.jobAds.data = [...this.jobAds.data, data];
            this.modalService.closeAll();
        }, (err) => {
            alert(err);
        });
    }

    onEdit(jobAd, updatedInfo) {

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
                this.modalService.closeAll();
            });
        }, (err) => {
            alert(err);
        });
    }

    onDelete(jobAd) {
        this.jobadsService.deleteJobAd(jobAd._id).subscribe((res) => {
            this.jobAds.data = this.jobAds.data.filter(x => x._id !== jobAd._id);
        });
    }

    ngOnDestroy(): void {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.subscription.unsubscribe();
    }

}
