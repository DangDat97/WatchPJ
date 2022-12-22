import { Component } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { SubjectService } from '../services/subject.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})

export class ProductComponent{
  product: any=[];
  id: number=0;
  constructor(private route: ActivatedRoute, private subjectService: SubjectService){

  }


  ngOnInit(){
    this.textElement3(this.text);
    this.route.params.subscribe(params=>{
      this.id=params['id'];
      this.product=this.subjectService.getProductsDetail(this.id);
    })

  }

    textE3: string='';
    numCart: number= 1;
    text: string ='des';
    textElement3(text:string){
      this.textE3=text;
    }



    plushNum(){
      this.numCart++;
    }
    minusNum(){
      this.numCart--;
    }

}
