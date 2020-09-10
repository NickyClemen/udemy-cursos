import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { LOCALE_ID } from "@angular/core";
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import { MatDatepickerModule } from "@angular/material/datepicker";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { ClientesComponent } from './clientes/clientes.component';
import { FormComponent } from './clientes/form/form.component';
import { PaginadorComponent } from './clientes/paginador/paginador.component';

import { ClienteService } from "./services/cliente.service";

import { registerLocaleData } from "@angular/common";
import localeES from "@angular/common/locales/es-AR";
import { DetallesComponent } from './clientes/detalles/detalles.component';
import { LoginComponent } from './usuarios/login/login.component';

registerLocaleData(localeES, 'es'); // Location de la fecha.

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DirectivaComponent,
    ClientesComponent,
    FormComponent,
    PaginadorComponent,
    DetallesComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatDatepickerModule,
    MatMomentDateModule
  ],
  providers: [
    ClienteService,
    { provide: LOCALE_ID, useValue: 'es-AR' }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
