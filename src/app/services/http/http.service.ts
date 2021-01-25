import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API } from './API';

@Injectable({
  providedIn: 'root'
})
export class HttpService extends API {
  httpHeaders: HttpHeaders;

  constructor(
    httpClient: HttpClient
  ) { 
    super(httpClient);
    this.httpHeaders = new HttpHeaders()
      .append('content-type', 'application/json');
  }


  async getStudents(){
    return await this.get('students', this.httpHeaders).toPromise();
  }

  async getStudent(id){
    return await this.get( `students/${id}`, this.httpHeaders ).toPromise();
  }

  async deleteStudent( id ){
    return await this.delete( `students/${id}`, this.httpHeaders ).toPromise();
  }

  async postStudent( data ){
    return await this.post( `students`, data, this.httpHeaders ).toPromise();
  }

  async putStudent( data, id ){
    return await this.put( `students/${id}`, data, this.httpHeaders ).toPromise();
  }

}
