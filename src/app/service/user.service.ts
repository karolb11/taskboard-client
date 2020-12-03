import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from './auth.service';
import {Consts} from '../shared/Consts';
import {BoardUser} from '../shared/BoardUser';
import {User} from '../shared/User';
import {ApiResponse} from '../shared/ApiResponse';
import {UpdateUserRequestType} from '../shared/UpdateUserRequestType';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  public boardMembers: Array<BoardUser>;
  public boardInvitedUsers: Array<BoardUser>;

  getAllUsers(): any {
    const url = `${Consts.API_URL}/user`;
    const options = {
      headers: new HttpHeaders()
        .set('Content-Type',  `application/json`)
        .set('Authorization', 'Bearer ' + this.authService.getAccessToken())
    };
    return this.httpClient.get<User>(url, options);
  }

  getMyUserDetails(): any {
    const url = `${Consts.API_URL}/user/me`;
    const options = {
      headers: new HttpHeaders()
        .set('Content-Type',  `application/json`)
        .set('Authorization', 'Bearer ' + this.authService.getAccessToken())
    };
    return this.httpClient.get<User>(url, options);
  }

  getBoardUsers(boardId: number) {
    const url = `${Consts.API_URL}/board/${boardId}/users`;
    const options = {
      headers: new HttpHeaders()
        .set('Content-Type',  `application/json`)
        .set('Authorization', 'Bearer ' + this.authService.getAccessToken())
    };
    return this.httpClient.get<Array<BoardUser>>(url, options);
  }
  getBoardMembers(boardId: number) {
    this.boardMembers = null;
    const url = `${Consts.API_URL}/board/${boardId}/members`;
    const options = {
      headers: new HttpHeaders()
        .set('Content-Type',  `application/json`)
        .set('Authorization', 'Bearer ' + this.authService.getAccessToken())
    };
    this.httpClient.get<Array<BoardUser>>(url, options)
      .subscribe(res => this.boardMembers = res.filter(m => m.accepted));
  }
  getBoardInvitedUsers(boardId: number): void {
    const url = `${Consts.API_URL}/board/${boardId}/members`;
    const options = {
      headers: new HttpHeaders()
        .set('Content-Type',  `application/json`)
        .set('Authorization', 'Bearer ' + this.authService.getAccessToken())
    };
    this.httpClient.get<Array<BoardUser>>(url, options)
      .subscribe(res => this.boardInvitedUsers = res.filter(m => !m.accepted));
  }

  deactivateAccount(accountId: number, currentPassword: string): any {
    const url = `${Consts.API_URL}/user/${accountId}`;
    const postData = {
      type: UpdateUserRequestType.DEACTIVATE,
      currentPassword
    };
    const options = {
      headers: new HttpHeaders()
        .set('Content-Type',  `application/json`)
        .set('Authorization', 'Bearer ' + this.authService.getAccessToken())
    };
    return this.httpClient.patch<ApiResponse>(url, postData, options);
  }
  deactivateAccountByAdmin(accountId: number): any {
    const url = `${Consts.API_URL}/user/${accountId}/deactivate`;
    const options = {
      headers: new HttpHeaders()
        .set('Content-Type',  `application/json`)
        .set('Authorization', 'Bearer ' + this.authService.getAccessToken())
    };
    return this.httpClient.patch<ApiResponse>(url, accountId, options);
  }

  updateRole(userId: number, roleId: number): any {
    const url = `${Consts.API_URL}/user/${userId}/role`;
    const options = {
      headers: new HttpHeaders()
        .set('Content-Type',  `application/json`)
        .set('Authorization', 'Bearer ' + this.authService.getAccessToken())
    };
    return this.httpClient.patch<ApiResponse>(url, roleId, options);
  }
}
