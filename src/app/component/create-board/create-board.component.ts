import { Component, OnInit } from '@angular/core';
import {BoardService} from '../../service/board.service';

@Component({
  selector: 'app-create-board',
  templateUrl: './create-board.component.html',
  styleUrls: ['./create-board.component.css']
})
export class CreateBoardComponent implements OnInit {
  boardName: string;
  boardDescription: string;
  constructor(private boardService: BoardService) { }

  ngOnInit(): void {
  }

  createBoard(): any {
    this.boardService.createBoard(this.boardName, this.boardDescription);
  }

}
