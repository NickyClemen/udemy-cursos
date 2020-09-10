import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DirectivaComponent } from './directiva/directiva.component';
import { ClientesComponent } from './clientes/clientes.component';
import { FormComponent } from './clientes/form/form.component';
import { DetallesComponent } from './clientes/detalles/detalles.component';
import { LoginComponent } from './usuarios/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/clientes', pathMatch: 'full'  },
  { path: 'directivas', component: DirectivaComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'clientes/form', component: FormComponent },
  { path: 'clientes/form/:id', component: FormComponent },
  { path: 'clientes/page/:page', component: ClientesComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




