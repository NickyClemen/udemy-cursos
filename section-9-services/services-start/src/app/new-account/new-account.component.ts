import { Component } from '@angular/core';

import { LoggingService } from './../logging/logging.service';
import { AccountsServices } from './../accounts/accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingService]
})
export class NewAccountComponent {

  constructor(private loggingService:LoggingService, private accountsService:AccountsServices) {

    this.accountsService.statusUpdated.subscribe(

      (status:string) => alert(`New status is ${ status }.`)

    );

  }
  /* Se crea la dependency injection en el constructor del componente.
  Especificar el tipo de dato a inyectar no es opcional. */

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus);
    // this.loggingService.logStatusChange(accountStatus);
  }

}
