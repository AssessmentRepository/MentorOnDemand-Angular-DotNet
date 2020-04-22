import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorSearchPageComponent } from './mentor-search-page.component';

describe('MentorSearchPageComponent', () => {
  let component: MentorSearchPageComponent;
  let fixture: ComponentFixture<MentorSearchPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorSearchPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorSearchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
