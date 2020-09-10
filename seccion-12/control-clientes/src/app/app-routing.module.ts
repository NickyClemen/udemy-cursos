import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TableComponent } from "./componentes/table/table.component";
import { LoginComponent } from "./componentes/login/login.component";
import { RegisterComponent } from "./componentes/register/register.component";
import { ConfigurationComponent } from "./componentes/configuration/configuration.component";
import { EditClientsComponent } from "./componentes/edit-clients/edit-clients.component";
import { NotFoundComponent } from "./componentes/not-found/not-found.component";

const routes: Routes = [
  { path: '', component: TableComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'configuration', component: ConfigurationComponent },
  { path: 'client/edit/:id', component: EditClientsComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
