import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin/admin.component';
import { BookComponent } from './components/book/book/book.component';
import { CartComponent } from './components/cart/cart/cart.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { GetAllBookComponent } from './components/getAllBook/get-all-book/get-all-book.component';
import { LoginComponent } from './components/login/login/login.component';
import { OrderComponent } from './components/order/order/order.component';
import { SignupComponent } from './components/signup/signup/signup.component';

const routes: Routes = [
  {path:'', redirectTo:"signup", pathMatch:'full' },
  { path: 'log-in', component: LoginComponent },
  {path:'signup',component:SignupComponent},
  {
    path:'dashboard',component:DashboardComponent,
    children: [
      { path: '', redirectTo: 'get-all-books', pathMatch: 'full' },
      { path: 'get-all-books', component: GetAllBookComponent },
      {path:'book',component:BookComponent},
      {path:'orderplaced',component:OrderComponent},
      {path:'cart',component:CartComponent},
      {path:'admin',component:AdminComponent}

    ]
  },
  {
path:'book',component:BookComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
