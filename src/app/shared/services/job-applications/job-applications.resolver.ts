import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { catchError } from 'rxjs/operators';
import { JobApplication, ResponseError } from '../../models';
import { JobApplicationsService } from './job-applications.service';

@Injectable()
export class JobApplicationsResolver implements Resolve<JobApplication> {

    constructor(private jobApplicationsService: JobApplicationsService) { }

    public resolve(route: ActivatedRouteSnapshot): Observable<any> {
        return this.jobApplicationsService.getJobApplications().first().pipe(catchError((res: ResponseError) => Observable.throw(res)));
    }
}
