import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { MentorCalendarPageComponent } from './mentor-calendar-page/mentor-calendar-page.component';
import { MentorProfilePageComponent } from './mentor-profile-page/mentor-profile-page.component';
import { MentorSearchPageComponent } from './mentor-search-page/mentor-search-page.component';
import { MentorSkillsPageComponent } from './mentor-skills-page/mentor-skills-page.component';
import { MentorTrainingsPageComponent } from './mentor-trainings-page/mentor-trainings-page.component';
import { TrainingPageComponent } from './training-page/training-page.component';
import { UserTrainingsPageComponent } from './user-trainings-page/user-trainings-page.component';


const routes: Routes = [
  { path: "app-login-page", component: LoginPageComponent },
  { path: "app-signup-page", component: SignupPageComponent },
  { path: "app-mentor-calendar-page",component: MentorCalendarPageComponent },
  { path: "app-mentor-profile-page",component: MentorProfilePageComponent },
  { path: "app-mentor-search-page", component: MentorSearchPageComponent },
  { path: "app-mentor-skills-page",component: MentorSkillsPageComponent },
  { path: "app-mentor-trainings-page",component: MentorTrainingsPageComponent },
  { path: "app-training-page",component: TrainingPageComponent },
  { path: "app-user-trainings-page",component: UserTrainingsPageComponent },
  { path: "**", redirectTo: "app-login-page" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
