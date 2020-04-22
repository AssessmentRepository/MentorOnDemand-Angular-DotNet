import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

export class Login {
  constructor(
    public username: string,
    public password: string
  ) { }
}
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  @Output() logindata = new EventEmitter<Login>();

  loginForm: FormGroup;
  public obj: any = {};

  constructor(private fb: FormBuilder,private router: Router) { }
  loginData: any;

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ["", [Validators.required]],
      password: ["", [Validators.required]]
    });
  }

  onSubmit() {
    this.obj = { ...this.loginForm.value, ...this.obj };
    this.loginForm.value;
    console.log("LoginPageComponent -> onSubmit ->    this.loginForm.value",    this.loginForm.value); 

    if (this.loginForm.valid) {
      this.logindata.emit(
        new Login(
          this.loginForm.value.username,
          this.loginForm.value.password
        )
      );
    }
    this.router.navigateByUrl("app-mentor-search-page");
  }
  navpage() {
    this.router.navigateByUrl("app-signup-page");
  } 
}
