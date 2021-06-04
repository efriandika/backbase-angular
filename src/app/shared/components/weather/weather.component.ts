import { Component, Input, OnInit, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { WeatherService } from './weather.service';
import { Weather } from '../../models/weather.model';
import { WeatherClickPayload } from '../../models/weather-click-payload.model';

/**
 * @author efriandika
 */
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit, OnChanges {

  /**
   * Custom css className
   */
  @Input() className: string = '';

  /**
   * Data Unit
   * @see {@link https://openweathermap.org/current#dat} for more information
   */
  @Input() units: string | null = 'metric';

  /**
   * City name
   */
  @Input() cityName!: string;

  /**
   * It will be fired When weather box is clicked
   */
  @Output() click = new EventEmitter<WeatherClickPayload>();

  public data: Weather | undefined;
  public loading: boolean = false;
  public error: string | undefined;

  constructor(
    private weatherService: WeatherService,
  ) {}

  public ngOnInit(): void {}

  public ngOnChanges(changes: SimpleChanges): void {
    if ((changes.units != null || changes.cityName != null) && this.units != null) {
      this.fetchWeatherData(this.cityName, this.units!);
    }
  }

  /**
   * Fetch data from the backend
   * @param cityName
   * @param units
   */
  public fetchWeatherData(cityName: string, units: string): void {
    this.loading = true;
    this.error = undefined;

    this.weatherService.findOne(cityName, units).subscribe(
      (response: Weather) => {
        this.loading = false;
        this.data = response;
      },
      (error) => {
        this.loading = false;

        if (error.status == 404) {
          this.error = `${this.cityName} is not found`;
        } else {
          this.error = error.message;
        }
      }
    )
  }

  /**
   * fire click event when weather box is getting clicked
   */
  public handleClick(): void {
    if (this.data != null) {
      this.click.emit({
        lon: this.data.coord.lon,
        lat: this.data.coord.lat,
        name: this.data.name
      });
    }
  }

  /**
   * Get the weather icon URL
   */
  public getWeatherIconURL(): string | null {
    if (this.data != null && this.data.weather != null && this.data.weather.length > 0) {
      return `https://openweathermap.org/img/wn/${this.data.weather[0].icon}@2x.png`;
    } else {
      return null;
    }
  }
}
