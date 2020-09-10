import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Client } from '../../modules/client.model';

import { ClientService } from '../../services/client.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-clients',
  templateUrl: './edit-clients.component.html',
  styleUrls: ['./edit-clients.component.css']
})
export class EditClientsComponent implements OnInit {
  clients: Client[];
  client: Client = {
    nombre: '',
    apellido: '',
    email: '',
    saldo: 0
  }
  id: string;

  constructor(private clientService: ClientService,
              private flashMessages: FlashMessagesService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.clientService.getClient(this.id).subscribe(client => {
      this.client = client;
    });
  }

  guardar({ value, valid }: { value: Client, valid: boolean }) {
    if(!valid) {
      this.flashMessages.show('Por favor, llena el formulario correctamente.', {
        cssClass: 'alert-danger', timeout: 4000
      });
    } else {
      value.id = this.id;
      this.clientService.modificarCliente(value);
      this.router.navigate(['/']);
    }
  }

  eliminar() {
    if(confirm('¿Se desea eliminar el cliente?')) {
      this.clientService.eliminarCliente(this.client);
      this.router.navigate(['/']);
    }
  }

}
