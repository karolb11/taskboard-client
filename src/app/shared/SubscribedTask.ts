import {TaskState} from './TaskState';
import {TaskPriority} from './TaskPriority';

export class SubscribedTask {
  id: number;
  boardId: number;
  name: string;
  description: string;
  assignedUser: string;
  state: TaskState;
  priority: TaskPriority;
  updatedAt: string;
}
