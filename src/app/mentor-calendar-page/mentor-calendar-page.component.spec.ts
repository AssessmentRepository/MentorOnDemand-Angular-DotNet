import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorCalendarPageComponent } from './mentor-calendar-page.component';

describe('MentorCalendarPageComponent', () => {
  let component: MentorCalendarPageComponent;
  let fixture: ComponentFixture<MentorCalendarPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorCalendarPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorCalendarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
