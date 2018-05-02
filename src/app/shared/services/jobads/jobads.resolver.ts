import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';
import { JobAd } from '../../models/jobad.model';
import { JobadsService } from '.';
import { ResponseError } from '../../models';

@Injectable()
export class JobAdsResolver implements Resolve<JobAd> {

    constructor(private jobadsService: JobadsService) { }

    resolve(route: ActivatedRouteSnapshot) {
        return this.jobadsService.getJobAds().first().pipe(catchError((res: ResponseError) => Observable.throw(res)));
    }
}
