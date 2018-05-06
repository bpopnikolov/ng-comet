import { TestBed, inject } from '@angular/core/testing';

import { CanAuthGuardService } from './can-auth-guard.service';

describe('CanAuthGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanAuthGuardService]
    });
  });

  it('should be created', inject([CanAuthGuardService], (service: CanAuthGuardService) => {
    expect(service).toBeTruthy();
  }));
});
