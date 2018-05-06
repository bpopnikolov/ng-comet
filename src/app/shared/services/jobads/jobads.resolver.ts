import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { catchError } from 'rxjs/operators';
import { ResponseError } from '../../models';
import { JobAd } from '../../models/jobad.model';
import { JobadsService } from './jobads.service';

@Injectable()
export class JobAdsResolver implements Resolve<JobAd> {

    constructor(private jobadsService: JobadsService) { }

    public resolve(route: ActivatedRouteSnapshot): Observable<any> {
        return this.jobadsService.getJobAds().first().pipe(catchError((res: ResponseError) => Observable.throw(res)));
    }
}
