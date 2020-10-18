import {Component, Inject, Injectable, OnInit} from '@angular/core';
import {AuthService} from '../../service/auth.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  usernameOrEmail: string;
  password: string;

  constructor(private authService: AuthService,
              private router: Router,
              private toastrService: ToastrService) { }

  ngOnInit(): void {
  }

  public signIn(): void {
    this.authService.signIn(this.usernameOrEmail, this.password).subscribe(res => {
        localStorage.setItem('ACCESS_TOKEN', res.accessToken);
        this.router.navigate(['']);
        },
      err => {
        this.toastrService.error('invalid credentials');
      }
    );
  }
}
