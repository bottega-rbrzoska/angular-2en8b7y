import { Component, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Framework } from '@dtiq/models';

@Component({
  selector: 'dtiq-framework-selector',
  templateUrl: './framework-selector.component.html',
  styleUrls: ['./framework-selector.component.scss'],
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: FrameworkSelectorComponent, multi: true }]
})
export class FrameworkSelectorComponent implements ControlValueAccessor {
  currentValue: Framework = null;
  private _onTouch: any = () => {};
  private _onChange: any = () => {};
  constructor() {}

  writeValue(value: Framework): void {
    this.currentValue = value;
  }
  registerOnChange(fn: any): void {
    this._onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this._onTouch = fn;
  }

  select(value: 'angular' | 'angularjs' | 'react') {
    this.currentValue = value;
    this._onChange(value);
  }

  blur() {
    //this._onTouch(this.currentValue);
  }
}
