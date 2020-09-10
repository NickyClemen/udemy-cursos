import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

import { Cliente } from '../models/cliente.model';
import { ClienteService } from '../services/cliente.service';
import { ModalService } from '../services/modal.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
})
export class ClientesComponent implements OnInit {
  public clientes: Cliente[];
  public paginador: any;
  public clienteSeleccionado: Cliente;

  constructor(private clienteService: ClienteService, private activatedRoute: ActivatedRoute, private modalService: ModalService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap
      .subscribe(params => {
        let page: number = +params.get('page');

        if(!page) {
          page = 0;
        }

        this.clienteService.getClientes(page)
          .pipe(
            tap(response => {
              (response.content as Cliente[]).forEach(cliente => console.log(cliente.nombre))
            })
          )
          .subscribe(response => {
            this.clientes = response.content as Cliente[];
            this.paginador = response;
          });
      });

    this.modalService.notificarUpload
      .subscribe(cliente => {
        this.clientes = this.clientes.map(clienteOriginal => {
          if(cliente.id === clienteOriginal.id) {
            clienteOriginal.foto = cliente.foto;
          }

          return clienteOriginal;
        });
      });
  }

  public delete(cliente: Cliente) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    });

    swalWithBootstrapButtons.fire({
      title: '¿Estás seguro?',
      text: `Estás por eliminar el registro ${ cliente.nombre } ${ cliente.apellido } de la base de datos`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'No, cancelar',
      reverseButtons: true
    }).then((result) => {
      if(result.value) {
        this.clienteService.delete(cliente.id)
          .subscribe(response => {
            this.clientes = this.clientes.filter(cli => cli !== cliente);
            swalWithBootstrapButtons.fire('¡Eliinado!', 'El registro ha sido eliminado exitosamente', 'success');
          });
      }
    });
  }

  public abrirModal(cliente: Cliente): void {
    this.clienteSeleccionado = cliente;
    this.modalService.abrirModal();
  }
}
