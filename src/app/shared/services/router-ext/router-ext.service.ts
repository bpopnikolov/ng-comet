import { Injectable } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';

@Injectable()
export class RouterExtService {

    private previousUrl: string = null;
    private currentUrl: string = null;

    constructor(private router: Router) {
        this.router.events
            .filter((e) => e instanceof RoutesRecognized)
            .pairwise()
            .subscribe((event: any[]) => {
                this.previousUrl = event[0].urlAfterRedirects;
            });
    }

    public getPreviousUrl(): string {
        return this.previousUrl;
    }

}
