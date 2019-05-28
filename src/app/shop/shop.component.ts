import { Component, OnInit } from '@angular/core';
import { ShopService } from '../services/shop.service';
import { ShirtModel } from '../models/ShirtModel';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor(private shopService: ShopService) { }

  ngOnInit() {
    this.items = [];
    this.itemsToDisplay = [];
    this.getAllShirts();
    for (let i = 0; i < this.items.length; ++i) {
      this.itemsToDisplay.push(this.items[i]);
    }
  }
  public items: ShirtModel[];
  public itemsToDisplay: ShirtModel[];

  public hoodies;
  public hoodiesToDisplay;

  b64toBlob(b64Data, contentType, sliceSize) {
    contentType = contentType || '';
    sliceSize = sliceSize || 512;

    var byteCharacters = atob(b64Data);
    var byteArrays = [];

    for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      var slice = byteCharacters.slice(offset, offset + sliceSize);

      var byteNumbers = new Array(slice.length);
      for (var i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      var byteArray = new Uint8Array(byteNumbers);

      byteArrays.push(byteArray);
    }

    var blob = new Blob(byteArrays, { type: contentType });
    return blob;
  }

  createImageFromBlob(image: Blob, index) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      let blob = reader.result;
      this.items[index].image = URL.createObjectURL(blob);
    }, false);

    if (image) {
      reader.readAsDataURL(image);
    }
  }

  getAllShirts() {
    const observer = {
      next: data => {
        this.items = data;
        for (let i = 0; i < this.items.length; ++i) {
          let a = 'data:image/png;base64,' + this.items[i].image.img;
          this.items[i].image = a;
        }

      },
      error: err => {

        window.alert("Error");
      }
    }
    this.shopService.getAllShirts().subscribe(observer);
  }

  isUserLogged(): boolean {
    let a = localStorage.getItem("shopToken");
    return localStorage.getItem("shopToken") != null ? true : false;
  }

  getMenShirts() {
    for (let i = 0; i < this.items.length; ++i) {
      if(this.items[i].gender == 0)
      this.itemsToDisplay.push(this.items[i]);
    }
  }

  getWomenShirts() {
    for (let i = 0; i < this.items.length; ++i) {
      if(this.items[i].gender == 1)
      this.itemsToDisplay.push(this.items[i]);
    }
  }

  getHoodies(){
    const observer = {
      next: data => {
        this.hoodies = data;
        for (let i = 0; i < this.items.length; ++i) {
          let a = 'data:image/png;base64,' + this.hoodies[i].image.img;
          this.hoodies[i].image = a;
          this.hoodiesToDisplay.push(this.hoodies[i]);
        }

      },
      error: err => {
        window.alert("Error");
      }
    }
    this.shopService.getAllShirts().subscribe(observer);
  }
}
