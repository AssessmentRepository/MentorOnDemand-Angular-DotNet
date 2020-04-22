import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

export class Signup {
  constructor(
    public username: string,
    public password: string
  ) { }
}
@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {

  @Output() signupdata = new EventEmitter<Signup>();

  signupForm: FormGroup;
  public obj: any = {};

  constructor(private fb: FormBuilder,private router: Router) { }
  signupData: any;

  ngOnInit() {
    this.signupForm = this.fb.group({
      username: ["", [Validators.required]],
      password: ["", [Validators.required]]
    });
  }

  onSubmit() {
    this.obj = { ...this.signupForm.value, ...this.obj };
    this.signupForm.value;
    console.log("signupPageComponent -> onSubmit ->    this.signupForm.value",    this.signupForm.value); 

    if (this.signupForm.valid) {
      this.signupdata.emit(
        new Signup(
          this.signupForm.value.username,
          this.signupForm.value.password
        )
      );
    }
  }

  navpage() {
    this.router.navigateByUrl("app-login-page");
  } 
}
