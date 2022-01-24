import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from './http/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
token:any
  constructor(private httpService: HttpService) {
    this.token = localStorage.getItem('token')
   }


  registerUserService(reqPayload: any) {
    console.log(reqPayload);
    let headers = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
  
      })
  
    }
    return this.httpService.postService('registration', reqPayload, true, headers)
  }
  loginUserService(reqData: any) {
    let headers = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    }
    return this.httpService.postService('login', reqData, true, headers)
  }
}
