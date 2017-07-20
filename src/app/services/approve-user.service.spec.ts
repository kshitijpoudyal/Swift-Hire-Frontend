import { TestBed, inject } from '@angular/core/testing';

import { ApproveUserService } from './approve-user.service';

describe('ApproveUserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApproveUserService]
    });
  });

  it('should be created', inject([ApproveUserService], (service: ApproveUserService) => {
    expect(service).toBeTruthy();
  }));
});
