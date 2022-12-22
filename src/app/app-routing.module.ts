import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OurHistoryComponent } from './our-history/our-history.component';
import { ProductComponent } from './product/product.component';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { ShopComponent } from './shop/shop.component';
import { TeamComponent } from './team/team.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ProductCategoryComponent } from './product-category/product-category.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'product/:id',component: ProductComponent},
  {path:'our-history',component: OurHistoryComponent},
  {path:'all-posts',component: AllPostsComponent},
  {path:'shop',component:ShopComponent},
  {path:'team',component:TeamComponent},
  {path:'contacts',component:ContactsComponent},
  {path:'product-category/:cate',component:ProductCategoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
