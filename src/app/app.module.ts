import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {APP_BASE_HREF} from '@angular/common';
import { AlertModule } from 'ngx-bootstrap';
import {MatCardModule} from '@angular/material/card';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { ShopComponent } from './shop/shop.component';
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { ErrorComponent } from './error/error.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { GenderPipe } from './pipes/gender.pipe';
import { CartComponent } from './cart/cart.component';
import {MatListModule} from '@angular/material/list';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    ShopComponent,
    ErrorComponent,
    GenderPipe,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    AlertModule.forRoot(),
    MatCardModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSnackBarModule,
    NgbModule,
    MatListModule,
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent,ErrorComponent]
})
export class AppModule { }
