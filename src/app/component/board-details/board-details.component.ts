import { Component, OnInit } from '@angular/core';
import {BoardDetails} from '../../shared/BoardDetails';
import {ActivatedRoute} from '@angular/router';
import {LocalRole} from '../../shared/LocalRole';
import {BoardService} from '../../service/board.service';
import {LocalRoleName} from '../../shared/LocalRoleName';
import {faPlusSquare} from '@fortawesome/free-regular-svg-icons';
import {faCog} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-board-details',
  templateUrl: './board-details.component.html',
  styleUrls: ['./board-details.component.css']
})
export class BoardDetailsComponent implements OnInit {
  id: number;
  board: BoardDetails;
  plusIcon = faPlusSquare;
  optionsIcon = faCog;

  constructor(private route: ActivatedRoute, private boardService: BoardService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.id = params.id);
    this.boardService.getBoardById(this.id).subscribe(res => this.board = res);
  }

  dataLoaded(): boolean {
    return this.board != null;
  }
}
