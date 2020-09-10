import { Ingreso } from './ingreso.model';

export class IngresoService {

  ingresos: Ingreso[] = [
    new Ingreso('Salario', 4000),
    new Ingreso('Venta coche', 500),
  ];

  eliminar(ingreso: Ingreso) {
    const index: number = this.ingresos.indexOf(ingreso);
    this.ingresos.splice(index, 1);
  }

}
