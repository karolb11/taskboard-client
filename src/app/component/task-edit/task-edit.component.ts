import { Component, OnInit } from '@angular/core';
import {TaskPriority} from '../../shared/TaskPriority';
import {TaskState} from '../../shared/TaskState';
import {BoardUser} from '../../shared/BoardUser';
import {ActivatedRoute, Router} from '@angular/router';
import {Task} from '../../shared/Task';
import {TaskService} from '../../service/task.service';
import {UserService} from '../../service/user.service';
import {ToastrService} from 'ngx-toastr';
import {RoleService} from '../../service/role.service';
import {LocalRoleName} from '../../shared/LocalRoleName';
import {GlobalRoleName} from '../../shared/GlobalRoleName';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit {
  taskId: number;
  boardId: number;
  taskPriorities: Array<TaskPriority>;
  taskStates: Array<TaskState>;
  boardUsers: Array<BoardUser>;
  task: Task;

  name: string;
  description: string;
  state: number;
  assignedUser: number;

  constructor(private route: ActivatedRoute,
              private taskService: TaskService,
              private userService: UserService,
              private toastr: ToastrService,
              private router: Router,
              private roleService: RoleService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.boardId = +params.get('id');
    });
    this.route.params.subscribe(params => this.taskId = params.taskId);
    this.userService.getBoardUsers(this.boardId).subscribe(res => {
      this.boardUsers = res;
    });
    this.taskService.getTaskPriorities().subscribe(res => {
      this.taskPriorities = res;
    });
    this.taskService.getTaskStates().subscribe(res => {
      this.taskStates = res;
    });
    this.taskService.getTaskById(this.taskId).subscribe(res => {
      this.task = res;
    });
    this.roleService.getCurrentUserData();
    this.roleService.getCurrentLocalRole(this.boardId);
  }

  save(): void {
    this.taskService.updateTask(this.task).subscribe(res => {
      this.toastr.success('Task modified', 'Saved');
      this.router.navigate([`/boards/${this.boardId}`]);
    });
  }
  archive(): void {
    this.taskService.archiveTask(this.taskId).subscribe(res => {
      this.toastr.success('Task archived', 'Saved');
      this.router.navigate([`/boards/${this.boardId}`]);
    });
  }
  public isAbleToArchive(): boolean {
    if (this.roleService.currentLocalRole.name === LocalRoleName.OWNER ||
      this.roleService.currentRole.name === GlobalRoleName.ADMIN ||
      this.roleService.currentRole.name === GlobalRoleName.MOD) {
      return true;
    } else {
      return false;
    }
  }

  public dataLoaded(): boolean {
    const taskLoaded = this.task != null;
    const taskPrioritiesLoaded = this.taskPriorities != null;
    const taskStatesLoaded = this.taskStates != null;
    const boardUsersLoaded = this.boardUsers != null;
    return taskLoaded
      && taskPrioritiesLoaded
      && taskStatesLoaded
      && boardUsersLoaded;
  }
}
