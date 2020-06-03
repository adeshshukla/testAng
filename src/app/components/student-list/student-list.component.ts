import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { Student2Service } from 'src/app/services/student2.service';
import { of, from } from 'rxjs';

@Component({
  selector: 'app1-student-list',
  template: `
<h2>
  Student List
</h2>
<br>

<table>
  <thead>
      <tr>
          <th>S No.</th>
          <th>Roll No.</th>
          <th>Name</th>
          <th>Class</th>
          <th>Age</th>
      </tr>
  </thead>
  <tbody>
  <tr *ngFor="let stud of arrStudentAsync|async; let i = index;">      
          <td>{{i+1}}</td>
          <td>{{stud.RollNo}}</td>
          <td>{{stud.Name}}</td>
          <td>{{stud.Class}}</td>
          <td>{{stud.Age}}</td> 
  </tr>
</tbody>
</table>

<h2>
  Session List from DB
</h2>
<br>

<table>
  <thead>
      <tr>
          <th>S No.</th>
          <th>Name</th>
          <th>Description</th>
          <th>IsActive</th>
      </tr>
  </thead>
  <tbody>

    <tr *ngFor="let session of arrSession; let i = index;">      
      <td>{{i+1}}</td>
      <td>{{session.Name}}</td>
      <td>{{session.Description}}</td>
      <td>{{session.IsActive}}</td>
    </tr>
</tbody>
</table>

  `,
  styles: [
  ]
})
export class StudentListComponent implements OnInit {

  arrStudent = [];
  arrSession = [];
  arrStudentAsync;

  constructor(private studService:Student2Service) { }
  
  ngOnInit(): void {
    // this.arrStudent = this.studService.getStudentList();

    // this.studService.getStudentListAsync().subscribe(studs=> this.arrStudent = studs);

    // Async pipe - 
    this.arrStudentAsync=this.studService.getStudentListAsync();

    this.getStudentFromDB();

  }

  getStudentFromDB(){
    this.studService.getSessionFromDB().subscribe(data => {
      console.log(data);
      this.arrSession = data['Content']
    },
    error => {
      console.log("Error print in Component");
      console.log(error);
    }
    );
  }

  updateSession(){

  }

}
