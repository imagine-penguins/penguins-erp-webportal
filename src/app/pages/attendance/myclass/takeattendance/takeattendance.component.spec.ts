import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeAttendanceComponent } from './takeattendance.component';

describe('TakeAttendanceComponent', () => {
  let component: TakeAttendanceComponent;
  let fixture: ComponentFixture<TakeAttendanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakeAttendanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
