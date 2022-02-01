import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup/signup.component';
import { LoginComponent } from './components/login/login/login.component';
import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {  HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import { BookComponent } from './components/book/book/book.component';
import { GetAllBookComponent } from './components/getAllBook/get-all-book/get-all-book.component';
import {MatSelectModule} from '@angular/material/select';
import { OrderComponent } from './components/order/order/order.component';
import { CartComponent } from './components/cart/cart/cart.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatRadioModule} from '@angular/material/radio';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    DashboardComponent,
    BookComponent,
    GetAllBookComponent,
    OrderComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexModule,
    FlexLayoutModule,
    FormsModule,ReactiveFormsModule,MatFormFieldModule,MatInputModule,MatIconModule,MatCardModule,MatTabsModule,MatSnackBarModule,
    HttpClientModule,BrowserAnimationsModule,MatMenuModule,MatDividerModule,MatSelectModule,MatExpansionModule,MatRadioModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
