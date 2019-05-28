import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SignUpModel, LogInModel } from '../models/SignUpModel';
import { SignUpService } from '../services/sign-up.service';
import { MatSnackBar,MatSnackBarConfig,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition, } from '@angular/material';
import {Router} from '@angular/router';
import {ErrorComponent} from "../error/error.component"
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  signUpForm: FormGroup;
  logInUser: LogInModel = new LogInModel();
  signUpUser: SignUpModel = new SignUpModel();
  passwordPattern = "/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=.,\-_!])([a-zA-Z0-9 @#$%^&+=*.,\-_!]){8,}$/";
  config; 

  constructor(private signUpService: SignUpService, private snackBar: MatSnackBar,
    private router: Router, private ngbModule:NgbModal) { }



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
        
window.alert("Error");
      }
    }
    this.signUpService.registerUser(this.signUpUser).subscribe(observer);

    this.signUpUser.Email = "";
    this.signUpUser.Password = "";
    this.signUpUser.PasswordConfirmed = "";
    this.signUpUser.FirstName = "";
    this.signUpUser.LastName = "";
  }

  logIn(form:NgForm){
    const observer={
      next:data=>{
      localStorage.setItem("shopToken", data['access_token']);
      this.router.navigateByUrl("/shop");
      },
      error: err=>{
        const modalRef = this.ngbModule.open(ErrorComponent);
        modalRef.componentInstance.error = "Please check your credentials";
      }
    }

    this.signUpService.logInUser(this.logInUser).subscribe(observer);
  }

  isUserLogged():boolean{
    let a = localStorage.getItem("shopToken");
return localStorage.getItem("shopToken") != null ? true : false;
  }
}
