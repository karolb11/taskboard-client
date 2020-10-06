import { Component, OnInit } from '@angular/core';
import {Role} from '../../../../shared/Role';
import {RoleService} from '../../../../service/role.service';
import {InvitationService} from '../../../../service/invitation.service';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../../../service/user.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-invite-user',
  templateUrl: './invite-user.component.html',
  styleUrls: ['./invite-user.component.css']
})
export class InviteUserComponent implements OnInit {
  boardId: number;
  roles: Array<Role>;
  usernameOrEmail: string;
  localRoleId: number;

  constructor(private roleService: RoleService,
              private invitationService: InvitationService,
              private userService: UserService,
              private toastr: ToastrService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.boardId = +params.get('id');
    });
    this.roleService.getLocalRoles().subscribe(res => {
      this.roles = res;
    });
  }

  inviteUserToBoard(): any {
    this.invitationService.inviteUserToBoard(this.usernameOrEmail, this.localRoleId, this.boardId).subscribe(
      res => {
        this.toastr.success(res.message);
        this.userService.getBoardInvitedUsers(this.boardId);
      }
    );
    this.usernameOrEmail = '';
    this.localRoleId = 0;
  }


}
