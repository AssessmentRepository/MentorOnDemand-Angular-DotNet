import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export class MentorProfile {
  constructor(
    public username: string,
    public experience: string,
    public time: string,
    public technologies: string
  ) { }
}
@Component({
  selector: 'app-mentor-profile-page',
  templateUrl: './mentor-profile-page.component.html',
  styleUrls: ['./mentor-profile-page.component.css']
})
export class MentorProfilePageComponent implements OnInit {

  @Output() mentorProfiledata = new EventEmitter<MentorProfile>();

  mentorProfileForm: FormGroup;
  public obj: any = {};

  constructor(private fb: FormBuilder) { }
  mentorProfileData: any;

  ngOnInit() {
    this.mentorProfileForm = this.fb.group({
      username: ["", [Validators.required]],
      experience: ["", [Validators.required]],
      time: ["", [Validators.required]],
      technologies:["", [Validators.required]]
    });
  }

  onSubmit() {
    this.obj = { ...this.mentorProfileForm.value, ...this.obj };
    this.mentorProfileForm.value;
    console.log("MentorProfilePageComponent -> onSubmit -> this.mentorProfileForm.value;", this.mentorProfileForm.value)
 
    if (this.mentorProfileForm.valid) {
      this.mentorProfiledata.emit(
        new MentorProfile(
          this.mentorProfileForm.value.username,
          this.mentorProfileForm.value.experience,
          this.mentorProfileForm.value.time,
          this.mentorProfileForm.value.technologies,
        )
      );
    }
  }

}
