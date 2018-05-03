import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import { LinkService } from '../../shared/services/link';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { LinksAdminModalComponent } from './links-admin-modal';
import { ActionLink } from '../../shared/services/link';


@Component({
  selector: 'app-links-admin',
  templateUrl: './links-admin.component.html',
  styleUrls: ['./links-admin.component.scss']
})
export class LinksAdminComponent implements OnInit {


    displayedColumns = ['_id', 'name', 'target', 'icon', 'type', 'createdAt'];
    buttonColumns = ['edit', 'delete'];
    buttonDef = [{
        action: 'edit',
        color: 'primary'
    }, {
        action: 'delete',
        color: 'warn'
    }];
    links;

    linksModalSubject = new Subject();
    subscription: Subscription;

    constructor(
        private linksService: LinkService,
        private modalService: MatDialog,
        private route: ActivatedRoute,
    ) {}

    ngOnInit() {
        this.route.data.subscribe(
            (data: {
                links: ActionLink[]
            }) => {
                console.log(data.links);
                this.links = new MatTableDataSource(data.links);
            });

        this.subscription = this.linksModalSubject.subscribe((event: {
            action: string,
            formValue: any,
            modalData: any
        }) => {
            if (event.action === 'Create') {
                this.onCreate(event.formValue);
            } else if (event.action === 'Edit') {
                this.onEdit(event.modalData.link, event.formValue);
            }
        });
    }

    onAction(event) {
        const link = this.links.data.find(x => x._id === event.id);

        if (event.action === 'edit') {
            this.openModal({
                modalTitle: 'Edit a Link Detail',
                modalActionButton: 'Edit',
                link: link,
                subject: this.linksModalSubject
            });
        }
        if (event.action === 'delete') {
            this.onDelete(link);
        }
    }



    openModal(data) {
        const dialogRef = this.modalService.open(LinksAdminModalComponent, {
            minWidth: '300px',
            width: '25%',
            data: data,
        });

        return dialogRef;
    }

    onOpenCreate() {
        this.openModal({
            modalTitle: 'Create a Link',
            modalActionButton: 'Create',
            subject: this.linksModalSubject,
        });
    }

    onCreate(link) {
        this.linksService.createLink(link).subscribe((data) => {
            this.links.data = [...this.links.data, data];
            this.modalService.closeAll();
        }, (err) => {
            alert(err);
        });
    }

    onEdit(link, updatedInfo) {
        // deep copy current jobAd
        const newLink = Object.assign({}, link);

        // mutate the new jobAd
        Object.keys(updatedInfo).forEach((key) => {
            newLink[key] = updatedInfo[key];
        });

        this.linksService.editLink(newLink).subscribe((data) => {
            // mutate old jobad to match the updated one
            Object.keys(data).forEach((key) => {
                link[key] = data[key];
            });
            this.modalService.closeAll();

        }, (err) => {
            alert(err);
        });
    }

    onDelete(link: ActionLink) {
        this.linksService.deleteLink(link._id).subscribe((res) => {
            this.links.data = this.links.data.filter(x => x._id !== link._id);
        });
    }

    ngOnDestroy(): void {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.subscription.unsubscribe();
    }

}
