import { Component, Input, OnInit } from '@angular/core';
import { JobAd } from '../../shared/models/careers/jobAd.model';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.scss'],
})
export class JobsListComponent implements OnInit {

  @Input() public listings: JobAd[];
  public length: number;
  public pageSize: number = 10;
  public pageSizeOptions;

  public filteredListings: JobAd[];

  constructor() { }

  public ngOnInit(): void {
    this.length = this.listings.length;
    // setTimeout(() => {
    this.filteredListings = this.listings.slice(0, this.pageSize);
    // }, 1000);
    // Route resolver as solution if they are still not received
  }

  public onChangePage(event: PageEvent): void {
    this.pageSize = event.pageSize;

    const start = event.pageIndex * this.pageSize;
    const end = (event.pageIndex + 1) * this.pageSize;
    this.filteredListings = this.listings.slice(start, end);
  }

}
