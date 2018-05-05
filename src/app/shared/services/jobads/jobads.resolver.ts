import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { of } from 'rxjs/observable/of';
import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs/Rx';

import { JobadsService } from '.';
import { ResponseError } from '../../models';
import { JobAd } from '../../models/jobad.model';

@Injectable()
export class JobAdsResolver implements Resolve<JobAd> {

    constructor(private jobadsService: JobadsService) { }

    resolve(route: ActivatedRouteSnapshot) {
        return this.jobadsService.getJobAds().first().pipe(catchError((res: ResponseError) => Observable.throw(res)));
    }
}
