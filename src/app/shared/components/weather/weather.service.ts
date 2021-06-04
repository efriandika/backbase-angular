import { Injectable } from '@angular/core';
import { HttpService } from '../../../core/http/http.service';
import { Observable } from 'rxjs';
import { Weather } from '../../models/weather.model';

/**
 * Current weather service
 *
 * @author efriandika
 */
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(
    private httpService: HttpService
  ) {}

  /**
   * Find current weather for a city
   *
   * @param cityName
   * @param units
   */
  public findOne(cityName: string, units = 'metric'): Observable<Weather> {
    const params = {
      q: cityName,
      units,
    };

    return this.httpService.get<Weather>('/weather', params);
  }
}
