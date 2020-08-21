import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MyBoardsComponent} from './component/my-boards/my-boards.component';
import {RouterModule, Routes} from '@angular/router';
import {BoardDetailsComponent} from './component/board-details/board-details.component';
import {CreateBoardComponent} from './component/create-board/create-board.component';
import {CreateTaskComponent} from './component/create-task/create-task.component';
import {BoardOptionsComponent} from './component/board-options/board-options.component';
import {TaskEditComponent} from './component/task-edit/task-edit.component';



const routes: Routes = [
  {path: 'boards', component: MyBoardsComponent},
  {path: 'boards/create', component: CreateBoardComponent},
  {path: 'boards/:id', component: BoardDetailsComponent},
  {path: 'boards/:id/create-task', component: CreateTaskComponent},
  {path: 'boards/:id/options', component: BoardOptionsComponent},
  {path: 'boards/:id/:taskId', component: TaskEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
