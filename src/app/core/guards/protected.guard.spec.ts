import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { protectedGuard } from './protected.guard';
import { AuthService } from '../services/auth.service';

describe('protectedGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => protectedGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: AuthService, useValue: { isLoggedIn: true } }],
    });
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
