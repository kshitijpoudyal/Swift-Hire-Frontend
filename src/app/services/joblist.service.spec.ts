import { TestBed, inject } from '@angular/core/testing';

import { JoblistService } from './joblist.service';

describe('JoblistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JoblistService]
    });
  });

  it('should be created', inject([JoblistService], (service: JoblistService) => {
    expect(service).toBeTruthy();
  }));
});
