import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TableComponent } from "./componentes/table/table.component";
import { LoginComponent } from "./componentes/login/login.component";
import { RegisterComponent } from "./componentes/register/register.component";
import { ConfigurationComponent } from "./componentes/configuration/configuration.component";
import { EditClientsComponent } from "./componentes/edit-clients/edit-clients.component";
import { NotFoundComponent } from "./componentes/not-found/not-found.component";
import { AuthGuard } from './guardians/auth.guard';
import { ConfigurationGuard } from './guardians/configuration.guard';

const routes: Routes = [
  { path: '', component: TableComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent, canActivate: [ConfigurationGuard] },
  { path: 'configuration', component: ConfigurationComponent, canActivate: [AuthGuard] },
  { path: 'client/edit/:id', component: EditClientsComponent, canActivate: [AuthGuard] },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
