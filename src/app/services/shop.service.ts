import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import {ShirtModel} from '../models/ShirtModel'


@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private http:HttpClient) { }

  getAllShirts():Observable<ShirtModel[]>{
    return this.http.get<ShirtModel[]>("https://localhost:44382/api/Product/GetAllTShirts");
  }

  getAllHoodies():Observable<ShirtModel[]>{
    return this.http.get<ShirtModel[]>("https://localhost:44382/api/Product/GetAllHoodies");
  }

  getAllMaleTShirts(){
    return this.http.get<ShirtModel[]>("https://localhost:44382/api/Product/GetAllMaleTShirts");
  }

  getAllFemaleTShirts(){
    return this.http.get<ShirtModel[]>("https://localhost:44382/api/Product/GetAllFemaleTShirts");
  }

  

}
