import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorTrainingsPageComponent } from './mentor-trainings-page.component';

describe('MentorTrainingsPageComponent', () => {
  let component: MentorTrainingsPageComponent;
  let fixture: ComponentFixture<MentorTrainingsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorTrainingsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorTrainingsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
