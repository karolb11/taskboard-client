import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Consts} from '../shared/Consts';
import {AuthService} from './auth.service';
import {Board} from '../shared/Board';
import {BoardDetails} from '../shared/BoardDetails';
import {Role} from '../shared/Role';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  constructor(private httpClient: HttpClient, private authService: AuthService) {}

  public getUsersBoard() {
    const url = Consts.API_URL + '/board';
    const options = {
      headers: new HttpHeaders()
        .set('Content-Type',  `application/json`)
        .set('Authorization', 'Bearer ' + this.authService.getAccessToken())
    };
    return this.httpClient.get<Array<Board>>(url, options);
  }

  public getBoardById(boardId: number) {
    const url = Consts.API_URL + '/board/' + boardId;
    const options = {
      headers: new HttpHeaders()
        .set('Content-Type',  `application/json`)
        .set('Authorization', 'Bearer ' + this.authService.getAccessToken())
    };
    return this.httpClient.get<BoardDetails>(url, options);
  }

  public createBoard(name: string, description: string) {
    const url = Consts.API_URL + '/board';
    const postData = {
      name,
      description
    };
    const options = {
      headers: new HttpHeaders()
        .set('Content-Type',  `application/json`)
        .set('Authorization', 'Bearer ' + this.authService.getAccessToken())
    };
    return this.httpClient.post<Board>(url, postData, options);
  }

  public getUsersLocalRoles(boarId: number) {
    const url = Consts.API_URL + '/local-role/my?boardId=' + boarId;
    const options = {
      headers: new HttpHeaders()
        .set('Content-Type',  `application/json`)
        .set('Authorization', 'Bearer ' + this.authService.getAccessToken())
    };
    return this.httpClient.get<Role>(url, options);
  }
}
