import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import {ShopComponent} from './shop/shop.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
 {path: "main", component: MainComponent},
 {path: "shop", component: ShopComponent},
 {path: "login", component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
