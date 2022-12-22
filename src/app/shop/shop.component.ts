import { Component } from '@angular/core';
import { SubjectService } from '../services/subject.service';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
  products: any=[];
  limit: number= 5;
  brand: any=[];
  cate: any=[];
  constructor(private subjectService: SubjectService){

  }

  ngOnInit(){
    this.products=this.subjectService.getProducts(this.limit);
    this.brand=this.subjectService.getBrand();
    this.cate=this.subjectService.getCategory();
  }


}
