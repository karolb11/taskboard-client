import {Component, OnInit} from '@angular/core';
import {RoleService} from '../../service/role.service';
import {ActivatedRoute} from '@angular/router';
import {LocalRoleName} from '../../shared/LocalRoleName';
import {GlobalRoleName} from '../../shared/GlobalRoleName';

@Component({
  selector: 'app-board-options',
  templateUrl: './board-options.component.html',
  styleUrls: ['./board-options.component.css']
})
export class BoardOptionsComponent implements OnInit {

  boardId: number;

  constructor(private route: ActivatedRoute,
              private roleService: RoleService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.boardId = params.id);
    this.roleService.getCurrentLocalRole(this.boardId);
    this.roleService.getCurrentUserData();
  }

  public canDisplayAdministrativeSettings(): boolean {
    return this.roleService.currentLocalRole.name === LocalRoleName.OWNER ||
      this.roleService.currentRole.name === GlobalRoleName.ADMIN ||
      this.roleService.currentRole.name === GlobalRoleName.MOD;
  }

  public dataLoaded(): boolean {
    const currentLocalRoleLoaded = this.roleService.currentLocalRole != null;
    const currentRoleLoaded = this.roleService.currentRole != null;
    return currentRoleLoaded
    && currentLocalRoleLoaded;
  }

}
