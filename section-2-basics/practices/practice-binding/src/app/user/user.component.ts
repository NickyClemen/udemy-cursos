import { Component } from '@angular/core';

@Component({

  selector: './app-user-component',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']

})
export class UserComponent {

  public userName = '';
  public disable = true;

  public onEnableButton():boolean {

    return this.userName != '' ? this.disable = false : this.disable = true;

  }

  public onResetName(event: Event):string {

    return this.userName = '';

  }

}
