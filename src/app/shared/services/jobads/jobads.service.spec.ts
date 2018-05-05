import { TestBed, inject } from '@angular/core/testing';

import { JobadsService } from './jobads.service';

describe('JobadsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JobadsService]
    });
  });

  it('should be created', inject([JobadsService], (service: JobadsService) => {
    expect(service).toBeTruthy();
  }));
});
