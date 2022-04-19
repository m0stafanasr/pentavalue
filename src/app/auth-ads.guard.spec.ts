import { TestBed } from '@angular/core/testing';

import { AuthAdsGuard } from './auth-ads.guard';

describe('AuthAdsGuard', () => {
  let guard: AuthAdsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthAdsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
