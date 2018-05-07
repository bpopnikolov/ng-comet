import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MatSnackBar, MatTableDataSource } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import { ConfirmActionModalComponent } from '../../shared/components';
import { ActionLink, LinkService } from '../../shared/services/link';
import { LinksAdminModalComponent } from './links-admin-modal';

@Component({
    selector: 'app-links-admin',
    templateUrl: './links-admin.component.html',
    styleUrls: ['./links-admin.component.scss'],
})

export class LinksAdminComponent implements OnInit, OnDestroy {

    public displayedColumns = ['_id', 'name', 'target', 'icon', 'type', 'createdAt'];
    public buttonColumns = ['view', 'edit', 'delete'];
    public truncCols = new Set(['_id', 'target', 'icon']);
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
        }];

    public links;

    public linksModalSubject = new Subject();
    public confirmModalSubject = new Subject();
    public subscriptions: Subscription[] = [];

    constructor(
        private linksService: LinkService,
        private modalService: MatDialog,
        private route: ActivatedRoute,
        private snackBar: MatSnackBar,
    ) { }

    public ngOnInit(): void {
        this.route.data.subscribe(
            (data: {
                links: ActionLink[];
            }) => {
                console.log(data.links);
                this.links = new MatTableDataSource(data.links);
            });

        const linksModalSubscription = this.linksModalSubject.subscribe((event: {
            action: string;
            formValue: any;
            modalData: any;
        }) => {
            if (event.action === 'Create') {
                this.onCreate(event.formValue);
            } else if (event.action === 'Edit') {
                this.onEdit(event.modalData.link, event.formValue);
            }
        });

        const confirmModalSubscription = this.confirmModalSubject.subscribe((event: {
            actionToConfirm: string;
            modalData: any;
        }) => {
            if (event.actionToConfirm === 'Delete') {
                this.onDelete(event.modalData.link);
            }
        });

        this.subscriptions.push(linksModalSubscription);
        this.subscriptions.push(confirmModalSubscription);
    }

    public onAction(event: any): void {
        const link = this.links.data.find((x) => x._id === event.id);

        if (event.action === 'view') {
            this.openModal(
                {
                    modalTitle: 'Preview Link Details',
                    modalActionButton: 'Preview',
                    link,
                    subject: this.linksModalSubject,
                },
                LinksAdminModalComponent);
        }
        if (event.action === 'edit') {
            this.openModal(
                {
                    modalTitle: 'Edit a Link Details',
                    modalActionButton: 'Edit',
                    link,
                    subject: this.linksModalSubject,
                },
                LinksAdminModalComponent);
        }
        if (event.action === 'delete') {
            this.openModal(
                {
                    modalMsg: 'Are you sure?',
                    actionToConfirm: 'Delete',
                    subject: this.confirmModalSubject,
                    link,
                },
                ConfirmActionModalComponent);
        }
    }

    public openModal(data: any, modalComponent: any): MatDialogRef<any> {
        const dialogRef = this.modalService.open(modalComponent, {
            minWidth: '300px',
            width: '25%',
            data,
        });

        return dialogRef;
    }

    public onOpenCreate(): void {
        this.openModal(
            {
                modalTitle: 'Create a Link',
                modalActionButton: 'Create',
                subject: this.linksModalSubject,
            },
            LinksAdminModalComponent);
    }

    public onCreate(link: any): void {
        this.linksService.createLink(link).subscribe(
            (data) => {
                this.links.data = [...this.links.data, data];
                this.modalService.closeAll();
                this.snackBar.open('Created', '', { duration: 2000, panelClass: 'success-snackbar' });
            },
            (res) => {
                console.log(res.error);
                this.snackBar.open(res.error, '', { duration: 2000, panelClass: 'error-snackbar' });
            });
    }

    public onEdit(link: any, updatedInfo: any): void {
        // deep copy current jobAd
        // Object.assign({}, link);
        let newLink = { ...link };

        // mutate the new jobAd
        Object.keys(updatedInfo).forEach((key) => {
            newLink[key] = updatedInfo[key];
        });

        this.linksService.editLink(newLink).subscribe(
            (data) => {
                // mutate old jobad to match the updated one
                Object.keys(data).forEach((key) => {
                    link[key] = data[key];
                });
                this.modalService.closeAll();

            },
            (res) => {
                console.log(res.error);
            });
    }

    public onDelete(link: ActionLink): void {
        this.linksService.deleteLink(link._id).subscribe(
            (res) => {
                this.links.data = this.links.data.filter((x) => x._id !== link._id);
                this.modalService.closeAll();
            },
            (res) => {
                console.log(res.error);
            },
        );
    }

    public ngOnDestroy(): void {
        // Called once, before the instance is destroyed.
        // Add 'implements OnDestroy' to the class.
        this.subscriptions.forEach((sub) => sub.unsubscribe());
    }
}
