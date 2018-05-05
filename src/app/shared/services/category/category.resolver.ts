import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { of } from 'rxjs/observable/of';
import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs/Rx';

import { Category } from '../../models/category.model';
import { ResponseError } from '../../models/response-error.model';
import { CategoryService } from './category.service';

@Injectable()

export class CategoryResolver implements Resolve<Category> {

    constructor(private categoryService: CategoryService) { }

    resolve(route: ActivatedRouteSnapshot) {
        return this.categoryService.getCategories().first().pipe(catchError((res: ResponseError) => Observable.throw(res)));
    }
}
