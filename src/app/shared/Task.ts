import {SubTask} from './SubTask';
import {TaskPriority} from './TaskPriority';
import {BoardUser} from './BoardUser';
import {TaskState} from './TaskState';

export class Task {
  public id: number;
  public name: string;
  public description: string;
  public assignedUser: BoardUser;
  public state: TaskState;
  public priority: TaskPriority;
  public subTasks: Array<SubTask>;


  constructor(id: number, name: string, description: string, assignedUser: BoardUser, state: TaskState, priority: TaskPriority, subTasks: Array<SubTask>) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.assignedUser = assignedUser;
    this.state = state;
    this.priority = priority;
    this.subTasks = subTasks;
  }
}
