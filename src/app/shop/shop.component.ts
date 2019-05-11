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
    this.itemsPhoto = [];
    this.getAllShirts();
    /* this.items.push("aaaaaa");
     this.items.push("bbbbbb");
     this.items.push("cccccc");
     this.items.push("dddddd");
     this.items.push("eeeeee");*/
  }
  public items: ShirtModel[];
  public itemsPhoto;

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

var blob = new Blob(byteArrays, {type: contentType});
return blob;
}

createImageFromBlob(image: Blob,index) {
  let reader = new FileReader();
  reader.addEventListener("load", () => {
    let blob= reader.result;
     this.items[index].image = URL.createObjectURL(blob); 
  }, false);

  if (image) {
     reader.readAsDataURL(image);
  }
 }

  getAllShirts() {
    const observer = {
      next: data => {
        debugger;
        this.items = data;
        for(let i=0;i<this.items.length;++i){
        /* let a = this.b64toBlob(this.items[i].image.img,'data:image/png',512);let url =URL.createObjectURL(a);
         this.items[i].image = new Image();
         this.items[i].image.src = url.split(':')[2] + ':'+ url.split(':')[3]; 
         this.items[i].image.src = url;*/

         let a = 'data:image/png;base64,'+ this.items[i].image.img;
         this.items[i].image = a;

        }
      },
      error: err => {

        window.alert("Error");
      }
    }
    this.shopService.getAllShirts().subscribe(observer);
  }
  isUserLogged():boolean{
    let a = localStorage.getItem("shopToken");
return localStorage.getItem("shopToken") == null ? true : false;
  }
}
