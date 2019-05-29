import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {CartModel} from '../models/CartModel'
import { forcart } from '../models/forcart';

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
      let string:string = "";
      for(let i=0;i<array.length-1;++i){
        string += array[i] + ",";
      }
      debugger;
      string += array[array.length-1];
    let params = new HttpParams();
    params = params.append('prod',array)
    let prod: forcart = new forcart();
    prod.products = array;
    let arr = JSON.stringify(array);
    //params = params.append("prod", string);
      this.http.get<CartModel[]>("https://localhost:44382/api/Product/GetForCart",{params:params}).subscribe(observer)
   }
}
