import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformLocalRoleName'
})
export class TransformLocalRoleNamePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    let res = value.slice('LOCAL_ROLE_'.length);
    res = res.charAt(0) + res.slice(1).toLowerCase();
    return res;
  }

}
