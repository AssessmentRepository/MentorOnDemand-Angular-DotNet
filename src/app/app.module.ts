import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { MentorSearchPageComponent } from './mentor-search-page/mentor-search-page.component';
import { MentorTrainingsPageComponent } from './mentor-trainings-page/mentor-trainings-page.component';
import { MentorCalendarPageComponent } from './mentor-calendar-page/mentor-calendar-page.component';
import { TrainingPageComponent } from './training-page/training-page.component';
import { MentorProfilePageComponent } from './mentor-profile-page/mentor-profile-page.component';
import { MentorSkillsPageComponent } from './mentor-skills-page/mentor-skills-page.component';
import { UserTrainingsPageComponent } from './user-trainings-page/user-trainings-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    SignupPageComponent,
    MentorSearchPageComponent,
    MentorTrainingsPageComponent,
    MentorCalendarPageComponent,
    TrainingPageComponent,
    MentorProfilePageComponent,
    MentorSkillsPageComponent,
    UserTrainingsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
