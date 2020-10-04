import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from './auth.service';
import {Consts} from '../shared/Consts';
import {ChatMessage} from '../shared/ChatMessage';

@Injectable({
  providedIn: 'root'
})
export class SubscribeService {

  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  public isTaskSubscribedByUser(taskId: number): any {
    const url = `${Consts.API_URL}/subscription?taskId=${taskId}`;
    const options = {
      headers: new HttpHeaders()
        .set('Content-Type',  `application/json`)
        .set('Authorization', 'Bearer ' + this.authService.getAccessToken())
    };
    return this.httpClient.get<boolean>(url, options);
  }

  public createSubscription(taskId: number): any {
    const url = `${Consts.API_URL}/subscription`;
    const postData = taskId.toString();
    const options = {
      headers: new HttpHeaders()
        .set('Content-Type',  `application/json`)
        .set('Authorization', 'Bearer ' + this.authService.getAccessToken())
    };
    return this.httpClient.post(url, postData, options);
  }

  public cancelSubscription(taskId: number): any {
    const url = `${Consts.API_URL}/subscription?taskId=${taskId}`;
    const options = {
      headers: new HttpHeaders()
        .set('Content-Type',  `application/json`)
        .set('Authorization', 'Bearer ' + this.authService.getAccessToken())
    };
    return this.httpClient.delete(url, options);
  }
}
