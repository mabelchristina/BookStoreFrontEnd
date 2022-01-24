import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  loginForm!: FormGroup;
  signupForm!: FormGroup;
  submitted = false;
  hide: boolean = true;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private userservice: UserService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email,
        ],
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
    this.signupForm = this.formBuilder.group({
      fullName: [
        '',
        [
          Validators.required
        ],
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.email,
        ],
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
      mobileNumber: [
        '',
        [Validators.required],
      ],
      service: ['advance'],
    });
  }
  onSignup() {
    this.submitted = true;
    console.log(this.signupForm.value);
    if (this.signupForm.valid) {
      let reqData = {
        service: this.signupForm.value.service,
        fullName: this.signupForm.value.fullName,
        email: this.signupForm.value.email,
        password: this.signupForm.value.password,
        phone: this.signupForm.value.mobileNumber,
      };
      console.log('valid');
      this.userservice.registerUserService(reqData).subscribe(
        (response: any) => {
          console.log(response);
        },
        (error: any) => {
          console.log(error);
        }
      );
    } else {
      console.log('invalid');
    }
  }

  onLogin() {
    console.log(this.loginForm.value);
    if (this.loginForm.valid) {
      let reqData = {
        service: this.loginForm.value.service,
        email: this.loginForm.value.email,
        password: this.loginForm.value.password,
      };

      console.log('valid');
      this.userservice.loginUserService(reqData).subscribe(
        (result: any) => {
          console.log(result);
          localStorage.setItem('token',result.result.accessToken);
          this._snackBar.open('Login Successfull', '', {
            duration: 2000,
          });
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}
