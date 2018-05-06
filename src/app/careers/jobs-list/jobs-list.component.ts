import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PageEvent } from '@angular/material';
import { JobAd } from '../../shared/models/jobad.model';

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.scss'],
})
export class JobsListComponent {
  @Input() public pageIndex: number;
  @Input() public listings: JobAd[];
  @Input() public length: number;
  @Output() public pageChange: EventEmitter<PageEvent> = new EventEmitter<PageEvent>();

  public pageSize: number = 10;
  public pageSizeOptions;

  public filteredListings: JobAd[];
  public onChangePage(event: PageEvent): void {
    this.pageSize = event.pageSize;
    const start = event.pageIndex * this.pageSize;
    const end = (event.pageIndex + 1) * this.pageSize;
    this.pageChange.emit(event);
  }

}
