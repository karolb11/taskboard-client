import { Component, OnInit } from '@angular/core';
import {faCheck} from '@fortawesome/free-solid-svg-icons/faCheck';
import {SubscribeService} from '../../../service/subscribe.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-subscribe-button',
  templateUrl: './subscribe-button.component.html',
  styleUrls: ['./subscribe-button.component.css']
})
export class SubscribeButtonComponent implements OnInit {
  subscribed: boolean;
  taskId: number;
  checkIcon = faCheck;

  constructor(private route: ActivatedRoute,
              private subscribeService: SubscribeService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.taskId = params.taskId);
    this.getSubscriptionStatus();
  }

  getSubscriptionStatus() {
    this.subscribeService.isTaskSubscribedByUser(this.taskId)
      .subscribe(res => this.subscribed = res);
  }

  createSubscription() {
    this.subscribeService.createSubscription(this.taskId)
      .subscribe(res => this.getSubscriptionStatus());
  }

  cancelSubscription() {
    this.subscribeService.cancelSubscription(this.taskId)
      .subscribe(res => this.getSubscriptionStatus());
  }
}
