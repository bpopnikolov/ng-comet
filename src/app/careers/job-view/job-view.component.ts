import { SlicePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { JobAd } from '../../shared/models/jobad.model';
import { JobadsService } from '../../shared/services/jobads/jobads.service';

@Component({
  selector: 'app-job-view',
  templateUrl: './job-view.component.html',
  styleUrls: ['./job-view.component.scss'],
})
export class JobViewComponent implements OnInit {
  public listing: JobAd;
  constructor(
    private jobadsService: JobadsService,
    private route: ActivatedRoute,
    private slicePipe: SlicePipe,
  ) { }

  public ngOnInit(): void {
    this.route.params.subscribe((param: Params) => {
      this.jobadsService.getById(param.id).subscribe((data) => {
        this.listing = data;
        console.log(this.listing);
      });
    });
  }

}
