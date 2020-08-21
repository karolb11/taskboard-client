import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from './auth.service';
import {Consts} from '../shared/Consts';
import {TaskPriority} from '../shared/TaskPriority';
import {Role} from '../shared/Role';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private httpClient: HttpClient, private authService: AuthService) { }
  getLocalRoles() {
    const url = Consts.API_URL + '/local-role';
    const options = {
      headers: new HttpHeaders()
        .set('Content-Type',  `application/json`)
        .set('Authorization', 'Bearer ' + this.authService.getAccessToken())
    };
    return this.httpClient.get<Array<Role>>(url, options);
  }
}
