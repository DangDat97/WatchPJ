import { Component } from "@angular/core";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})

export class ProductComponent{
    textE3: string='';
    numCart: number= 1;
    text: string ='des';
    textElement3(text:string){
      this.textE3=text;
    }

    ngOnInit(){
      this.textElement3(this.text);
    }

    plushNum(){
      this.numCart++;
    }
    minusNum(){
      this.numCart--;
    }

}
