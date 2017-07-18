import { TestBed, async, inject } from '@angular/core/testing';

import { ValidUserGuard } from './valid-user.guard';

describe('ValidUserGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValidUserGuard]
    });
  });

  it('should ...', inject([ValidUserGuard], (guard: ValidUserGuard) => {
    expect(guard).toBeTruthy();
  }));
});
