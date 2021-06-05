import { TestBed } from '@angular/core/testing';
import { WeatherForecastService } from './weather-forecast.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from '../../../../environments/environment';

describe('WeatherForecastService', () => {
  let service: WeatherForecastService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        WeatherForecastService
      ]
    });

    service = TestBed.inject(WeatherForecastService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should find one forecasted data by coordinate and units', () => {
    const lon = 100;
    const lat = 101;
    const units = 'metric';

    service.findOne(lon, lat, units).subscribe(response => {
      expect(response).toBeTruthy();
    });

    const httpRequest = httpMock.expectOne(`${environment.backendBaseURL}/onecall?lon=${lon}&lat=${lat}&units=${units}&exclude=minutely,daily,alerts`);
    expect(httpRequest.request.method).toEqual('GET');
  });
});
