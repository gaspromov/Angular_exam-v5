import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http/http.service';

@Component({
  selector: 'app-students-add',
  templateUrl: './students-add.component.html',
  styleUrls: ['./students-add.component.css']
})
export class StudentsAddComponent implements OnInit {
  addForm: FormGroup;

  constructor(
    public http: HttpService,
    public router: Router
  ) { }

  ngOnInit() {
    let disabled = false;
    this.addForm = new FormGroup({
      firstname: new FormControl( { value: '', disabled: disabled }, [ Validators.required ] ),
      secondname: new FormControl( { value: '', disabled: disabled }, [ Validators.required ] ),
      patronymic: new FormControl( { value: '', disabled: disabled } ),
      email: new FormControl( { value: '', disabled: disabled }, [ Validators.required ] ),
      phone: new FormControl( { value: '', disabled: disabled }, [ Validators.required ] ),
      birth: new FormControl( { value: '', disabled: disabled }, [ Validators.required ] ),
      group: new FormControl( { value: '', disabled: disabled }, [ Validators.required ] ),
      direction: new FormControl( { value: '', disabled: disabled }, [ Validators.required ] ),
    })
  }



  async onAddStudent(){
    await this.http.postStudent( this.addForm.value )
      .then( () => this.router.navigate( ['/students'] ) )
      .catch( console.log )
  }

}
