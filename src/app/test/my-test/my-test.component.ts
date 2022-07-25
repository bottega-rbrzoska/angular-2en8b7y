import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'dtiq-my-test',
  templateUrl: './my-test.component.html',
  styleUrls: ['./my-test.component.scss'],
})
export class MyTestComponent implements OnInit {

  testData = 'myTestString';
  constructor() { }

  ngOnInit(): void {
  }


}
