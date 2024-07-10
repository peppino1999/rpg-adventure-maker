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

  it('should have a storage property', () => {
    expect(service.storage).toBeTruthy();
  });

  it('should sign in successfully', () => {
    service.signup(mocks.signupData).subscribe((res) => {
      expect(res).toEqual(mocks.mockResponse);
    });

    // mock the http request
    const req = httpMock.expectOne(`${service.apiUrl}/signup`);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(mocks.signupData);
    // respond with the mock data
    req.flush(mocks.mockResponse);
  });
  
  it('should sign in succesfully', () =>{
    // setup mock data
   
    service.login(mocks.loginData).subscribe((res)=>{
      expect(res).toEqual(mocks.mockResponse)
    })
    const req = httpMock.expectOne(`${service.apiUrl}/signin`)
    expect(req.request.method).toBe('POST')
    expect(req.request.body).toEqual(mocks.loginData)
    req.flush(mocks.mockResponse)
    // check if the storage has been updated
    expect(service.isLoggedIn).toBeTrue()
    expect(service.token).toBe(mocks.mockResponse.accessToken)
    expect(service.partyId).toBe(mocks.mockResponse.user.partyId)
  })

  it('should log out successfully', () => {
    service.logout();
    expect(service.isLoggedIn).toBeFalse();
    expect(service.token).toBeNull();
    expect(service.partyId).toBeNull();
  })
});
