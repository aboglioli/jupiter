import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'jup-product-price',
  templateUrl: './product-price.component.html',
  styleUrls: ['./product-price.component.scss']
})
export class ProductPriceComponent implements OnInit {

  @Input() price: number;

  constructor() { }

  ngOnInit() {
  }

}
