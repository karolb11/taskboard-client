import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from './auth.service';
import {Consts} from '../shared/Consts';
import {BoardUser} from '../shared/BoardUser';
import {User} from '../shared/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  public boardMembers: Array<BoardUser>;
  public boardInvitedUsers: Array<BoardUser>;

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
}
