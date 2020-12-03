import { Component, OnInit } from '@angular/core';
import {User} from '../../../shared/User';
import {UserService} from '../../../service/user.service';
import {Role} from '../../../shared/Role';
import {RoleService} from '../../../service/role.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-users-admin-panel',
  templateUrl: './users-admin-panel.component.html',
  styleUrls: ['./users-admin-panel.component.css']
})
export class UsersAdminPanelComponent implements OnInit {
  users: Array<User>;
  roles: Array<Role>;

  constructor(private userService: UserService,
              private roleService: RoleService,
              private toastr: ToastrService) {}

  ngOnInit(): void {
    this.loadUsers();
    this.roleService.getGlobalRoles().subscribe(res => {
      this.roles = res;
    });
  }

  private loadUsers(): void {
    this.users = null;
    this.userService.getAllUsers().subscribe(res => {
      this.users = res;
    });
  }

  dataLoaded(): boolean {
    return this.users.length > 0 && this.roles.length > 0;
  }

  update(userId: number, roleId: number): void {
    this.userService.updateRole(userId, roleId).subscribe(res => {
      this.toastr.success(res.message);
      this.loadUsers();
    });
  }

  deactivate(userId: number): void {
    this.userService.deactivateAccountByAdmin(userId).subscribe(res => {
      this.toastr.success('user deactivated');
      this.loadUsers();
    });
  }
}
