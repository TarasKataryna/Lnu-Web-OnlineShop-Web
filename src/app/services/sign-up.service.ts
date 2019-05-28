import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import {SignUpModel} from '../models/SignUpModel';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(private httpClient: HttpClient) { 
  }

  registerUser(model:SignUpModel):Observable<string>{
    return this.httpClient.post<string>("https://localhost:44382/api/User/SignUp", model);
  }

  logInUser(model):Observable<string>{
    return this.httpClient.post<string>("https://localhost:44382/api/User/LogIn", model);
  }
}
