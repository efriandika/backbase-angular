import { Injectable } from '@angular/core';
import { HttpService } from '../../../core/http/http.service';
import { Observable } from 'rxjs';
import { WeatherForecast } from '../../models/weather-forecast.model';

/**
 * Weather forecast data
 *
 * @author efriandika
 */
@Injectable({
  providedIn: 'root'
})
export class WeatherForecastService {
  constructor(
    private httpService: HttpService
  ) {}

  /**
   * Find weather forecast for a city
   *
   * @param lon
   * @param lat
   * @param units
   */
  public findOne(lon: number, lat: number, units = 'metric'): Observable<WeatherForecast> {
    const params = {
      lon,
      lat,
      units,
      exclude: 'minutely,daily,alerts',
    };

    return this.httpService.get<WeatherForecast>('/onecall', params);
  }
}
