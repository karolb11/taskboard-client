import { Component, OnInit } from '@angular/core';
import {TaskPriority} from '../../shared/TaskPriority';
import {TaskState} from '../../shared/TaskState';
import {User} from '../../shared/User';
import {ActivatedRoute, Router} from '@angular/router';
import {Task} from '../../shared/Task';
import {TaskService} from '../../service/task.service';
import {UserService} from '../../service/user.service';
import {ToastrService} from 'ngx-toastr';

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
  boardUsers: Array<User>;
  task: Task;

  name: string;
  description: string;
  state: number;
  assignedUser: number;

  constructor(private route: ActivatedRoute,
              private taskService: TaskService,
              private userService: UserService,
              private toastr: ToastrService,
              private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.boardId = +params.get('id');
    });
    this.route.params.subscribe(params => this.taskId = params.taskId);
    this.taskService.getTaskPriorities().subscribe(res => {
      this.taskPriorities = res;
    });
    this.taskService.getTaskStates().subscribe(res => {
      this.taskStates = res;
    });
    this.userService.getBoardUsers(this.boardId).subscribe(res => {
      this.boardUsers = res;
    });
    this.userService.getBoardUsers(this.boardId).subscribe(res => {
      this.boardUsers = res;
    });
    this.taskService.getTaskById(this.taskId).subscribe(res => {
      this.task = res;
    });
  }

  save(): any {
    this.taskService.updateTask(this.task).subscribe(res => {
      this.toastr.success('Task modified', 'Saved');
      this.router.navigate([`/boards/${this.boardId}`]);
    });
  }
}
