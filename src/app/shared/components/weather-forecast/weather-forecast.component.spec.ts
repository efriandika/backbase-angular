import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherForecastComponent } from './weather-forecast.component';
import { NgbActiveModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { WeatherForecastService } from './weather-forecast.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

const mockResponseData = {
  "lat": 55.9521,
  "lon": -3.1965,
  "timezone": "Europe/London",
  "timezone_offset": 3600,
  "current": {
    "dt": 1621990766,
    "sunrise": 1622000540,
    "sunset": 1622061461,
    "temp": 7.64,
    "feels_like": 7.64,
    "pressure": 1015,
    "humidity": 91,
    "dew_point": 6.27,
    "uvi": 0,
    "clouds": 90,
    "visibility": 10000,
    "wind_speed": 0.89,
    "wind_deg": 0,
    "wind_gust": 4.02,
    "weather": [
      {
        "id": 804,
        "main": "Clouds",
        "description": "overcast clouds",
        "icon": "04n"
      }
    ]
  },
  "hourly": [
    {
      "dt": 1621987200,
      "temp": 7.46,
      "feels_like": 6.18,
      "pressure": 1015,
      "humidity": 91,
      "dew_point": 6.09,
      "uvi": 0,
      "clouds": 88,
      "visibility": 10000,
      "wind_speed": 2.06,
      "wind_deg": 302,
      "wind_gust": 3.25,
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04n"
        }
      ],
      "pop": 0
    },
    {
      "dt": 1621990800,
      "temp": 7.64,
      "feels_like": 5.89,
      "pressure": 1015,
      "humidity": 91,
      "dew_point": 6.27,
      "uvi": 0,
      "clouds": 90,
      "visibility": 10000,
      "wind_speed": 2.69,
      "wind_deg": 312,
      "wind_gust": 6.58,
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04n"
        }
      ],
      "pop": 0.35
    }
  ]
};

describe('WeatherForecastComponent Testing', () => {
  let component: WeatherForecastComponent;
  let fixture: ComponentFixture<WeatherForecastComponent>;
  let findOneSpy: any;

  beforeEach(async () => {
    const weatherForecastService = jasmine.createSpyObj('WeatherForecastService', ['findOne']);
    findOneSpy = weatherForecastService.findOne.and.returnValue(of(mockResponseData));

    await TestBed.configureTestingModule({
      imports: [NgbModalModule, HttpClientTestingModule],
      providers: [
        NgbActiveModal,
        { provide: WeatherForecastService, useValue: weatherForecastService }
      ],
      declarations: [ WeatherForecastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
