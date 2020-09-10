import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Cliente } from '../../models/cliente.model';
import { Region } from '../../models/region.model';

import { ClienteService } from '../../services/cliente.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent implements OnInit {
  public cliente: Cliente = new Cliente();
  public titulo: string = 'Crear cliente';
  public errores: string[];
  public regiones: Region[];

  constructor(private clienteService: ClienteService, private route: Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.cargarCliente();
    this.clienteService.getRegiones()
      .subscribe(regiones => this.regiones = regiones);
  }

  public cargarCliente(): void {
    this.activatedRoute.params.subscribe(params => {
      let id = +params['id'];

      if(id) {
        this.clienteService.getCliente(id)
          .subscribe(cliente => {
            this.cliente = cliente;
            this.titulo = 'Editar cliente';
          });
      }
    });
  }

  public create(): void {
    this.clienteService.create(this.cliente)
      // Primera solución.
      .subscribe(
        cliente => {
          this.route.navigate(['/clientes']);
          Swal.fire('Nuevo cliente', `${ cliente.nombre } ha sido creado con éxito`, 'success');
        },
        error => {
          this.errores = error.error.errors as string[];

          console.error(`El código del error es ${error.status}`);
          console.error(error.error.errors);
        }
      );
  }

  public update(): void {
    // Solución uno.
    this.clienteService.update(this.cliente)
      .subscribe(
        response => {
          this.route.navigate(['/clientes']);
          Swal.fire(`${ response.mensaje }`, `${ response.cliente.nombre } ha sido actualizado con éxito`, 'success');
        },
        error => {
          this.errores = error.error.errors as string[];

          console.error(`El código del error es ${error.status}`);
          console.error(error.error.errors);
        }
      );
  }
  public compararRegion(paramUno: Region, paramDos: Region): boolean {
    if(paramUno === undefined && paramDos === undefined) {
      return true;
    }
    return (paramUno === null || paramDos === null || paramUno === undefined || paramDos === undefined)
      ?  false
      : paramUno.id === paramDos.id;
  }
}
