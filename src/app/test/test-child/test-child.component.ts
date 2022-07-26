import {
  ApplicationRef,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  NgZone,
  OnInit,
  Optional,
  Output,
  SimpleChange,
  SimpleChanges
} from '@angular/core';
import { AppComponent } from 'src/app/app.component';

import { MyTestComponent } from '../my-test/my-test.component';

@Component({
  selector: 'dtiq-test-child',
  templateUrl: './test-child.component.html',
  styleUrls: ['./test-child.component.scss']
})
export class TestChildComponent {
  myData!: string;
  @Input()
  set myInputData(newData: string) {
    this.myData = newData;
    this.myOutputEvent.emit(this.myData.toUpperCase());
  }

  @Output() myOutputEvent = new EventEmitter<string>();
  constructor(@Optional() private _parent: AppComponent, private _cdRef: ChangeDetectorRef, ngZone: NgZone) {
    ngZone.runOutsideAngular(() => {});
    console.log(parent);
    if (!parent) {
      console.warn('TestChild can be only used as MyTest child');
    }
  }

  handleClick() {
    this.myOutputEvent.emit(this.myInputData.toUpperCase());
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   this.myOutputEvent.emit(this.myInputData.toUpperCase())
  // }
}
