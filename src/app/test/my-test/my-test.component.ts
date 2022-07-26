import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Test, User } from '@dtiq/models';
import { concatMap, exhaustMap, fromEvent, mergeMap, switchMap } from 'rxjs';
import { TestService } from 'src/app/test.service';

@Component({
  selector: 'dtiq-my-test',
  templateUrl: './my-test.component.html',
  styleUrls: ['./my-test.component.scss'],
})
export class MyTestComponent implements OnInit {

  @ViewChild('testBtn', { static: true }) testBtn!: ElementRef<HTMLButtonElement>
  testData = 'myTestString';
  counter = 0;

  testUserArr: User[] = [{
    username: 'Alojzy',
    admin: false,
    id: 'alojzy'
  }, {
    username: 'Jarosław',
    admin: false,
    id: 'alojzy'
  }]
  testArr: Test[] = []
  constructor( private _test: TestService) { }

  ngOnInit(): void {
    // setInterval(() => {
    //     this.counter++;
    //     this.testData += this.counter;
    // }, 2000)

    fromEvent(this.testBtn.nativeElement, 'click')
    .pipe(
      //switchMap(() => this._test.getTestData())
      //exhaustMap(() => this._test.getTestData())
      //mergeMap((c) => this._test.getTestData())
      //concatMap((c) => this._test.getTestData())

    ).subscribe(c => console.log('element', c) )
  }
  handleChildOutput(data: string) {
    console.log(data)
  }

}
