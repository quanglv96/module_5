import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-using-bootstrap';
  calculate=true;
  product=true;
  article=true;
  changeCalculate(){
    if(this.calculate){
      this.calculate=false;
      this.product=true;
      this.article=true;
    }else {
      this.calculate=true;
    }
  }
  changeArticle(){
    if(this.article){
      this.article=false;
      this.product=true;
      this.calculate=true;
    }else {
      this.article=true;
    }
  }
  changeProduct(){
    if(this.product){
      this.product=false;
      this.calculate=true;
      this.article=true;
    }else {
      this.product=true;
    }
  }
}
