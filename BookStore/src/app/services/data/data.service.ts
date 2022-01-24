import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  public getBook = new BehaviorSubject({data:[]});
  BookData = this.getBook.asObservable()
  changebookData(message:any){
    this.getBook.next(message)
    console.log("data in data service",message)
    
  }

}
