import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpInterceptorFn, provideHttpClient, withInterceptors } from '@angular/common/http';

import { authInterceptor } from './auth.interceptor';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { AuthService } from '../services/auth.service';
import { ApiClientModule } from '../modules/apiClientModule';
import { AuthModule } from '../modules/auth.module';
import { mocks } from '../utils/test.utils';

describe('authInterceptor', () => {
  const interceptor: HttpInterceptorFn = (req, next) => 
    TestBed.runInInjectionContext(() => authInterceptor(req, next));
  let http: HttpClient;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AuthModule, ApiClientModule],
      providers: [provideHttpClient(), provideHttpClientTesting(),{
        provide: AuthService,
        useValue:{
          isLoggedIn: true,
          token: 'authToken'
        }
      },withInterceptors([authInterceptor])],
     
    });
    http = TestBed.inject(HttpClient)
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });

  it('should set token in request', () =>{
   http.get('/test').subscribe((res) =>{
    expect(res).toBeTruthy();
   });
   const mockRequest = httpMock.expectOne('/test')
    expect(mockRequest.request.headers.get('Authorization')).toBeTruthy()
    mockRequest.flush({})
  });
});
