import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  token: any;
  booksArray: any;

  constructor(private httpService: HttpService) { }
  getBooksService() {
    console.log("data is in books service",);
      let options = {
        headers: new HttpHeaders({
          'Content-type': 'application/json',
        })
      }
      return this.httpService.Getservice('get/book', false, options);
  }
}
