import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PeopleComponent } from './personas/personas.component';
import { PersonaComponent } from './persona/persona.component';

// Decorador importado del core de Angular.
@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    PersonaComponent
  ], // Se declaran los componentes que se van a declarar.
  imports: [
    BrowserModule,
    FormsModule,
  ], // Se agregan módulos de Angular y otros externos.
  providers: [],
  bootstrap: [AppComponent] /* Se indica qué componente se va a levantar cuando se esté
  iniciando la app. */
})
export class AppModule { }
