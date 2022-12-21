import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
Detail: any=[];
Data: any={
  "products": [
    {
      "id": 1,
      "title": "White Gold Ring in Topaz and Diamonds",
      "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiati.",
      "price": 549,
      "sale": 469,
      "brand": "Watches",
      "category": "Gold Watches",
      "images": "product-1-1.png",
    },
    {
      "id": 2,
      "title": "Espoir Analog Dial Women’s Watch",
      "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiati.",
      "price": 210.00,
      "sale": 198.00,
      "brand": "Watches",
      "category": "Swiss Watches",
      "images": "product-6-copyright.png",
    },
    {
      "id": 3,
      "title": "Fossil Explorist Men’s Watch",
      "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiati.",
      "price": 270.00,
      "sale": 315.00,
      "brand": "Watches",
      "category": "Swiss Watches",
      "images": "product-7-copyright-660x660.png",
    },
    {
      "id": 4,
      "title": "Skmei Analog Dial Women’s Watch",
      "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiati.",
      "price": 250.00,
      "sale": '',
      "brand": "Watches",
      "category": "Limited Edition Watches",
      "images": "product-5-copyright.png",
    },
    {
      "id": 5,
      "title": "Giani Bernardi Men’s Watch",
      "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiati.",
      "price": 120.00,
      "sale": 180.00,
      "brand": "Quality",
      "category": "Mechanical Watches",
      "images": "product-1-copyright-660x660.png",
    },
    {
      "id": 6,
      "title": "Fogg Analog Women’s Watch",
      "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiati.",
      "price": 130.00,
      "sale": 115.00,
      "brand": "Water-resistant",
      "category": "Watches with Gems",
      "images": "product-4-copyright-660x660.png",
    },
    {
      "id": 7,
      "title": "Sonata Analog Gold Dial Women’s Watch",
      "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiati.",
      "price": 290.00,
      "sale": '',
      "brand": "Watches",
      "category": "Vintage Watches",
      "images": "product-4-copyright-660x660.png",
    },
    // 30 items
  ],
  "category":[
    'Vintage Watches',
    'Watches with Gems',
    'Mechanical Watches',
    'Limited Edition Watches',
    'Swiss Watches',
    'Gold Watches',
  ],
  "total": 100,
  "skip": 0,
  "limit": 30
}


getProducts(limit:number){
  return this.Data.products;
}

getProductsDetail(id:number){
  return this.Data.products[id];
}

getCategoryDetail(cate:string){
  for (let i=0; i< this.Data.products.length ; i++){
    if (this.Data.product[i].category==cate){
      this.Detail=this.Detail.push(this.Data.product[i]);
    }
  }
  return this.Detail;
}

getCategory(){
  return this.Data.category;
}

}
