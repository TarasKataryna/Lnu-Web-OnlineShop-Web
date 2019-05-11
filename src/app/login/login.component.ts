import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SignUpModel } from '../models/SignUpModel';
import { SignUpService } from '../services/sign-up.service';
import { MatSnackBar,MatSnackBarConfig,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition, } from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  signUpForm: FormGroup;
  signUpUser: SignUpModel = new SignUpModel();
  passwordPattern = "/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=.,\-_!])([a-zA-Z0-9 @#$%^&+=*.,\-_!]){8,}$/";
  config; 

  constructor(private signUpService: SignUpService, private snackBar: MatSnackBar,
    private router: Router) { }



  ngOnInit() {
    this.config = new MatSnackBarConfig();
     this.config = new MatSnackBarConfig();
    this.config.panelClass = ['background-red'];
    this.config.verticalPosition = 'bottom';
    this.config.horizontalPosition = 'center';
  }


  registerUser(form: NgForm) {
   

    const observer = {
      next: data => {
        localStorage.setItem("shopToken", data['access_token']);
        this.router.navigateByUrl("/shop");
      },
      error: err => {
        
this.snackBar.open("Error", "Ok", this.config);
      }
    }
    this.signUpService.registerUser(this.signUpUser).subscribe(observer);

    this.signUpUser.Email = "";
    this.signUpUser.Password = "";
    this.signUpUser.PasswordConfirmed = "";
    this.signUpUser.FirstName = "";
    this.signUpUser.LastName = "";
  }
}
