import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TaskPriority} from '../../shared/TaskPriority';
import {User} from '../../shared/User';
import {TaskState} from '../../shared/TaskState';
import {TaskService} from '../../service/task.service';
import {UserService} from '../../service/user.service';
import {SubTask} from '../../shared/SubTask';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {
  boardId: number;
  taskPriorities: Array<TaskPriority>;
  taskStates: Array<TaskState>;
  boardUsers: Array<User>;

  name: string;
  description: string;
  priority: number;
  state: number;
  assignedUser: number;
  subTasks: Array<SubTask>;

  constructor(private taskService: TaskService,
              private userService: UserService,
              private route: ActivatedRoute,
              private toastr: ToastrService,
              private router: Router) {
    this.subTasks = new Array<SubTask>();
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.boardId = +params.get('id');
    });
    this.taskService.getTaskPriorities().subscribe(res => {
      this.taskPriorities = res;
    });
    this.taskService.getTaskStates().subscribe(res => {
      this.taskStates = res;
    });
    this.userService.getBoardUsers(this.boardId).subscribe(res => {
      this.boardUsers = res;
    });
  }

  createTask(): any {
    this.taskService.createTask(
      this.name,
      this.description,
      this.boardId,
      this.assignedUser,
      this.priority,
      this.state,
      this.subTasks
    ).subscribe(res => {
      this.toastr.success(res.message);
      this.router.navigate([`/boards/${this.boardId}`]);
    });
  }

  clear() {
    this.name = null;
    this.description = null;
    this.priority = null;
    this.state = null;
    this.assignedUser = null;
  }

}
