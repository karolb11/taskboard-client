import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {InvitationService} from '../../../service/invitation.service';
import {RoleService} from '../../../service/role.service';
import {Role} from '../../../shared/Role';

@Component({
  selector: 'app-members-management',
  templateUrl: './members-management.component.html',
  styleUrls: ['./members-management.component.css']
})
export class MembersManagementComponent implements OnInit {

  boardId: number;
  roles: Array<Role>;
  usernameOrEmail: string;
  localRoleId: number;

  constructor(private roleService: RoleService,
              private invitationService: InvitationService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.boardId = +params.get('id');
    });
    this.roleService.getLocalRoles().subscribe(res => {
      this.roles = res;
    });
  }

  inviteUserToBoard() {
    this.invitationService.inviteUserToBoard(this.usernameOrEmail, this.localRoleId, this.boardId).subscribe();
  }

}
