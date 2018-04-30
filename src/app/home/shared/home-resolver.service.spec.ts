import { TestBed, inject } from '@angular/core/testing';

import { HomeResolver } from './home-resolver.service';

describe('HomeResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HomeResolver]
    });
  });

  it('should be created', inject([HomeResolver], (service: HomeResolver) => {
    expect(service).toBeTruthy();
  }));
});
