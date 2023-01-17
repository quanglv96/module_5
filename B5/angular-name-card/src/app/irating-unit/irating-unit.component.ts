import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from "@angular/core";
import {RatingUnit} from "../rating-unit";
@Component({
  selector: 'app-irating-unit',
  templateUrl: './irating-unit.component.html',
  styleUrls: ['./irating-unit.component.css']
})
export class IRatingUnitComponent implements OnInit, OnChanges {
  @Input()
  max = 10;
  @Input()
  ratingValue = 5;
  @Input()
  showRatingValue = true;


  ratingUnits: Array<RatingUnit> = [];

  constructor() { }
  ngOnInit() {
    this.calculate(this.max, this.ratingValue);
  }
  ngOnChanges(changes: SimpleChanges) {
    if ('max' in changes) {
      let max = changes["max"].currentValue;
      max = typeof max === 'undefined' ? 5 : max;
      this.max = max;
      this.calculate(max, this.ratingValue);
    }
  }

  calculate(max: any, ratingValue: any) {
    this.ratingUnits = Array.from({length: max},
      (_, index) => ({
        value: index + 1,
        active: index < ratingValue
      }));
  }

  select(index: any) {
    this.ratingValue = index + 1;
    this.ratingUnits.forEach((item, idx) => item.active = idx < this.ratingValue);
  }
  enter(index: any) {
    this.ratingUnits.forEach((item, idx) => item.active = idx <= index);
  }
  reset() {
    this.ratingUnits.forEach((item, idx) => item.active = idx < this.ratingValue);
  }


}
