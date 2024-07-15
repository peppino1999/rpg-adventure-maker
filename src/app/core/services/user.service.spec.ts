import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { ApiClientModule } from '../modules/apiClientModule';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[ApiClientModule]
    });
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
