import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Client } from '../../modules/client.model';

import { ClientService } from '../../services/client.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  clients: Client[];
  client: Client = {
    nombre: '',
    apellido: '',
    email: '',
    saldo: 0
  }

  @ViewChild('clientForm', { static: false }) clientForm: NgForm;
  @ViewChild('closeModal', { static: false }) closeModal: ElementRef;

  constructor(private clientService: ClientService,
              private flashMessages: FlashMessagesService) { }

  ngOnInit() {
    this.clientService.getClients().subscribe(
      clients => {
        this.clients = clients;
      }
    );
  }

  getSaldoTotal() {
    let saldoTotal: number = 0;

    if(this.clients) {
      this.clients.forEach(client => {
        saldoTotal += client.saldo;
      });
    }

    return saldoTotal;
  }

  add({ value, valid }: { value: Client, valid: boolean }) {
    if(!valid) {
      this.flashMessages.show('Por favor, llenar el formulario correctamente.', {
        cssClass: 'alert-danger',
        timeout: 4000
      });
    } else {
      this.clientService.addClient(value);
      this.clientForm.resetForm();
      this.cerrarModal();
    }
  }

  private cerrarModal() {
    this.closeModal.nativeElement.click();
  }

}
