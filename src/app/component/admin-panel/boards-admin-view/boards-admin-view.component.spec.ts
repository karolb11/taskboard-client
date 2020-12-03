import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardsAdminViewComponent } from './boards-admin-view.component';

describe('BoardsAdminViewComponent', () => {
  let component: BoardsAdminViewComponent;
  let fixture: ComponentFixture<BoardsAdminViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardsAdminViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardsAdminViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
