import {Component, Inject, Injectable, OnInit} from '@angular/core';
import {AuthService} from '../../service/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  usernameOrEmail: string;
  password: string;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  public signIn(): void {
    this.authService.signIn(this.usernameOrEmail, this.password);
  }
}
