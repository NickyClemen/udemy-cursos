import { Egreso } from './egreso.model';
import {Ingreso} from '../ingreso/ingreso.model';

export class EgresoService {

  egresos: Egreso[] = [
    new Egreso('Alquiler', 900),
    new Egreso('Ropa', 200),
  ];

  eliminar(egreso: Egreso) {
    const index: number = this.egresos.indexOf(egreso);
    this.egresos.splice(index, 1);
  }

}
