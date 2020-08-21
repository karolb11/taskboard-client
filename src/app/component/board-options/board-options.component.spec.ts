import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardOptionsComponent } from './board-options.component';

describe('BoardOptionsComponent', () => {
  let component: BoardOptionsComponent;
  let fixture: ComponentFixture<BoardOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
