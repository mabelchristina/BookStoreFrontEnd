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
  addbooksForm !: FormGroup;

  addToCart:boolean=false;
  constructor(
    private bookService: BookService,
    private router: Router,
    private _snackBar: MatSnackBar,
    private formBuilder: FormBuilder,
    public dialog: MatDialog
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
    

    
    // this.addbooksForm = this.formBuilder.group({
    //   bookName: ['', Validators.required],
    //   author: ['', Validators.required],
    //   description: ['', Validators.required],
    //   quantity: ['', Validators.required],
    //   price: ['', Validators.required],
    //   discountPrice: ['', Validators.required],
      

    // });
 // }

  // onSubmit() {

  //   this.submitted = true;

  //   if (this.addbooksForm.valid) {

  //     let reqData = {
  //       "bookName": this.addbooksForm.value.bookName,
  //       "author": this.addbooksForm.value.author,
  //       "description": this.addbooksForm.value.description,
  //       "quantity": this.addbooksForm.value.quantity,
  //       "price": this.addbooksForm.value.price,
  //       "discountPrice": this.addbooksForm.value.discountPrice,
          
  //     }
  //     this.bookService.addnewbookService(reqData).subscribe((response) => {
  //       console.log(response);
  //       this.router.navigate(['/admin'])
  //     })

  //   }
  //   else {
  //     console.log("invalid");

  //   }

  // }
  }
  addnewbook() {
    this.submitted = true;

    if (this.Addnewbookform.valid) {
      let reqData = {
        "bookName": this.Addnewbookform.value.bookName,
        "author": this.Addnewbookform.value.author,
        "description": this.Addnewbookform.value.description,
        "quantity": this.Addnewbookform.value.quantity,
        "price": this.Addnewbookform.value.price,
        "discountPrice": this.Addnewbookform.value.discountPrice
      }
      this.bookService.addnewbookService(reqData).subscribe((response) => {
        console.log(response);
        this._snackBar.open("Book Added Succesfully", '', {
          duration: 2000,
          panelClass: ['brown-snackbar']
        })   
        this.getallbooks();

      })

    }
  }

  openDialog(book: any) {
    const dialogRef = this.dialog.open(AddNewBookComponent, {
      width: "600px",
      height: "400px",
      data: book,

    });


    dialogRef.afterClosed().subscribe(result => {
      this.getallbooks()
      console.log(`Dialog result: ${result}`);

    });
  }


  deleteBook(book: any) {
    this.bookService.deleteBookService(book._id).subscribe((response: any) => {
      console.log(response);
      this._snackBar.open("Book Deleted Succesfully", '', {
        duration: 2000,
        panelClass: ['brown-snackbar']
      })   
      this.getallbooks();

    })
  }
}

