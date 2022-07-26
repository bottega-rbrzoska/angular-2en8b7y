import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'dtiq-standalone',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './standalone.component.html',
  styleUrls: ['./standalone.component.scss']
})
export class StandaloneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
