import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Product } from '@dtiq/models';

@Component({
  selector: 'dtiq-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input() product!: Product;
  constructor() { }

  ngOnInit(): void {
  }

}
