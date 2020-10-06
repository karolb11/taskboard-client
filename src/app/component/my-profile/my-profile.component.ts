import { Component, OnInit } from '@angular/core';
import {User} from '../../shared/User';
import {UserService} from '../../service/user.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  myUserDetails: User;
  newPassword: string;
  confirmPassword: string;
  currentPassword: string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getMyUserDetails().subscribe(res => this.myUserDetails = res);
  }

}
