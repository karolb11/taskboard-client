import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformDate'
})
export class TransformDatePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value.replace('T', ' ')
      .replace('Z', '');
  }

}
