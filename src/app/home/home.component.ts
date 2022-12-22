import { Component }  from "@angular/core"
import { SubjectService } from '../services/subject.service';
import { ArrayType } from "@angular/compiler";
@Component({
  selector:'app-home',
  templateUrl:'./home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent{
  products: any = [];
  limit: number = 3;
  constructor(private subjectService: SubjectService){

  }

  ngOnInit(){
    this.products=this.subjectService.getProducts(this.limit);
  }



}
