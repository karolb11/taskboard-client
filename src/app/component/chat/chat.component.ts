import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ChatService} from '../../service/chat.service';
import {ChatMessage} from '../../shared/ChatMessage';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  messages: Array<ChatMessage>;
  boardId: number;
  newMessage: string;

  constructor(private route: ActivatedRoute, private chatService: ChatService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.boardId = params.id);
    this.loadMessages();
  }

  loadMessages(): void {
    this.chatService.getChatMessagesByBoardId(this.boardId).subscribe(res => this.messages = res.reverse());
  }

  addNewMessage(): any {
    this.chatService.sendMessage(this.newMessage, this.boardId).subscribe(res => this.loadMessages());
    this.newMessage = '';
  }
}
