import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Consts} from '../shared/Consts';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  public signIn(usernameOrEmail, password): void {
    const postData = {
      usernameOrEmail,
      password
    };
    const url = Consts.API_URL + '/auth/signin';

    this.httpClient.post<AuthResponse>(url, postData).subscribe(res =>
      localStorage.setItem('ACCESS_TOKEN', res.accessToken)
    );
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
