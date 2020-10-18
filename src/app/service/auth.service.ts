import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Consts} from '../shared/Consts';
import {Router} from '@angular/router';
import {ApiResponse} from '../shared/ApiResponse';
import {ToastrService} from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient, private router: Router,
              private toastrService: ToastrService) { }

  public registerAccount(username, name, email, password): any {
    const postData = {
      username,
      name,
      email,
      password
    };
    const url = Consts.API_URL + '/auth/signup';
    const options = {
      headers: new HttpHeaders()
        .set('Content-Type',  `application/json`)
    };
    return this.httpClient.post<ApiResponse>(url, postData, options);
  }

  public signIn(usernameOrEmail, password): any {
    const postData = {
      usernameOrEmail,
      password
    };
    const url = Consts.API_URL + '/auth/signin';

    return this.httpClient.post<AuthResponse>(url, postData);
  }

  public isAuthenticated(): boolean {
    if (localStorage.getItem('ACCESS_TOKEN')) { return true; }
    else { return false; }
  }

  public logout(): void {
    localStorage.removeItem('ACCESS_TOKEN');
  }

  public getAccessToken(): string {
    return localStorage.getItem('ACCESS_TOKEN');
  }

}
interface AuthResponse {
  accessToken: string;
  tokenType: string;
}
