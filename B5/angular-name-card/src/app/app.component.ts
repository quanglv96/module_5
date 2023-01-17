import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-name-card';
  nameCard=true;
  progress=true;
  changeNameCard(){
    if(this.nameCard){
      this.nameCard=false;
      this.progress=true;
    }else {
      this.nameCard=true;
    }
  }
  changeProgress(){
    if(this.progress){
      this.progress=false;
      this.nameCard=true;
    }else {
      this.progress=true;
    }
  }
}
