import { TestBed } from '@angular/core/testing';
// import { CanActivateFn } from '@angular/router';

import { authguard } from './auth.guard';
import { CanActivateFn } from '@angular/router';

describe('AuthGuard', () => {
  let guard: CanActivateFn;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(authguard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
