import { Component, Input } from '@angular/core';

import { LoggingService } from '../logging/logging.service';
import { AccountsServices } from './../accounts/accounts.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(private loggingService:LoggingService, private accountServices:AccountsServices) {}

  onSetTo(status: string) {
    this.accountServices.updateStatus(this.id, status);
    // this.loggingService.logStatusChange(status);
    this.accountServices.statusUpdated.emit(status);
  }
}
