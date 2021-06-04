import { Injectable } from '@angular/core';

/**
 * To handle temperature unit
 *
 * @author efriandika
 */
@Injectable({
  providedIn: 'root'
})
export class TemperatureUnitService {

  constructor() { }

  public print(text: string): string {
    let units = 'metrics';

    switch (units) {
      case 'imperial':
        return `${text}\u00b0 F`;
      case 'metric':
        return `${text}\u00b0 C`;
      default:
        return text;
    }
  }
}
