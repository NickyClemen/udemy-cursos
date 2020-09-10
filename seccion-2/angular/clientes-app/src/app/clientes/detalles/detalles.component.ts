import { Component, OnInit, Input } from '@angular/core';
import { HttpEventType } from '@angular/common/http';

import { ClienteService } from '../../services/cliente.service';
import { ModalService } from '../../services/modal.service';

import { Cliente } from '../../models/cliente.model';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalle-cliente',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {
  @Input()
  public cliente: Cliente;

  public titulo: string = 'Detalle cliente';
  public fotoSeleccionada: File;
  public progreso: number;

  constructor(private clienteService: ClienteService, public modalService: ModalService) { }

  ngOnInit(): void {
    /*this.activatedRoute.paramMap
      .subscribe(params => {
        let id: number = +params.get('id');

        if(id) {
          this.clienteService.getCliente(id)
            .subscribe(cliente => this.cliente = cliente);
        }
      });*/
  }

  public seleccionarFoto(e): void {
    this.fotoSeleccionada = e.target.files[0];
    this.progreso = 0;
    console.log(this.fotoSeleccionada);

    if(this.fotoSeleccionada.type.indexOf('image') < 0) {
      Swal.fire('No ha seleccionado un tipo de archivo válido', 'Se debe seleccionar un archivo de formato JPG o PNG', 'error');
    }
  }

  public subirFoto(): void {
    if(!this.fotoSeleccionada) {
      Swal.fire('No ha seleccionado un tipo de archivo válido', 'Se debe seleccionar una imagen', 'error');
      this.fotoSeleccionada = null;
    }

    this.clienteService.subirFoto(this.fotoSeleccionada, this.cliente.id)
      .subscribe(event => {
          // this.cliente = cliente;
          if (event.type === HttpEventType.UploadProgress) {
            this.progreso = Math.round((event.loaded / event.total) * 100);
          } else if (event.type === HttpEventType.Response) {
            let response: any = event.body;
            this.cliente = response.cliente as Cliente;

            this.modalService.notificarUpload.emit(this.cliente);

            Swal.fire('La foto  ha sido subida con éxito', response.mensaje, 'success');
          }
        });
  }

  public cerrarModal(): void {
    this.modalService.cerrarModal();
    this.fotoSeleccionada = null;
    this.progreso = 0;
  }
}
