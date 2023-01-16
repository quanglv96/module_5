import {Component} from '@angular/core';

@Component({
  selector: 'app-calculer',
  templateUrl: './calculer.component.html',
  styleUrls: ['./calculer.component.css']
})
export class CalculerComponent {
  val = ""

  changeInput(text: any) {
    this.val += text;
  }

  resetVal() {
    this.val = "";
  }

  endVal() {
    this.val=eval(this.val);
  }
  constructor() {
  }

  ngOnInit() {

  }
}
