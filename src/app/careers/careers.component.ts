import { Component, OnInit } from '@angular/core';
import { Category } from '../shared/models/careers/category.model';
import { JobAd } from '../shared/models/careers/jobAd.model';
import { CareerService } from '../shared/services/career/career.service';
import { SearchForm } from './shared/search-form.model';
import { SearchService } from './shared/search.service';

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
    private careerService: CareerService,
    private searchService: SearchService,
  ) { }

  public ngOnInit(): void {
    this.categories = this.careerService.getCategories();
    this.allJobs = this.careerService.getCareers();
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
