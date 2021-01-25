import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/services/http/http.service';

@Component({
  selector: 'app-students-edit',
  templateUrl: './students-edit.component.html',
  styleUrls: ['./students-edit.component.css']
})
export class StudentsEditComponent implements OnInit {
  student;
  studentId: string;
  editForm: FormGroup;

  constructor(
    public activatedRoute: ActivatedRoute,
    public http: HttpService,
    public router: Router
  ) { 
    this.activatedRoute.params.subscribe( params => {
      this.studentId = params.id;
    })
  }

  async ngOnInit() {
    await this.getStudentById();

    if (this.student){
      let disabled = false;
      this.editForm = new FormGroup({
        firstname: new FormControl( { value: this.student.firstname , disabled: disabled }, [ Validators.required ] ),
        secondname: new FormControl( { value: this.student.secondname, disabled: disabled }, [ Validators.required ] ),
        patronymic: new FormControl( { value: this.student.patronymic || '', disabled: disabled } ),
        email: new FormControl( { value: this.student.email, disabled: disabled }, [ Validators.required ] ),
        phone: new FormControl( { value: this.student.phone, disabled: disabled }, [ Validators.required ] ),
        birth: new FormControl( { value: this.student.birth, disabled: disabled }, [ Validators.required ] ),
        group: new FormControl( { value: this.student.group, disabled: disabled }, [ Validators.required ] ),
        direction: new FormControl( { value: this.student.direction, disabled: disabled }, [ Validators.required ] ),
      })
    }

  }

  async getStudentById(){
    await this.http.getStudent( this.studentId )
      .then( w => this.student = w )
      .catch( e => { if (e.status == 404) this.router.navigate(['/students']) })
  }

  async onDeleteStudent(){
    await this.http.deleteStudent( this.studentId )
      .then( w => this.router.navigate(['/students']) )
  }

  async onEditStudent(){
    await this.http.putStudent( this.editForm.value, this.studentId )
      .then( w => this.router.navigate(['/students']) )
  }

}
