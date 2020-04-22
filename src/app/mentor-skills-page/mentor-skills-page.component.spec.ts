import {
  async,
  ComponentFixture,
  TestBed,
  inject
} from "@angular/core/testing";
import { MentorSkillsPageComponent } from './mentor-skills-page.component';
import { ReactiveFormsModule } from "@angular/forms";
describe('MentorSkillsPageComponent', () => {
  let component: MentorSkillsPageComponent;
  let fixture: ComponentFixture<MentorSkillsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorSkillsPageComponent ],
      imports: [ReactiveFormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorSkillsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("form invalid when empty toBeFalsy()", () => {
    expect(component.mentorSkillsForm.valid).toBeFalsy();
  });

  
  it("username field validation toBeFalsy() toBeTruthy() ", () => {
    let errors = {};
    let username = component.mentorSkillsForm.controls["username"];
    expect(username.valid).toBeFalsy();

    // username field is required
    errors = username.errors || {};
    expect(errors["required"]).toBeTruthy();

    // Set username to something
    username.setValue("test");
    errors = username.errors || {};
    expect(errors["required"]).toBeFalsy();

    // Set username to something correct
    username.setValue("testname");
    errors = username.errors || {};
    expect(errors["required"]).toBeFalsy();
  });

  it("experience field validation toBeFalsy() toBeTruthy() ", () => {
    let errors = {};
    let experience = component.mentorSkillsForm.controls["experience"];
    expect(experience.valid).toBeFalsy();

    // experience field is required
    errors = experience.errors || {};
    expect(errors["required"]).toBeTruthy();

    // Set experience to something
    experience.setValue("test");
    errors = experience.errors || {};
    expect(errors["required"]).toBeFalsy();

    // Set experience to something correct
    experience.setValue("testname");
    errors = experience.errors || {};
    expect(errors["required"]).toBeFalsy();
  });

  it("time field validation toBeFalsy() toBeTruthy() ", () => {
    let errors = {};
    let time = component.mentorSkillsForm.controls["time"];
    expect(time.valid).toBeFalsy();

    // time field is required
    errors = time.errors || {};
    expect(errors["required"]).toBeTruthy();

    // Set time to something
    time.setValue("test");
    errors = time.errors || {};
    expect(errors["required"]).toBeFalsy();

    // Set time to something correct
    time.setValue("testname");
    errors = time.errors || {};
    expect(errors["required"]).toBeFalsy();
  });

  it("technologies field validation toBeFalsy() toBeTruthy() ", () => {
    let errors = {};
    let technologies = component.mentorSkillsForm.controls["technologies"];
    expect(technologies.valid).toBeFalsy();

    // technologies field is required
    errors = technologies.errors || {};
    expect(errors["required"]).toBeTruthy();

    // Set technologies to something
    technologies.setValue("test");
    errors = technologies.errors || {};
    expect(errors["required"]).toBeFalsy();

    // Set technologies to something correct
    technologies.setValue("testname");
    errors = technologies.errors || {};
    expect(errors["required"]).toBeFalsy();
  });
});
