import {Component} from '@angular/core';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.css']
})
export class CalculateComponent {
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
