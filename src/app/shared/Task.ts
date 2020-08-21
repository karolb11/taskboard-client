import {SubTask} from './SubTask';
import {TaskPriority} from './TaskPriority';
import {User} from './User';
import {TaskState} from './TaskState';

export class Task {
  id: number;
  name: string;
  description: string;
  assignedUser: User;
  state: TaskState;
  priority: TaskPriority;
  subTasks: Array<SubTask>;


  constructor(id: number, name: string, description: string, assignedUser: User, state: TaskState, priority: TaskPriority, subTasks: Array<SubTask>) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.assignedUser = assignedUser;
    this.state = state;
    this.priority = priority;
    this.subTasks = subTasks;
  }
}
