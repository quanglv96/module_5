import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TodoComponent} from "./todo/todo.component";
// bổ sung đường dẫn, điều hướng component tương ứng
const routes: Routes = [
  {
    path:"product",
    component:TodoComponent
  },
  {
    path:"product",
    component:TodoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
