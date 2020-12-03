import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../service/auth.service';
import { ToastrService } from 'ngx-toastr';
import {Router} from '@angular/router';
import {combineAll} from 'rxjs/operators';
import {ApiResponse} from '../../shared/ApiResponse';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  username: string;
  fullName: string;
  password: string;
  password2: string;
  email: string;

  constructor(private authService: AuthService,
              private toastr: ToastrService,
              private router: Router) { }

  ngOnInit(): void {
  }

  public register(): void {
    if (this.password == this.password2) {
      this.authService.registerAccount(this.username, this.fullName, this.email, this.password)
        .subscribe(res => this.toastr.success(res.message),
          err => {
            console.log(err);
            if (err.status === 409) {
              this.toastr.error(err.error.message);
            } else {
              this.toastr.error('error');
            }
          });
    }
    else {
      this.toastr.error('Passwords do not match!');
    }
  }

}
