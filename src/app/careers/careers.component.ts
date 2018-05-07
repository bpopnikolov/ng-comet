import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material';
import { Subscription } from 'rxjs/Subscription';
import { Category } from '../shared/models/category.model';
import { JobAd } from '../shared/models/jobad.model';
import { CategoryService } from '../shared/services/category/category.service';
import { JobadsService } from '../shared/services/jobads/jobads.service';
import { SearchForm } from './shared/search-form.model';

@Component({
    selector: 'app-careers',
    templateUrl: './careers.component.html',
    styleUrls: ['./careers.component.scss'],
})
export class CareersComponent implements OnInit {
    public categories: Category[];
    public allListings: JobAd[];
    public allJobs: JobAd[];
    public listings: JobAd[];
    public length: number;
    public pageIndex: number;
    public start: number = 0;
    public end: number = 10;

    public subscriptions: Subscription[] = [];

    constructor(
        private jobadsService: JobadsService,
        private categoryService: CategoryService,
    ) { }

    public ngOnInit(): void {
        this.categoryService.getCategories().subscribe((categories) => {
            this.categories = categories;
        });

        this.jobadsService.getJobAds().subscribe((data) => {
            this.allJobs = data.filter((jobAd) => {
                return jobAd.status === 'active';
            });
            this.length = data.length;
            this.allListings = this.allJobs;
            this.listings = this.allJobs.slice(this.start, this.end);
        });


        // new logic

    }

    public onSearchFormSubmit(form: SearchForm): void {
        this.listings = this.search(form, this.allJobs);
        this.length = this.listings.length;
        this.pageIndex = 0;
    }

    public onSearchFormReset(form: SearchForm): void {
        this.listings = this.allJobs.slice(this.start, this.end);
        this.length = this.allJobs.length;
        this.pageIndex = 0;
    }

    public onPageChange(event: PageEvent): void {
        const start = event.pageIndex * event.pageSize;
        const end = (event.pageIndex + 1) * event.pageSize;
        this.listings = this.allListings.slice(start, end);
        this.pageIndex = event.pageIndex;
    }
    public search(form: SearchForm, list: JobAd[]): JobAd[] {

        let filteredList = [...list];

        if (form.search) {
            filteredList = filteredList.filter((listing) =>
                listing.title.toLocaleLowerCase().includes(form.search.toLocaleLowerCase().trim()) ||
                listing.desc.toLocaleLowerCase().includes(form.search.toLocaleLowerCase().trim()));
        }
        if (form.category) {
            filteredList = filteredList.filter((listing: JobAd) => listing.category.name === form.category);
        }

        if (form.date) {
            form.date = form.date.setHours(0, 0, 0, 0);
            filteredList = filteredList
                .map((listing) => {
                    listing.createdAt = new Date(listing.createdAt).setHours(0, 0, 0, 0);
                    return listing;
                })
                .filter((listing) => listing.createdAt >= form.date);
        }

        return filteredList;
    }
}
