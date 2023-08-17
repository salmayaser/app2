import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten',
})
export class ShortenPipe implements PipeTransform {
  transform(value: string): string {
    if (value.length > 40) {
      return `${value.substring(0, 40)}...`;
    }
    return value;
  }
}
