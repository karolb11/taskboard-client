import { Component, OnInit } from '@angular/core';
import {BoardDetails} from '../../../shared/BoardDetails';
import {ActivatedRoute} from '@angular/router';
import {BoardService} from '../../../service/board.service';

@Component({
  selector: 'app-board-settings',
  templateUrl: './board-settings.component.html',
  styleUrls: ['./board-settings.component.css']
})
export class BoardSettingsComponent implements OnInit {
  boardName: string;
  boardDescription: string;
  id: number;

  constructor(private route: ActivatedRoute, private boardService: BoardService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.id = params.id);
    this.boardService.getBoardById(this.id).subscribe(res => {
      this.boardName = res.name;
      this.boardDescription = res.description;
    });
  }

  updateBoard(): any {
    this.boardService.updateBoard(this.id, this.boardName, this.boardDescription);
  }

}
