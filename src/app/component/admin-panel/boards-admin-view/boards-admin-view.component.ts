import { Component, OnInit } from '@angular/core';
import {BoardService} from '../../../service/board.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-boards-admin-view',
  templateUrl: './boards-admin-view.component.html',
  styleUrls: ['./boards-admin-view.component.css']
})
export class BoardsAdminViewComponent implements OnInit {
  boards = [];
  constructor(private boardService: BoardService,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.loadBoards();
  }

  private loadBoards(): void {
    this.boardService.getAllBoards().subscribe(res => {
      this.boards = res;
    });
  }

  public dataLoaded(): boolean {
    return this.boards.length > 0;
  }

  public archiveBoard(id: number): void {
    this.boardService.archiveBoard(id).subscribe(res => {
      this.toastr.success('Board archived');
      this.loadBoards();
    });
  }

}
