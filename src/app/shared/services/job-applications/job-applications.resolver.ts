import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/Rx';
import { ResponseError } from '../../models';
import { JobApplicationsService } from './job-applications.service';

@Injectable()
export class JobAdsResolver implements Resolve<any> {

    constructor(private jobApplicationsService: JobApplicationsService) { }

    public resolve(route: ActivatedRouteSnapshot): Observable<any> {
        return this.jobApplicationsService.getJobApplications().first().pipe(catchError((res: ResponseError) => Observable.throw(res)));
    }
}
