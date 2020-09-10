import { Component } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
})
export class DirectivaComponent {
  public listaCursos: string[] = ['Typescript', 'Javascript', 'Java', 'C#', 'PHP'];
  public habilitar: boolean = true;
  public valueButton: string = 'Ocultar';

  constructor() {}

  public eventClick(): void {
    if(this.habilitar) {
      this.habilitar = false;
      this.valueButton = 'Mostrar';
    } else {
      this.habilitar = true;
      this.valueButton = 'Ocultar';
    }
  }
}
