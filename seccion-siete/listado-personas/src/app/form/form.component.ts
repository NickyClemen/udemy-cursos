import { Component, OnInit } from '@angular/core';

import { IngresoService } from '../ingreso/ingreso.service';
import { EgresoService } from '../egreso/egreso.service';

import { Ingreso } from '../ingreso/ingreso.model';
import { Egreso } from '../egreso/egreso.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  tipo: string = 'ingresoOperacion';
  descripcionInput: string;
  valorInput: number;

  constructor(private ingresoService: IngresoService, private egresoService: EgresoService) { }

  ngOnInit() {
  }

  tipoOperacion(event) {
    this.tipo = event.target.value;
  }

  agregarValor(event) {
    return (this.tipo === 'ingresoOperacion') ?
      this.ingresoService.ingresos.push(new Ingreso(this.descripcionInput, this.valorInput)) :
      this.egresoService.egresos.push(new Egreso(this.descripcionInput, this.valorInput));
  }

}
