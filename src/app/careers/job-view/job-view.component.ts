import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { JobAd } from '../../shared/models/jobad.model';
import { AuthService } from '../../shared/services/auth/auth.service';
import { JobApplicationsService } from '../../shared/services/job-applications/job-applications.service';
import { JobadsService } from '../../shared/services/jobads/jobads.service';
import { JobApplicationModalComponent } from '../job-application-modal/job-application-modal.component';

@Component({
    selector: 'app-job-view',
    templateUrl: './job-view.component.html',
    styleUrls: ['./job-view.component.scss'],
})
export class JobViewComponent implements OnInit {

    @Input() public isAuthenticated: boolean = false;
    @Input() public isAdmin: boolean = false;
    public jobAd: JobAd;
    public jobApplicationModalSubject = new Subject();

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private modalService: MatDialog,
        private jobadsService: JobadsService,
        private jobApplicationsService: JobApplicationsService,
        private authService: AuthService,
        private snackBar: MatSnackBar,
    ) { }

    public ngOnInit(): void {

        this.isAdmin = this.authService.isCurrentUserAdmin();
        this.isAuthenticated = this.authService.isLoggedIn();

        this.route.params.subscribe((param: Params) => {
            this.jobadsService.getById(param.id).subscribe((data) => {
                this.jobAd = data;
            });
        });

        this.jobApplicationModalSubject.subscribe((formData: any) => {
            formData.jobAd = this.jobAd;
            this.jobApplicationsService.createJobApplication(formData).subscribe(
                (res) => {
                    this.modalService.closeAll();
                    this.snackBar.open('Thanks for applying.', '', { duration: 2500, panelClass: 'success-snackbar' });
                },
                (res) => {
                    this.snackBar.open(res.error, '', { duration: 2500, panelClass: 'error-snackbar' });
                });
        });
    }

    public onApplyClick(): void {
        if (!this.isAuthenticated) {
            this.router.navigate(['/signin']);
            return;
        }
        this.modalService.open(JobApplicationModalComponent, {
            minWidth: '300px',
            width: '30%',
            data: {
                jobTitle: this.jobAd.title,
                subject: this.jobApplicationModalSubject,
            },
        });
    }

    public onApplicationsClick(): void {
        this.router.navigate(['admin', 'jobapps'], { queryParams: { filter: this.jobAd.title } });
    }

}
