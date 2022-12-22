import { Component } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { SubjectService } from '../services/subject.service';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent {

  products: any=[];
  brand: any=[];
  cate: any=[];
  baseCate:string='';
  nameCate:any=[];
  locc:any=[];
  constructor(private route: ActivatedRoute ,private subjectService: SubjectService){

  }

  ngOnInit(){
    this.route.params.subscribe(params=>{
      this.baseCate=params['cate'];
      this.products=this.subjectService.getCategoryDetail(this.baseCate);
      this.nameCate=this.subjectService.getNameCategory(this.baseCate);
    })

    this.brand=this.subjectService.getBrand();
    this.cate=this.subjectService.getCategory();
  }

}
