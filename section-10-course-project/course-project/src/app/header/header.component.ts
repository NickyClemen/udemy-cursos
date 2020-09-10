import { Component, EventEmitter, Output } from '@angular/core';

@Component({

  selector: 'app-header',
  templateUrl: 'header.component.html',

})
export class HeaderComponent {

  @Output() featureSelected = new EventEmitter<string>();

  onSelect(feature:string) {

    this.featureSelected.emit(feature);

  }

}

/* ng g c recipes --spec false -> Para crear un componente por CLI sin el archivo el testing.
ng g c recipes/recipes-list --spec false -> Para crearlo en una subcarpeta. */
