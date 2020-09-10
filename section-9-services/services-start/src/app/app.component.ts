import { AccountsServices } from './accounts/accounts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  public accounts: { name:string, status:string }[] = [];

  constructor(private accountsService:AccountsServices) {}

  ngOnInit() {

    this.accounts = this.accountsService.accounts;

  }

}
