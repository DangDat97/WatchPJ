import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OurHistoryComponent } from './our-history/our-history.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'product',component: ProductComponent},
  {path:'our-history',component: OurHistoryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
