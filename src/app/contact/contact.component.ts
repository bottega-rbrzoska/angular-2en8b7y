import { Component, OnInit } from '@angular/core';

import { LoggerService } from '../core/logger.service';

@Component({
  selector: 'dtiq-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  constructor(private _logger: LoggerService) {}
}
