import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BookService } from 'src/app/services/book/book.service';
import { AddNewBookComponent } from '../../addNewBook/add-new-book/add-new-book.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  adminBookList: any;
  totallength: any;
  BookCount: any;
  Addnewbookform!: FormGroup;
  UpdateForm!: FormGroup;
  submitted = false;
  constructor(
    private bookService: BookService,
    private router: Router,
    private _snackBar: MatSnackBar,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.Addnewbookform = this.formBuilder.group({
      bookName: ['', [Validators.required]],
      author: ['', [Validators.required]],
      description: ['', [Validators.required]],
      quantity: ['', [Validators.required]],
      price: ['', [Validators.required]],
      discountPrice: ['', [Validators.required]],
      service: ['advance'],
    });
    this.getallbooks();
  }
  getallbooks() {
    this.bookService.getBooksService().subscribe((response: any) => {
      console.log(response);
      this.adminBookList = response.result;
      this.adminBookList.reverse();
      this.totallength = response.result.length;
      this.BookCount = response.result.length;
      console.log('BookList are', this.adminBookList);
      console.log(this.BookCount);
    });
  }
  
}
