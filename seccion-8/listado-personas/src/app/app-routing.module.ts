import { NgModule } from '@angular/core';

import { RouterModule, Routes } from "@angular/router";

import { PersonasComponent } from "./personas/personas.component";
import { FormularioComponent } from "./personas/formulario/formulario.component";
import { ErrorComponent } from "./error/error.component";

/* Routing permite navegar entre distintas páginas. Permite mostrar componentes dinámicamente.
Agregar módulo de routing:
	ng generate module app-routing */

const routes: Routes = [
  { path: '', component: PersonasComponent }, // Cuando se despliegue localhost.
  { path: 'personas', component: PersonasComponent, children: [
    { path: 'agregar', component: FormularioComponent },
    { path: ':id', component: FormularioComponent }
    // Su usan ':' para pasar un parámetro.
  ]}, /* Son componentes hijos si parten de la misma raíz. Hay que especificar el router-oulet para redireccionar
   el componente. */
  { path: '**', component: ErrorComponent } /* Ruta de error que contempla casos no especificados. Siempre
   tiene que ser la última especificada (si se pone al principio, las que ya están explícitas, no van a poder
   ser localizadas). */
]

// @ts-ignore
@NgModule({
  imports: [RouterModule.forRoot(
      routes)],
  exports: [RouterModule]
}) // Se declaran las rutas dentro de ésta variable.
export class AppRoutingModule { }
