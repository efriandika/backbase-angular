import { TestBed } from '@angular/core/testing';
import { HttpService } from './http.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from '../../../environments/environment';

describe('HttpService Testing', () => {
  let service: HttpService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        HttpService
      ]
    });

    service = TestBed.inject(HttpService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should use GET as http request method', () => {
    service.get<{ status: string }>('/testing').subscribe(response => {
      expect(response).toBeTruthy();
    });

    const httpRequest = httpMock.expectOne(`${environment.backendBaseURL}/testing`);
    expect(httpRequest.request.method).toEqual('GET');
  });

  it('should use PUT as http request method', () => {
    const requestBody = {
      name: 'Efriandika Pratama',
    };

    service.put<{ status: string }>('/testing', requestBody).subscribe(response => {
      expect(response).toBeTruthy();
    });

    const httpRequest = httpMock.expectOne(`${environment.backendBaseURL}/testing`);

    expect(httpRequest.request.method).toEqual('PUT');
    expect(httpRequest.request.body).toEqual(JSON.stringify(requestBody));
  });

  it('should use POST as http request method', () => {
    const requestBody = {
      name: 'Efriandika Pratama',
    };

    service.post<{ status: string }>('/testing', requestBody).subscribe(response => {
      expect(response).toBeTruthy();
    });

    const httpRequest = httpMock.expectOne(`${environment.backendBaseURL}/testing`);

    expect(httpRequest.request.method).toEqual('POST');
    expect(httpRequest.request.body).toEqual(JSON.stringify(requestBody));
  });

  it('should use DELETE as http request method', () => {
    service.delete<{ status: string }>('/testing').subscribe(response => {
      expect(response).toBeTruthy();
    });

    const httpRequest = httpMock.expectOne(`${environment.backendBaseURL}/testing`);
    expect(httpRequest.request.method).toEqual('DELETE');
  });

  it('should set custom host', () => {
    const customBaseURL = 'http://localhost';

    service.setHost(customBaseURL).get<{ status: string }>('/testing').subscribe(response => {
      expect(response).toBeTruthy();
    });

    const httpRequest = httpMock.expectOne(`${customBaseURL}/testing`);
    expect(httpRequest.request.method).toEqual('GET');
  });

  it('should generate http params properly', () => {
    const generatedParams = service.makeHttpParams({
      param: {
        nested: 'valueNested',
      },
      paramArray: [1, 2],
      param1: 'value1',
      param2: 'value2',
    })

    expect(generatedParams.toString()).toEqual('param.nested=valueNested&paramArray=1&paramArray=2&param1=value1&param2=value2');
  });
});
