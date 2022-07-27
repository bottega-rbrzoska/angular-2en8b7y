import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Framework } from '@dtiq/models';

@Component({
  selector: 'dtiq-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  productForm = new FormGroup({
    name: new FormControl<string | null>('test', { nonNullable: true, validators: [Validators.required]
    }),
    description: new FormControl<string | null>(null, this.dupaValidator),
    price: new FormControl<number | null>(null, Validators.max(20) ),
    framework: new FormControl<Framework>('react')
  });
  constructor() {}

  ngOnInit(): void {
    let name = this.productForm.get('name');
  }

  submit(value: any) {
    console.log(value);
  }

  reset() {
    this.productForm.reset();
  }

  dupaValidator(control: AbstractControl): ValidationErrors | null {
    return control.value?.includes('dupa') ? { dupaError: true } : null;
  }
}
