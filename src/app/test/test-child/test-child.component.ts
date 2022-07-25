import { Component, EventEmitter, Input, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'dtiq-test-child',
  templateUrl: './test-child.component.html',
  styleUrls: ['./test-child.component.scss']
})
export class TestChildComponent implements OnInit {

  myData!: string;
  @Input()
  set myInputData(newData: string){
    this.myData = newData;
    this.myOutputEvent.emit(this.myData.toUpperCase())
  };

  @Output() myOutputEvent = new EventEmitter<string>()
  constructor() { }

  ngOnInit(): void {
  }

  handleClick() {
    this.myOutputEvent.emit(this.myInputData.toUpperCase())
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   this.myOutputEvent.emit(this.myInputData.toUpperCase())
  // }

}
