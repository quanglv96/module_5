import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../service/product/product.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit{
  productForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
  });
  productDetail:any;
  constructor(
    private productService: ProductService,
    private router: Router,
    private activatedRoute: ActivatedRoute,) {
  }

  submit() {
    const product = this.productForm.value;
    if(this.productService.findByID(product.id)){
      for (let i = 0; i < this.productService.getAll().length; i++) {
        if(product.id ===this.productService.getAll()[i].id){
          this.productService.getAll()[i]=product;
        }
      }
    }else {
      this.productService.saveProduct(product);
    }
    this.productForm.reset();
    this.router.navigateByUrl('/product/list');
  }
  update(id:any){
      this.productDetail=this.productService.findByID(id)
      this.productForm.patchValue({
        id: this.productDetail.id,
        name: this.productDetail.name,
        price: this.productDetail.price,
        description: this.productDetail.description,
      })
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap)=>{
      if(paramMap.get('id')){
        this.update(paramMap.get('id'))
      }
    })
  }
}
