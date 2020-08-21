import {Component, Input, OnInit} from '@angular/core';
import {SubTask} from '../../shared/SubTask';

@Component({
  selector: 'app-subtasks-list',
  templateUrl: './subtasks-list.component.html',
  styleUrls: ['./subtasks-list.component.css']
})
export class SubtasksListComponent implements OnInit {

  @Input()
  subTasks: Array<SubTask>;
  name: string;

  constructor() { }

  add(): void {
    const subTask = new SubTask();
    this.subTasks.push(subTask);
    this.name = '';
  }

  remove(subTask: SubTask): void {
    this.subTasks = this.subTasks.filter(i => i !== subTask);
  }

  ngOnInit(): void {
  }

}
