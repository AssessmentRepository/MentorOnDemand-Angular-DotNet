import {
  async,
  ComponentFixture,
  TestBed,
  inject
} from "@angular/core/testing";
import { SignupPageComponent } from './signup-page.component';
import { ReactiveFormsModule } from "@angular/forms";
describe('SignupPageComponent', () => {
  let component: SignupPageComponent;
  let fixture: ComponentFixture<SignupPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("form invalid when empty toBeFalsy()", () => {
    expect(component.signupForm.valid).toBeFalsy();
  });

  
  it("username field validation toBeFalsy() toBeTruthy() ", () => {
    let errors = {};
    let username = component.signupForm.controls["username"];
    expect(username.valid).toBeFalsy();

    // username field is required
    errors = username.errors || {};
    expect(errors["required"]).toBeTruthy();

    // Set username to something
    username.setValue("test");
    errors = username.errors || {};
    expect(errors["required"]).toBeFalsy();

    // Set username to something correct
    username.setValue("testname@test.com");
    errors = username.errors || {};
    expect(errors["required"]).toBeFalsy();
  });

  it("password field validation toBeFalsy() toBeTruthy() ", () => {
    let errors = {};
    let password = component.signupForm.controls["password"];
    expect(password.valid).toBeFalsy();

    // password field is required
    errors = password.errors || {};
    expect(errors["required"]).toBeTruthy();

    // Set password to something
    password.setValue("test");
    errors = password.errors || {};
    expect(errors["required"]).toBeFalsy();

    // Set password to something correct
    password.setValue("test@1234");
    errors = password.errors || {};
    expect(errors["required"]).toBeFalsy();
  });
});
