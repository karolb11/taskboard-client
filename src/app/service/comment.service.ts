import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from './auth.service';
import {Consts} from '../shared/Consts';
import {Board} from '../shared/Board';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpClient: HttpClient, private authService: AuthService) {}

  public createComment(taskId: number, content: string): any {
    const url = Consts.API_URL + '/comment?taskId=' + taskId;
    const postData = content;
    const options = {
      headers: new HttpHeaders()
        .set('Content-Type',  `application/json`)
        .set('Authorization', 'Bearer ' + this.authService.getAccessToken())
    };
    return this.httpClient.post(url, postData, options).subscribe();
  }

  public getComment(taskId: number): any {
    const url = Consts.API_URL + '/comment?taskId=' + taskId;
    const options = {
      headers: new HttpHeaders()
        .set('Content-Type',  `application/json`)
        .set('Authorization', 'Bearer ' + this.authService.getAccessToken())
    };
    return this.httpClient.get<Comment>(url, options);
  }
}
