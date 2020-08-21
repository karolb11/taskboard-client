import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './component/login-page/login-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NavigationComponent } from './component/navigation/navigation.component';
import { MyBoardsComponent } from './component/my-boards/my-boards.component';
import { BoardDetailsComponent } from './component/board-details/board-details.component';
import { CreateBoardComponent } from './component/create-board/create-board.component';
import {TaskWidgetComponent} from './component/task-widget/task-widget.component';
import {TransformPriorityNamePipe} from './shared/transform-priority-name.pipe';
import {AvatarModule} from 'ngx-avatar';
import { FirstLetterPipe } from './shared/first-letter.pipe';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { CreateTaskComponent } from './component/create-task/create-task.component';
import {TransformTaskStateNamePipe} from './shared/transform-task-state-name.pipe';
import { BoardOptionsComponent } from './component/board-options/board-options.component';
import { BoardSettingsComponent } from './component/board-options/board-settings/board-settings.component';
import { MembersManagementComponent } from './component/board-options/members-management/members-management.component';
import {TransformLocalRoleNamePipe} from './shared/transform-local-role-name.pipe';
import { InviteUserComponent } from './component/board-options/members-management/invite-user/invite-user.component';
import { LeaveBoardComponent } from './component/board-options/leave-board/leave-board.component';
import { MembersListComponent } from './component/board-options/members-management/members-list/members-list.component';
import { InvitationsListComponent } from './component/board-options/members-management/invitations-list/invitations-list.component';
import { TaskEditComponent } from './component/task-edit/task-edit.component';
import { SubtasksListComponent } from './component/subtasks-list/subtasks-list.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    NavigationComponent,
    MyBoardsComponent,
    BoardDetailsComponent,
    CreateBoardComponent,
    TaskWidgetComponent,
    TransformPriorityNamePipe,
    FirstLetterPipe,
    CreateTaskComponent,
    TransformTaskStateNamePipe,
    BoardOptionsComponent,
    BoardSettingsComponent,
    MembersManagementComponent,
    TransformLocalRoleNamePipe,
    InviteUserComponent,
    LeaveBoardComponent,
    MembersListComponent,
    InvitationsListComponent,
    TaskEditComponent,
    SubtasksListComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    AvatarModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
