import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { WeatherForecastService } from './weather-forecast.service';
import { WeatherForecast } from '../../models/weather-forecast.model';

/**
 * City weather forecast
 *
 * @author efriandika
 */
@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.scss']
})
export class WeatherForecastComponent implements OnInit {

  @Input() lon!: number;
  @Input() lat!: number;
  @Input() name!: string;
  @Input() units: string = 'metric';

  public data: WeatherForecast | undefined;
  public loading: boolean = false;
  public error: string | undefined;

  constructor(
    public activeModal: NgbActiveModal,
    private weatherForecastService: WeatherForecastService,
  ) { }

  public ngOnInit(): void {
    if (this.lon != null && this.lat != null && this.units != null) {
      this.fetchWeatherForecastData(this.lon, this.lat, this.units);
    }
  }

  /**
   * Fetch forecast data from the backend
   *
   * @param lon
   * @param lat
   * @param units
   */
  public fetchWeatherForecastData(lon: number, lat: number, units: string): void {
    this.loading = true;
    this.error = undefined;

    this.weatherForecastService.findOne(lon, lat, units).subscribe(
      (response: WeatherForecast) => {
        this.loading = false;
        this.data = response;
      },
      (error) => {
        this.loading = false;

        if (error.status == 404) {
          this.error = `${this.name} is not found`;
        } else {
          this.error = error.message;
        }
      }
    )
  }

  /**
   * Get the weather icon URL
   */
  public getWeatherIconURL(): string | null {
    if (this.data != null && this.data.current.weather != null && this.data.current.weather.length > 0) {
      return `https://openweathermap.org/img/wn/${this.data.current.weather[0].icon}@2x.png`;
    } else {
      return null;
    }
  }
}
