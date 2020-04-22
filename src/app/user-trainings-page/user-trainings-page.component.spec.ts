import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTrainingsPageComponent } from './user-trainings-page.component';

describe('UserTrainingsPageComponent', () => {
  let component: UserTrainingsPageComponent;
  let fixture: ComponentFixture<UserTrainingsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTrainingsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTrainingsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
