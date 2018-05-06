import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';

import { AppConfigService } from '../../../app-config.service';
import { Category, ResponseError } from '../../models/';

@Injectable()
export class CategoryService {


  appApi: { [key: string]: any };

  constructor(
    private httpClient: HttpClient,
    private configService: AppConfigService,
  ) {
    this.appApi = this.configService.get('api');
  }

  public getCategories(): Observable<Category[]> {
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    });

    return this.httpClient.get<Category[]>(this.appApi.baseUrl + 'categories', {
      headers,
    }).pipe(catchError((res: ResponseError) => Observable.throw(res)));
  }


}
