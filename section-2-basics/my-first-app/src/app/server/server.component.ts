import { Component } from '@angular/core';

@Component({

  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [

    `
      .online {

        color: white;
        font-weight: bold;

      }

    `

  ],

})
export class ServerComponent {

  public serverId:number = 10;
  public serverStatus:string = 'offline';

  public constructor() {

    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';

  }

  public getStatus():string {

    return this.serverStatus;

  }

  public getColor():string {

    return this.serverStatus === 'online' ? 'green' : 'red';

  }

}
