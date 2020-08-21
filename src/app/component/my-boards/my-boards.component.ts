import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../service/auth.service';
import {BoardService} from '../../service/board.service';

@Component({
  selector: 'app-my-boards',
  templateUrl: './my-boards.component.html',
  styleUrls: ['./my-boards.component.css']
})
export class MyBoardsComponent implements OnInit {

  boards = [];

  constructor(private authService: AuthService, private boardService: BoardService) { }

  ngOnInit(): void {
    this.boardService.getUsersBoard().subscribe(res => {
      this.boards = res;
    });
  }

  addBoard(board) {
    this.boards.push(board);
  }

}
