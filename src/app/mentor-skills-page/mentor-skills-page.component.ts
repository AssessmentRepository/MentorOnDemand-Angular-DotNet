import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export class MentorSkills {
  constructor(
    public username: string,
    public experience: string,
    public time: string,
    public technologies: string
  ) { }
}
@Component({
  selector: 'app-mentor-skills-page',
  templateUrl: './mentor-skills-page.component.html',
  styleUrls: ['./mentor-skills-page.component.css']
})
export class MentorSkillsPageComponent implements OnInit {


  @Output() mentorSkillsdata = new EventEmitter<MentorSkills>();

  mentorSkillsForm: FormGroup;
  public obj: any = {};

  constructor(private fb: FormBuilder) { }
  mentorSkillsData: any;

  ngOnInit() {
    this.mentorSkillsForm = this.fb.group({
      username: ["", [Validators.required]],
      experience: ["", [Validators.required]],
      time: ["", [Validators.required]],
      technologies:["", [Validators.required]]
    });
  }

  onSubmit() {
    this.obj = { ...this.mentorSkillsForm.value, ...this.obj };
    this.mentorSkillsForm.value;
    console.log("MentorSkillsPageComponent -> onSubmit -> this.mentorSkillsForm.value;", this.mentorSkillsForm.value)

    if (this.mentorSkillsForm.valid) {
      this.mentorSkillsdata.emit(
        new MentorSkills(
          this.mentorSkillsForm.value.username,
          this.mentorSkillsForm.value.experience,
          this.mentorSkillsForm.value.time,
          this.mentorSkillsForm.value.technologies,
        )
      );
    }
  }

}
