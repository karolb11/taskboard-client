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
import {SubscribedTask} from '../shared/SubscribedTask';
import {ApiResponse} from '../shared/ApiResponse';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  createTask(name, description, boardId, assignedUserId, priorityId, stateId, subTasks: Array<SubTask>): any {
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
    return this.httpClient.post<ApiResponse>(url, postData, options);
  }

  getTaskById(id: number): Observable<Task> {
    const url = `${Consts.API_URL}/task/${id}`;
    const options = {
      headers: new HttpHeaders()
        .set('Content-Type',  `application/json`)
        .set('Authorization', 'Bearer ' + this.authService.getAccessToken())
    };
    return this.httpClient.get<Task>(url, options);
  }

  getSubscribedTasks(): any {
    const url = `${Consts.API_URL}/task/subscribed`;
    const options = {
      headers: new HttpHeaders()
        .set('Content-Type',  `application/json`)
        .set('Authorization', 'Bearer ' + this.authService.getAccessToken())
    };
    return this.httpClient.get<Array<SubscribedTask>>(url, options);
  }

  public updateTask(task: Task): any {
    const url = `${Consts.API_URL}/task/${task.id}`;
    const postData = {
      name: task.name,
      description: task.description,
      assignedUserId: task.assignedUser.id,
      priorityId: task.priority.id,
      stateId: task.state.id,
      subTasks: task.subTasks
    };
    const options = {
      headers: new HttpHeaders()
        .set('Content-Type',  `application/json`)
        .set('Authorization', 'Bearer ' + this.authService.getAccessToken())
    };
    return this.httpClient.put<Task>(url, postData, options);
  }

  public archiveTask(taskId: number): any {
    const url = `${Consts.API_URL}/task/${taskId}/archive`;
    const options = {
      headers: new HttpHeaders()
        .set('Content-Type',  `application/json`)
        .set('Authorization', 'Bearer ' + this.authService.getAccessToken())
    };
    return this.httpClient.post<Task>(url, null, options);
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
