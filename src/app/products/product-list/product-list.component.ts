import { Component, OnInit } from '@angular/core';
import { Product } from '@dtiq/models';
import { Observable } from 'rxjs';
import { ProductService } from '../product.service';

@Component({
  selector: 'dtiq-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products$!: Observable<Product[] | null>;
  constructor(private _productService: ProductService) { }

  ngOnInit(): void {
    this.products$ = this._productService.products$;
    this._productService.fetchProducts();
  }

}
