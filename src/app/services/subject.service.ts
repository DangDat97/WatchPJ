import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
dataRes: any=[];
Detail: any=[];

Data: any={
  "products": [
    {
      "id": 0,
      "title": "White Gold Ring in Topaz and Diamonds",
      "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiati.",
      "price": 549,
      "sale": 469,
      "brand": "Watches",
      "category": "Gold Watches",
      "categoryBase":"gold-watches",
      "images": "product-1-1.png",
    },
    {
      "id": 1,
      "title": "Espoir Analog Dial Women’s Watch",
      "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiati.",
      "price": 210.00,
      "sale": 198.00,
      "brand": "Watches",
      "category": "Swiss Watches",
      "categoryBase":"swiss-watches",
      "images": "product-6-copyright.png",
    },
    {
      "id": 2,
      "title": "Fossil Explorist Men’s Watch",
      "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiati.",
      "price": 270.00,
      "sale": 315.00,
      "brand": "Watches",
      "category": "Swiss Watches",
      "categoryBase":"swiss-watches",
      "images": "product-7-copyright-660x660.png",
    },
    {
      "id": 3,
      "title": "Skmei Analog Dial Women’s Watch",
      "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiati.",
      "price": 250.00,
      "sale": '',
      "brand": "Watches",
      "category": "Limited Edition Watches",
      "categoryBase":"limited-edition-watches",
      "images": "product-5-copyright.png",
    },
    {
      "id": 4,
      "title": "Giani Bernardi Men’s Watch",
      "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiati.",
      "price": 120.00,
      "sale": 180.00,
      "brand": "Quality",
      "category": "Mechanical Watches",
      "categoryBase":"mechanical-watches",
      "images": "product-1-copyright-660x660.png",
    },
    {
      "id": 5,
      "title": "Fogg Analog Women’s Watch",
      "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiati.",
      "price": 130.00,
      "sale": 115.00,
      "brand": "Water-resistant",
      "category": "Watches with Gems",
      "categoryBase":"watches-with-gems",
      "images": "product-4-copyright-660x660.png",
    },
    {
      "id": 6,
      "title": "Sonata Analog Gold Dial Women’s Watch",
      "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiati.",
      "price": 290.00,
      "sale": '',
      "brand": "Watches",
      "category": "Vintage Watches",
      "categoryBase":"vintage-watches",
      "images": "product-4-copyright-660x660.png",
    },
    // 30 items
  ],
  "category":[
    {
      "id": 0,
      "name": "Vintage Watches",
      "base": "vintage-watches",
    },
    {
      "id": 1,
      "name": "Watches with Gems",
      "base": "watches-with-gems",
    },
    {
      "id": 2,
      "name": "Mechanical Watches",
      "base": "mechanical-watches",
    },
    {
      "id": 3,
      "name": "Limited Edition Watches",
      "base": "limited-edition-watches",
    },
    {
      "id": 4,
      "name": "Swiss Watches",
      "base": "swiss-watches",
    },
    {
      "id": 5,
      "name": "Gold Watches",
      "base": "gold-watches",
    },
  ],
  "brand":[
    'Watches',
    'Water-resistant',
    'Quality',
  ],
  "total": 100,
  "skip": 0,
  "limit": 30
}


getProducts(limit:number){
  for (let i=0; i < limit ; i++){
    this.dataRes.push(this.Data.products[i]);
  }
  return this.dataRes;
}

getProductsDetail(id:number){
  return this.Data.products[id];
}

getCategoryDetail(cate:string){
  for (let p of this.Data.products){
    if(p.categoryBase==cate){
      this.Detail.push(p);
    }
  }
  return this.Detail;
}

getCategory(){
  return this.Data.category;
}

getBrand(){
  return this.Data.brand;
}

getNameCategory(cate:string){
  for (let p of this.Data.category){
    if(p.base==cate){
      this.Detail.push(p);
    }
  }
  return this.Detail;
}

}
