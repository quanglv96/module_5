import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TimelinesComponent} from "./timelines/timelines.component";
import {AppComponent} from "./app.component";

const routes: Routes = [
  {
    path:'timelines',
    component:TimelinesComponent
  },
  {
    path:'home',
    component:AppComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
