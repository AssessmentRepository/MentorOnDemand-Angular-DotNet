import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mentor-trainings-page',
  templateUrl: './mentor-trainings-page.component.html',
  styleUrls: ['./mentor-trainings-page.component.css']
})
export class MentorTrainingsPageComponent implements OnInit {

  filteredMentors = [];
  Timeslot = [
    {
      "Products": [
        {
          "ProductId": 206419,
          "Time": 9.15,
          "TimeLabel": "9.15 AM",
          "Technology": "Angular",
          "status":"Completed",
        },
        {
          "ProductId": 206419,
          "Time": 10.15,
          "TimeLabel": "10.15 AM",
          "Technology": "Blockchain",
          "status":"Approved",
        },
        {
          "ProductId": 206419,
          "Time": 11,
          "TimeLabel": "11 AM",
          "Technology": "C And C ++",
          "status":"Proposed",
        },
        {
          "ProductId": 206419,
          "Time": 9.30,
          "TimeLabel": "9.30 AM",
          "Technology": "Java",
          "status":"Completed",
        },
        {
          "ProductId": 206419,
          "Time": 10,
          "TimeLabel": "10 AM",
          "Technology": "Big Data",
          "status":"Approved",
        },
        {
          "ProductId": 206419,
          "Time": 9,
          "TimeLabel": "9 AM",
          "Technology": "Artificial Intelligence",
          "status":"Progress states",
        }
      ]
    }]
  constructor() {
  
   }

  ngOnInit() {

    this.filteredMentors = [...this.Timeslot[0].Products];
  }

}
