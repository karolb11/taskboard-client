import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformPriorityName'
})
export class TransformPriorityNamePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    let res = value.slice('Task_Priority_'.length);
    res = res.charAt(0) + res.slice(1).toLowerCase();
    return res;
  }

}
