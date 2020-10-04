import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribedTasksOverviewComponent } from './subscribed-tasks-overview.component';

describe('SubscribedTasksOverviewComponent', () => {
  let component: SubscribedTasksOverviewComponent;
  let fixture: ComponentFixture<SubscribedTasksOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscribedTasksOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscribedTasksOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
