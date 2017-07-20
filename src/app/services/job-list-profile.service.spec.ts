import { TestBed, inject } from '@angular/core/testing';

import { JobListProfileService } from './job-list-profile.service';

describe('JobListProfileService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JobListProfileService]
    });
  });

  it('should be created', inject([JobListProfileService], (service: JobListProfileService) => {
    expect(service).toBeTruthy();
  }));
});
