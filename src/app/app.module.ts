import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ShopComponent } from './shop/shop.component';
import { MainComponent } from './main/main.component';
import {HttpClientModule} from '@angular/common/http';
import { OurHistoryComponent } from './our-history/our-history.component';

@NgModule({
  declarations: [
    ProductComponent,
    HomeComponent,
    ShopComponent,
    MainComponent,
    OurHistoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
