import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ShopComponent } from './shop/shop.component';
import { MainComponent } from './main/main.component';
import {HttpClientJsonpModule, HttpClientModule} from '@angular/common/http';
import { OurHistoryComponent } from './our-history/our-history.component';
import { TeamComponent } from './team/team.component';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { ContactsComponent } from './contacts/contacts.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { RouterModule } from '@angular/router';
import { ProductCategoryComponent } from './product-category/product-category.component';

@NgModule({
  declarations: [
    ProductComponent,
    HomeComponent,
    ShopComponent,
    MainComponent,
    OurHistoryComponent,
    TeamComponent,
    AllPostsComponent,
    ContactsComponent,
    ProductCategoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GoogleMapsModule,
    HttpClientJsonpModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
