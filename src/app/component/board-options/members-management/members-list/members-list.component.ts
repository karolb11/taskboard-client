import { Component, OnInit } from '@angular/core';
import {User} from '../../../../shared/User';
import {UserService} from '../../../../service/user.service';
import {ActivatedRoute} from '@angular/router';
import {LocalRoleName} from '../../../../shared/LocalRoleName';

@Component({
  selector: 'app-members-list',
  templateUrl: './members-list.component.html',
  styleUrls: ['./members-list.component.css']
})
export class MembersListComponent implements OnInit {
  boardId: number;

  constructor(public userService: UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.boardId = +params.get('id');
    });
    this.userService.getBoardMembers(this.boardId);
  }
}
