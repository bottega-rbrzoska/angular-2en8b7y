import { Component, OnInit, Optional } from '@angular/core';

import { LoggerService } from '../core/logger.service';

@Component({
  selector: 'dtiq-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(@Optional() private _loggerService: LoggerService) {}
}
