import { TestBed } from '@angular/core/testing';

import { LoadingService } from '../../shared/loading/loading.service';

describe('LoadingService', () => {
  let service: LoadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have a loadingCount property', () => {
    expect(service.loadingCount).toBe(0);
  });

  it('should have a isLoading property', () => {
    expect(service.isLoading).toBeFalse();
  });

  it('should increment loadingCount', () => {
    service.loadingCount++;
    expect(service.loadingCount).toBe(1);
  });

  it('should decrement loadingCount', () => {
    service.loadingCount--;
    expect(service.loadingCount).toBe(-1);
  });
});
