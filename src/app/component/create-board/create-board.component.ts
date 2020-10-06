import { Component, OnInit } from '@angular/core';
import {BoardService} from '../../service/board.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-create-board',
  templateUrl: './create-board.component.html',
  styleUrls: ['./create-board.component.css']
})
export class CreateBoardComponent implements OnInit {
  boardName: string;
  boardDescription: string;
  constructor(private boardService: BoardService,
              private toastr: ToastrService,
              private router: Router) { }

  ngOnInit(): void {
  }

  createBoard(): any {
    this.boardService.createBoard(this.boardName, this.boardDescription)
      .subscribe(res => {
        this.toastr.success("Board created", "Saved");
        this.router.navigate(['/boards']);
      });
  }

}
