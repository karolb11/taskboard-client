import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from './auth.service';
import {Consts} from '../shared/Consts';
import {TaskPriority} from '../shared/TaskPriority';
import {LocalRole} from '../shared/LocalRole';
import {Role} from '../shared/Role';
import {User} from '../shared/User';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  currentUserId: number;
  currentLocalRole: LocalRole;
  currentRole: Role;

  constructor(private httpClient: HttpClient, private authService: AuthService) { }
  getLocalRoles(): any {
    const url = Consts.API_URL + '/local-role';
    const options = {
      headers: new HttpHeaders()
        .set('Content-Type',  `application/json`)
        .set('Authorization', 'Bearer ' + this.authService.getAccessToken())
    };
    return this.httpClient.get<Array<LocalRole>>(url, options);
  }
  getCurrentUserData(): void {
    const url = `${Consts.API_URL}/user/me`;
    const options = {
      headers: new HttpHeaders()
        .set('Content-Type',  `application/json`)
        .set('Authorization', 'Bearer ' + this.authService.getAccessToken())
    };
    this.httpClient.get<User>(url, options).subscribe(res => {
      this.currentUserId = res.id;
      this.currentRole = res.role;
    });
  }

  getCurrentLocalRole(boardId: number): void {
    const url = Consts.API_URL + '/local-role/my?boardId=' + boardId;
    const options = {
      headers: new HttpHeaders()
        .set('Content-Type',  `application/json`)
        .set('Authorization', 'Bearer ' + this.authService.getAccessToken())
    };
    this.httpClient.get<LocalRole>(url, options).subscribe(res => this.currentLocalRole = res);
  }
}
