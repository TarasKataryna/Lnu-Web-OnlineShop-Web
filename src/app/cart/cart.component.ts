import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {CartModel} from '../models/CartModel'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.getFromLocalStorage();
  }

  products:CartModel[];

  getFromLocalStorage(){
   
      let array = JSON.parse(localStorage.getItem("productsInCart"));
      const observer = {
        next: data => {
            this.products=data;
        },
        error: err => {
          window.alert("Error");
        }
      }
    let params = new HttpParams();
    params = params.append('products', array.join(', '));
      this.http.get<CartModel[]>("https://localhost:44382/api/Product/GetProductsById",{params:params}).subscribe(observer)
   }
}
