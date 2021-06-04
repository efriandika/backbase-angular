import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app/app-state.model';
import { WeatherState } from '../store/weather/weather-state.model';
import { addCity } from '../store/app/app.actions';

/**
 * To handle dasboard page
 *
 * @author efriandika
 */
@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public cities$: Observable<string[]>;
  public units$: Observable<string>;

  constructor(
    private store: Store<{ app: AppState, weather: WeatherState }>
  ) {
    this.cities$ = store.select((state) => state.app.cities);
    this.units$ = store.select((state) => state.weather.units);
  }

  public ngOnInit(): void {}

  public handleNewCity(cityName: string) {
    this.store.dispatch(addCity({ city: cityName }));
  }
}
