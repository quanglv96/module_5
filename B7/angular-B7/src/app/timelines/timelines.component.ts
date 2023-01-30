import {Component, OnInit} from '@angular/core';
import {DateUtilService} from "../service/date/date-util.service";

@Component({
  selector: 'app-timelines',
  templateUrl: './timelines.component.html',
  styleUrls: ['./timelines.component.css']
})
export class TimelinesComponent implements OnInit {
  output="";
  ngOnInit(): void {
  }

  constructor(private dateUtilService:DateUtilService) {

  }
  onChange(value: string | number | Date){
    this.output=this.dateUtilService.getDiffToNow(value);
  }
}
