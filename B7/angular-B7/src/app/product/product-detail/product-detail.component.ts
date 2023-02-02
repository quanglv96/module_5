import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../service/product/product.service";
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productDetail: any;

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.getProduct(id)
    })
  }

  getProduct(id: any) {
    return this.productService.findByID(id).subscribe(p => {
      this.productDetail = p
    })
  }

}

