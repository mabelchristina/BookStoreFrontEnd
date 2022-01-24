import { Component, Input, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book/book.service';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  subscription:any;
  message:any;
  book:any;
  id:any;

  constructor(private bookService:BookService,private data:DataService) { }

  ngOnInit(): void {
    this.subscription = this.data.getBook.subscribe(message => {
      this.message = message;
      this.book=message.data[0]
  })
}
addtobag(){

 
}
}
