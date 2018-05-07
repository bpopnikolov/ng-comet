import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MatTableDataSource } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import { ConfirmActionModalComponent } from '../../shared/components/';
import { Category, JobAd } from '../../shared/models';
import { CategoryService } from '../../shared/services/category/category.service';
import { JobadsService } from '../../shared/services/jobads';
import { JobadAdminModalComponent } from './jobad-admin-modal';

@Component({
    selector: 'app-jobads-admin',
    templateUrl: './jobads-admin.component.html',
    styleUrls: ['./jobads-admin.component.scss'],
})

export class JobadsAdminComponent implements OnInit, OnDestroy {

    public displayedColumns = ['_id', 'title', 'createdAt'];
    public buttonColumns = ['view', 'edit', 'delete'];
    public truncCols = new Set(['_id']);
    public buttonDef = [
        {
            action: 'view',
            color: 'primary',
        },
        {
            action: 'edit',
            color: 'primary',
        },
        {
            action: 'delete',
            color: 'warn',
        },
    ];
    public jobAds;
    public jobAdsModalSubject = new Subject();
    public confirmModalSubject = new Subject();
    public subscriptions: Subscription[] = [];
    public jobCategories: Category[] = [];

    constructor(
        private jobadsService: JobadsService,
        private categoryService: CategoryService,
        private route: ActivatedRoute,
        private modalService: MatDialog,
        private router: Router,
    ) { }

    public ngOnInit(): void {

        this.categoryService.getCategories().subscribe((data) => {
            this.jobCategories = data;
        });

        this.route.data.subscribe(
            (data: {
                jobAds: JobAd[];
            }) => {
                this.jobAds = new MatTableDataSource(data.jobAds);
            });

        const jobAdsModalsubscription = this.jobAdsModalSubject.subscribe((event: {
            action: string;
            formValue: any;
            modalData: any;
        }) => {

            if (event.action === 'Create') {
                this.onCreate(event.formValue);
            } else if (event.action === 'Edit') {
                this.onEdit(event.modalData.jobAd, event.formValue);
            }
        });

        const confirmModalSubscription = this.confirmModalSubject.subscribe((event: {
            actionToConfirm: string;
            modalData: any;
        }) => {
            if (event.actionToConfirm === 'Delete') {
                this.onDelete(event.modalData.jobAd);
            }
        });

        this.subscriptions.push(jobAdsModalsubscription);
        this.subscriptions.push(confirmModalSubscription);
    }

    public onAction(event: any): void {
        const jobAd = this.jobAds.data.find((x) => x._id === event._id);

        if (event.action === 'view') {
            // this.openModal(
            // {
            //     jobAd,
            //     modalTitle: 'Preview JobAd',
            //     modalActionButton: 'Preview',
            //     jobCategories: this.jobCategories,
            //     subject: this.jobAdsModalSubject,
            // },
            // JobadAdminModalComponent);
            this.router.navigate(['careers', jobAd._id]);
        }
        if (event.action === 'edit') {
            this.openModal(
                {
                    jobAd,
                    modalTitle: 'Edit a JobAd',
                    modalActionButton: 'Edit',
                    jobCategories: this.jobCategories,
                    subject: this.jobAdsModalSubject,
                },
                JobadAdminModalComponent);

        }
        if (event.action === 'delete') {
            this.openModal(
                {
                    jobAd,
                    modalMsg: 'Are you sure?',
                    actionToConfirm: 'Delete',
                    subject: this.confirmModalSubject,
                },
                ConfirmActionModalComponent);
        }
    }

    public openModal(data: any, modalComponent: any): MatDialogRef<any> {
        const dialogRef = this.modalService.open(modalComponent, {
            minWidth: '300px',
            width: '30%',
            data,
        });

        return dialogRef;
    }

    public onOpenCreate(): void {
        this.openModal(
            {
                modalTitle: 'Create a JobAd',
                modalActionButton: 'Create',
                jobCategories: this.jobCategories,
                subject: this.jobAdsModalSubject,
            },
            JobadAdminModalComponent);
    }

    public onCreate(jobAd: any): void {
        this.jobadsService.createJobAd(jobAd).subscribe(
            (data) => {
                this.jobAds.data = [...this.jobAds.data, data];
                this.modalService.closeAll();
            },
            (err) => {
                alert(err);
            });
    }

    public onEdit(jobAd: JobAd, updatedInfo: any): void {

        // deep copy current jobAd
        const newJobAd = { ...jobAd };

        // mutate the new jobAd
        Object.keys(updatedInfo).forEach((key) => {
            newJobAd[key] = updatedInfo[key];
        });

        this.jobadsService.editJobAd(newJobAd).subscribe(
            (data) => {
                // mutate old jobad to match the updated one
                Object.keys(data).forEach((key) => {
                    jobAd[key] = data[key];
                    this.modalService.closeAll();
                });
            },
            (err) => {
                alert(err);
            });
    }

    public onDelete(jobAd: JobAd): void {
        this.jobadsService.deleteJobAd(jobAd._id).subscribe((res) => {
            this.jobAds.data = this.jobAds.data.filter((x) => x._id !== jobAd._id);
            this.modalService.closeAll();
        });
    }

    public ngOnDestroy(): void {
        // Called once, before the instance is destroyed.
        // Add 'implements OnDestroy' to the class.
        this.subscriptions.forEach((sub) => sub.unsubscribe());
    }
}
