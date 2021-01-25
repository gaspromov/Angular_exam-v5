import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http/http.service';

@Component({
  selector: 'app-students-view',
  templateUrl: './students-view.component.html',
  styleUrls: ['./students-view.component.css']
})
export class StudentsViewComponent implements OnInit {
  students: [{}];
  searchParams = {
    direction: '',
    group: '',
    secondname: ''
  }

  constructor(
    public http: HttpService
  ) { }

  async ngOnInit() {
    await this.getStudents();
  }

  async getStudents(){
    await this.http.getStudents()
      .then( (w: any) => this.students = this.setFullName(w) );
    
  }

  setFullName( students ){
    for ( let student of students ){
      student.fullname = `${student.secondname} ${student.firstname[0]} ${student.patronymic ? student.patronymic[0] : ''}`
    }
    return students
  }



}
