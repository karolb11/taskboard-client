import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from './auth.service';
import {Consts} from '../shared/Consts';
import {BoardDetails} from '../shared/BoardDetails';
import {TaskPriority} from '../shared/TaskPriority';
import {TaskState} from '../shared/TaskState';
import {Board} from '../shared/Board';
import {Task} from '../shared/Task';
import {SubTask} from '../shared/SubTask';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  getTaskById(id: number): Observable<Task> {
    const url = `${Consts.API_URL}/task/${id}`;
    const options = {
      headers: new HttpHeaders()
        .set('Content-Type',  `application/json`)
        .set('Authorization', 'Bearer ' + this.authService.getAccessToken())
    };
    return this.httpClient.get<Task>(url, options);
  }

  createTask(name, description, boardId, assignedUserId, priorityId, stateId, subTasks: Array<SubTask>): void {
    const url = Consts.API_URL + '/task';
    const postData = {
      name,
      description,
      boardId,
      assignedUserId,
      priorityId,
      stateId,
      subTasks
    };
    const options = {
      headers: new HttpHeaders()
        .set('Content-Type',  `application/json`)
        .set('Authorization', 'Bearer ' + this.authService.getAccessToken())
    };
    this.httpClient.post(url, postData, options).subscribe();
  }

  public updateTask(task: Task): any {
    const url = `${Consts.API_URL}/task/${task.id}`;
    const postData = {
      task
    };
    const options = {
      headers: new HttpHeaders()
        .set('Content-Type',  `application/json`)
        .set('Authorization', 'Bearer ' + this.authService.getAccessToken())
    };
    return this.httpClient.put<Task>(url, postData, options).subscribe();
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
