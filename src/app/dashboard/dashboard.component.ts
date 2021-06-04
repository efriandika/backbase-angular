import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app/app-state.model';
import { WeatherState } from '../store/weather/weather-state.model';
import { addCity } from '../store/app/app.actions';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { WeatherForecastComponent } from '../shared/components/weather-forecast/weather-forecast.component';
import { WeatherClickPayload } from '../shared/models/weather-click-payload.model';

/**
 * To handle dashboard page
 *
 * @author efriandika
 */
@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  public cities$: Observable<string[]>;
  public units$: Observable<string>;
  public unitsSubscription: Subscription | undefined;

  public units: string = 'metric';

  constructor(
    private store: Store<{ app: AppState, weather: WeatherState }>,
    private modalService: NgbModal,
  ) {
    this.cities$ = store.select((state) => state.app.cities);
    this.units$ = store.select((state) => state.weather.units);
  }

  public ngOnInit(): void {
    this.unitsSubscription = this.units$.subscribe(value => this.units = value);
  }

  public ngOnDestroy(): void {
    this.unitsSubscription?.unsubscribe();
  }

  public openWeatherForecast(payload: WeatherClickPayload) {
    const modalRef = this.modalService.open(WeatherForecastComponent);
    modalRef.componentInstance.lon = payload.lon;
    modalRef.componentInstance.lat = payload.lat;
    modalRef.componentInstance.name = payload.name;
    modalRef.componentInstance.units = this.units;
  }

  public handleNewCity(cityName: string) {
    this.store.dispatch(addCity({ city: cityName }));
  }
}
