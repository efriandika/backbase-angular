import { TestBed } from '@angular/core/testing';
import { AuthInterceptor } from './auth.interceptor';
import { HttpService } from '../http.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

describe('AuthInterceptor Testing', () => {
  let service: HttpService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        HttpService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthInterceptor,
          multi: true,
        },
      ]
    });

    service = TestBed.inject(HttpService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should add an auth params', () => {
    service.get<{ status: string }>('/testing').subscribe(response => {
      expect(response).toBeTruthy();
    });

    const httpRequest = httpMock.expectOne(`${environment.backendBaseURL}/testing?appid=${environment.backendBaseApiKey}`,);

    expect(httpRequest.request.params.get('appid')).toEqual(environment.backendBaseApiKey);
  });
});
