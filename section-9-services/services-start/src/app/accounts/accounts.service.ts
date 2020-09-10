import { LoggingService } from './../logging/logging.service';
import { Injectable, EventEmitter } from '@angular/core';

/* Nueva sintaxis
@Injectable({providedIn: 'root'}) */
@Injectable()
export class AccountsServices {

  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  statusUpdated = new EventEmitter<string>();

  constructor(private loggingService:LoggingService) {}
  /* Los servicios necesitan metadata para funcionar (con otros componentes no pasa, porque
  tienen decoradores).
  Se utiliza el @Injectable para atachar metadata al servicio. Le indica a Angular que recibe un
  servicio. */

  addAccount(name:string, status:string) {

    this.accounts.push({ name:name, status:status });
    this.loggingService.logStatusChange(status);

  }

  updateStatus(id:number, status:string) {

    this.accounts[id].status = status;
    this.loggingService.logStatusChange(status);

  }

}
