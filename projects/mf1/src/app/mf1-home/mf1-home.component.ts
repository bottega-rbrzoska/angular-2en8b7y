import { Component, OnInit } from '@angular/core';
import { MfSharedLibService } from 'mf-shared-lib';

@Component({
  selector: 'app-mf1-home',
  templateUrl: './mf1-home.component.html',
  styleUrls: ['./mf1-home.component.scss']
})
export class Mf1HomeComponent implements OnInit {

  constructor(private _mfService: MfSharedLibService) {

    _mfService.data$.subscribe(data => console.log(data))
  }

  ngOnInit(): void {
  }

}
