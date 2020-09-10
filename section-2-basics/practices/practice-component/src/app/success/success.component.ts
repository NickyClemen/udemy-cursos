import { Component } from '@angular/core';

@Component({
  selector: '[app-success-alert]',
  template: `<h1>Success!</h1>`,
  styles: [`

    h1 {

      background: #D4EDDA;
      padding: 10px;
      font-weight: bold;
      border: 1px #00FF00 solid;
      border-radius: 25px;

    }

  `]
})
export class SuccessAlertComponent {}
