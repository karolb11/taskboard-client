import { Component, OnInit } from '@angular/core';
import {BoardUser} from '../../../../shared/BoardUser';
import {UserService} from '../../../../service/user.service';
import {ActivatedRoute} from '@angular/router';
import {LocalRoleName} from '../../../../shared/LocalRoleName';
import {Role} from '../../../../shared/Role';
import {RoleService} from '../../../../service/role.service';
import {InvitationService} from '../../../../service/invitation.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-members-list',
  templateUrl: './members-list.component.html',
  styleUrls: ['./members-list.component.css']
})
export class MembersListComponent implements OnInit {
  boardId: number;
  roles: Array<Role>;

  constructor(public userService: UserService,
              private roleService: RoleService,
              private toastr: ToastrService,
              private invitationService: InvitationService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.boardId = +params.get('id');
    });
    this.userService.getBoardMembers(this.boardId);
    this.roleService.getLocalRoles().subscribe(res => {
      this.roles = res;
    });
  }

  save(invitationId: number, localRoleId: number) {
    this.invitationService.editInvitation(invitationId, localRoleId)
      .subscribe(res => {
        this.toastr.success(res.message);
        this.userService.getBoardMembers(this.boardId);
      });
  }

  delete(invitationId: number) {
    this.invitationService.removeInvitation(invitationId)
      .subscribe(res => {
        this.toastr.success(res.message);
        this.userService.getBoardMembers(this.boardId);
      });
  }
}
