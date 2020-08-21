import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveBoardComponent } from './leave-board.component';

describe('LeaveBoardComponent', () => {
  let component: LeaveBoardComponent;
  let fixture: ComponentFixture<LeaveBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaveBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
