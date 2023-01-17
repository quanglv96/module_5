import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-progress-ba',
  templateUrl: './progress-ba.component.html',
  styleUrls: ['./progress-ba.component.css']
})
export class ProgressBaComponent  implements OnInit{
  @Input() backgroundColor = '#D9D9D9';
  @Input() progressColor = '#4CAF50';
  @Input() progress:string|number = 0;
  constructor() {
  }

  ngOnInit() {
    this.loading();
  }
  loading() {
    let interval = setInterval(() => {
      this.progress = +this.progress + 5;
      if (this.progress > 100) {
        clearInterval(interval);
        this.progress=0;
        this.loading();
      }
    }, 1000);
  }
}
