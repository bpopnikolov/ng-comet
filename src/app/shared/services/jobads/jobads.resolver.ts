import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/Rx';
import { JobadsService } from '.';
import { ResponseError } from '../../models';
import { JobAd } from '../../models/jobad.model';

@Injectable()
export class JobAdsResolver implements Resolve<JobAd> {

    constructor(private jobadsService: JobadsService) { }

    public resolve(route: ActivatedRouteSnapshot): Observable<any> {
        return this.jobadsService.getJobAds().first().pipe(catchError((res: ResponseError) => Observable.throw(res)));
    }
}
