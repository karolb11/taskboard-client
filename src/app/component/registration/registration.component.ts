import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../service/auth.service';
import { ToastrService } from 'ngx-toastr';
import {Router} from '@angular/router';
import {combineAll} from 'rxjs/operators';
import {ApiResponse} from '../../shared/ApiResponse';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  username: string;
  fullName: string;
  password: string;
  email: string;

  constructor(private authService: AuthService,
              private toastr: ToastrService,
              private router: Router) { }

  ngOnInit(): void {
  }

  public show(): void {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }

  public register(): void {
    this.authService.registerAccount(this.username, this.fullName, this.email, this.password)
      .subscribe(res => {
        if (res.success) {
          this.toastr.success(res.message);
          this.router.navigate(['']);
        } else {
          this.toastr.error(res.message);
        }},
        err => this.toastr.error('Entered values are invalid'), 'Error!');
  }

}
