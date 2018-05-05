import { Component, OnInit } from '@angular/core';
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
  public listings: JobAd[];
  public allJobs: JobAd[];

  constructor(
    private jobadsService: JobadsService,
  ) { }

  public ngOnInit(): void {
    // this.categoryService.getCategories().subscribe((categories) => {
    //   console.log(categories);
    //   this.categories = categories;
    // });

    this.categories = [
      {
        _id: '23411aedfsa',
        name: 'IT',
      },
      {
        _id: '23411aedfsa',
        name: 'Marketing',

      },
      {
        _id: '23411aedfsa',
        name: 'Sales',

      },
      {
        _id: '23411aedfsa',
        name: 'Operations',
      },
      {
        _id: '23411aedfsa',
        name: 'Other',
      }];

    console.log(this.categories);
    this.jobadsService.getJobAds().subscribe((jobs) => {
      this.allJobs = jobs;
      console.log(this.allJobs)
    });

    this.listings = this.allJobs;
  }

  public onSearchFormSubmit(form: SearchForm): void {
    console.log(form);
    this.listings = this.search(form, this.allJobs);
  }

  public onSearchFormReset(form: SearchForm): void {
    console.log(form);
    this.listings = this.allJobs;
  }

  public search(form: SearchForm, list: JobAd[]): JobAd[] {

    let filteredList = [...list];

    if (form.search) {
      filteredList = filteredList.filter((listing) =>
        listing.title.toLocaleLowerCase().includes(form.search.toLocaleLowerCase().trim()) ||
        listing.desc.toLocaleLowerCase().includes(form.search.toLocaleLowerCase().trim()));
    }
    if (form.category) {
      filteredList = filteredList.filter((listing) => listing.category === form.category);
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
