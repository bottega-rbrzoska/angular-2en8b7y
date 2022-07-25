import { Component, OnInit } from '@angular/core';
import { Product } from '@dtiq/models';

@Component({
  selector: 'dtiq-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [{
    id: '1',
    description: 'Prod1 descr',
    name: 'Product One',
    price: 7.99
  }, {
    id: '2',
    description: 'Prod2 descr',
    name: 'Product One',
    price: 0.99
  }, {
    id: '3',
    description: 'Prod3 descr',
    name: 'Product Three',
    price: 17.99
  }]
  constructor() { }

  ngOnInit(): void {
  }

}
