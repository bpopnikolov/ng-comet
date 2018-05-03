import { SearchService } from './shared/search.service';
import { Component, OnInit } from '@angular/core';
import { Category } from '../shared/models/careers/category.model';
import { JobAd } from '../shared/models/careers/jobAd.model';
import { CareerService } from '../shared/services/career/career.service';
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
    this.listings = this.searchService.search(form, this.allJobs);
    console.log(this.listings);
  }

  public onSearchFormReset(form: SearchForm): void {
    console.log(form);
    this.listings = this.allJobs;
    console.log(this.listings);
  }

}
