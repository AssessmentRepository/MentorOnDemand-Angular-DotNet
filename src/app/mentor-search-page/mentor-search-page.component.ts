import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
@Component({
  selector: 'app-mentor-search-page',
  templateUrl: './mentor-search-page.component.html',
  styleUrls: ['./mentor-search-page.component.css']
})
export class MentorSearchPageComponent implements OnInit {

  myForm: FormGroup;
  filteredMentors = [];
  MentorFilter = [
    {
      "TagId": 20,
      "Type": "Technology",
      "Value": 9,
      "Values": null,
      "DisplayText": "9 AM",
      "Order": null
    },
    {
      "TagId": 20,
      "Type": "Technology",
      "Value": 10,
      "Values": null,
      "DisplayText": "10 AM",
      "Order": null
    },
    {
      "TagId": 20,
      "Type": "Technology",
      "Value": 11,
      "Values": null,
      "DisplayText": "11 AM",
      "Order": null
    }]

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

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      filterMentor: ['']
    })
  }

  getValue(index) {
    if(index === 0)
      return { 
        lower: 0, 
        displayText: this.MentorFilter[index].DisplayText, 
        upper: this.MentorFilter[index].Value 
      };
    else {
      return { 
        lower: this.MentorFilter[index - 1].Value, 
        upper: this.MentorFilter[index].Value,
        displayText: `${this.MentorFilter[index - 1].DisplayText} - ${this.MentorFilter[index].DisplayText}`
      };
    }
  }

  ngOnInit() {
    this.filteredMentors = [...this.Timeslot[0].Products];

    this.myForm.get('filterMentor').valueChanges.subscribe(
      value => {
        console.log(value);
        this.filteredMentors = [...this.Timeslot[0].Products.filter(product => product.Time >= value.lower && product.Time <= value.upper )]
      }
    )
  }

}
