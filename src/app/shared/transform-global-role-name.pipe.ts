import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformGlobalRoleName'
})
export class TransformGlobalRoleNamePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    const res = value.slice('ROLE_'.length);
    return res;
  }

}
