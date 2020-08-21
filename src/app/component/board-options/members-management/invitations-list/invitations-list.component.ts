import { Component, OnInit } from '@angular/core';
import {User} from '../../../../shared/User';
import {UserService} from '../../../../service/user.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-invitations-list',
  templateUrl: './invitations-list.component.html',
  styleUrls: ['./invitations-list.component.css']
})
export class InvitationsListComponent implements OnInit {
  boardId: number;
  invitedUsers: Array<User>;

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.boardId = +params.get('id');
    });
    this.userService.getBoardMembers(this.boardId).subscribe(res => {
      //we would like to remove all users who already accepted an invitation
      this.invitedUsers = res.filter(m => !m.accepted);
    });
  }

}
