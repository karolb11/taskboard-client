import {Component, Input, OnInit} from '@angular/core';
import {Task} from '../../shared/Task';

@Component({
  selector: 'app-task-widget',
  templateUrl: './task-widget.component.html',
  styleUrls: ['./task-widget.component.css']
})
export class TaskWidgetComponent implements OnInit {

  @Input()
  task: Task;

  constructor() { }

  ngOnInit(): void {
  }

  getColor() {
    switch (this.task.state) {
      case 'TASK_STATE_TO_DO': return 'bg-secondary';
      case 'TASK_STATE_IN_PROGRESS': return 'bg-primary';
      case 'TASK_STATE_DONE': return 'bg-success';
    }
  }

  getStateName() {
    switch (this.task.state) {
      case 'TASK_STATE_TO_DO': return 'To Do';
      case 'TASK_STATE_IN_PROGRESS': return 'In Progress';
      case 'TASK_STATE_DONE': return 'Done';
    }
  }

}
