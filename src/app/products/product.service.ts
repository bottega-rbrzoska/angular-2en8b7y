import { HttpClient, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/Product';

@Injectable()
export class ProductService {

  private _productsSubj = new BehaviorSubject<Product[] | null>(null)
  products$ = this._productsSubj.asObservable();
  constructor(private _httpClient: HttpClient, @Inject(HTTP_INTERCEPTORS) itc: HttpInterceptor[]) {
    console.log(itc)
   }

  fetchProducts() {
    this._httpClient.get<Product[]>('http://localhost:3000/products').subscribe(p => this._productsSubj.next(p));
  }

  update(product: Product) {
    this._httpClient.put<Product[]>('http://localhost:3000/products', product).subscribe(() => this.fetchProducts());

  }
}
