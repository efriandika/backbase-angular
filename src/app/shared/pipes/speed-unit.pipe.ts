import { Pipe, PipeTransform } from '@angular/core';

/**
 * Added unit to speed value
 *
 * @author efriandika
 */
@Pipe({
  name: 'speedUnit'
})
export class SpeedUnitPipe implements PipeTransform {
  transform(value: number, units: string | null = 'metric'): string {
    switch (units) {
      case 'imperial':
        return `${value} miles/h`;
      case 'metric':
        return `${value} meter/s`;
      default:
        return String(value);
    }
  }
}
