import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class JobApplicationsService {

    deleteApplication(arg0: any): any {
        throw new Error("Method not implemented.");
    }
    constructor(private httpClient: HttpClient) { }

    public getJobApplications(): any {
        throw new Error('Method not implemented.');
    }

}
