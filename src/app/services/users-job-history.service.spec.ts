import { TestBed, inject } from '@angular/core/testing';

import { UsersJobHistoryService } from './users-job-history.service';

describe('UsersJobHistoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsersJobHistoryService]
    });
  });

  it('should be created', inject([UsersJobHistoryService], (service: UsersJobHistoryService) => {
    expect(service).toBeTruthy();
  }));
});
