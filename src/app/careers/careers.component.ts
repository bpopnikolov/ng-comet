import { Component, OnInit } from '@angular/core';
import { Category } from '../shared/models/careers/category.model';
import { JobAd } from '../shared/models/careers/jobAd.model';
import { CareerService } from '../shared/services/career/career.service';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss'],
})
export class CareersComponent implements OnInit {
  public categories: Category[];
  public listings: JobAd[];
  public allJobs: JobAd[];

  constructor(private careerService: CareerService) { }

  public ngOnInit(): void {
    this.categories = this.careerService.getCategories();
    this.allJobs = this.careerService.getCareers();
    this.listings = this.allJobs;
  }

}
