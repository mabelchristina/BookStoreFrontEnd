import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/services/book/book.service';
import { DataService } from 'src/app/services/data/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-get-all-book',
  templateUrl: './get-all-book.component.html',
  styleUrls: ['./get-all-book.component.scss']
})
export class GetAllBookComponent implements OnInit {
  booksArray: any;
  token: any;
  book:any;
  subscription!: Subscription;

  constructor(private booksService:BookService,private router:Router,private data:DataService) { }

  ngOnInit(): void {
    this.getBooks();
  }
  getBooks() {

    this.booksService.getBooksService().subscribe((response: any) => {

        console.log(response.result)

        this.booksArray = response.result;

        console.log("getBooksArray", this.booksArray);

      })
  }
  bookDetails(books:any){
    console.log("book details",books);
    this.book=books;
    this.router.navigateByUrl('/dashboard/book');
    let Arraydata={
      data:[this.book]
    }
    this.data.changebookData(Arraydata)
  }


}
