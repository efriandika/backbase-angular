import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { WeatherComponent } from './weather.component';
import { WeatherService } from './weather.service';
import { click, findComponents, getText } from '../../../tests/element.spec-helper';
import { SharedModule } from '../../shared.module';
import { of, throwError } from 'rxjs';
import { delay, first } from 'rxjs/operators';
import { WeatherClickPayload } from '../../models/weather-click-payload.model';

const mockResponseData = {
  'coord': {
    'lon': 4.8897,
    'lat': 52.374
  },
  'weather': [
    {
      'id': 802,
      'main': 'Clouds',
      'description': 'scattered clouds',
      'icon': '03d'
    }
  ],
  'main': {
    'temp': 11.56,
    'pressure': 1016,
    'humidity': 85
  },
  'wind': {
    'speed': 3.58,
  },
  'dt': 1621953209,
  'sys': {
    'country': 'NL',
  },
  'name': 'Amsterdam'
};

describe('WeatherComponent Testing', () => {
  let component: WeatherComponent;
  let fixture: ComponentFixture<WeatherComponent>;
  let findOneSpy: any;

  beforeEach(async () => {
    const weatherService = jasmine.createSpyObj('WeatherService', ['findOne']);
    findOneSpy = weatherService.findOne.and.returnValue(of(mockResponseData));

    await TestBed.configureTestingModule({
      imports: [
        SharedModule
      ],
      providers: [
        { provide: WeatherService, useValue: weatherService }
      ],
      declarations: [WeatherComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render loading skeleton while requesting data to the server', () => {
    findOneSpy.and.returnValue(of().pipe(delay(1000)));
    component.fetchWeatherData('Amsterdam', 'metric');
    fixture.detectChanges();

    const skeletonElements = findComponents(fixture, 'app-skeleton');
    expect(skeletonElements.length).toBeGreaterThanOrEqual(1);
  });

  it('should show the weather info from the API', fakeAsync(() => {
    component.fetchWeatherData('Amsterdam', 'metric');
    fixture.detectChanges();

    expect(findOneSpy.calls.any()).toBe(true);
    expect(getText(fixture, '.city')).toMatch(/amsterdam/i);
  }));

  it("should render error message when city is not found", async () => {
    findOneSpy.and.returnValue(throwError({ status: 404 }));

    component.fetchWeatherData('Jakarta', 'metric');
    fixture.detectChanges();

    expect(getText(fixture, '.text-danger')).toMatch(/is not found/i);
  });

  it("should not render weather icon if icon data is unavailable", async () => {
    findOneSpy.and.returnValue(of({ ...mockResponseData, weather: [] }));

    component.fetchWeatherData('Amsterdam', 'metric');
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.weather-icon')).not.toBeTruthy();
  });

  it("should handle on click event",  async () => {
    let selectedData: WeatherClickPayload | undefined;

    component.fetchWeatherData('Amsterdam', 'metric');
    fixture.detectChanges();

    component.cityClick.pipe(first()).subscribe((data: WeatherClickPayload) => selectedData = data);

    click(fixture, '.weather-container');

    expect(selectedData).toEqual({
      lon: 4.8897,
      lat: 52.374,
      name: 'Amsterdam'
    });
  });
});
