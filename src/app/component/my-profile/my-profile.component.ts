import { Component, OnInit } from '@angular/core';
import {User} from '../../shared/User';
import {UserService} from '../../service/user.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  myUserDetails: User;
  newPassword: string;
  confirmNewPassword: string;
  currentPassword: string;
  deactivateAccPassConfirm: string;

  constructor(private userService: UserService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.userService.getMyUserDetails().subscribe(res => this.myUserDetails = res);
  }

  deactivateAccount(): void {
    this.userService.deactivateAccount(this.myUserDetails.id, this.deactivateAccPassConfirm).subscribe(res => {
      this.toastr.success('Account deactivated', 'Saved');
    });
  }

  public dataLoaded(): boolean {
    return this.myUserDetails != null;
  }

}
