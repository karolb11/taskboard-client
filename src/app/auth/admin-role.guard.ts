import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {Observable, of} from 'rxjs';
import {RoleService} from '../service/role.service';
import {GlobalRoleName} from '../shared/GlobalRoleName';

@Injectable({
  providedIn: 'root'
})
export class AdminRoleGuard implements CanActivate {
  constructor(private roleService: RoleService) {
  }
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    const canActivate = this.roleService.currentRole.name === GlobalRoleName.MOD ||
      this.roleService.currentRole.name === GlobalRoleName.ADMIN;
    return of(canActivate);
  }
}
