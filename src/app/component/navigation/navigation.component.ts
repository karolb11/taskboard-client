import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../service/auth.service';
import {Router} from '@angular/router';
import {RoleService} from '../../service/role.service';
import {GlobalRoleName} from '../../shared/GlobalRoleName';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private authService: AuthService,
              private router: Router,
              private roleService: RoleService) { }

  ngOnInit(): void {
    this.roleService.getCurrentUserData();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['signin']);
  }

  canDisplayAdminPanel(): boolean {
    return this.roleService.currentRole.name === GlobalRoleName.ADMIN ||
    this.roleService.currentRole.name === GlobalRoleName.MOD;
  }

}
