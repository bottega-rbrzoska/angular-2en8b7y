import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'dtiq-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  productForm = new FormGroup({
    name: new FormControl<string | null>('test', { nonNullable: true}),
    description: new FormControl<string | null>(null),
    price: new FormControl<number | null>(null)
  })
  constructor() { }

  ngOnInit(): void {
    let name = this.productForm.get('name')
  }

  submit(value: any) {
    console.log(value)
  }

  reset(){
    this.productForm.reset();
  }

}
