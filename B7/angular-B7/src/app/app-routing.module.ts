import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TimelinesComponent} from "./timelines/timelines.component";
import {ProductListComponent} from "./product/product-list/product-list.component";
import {ProductCreateComponent} from "./product/product-create/product-create.component";
import {ProductDetailComponent} from "./product/product-detail/product-detail.component";
import {ProductComponent} from "./product/product.component";

const routes: Routes = [
  {
    path: 'timelines',
    component: TimelinesComponent
  },
  {
    path: 'product',
    component: ProductComponent,
    children: [
      {
        path: 'create',
        component: ProductCreateComponent,
      },
      {
        path: 'list',
        component: ProductListComponent,
        pathMatch:"full"
      },
      {
        path: 'detail/:id',
        component: ProductDetailComponent,
      },
      {
        path: 'create/:id',
        component: ProductCreateComponent,
      },
    ]
  },
  {
    path: 'product/delete',
    component: ProductListComponent,
    children: [
      {
        path: ':id',
        component: ProductDetailComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
