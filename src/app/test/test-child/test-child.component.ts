import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'dtiq-test-child',
  templateUrl: './test-child.component.html',
  styleUrls: ['./test-child.component.scss']
})
export class TestChildComponent implements OnInit {

  @Input() myInputData!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
