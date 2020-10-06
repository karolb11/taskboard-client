import { Component, OnInit } from '@angular/core';
import {BoardUser} from '../../../../shared/BoardUser';
import {UserService} from '../../../../service/user.service';
import {ActivatedRoute} from '@angular/router';
import {InvitationService} from '../../../../service/invitation.service';

@Component({
  selector: 'app-invitations-list',
  templateUrl: './invitations-list.component.html',
  styleUrls: ['./invitations-list.component.css']
})
export class InvitationsListComponent implements OnInit {
  boardId: number;

  constructor(public userService: UserService,
              private route: ActivatedRoute,
              private invitationService: InvitationService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.boardId = +params.get('id');
    });
    this.userService.getBoardInvitedUsers(this.boardId);
  }

  cancelInvitation(invitationId: number): any {
    this.invitationService.removeInvitation(invitationId)
      .subscribe(res => this.userService.getBoardInvitedUsers(this.boardId));
  }

}
