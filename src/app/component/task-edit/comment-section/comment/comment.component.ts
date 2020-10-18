import {Component, Input, OnInit} from '@angular/core';
import {Comment} from '../../../../shared/Comment';
import {RoleService} from '../../../../service/role.service';
import {LocalRoleName} from '../../../../shared/LocalRoleName';
import {GlobalRoleName} from '../../../../shared/GlobalRoleName';
import {CommentService} from '../../../../service/comment.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input()
  comment: Comment;
  inEdition = false;
  newCommentContent: string;

  constructor(private roleService: RoleService,
              private commentService: CommentService,
              private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  public isUserAbleToEdit(): boolean {
    if (this.roleService.currentUserId === this.comment.authorId ||
      this.roleService.currentLocalRole.name === LocalRoleName.OWNER ||
      this.roleService.currentRole.name === GlobalRoleName.ADMIN ||
      this.roleService.currentRole.name === GlobalRoleName.MOD) {
      return true;
    } else {
    return false;
    }
  }

  public openEditMode(): void {
    this.newCommentContent = this.comment.content;
    this.inEdition = true;
  }

  public edit(): void {
    this.commentService.updateComment(this.comment.id, this.newCommentContent)
      .subscribe(res => {
        this.toastr.success(res.message);
        this.comment.content = this.newCommentContent;
        this.inEdition = false;
      });
  }

}
