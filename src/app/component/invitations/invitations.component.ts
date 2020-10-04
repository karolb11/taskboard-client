import { Component, OnInit } from '@angular/core';
import {Invitation} from '../../shared/Invitation';
import {InvitationService} from '../../service/invitation.service';

@Component({
  selector: 'app-invitations',
  templateUrl: './invitations.component.html',
  styleUrls: ['./invitations.component.css']
})
export class InvitationsComponent implements OnInit {

  invitations: Array<Invitation>;

  constructor(private invitationService: InvitationService) { }

  ngOnInit(): void {
    this.loadInvitations();
  }

  loadInvitations(): void {
    this.invitationService.getUserInvitations().subscribe(res => this.invitations = res);
  }

  accept(invitationId: number): void {
    this.invitationService.acceptInvitation(invitationId).subscribe(res => this.loadInvitations());
  }

  deny(invitationId: number): void {
    this.invitationService.removeInvitation(invitationId).subscribe(res => this.loadInvitations());
  }

}
