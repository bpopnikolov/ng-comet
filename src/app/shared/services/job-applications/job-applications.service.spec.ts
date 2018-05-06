import { TestBed, inject } from '@angular/core/testing';

import { JobApplicationsService } from './job-applications.service';

describe('JobApplicationsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JobApplicationsService]
    });
  });

  it('should be created', inject([JobApplicationsService], (service: JobApplicationsService) => {
    expect(service).toBeTruthy();
  }));
});
