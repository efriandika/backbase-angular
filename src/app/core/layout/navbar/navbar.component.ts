import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { WeatherState } from '../../../store/weather/weather-state.model';
import { enableImperialUnits, enableMetricUnits } from '../../../store/weather/weather.actions';
import { first } from 'rxjs/operators';

/**
 * Navbar component
 *
 * @author
 */
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public units$: Observable<string>;

  public appName: string | undefined;
  public unitsSwitcher = new FormControl();

  constructor(
    private store: Store<{ weather: WeatherState }>
  ) {
    this.units$ = store.select((state) => state.weather.units);
  }

  ngOnInit(): void {
    this.appName = environment.appName;

    this.setUnitSwitcherDefaultValue();
    this.handleUnitSwitcherChanges();
  }

  /**
   * Set default value for unit switcher
   */
  public setUnitSwitcherDefaultValue(): void {
    this.units$.pipe(first()).subscribe((value) => {
      this.unitsSwitcher.reset(value === 'metric');
    });
  }

  /**
   * Handle unit switcher changes.
   * Value [true] => metric
   * Value [false] => imperial
   */
  public handleUnitSwitcherChanges(): void {
    this.unitsSwitcher.valueChanges.subscribe((value) => {
      if (value) {
        this.store.dispatch(enableMetricUnits());
      } else {
        this.store.dispatch(enableImperialUnits());
      }
    });
  }
}
