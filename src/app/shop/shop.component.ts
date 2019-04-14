import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.items = [];
    this.items.push("aaaaaa");
    this.items.push("bbbbbb");
    this.items.push("cccccc");
    this.items.push("dddddd");
    this.items.push("eeeeee");
  }
public items:String[];
}
