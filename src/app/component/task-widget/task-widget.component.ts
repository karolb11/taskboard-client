import {Component, Input, OnInit} from '@angular/core';
import {Task} from '../../shared/Task';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-widget',
  templateUrl: './task-widget.component.html',
  styleUrls: ['./task-widget.component.css']
})
export class TaskWidgetComponent implements OnInit {

  @Input()
  task: Task;
  faEdit = faEdit;

  constructor() { }

  ngOnInit(): void {
  }

  getColor(): any {
    switch (this.task.priority.name) {
      case 'TASK_PRIORITY_LOW': return 'success';
      case 'TASK_PRIORITY_NORMAL': return 'primary';
      case 'TASK_PRIORITY_URGENT': return 'warning';
      case 'TASK_PRIORITY_CRITICAL': return 'danger';
    }
  }

  getStateName(): any {
    switch (this.task.state.name) {
      case 'TASK_STATE_TO_DO': return 'To Do';
      case 'TASK_STATE_IN_PROGRESS': return 'In Progress';
      case 'TASK_STATE_DONE': return 'Done';
    }
  }

}
