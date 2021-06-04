import { Injectable } from '@angular/core';

/**
 * To handle speed unit
 *
 * @author efriandika
 */
@Injectable({
  providedIn: 'root'
})
export class SpeedUnitService {

  constructor() { }

  public print(text: string): string {
    let units = 'metrics';

    switch (units) {
      case 'imperial':
        return `${text} miles/h`;
      case 'metric':
        return `${text} meter/s`;
      default:
        return text;
    }
  }
}
