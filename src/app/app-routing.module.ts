import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MyBoardsComponent} from './component/my-boards/my-boards.component';
import {RouterModule, Routes} from '@angular/router';
import {BoardDetailsComponent} from './component/board-details/board-details.component';
import {CreateBoardComponent} from './component/create-board/create-board.component';
import {CreateTaskComponent} from './component/create-task/create-task.component';
import {BoardOptionsComponent} from './component/board-options/board-options.component';
import {TaskEditComponent} from './component/task-edit/task-edit.component';
import {InvitationsComponent} from './component/invitations/invitations.component';
import {SubscribedTasksOverviewComponent} from './component/subscribed-tasks-overview/subscribed-tasks-overview.component';
import {RegistrationComponent} from './component/registration/registration.component';
import {AuthGuard} from './auth/auth.guard';
import {LoginPageComponent} from './component/login-page/login-page.component';
import {NoAuthGuard} from './auth/no-auth.guard';
import {HomePageComponent} from './component/home-page/home-page.component';
import {MyProfileComponent} from './component/my-profile/my-profile.component';
import {AdminPanelComponent} from './component/admin-panel/admin-panel.component';
import {AdminRoleGuard} from './auth/admin-role.guard';



const routes: Routes = [
  {path: '', redirectTo: '/boards', pathMatch: 'full', canActivate: [AuthGuard]},
  {path: 'signin', component: LoginPageComponent, canActivate: [NoAuthGuard]},
  {path: 'signup', component: RegistrationComponent, canActivate: [NoAuthGuard]},
  {path: 'invitations', component: InvitationsComponent, canActivate: [AuthGuard]},
  {path: 'boards', component: MyBoardsComponent, canActivate: [AuthGuard]},
  {path: 'boards/create', component: CreateBoardComponent, canActivate: [AuthGuard]},
  {path: 'boards/:id', component: BoardDetailsComponent, canActivate: [AuthGuard]},
  {path: 'boards/:id/create-task', component: CreateTaskComponent, canActivate: [AuthGuard]},
  {path: 'boards/:id/options', component: BoardOptionsComponent, canActivate: [AuthGuard]},
  {path: 'boards/:id/:taskId', component: TaskEditComponent, canActivate: [AuthGuard]},
  {path: 'subscribedTasks', component: SubscribedTasksOverviewComponent, canActivate: [AuthGuard]},
  {path: 'my-profile', component: MyProfileComponent, canActivate: [AuthGuard]},
  {path: 'admin-panel', component: AdminPanelComponent, canActivate: [AuthGuard, AdminRoleGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
