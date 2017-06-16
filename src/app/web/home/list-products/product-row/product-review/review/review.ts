import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'jup-review',
  template: `<span class="star" [class.active]="active" (click)="handleRate($event)">&#9733;</span>`,
  styles: [`
    .star {
      color: #efefef;
      cursor: pointer;
      font-size: 2rem;
      transition: color .4s ease-in-out;
    }
    .star.active {
      color: #FFD600;
    }
  `]
})
export class ReviewComponent {

 @Input() active: boolean;
 @Input() position: number;
 @Output() rate = new EventEmitter();

 handleRate() {
   this.rate.emit(this.position);
 }

}
