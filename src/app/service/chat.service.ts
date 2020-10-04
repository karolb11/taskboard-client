import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from './auth.service';
import {Consts} from '../shared/Consts';
import {Board} from '../shared/Board';
import {ChatMessage} from '../shared/ChatMessage';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  public getChatMessagesByBoardId(boardId: number): any {
    const url = `${Consts.API_URL}/chat?boardId=${boardId}`;
    const options = {
      headers: new HttpHeaders()
        .set('Content-Type',  `application/json`)
        .set('Authorization', 'Bearer ' + this.authService.getAccessToken())
    };
    return this.httpClient.get<Array<ChatMessage>>(url, options);
  }

  sendMessage(content: string, boardId: number): any {
    const url = Consts.API_URL + '/chat';
    const postData = {
      content,
      boardId
    };
    const options = {
      headers: new HttpHeaders()
        .set('Content-Type',  `application/json`)
        .set('Authorization', 'Bearer ' + this.authService.getAccessToken())
    };
    return this.httpClient.post(url, postData, options);
  }
}
