import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Test, User } from '@dtiq/models';
import { TestService } from 'src/app/test.service';

@Component({
  selector: 'dtiq-my-test',
  templateUrl: './my-test.component.html',
  styleUrls: ['./my-test.component.scss'],
})
export class MyTestComponent implements OnInit {

  testData = 'myTestString';
  counter = 0;

  testUserArr: User[] = [{
    name: 'Alojzy',
    age: 56
  }, {
    name: 'Jarosław',
    age: 70
  }]
  testArr: Test[] = []
  constructor( private _test: TestService) { }

  ngOnInit(): void {
    // setInterval(() => {
    //     this.counter++;
    //     this.testData += this.counter;
    // }, 2000)
  }
  handleChildOutput(data: string) {
    console.log(data)
  }

}
