import { Pipe, PipeTransform } from '@angular/core';

/**
 * Print unix timestamp to date or time
 * @author efriandika
 */
@Pipe({
  name: 'unixTimestampTo'
})
export class UnixTimestampToPipe implements PipeTransform {
  transform(value: number, type: string = 'datetime'): string {
    switch (type) {
      case 'datetime':
        return new Date(value * 1000).toLocaleString();
      case 'time':
        return new Date(value * 1000).toLocaleTimeString();
      default:
        return new Date(value * 1000).toLocaleString();
    }
  }
}
