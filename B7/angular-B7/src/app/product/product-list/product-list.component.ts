import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../service/product/product.service";
import {Product} from "../../model/product";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  pro:Product|any;

  constructor(
    private productService: ProductService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.productService.getAll().subscribe(p=>{this.products=p});
  }

  getDetail(id: string|any) {
    this.router.navigateByUrl('/product/detail/' + id);
  }
  delete(id: string|any){
    this.pro=this.productService.findByID(id);
   if(confirm("are you sure delete "+this.pro.name+"?")){
     this.productService.removeByID(id).subscribe(p =>this.getAll())

   }
  }
  getEdit(id: string|any) {
    this.router.navigateByUrl('/product/create/' + id);
  }

}
