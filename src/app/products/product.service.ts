import { Injectable } from '@angular/core';
import { Product } from '../models/Product';

@Injectable()
export class ProductService {

  private _products: Product[] = [{
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

  getProducts() {
    return this._products;
  }
}
