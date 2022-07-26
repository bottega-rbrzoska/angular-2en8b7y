import { Component, OnInit } from '@angular/core';
import { Product } from '@dtiq/models';
import { LoggerService } from 'src/app/core/logger.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'dtiq-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  constructor(private _productService: ProductService) { }

  ngOnInit(): void {
    this.products = this._productService.getProducts()
  }

}
