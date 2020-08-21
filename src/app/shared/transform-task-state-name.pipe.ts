import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformTaskStateName'
})
export class TransformTaskStateNamePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    let res = value.slice('Task_State_'.length);
    res = res.charAt(0) + res.slice(1).toLowerCase();
    res = res.replace(/_/g, ' ');
    return res;
  }

}
