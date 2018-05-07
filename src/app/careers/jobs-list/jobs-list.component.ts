import { Component, OnInit } from '@angular/core';
import { MatSelectChange, PageEvent } from '@angular/material';
import { MatDatepickerInputEvent } from '@angular/material/datepicker/typings';
import { Category } from '../../shared/models';
import { JobAd } from '../../shared/models/jobad.model';
import { CategoryService } from '../../shared/services/category/category.service';
import { JobadsService } from '../../shared/services/jobads';

@Component({
    selector: 'app-jobs-list',
    templateUrl: './jobs-list.component.html',
    styleUrls: ['./jobs-list.component.scss'],
})
export class JobsListComponent implements OnInit {

    public length: number;
    public categories: Category[];

    public currPageJobs: JobAd[];
    public allJobs: JobAd[];

    public start: number = 0;
    public end: number = 10;

    public pageSize: number = 5;
    public filteredJobs: JobAd[];
    public isFiltered: boolean = false;

    public dateFilter: string;
    public categoryFilter: string;
    public searchFilter: string;

    constructor(
        private jobadsService: JobadsService,
        private categoryService: CategoryService) { }

    public ngOnInit(): void {
        this.categoryService.getCategories().subscribe((categories) => {
            this.categories = categories;
        });

        this.jobadsService.getJobAds().subscribe((data) => {
            this.allJobs = data.filter((jobAd) => {
                return jobAd.status === 'active';
            });
            this.length = data.length;
            this.currPageJobs = this.allJobs.slice(this.start, this.pageSize);
        });
    }

    public onCategoryFilterChange(event: MatSelectChange): void {
        if (event.value) {
            this.categoryFilter = event.value;
            this.applyFilters();
            return;
        }
        this.categoryFilter = '';
        this.applyFilters();
    }

    public onDateFilterChange(event: MatDatepickerInputEvent<any>): void {
        if (event.value) {
            this.dateFilter = event.value;
            this.applyFilters();
            return;
        }
        this.dateFilter = '';
        this.applyFilters();
    }

    public onSearchFilterChange(searchWord: string): void {
        if (searchWord) {
            this.searchFilter = searchWord.toLocaleLowerCase();
            this.applyFilters();
            return;
        }
        this.searchFilter = '';
        this.applyFilters();
    }

    public applyFilters(): void {
        let filteredJobs = this.allJobs.slice();

        if (this.searchFilter) {
            filteredJobs = filteredJobs.filter((x) => {
                return x.title.toLocaleLowerCase().includes(this.searchFilter) || x.status === this.searchFilter;
            });
        }

        if (this.categoryFilter) {
            filteredJobs = filteredJobs.filter((x) => {
                return x.category.name === this.categoryFilter;
            });
        }


        if (this.dateFilter) {
            const filterDate = new Date(this.dateFilter).setHours(0, 0, 0, 0);

            filteredJobs = filteredJobs.filter((x) => {
                const jobDate = new Date(x.createdAt).setHours(0, 0, 0, 0);
                return jobDate === filterDate;
            });
        }

        this.isFiltered = true;
        this.filteredJobs = filteredJobs;
        this.length = this.filteredJobs.length;
        this.currPageJobs = this.filteredJobs.slice(this.start, this.pageSize);

    }

    public onChangePage(event: PageEvent): void {
        this.pageSize = event.pageSize;
        const start = event.pageIndex * this.pageSize;
        const end = (event.pageIndex + 1) * this.pageSize;

        this.isFiltered ?
            this.currPageJobs = this.filteredJobs.slice(start, end) :
            this.currPageJobs = this.allJobs.slice(start, end);
    }
}
