import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers', /* Los componentes tienen que tener un selector único que no
  puede ser sobreescrito en el HTML. */
  /* selector: '[app-servers]', // Cuando se lo pone entre [], se convierte en un atributo de CSS.
  Para poder usarlo, se lo usa como atributo en una etiqueta div. */
  /* selector: '.appservers',  // Se convierte en una clase de CSS. Se utiliza con el atriburo
  class en una etiqueta div.
  El ID no está soportado por Angular ni los pseudo elementos. */
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {

  public allowNewServer:boolean = false;
  public serverCreationStatus:string = 'No server was created.';
  public serverName:string = 'Testserver';
  public serverCreated:boolean = false;
  public servers:string[] = ['Testserver', 'myTestServer'];

  constructor() {

    setTimeout(() => {

      this.allowNewServer = true;

    }, 2000);

  }

  public onCreateServer() {

    this.serverCreated = true;

    this.servers.push(this.serverName);

    this.serverCreationStatus = `Server was created! Name is ${ this.serverName }`;

  }

  public onUpdateServerName(event:Event) {

    this.serverName = (<HTMLInputElement>event.target).value;

  }


}
