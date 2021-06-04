import { Pipe, PipeTransform } from '@angular/core';

/**
 * Add unit to temperature value
 * @author efriandika
 */
@Pipe({
  name: 'temperatureUnit'
})
export class TemperatureUnitPipe implements PipeTransform {
  transform(value: number, units: string | null  = 'metric'): string {
    switch (units) {
      case 'imperial':
        return `${value}\u00b0 F`;
      case 'metric':
        return `${value}\u00b0 C`;
      default:
        return String(value);
    }
  }
}
