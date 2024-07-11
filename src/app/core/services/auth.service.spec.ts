import { TestBed, fakeAsync, flush, tick } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { provideHttpClient } from '@angular/common/http';
import { AuthModule } from '../modules/auth.module';
import { ApiClientModule } from '../modules/apiClientModule';
import { UserTypes } from '../models/users';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { mocks } from '../utils/test.utils';

describe('AuthService', () => {
  let service: AuthService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    // inietto tutti i moduli collegati al servizio
    TestBed.configureTestingModule({
      imports: [AuthModule, ApiClientModule],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(AuthService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // verifica che non ci siano richieste in sospeso
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

 
});
