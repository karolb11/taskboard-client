import {Task} from './Task';

export interface BoardDetails {
  id: number;
  name: string;
  description: string;
  toDo: Array<Task>;
  inProgress: Array<Task>;
  done: Array<Task>;
}
