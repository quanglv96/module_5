import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../service/product/product.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {CategoryService} from "../../service/category/category.service";


@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  productForm: FormGroup = new FormGroup({
    id: new FormControl(null),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    category: new FormGroup({
      id: new FormControl([1])
    })
  });
  categories: any;
  productDetail: any;
  products: any

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private router: Router,
    private activatedRoute: ActivatedRoute,) {
  }


  submit() {
    const product = this.productForm.value;
    this.productService.saveProduct(product).subscribe(()=>{
        this.productForm.reset()
        this.router.navigateByUrl('/product/list')
    });
  }

  update(id: any) {
    this.productService.findByID(id).subscribe(p => {
      this.productDetail = p
      this.productForm.patchValue(this.productDetail)
    });
  }

  ngOnInit(): void {
    this.categoryService.getAll().subscribe(c => this.categories = c);
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.get('id')) {
        this.update(paramMap.get('id'))
      }
    })

  }
}
