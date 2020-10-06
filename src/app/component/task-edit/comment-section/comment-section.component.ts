import { Component, OnInit } from '@angular/core';
import {CommentService} from '../../../service/comment.service';
import {TaskService} from '../../../service/task.service';
import {ActivatedRoute} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-comment-section',
  templateUrl: './comment-section.component.html',
  styleUrls: ['./comment-section.component.css']
})
export class CommentSectionComponent implements OnInit {
  taskId: number;
  comments: Array<Comment>;
  newComment: string;
  constructor(
    private route: ActivatedRoute,
    private commentService: CommentService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.taskId = params.taskId);
    this.loadComments();
  }

  private loadComments() {
    this.commentService.getComment(this.taskId).subscribe(res => this.comments = res);
  }

  addNewComment(): void {
    this.commentService.createComment(this.taskId, this.newComment).subscribe(res => {
      this.toastr.success('Task commented');
      this.loadComments();
    });
  }

}
