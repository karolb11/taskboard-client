import { Component, OnInit } from '@angular/core';
import {TaskService} from '../../service/task.service';
import {SubscribedTask} from '../../shared/SubscribedTask';

@Component({
  selector: 'app-subscribed-tasks-overview',
  templateUrl: './subscribed-tasks-overview.component.html',
  styleUrls: ['./subscribed-tasks-overview.component.css']
})
export class SubscribedTasksOverviewComponent implements OnInit {
  tasks: Array<SubscribedTask>;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getSubscribedTasks().subscribe(res => this.tasks = res);
  }

  public dataLoaded(): boolean {
    return this.tasks != null;
}
}
