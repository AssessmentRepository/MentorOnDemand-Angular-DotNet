import { Component } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mentorOnDemand';
  constructor(private router: Router) { }
  MentorCalendarpage() {
    this.router.navigateByUrl("app-mentor-calendar-page");
  }
  MentorProfilepage() {
    this.router.navigateByUrl("app-mentor-profile-page");
  }
  MentorSearchpage() {
    this.router.navigateByUrl("app-mentor-search-page");
  }
  MentorTrainingspage() {
    this.router.navigateByUrl("app-mentor-trainings-page");
  }
  MentorSkillspage() {
    this.router.navigateByUrl("app-mentor-skills-page");
  }
  Trainingpage() {
    this.router.navigateByUrl("app-training-page");
  }
  UserTrainingspage() {
    this.router.navigateByUrl("app-user-trainings-page");
  }
  Logoutpage(){
    this.router.navigateByUrl("app-login-page");
  }
}
