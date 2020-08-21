import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from './auth.service';
import {Consts} from '../shared/Consts';
import {BoardDetails} from '../shared/BoardDetails';
import {TaskPriority} from '../shared/TaskPriority';
import {TaskState} from '../shared/TaskState';
import {Board} from '../shared/Board';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private httpClient: HttpClient, private authService: AuthService) { }
  createTask(name, description, boardId, assignedUserId, priorityId, stateId) {
    const url = Consts.API_URL + '/task';
    const postData = {
      name,
      description,
      boardId,
      assignedUserId,
      priorityId,
      stateId
    };
    const options = {
      headers: new HttpHeaders()
        .set('Content-Type',  `application/json`)
        .set('Authorization', 'Bearer ' + this.authService.getAccessToken())
    };
    this.httpClient.post(url, postData, options).subscribe();
  }

  getTaskPriorities() {
    const url = Consts.API_URL + '/task/priority';
    const options = {
      headers: new HttpHeaders()
        .set('Content-Type',  `application/json`)
        .set('Authorization', 'Bearer ' + this.authService.getAccessToken())
    };
    return this.httpClient.get<Array<TaskPriority>>(url, options);
  }
  getTaskStates() {
    const url = Consts.API_URL + '/task/state';
    const options = {
      headers: new HttpHeaders()
        .set('Content-Type',  `application/json`)
        .set('Authorization', 'Bearer ' + this.authService.getAccessToken())
    };
    return this.httpClient.get<Array<TaskState>>(url, options);
  }
}
