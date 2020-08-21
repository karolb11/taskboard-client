import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from './auth.service';
import {Consts} from '../shared/Consts';
import {Board} from '../shared/Board';
import {Invitation} from '../shared/Invitation';

@Injectable({
  providedIn: 'root'
})
export class InvitationService {

  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  public inviteUserToBoard(usernameOrEmail: string, localRoleId: number, boardId: number) {
    const url = Consts.API_URL + '/invitation';
    const postData = {
      usernameOrEmail,
      localRoleId,
      boardId
    };
    const options = {
      headers: new HttpHeaders()
        .set('Content-Type',  `application/json`)
        .set('Authorization', 'Bearer ' + this.authService.getAccessToken())
    };
    return this.httpClient.post(url, postData, options);
  }

  public getUserInvitations() {
    const url = Consts.API_URL + '/invitation';
    const options = {
      headers: new HttpHeaders()
        .set('Content-Type',  `application/json`)
        .set('Authorization', 'Bearer ' + this.authService.getAccessToken())
    };
    return this.httpClient.get<Array<Invitation>>(url, options);
  }

  public acceptInvitation(invitationId: number) {
    const url = Consts.API_URL + '/invitation/' + invitationId;
    const options = {
      headers: new HttpHeaders()
        .set('Content-Type',  `application/json`)
        .set('Authorization', 'Bearer ' + this.authService.getAccessToken())
    };
    return this.httpClient.patch(url, null, options);
  }
}